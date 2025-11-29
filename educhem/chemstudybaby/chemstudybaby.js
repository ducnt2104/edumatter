/* ======================================================
   INITIAL SETTINGS
====================================================== */

// Set default theme if not exist
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}

document.body.classList.add(
  localStorage.getItem("theme") === "dark" ? "theme-dark" : "theme-light"
);

/* ======================================================
   DARK / LIGHT MODE
====================================================== */
document.getElementById("theme-toggle").addEventListener("click", () => {
  const current = localStorage.getItem("theme");
  const next = current === "light" ? "dark" : "light";

  localStorage.setItem("theme", next);

  document.body.classList.remove("theme-light", "theme-dark");
  document.body.classList.add(next === "dark" ? "theme-dark" : "theme-light");
});

/* ======================================================
   LESSON DATA (TẠO DỮ LIỆU CÁC BÀI)
====================================================== */

const lessonsData = {
  7: [
    {
      id: 1,
      icon: "fa-atom",
      title: "Nguyên tử – Nguyên tố hóa học",
      desc: "Khái niệm cơ bản về nguyên tử",
    },
    {
      id: 2,
      icon: "fa-cubes",
      title: "Phân tử – Đơn chất – Hợp chất",
      desc: "Cấu tạo phân tử",
    },
    {
      id: 3,
      icon: "fa-flask",
      title: "Phản ứng hóa học",
      desc: "Điều kiện xảy ra phản ứng",
    },
    {
      id: 4,
      icon: "fa-vial",
      title: "Acid – Base – Oxide – Muối – pH",
      desc: "Tính chất hóa học",
    },
    {
      id: 5,
      icon: "fa-bolt",
      title: "Kim loại – Phi kim",
      desc: "Sự khác nhau giữa kim loại và phi kim",
    },
    {
      id: 6,
      icon: "fa-flask",
      title: "Hợp chất hữu cơ – Hydrocarbon",
      desc: "Nguồn nhiên liệu",
    },
    {
      id: 7,
      icon: "fa-vial",
      title: "C2H5OH – CH3COOH",
      desc: "Etylic & Axetic",
    },
    {
      id: 8,
      icon: "fa-dna",
      title: "Lipid – Carbohydrate – Protein – Polymer",
      desc: "Chất sinh học",
    },
  ],

  8: [
    {
      id: 1,
      icon: "fa-burn",
      title: "Oxi – Ozon",
      desc: "Tính chất & Ứng dụng",
    },
    { id: 2, icon: "fa-cloud", title: "Hiđro", desc: "Khí nhẹ nhất" },
    {
      id: 3,
      icon: "fa-flask",
      title: "Sự cháy – Phản ứng oxi hóa",
      desc: "Cơ chế phản ứng",
    },
  ],

  9: [
    {
      id: 1,
      icon: "fa-water",
      title: "Nước – Dung dịch",
      desc: "Nồng độ % & mol",
    },
    {
      id: 2,
      icon: "fa-temperature-high",
      title: "Axit mạnh – yếu",
      desc: "So sánh và nhận biết",
    },
  ],
};

/* ======================================================
   RENDER MAIN LESSONS
====================================================== */

const lessonsGrid = document.getElementById("lessons-grid");
const sidebarList = document.getElementById("sidebar-list");

let currentClass = 7;

function renderLessons() {
  lessonsGrid.innerHTML = "";
  sidebarList.innerHTML = "";

  lessonsData[currentClass].forEach((lesson) => {
    /* MAIN CARD */
    lessonsGrid.innerHTML += `
      <div class="card" data-id="${lesson.id}">
        <div class="icon"><i class="fa-solid ${lesson.icon}"></i></div>
        <h3>${lesson.title}</h3>
        <div class="desc">${lesson.desc}</div>
      </div>
    `;

    /* SIDEBAR ITEM */
    sidebarList.innerHTML += `
      <div class="sidebar-item" data-id="${lesson.id}">
        ${lesson.id}. ${lesson.title}
      </div>
    `;
  });

  bindLessonClicks();
}

/* ======================================================
   CLASS SWITCHING
====================================================== */

document.querySelectorAll(".class-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".class-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    currentClass = parseInt(btn.dataset.class);
    renderLessons();

    updateProgress(); // update progress when class changes
  });
});

/* Load default class (7) */
renderLessons();

/* ======================================================
   CLICK A LESSON → MARK AS COMPLETE
====================================================== */

function bindLessonClicks() {
  document.querySelectorAll(".card, .sidebar-item").forEach((item) => {
    item.addEventListener("click", () => {
      let id = item.dataset.id;
      let key = `class${currentClass}_lesson${id}`;

      // Toggle complete
      let completed = localStorage.getItem(key) === "true";
      localStorage.setItem(key, !completed);

      updateProgress();
      highlightCompleted();
    });
  });
}

function highlightCompleted() {
  document.querySelectorAll(".card, .sidebar-item").forEach((item) => {
    let id = item.dataset.id;
    let key = `class${currentClass}_lesson${id}`;
    let done = localStorage.getItem(key) === "true";

    if (done) {
      item.style.borderColor = "var(--accent)";
      item.style.background = "var(--accent-soft)";
    } else {
      item.style.borderColor = "var(--border)";
      item.style.background = "var(--bg)";
    }
  });
}

/* ======================================================
   PROGRESS SYSTEM
====================================================== */

function updateProgress() {
  const total = lessonsData[currentClass].length;

  let completed = 0;
  lessonsData[currentClass].forEach((lesson) => {
    if (
      localStorage.getItem(`class${currentClass}_lesson${lesson.id}`) === "true"
    ) {
      completed++;
    }
  });

  let pct = Math.round((completed / total) * 100);

  // mini bar left
  document.getElementById("progress-mini-fill").style.width = pct + "%";
  document.getElementById("progress-mini-pct").textContent = pct + "%";

  // sidebar bar right
  document.getElementById("sidebar-progress-fill").style.width = pct + "%";

  highlightCompleted();
}

updateProgress();

/* ======================================================
   FULL MODE – SHOW ALL LESSONS
====================================================== */

document.getElementById("full-mode").addEventListener("click", () => {
  lessonsGrid.innerHTML = "";
  sidebarList.innerHTML = "";

  [7, 8, 9].forEach((cls) => {
    lessonsData[cls].forEach((lesson) => {
      lessonsGrid.innerHTML += `
        <div class="card">
          <div class="icon"><i class="fa-solid ${lesson.icon}"></i></div>
          <h3>[Lớp ${cls}] ${lesson.title}</h3>
          <div class="desc">${lesson.desc}</div>
        </div>
      `;

      sidebarList.innerHTML += `
        <div class="sidebar-item">
          [${cls}] ${lesson.title}
        </div>
      `;
    });
  });
});

/* ======================================================
   TOP BAR NAVIGATION
====================================================== */

document.querySelectorAll("[data-link]").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = btn.dataset.link;
  });
});
