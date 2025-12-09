const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");

const forumRoutes = require("./chemforum");
const tradeRoutes = require("./trade");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(express.json());

// Static
app.use(express.static(path.join(__dirname, "..")));

// Routes
app.use("/chemforum", forumRoutes);
app.use("/trade", tradeRoutes);

// Single page entry
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
