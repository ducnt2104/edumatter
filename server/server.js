const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("sidebar")); // phục vụ file html trong /sidebar

// Lưu avatar vào thư mục uploads/
const upload = multer({ dest: "uploads/" });

/* ============= DATABASE GIẢ ============= */
let user = {
  username: "username123",
  email: "example@gmail.com",
  created: "12/02/2025",
  password: "123456",
  avatar: "default.png",
};

/* ============= API ============= */

// Lấy thông tin tài khoản
app.get("/api/account", (req, res) => {
  res.json(user);
});

// Cập nhật thông tin (username + email)
app.post("/api/update-info", (req, res) => {
  const { username, email } = req.body;

  if (username) user.username = username;
  if (email) user.email = email;

  res.json({ success: true, message: "Cập nhật thành công!" });
});

// Đổi mật khẩu
app.post("/api/change-password", (req, res) => {
  const { oldPass, newPass } = req.body;

  if (!oldPass || !newPass) {
    return res.json({
      success: false,
      message: "Thiếu mật khẩu cũ hoặc mới!",
    });
  }

  if (oldPass !== user.password) {
    return res.json({
      success: false,
      message: "Sai mật khẩu cũ!",
    });
  }

  user.password = newPass;

  res.json({
    success: true,
    message: "Đổi mật khẩu thành công!",
  });
});

// Upload avatar
app.post("/api/avatar", upload.single("avatar"), (req, res) => {
  if (!req.file) {
    return res.json({
      success: false,
      message: "Không tìm thấy file!",
    });
  }

  user.avatar = req.file.filename;

  res.json({
    success: true,
    message: "Avatar đã được cập nhật!",
  });
});

/* ============= RUN SERVER ============= */
app.listen(3000, () => {
  console.log("Server đang chạy tại http://localhost:3000");
});
