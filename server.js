const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Cho phép truy cập từ mọi nguồn (dễ test)
  },
});

// --- CẤU HÌNH UPLOAD FILE (MULTER) ---
// Tạo thư mục uploads nếu chưa có
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Giữ nguyên tên gốc + timestamp để tránh trùng
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// --- CẤU HÌNH SERVER & ROUTE ---
app.use(express.static(__dirname)); // Phục vụ file tĩnh trong chemforum
app.use("/uploads", express.static(uploadDir)); // Cho phép truy cập file đã upload

// 1. Route trang chủ (index.html ở thư mục cha educhem)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// 2. Route vào forum (chemforum.html ở cùng thư mục)
app.get("/forum", (req, res) => {
  res.sendFile(path.join(__dirname, "chemforum.html"));
});

// 3. API Upload File
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false });
  }

  // Xác định loại file để hiển thị icon/ảnh
  const fileType = req.file.mimetype.startsWith("image/") ? "image" : "file";

  res.json({
    success: true,
    fileUrl: `/uploads/${req.file.filename}`,
    fileName: req.file.originalname,
    fileType: fileType,
  });
});

// --- DỮ LIỆU TẠM THỜI (Lưu trên RAM) ---
// Cấu trúc: { roomId: { id, name, password, owner, users: [], messages: [] } }
let rooms = {};

// --- XỬ LÝ SOCKET.IO ---
io.on("connection", (socket) => {
  console.log("⚡ Có người kết nối:", socket.id);

  // Hàm tiện ích: Gửi danh sách phòng cho TẤT CẢ mọi người
  const broadcastRooms = () => {
    const roomList = Object.values(rooms).map((r) => ({
      id: r.id,
      name: r.name,
      isPrivate: !!r.password, // Chỉ báo là có pass hay không
      count: r.users.length,
    }));
    io.emit("update_rooms", roomList);
  };

  // 1. Lấy danh sách phòng khi mới vào
  socket.on("get_initial_rooms", () => {
    broadcastRooms();
  });

  // 2. TẠO PHÒNG MỚI (Khắc phục lỗi của bạn tại đây)
  socket.on("create_room", ({ name, password, owner }) => {
    const roomId = "room_" + Date.now(); // Tạo ID duy nhất

    rooms[roomId] = {
      id: roomId,
      name: name,
      password: password, // Lưu pass (rỗng nếu công khai)
      owner: owner,
      users: [],
      messages: [],
    };

    console.log(`+ Phòng mới: ${name} (ID: ${roomId}) bởi ${owner}`);
    broadcastRooms(); // Cập nhật danh sách cho toàn server
  });

  // 3. VÀO PHÒNG
  socket.on("join_room", ({ roomId, password, username }) => {
    const room = rooms[roomId];

    if (!room) {
      socket.emit("error_msg", "Phòng không tồn tại!");
      return;
    }

    // Kiểm tra mật khẩu
    if (room.password && room.password !== password) {
      socket.emit("error_msg", "Sai mật khẩu rồi bạn ơi!");
      return;
    }

    // Join socket vào room
    socket.join(roomId);

    // Lưu thông tin user
    room.users.push({ id: socket.id, username });
    socket.data.username = username; // Lưu tạm vào socket để dùng khi disconnect
    socket.data.currentRoom = roomId;

    // Gửi thông tin thành công cho người vào
    socket.emit("join_success", {
      roomId: room.id,
      roomName: room.name,
      history: room.messages, // Gửi lại lịch sử chat
    });

    // Thông báo cho phòng biết có người mới
    io.to(roomId).emit("system_msg", `👋 ${username} đã tham gia phòng.`);

    // Cập nhật lại sĩ số phòng ngoài sảnh
    broadcastRooms();
  });

  // 4. CHAT & GỬI FILE
  socket.on("send_msg", (data) => {
    const room = rooms[data.roomId];
    if (room) {
      // Lưu vào lịch sử
      room.messages.push(data);
      // Gửi cho tất cả người trong phòng (kể cả người gửi)
      io.to(data.roomId).emit("receive_msg", data);
    }
  });

  // 5. RỜI PHÒNG
  socket.on("leave_room", ({ roomId, username }) => {
    leaveRoomHandler(socket, roomId, username);
  });

  // 6. NGẮT KẾT NỐI (Tắt tab)
  socket.on("disconnect", () => {
    if (socket.data.currentRoom) {
      leaveRoomHandler(socket, socket.data.currentRoom, socket.data.username);
    }
    console.log("👋 Ai đó đã ngắt kết nối:", socket.id);
  });

  // Hàm xử lý rời phòng chung
  const leaveRoomHandler = (socket, roomId, username) => {
    const room = rooms[roomId];
    if (room) {
      // Lọc user ra khỏi danh sách
      room.users = room.users.filter((u) => u.id !== socket.id);
      socket.leave(roomId);

      io.to(roomId).emit(
        "system_msg",
        `🏃 ${username || "Ai đó"} đã rời phòng.`
      );

      // Nếu phòng trống thì xóa luôn cho nhẹ server
      if (room.users.length === 0) {
        delete rooms[roomId];
      }

      broadcastRooms();
    }
  };
});

// Chạy server tại port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`----------------------------------------`);
  console.log(`✅ EduChem Server đang chạy!`);
  console.log(`👉 Trang chủ: http://localhost:${PORT}/`);
  console.log(`👉 Forum:     http://localhost:${PORT}/forum`);
  console.log(`----------------------------------------`);
});
