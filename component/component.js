/* =========================================================
   CONFIG PATH – CHUẨN 2 CẤP
   chemstudybaby → chemstudy → educhem → component
========================================================= */
function componentPath(file) {
  return "../../../component/" + file;
}

/* =========================================================
   LOAD COMPONENT
========================================================= */
function loadComponent(containerId, file, callback) {
  const box = document.getElementById(containerId);
  if (!box) return;

  fetch(componentPath(file))
    .then((res) => res.text())
    .then((html) => {
      box.innerHTML = html;
      if (callback) callback();
    })
    .catch((err) => console.error(`Lỗi load component: ${file}`, err));
}

/* =========================================================
   LOAD TOPBAR
========================================================= */
loadComponent("topbar-container", "chemtopbar.html", () => {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    const link = btn.dataset.link;
    if (link)
      btn.addEventListener("click", () => (window.location.href = link));
  });
});

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
loadComponent("footer-container", "footer.html", () => {
  initFooterParticles();
  if (window.AOS) AOS.refreshHard();
});

/* =========================================================
   FOOTER PARTICLES
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
   THEME
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
   CARD EFFECT
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
      const link = card.dataset.link;
      if (link) window.location.href = link;
    });
  });
});

/* =========================================================
   ROTATE WARNING
========================================================= */
function checkOrientation() {
  const warn = document.getElementById("rotate-warning");
  if (warn) {
    warn.style.display =
      window.innerHeight > window.innerWidth ? "flex" : "none";
  }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
/* =========================================================
   LOAD SUPPORT PANEL
========================================================= */
loadComponent("chem-support-container", "chemsupport.html", () => {
  // nếu bên trong có nút đóng/mở thì add ở đây
  const closeBtn = document.getElementById("supportClose");
  const panel = document.getElementById("chemSupport");

  if (closeBtn && panel) {
    closeBtn.addEventListener("click", () => {
      panel.classList.remove("open");
    });
  }
});
/* =========================================================
   LOAD SUPPORT PANEL
========================================================= */
loadComponent("chem-support-container", "chemsupport.html", () => {
  const panel = document.getElementById("support-chem"); // CHUẨN ID
  const closeBtn = document.getElementById("supportClose");
  const openBtn = document.getElementById("btnSupport");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => panel.classList.remove("open"));
  }
  if (openBtn) {
    openBtn.addEventListener("click", () => panel.classList.toggle("open"));
  }
});

/* =========================================================
   CLICK OUTSIDE TO CLOSE
========================================================= */
document.addEventListener("click", (e) => {
  const panel = document.getElementById("support-chem");
  const btn = document.getElementById("btnSupport");

  if (!panel) return;

  if (!panel.contains(e.target) && e.target !== btn) {
    panel.classList.remove("open");
  }
});
