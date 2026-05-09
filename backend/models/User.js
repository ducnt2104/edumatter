const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Không bắt buộc nếu dùng Google/FB
  avatar: { type: String, default: "🎓" },
  googleId: { type: String }, // Để đăng nhập bằng Google
  facebookId: { type: String }, // Để đăng nhập bằng FB
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
