// trade.js - SERVER
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// === CẤU HÌNH ===
// Mật khẩu Admin để duyệt bài (Bạn hãy đổi pass này nhé)
const ADMIN_PASSWORD = "ducnt_2104";

// Thư mục lưu dữ liệu
// Trên Render: Nếu dùng Disk, hãy mount vào /var/data
// Nếu chạy local máy tính: nó sẽ lưu ở thư mục hiện tại
const DATA_DIR = process.env.RENDER ? "/var/data" : ".";
const UPLOAD_FOLDER = path.join(DATA_DIR, "uploads");
const DB_FILE = path.join(DATA_DIR, "trade.json");

// Tạo thư mục nếu chưa có
if (!fs.existsSync(UPLOAD_FOLDER))
  fs.mkdirSync(UPLOAD_FOLDER, { recursive: true });
if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, "[]");

// Cấu hình Multer (Upload file)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_FOLDER),
  filename: (req, file, cb) => {
    // Đặt tên file: thời gian - tên gốc (để tránh trùng)
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.static(__dirname)); // Phục vụ file trade.html cùng cấp
app.use("/files", express.static(UPLOAD_FOLDER)); // Phục vụ file tài liệu để tải về

// === ROUTES (ĐƯỜNG DẪN) ===

// 1. Trang chủ
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "trade/trade.html"));
});

// 2. API: Lấy danh sách tài liệu
app.get("/api/list", (req, res) => {
  const isAdmin = req.query.admin === ADMIN_PASSWORD;
  const db = JSON.parse(fs.readFileSync(DB_FILE, "utf8"));

  // Nếu là Admin: xem hết. Nếu là khách: chỉ xem file đã duyệt (approved: true)
  const data = isAdmin ? db : db.filter((item) => item.approved === true);
  res.json(data);
});

// 3. API: Upload tài liệu
app.post("/api/upload", upload.single("taiLieu"), (req, res) => {
  if (!req.file) return res.status(400).send("Chưa chọn file!");

  const db = JSON.parse(fs.readFileSync(DB_FILE, "utf8"));

  const newItem = {
    id: Date.now(),
    name: req.body.tenHienThi || req.file.originalname,
    filename: req.file.filename,
    uploader: req.body.nguoiDang || "Ẩn danh",
    date: new Date().toLocaleString(),
    approved: false, // Mặc định chưa duyệt
  };

  db.push(newItem);
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));

  res.redirect("/?msg=upload_success");
});

// 4. API: Admin Duyệt hoặc Xóa bài
app.post("/api/moderate", (req, res) => {
  const { id, action, password } = req.body;

  if (password !== ADMIN_PASSWORD)
    return res.json({ success: false, msg: "Sai mật khẩu Admin!" });

  let db = JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
  const index = db.findIndex((item) => item.id == id);

  if (index === -1)
    return res.json({ success: false, msg: "Không tìm thấy file" });

  if (action === "approve") {
    db[index].approved = true;
  } else if (action === "delete") {
    // Xóa file vật lý
    const filePath = path.join(UPLOAD_FOLDER, db[index].filename);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    // Xóa trong db
    db.splice(index, 1);
  }

  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`Server chạy tại port ${PORT}`));
