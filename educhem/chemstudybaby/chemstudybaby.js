const thcsCourses = [
  {
    id: "6_1",
    grade: 6,
    title: "Oxygen và không khí",
    desc: "Thành phần, tính chất và vai trò của oxy và không khí.",
    icon: "fa-wind",
    link: "oxygen_khong_khi/oxygen_khong_khi.html",
    color: "from-blue-400 to-indigo-300",
  },
  {
    id: "6_2",
    grade: 6,
    title: "VẬT LIỆU – NHIÊN LIỆU – NGUYÊN LIỆU – LƯƠNG THỰC, THỰC PHẨM",
    desc: "Phân loại, tính chất và ứng dụng trong đời sống.",
    icon: "fa-leaf",
    link: "vat_lieu_nhien_lieu_nguyen_lieu_luong_thuc_thuc_pham/vat_lieu_nhien_lieu_nguyen_lieu_luong_thuc_thuc_pham.html",
    color: "from-green-400 to-lime-300",
  },
  {
    id: "6_3",
    grade: 6,
    title: " CHẤT TINH KHIẾT – HỖN HỢP – PHƯƠNG PHÁP TÁCH CHẤT",
    desc: "Phân biệt chất tinh khiết, hỗn hợp và phương pháp tách chất.",
    icon: "fa-filter",
    link: "chat_tinh_khiet_hon_hop_phuong_phap_tach_chat/chat_tinh_khiet_hon_hop_phuong_phap_tach_chat.html",
    color: "from-amber-400 to-yellow-300",
  },
  {
    id: "7_1",
    grade: 7,
    title: "Nguyên tử & Nguyên tố",
    desc: "Nguyên tử, electron, nguyên tố & kí hiệu hóa học.",
    icon: "fa-atom",
    link: "nguyen_tu_nguyen_to_hoa_hoc/nguyen_tu_nguyen_to_hoa_hoc.html",
    color: "from-blue-400 to-cyan-300",
  },
  {
    id: "7_2",
    grade: 7,
    title: "Đơn chất • Hợp chất",
    desc: "Phân biệt công thức hóa học, phân tử khối.",
    icon: "fa-cubes",
    link: "phan_tu_don_chat_hop_chat/phan_tu_don_chat_hop_chat.html",
    color: "from-cyan-400 to-teal-300",
  },
  {
    id: "8_1",
    grade: 8,
    title: "Acid • Base • Oxide • Muối",
    desc: "Phân loại – tính chất – phản ứng – độ mạnh pH.",
    icon: "fa-vial",
    link: "acid_base_oxide_salt_pH/acid_base_oxide_salt_pH.html",
    color: "from-orange-400 to-red-400",
  },
  {
    id: "8_2",
    grade: 8,
    title: "Phản ứng hóa học",
    desc: "Dấu hiệu – bản chất – định luật – cân bằng phương trình.",
    icon: "fa-bolt",
    link: "phan_ung_hoa_hoc/phan_ung_hoa_hoc.html",
    color: "from-yellow-400 to-orange-300",
  },
  {
    id: "9_1",
    grade: 9,
    title: "Kim loại & Phi kim",
    desc: "Tính chất vật lý, hóa học, dãy hoạt động hóa học.",
    icon: "fa-gem",
    link: "kimloai/kimloai.html",
    color: "from-purple-400 to-pink-400",
  },
  {
    id: "9_2",
    grade: 9,
    title: "Hydrocarbon & Nhiên liệu",
    desc: "Metan, Etilen, Axetilen, Benzen & Dầu mỏ.",
    icon: "fa-fire",
    link: "hop_chat_huu_co_hydrocarbon_va_nguon_nhien_lieu/hop_chat_huu_co_hydrocarbon_va_nguon_nhien_lieu.html",
    color: "from-red-500 to-rose-500",
  },
  {
    id: "9_3",
    grade: 9,
    title: "Ethylic Alcohol & Acetic Acid",
    desc: "Cấu tạo phân tử, tính chất, điều chế và ứng dụng.",
    icon: "fa-flask",
    link: "ethylic_alcohol_acetic_acid/ethylic_alcohol_acetic_acid.html",
    color: "from-emerald-400 to-green-500",
  },
  {
    id: "9_4",
    grade: 9,
    title: "Hợp chất thiên nhiên & Polymer",
    desc: "Chất béo, Glucozơ, Protein, Tinh bột & Polymer.",
    icon: "fa-dna",
    link: "huu_co/huu_co.html",
    color: "from-indigo-400 to-blue-500",
  },
];
// --- CONFIGURATION & STATE ---
const STATE = {
  isDark: true,
  activeTab: "all",
  completed: [],
};

// --- DOM ELEMENTS ---
const els = {
  html: document.documentElement,
  themeBtns: document.querySelectorAll(".theme-btn"),
  coursesGrid: document.getElementById("courses-grid"),
  tabsContainer: document.getElementById("tabs-container"),
  progressBar: document.getElementById("progress-bar"),
  progressText: document.getElementById("progress-text"),
  mobileMenuBtn: document.getElementById("mobile-menu-btn"),
  closeMenuBtn: document.getElementById("close-menu-btn"),
  mobileMenuOverlay: document.getElementById("mobile-menu-overlay"),
  mobileMenuDrawer: document.getElementById("mobile-menu-drawer"),
  particlesContainer: document.getElementById("particles-container"),
};

// --- INITIALIZATION ---
function init() {
  loadTheme();
  loadProgress();
  renderParticles();
  renderCourses();
  setupEventListeners();
}

// --- LOGIC FUNCTIONS ---

// 1. Theme Logic
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "light") {
    setTheme(false);
  } else {
    setTheme(true);
  }
}

function setTheme(isDark) {
  STATE.isDark = isDark;
  if (isDark) {
    els.html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    els.themeBtns.forEach(
      (btn) => (btn.innerHTML = '<i class="fas fa-sun"></i>'),
    );
  } else {
    els.html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    els.themeBtns.forEach(
      (btn) => (btn.innerHTML = '<i class="fas fa-moon"></i>'),
    );
  }
}

// 2. Progress Logic
function loadProgress() {
  const saved = JSON.parse(
    localStorage.getItem("chemstudy_thcs_progress") || "[]",
  );
  STATE.completed = saved;
  updateProgressUI();
}

function toggleCourseComplete(id, event) {
  if (event) event.stopPropagation(); // Prevent card click

  if (STATE.completed.includes(id)) {
    STATE.completed = STATE.completed.filter((item) => item !== id);
  } else {
    STATE.completed.push(id);
  }

  localStorage.setItem(
    "chemstudy_thcs_progress",
    JSON.stringify(STATE.completed),
  );
  updateProgressUI();
  renderCourses(); // Re-render to show updated styles
}

function updateProgressUI() {
  const total = thcsCourses.length;
  const current = STATE.completed.length;
  const percent = Math.round((current / total) * 100);

  els.progressText.innerText = `${percent}%`;
  els.progressText.className = percent === 100 ? "text-success" : "text-accent";

  els.progressBar.style.width = `${percent}%`;
  if (percent === 100) {
    els.progressBar.className =
      "h-full bg-success shadow-[0_0_10px_#10b981] transition-all duration-1000 ease-out";
  } else {
    els.progressBar.className =
      "h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out";
  }
}

// 3. Rendering Logic
function renderCourses() {
  // Filter data
  let displayCourses = thcsCourses;
  if (STATE.activeTab !== "all") {
    displayCourses = thcsCourses.filter((c) => c.grade == STATE.activeTab);
  }

  // Clear grid
  els.coursesGrid.innerHTML = "";

  if (displayCourses.length === 0) {
    els.coursesGrid.innerHTML = `<div class="col-span-full text-center py-20 opacity-50"><p>Không tìm thấy bài học phù hợp.</p></div>`;
    return;
  }

  // Generate HTML String for each card
  displayCourses.forEach((course) => {
    const isDone = STATE.completed.includes(course.id);

    // Conditional Styles
    const borderColor = isDone
      ? "border-success/50 ring-1 ring-success/30"
      : "border-slate-200 dark:border-white/10";
    const btnStyle = isDone
      ? "bg-success text-white border-success shadow-[0_0_10px_rgba(16,185,129,0.4)]"
      : "bg-slate-100 border-slate-300 text-slate-300 hover:border-accent hover:text-accent dark:bg-white/5 dark:border-white/20 dark:text-white/20";
    const titleColor = isDone
      ? "text-success"
      : "text-slate-800 dark:text-white group-hover:text-accent";
    const footerText = isDone ? "text-success" : "text-accent";
    const arrowColor = isDone
      ? "text-success"
      : "text-slate-400 dark:text-white/50";
    const btnText = isDone ? "Đã hoàn thành" : "Vào học ngay";

    const cardHTML = `
            <div class="group relative h-full animate-fade-in-up">
                <div class="relative h-full flex flex-col p-6 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-xl bg-white/70 dark:bg-cardDark/80 dark:backdrop-blur-xl ${borderColor}">
                    
                    <!-- Checkbox Button -->
                    <button onclick="toggleCourseComplete('${course.id}', event)" class="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${btnStyle}">
                        <i class="fas fa-check text-sm"></i>
                    </button>

                    <!-- Icon & Label -->
                    <div class="flex justify-between items-start mb-4">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                            <i class="fas ${course.icon}"></i>
                        </div>
                        <span class="mt-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Lớp ${course.grade}
                        </span>
                    </div>

                    <!-- Content -->
                    <div class="flex-grow cursor-pointer" onclick="window.location.href='${course.link}'">
                        <h3 class="text-lg font-bold mb-2 leading-tight transition-colors ${titleColor}">
                            ${course.title}
                        </h3>
                        <p class="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                            ${course.desc}
                        </p>
                    </div>

                    <!-- Footer -->
                    <div class="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between cursor-pointer" onclick="window.location.href='${course.link}'">
                        <span class="text-xs font-semibold ${footerText}">${btnText}</span>
                        <i class="fas fa-arrow-right text-xs transform group-hover:translate-x-1 transition-transform ${arrowColor}"></i>
                    </div>
                </div>
            </div>
        `;
    els.coursesGrid.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function renderParticles() {
  const count = window.innerWidth < 768 ? 6 : 12;
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 20 + 20;
    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 15;

    const particle = document.createElement("div");
    particle.className =
      "absolute text-slate-300 dark:text-slate-700 opacity-20 dark:opacity-30";
    particle.innerHTML = '<i class="fas fa-hexagon"></i>';
    particle.style.left = `${left}%`;
    particle.style.fontSize = `${size}px`;
    particle.style.animation = `float ${duration}s infinite linear`;
    particle.style.animationDelay = `${delay}s`;

    els.particlesContainer.appendChild(particle);
  }
}

// 4. Event Listeners
function setupEventListeners() {
  // Theme Toggles
  els.themeBtns.forEach((btn) => {
    btn.addEventListener("click", () => setTheme(!STATE.isDark));
  });

  // Tab Switching
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Remove active from all
      tabBtns.forEach((b) => {
        b.classList.remove("active");
        b.classList.add("text-slate-500", "dark:text-gray-400");
        b.classList.remove("text-white");
      });
      // Add active to clicked
      e.target.classList.add("active");
      e.target.classList.remove("text-slate-500", "dark:text-gray-400");

      // Update State & Render
      STATE.activeTab = e.target.getAttribute("data-tab");
      renderCourses();
    });
  });

  // Mobile Menu
  els.mobileMenuBtn.addEventListener("click", () => {
    els.mobileMenuOverlay.classList.remove("hidden");
    setTimeout(() => els.mobileMenuOverlay.classList.remove("opacity-0"), 10);
    els.mobileMenuDrawer.classList.remove("translate-x-full");
  });

  const closeMenu = () => {
    els.mobileMenuOverlay.classList.add("opacity-0");
    els.mobileMenuDrawer.classList.add("translate-x-full");
    setTimeout(() => els.mobileMenuOverlay.classList.add("hidden"), 300);
  };

  els.closeMenuBtn.addEventListener("click", closeMenu);
  els.mobileMenuOverlay.addEventListener("click", closeMenu);
}

// Run App
init();
