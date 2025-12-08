const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const Filter = require("bad-words"); // Thư viện lọc từ xấu
const xss = require("xss"); // Chống hack XSS

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Cấu hình thư mục chứa file giao diện
app.use(express.static("public"));

// Route mặc định trả về file forum.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/chemforum/chemforum.html");
});

// Dữ liệu lưu trữ tạm thời (RAM)
// Lưu ý: Trên Render Free, dữ liệu này sẽ mất khi server khởi động lại.
// Để lưu vĩnh viễn cần kết nối MongoDB (nhưng code này giữ đơn giản cho bạn).
let rooms = {
  general: { name: "⚗️ Phòng Thí Nghiệm Chung", users: [] },
  organic: { name: "🧬 Hóa Hữu Cơ", users: [] },
  inorganic: { name: "💎 Hóa Vô Cơ", users: [] },
};

// Cấu hình bộ lọc từ ngữ (bạn có thể thêm từ tiếng Việt vào list)
const filter = new Filter();
filter.addWords("từ_bậy_1", "từ_bậy_2", "dm", "cl");

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Gửi danh sách phòng hiện có cho người mới
  socket.emit(
    "updateRoomList",
    Object.keys(rooms).map((key) => ({ id: key, name: rooms[key].name }))
  );

  // Xử lý tham gia phòng
  socket.on("joinRoom", ({ username, roomID }) => {
    if (!rooms[roomID]) {
      roomID = "general"; // Mặc định về general nếu phòng không tồn tại
    }

    socket.join(roomID);

    // Lưu thông tin user
    socket.userData = { username, roomID };
    rooms[roomID].users.push(username);

    // Thông báo cho phòng
    io.to(roomID).emit(
      "botMessage",
      `👨‍🔬 ${username} đã bước vào phòng thí nghiệm.`
    );

    // Cập nhật số lượng người (tuỳ chọn)
    io.to(roomID).emit("roomInfo", {
      name: rooms[roomID].name,
      count: rooms[roomID].users.length,
    });
  });

  // Xử lý tin nhắn
  socket.on("chatMessage", (msg) => {
    const user = socket.userData;
    if (!user) return;

    // 1. Kiểm duyệt từ ngữ
    let cleanMsg = filter.clean(msg);

    // 2. Chống XSS (chèn mã độc HTML)
    cleanMsg = xss(cleanMsg);

    io.to(user.roomID).emit("message", {
      username: user.username,
      text: cleanMsg,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  });

  // Xử lý tạo phòng mới
  socket.on("createRoom", (roomName) => {
    // Tạo ID phòng từ tên (bỏ dấu, viết liền)
    const roomID = roomName.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (roomID.length < 3) {
      socket.emit(
        "errorMessage",
        "Tên phòng không hợp lệ (cần ít nhất 3 ký tự)."
      );
      return;
    }

    if (!rooms[roomID]) {
      rooms[roomID] = { name: `🧪 ${roomName}`, users: [] };
      // Phát sự kiện cập nhật danh sách phòng cho TOÀN BỘ server
      io.emit(
        "updateRoomList",
        Object.keys(rooms).map((key) => ({ id: key, name: rooms[key].name }))
      );
      socket.emit("roomCreated", roomID);
    } else {
      socket.emit("errorMessage", "Phòng này đã tồn tại!");
    }
  });

  // Xử lý ngắt kết nối
  socket.on("disconnect", () => {
    const user = socket.userData;
    if (user) {
      const room = rooms[user.roomID];
      if (room) {
        room.users = room.users.filter((u) => u !== user.username);
        io.to(user.roomID).emit("botMessage", `🚪 ${user.username} đã rời đi.`);
      }
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server chạy tại port ${PORT}`));
