// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Sẽ được băm (hash)
  progress: { type: Object, default: {} }, // Lưu tiến độ học tập EduMatter
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
