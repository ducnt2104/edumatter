// === DATA & STATE ===
const quizData = [
  // PART 1: OXYGEN
  {
    id: 1,
    q: "Câu 1: Nêu tính chất vật lí cơ bản của khí oxygen?",
    options: [
      "Khí màu xanh, mùi hắc",
      "Không màu, không mùi, nặng hơn không khí, ít tan trong nước",
      "Nhẹ hơn không khí, tan nhiều trong nước",
      "Không màu, mùi thơm",
    ],
    ans: 1,
    hint: "Oxygen nặng hơn không khí và ít tan trong nước.",
  },
  {
    id: 2,
    q: "Câu 2: Vì sao thợ lặn hoặc lính cứu hỏa phải đeo bình nén khí oxygen?",
    options: [
      "Để tránh bụi",
      "Vì môi trường đó thiếu oxygen để hô hấp",
      "Để làm mát cơ thể",
      "Để bơi nhanh hơn",
    ],
    ans: 1,
    hint: "Con người cần oxygen để duy trì sự sống (hô hấp).",
  },
  {
    id: 3,
    q: "Câu 3: Tại sao khi quạt gió vào bếp củi đang cháy thì lửa bùng to hơn?",
    options: [
      "Vì gió làm mát củi",
      "Vì gió cung cấp thêm oxygen cho sự cháy",
      "Vì gió thổi bay tro",
      "Cả B và C",
    ],
    ans: 1,
    hint: "Oxygen duy trì sự cháy, quạt gió cung cấp thêm lượng oxygen tiếp xúc với nhiên liệu.",
  },

  // PART 2: AIR
  {
    id: 4,
    q: "Câu 4: Chất khí nào chiếm tỉ lệ lớn nhất trong không khí?",
    options: ["Oxygen (78%)", "Carbon dioxide (78%)", "Nitrogen ", "Hơi nước"],
    ans: 2,
    hint: "Nitrogen chiếm khoảng 78% thể tích không khí.",
  },
  {
    id: 5,
    q: "Câu 5: Hiện tượng nào chứng tỏ trong không khí có chứa hơi nước?",
    options: [
      "Sương mù vào sáng sớm",
      "Gió thổi mạnh",
      "Trời nắng",
      "Khói từ nhà máy",
    ],
    ans: 0,
    hint: "Hơi nước gặp lạnh ngưng tụ thành sương mù.",
  },

  // PART 3: POLLUTION
  {
    id: 6,
    q: "Câu 6: Đâu là nguồn gây ô nhiễm không khí do con người?",
    options: [
      "Núi lửa phun trào",
      "Cháy rừng tự nhiên",
      "Khí thải nhà máy và phương tiện giao thông",
      "Sóng biển",
    ],
    ans: 2,
    hint: "Hoạt động công nghiệp và giao thông thải ra nhiều khói bụi.",
  },
  {
    id: 7,
    q: "Câu 7: Vì sao nên ưu tiên sử dụng xe đạp hoặc phương tiện công cộng?",
    options: [
      "Để tiết kiệm tiền",
      "Để giảm khí thải gây ô nhiễm môi trường",
      "Để đi chậm hơn",
      "Không có lý do gì",
    ],
    ans: 1,
    hint: "Giảm lượng xe máy/ô tô cá nhân giúp giảm lượng khí thải độc hại.",
  },
  {
    id: 8,
    q: "Câu 8: Tại sao trồng cây xanh giúp làm sạch không khí?",
    options: [
      "Cây hấp thụ CO₂ và thải ra O₂",
      "Cây chắn bụi",
      "Cây làm giảm nhiệt độ",
      "Tất cả các ý trên",
    ],
    ans: 3,
    hint: "Cây xanh quang hợp giúp cân bằng khí và lọc bụi.",
  },
];

let cityState = { cars: false, factory: false, trees: false };
let triangleState = { heat: true, fuel: true, oxygen: true };

// === DOM ELEMENTS ===
const slider = document.getElementById("oxygen-slider");
const fireEl = document.getElementById("sim-fire");
const o2Display = document.getElementById("o2-display");
const glowBg = document.getElementById("glow-bg");

document.addEventListener("DOMContentLoaded", () => {
  initCombustionSim();
  initDragDrop();
  renderQuiz();
  checkTheme();
});

// === 1. COMBUSTION LOGIC ===
function initCombustionSim() {
  slider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    let label = `${val}%`;
    if (val === 0) label += " (Tắt)";
    else if (val === 21) label += " (Không khí)";
    else if (val === 100) label += " (Tinh khiết)";
    o2Display.innerText = `Nồng độ O₂: ${label}`;

    if (val < 10) {
      fireEl.style.height = "0px";
      fireEl.style.opacity = 0;
      glowBg.style.opacity = 0;
    } else {
      const h = 40 + (val / 100) * 80;
      const w = 30 + (val / 100) * 20;
      const filter =
        val > 50
          ? `brightness(${1 + (val - 50) / 100}) hue-rotate(${-(val - 50) / 2}deg)`
          : "none";
      fireEl.style.height = `${h}px`;
      fireEl.style.width = `${w}px`;
      fireEl.style.opacity = 0.8 + val / 500;
      fireEl.style.filter = `blur(${4 - val / 30}px) ${filter}`;
      glowBg.style.opacity = val / 150;
    }
  });
}

// === 2. FIRE TRIANGLE ===
function toggleFireSide(el, type) {
  if (el.classList.contains("removed")) return;
  el.classList.add("removed");
  triangleState[type] = false;
  checkTriangle();
}

function checkTriangle() {
  const centerFire = document.querySelector(
    "#triangle-fire-center .real-flame",
  );
  const msg = document.getElementById("triangle-msg");
  if (!triangleState.heat || !triangleState.fuel || !triangleState.oxygen) {
    centerFire.style.transform = "scale(0)";
    centerFire.style.opacity = 0;
    msg.classList.remove("hidden");
  }
}

function resetTriangle() {
  triangleState = { heat: true, fuel: true, oxygen: true };
  document
    .querySelectorAll(".tri-side")
    .forEach((el) => el.classList.remove("removed"));
  const centerFire = document.querySelector(
    "#triangle-fire-center .real-flame",
  );
  centerFire.style.transform = "scale(1)";
  centerFire.style.opacity = 0.9;
  document.getElementById("triangle-msg").classList.add("hidden");
}

// === 3. VIRTUAL LAB (SPLINT) ===
function initDragDrop() {
  const splint = document.getElementById("splint");
  const jar = document.getElementById("gas-jar");
  const ember = document.getElementById("splint-ember");
  const container = document.getElementById("lab-zone");

  let isDragging = false;
  let startX, startY, initialLeft, initialTop;

  const startDrag = (e) => {
    if (e.type === "touchstart") e.preventDefault();
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    initialLeft = splint.offsetLeft;
    initialTop = splint.offsetTop;
    startX = clientX;
    startY = clientY;
    splint.style.cursor = "grabbing";
    splint.style.transition = "none";
  };

  const doDrag = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = clientX - startX;
    const dy = clientY - startY;

    let newLeft = initialLeft + dx;
    let newTop = initialTop + dy;

    const cw = container.clientWidth;
    const ch = container.clientHeight;
    if (newLeft < 0) newLeft = 0;
    if (newLeft > cw - splint.clientWidth) newLeft = cw - splint.clientWidth;
    if (newTop < 0) newTop = 0;
    if (newTop > ch - splint.clientHeight) newTop = ch - splint.clientHeight;

    splint.style.left = `${newLeft}px`;
    splint.style.top = `${newTop}px`;

    const splintRect = ember.getBoundingClientRect();
    const jarRect = jar.getBoundingClientRect();

    if (
      splintRect.left > jarRect.left &&
      splintRect.right < jarRect.right &&
      splintRect.top > jarRect.top &&
      splintRect.bottom < jarRect.bottom
    ) {
      if (!ember.classList.contains("burning")) {
        ember.classList.remove("glowing");
        ember.classList.add("burning");
      }
    } else {
      if (ember.classList.contains("burning")) {
        ember.classList.remove("burning");
        ember.classList.add("glowing");
      }
    }
  };

  const stopDrag = () => {
    isDragging = false;
    splint.style.cursor = "grab";
    splint.style.transition = "transform 0.1s";
  };

  splint.addEventListener("mousedown", startDrag);
  splint.addEventListener("touchstart", startDrag);
  window.addEventListener("mousemove", doDrag);
  window.addEventListener("touchmove", doDrag, { passive: false });
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("touchend", stopDrag);
}

// === 4. CANDLE WATER EXPERIMENT ===
function runCandleExp() {
  const container = document.getElementById("candle-sim");
  if (!container) return;

  container.classList.remove("anim-running");

  requestAnimationFrame(() => {
    container.classList.add("anim-running");
  });
}

// === 5. CHART & CYCLE ===
function showGasInfo(id) {
  const nameEl = document.getElementById("gas-name");
  const perEl = document.getElementById("gas-percent");
  if (id === "n2") {
    nameEl.innerText = "Nitrogen";
    perEl.innerText = "78%";
    perEl.style.color = "#3b82f6";
  }
  if (id === "o2") {
    nameEl.innerText = "Oxygen";
    perEl.innerText = "21%";
    perEl.style.color = "#ef4444";
  }
  if (id === "other") {
    nameEl.innerText = "Khí khác";
    perEl.innerText = "1%";
    perEl.style.color = "#f59e0b";
  }
}
function hideGasInfo() {
  document.getElementById("gas-name").innerText = "Không khí";
  document.getElementById("gas-percent").innerText = "100%";
  document.getElementById("gas-percent").style.color = "inherit";
}

let cycleRunning = false;
function toggleCycle() {
  cycleRunning = !cycleRunning;
  const particles = document.querySelectorAll(".cycle-particle");
  const texts = document.querySelectorAll(".cycle-text");
  const icon = document.getElementById("cycle-icon");

  if (cycleRunning) {
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    particles.forEach((p) => (p.style.opacity = 1));
    texts.forEach((t) => (t.style.opacity = 1));
  } else {
    icon.classList.add("fa-play");
    icon.classList.remove("fa-pause");
    particles.forEach((p) => (p.style.opacity = 0));
    texts.forEach((t) => (t.style.opacity = 0));
  }
}

// === 6. CITY & POLLUTION ===
function toggleCityFactor(factor) {
  cityState[factor] = !cityState[factor];

  const btn = document.getElementById(`btn-${factor}`);
  if (cityState[factor]) {
    btn.classList.add(
      "ring-2",
      "ring-blue-500",
      "bg-blue-50",
      "dark:bg-blue-900/40",
    );
  } else {
    btn.classList.remove(
      "ring-2",
      "ring-blue-500",
      "bg-blue-50",
      "dark:bg-blue-900/40",
    );
  }

  if (factor === "cars") {
    document.getElementById("cars-container").style.opacity = cityState[factor]
      ? 1
      : 0;
    if (cityState[factor])
      document
        .querySelectorAll("#cars-container i")
        .forEach((el) => (el.style.animationPlayState = "running"));
  }
  if (factor === "factory") {
    document.getElementById("factory-smoke").style.opacity = cityState[factor]
      ? 1
      : 0;
  }
  if (factor === "trees") {
    document.getElementById("trees-container").style.opacity = cityState[factor]
      ? 1
      : 0;
  }

  calculateAQI();
}

function calculateAQI() {
  let base = 30; // Clean air
  if (cityState.cars) base += 50;
  if (cityState.factory) base += 80;
  if (cityState.trees) base -= 40;

  if (base < 10) base = 10;
  if (base > 300) base = 300;

  const aqiVal = document.getElementById("aqi-value");
  const aqiText = document.getElementById("aqi-text");
  const smog = document.getElementById("smog-layer");
  const sky = document.getElementById("sky-bg");
  const statusDot = document.getElementById("status-dot");

  aqiVal.innerText = base;

  if (base <= 50) {
    aqiVal.className = "text-xl font-display font-bold text-green-500";
    aqiText.className =
      "text-xs font-bold text-white bg-green-500 px-2 py-0.5 rounded";
    aqiText.innerText = "Trong lành";
    smog.style.opacity = 0;
    sky.style.filter = "grayscale(0%)";
    statusDot.className = "w-2 h-2 rounded-full bg-green-500 animate-pulse";
    smog.classList.remove("smog-active");
  } else if (base <= 100) {
    aqiVal.className = "text-xl font-display font-bold text-yellow-500";
    aqiText.className =
      "text-xs font-bold text-white bg-yellow-500 px-2 py-0.5 rounded";
    aqiText.innerText = "Trung bình";
    smog.style.opacity = 0.3;
    sky.style.filter = "grayscale(20%)";
    statusDot.className = "w-2 h-2 rounded-full bg-yellow-500 animate-pulse";
    smog.classList.add("smog-active");
  } else {
    aqiVal.className = "text-xl font-display font-bold text-red-500";
    aqiText.className =
      "text-xs font-bold text-white bg-red-500 px-2 py-0.5 rounded";
    aqiText.innerText = "Ô nhiễm";
    smog.style.opacity = 0.7;
    sky.style.filter = "grayscale(60%) sepia(20%)";
    statusDot.className = "w-2 h-2 rounded-full bg-red-500 animate-pulse";
    smog.classList.add("smog-active");
  }
}

// === 7. QUIZ ===
function renderQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  const saved = JSON.parse(localStorage.getItem("chemQuizV2")) || {};

  quizData.forEach((item, index) => {
    const isDone = saved[item.id];
    const html = `
                <div class="p-6 transition hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <div class="flex items-start gap-4">
                        <span class="flex-shrink-0 w-8 h-8 rounded-full ${isDone ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-500"} font-bold flex items-center justify-center text-sm">
                            ${isDone ? '<i class="fas fa-check"></i>' : index + 1}
                        </span>
                        <div class="w-full">
                            <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-3 text-sm md:text-base">${item.q}</h4>
                            <div class="space-y-2">
                                ${item.options
                                  .map(
                                    (opt, i) => `
                                    <button onclick="checkAnswer(${item.id}, ${i}, ${item.ans})" 
                                        class="w-full text-left px-4 py-3 rounded-xl border text-sm transition-all
                                        ${
                                          isDone && i === item.ans
                                            ? "bg-green-50 border-green-200 text-green-700 font-bold"
                                            : isDone
                                              ? "bg-slate-50 border-slate-100 text-slate-400 opacity-50 cursor-not-allowed"
                                              : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm dark:bg-slate-800 dark:border-slate-600"
                                        }" ${isDone ? "disabled" : ""}>
                                        ${opt}
                                    </button>
                                `,
                                  )
                                  .join("")}
                            </div>
                            <div id="hint-${item.id}" class="hidden mt-3 text-xs bg-yellow-50 text-yellow-700 p-3 rounded-lg border border-yellow-100">
                                <i class="fas fa-lightbulb mr-1"></i> ${item.hint}
                            </div>
                        </div>
                    </div>
                </div>
              `;
    container.innerHTML += html;
  });
  updateProgress();
}

function checkAnswer(id, selected, correct) {
  if (selected === correct) {
    const saved = JSON.parse(localStorage.getItem("chemQuizV2")) || {};
    saved[id] = true;
    localStorage.setItem("chemQuizV2", JSON.stringify(saved));
    const btn = event.target;
    btn.classList.remove("bg-white", "border-slate-200");
    btn.classList.add("bg-green-500", "text-white", "border-green-600");
    setTimeout(renderQuiz, 500);
  } else {
    document.getElementById(`hint-${id}`).classList.remove("hidden");
    event.target.classList.add(
      "animate-shake",
      "bg-red-50",
      "border-red-200",
      "text-red-500",
    );
    setTimeout(() => event.target.classList.remove("animate-shake"), 500);
  }
}

function updateProgress() {
  const saved = JSON.parse(localStorage.getItem("chemQuizV2")) || {};
  const done = Object.keys(saved).length;
  const total = quizData.length;
  const pct = Math.round((done / total) * 100);
  document.getElementById("progress-bar").style.width = `${pct}%`;
  document.getElementById("progress-text").innerText = `${pct}%`;
}

function resetQuiz() {
  if (confirm("Làm lại toàn bộ bài tập?")) {
    localStorage.removeItem("chemQuizV2");
    renderQuiz();
  }
}

// === THEME ===
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );
});
function checkTheme() {
  if (
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  }
}

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      </style>`,
);
