/* =========================================================
           1. CORE INITIALIZATION
           ========================================================= 
        */

// Header Scroll Effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  const scrollBar = document.getElementById("scroll-bar");

  // Header sticky
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Scroll bar
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  scrollBar.style.width = scrolled + "%";
});

/* =========================================================
           2. CUSTOM CURSOR LOGIC
           ========================================================= 
        */
const cursor = document.getElementById("custom-cursor");
const follower = document.getElementById("cursor-follower");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  follower.style.transform = `translate3d(${e.clientX - 17.5}px, ${
    e.clientY - 17.5
  }px, 0)`;
});

document.querySelectorAll("a, button, .nav-link, .card").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    follower.style.transform += ` scale(2)`;
    follower.style.backgroundColor = "var(--p-primary-glow)";
  });
  el.addEventListener("mouseleave", () => {
    follower.style.transform = follower.style.transform.replace(
      " scale(2)",
      ""
    );
    follower.style.backgroundColor = "transparent";
  });
});

/* =========================================================
           3. CANVAS BACKGROUND PARTICLES
           ========================================================= 
        */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = [];
  const particleCount = Math.floor(window.innerWidth / 15);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2,
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const isDark = document.body.classList.contains("dark-mode");
  ctx.fillStyle = isDark ? "rgba(255,255,255,0.1)" : "rgba(79, 70, 229, 0.1)";
  ctx.strokeStyle = isDark
    ? "rgba(255,255,255,0.05)"
    : "rgba(79, 70, 229, 0.05)";

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    // Connect lines
    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", initCanvas);
initCanvas();
drawParticles();

/* =========================================================
           4. THEME & SIDEBAR
           ========================================================= 
        */
function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector("#themeToggle i");
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.className = "fas fa-sun";
    localStorage.setItem("edumatter-theme", "dark");
  } else {
    icon.className = "fas fa-moon";
    localStorage.setItem("edumatter-theme", "light");
  }
}
document.getElementById("themeToggle").onclick = toggleTheme;

// Load saved theme
if (localStorage.getItem("edumatter-theme") === "dark") toggleTheme();

function toggleSidebar() {
  const sb = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const isActive = sb.classList.toggle("active");
  overlay.style.display = isActive ? "block" : "none";
}

/* =========================================================
           5. MODAL & SIDEBAR CONTENT
           ========================================================= 
        */
const sidebarData = {
  gioithieu: {
    title: "Về EDUMATTER",
    content: `
                    <p><strong>EDUMATTER</strong> không chỉ là một trang web học tập, mà là một trải nghiệm số hóa tri thức hoàn toàn mới.</p>
                    <p>Dự án được khởi xướng bởi <strong>DNT Team</strong> với mục tiêu mang đến cho học sinh Việt Nam một kho tàng công cụ học tập tương tác cao. Chúng tôi tin rằng, khi kiến thức được trình bày một cách đẹp mắt và trực quan, đam mê học tập sẽ tự động nảy mầm.</p>
                    <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600" style="width:100%; border-radius:20px; margin: 20px 0;" alt="Education">
                    <p>Sứ mệnh của chúng tôi: <em>"Học không chỉ là ghi nhớ, mà là khám phá."</em></p>
                `,
  },
  huongdan: {
    title: "Hướng dẫn sử dụng",
    content: `
                    <p>Chào mừng bạn! Hãy làm theo các bước sau để tối ưu hóa trải nghiệm:</p>
                    <ul style="margin-left: 20px; margin-bottom: 20px;">
                        <li><strong>Khám phá môn học:</strong> Nhấp vào các thẻ môn học để vào các khu vực chuyên sâu (như EDUCHEM).</li>
                        <li><strong>Chế độ giao diện:</strong> Sử dụng nút Mặt trăng/Mặt trời trên Header để bảo vệ mắt khi học ban đêm.</li>
                        <li><strong>Tìm kiếm nhanh:</strong> Các công cụ giải toán và thí nghiệm ảo luôn được ưu tiên hiển thị.</li>
                    </ul>
                    <p>Nếu gặp khó khăn, hãy nhấn vào mục <strong>Báo cáo lỗi</strong> trong Sidebar để chúng tôi hỗ trợ ngay lập tức.</p>
                `,
  },
  taikhoan: {
    title: "Trung tâm tài khoản",
    content: `
                    <p>Tính năng tài khoản đang được nâng cấp để hỗ trợ lưu trữ lộ trình học tập cá nhân.</p>
                    <div style="background: var(--p-primary-glow); padding: 20px; border-radius: 15px; border-left: 5px solid var(--p-primary);">
                        <p><strong>Sắp ra mắt:</strong></p>
                        <ul>
                            <li>Lưu các bài tập đã giải.</li>
                            <li>Bảng xếp hạng học tập toàn quốc.</li>
                            <li>Tải xuống tài liệu PDF độc quyền.</li>
                        </ul>
                    </div>
                `,
  },
  caidat: {
    title: "Cài đặt giao diện",
    content: `
                    <p>Tùy chỉnh trải nghiệm của bạn tại đây:</p>
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <label><input type="checkbox" checked> Hiệu ứng hạt nền (Particles)</label>
                        <label><input type="checkbox" checked> Âm thanh tương tác UI</label>
                        <label><input type="checkbox" checked> Hiệu ứng con trỏ chuột 3D</label>
                    </div>
                `,
  },
  baocao: {
    title: "Báo cáo lỗi & Góp ý",
    content: `
                    <p>Sự đóng góp của bạn giúp EDUMATTER hoàn thiện hơn mỗi ngày.</p>
                    <form onsubmit="event.preventDefault(); alert('Cảm ơn bạn! Báo cáo đã được gửi.');" style="display: flex; flex-direction: column; gap: 10px;">
                        <input type="text" placeholder="Tên của bạn" style="padding: 10px; border-radius: 8px; border: 1px solid #ddd;">
                        <textarea placeholder="Mô tả lỗi hoặc ý tưởng mới..." rows="5" style="padding: 10px; border-radius: 8px; border: 1px solid #ddd;"></textarea>
                        <button class="btn-enter" style="cursor: pointer;">Gửi ý kiến</button>
                    </form>
                `,
  },
  chinhsach: {
    title: "Chính sách bảo mật",
    content: `
                    <p>Chúng tôi tôn trọng quyền riêng tư của bạn tuyệt đối:</p>
                    <p>1. EDUMATTER không thu thập dữ liệu cá nhân khi chưa được phép.</p>
                    <p>2. Mọi thông tin tài khoản (trong tương lai) sẽ được mã hóa chuẩn AES-256.</p>
                    <p>3. Chúng tôi không chia sẻ dữ liệu người dùng cho bên thứ ba.</p>
                `,
  },
  dieukhoan: {
    title: "Điều khoản dịch vụ",
    content: `
                    <p>Sử dụng EDUMATTER đồng nghĩa với việc bạn đồng ý với các quy tắc cộng đồng:</p>
                    <p>- Không sử dụng công cụ để gian lận trong các kỳ thi chính thống.</p>
                    <p>- Không sao chép mã nguồn của dự án khi chưa có sự cho phép từ DNT Team.</p>
                    <p>- Tôn trọng các bản quyền hình ảnh và mô phỏng khoa học trên trang web.</p>
                `,
  },
};

function openModal(type) {
  const data = sidebarData[type];
  const modalBody = document.getElementById("modal-body");
  const overlay = document.getElementById("modal-overlay");

  modalBody.innerHTML = `
                <h2>${data.title}</h2>
                <div class="modal-text">${data.content}</div>
            `;

  overlay.style.display = "grid";
  document.body.style.overflow = "hidden"; // Khóa cuộn trang
  toggleSidebar(); // Đóng sidebar
}

function closeModal(e) {
  if (
    !e ||
    e.target === document.getElementById("modal-overlay") ||
    e.target.className === "close-modal"
  ) {
    document.getElementById("modal-overlay").style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function alertComingSoon(subject) {
  const modalBody = document.getElementById("modal-body");
  const overlay = document.getElementById("modal-overlay");

  modalBody.innerHTML = `
                <div style="text-align: center;">
                    <i class="fas fa-hammer" style="font-size: 4rem; color: var(--p-accent); margin-bottom: 20px;"></i>
                    <h2>${subject} đang được xây dựng</h2>
                    <p>Đội ngũ DNT đang nỗ lực hết mình để hoàn thiện nội dung cho môn học này. Vui lòng quay lại sau một thời gian nữa nhé!</p>
                    <button class="btn-enter" onclick="closeModal(null)">Tôi sẽ đợi</button>
                </div>
            `;
  overlay.style.display = "grid";
}

/* =========================================================
           6. ANIME.JS ANIMATIONS
           ========================================================= 
        */
// Entrance animation for cards
anime({
  targets: ".card",
  scale: [0.9, 1],
  opacity: [0, 1],
  delay: anime.stagger(100, { start: 500 }),
  easing: "easeOutElastic(1, .8)",
});

// Floating animation via JS for better control
document.querySelectorAll(".floating").forEach((el) => {
  anime({
    targets: el,
    translateY: [-10, 10],
    duration: 3000 + Math.random() * 2000,
    direction: "alternate",
    loop: true,
    easing: "easeInOutQuad",
  });
});
import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY;

app.post("/api/chat", async (req, res) => {
  const { text } = req.body;

  const r = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
      API_KEY,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text }] }],
      }),
    }
  );

  res.json(await r.json());
});

app.listen(3000);
