/* =============================
    CARD CLICK
============================= */
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = card.dataset.link;
  });
});

/* =============================
    CARD HOVER DISTANCE
============================= */
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".card").forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dist = Math.hypot(e.clientX - cx, e.clientY - cy);

    if (dist < 170) {
      card.classList.add("active-hover");
      card.style.setProperty("--subject-color", card.dataset.color);
    } else {
      card.classList.remove("active-hover");
    }
  });
});

/* =============================
    RANDOM HEADER GRADIENT
============================= */
const header = document.getElementById("header");

const subjectColors = [
  "#3b82f6",
  "#ef4444",
  "#f472b6",
  "#22c55e",
  "#facc15",
  "#4ade80",
  "#60a5fa",
];

function randomGradient() {
  const c1 = subjectColors[Math.floor(Math.random() * subjectColors.length)];
  const c2 = subjectColors[Math.floor(Math.random() * subjectColors.length)];
  const c3 = subjectColors[Math.floor(Math.random() * subjectColors.length)];

  header.style.background = `linear-gradient(45deg, ${c1}, ${c2}, ${c3})`;
}
randomGradient();

/* =============================
    HEADER GLOW FOLLOW MOUSE
============================= */
header.addEventListener("mousemove", (e) => {
  const r = header.getBoundingClientRect();
  header.style.setProperty("--x", `${e.clientX - r.left}px`);
  header.style.setProperty("--y", `${e.clientY - r.top}px`);
});

/* =============================
    FOOTER GLOW
============================= */
const footer = document.getElementById("footer");
footer.addEventListener("mousemove", (e) => {
  const r = footer.getBoundingClientRect();
  footer.style.setProperty("--fx", `${e.clientX - r.left}px`);
  footer.style.setProperty("--fy", `${e.clientY - r.top}px`);
});

/* =============================
    SIDEBAR
============================= */
const menuBtn = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

/* =============================
    SIDEBAR → CLICK LINK
============================= */
document.querySelectorAll(".sidebar-item").forEach((item) => {
  item.onclick = () => {
    if (item.dataset.link) location.href = item.dataset.link;
  };
});

/* =============================
    THEME SWITCH
============================= */
const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  themeToggle.innerHTML = document.body.classList.contains("dark-mode")
    ? `<i class="fas fa-sun"></i>`
    : `<i class="fas fa-moon"></i>`;
};

/* =============================
    SEARCH
============================= */
const subjectMap = {
  hoá: "educhem/educhem.html",
  hóa: "educhem/educhem.html",
  educhem: "educhem/educhem.html",

  toán: "edualge/edualge.html",
  "đại số": "edualge/edualge.html",
  edualge: "edualge/edualge.html",

  lý: "eduphys/eduphys.html",
  "vật lý": "eduphys/eduphys.html",

  sinh: "edubiol/edubiol.html",

  hình: "edugeom/edugeom.html",
  "hình học": "edugeom/edugeom.html",

  "công nghệ": "edutech/edutech.html",
  tin: "eduinfortech/eduinformtech.html",
};

const search = document.getElementById("searchBox");
search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const text = search.value.toLowerCase();
    for (let key in subjectMap) {
      if (text.includes(key)) return (location.href = subjectMap[key]);
    }
    alert("Không tìm thấy môn này!");
  }
});
