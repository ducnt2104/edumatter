/* =========================================================
   HÀM LOAD COMPONENT
========================================================= */
function getRelativePath(path) {
  const current = window.location.pathname.split("/").length - 1;
  const target = path.split("/").length - 1;
  let back = "";

  for (let i = 0; i < current - target; i++) back += "../";
  return back + path;
}

function loadComponent(path, container, callback) {
  fetch(getRelativePath(path))
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(container).innerHTML = html;
      if (callback) callback();
    })
    .catch((err) => console.error("Lỗi load component:", err));
}

/* =========================================================
   LOAD SIDEBAR
========================================================= */
loadComponent("component/sidebar.html", "sidebar-container", () => {
  const sidebar = document.getElementById("sidebar");
  const menu = document.getElementById("menuToggle");

  if (menu && sidebar) {
    menu.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  document.querySelectorAll(".sidebar-item").forEach((item) => {
    item.addEventListener("click", () => {
      const link = item.dataset.link;
      if (link) window.location.href = link;
    });
  });
});

/* =========================================================
   LOAD FOOTER
========================================================= */
loadComponent("component/footer.html", "footer-container", () => {
  initFooterParticles();

  // FIX AOS CHO FOOTER LOAD SAU
  if (AOS) AOS.refreshHard();
});

/* =========================================================
   FOOTER PARTICLES (bản chuẩn, không trùng)
========================================================= */
function initFooterParticles() {
  const canvas = document.getElementById("footerCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const particles = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.3 + 0.4,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2,
  }));

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.8)";

    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(loop);
  }

  loop();
}

/* =========================================================
   THEME TOGGLE
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeBtn = document.getElementById("themeToggle");

  const saved = localStorage.getItem("theme") || "light-mode";
  body.classList.add(saved);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      body.classList.toggle("light-mode");

      localStorage.setItem(
        "theme",
        body.classList.contains("dark-mode") ? "dark-mode" : "light-mode"
      );
    });
  }
});

/* =========================================================
   CARD EFFECTS
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((card) => {
    const color = card.dataset.color;
    if (color) card.style.setProperty("--accent", color);

    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });

    card.addEventListener("click", () => {
      if (card.dataset.link) window.location.href = card.dataset.link;
    });
  });
});

/* =========================================================
   YÊU CẦU XOAY NGANG
========================================================= */
function checkOrientation() {
  const warn = document.getElementById("rotate-warning");
  if (!warn) return;

  warn.style.display = window.innerHeight > window.innerWidth ? "flex" : "none";
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
const body = document.body;
const modeBtn = document.getElementById("modeToggle");

modeBtn.onclick = () => {
  body.classList.toggle("light-mode");
  modeBtn.textContent = body.classList.contains("light-mode") ? "☀️" : "🌙";
};
const toggle = document.getElementById("toggleTheme");
