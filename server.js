require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const { GoogleGenerativeAI } = require('@google/generative-ai'); 

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware đọc JSON
app.use(express.json()); 

// Phục vụ file tĩnh
app.use(express.static(__dirname)); 

// Cấu hình Upload
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

// Route Upload file
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
// AI CHAT API (EDUBOT CORE)
// =====================================================================
app.post('/api/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        const base64Image = req.body.image; 
        const apiKey = process.env.API_KEY; 

        if (!apiKey) return res.status(500).json({ error: 'Thiếu API_KEY' });

        const genAI = new GoogleGenerativeAI(apiKey);
        const systemInstruction = `Bạn là EduBot – AI đại diện cho nền tảng khoa học EduMatter. 
        Tone giọng: Lạnh lùng, thông minh, chuẩn xác, mang hơi hướng tương lai. 
        Nhiệm vụ: Phân tích EduMatter, Hóa học, STEM. Format: Bullet points, code blocks cho công thức.`;

        const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: {
        role: "system",
        parts: [{ text: systemInstruction }]
    }
});

        console.log("⚡ EduBot đang phân tích dữ liệu...");

        let result;
        if (base64Image) {
            const parts = base64Image.split(';base64,');
            const mimeType = parts[0].split(':')[1];
            const base64Data = parts[1];
            const imagePart = { inlineData: { data: base64Data, mimeType: mimeType } };
            result = await model.generateContent([userMessage, imagePart]);
        } else {
            result = await model.generateContent(userMessage);
        }
        
        res.json({ reply: result.response.text() });
    } catch (error) {
        console.error("❌ Lỗi AI:", error);
        res.status(500).json({ reply: "⚠️ Lỗi kết nối module AI." });
    }
});

// --- PHÒNG CHAT (SOCKET.IO) ---
let rooms = []; 

function getPublicRooms() {
    return rooms.map(r => ({
        id: r.id,
        name: r.name,
        isPrivate: !!r.password,
        count: r.users.length
    }));
}

io.on('connection', (socket) => {
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
        if (!room) return socket.emit('error_msg', 'Phòng không tồn tại!');
        if (room.password && room.password !== data.password) return socket.emit('error_msg', 'Sai mật khẩu!');

        socket.join(room.id);
        room.users.push({ id: socket.id, username: data.username });
        socket.emit('join_success', { roomId: room.id, roomName: room.name, history: room.history });
        socket.to(room.id).emit('system_msg', `👋 ${data.username} đã tham gia.`);
        io.emit('update_rooms', getPublicRooms());
    });

    socket.on('send_msg', (data) => {
        const room = rooms.find(r => r.id === data.roomId);
        if (room) {
            const msg = { username: data.username, content: data.content, type: data.type, fileName: data.fileName };
            room.history.push(msg);
            if (room.history.length > 50) room.history.shift();
            io.to(room.id).emit('receive_msg', msg);
        }
    });

    socket.on('disconnect', () => {
        rooms.forEach(room => {
            const userIndex = room.users.findIndex(u => u.id === socket.id);
            if (userIndex !== -1) {
                const username = room.users[userIndex].username;
                socket.leave(room.id);
                room.users = room.users.filter(u => u.id !== socket.id);
                io.to(room.id).emit('system_msg', `🚪 ${username} đã rời phòng.`);
                if (room.users.length === 0) rooms = rooms.filter(r => r.id !== room.id);
                io.emit('update_rooms', getPublicRooms());
            }
        });
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});