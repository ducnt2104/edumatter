const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer"); // Dùng để upload file/ảnh
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http); // Dùng cho chat real-time

// 1. Cấu hình cơ bản
app.use(express.json());
app.use(express.static("public")); // Cho phép truy cập folder public

// 2. Kết nối Database (MongoDB Atlas - Bạn cần tạo tài khoản free)
// Thay chuỗi kết nối bên dưới bằng link MongoDB của bạn
mongoose
  .connect(
    "mongodb+srv://<username>:<password>@cluster.mongodb.net/edumatter?retryWrites=true&w=majority"
  )
  .then(() => console.log("Đã kết nối MongoDB"))
  .catch((err) => console.error("Lỗi kết nối DB:", err));

// 3. Cấu hình Upload file (cho Chemforum)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage: storage });

// --- CÁC ROUTE XỬ LÝ (API) ---

// A. Route cho trang chủ
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// B. API cho Edutrade (Đăng ký/Đăng nhập)
// Đây là ví dụ đơn giản, thực tế cần mã hóa mật khẩu
const UserSchema = new mongoose.Schema({ username: String, pass: String });
const User = mongoose.model("User", UserSchema);

app.post("/api/register", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json({ success: true, message: "Tạo tài khoản thành công!" });
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
    pass: req.body.pass,
  });
  if (user) res.json({ success: true, user });
  else res.json({ success: false, message: "Sai thông tin!" });
});

// C. API cho Chemforum (Upload file/ảnh)
app.post("/api/chemforum/upload", upload.single("file"), (req, res) => {
  res.json({
    message: "Upload thành công",
    filePath: `/uploads/${req.file.filename}`,
  });
});

// D. Xử lý Chat Real-time (Socket.io)
io.on("connection", (socket) => {
  console.log("Một học sinh đã vào Chemforum");

  socket.on("chat message", (msg) => {
    // Gửi tin nhắn cho tất cả mọi người trong forum
    io.emit("chat message", msg);
  });
});

// 4. Khởi chạy Server
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
