const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: { origin: "*" }, // Cho phép kết nối từ mọi nguồn
});
const path = require("path");
const multer = require("multer");
const fs = require("fs");

// --- 1. CẤU HÌNH ---
const PORT = process.env.PORT || 3000;
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Cấu hình lưu file
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// --- 2. MIDDLEWARE ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve toàn bộ file tĩnh trong thư mục gốc (để chạy được file html ở bất kỳ thư mục con nào)
app.use(express.static(__dirname));
app.use("/uploads", express.static(uploadDir));

// --- 3. DỮ LIỆU PHÒNG (Tạo sẵn để không bị trống) ---
let rooms = {
  room_default_1: {
    id: "room_default_1",
    name: "Sảnh Chung (Community)",
    password: "",
    users: [],
    messages: [],
  },
  room_default_2: {
    id: "room_default_2",
    name: "Hỏi đáp Hóa Học 🧪",
    password: "",
    users: [],
    messages: [],
  },
};

// --- 4. ROUTES & SOCKET ---

// API Upload
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false });
  res.json({
    success: true,
    fileUrl: `/uploads/${req.file.filename}`,
    fileName: req.file.originalname,
    fileType: req.file.mimetype.startsWith("image") ? "image" : "file",
  });
});

io.on("connection", (socket) => {
  console.log(`✅ User kết nối: ${socket.id}`);

  // Gửi danh sách phòng ngay khi user vừa vào
  socket.emit("update_rooms", getRoomList());

  // Tạo phòng mới
  socket.on("create_room", ({ name, password, owner }) => {
    const roomId = "room_" + Date.now();
    rooms[roomId] = {
      id: roomId,
      name: name,
      password: password,
      users: [],
      messages: [],
    };
    console.log(`+ Phòng mới tạo: ${name} bởi ${owner}`);
    io.emit("update_rooms", getRoomList()); // Cập nhật cho TẤT CẢ mọi người
  });

  // Vào phòng
  socket.on("join_room", ({ roomId, password, username }) => {
    const room = rooms[roomId];

    // Kiểm tra phòng và mật khẩu
    if (!room) return socket.emit("error_msg", "Phòng không tồn tại!");
    if (room.password && room.password !== password) {
      return socket.emit("error_msg", "Sai mật khẩu!");
    }

    socket.join(roomId);

    // Thêm user vào danh sách nếu chưa có
    if (!room.users.includes(username)) {
      room.users.push(username);
    }

    // Gửi phản hồi thành công
    socket.emit("join_success", {
      roomId,
      roomName: room.name,
      history: room.messages,
    });

    // Cập nhật lại sĩ số phòng ra ngoài sảnh
    io.emit("update_rooms", getRoomList());

    // Thông báo trong phòng
    io.to(roomId).emit("system_msg", `${username} đã tham gia phòng.`);
  });

  // Chat
  socket.on("send_msg", (data) => {
    const { roomId, username, content, type, fileName } = data;
    if (rooms[roomId]) {
      const msg = {
        username,
        content,
        type: type || "text",
        fileName,
        time: new Date().toLocaleTimeString(),
      };
      rooms[roomId].messages.push(msg);
      io.to(roomId).emit("receive_msg", msg);
    }
  });

  // Rời phòng
  socket.on("leave_room", ({ roomId, username }) => {
    socket.leave(roomId);
    if (rooms[roomId]) {
      rooms[roomId].users = rooms[roomId].users.filter((u) => u !== username);
      io.emit("update_rooms", getRoomList());
      io.to(roomId).emit("system_msg", `${username} đã rời phòng.`);
    }
  });

  socket.on("disconnect", () => {
    console.log(`❌ User ngắt kết nối: ${socket.id}`);
    // Logic xử lý user tự out khỏi phòng có thể thêm ở đây nếu cần
  });
});

// Hàm lấy danh sách phòng rút gọn
function getRoomList() {
  return Object.values(rooms).map((r) => ({
    id: r.id,
    name: r.name,
    isPrivate: !!r.password, // true nếu có pass
    count: r.users.length,
  }));
}

// --- 5. CHẠY SERVER ---
http.listen(PORT, () => {
  console.log(`-----------------------------------------------`);
  console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
  console.log(`📂 Thư mục gốc: ${__dirname}`);
  console.log(`-----------------------------------------------`);
});
