/* =========================================================
           1. CORE INITIALIZATION
           ========================================================= 
        */
AOS.init({ duration: 1000, once: true, easing: "ease-out-back" });

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
document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", function () {
    // Lấy giá trị từ thuộc tính data-link
    const link = this.getAttribute("data-link");

    if (link) {
      // Thực hiện điều hướng trang
      window.location.href = link;
    }
  });
});
