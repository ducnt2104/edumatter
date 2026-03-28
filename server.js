require('dotenv').config(); // <--- THÊM PHẦN NÀY LÊN DÒNG ĐẦU TIÊN
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// <--- THÊM PHẦN NÀY CỰC KỲ QUAN TRỌNG: Để server đọc được dữ liệu JSON từ chembot.js gửi lên
app.use(express.json()); 

// --- CẤU HÌNH PHỤC VỤ FILE TĨNH (CHUNG MÂM VỚI INDEX) ---
app.use(express.static(__dirname)); 

// --- CẤU HÌNH UPLOAD FILE BẰNG MULTER ---
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) return res.status(400).json({ success: false });
    
    const isImage = req.file.mimetype.startsWith('image/');
    res.json({
        success: true,
        fileType: isImage ? 'image' : 'file',
        fileUrl: '/uploads/' + req.file.filename,
        fileName: req.file.originalname
    });
});

// =====================================================================
// <--- THÊM PHẦN NÀY: API ĐỂ CHEMBOT.JS GỌI LÊN (BẢO MẬT API KEY) --->
// =====================================================================
app.post('/api/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        const base64Image = req.body.image; 
        
        // Lấy key bí mật từ file .env (khi chạy local) hoặc từ Environment của Render
        const apiKey = process.env.API_KEY; 

        // --- ĐOẠN NÀY LÀ LOGIC GỌI TỚI SERVER CỦA AI ---
        // (Tạm thời tui để mock data, lát bạn nói xài AI nào tui viết code thật cho)
        console.log("Chembot nhận được câu hỏi:", userMessage);
        
        const aiReply = "Đây là câu trả lời thử nghiệm từ Server. Hãy ráp logic gọi API thật vào đây!";
        
        // Trả kết quả về cho chembot.js
        res.json({ reply: aiReply });

    } catch (error) {
        console.error("Lỗi AI:", error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi gọi AI' });
    }
});
// =====================================================================


// --- LƯU TRỮ DATA TRÊN RAM (Không cần Database) ---
let rooms = []; 

function getPublicRooms() {
    return rooms.map(r => ({
        id: r.id,
        name: r.name,
        isPrivate: !!r.password,
        count: r.users.length
    }));
}

// --- XỬ LÝ SOCKET.IO ---
// (TOÀN BỘ PHẦN NÀY CỦA BẠN GIỮ NGUYÊN KHÔNG ĐỔI 1 CHỮ NÀO)
io.on('connection', (socket) => {
    console.log('⚡ Một người dùng vừa kết nối:', socket.id);

    socket.on('get_initial_rooms', () => {
        socket.emit('update_rooms', getPublicRooms());
    });

    socket.on('create_room', (data) => {
        const newRoom = {
            id: crypto.randomBytes(4).toString('hex'),
            name: data.name,
            password: data.password || '',
            owner: data.owner,
            users: [],
            history: [] 
        };
        rooms.push(newRoom);
        io.emit('update_rooms', getPublicRooms()); 
    });

    socket.on('join_room', (data) => {
        const room = rooms.find(r => r.id === data.roomId);
        if (!room) {
            return socket.emit('error_msg', 'Phòng không tồn tại hoặc đã bị xóa!');
        }
        if (room.password && room.password !== data.password) {
            return socket.emit('error_msg', 'Sai mật khẩu!');
        }

        socket.join(room.id);
        room.users.push({ id: socket.id, username: data.username });

        socket.emit('join_success', {
            roomId: room.id,
            roomName: room.name,
            history: room.history
        });

        socket.to(room.id).emit('system_msg', `👋 ${data.username} đã tham gia phòng.`);
        io.emit('update_rooms', getPublicRooms());
    });

    socket.on('send_msg', (data) => {
        const room = rooms.find(r => r.id === data.roomId);
        if (room) {
            const msg = {
                username: data.username,
                content: data.content,
                type: data.type,
                fileName: data.fileName
            };
            
            room.history.push(msg);
            if (room.history.length > 50) room.history.shift();
            io.to(room.id).emit('receive_msg', msg);
        }
    });

    socket.on('leave_room', (data) => {
        handleLeaveRoom(socket, data.roomId, data.username);
    });

    socket.on('disconnect', () => {
        console.log('❌ Người dùng ngắt kết nối:', socket.id);
        rooms.forEach(room => {
            const userIndex = room.users.findIndex(u => u.id === socket.id);
            if (userIndex !== -1) {
                const username = room.users[userIndex].username;
                handleLeaveRoom(socket, room.id, username);
            }
        });
    });
});

function handleLeaveRoom(socket, roomId, username) {
    const room = rooms.find(r => r.id === roomId);
    if (room) {
        socket.leave(roomId);
        room.users = room.users.filter(u => u.id !== socket.id);
        io.to(roomId).emit('system_msg', `🚪 ${username} đã rời phòng.`);

        if (room.users.length === 0) {
            rooms = rooms.filter(r => r.id !== roomId);
        }
        io.emit('update_rooms', getPublicRooms());
    }
}

// --- KHỞI ĐỘNG SERVER ---
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});