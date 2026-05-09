const path = require("path");
const fs = require("fs");
const http = require("http");
const express = require("express");
const dotenv = require("dotenv");
const { Server } = require("socket.io");
const multer = require("multer");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// --- 1. CẤU HÌNH BIẾN MÔI TRƯỜNG ---
// Tối ưu: Chỉ cần dotenv.config() là đủ cho Render, thêm đường dẫn phụ cho Local
dotenv.config();
const envPaths = [
  path.join(__dirname, "config/.env"),
  path.join(__dirname, ".env"),
];
envPaths.forEach((p) => {
  if (fs.existsSync(p)) dotenv.config({ path: p });
});

console.log(`🔍 Khởi động hệ thống EDUMATTER...`);

// --- 2. KẾT NỐI DATABASE ---
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/edumatter";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB: Connected"))
  .catch((err) => console.error("❌ MongoDB: Connection Error:", err));

// --- 3. SCHEMAS (MÔ HÌNH DỮ LIỆU) ---
const messageSchema = new mongoose.Schema({
  username: String,
  avatar: String,
  content: String,
  type: { type: String, default: "text" },
  fileUrl: String,
  fileName: String,
  time: String,
  ts: { type: Date, default: Date.now },
});

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, default: "" },
  owner: String,
  category: { type: String, default: "general" },
  className: String,
  tags: [String],
  history: [messageSchema],
});

const Room = mongoose.model("Room", roomSchema);
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: String,
    avatar: { type: String, default: "🎓" },
    createdAt: { type: Date, default: Date.now },
  }),
);
const Otp = mongoose.model(
  "Otp",
  new mongoose.Schema({
    email: String,
    code: String,
    createdAt: { type: Date, default: Date.now, expires: 300 },
  }),
);

// --- 4. CẤU HÌNH SERVER ---
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// Quản lý Uploads
const UPLOAD_DIR = path.join(__dirname, "../uploads");
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });
app.use("/uploads", express.static(UPLOAD_DIR));

// Cấu hình Email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

// --- 5. API ROUTES ---

// Gửi OTP
app.post("/api/auth/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Thiếu email" });
  try {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    await Otp.findOneAndUpdate({ email }, { code }, { upsert: true });

    await transporter.sendMail({
      from: `"EduMatter Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Mã xác nhận: ${code}`,
      html: `<div style="text-align:center; font-family: sans-serif;">
               <h2>Xác thực EduMatter</h2>
               <h1 style="color:#4f46e5;">${code}</h1>
               <p>Mã có hiệu lực trong 5 phút.</p>
             </div>`,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Lỗi gửi mail." });
  }
});

// Xác nhận OTP
app.post("/api/auth/verify-otp", async (req, res) => {
  const { email, code } = req.body;
  try {
    const valid = await Otp.findOneAndDelete({ email, code });
    if (!valid) return res.status(400).json({ message: "Mã sai hoặc hết hạn" });

    let user = await User.findOne({ email });
    if (!user)
      user = await new User({ email, username: email.split("@")[0] }).save();
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
});

// File Upload
const upload = multer({
  storage: multer.diskStorage({
    destination: UPLOAD_DIR,
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
  }),
});

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false });
  res.json({
    success: true,
    fileType: req.file.mimetype.startsWith("image/") ? "image" : "file",
    fileUrl: "/uploads/" + req.file.filename,
    fileName: req.file.originalname,
  });
});

// --- 6. SOCKET.IO (LOGIC CHÍNH) ---
const onlineUsers = new Map();

async function broadcastRooms() {
  const allRooms = await Room.find({}, "-password -history");
  const roomList = allRooms.map((r) => ({
    id: r._id,
    name: r.name,
    category: r.category,
    className: r.className,
    tags: r.tags,
    isPrivate: !!r.password,
    count: Array.from(onlineUsers.values()).filter(
      (u) => u.roomId === r._id.toString(),
    ).length,
  }));
  io.emit("update_rooms", roomList);
}

io.on("connection", (socket) => {
  socket.on("get_initial_rooms", broadcastRooms);

  // Tạo phòng (Đã sửa lỗi đồng bộ)
  socket.on("create_room", async (data) => {
    try {
      if (!data.name) throw new Error("Tên phòng không được để trống");
      const newRoom = new Room({ ...data, history: [] });
      await newRoom.save();

      socket.emit("create_room_success", { roomId: newRoom._id });
      await broadcastRooms();
    } catch (err) {
      socket.emit("error_msg", err.message);
    }
  });

  // Vào phòng
  socket.on("join_room", async (data) => {
    try {
      const room = await Room.findById(data.roomId);
      if (!room) return;

      const roomIdStr = room._id.toString();
      socket.join(roomIdStr);
      onlineUsers.set(socket.id, { ...data, roomId: roomIdStr });

      socket.emit("join_success", {
        roomId: room._id,
        roomName: room.name,
        history: room.history,
        users: Array.from(onlineUsers.values()).filter(
          (u) => u.roomId === roomIdStr,
        ),
      });

      socket
        .to(roomIdStr)
        .emit("system_msg", `👋 ${data.username} đã vào lớp.`);
      io.to(roomIdStr).emit(
        "room_users",
        Array.from(onlineUsers.values()).filter((u) => u.roomId === roomIdStr),
      );
      broadcastRooms();
    } catch (err) {
      console.error(err);
    }
  });

  // Gửi tin nhắn
  socket.on("send_msg", async (data) => {
    try {
      const msg = {
        username: data.username,
        avatar: data.avatar || "🎓",
        content: data.content || "",
        type: data.type || "text",
        fileUrl: data.fileUrl || "",
        fileName: data.fileName || "",
        time: new Date().toLocaleTimeString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        ts: new Date(),
      };
      await Room.findByIdAndUpdate(data.roomId, {
        $push: { history: { $each: [msg], $slice: -100 } },
      });
      io.to(data.roomId).emit("receive_msg", { ...msg, roomId: data.roomId });
    } catch (err) {
      console.error(err);
    }
  });

  socket.on("disconnect", () => {
    const user = onlineUsers.get(socket.id);
    if (user) {
      socket
        .to(user.roomId)
        .emit("system_msg", `🚪 ${user.username} đã rời lớp.`);
      onlineUsers.delete(socket.id);
      broadcastRooms();
    }
  });
});

// Chạy Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`🚀 EDUMATTER LIVE: http://localhost:${PORT}`),
);
