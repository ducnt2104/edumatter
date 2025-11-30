/* ======================================================
   INITIAL THEME SETTINGS
====================================================== */

// Set default theme
if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");

function setTheme(theme) {
  document.body.className = theme === "dark" ? "theme-dark" : "theme-light";
  localStorage.setItem("theme", theme);
}

// Apply saved theme
setTheme(localStorage.getItem("theme"));

// Toggle theme button
document.getElementById("btnToggleTheme").addEventListener("click", () => {
  setTheme(localStorage.getItem("theme") === "light" ? "dark" : "light");
});

/* ======================================================
   LESSON DATA
====================================================== */

const lessonsData = {
  7: [
    {
      id: 1,
      icon: "fa-atom",
      title: "Nguyên tử – Nguyên tố hóa học",
      desc: "Cơ bản về nguyên tử và nguyên tố",
      folder: "nguyen_tu_nguyen_to_hoa_hoc",
    },
    {
      id: 2,
      icon: "fa-cubes",
      title: "Phân tử – Đơn chất – Hợp chất",
      desc: "Phân tử và cấu tạo",
      folder: "phan_tu_don_chat_hop_chat",
    },
  ],

  8: [
    {
      id: 1,
      icon: "fa-vial",
      title: "Acid – Base – Oxide – Muối – pH",
      desc: "Tính chất hóa học cơ bản",
      folder: "acid_base_oxide_salt_pH",
    },
    {
      id: 2,
      icon: "fa-flask",
      title: "Phản ứng hóa học",
      desc: "Định nghĩa và điều kiện phản ứng",
      folder: "phan_ung_hoa_hoc",
    },
  ],

  9: [
    {
      id: 1,
      icon: "fa-bottle-water",
      title: "C2H5OH – CH3COOH",
      desc: "Etylic & Axetic",
      folder: "ethylic_alcohol_acetic_acid",
    },
    {
      id: 2,
      icon: "fa-fire",
      title: "Hydrocarbon & Hữu cơ",
      desc: "Khái niệm và ứng dụng",
      folder: "hop_chat_huu_co_hydrocarbon_va_ng",
    },
    {
      id: 3,
      icon: "fa-bolt",
      title: "Kim loại – Phi kim",
      desc: "Tính chất khác nhau",
      folder: "kim_loai_su_khac_nhau_giua_kim_loai",
    },
    {
      id: 4,
      icon: "fa-dna",
      title: "Lipid – Carbohydrate – Protein – Polymer",
      desc: "Chất sinh học",
      folder: "lipid_carbonhydrate_protein_polymer",
    },
  ],
};

/* ======================================================
   ELEMENTS
====================================================== */

const lessonsGrid = document.getElementById("lessonsGrid");
const sidebarList = document.getElementById("sidebarList");
const miniFill = document.getElementById("miniProgressFill");
const miniPct = document.getElementById("miniProgressPct");
const sideFill = document.getElementById("sidebarProgressFill");
const sidePct = document.getElementById("sidebarProgressPct");
let currentClass = 7;

/* ======================================================
   HELPER FUNCTIONS
====================================================== */

function getLessonKey(cls, id) {
  return `class${cls}_lesson${id}`;
}

function isLessonDone(cls, id) {
  return localStorage.getItem(getLessonKey(cls, id)) === "true";
}

function toggleLessonDone(cls, id) {
  localStorage.setItem(getLessonKey(cls, id), !isLessonDone(cls, id));
}

/* ======================================================
   RENDER LESSONS
====================================================== */

function renderLessons(cls = currentClass) {
  lessonsGrid.innerHTML = "";
  sidebarList.innerHTML = "";

  lessonsData[cls].forEach((lesson) => {
    // Main card
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = lesson.id;
    card.dataset.class = cls;
    card.innerHTML = `
      <div class="icon"><i class="fa-solid ${lesson.icon}"></i></div>
      <h3>${lesson.title}</h3>
      <div class="desc">${lesson.desc}</div>
    `;
    lessonsGrid.appendChild(card);

    // Sidebar item
    const sidebarItem = document.createElement("div");
    sidebarItem.className = "sidebar-item";
    sidebarItem.dataset.id = lesson.id;
    sidebarItem.dataset.class = cls;
    sidebarItem.textContent = `${lesson.id}. ${lesson.title}`;
    sidebarList.appendChild(sidebarItem);
  });

  bindClicks();
  updateProgress();
}

/* ======================================================
   BIND CLICK EVENTS
====================================================== */

function bindClicks() {
  document.querySelectorAll(".card, .sidebar-item").forEach((item) => {
    item.onclick = () => {
      const cls = parseInt(item.dataset.class);
      const id = item.dataset.id;
      toggleLessonDone(cls, id);
      updateProgress();
    };
  });
}

/* ======================================================
   UPDATE PROGRESS
====================================================== */

function updateProgress() {
  const lessons = lessonsData[currentClass];
  let completed = 0;

  lessons.forEach((lesson) => {
    const done = isLessonDone(currentClass, lesson.id);
    document
      .querySelectorAll(
        `.card[data-id="${lesson.id}"], .sidebar-item[data-id="${lesson.id}"]`
      )
      .forEach((el) => el.classList.toggle("done", done));
    if (done) completed++;
  });

  const pct = Math.round((completed / lessons.length) * 100);
  miniFill.style.width = sideFill.style.width = pct + "%";
  miniPct.textContent = sidePct.textContent = pct + "%";
}

/* ======================================================
   CLASS SWITCHING
====================================================== */

document.querySelectorAll(".class-btn").forEach((btn) => {
  btn.onclick = () => {
    document
      .querySelectorAll(".class-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentClass = parseInt(btn.dataset.class);
    renderLessons(currentClass);
  };
});

/* ======================================================
   FULL MODE
====================================================== */

document.getElementById("btnFullMode").onclick = () => {
  lessonsGrid.innerHTML = "";
  sidebarList.innerHTML = "";

  [7, 8, 9].forEach((cls) => {
    lessonsData[cls].forEach((lesson) => {
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.id = lesson.id;
      card.dataset.class = cls;
      card.innerHTML = `
        <div class="icon"><i class="fa-solid ${lesson.icon}"></i></div>
        <h3>[Lớp ${cls}] ${lesson.title}</h3>
        <div class="desc">${lesson.desc}</div>
      `;
      lessonsGrid.appendChild(card);

      const sidebarItem = document.createElement("div");
      sidebarItem.className = "sidebar-item";
      sidebarItem.dataset.id = lesson.id;
      sidebarItem.dataset.class = cls;
      sidebarItem.textContent = `[${cls}] ${lesson.title}`;
      sidebarList.appendChild(sidebarItem);
    });
  });

  bindClicks();
  updateProgress();
};

/* ======================================================
   TOP NAVIGATION BUTTONS
====================================================== */

document.querySelectorAll("[data-link]").forEach((btn) => {
  btn.onclick = () => (window.location.href = btn.dataset.link);
});

/* ======================================================
   INITIAL LOAD
====================================================== */

renderLessons();
updateProgress();
/* ======================================================*/
item.onclick = () => {
  const folder = lessonsData[cls].find((x) => x.id == id).folder;
  window.location.href = `${folder}/index.html`;
};
// Nút bật full
const btnFull = document.getElementById("btnFull");
const body = document.body;

btnFull.addEventListener("click", () => {
  body.classList.toggle("full-mode");
});

// Mở sidebar (3 gạch)
const btnSidebar = document.getElementById("btnToggleSidebar");
const sidebar = document.getElementById("sidebar");

btnSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

// Nút Home
const btnHome = document.getElementById("btnHome");

btnHome.addEventListener("click", () => {
  window.location.href = "index.html"; // hoặc trang bạn muốn
});
