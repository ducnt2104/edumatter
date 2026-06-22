const path = require("path");
const fs = require("fs");
const http = require("http");
const express = require("express");
const dotenv = require("dotenv");
const { Server } = require("socket.io");
const multer = require("multer");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// --- 1. CẤU HÌNH DOTENV ---
const envPaths = [
  path.join(__dirname, "config/.env"),
  path.join(__dirname, ".env"),
  path.join(__dirname, "../.env"),
];

let foundEnv = false;
for (const envPath of envPaths) {
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    console.log(`📂 Đã load .env tại: ${envPath}`);
    foundEnv = true;
    break;
  }
}
if (!foundEnv) console.log("⚠️ KHÔNG tìm thấy file .env!");

// --- 2. KẾT NỐI DATABASE ---
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/edumatter", {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("✅ Kết nối MongoDB thành công");
  })
  .catch((err) => {
    console.error("❌ Lỗi kết nối DB:", err.message);
  });

// --- 3. MÔ HÌNH DỮ LIỆU ---
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
  password: { type: String, default: "" },
  name: String,
  username: String,
  avatar: { type: String, default: "🎓" },
  phone: String,
  dob: String,
  country: { type: String, default: "VN" },
  city: String,
  school: String,
  source: String,
  createdAt: { type: Date, default: Date.now },
});

const otpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 }, // Tự xóa sau 5 phút
});

const Room = mongoose.model("Room", roomSchema);
const User = mongoose.model("User", userSchema);
const Otp = mongoose.model("Otp", otpSchema);

// Lưu tạm thông tin đăng ký chờ xác nhận OTP (trong RAM)
// Key: email, Value: { ...userData, expiresAt }
const pendingUsers = new Map();

// Hàm Helper: Trả về user không chứa password
const safeUser = (userDoc) => {
  const obj = userDoc.toObject ? userDoc.toObject() : userDoc;
  const { password, ...safe } = obj;
  return safe;
};

// --- 4. CẤU HÌNH SERVER & MIDDLEWARE ---
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

const UPLOAD_DIR = path.join(__dirname, "../uploads");
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });
app.use("/uploads", express.static(UPLOAD_DIR));

const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
  pingTimeout: 60000,
  pingInterval: 25000,
});

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

// Hàm gửi OTP email dùng chung
async function sendOtpEmail(email, otpCode, displayName) {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    await transporter.sendMail({
      from: `"EduMatter Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Mã xác nhận EduMatter: ${otpCode}`,
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 450px; margin: 20px auto; padding: 30px; border-radius: 16px; background-color: #ffffff; border: 1px solid #f0f0f0; box-shadow: 0 10px 25px rgba(0,0,0,0.08); text-align: center;">
          <div style="margin-bottom: 20px;">
            <h2 style="color: #1a1a1a; font-size: 22px; margin: 0;">Mã xác thực OTP</h2>
            <div style="height: 3px; width: 40px; background-color: #007bff; margin: 10px auto; border-radius: 2px;"></div>
          </div>
          <div style="background-color: #fcfcfc; border-radius: 8px; padding: 12px; margin-bottom: 25px; border: 1px solid #eee;">
            <p style="margin: 0; color: #666; font-size: 14px;">Tài khoản yêu cầu:</p>
            <p style="margin: 5px 0 0; color: #333; font-weight: 600; font-size: 16px;">${displayName}</p>
          </div>
          <p style="color: #555; font-size: 15px; margin-bottom: 15px;">Vui lòng sử dụng mã dưới đây để xác thực:</p>
          <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border: 2px solid #dee2e6; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
            <span style="font-size: 36px; font-weight: 800; letter-spacing: 10px; color: #007bff; font-family: 'Courier New', Courier, monospace;">
              ${otpCode}
            </span>
          </div>
          <p style="font-size: 13px; color: #888; line-height: 1.6; margin-bottom: 0;">
            Mã này có hiệu lực trong <b>5 phút</b>.<br>
            Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email.
          </p>
        </div>
      `,
    });
  } else {
    console.log(`[DEV OTP] ${email} -> ${otpCode} (Chưa cấu hình EMAIL_USER)`);
  }
}

// --- 6. API ROUTES ---

// 6.1 Đăng nhập
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Thiếu email hoặc mật khẩu" });

    const user = await User.findOne({ email });
    if (!user || user.password !== password)
      return res
        .status(401)
        .json({ message: "Email hoặc mật khẩu không đúng" });

    res.json({ success: true, user: safeUser(user) });
  } catch (err) {
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
});

// 6.2 Đăng ký
// Chỉ lưu tạm vào RAM + gửi OTP, CHƯA tạo tài khoản trong DB
app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password, phone, dob, country, city, school, source } =
      req.body;

    if (!email || !password || !name)
      return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });

    // Kiểm tra email đã tồn tại trong DB chưa
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(409).json({ message: "Email này đã được đăng ký" });

    // Lưu tạm thông tin, hết hạn sau 10 phút
    pendingUsers.set(email, {
      name,
      email,
      password,
      phone: phone || "",
      dob: dob || "",
      country: country || "VN",
      city: city || "",
      school: school || "",
      source: source || "",
      expiresAt: Date.now() + 10 * 60 * 1000,
    });

    // Tạo và gửi OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    await Otp.deleteMany({ email });
    await new Otp({ email, code: otpCode }).save();

    await sendOtpEmail(email, otpCode, name);

    console.log(`[REGISTER-PENDING] ${name} <${email}>`);
    res.json({
      success: true,
      message: "OTP đã được gửi, vui lòng xác nhận email để hoàn tất đăng ký.",
      _dev_otp: otpCode,
    });
  } catch (err) {
    console.error("Lỗi đăng ký:", err);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
});

// 6.3 Đặt lại mật khẩu
app.post("/api/auth/reset-password", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Thiếu dữ liệu" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Tài khoản không tồn tại" });

    user.password = password;
    await user.save();
    console.log(`[RESET-PW] ${email}`);
    res.json({ success: true, message: "Đặt lại mật khẩu thành công" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
});

// 6.4 Gửi OTP (dùng cho quên mật khẩu)
app.post("/api/auth/send-otp", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Thiếu email" });

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    await Otp.deleteMany({ email });
    await new Otp({ email, code: otpCode }).save();

    const displayName = email.split("@")[0];
    await sendOtpEmail(email, otpCode, displayName);

    res.json({ success: true, message: "OTP đã được gửi!", _dev_otp: otpCode });
  } catch (err) {
    console.error("Lỗi gửi OTP:", err);
    res.status(500).json({ message: "Lỗi gửi mail." });
  }
});

// 6.5 Xác minh OTP
// - Nếu có pending registration → tạo tài khoản mới vào DB
// - Nếu không có pending (quên mật khẩu / login OTP) → chỉ xác nhận user
app.post("/api/auth/verify-otp", async (req, res) => {
  try {
    const { email, code } = req.body;
    if (!email || !code)
      return res.status(400).json({ message: "Thiếu dữ liệu" });

    const validOtp = await Otp.findOne({ email, code });
    if (!validOtp)
      return res.status(400).json({ message: "Mã OTP sai hoặc đã hết hạn" });

    // Xóa OTP sau khi dùng
    await Otp.deleteMany({ email });

    const pending = pendingUsers.get(email);
    let user = await User.findOne({ email });

    if (pending && Date.now() < pending.expiresAt) {
      // Trường hợp 1: OTP để hoàn tất đăng ký
      if (user) {
        // Hiếm gặp: email vừa được tạo giữa chừng → trả về user hiện có
        pendingUsers.delete(email);
        return res.json({ success: true, user: safeUser(user) });
      }

      user = new User({
        email: pending.email,
        password: pending.password,
        name: pending.name,
        username: pending.name,
        avatar: "🎓",
        phone: pending.phone,
        dob: pending.dob,
        country: pending.country,
        city: pending.city,
        school: pending.school,
        source: pending.source,
      });
      await user.save();
      pendingUsers.delete(email);
      console.log(`[REGISTER-CONFIRMED] ${pending.name} <${email}>`);
    } else if (!user) {
      // Trường hợp 2: OTP login nhanh / không có pending → tự tạo user rỗng
      user = new User({
        email,
        username: email.split("@")[0],
        name: email.split("@")[0],
      });
      await user.save();
      console.log(`[AUTO-REGISTER] ${email}`);
    }
    // Trường hợp 3: User đã tồn tại, OTP dùng để reset password → chỉ trả về user

    res.json({ success: true, user: safeUser(user) });
  } catch (err) {
    console.error("Lỗi xác minh OTP:", err);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
});

// --- 7. ROUTES HTML & UPLOAD FILE ---
// app.get("/", (_, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/index.html")),
// );
// app.get("/forum", (_, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/page/forum.html")),
// );
// app.get("/bot", (_, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/page/bot.html")),
// );
// app.get("/chem", (_, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/modules/chem/educhem.html")),
// );
// app.get("/phys", (_, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/modules/phys/eduphys.html")),
// );
// app.get("/biol", (_, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/modules/biol/edubiol.html")),
// );
// app.get("/tech", (_, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/modules/tech/edutech.html")),
// );
// app.get("/alge", (_, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/modules/alge/edualge.html")),
// );
// app.get("/geom", (_, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/modules/geom/edugeom.html")),
// );
// app.get("/oj", (_, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/modules/oj/eduoj.html")),
// );
// app.get("/his", (_, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/modules/his/eduhis.html")),
// );
// // Hóa
// app.get("/chem_verse", (_, res) =>
//   res.sendFile(
//     path.join(__dirname, "../frontend/modules/chem/chemverse/chemverse.html"),
//   ),
// );

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

// --- 8. SOCKET.IO CHAT ROOMS ---
const onlineUsers = new Map();

async function broadcastRooms() {
  try {
    const allRooms = await Room.find({}, "-password -history").lean();
    const roomList = allRooms.map((r) => {
      const roomIdStr = r._id.toString();
      const clientsInRoom = io.sockets.adapter.rooms.get(roomIdStr);
      const count = clientsInRoom ? clientsInRoom.size : 0;
      return {
        id: roomIdStr,
        name: r.name,
        category: r.category,
        className: r.className,
        tags: r.tags,
        isPrivate: !!r.password,
        count,
      };
    });
    io.emit("update_rooms", roomList);
  } catch (err) {
    console.error("❌ Lỗi broadcastRooms:", err.message);
  }
}

io.on("connection", (socket) => {
  socket.on("get_initial_rooms", broadcastRooms);

  socket.on("create_room", async (data, callback) => {
    try {
      if (!data.name)
        return callback?.({ success: false, message: "Tên phòng trống" });

      const newRoom = new Room({
        name: data.name,
        password: data.password || "",
        owner: data.username || "Ẩn danh",
        category: data.category || "general",
        className: data.className || "",
        tags: data.tags || [],
        history: [],
      });

      await newRoom.save();
      const roomIdStr = newRoom._id.toString();

      socket.join(roomIdStr);
      onlineUsers.set(socket.id, {
        username: data.username || "Ẩn danh",
        avatar: data.avatar || "🎓",
        roomId: roomIdStr,
      });

      if (typeof callback === "function")
        callback({ success: true, room: newRoom });
      broadcastRooms();
    } catch (err) {
      console.error("❌ Lỗi create_room:", err.message);
      if (typeof callback === "function")
        callback({ success: false, message: "Lỗi tạo phòng" });
    }
  });

  socket.on("join_room", async (data, callback) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(data.roomId))
        return callback?.({ success: false, message: "ID Phòng không hợp lệ" });

      const room = await Room.findById(data.roomId);
      if (!room)
        return callback?.({ success: false, message: "Phòng đã bị xóa" });
      if (room.password && room.password !== data.password)
        return callback?.({ success: false, message: "Sai mật khẩu" });

      const roomIdStr = room._id.toString();
      const currentUser = onlineUsers.get(socket.id);

      if (currentUser && currentUser.roomId) {
        socket.leave(currentUser.roomId);
        socket
          .to(currentUser.roomId)
          .emit("system_msg", `🚪 ${currentUser.username} đã rời đi.`);
      }

      socket.join(roomIdStr);
      onlineUsers.set(socket.id, {
        username: data.username || "Ẩn danh",
        avatar: data.avatar || "🎓",
        roomId: roomIdStr,
      });

      const usersInRoom = [...onlineUsers.values()].filter(
        (u) => u.roomId === roomIdStr,
      );

      socket.emit("join_success", {
        roomId: roomIdStr,
        roomName: room.name,
        history: room.history,
        users: usersInRoom,
      });

      socket
        .to(roomIdStr)
        .emit("system_msg", `👋 ${data.username} đã vào lớp.`);
      io.to(roomIdStr).emit("room_users", usersInRoom);

      broadcastRooms();
      if (typeof callback === "function") callback({ success: true });
    } catch (err) {
      console.error("❌ Lỗi join_room:", err.message);
      if (typeof callback === "function")
        callback({ success: false, message: "Lỗi hệ thống" });
    }
  });

  socket.on("send_msg", async (data) => {
    try {
      if (!data.roomId || !mongoose.Types.ObjectId.isValid(data.roomId)) return;

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
      console.error("❌ Lỗi send_msg:", err.message);
    }
  });

  socket.on("disconnect", () => {
    try {
      const user = onlineUsers.get(socket.id);
      if (user) {
        socket
          .to(user.roomId)
          .emit("system_msg", `🚪 ${user.username} đã ngắt kết nối.`);
        onlineUsers.delete(socket.id);
        broadcastRooms();
      }
    } catch (error) {
      console.error("❌ Lỗi disconnect:", error.message);
    }
  });
});

// --- 9. KHỞI ĐỘNG SERVER ---
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`\n🚀 EduMatter Server đang chạy tại: http://localhost:${PORT}`);
});
