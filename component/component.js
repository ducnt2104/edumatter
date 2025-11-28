/* =========================================================
   HÀM LOAD COMPONENT (sidebar + footer)
========================================================= */
function getRelativePath(path) {
  const current = window.location.pathname.split("/").length - 1;
  const target = path.split("/").length - 1;
  let back = "";

  for (let i = 0; i < current - target; i++) {
    back += "../";
  }
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

  // Toggle sidebar
  if (menu && sidebar) {
    menu.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Điều hướng link
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
  const footer = document.getElementById("footer");

  if (!footer) return;

  footer.addEventListener("mousemove", (e) => {
    const r = footer.getBoundingClientRect();
    footer.style.setProperty("--fx", `${e.clientX - r.left}px`);
    footer.style.setProperty("--fy", `${e.clientY - r.top}px`);
  });
});

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
   CARD EFFECTS (spotlight + hover + click)
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
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
