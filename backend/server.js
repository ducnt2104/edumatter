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

// --- 1. CẤU HÌNH DOTENV (TÌM FILE .ENV) ---
const envPaths = [
  path.join(__dirname, "config/.env"),
  path.join(__dirname, ".env"),
  path.join(__dirname, "../.env"),
];

let foundEnv = false;
for (const envPath of envPaths) {
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    console.log(`📂 Đã tìm thấy .env tại: ${envPath}`);
    foundEnv = true;
    break;
  }
}

if (!foundEnv) console.log("⚠️ CẢNH BÁO: Không tìm thấy file .env!");

console.log("🔍 Kiểm tra biến môi trường:");
console.log(
  "- EMAIL_USER:",
  process.env.EMAIL_USER ? "Đã nhận ✅" : "TRỐNG ❌",
);
console.log(
  "- EMAIL_PASS:",
  process.env.EMAIL_PASS ? "Đã nhận ✅" : "TRỐNG ❌",
);

// --- 2. KẾT NỐI DATABASE ---
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/edumatter")
  .then(() => console.log("✅ Kết nối MongoDB thành công"))
  .catch((err) => console.error("❌ Lỗi kết nối DB:", err));

// --- 3. MÔ HÌNH DỮ LIỆU (SCHEMAS) ---
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

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: String,
  avatar: { type: String, default: "🎓" },
  createdAt: { type: Date, default: Date.now },
});

const otpSchema = new mongoose.Schema({
  email: String,
  code: String,
  createdAt: { type: Date, default: Date.now, expires: 300 },
});

const Room = mongoose.model("Room", roomSchema);
const User = mongoose.model("User", userSchema);
const Otp = mongoose.model("Otp", otpSchema);

// --- 4. CẤU HÌNH SERVER & MIDDLEWARE ---
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

const genAI = process.env.API_KEY
  ? new GoogleGenerativeAI(process.env.API_KEY)
  : null;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

const UPLOAD_DIR = path.join(__dirname, "../uploads");
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}
app.use("/uploads", express.static(UPLOAD_DIR));

// --- 5. CẤU HÌNH EMAIL ---
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.log("❌ Lỗi cấu hình Email: " + error.message);
  } else {
    console.log("✅ Email đã sẵn sàng gửi OTP!");
  }
});

// --- 6. API ROUTES ---
app.post("/api/auth/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Thiếu email" });
  try {
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    await Otp.deleteMany({ email });
    await new Otp({ email, code: otpCode }).save();

    const mailOptions = {
      from: `"EduMatter Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Mã xác nhận EduMatter: ${otpCode}`,
      html: `
        <div style="font-family:sans-serif;padding:20px;border:1px solid #ddd;border-radius:10px;max-width:400px;">
          <h2 style="color:#4f46e5;text-align:center;">Xác thực EduMatter</h2>
          <p>Mã OTP của bạn là:</p>
          <div style="background:#f3f4f6;padding:15px;text-align:center;font-size:32px;font-weight:bold;letter-spacing:5px;color:#4f46e5;border-radius:8px;">
            ${otpCode}
          </div>
          <p style="font-size:12px;color:#666;margin-top:15px;">Mã có hiệu lực trong 5 phút.</p>
        </div>`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "OTP đã được gửi!" });
  } catch (err) {
    console.error("Lỗi gửi mail:", err);
    res.status(500).json({ message: "Lỗi gửi mail. Kiểm tra App Password." });
  }
});

app.post("/api/auth/verify-otp", async (req, res) => {
  const { email, code } = req.body;
  try {
    const validOtp = await Otp.findOne({ email, code });
    if (!validOtp)
      return res.status(400).json({ message: "Mã OTP sai hoặc hết hạn" });

    await Otp.deleteMany({ email });
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, username: email.split("@")[0] });
      await user.save();
    }
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
});

// Routes điều hướng trang
app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "../frontend/index.html")),
);
app.get("/forum", (_, res) =>
  res.sendFile(path.join(__dirname, "../frontend/page/forum.html")),
);
app.get("/bot", (_, res) =>
  res.sendFile(path.join(__dirname, "../frontend/page/bot.html")),
);

// API Upload file
const upload = multer({
  storage: multer.diskStorage({
    destination: (_, __, cb) => cb(null, UPLOAD_DIR),
    filename: (_, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
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

// --- 7. SOCKET.IO (CHAT & ROOMS) ---
const onlineUsers = new Map();

async function broadcastRooms() {
  try {
    const allRooms = await Room.find({}, "-password -history");
    const roomList = allRooms.map((r) => ({
      id: r._id,
      name: r.name,
      category: r.category,
      className: r.className,
      tags: r.tags,
      isPrivate: !!r.password,
      count: [...onlineUsers.values()].filter(
        (u) => u.roomId === r._id.toString(),
      ).length,
    }));
    io.emit("update_rooms", roomList);
  } catch (err) {
    console.error("Lỗi cập nhật phòng:", err);
  }
}

io.on("connection", (socket) => {
  // --- THÊM ĐOẠN NÀY ĐỂ TẠO PHÒNG ---
  socket.on("create_room", async (data) => {
    try {
      const newRoom = new Room({
        name: data.name,
        password: data.password || "",
        owner: data.owner,
        category: data.category || "general",
        className: data.className || "",
        tags: data.tags || [],
        history: [],
      });

      await newRoom.save();
      console.log(`✨ Phòng mới được tạo: ${data.name}`);

      // Gửi phản hồi lại cho người tạo thành công
      socket.emit("create_room_success", { roomId: newRoom._id });

      // Cập nhật lại danh sách phòng cho tất cả mọi người
      await broadcastRooms();
    } catch (err) {
      console.error("Lỗi khi tạo phòng:", err);
      socket.emit("error_msg", "Không thể tạo phòng. Vui lòng thử lại!");
    }
  });
  socket.on("get_initial_rooms", broadcastRooms);

  socket.on("join_room", async (data) => {
    try {
      const room = await Room.findById(data.roomId);
      if (!room) return;
      const roomIdStr = room._id.toString();
      socket.join(roomIdStr);
      onlineUsers.set(socket.id, {
        username: data.username,
        avatar: data.avatar,
        roomId: roomIdStr,
      });

      socket.emit("join_success", {
        roomId: room._id,
        roomName: room.name,
        history: room.history,
        users: [...onlineUsers.values()].filter((u) => u.roomId === roomIdStr),
      });

      socket
        .to(roomIdStr)
        .emit("system_msg", `👋 ${data.username} đã vào lớp.`);
      io.to(roomIdStr).emit(
        "room_users",
        [...onlineUsers.values()].filter((u) => u.roomId === roomIdStr),
      );
      broadcastRooms();
    } catch (err) {
      console.error(err);
    }
  });

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
      io.to(data.roomId.toString()).emit("receive_msg", {
        ...msg,
        roomId: data.roomId,
      });
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

// --- 8. CHẠY SERVER ---
const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`🚀 Server EduMatter: http://localhost:${PORT}`),
);
