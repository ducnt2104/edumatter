const express = require("express");
const router = express.Router();

// In-memory store (thay bằng DB thật khi cần)
const posts = [];
let idCounter = 1;

// List posts
router.get("/posts", (req, res) => {
  res.json(posts.slice().reverse()); // trả ngược để mới nhất lên đầu
});

// Create post
router.post("/posts", (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content)
    return res.status(400).json({ error: "Missing title/content" });

  const post = {
    id: idCounter++,
    title,
    content,
    author: author || "Anon",
    createdAt: Date.now(),
    comments: [],
  };
  posts.push(post);
  res.json(post);
});

// Get single post
router.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) return res.status(404).json({ error: "Not found" });
  res.json(post);
});

// Comment on post
router.post("/posts/:id/comments", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) return res.status(404).json({ error: "Not found" });
  const { author, text } = req.body;
  if (!text) return res.status(400).json({ error: "Missing text" });
  const comment = {
    id: Date.now(),
    author: author || "Anon",
    text,
    createdAt: Date.now(),
  };
  post.comments.push(comment);
  res.json(comment);
});

module.exports = router;
