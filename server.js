const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use("/uploads", express.static(uploadDir));
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
  socket.emit("update_rooms", getRoomList());
  socket.on("get_initial_rooms", () => {
    socket.emit("update_rooms", getRoomList());
  });
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
    io.emit("update_rooms", getRoomList());
  });
  socket.on("join_room", ({ roomId, password, username }) => {
    const room = rooms[roomId];
    if (!room) return socket.emit("error_msg", "Phòng không tồn tại!");
    if (room.password && room.password !== password) {
      return socket.emit("error_msg", "Sai mật khẩu!");
    }
    socket.join(roomId);
    if (!room.users.includes(username)) {
      room.users.push(username);
    }
    socket.emit("join_success", {
      roomId,
      roomName: room.name,
      history: room.messages,
    });
    io.emit("update_rooms", getRoomList());
    io.to(roomId).emit("system_msg", `${username} đã tham gia phòng.`);
  });
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
  });
});
function getRoomList() {
  return Object.values(rooms).map((r) => ({
    id: r.id,
    name: r.name,
    isPrivate: !!r.password,
    count: r.users.length,
  }));
}
http.listen(PORT, () => {
  console.log(`-----------------------------------------------`);
  console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
  console.log(`📂 Thư mục gốc: ${__dirname}`);
  console.log(`-----------------------------------------------`);
});
