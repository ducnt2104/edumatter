const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// Đăng ký
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({ success: true, message: "Đăng ký thành công!" });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Email hoặc tên đã tồn tại" });
  }
});

// Đăng nhập Local
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ success: true, user: req.user });
});

// Đăng nhập Google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/forum"); // Thành công thì vào forum
});

// Đăng xuất
router.get("/logout", (req, res) => {
  req.logout(() => res.json({ success: true }));
});

module.exports = router;
