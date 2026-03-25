// === 1. THEME MANAGEMENT ===
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Check local storage or system preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
});

// === 2. OCTET SIMULATION (Mục đích: Hiểu quy tắc bát tử) ===
let electrons = 0;
const orbit = document.getElementById("electron-orbit");
const countDisplay = document.getElementById("e-count");
const statusDisplay = document.getElementById("octet-status");

function addElectron() {
  if (electrons < 8) {
    electrons++;
    const el = document.createElement("div");
    // Calculate position on circle
    const angle = (electrons - 1) * (360 / 8) * (Math.PI / 180);
    const radius = 90; // px
    const x = Math.cos(angle) * radius + 96 - 8; // center offset
    const y = Math.sin(angle) * radius + 96 - 8;

    el.className =
      "absolute w-4 h-4 bg-yellow-400 rounded-full shadow-md animate-pulse";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    orbit.appendChild(el);

    countDisplay.innerText = electrons;
    updateOctetStatus();
  }
}

function resetOctet() {
  electrons = 0;
  orbit.innerHTML = "";
  countDisplay.innerText = "0";
  updateOctetStatus();
}

function updateOctetStatus() {
  if (electrons === 8) {
    statusDisplay.innerText = "🎉 Bền vững (Quy tắc Octet)!";
    statusDisplay.className =
      "mt-2 text-sm h-6 font-bold text-green-600 animate-bounce";
    orbit.parentElement.classList.add(
      "border-green-500",
      "shadow-[0_0_20px_limegreen]",
    );
    orbit.parentElement.classList.remove("border-slate-400");
  } else {
    statusDisplay.innerText = "Chưa bền vững...";
    statusDisplay.className = "mt-2 text-sm h-6 font-semibold text-slate-500";
    orbit.parentElement.classList.remove(
      "border-green-500",
      "shadow-[0_0_20px_limegreen]",
    );
    orbit.parentElement.classList.add("border-slate-400");
  }
}

// === 3. IONIC SIMULATION (Mục đích: Hiểu sự chuyển e) ===
let isTransferred = false;
function triggerIonicTransfer() {
  if (isTransferred) return;
  isTransferred = true;

  const electron = document.getElementById("transfer-electron");
  const na = document.getElementById("na-atom");
  const cl = document.getElementById("cl-atom");
  const feedback = document.getElementById("ionic-feedback");
  const naLabel = document.getElementById("na-label");
  const clLabel = document.getElementById("cl-label");

  // Move electron logic (CSS animation via classes/styles)
  // Simplified relative movement for demo
  electron.style.transition = "all 1s ease-in-out";
  electron.style.transform = "translate(150px, 0)"; // Move roughly to Cl (responsive needs calculation but fixed px works for sim container)
  electron.style.opacity = "0"; // Fade out into Cl

  setTimeout(() => {
    // Na becomes Na+ (smaller)
    na.querySelector("div").classList.remove("w-24", "h-24", "bg-slate-300");
    na.querySelector("div").classList.add(
      "w-16",
      "h-16",
      "bg-red-200",
      "border-4",
      "border-red-500",
    );
    na.querySelector("span").innerText = "Na⁺";
    naLabel.innerText = "Cation Na⁺ (2,8)";

    // Cl becomes Cl- (larger)
    cl.querySelector("div").classList.remove("w-20", "h-20", "bg-green-200");
    cl.querySelector("div").classList.add(
      "w-28",
      "h-28",
      "bg-green-400",
      "border-4",
      "border-green-600",
    );
    cl.querySelector("span").innerText = "Cl⁻";
    clLabel.innerText = "Anion Cl⁻ (2,8,8)";

    feedback.innerText = "✨ Lực hút tĩnh điện hình thành liên kết ION!";

    // Add electrostatic pull effect
    document.getElementById("ionic-sim-area").classList.add("gap-4");
    document
      .getElementById("ionic-sim-area")
      .classList.remove("gap-8", "md:gap-20");
  }, 1000);
}

function resetIonicSim() {
  isTransferred = false;
  const electron = document.getElementById("transfer-electron");
  const na = document.getElementById("na-atom");
  const cl = document.getElementById("cl-atom");

  electron.style.transform = "translate(0, 0)";
  electron.style.opacity = "1";

  na.querySelector("div").className =
    "w-24 h-24 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center relative shadow-lg ring-4 ring-transparent transition-all";
  na.querySelector("span").innerText = "Na";
  document.getElementById("na-label").innerText = "Na (2,8,1)";

  cl.querySelector("div").className =
    "w-20 h-20 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center relative shadow-lg transition-all";
  cl.querySelector("span").innerText = "Cl";
  document.getElementById("cl-label").innerText = "Cl (2,8,7)";

  document.getElementById("ionic-feedback").innerText = "";
  document.getElementById("ionic-sim-area").classList.remove("gap-4");
  document.getElementById("ionic-sim-area").classList.add("gap-8", "md:gap-20");
}

// === 4. CRYSTAL LAB (Mục đích: Quan sát quá trình kết tinh) ===
function startCrystalGrowth() {
  const seed = document.getElementById("crystal-seed");
  const string = document.getElementById("crystal-string");
  const solution = document.getElementById("solution-liquid");

  // 1. Drop string
  string.style.opacity = "1";
  string.style.height = "120px"; // Dip into water

  setTimeout(() => {
    // 2. Crystal grows
    seed.style.opacity = "1";
    seed.style.transform = "scale(5) rotate(45deg)"; // Grow big
    solution.style.height = "60%"; // Solution reduces slightly
  }, 1000);
}

function resetCrystal() {
  const seed = document.getElementById("crystal-seed");
  const string = document.getElementById("crystal-string");
  const solution = document.getElementById("solution-liquid");

  string.style.height = "128px";
  string.style.opacity = "0";

  seed.style.opacity = "0";
  seed.style.transform = "scale(1) rotate(45deg)";

  solution.style.height = "75%";
}

// === 5. COVALENT BOND SLIDER (Mục đích: Quan sát năng lượng liên kết) ===
const bondSlider = document.getElementById("bond-distance");
const atomLeft = document.getElementById("atom-left");
const atomRight = document.getElementById("atom-right");
const electronCloud = document.getElementById("electron-cloud");
const energyText = document.getElementById("energy-feedback");

bondSlider.addEventListener("input", (e) => {
  const val = e.target.value; // 0 (close) to 100 (far)

  // Map value to visual distance %
  const leftPos = 30 + (val / 100) * 15; // 30% to 45%
  const rightPos = 30 + (val / 100) * 15; // 30% to 45% (from right)

  atomLeft.style.left = 50 - (100 - val) / 4 + "%";
  atomRight.style.right = 50 - (100 - val) / 4 + "%";

  // Logic logic
  if (val > 80) {
    energyText.innerText = "Trạng thái: Quá xa (Không liên kết)";
    energyText.className =
      "absolute bottom-4 font-mono text-sm font-bold text-slate-500";
    electronCloud.style.opacity = 0;
  } else if (val < 20) {
    energyText.innerText = "Trạng thái: Quá gần (Đẩy nhau mạnh)";
    energyText.className =
      "absolute bottom-4 font-mono text-sm font-bold text-red-500 animate-pulse";
    electronCloud.style.opacity = 0.5;
    electronCloud.style.width = "40px";
    electronCloud.className =
      "absolute h-10 bg-red-400/50 rounded-full blur-md transition-all duration-100";
  } else {
    energyText.innerText = "Trạng thái: Cân bằng (Liên kết bền)";
    energyText.className =
      "absolute bottom-4 font-mono text-sm font-bold text-green-600";
    electronCloud.style.opacity = 1;
    electronCloud.style.width = "80px"; // Bridge the gap
    electronCloud.className =
      "absolute h-10 bg-blue-400/50 rounded-full blur-md transition-all duration-100";
  }
});

// === 6. WATER SIMULATION (Mục đích: Hiểu trạng thái vật chất) ===
const waterContainer = document.getElementById("water-sim-container");
const waterDesc = document.getElementById("water-desc");

// Generate water molecules HTML
function generateWaterMolecules() {
  waterContainer.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    const mol = document.createElement("div");
    mol.className =
      "w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-[8px] text-white shadow-sm m-1 transition-all duration-1000 water-mol relative";
    mol.innerHTML = "H₂O";
    waterContainer.appendChild(mol);
  }
}
generateWaterMolecules();

function setWaterState(state) {
  const mols = document.querySelectorAll(".water-mol");

  // Reset active buttons
  ["btn-ice", "btn-liquid", "btn-gas"].forEach((id) => {
    document.getElementById(id).className =
      "px-4 py-1 rounded-full text-xs font-bold transition-all hover:bg-white dark:hover:bg-slate-600";
    document.getElementById(id).style.color = "";
  });
  document.getElementById(`btn-${state}`).className =
    "px-4 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-600 shadow text-blue-600";

  if (state === "ice") {
    waterContainer.className =
      "w-full h-48 relative overflow-hidden bg-white/30 dark:bg-black/20 rounded-lg mb-4 grid grid-cols-5 gap-1 p-8 content-center";
    mols.forEach((m) => (m.style.transform = "translate(0,0)"));
    waterDesc.innerText =
      "Đá (Rắn): Cấu trúc tinh thể rỗng, trật tự, thể tích lớn.";
  } else if (state === "liquid") {
    waterContainer.className =
      "w-full h-48 relative overflow-hidden bg-white/30 dark:bg-black/20 rounded-lg mb-4 flex flex-wrap content-end justify-center gap-0 p-2";
    mols.forEach((m, i) => {
      m.style.transform = `translate(${Math.sin(i) * 5}px, 0)`; // Slight jiggle
    });
    waterDesc.innerText =
      "Lỏng: Các phân tử trượt lên nhau, liên kết H linh động.";
  } else if (state === "gas") {
    waterContainer.className =
      "w-full h-48 relative overflow-hidden bg-white/30 dark:bg-black/20 rounded-lg mb-4 block";
    mols.forEach((m) => {
      // Random positions
      const x = Math.random() * 200;
      const y = Math.random() * 100;
      m.style.position = "absolute";
      m.style.transform = `translate(${x}px, ${y}px)`;
      m.style.opacity = Math.random() > 0.5 ? 1 : 0.6;
    });
    waterDesc.innerText =
      "Hơi: Khoảng cách xa, chuyển động hỗn loạn, gần như không có liên kết.";
  }
}
// Initialize Liquid
setWaterState("liquid");

// === 7. QUIZ SYSTEM (Game hóa) ===
const questions = [
  {
    q: "Nguyên tử nguyên tố nào sau đây có xu hướng nhường 1 electron?",
    opts: ["Chlorine (Cl)", "Potassium (K)", "Neon (Ne)", "Oxygen (O)"],
    a: 1,
    expl: "Potassium (K) thuộc nhóm IA, có 1e lớp ngoài cùng nên dễ nhường 1e.",
  },
  {
    q: "Liên kết trong phân tử NaCl thuộc loại nào?",
    opts: [
      "Cộng hóa trị không cực",
      "Cộng hóa trị có cực",
      "Liên kết Ion",
      "Liên kết kim loại",
    ],
    a: 2,
    expl: "NaCl hình thành giữa kim loại mạnh (Na) và phi kim mạnh (Cl) do lực hút tĩnh điện.",
  },
  {
    q: "Để đạt quy tắc Octet, nguyên tử Nitrogen (Z=7) cần:",
    opts: [
      "Nhường 3 electron",
      "Nhận 3 electron",
      "Nhường 5 electron",
      "Không nhận/nhường",
    ],
    a: 1,
    expl: "Nitrogen có 5e lớp ngoài cùng, cần nhận thêm 3e để đạt 8e bền vững.",
  },
  {
    q: "Liên kết Hydrogen giải thích tính chất nào của nước?",
    opts: [
      "Màu sắc trong suốt",
      "Nhiệt độ sôi cao bất thường",
      "Tính dẫn điện",
      "Khối lượng mol",
    ],
    a: 1,
    expl: "Liên kết Hydrogen giữa các phân tử nước làm tăng nhiệt độ sôi so với các chất cùng nhóm.",
  },
  {
    q: "Công thức Lewis của CH₄ có bao nhiêu cặp electron chung?",
    opts: ["2 cặp", "3 cặp", "4 cặp", "1 cặp"],
    a: 2,
    expl: "C tạo 4 liên kết đơn với 4 nguyên tử H => 4 cặp electron chung.",
  },
];

let currentQ = 0;
let score = 0;

function startQuiz() {
  document.getElementById("quiz-start").classList.add("hidden");
  document.getElementById("quiz-question").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQ];
  document.getElementById("q-current").innerText = currentQ + 1;
  document.getElementById("q-text").innerText = q.q;

  const optsDiv = document.getElementById("q-options");
  optsDiv.innerHTML = "";

  q.opts.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className =
      "w-full text-left p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all font-medium text-slate-700 dark:text-slate-300";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(idx, btn);
    optsDiv.appendChild(btn);
  });

  document.getElementById("progress-bar").style.width =
    ((currentQ + 1) / questions.length) * 100 + "%";
  document.getElementById("q-feedback").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");
}

function checkAnswer(idx, btn) {
  // Disable all buttons
  const btns = document.getElementById("q-options").children;
  for (let b of btns) b.disabled = true;

  const correctIdx = questions[currentQ].a;
  const feedback = document.getElementById("q-feedback");
  feedback.classList.remove("hidden");

  if (idx === correctIdx) {
    score++;
    btn.classList.add(
      "bg-green-100",
      "border-green-500",
      "text-green-800",
      "dark:bg-green-900",
      "dark:text-white",
    );
    feedback.className =
      "mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200";
    feedback.innerHTML = `<strong>Chính xác!</strong> ${questions[currentQ].expl}`;
  } else {
    btn.classList.add(
      "bg-red-100",
      "border-red-500",
      "text-red-800",
      "dark:bg-red-900",
      "dark:text-white",
    );
    // Highlight correct
    btns[correctIdx].classList.add(
      "bg-green-100",
      "border-green-500",
      "text-green-800",
      "dark:bg-green-900",
      "dark:text-white",
    );
    feedback.className =
      "mt-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200";
    feedback.innerHTML = `<strong>Sai rồi!</strong> ${questions[currentQ].expl}`;
  }

  document.getElementById("next-btn").classList.remove("hidden");
  if (currentQ === questions.length - 1) {
    document.getElementById("next-btn").innerText = "Xem kết quả";
  }
}

function nextQuestion() {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-question").classList.add("hidden");
  document.getElementById("quiz-result").classList.remove("hidden");
  document.getElementById("score").innerText = score;
}

function resetQuiz() {
  currentQ = 0;
  score = 0;
  document.getElementById("quiz-result").classList.add("hidden");
  startQuiz();
}
document.addEventListener("DOMContentLoaded", () => {
  // --- DATABASE: Elements 1-20 ---
  const elements = [
    {
      z: 1,
      sym: "H",
      name: "Hydrogen",
      group: "IA",
      gIdx: 1,
      p: 1,
      shells: [1],
      config: ["1s¹"],
      val: 1,
      type: "nonmetal",
      en: 2.2,
      rad: 53,
    },
    {
      z: 2,
      sym: "He",
      name: "Helium",
      group: "VIIIA",
      gIdx: 8,
      p: 1,
      shells: [2],
      config: ["1s²"],
      val: 2,
      type: "noble",
      en: 0,
      rad: 31,
    },
    {
      z: 3,
      sym: "Li",
      name: "Lithium",
      group: "IA",
      gIdx: 1,
      p: 2,
      shells: [2, 1],
      config: ["1s²", "2s¹"],
      val: 1,
      type: "metal",
      en: 0.98,
      rad: 167,
    },
    {
      z: 4,
      sym: "Be",
      name: "Beryllium",
      group: "IIA",
      gIdx: 2,
      p: 2,
      shells: [2, 2],
      config: ["1s²", "2s²"],
      val: 2,
      type: "metal",
      en: 1.57,
      rad: 112,
    },
    {
      z: 5,
      sym: "B",
      name: "Boron",
      group: "IIIA",
      gIdx: 3,
      p: 2,
      shells: [2, 3],
      config: ["1s²", "2s²", "2p¹"],
      val: 3,
      type: "nonmetal",
      en: 2.04,
      rad: 87,
    },
    {
      z: 6,
      sym: "C",
      name: "Carbon",
      group: "IVA",
      gIdx: 4,
      p: 2,
      shells: [2, 4],
      config: ["1s²", "2s²", "2p²"],
      val: 4,
      type: "nonmetal",
      en: 2.55,
      rad: 67,
    },
    {
      z: 7,
      sym: "N",
      name: "Nitrogen",
      group: "VA",
      gIdx: 5,
      p: 2,
      shells: [2, 5],
      config: ["1s²", "2s²", "2p³"],
      val: 5,
      type: "nonmetal",
      en: 3.04,
      rad: 56,
    },
    {
      z: 8,
      sym: "O",
      name: "Oxygen",
      group: "VIA",
      gIdx: 6,
      p: 2,
      shells: [2, 6],
      config: ["1s²", "2s²", "2p⁴"],
      val: 6,
      type: "nonmetal",
      en: 3.44,
      rad: 48,
    },
    {
      z: 9,
      sym: "F",
      name: "Fluorine",
      group: "VIIA",
      gIdx: 7,
      p: 2,
      shells: [2, 7],
      config: ["1s²", "2s²", "2p⁵"],
      val: 7,
      type: "nonmetal",
      en: 3.98,
      rad: 42,
    },
    {
      z: 10,
      sym: "Ne",
      name: "Neon",
      group: "VIIIA",
      gIdx: 8,
      p: 2,
      shells: [2, 8],
      config: ["1s²", "2s²", "2p⁶"],
      val: 8,
      type: "noble",
      en: 0,
      rad: 38,
    },
    {
      z: 11,
      sym: "Na",
      name: "Sodium",
      group: "IA",
      gIdx: 1,
      p: 3,
      shells: [2, 8, 1],
      config: ["[Ne]", "3s¹"],
      val: 1,
      type: "metal",
      en: 0.93,
      rad: 190,
    },
    {
      z: 12,
      sym: "Mg",
      name: "Magnesium",
      group: "IIA",
      gIdx: 2,
      p: 3,
      shells: [2, 8, 2],
      config: ["[Ne]", "3s²"],
      val: 2,
      type: "metal",
      en: 1.31,
      rad: 145,
    },
    {
      z: 13,
      sym: "Al",
      name: "Aluminium",
      group: "IIIA",
      gIdx: 3,
      p: 3,
      shells: [2, 8, 3],
      config: ["[Ne]", "3s²", "3p¹"],
      val: 3,
      type: "metal",
      en: 1.61,
      rad: 118,
    },
    {
      z: 14,
      sym: "Si",
      name: "Silicon",
      group: "IVA",
      gIdx: 4,
      p: 3,
      shells: [2, 8, 4],
      config: ["[Ne]", "3s²", "3p²"],
      val: 4,
      type: "nonmetal",
      en: 1.9,
      rad: 111,
    },
    {
      z: 15,
      sym: "P",
      name: "Phosphorus",
      group: "VA",
      gIdx: 5,
      p: 3,
      shells: [2, 8, 5],
      config: ["[Ne]", "3s²", "3p³"],
      val: 5,
      type: "nonmetal",
      en: 2.19,
      rad: 98,
    },
    {
      z: 16,
      sym: "S",
      name: "Sulfur",
      group: "VIA",
      gIdx: 6,
      p: 3,
      shells: [2, 8, 6],
      config: ["[Ne]", "3s²", "3p⁴"],
      val: 6,
      type: "nonmetal",
      en: 2.58,
      rad: 88,
    },
    {
      z: 17,
      sym: "Cl",
      name: "Chlorine",
      group: "VIIA",
      gIdx: 7,
      p: 3,
      shells: [2, 8, 7],
      config: ["[Ne]", "3s²", "3p⁵"],
      val: 7,
      type: "nonmetal",
      en: 3.16,
      rad: 79,
    },
    {
      z: 18,
      sym: "Ar",
      name: "Argon",
      group: "VIIIA",
      gIdx: 8,
      p: 3,
      shells: [2, 8, 8],
      config: ["[Ne]", "3s²", "3p⁶"],
      val: 8,
      type: "noble",
      en: 0,
      rad: 71,
    },
    {
      z: 19,
      sym: "K",
      name: "Potassium",
      group: "IA",
      gIdx: 1,
      p: 4,
      shells: [2, 8, 8, 1],
      config: ["[Ar]", "4s¹"],
      val: 1,
      type: "metal",
      en: 0.82,
      rad: 243,
    },
    {
      z: 20,
      sym: "Ca",
      name: "Calcium",
      group: "IIA",
      gIdx: 2,
      p: 4,
      shells: [2, 8, 8, 2],
      config: ["[Ar]", "4s²"],
      val: 2,
      type: "metal",
      en: 1.0,
      rad: 194,
    },
  ];

  // --- GLOBAL STATE ---
  const Store = {
    z: 11,
    compareZ: 17,
    listeners: [],
    subscribe(fn) {
      this.listeners.push(fn);
    },
    setZ(newZ) {
      if (newZ >= 1 && newZ <= 20) {
        this.z = parseInt(newZ);
        this.notify();
      }
    },
    setCompareZ(newZ) {
      this.compareZ = parseInt(newZ);
      this.notify();
    },
    notify() {
      const el = elements.find((e) => e.z === this.z);
      this.listeners.forEach((fn) => fn(el));
      document
        .querySelectorAll(".global-z-display")
        .forEach((n) => (n.innerText = this.z));
    },
  };

  // --- MODULE INITS ---

  function initMod1_AtomBuilder(el) {
    const core = document.getElementById("atom-core-rings");
    core.innerHTML = `<div class="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg">Z=${el.z}</div>`;
    document.getElementById("m1-sym").innerText = el.sym;
    document.getElementById("m1-z").innerText = el.z;
    document.getElementById("master-z-slider").value = el.z;

    el.shells.forEach((count, sIdx) => {
      const isValence = sIdx === el.shells.length - 1;
      const size = 60 + (sIdx + 1) * 45;
      const ring = document.createElement("div");
      ring.className = "orbit-ring flex items-center justify-center";
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;

      const spinner = document.createElement("div");
      spinner.className = "e-spin-layer";
      spinner.style.animationDuration = `${12 + sIdx * 4}s`;

      for (let i = 0; i < count; i++) {
        const angle = (360 / count) * i;
        const eContainer = document.createElement("div");
        eContainer.className = "absolute top-0 left-0 w-full h-full";
        eContainer.style.transform = `rotate(${angle}deg)`;
        const dot = document.createElement("div");
        dot.className = `w-3 h-3 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 ${isValence ? "bg-amber-400 shadow-[0_0_8px_#fbbf24]" : "bg-blue-400"}`;
        eContainer.appendChild(dot);
        spinner.appendChild(eContainer);
      }
      ring.appendChild(spinner);
      core.appendChild(ring);
    });
  }

  function initMod2_EConfig(el) {
    const container = document.getElementById("m2-config");
    container.innerHTML = "";
    el.config.forEach((part, idx) => {
      const isLast = idx === el.config.length - 1;
      const span = document.createElement("span");
      span.className = `config-box ${(isLast && part.includes("s")) || part.includes("p") ? "valence" : ""}`;
      span.innerText = part;
      container.appendChild(span);
    });
  }

  function initMod8_PTMini(el) {
    const grid = document.getElementById("m8-grid");
    if (grid.innerHTML === "") {
      // Build grid once
      for (let p = 1; p <= 4; p++) {
        for (let g = 1; g <= 8; g++) {
          const matched = elements.find((e) => e.p === p && e.gIdx === g);
          const div = document.createElement("div");
          if (matched) {
            div.className = `pt-cell pt-${matched.type}`;
            div.innerText = matched.sym;
            div.dataset.z = matched.z;
            div.onclick = () => Store.setZ(matched.z);
          } else {
            div.className = "pt-cell pt-empty";
          }
          grid.appendChild(div);
        }
      }
    }
    document.querySelectorAll("#m8-grid .pt-cell").forEach((cell) => {
      if (cell.dataset.z)
        cell.classList.toggle("active", cell.dataset.z == el.z);
    });
  }

  function initMod7_Cell(el) {
    document.getElementById("m7-z").innerText = el.z;
    document.getElementById("m7-mass").innerText = (
      el.z * 2 +
      (el.z % 2 === 0 ? 0 : 1)
    ).toFixed(2); // Mock mass
    document.getElementById("m7-sym").innerText = el.sym;
    document.getElementById("m7-name").innerText = el.name;
    const cell = document.getElementById("m7-cell");
    cell.className = `w-40 h-48 border-2 rounded-xl shadow-lg flex flex-col p-3 transition-all duration-300 cursor-pointer hover:scale-105 bg-${el.type === "metal" ? "blue" : el.type === "noble" ? "purple" : "green"}-50 dark:bg-slate-800 border-${el.type === "metal" ? "blue" : el.type === "noble" ? "purple" : "green"}-400`;
  }

  function initMod6_Valence(el) {
    document.getElementById("m6-val").innerText = el.val + "e";
    const action = document.getElementById("m6-action");
    if (el.type === "noble" || el.val === 8 || el.z === 2) {
      action.innerText = "Đã đạt Octet (Bền)";
      action.className =
        "inline-block px-4 py-2 rounded-lg font-bold text-white bg-purple-500";
    } else if (el.val <= 3) {
      action.innerText = `Nhường ${el.val}e → ${el.sym}${el.val === 1 ? "+" : el.val + "+"}`;
      action.className =
        "inline-block px-4 py-2 rounded-lg font-bold text-white bg-blue-500 animate-pulse";
    } else {
      const need = 8 - el.val;
      action.innerText = `Nhận/Góp ${need}e → ${el.sym}${need === 1 ? "-" : need + "-"}`;
      action.className =
        "inline-block px-4 py-2 rounded-lg font-bold text-white bg-green-500 animate-pulse";
    }
  }

  function initMod5_Group(el) {
    document.getElementById("m5-group-name").innerText = el.group;
    const list = document.getElementById("m5-list");
    list.innerHTML = "";
    const groupEls = elements.filter((e) => e.group === el.group);
    groupEls.forEach((ge) => {
      const div = document.createElement("div");
      div.className = `p-2 rounded flex justify-between items-center cursor-pointer transition-colors ${ge.z === el.z ? "bg-teal-100 dark:bg-teal-900 border border-teal-300 font-bold" : "bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"}`;
      div.innerHTML = `<span>${ge.sym} (Z=${ge.z})</span> <span class="text-xs bg-white dark:bg-slate-700 px-2 py-1 rounded shadow-sm">${ge.shells.join("-")}</span>`;
      div.onclick = () => Store.setZ(ge.z);
      list.appendChild(div);
    });
  }

  function initMod3_9_Mappings(el) {
    document.querySelectorAll(".period-row").forEach((r) => {
      r.classList.toggle("active", r.dataset.period == el.p);
    });
    document.querySelectorAll(".shell-row").forEach((r) => {
      r.classList.toggle("active", parseInt(r.dataset.shell) <= el.p);
    });
  }

  function initMod4_Trend(el) {
    document.getElementById("m4-period-num").innerText = el.p;
    const metric = document.getElementById("m4-metric").value; // 'rad' or 'en'
    const chart = document.getElementById("m4-chart");
    chart.innerHTML = "";

    const periodEls = elements.filter((e) => e.p === el.p);
    const maxVal = Math.max(...periodEls.map((e) => e[metric]));

    periodEls.forEach((pe) => {
      const val = pe[metric];
      const hPct = val === 0 ? 5 : (val / maxVal) * 100;
      const cont = document.createElement("div");
      cont.className = `trend-bar-container ${pe.z === el.z ? "active" : ""}`;
      cont.innerHTML = `
        <span class="trend-label text-[10px] text-slate-500 mb-1">${val > 0 ? val : "-"}</span>
        <div class="trend-bar" style="height: ${hPct}%"></div>
        <span class="trend-label mt-1">${pe.sym}</span>
      `;
      chart.appendChild(cont);
    });
  }

  function initMod10_Compare(el) {
    const s1 = document.getElementById("m10-e1");
    s1.innerText = el.sym;
    document.getElementById("m10-s1").innerText = el.p;
    document.getElementById("m10-v1").innerText = el.val;
    document.getElementById("m10-t1").innerText =
      el.val <= 3 ? "Nhường" : el.val === 8 ? "Bền" : "Nhận/Góp";

    const select = document.getElementById("m10-select");
    if (select.options.length === 0) {
      elements.forEach((e) => {
        const opt = document.createElement("option");
        opt.value = e.z;
        opt.innerText = e.sym;
        select.appendChild(opt);
      });
      select.value = Store.compareZ;
      select.onchange = (e) => Store.setCompareZ(e.target.value);
    }

    const cEl = elements.find((e) => e.z === Store.compareZ);
    if (cEl) {
      document.getElementById("m10-s2").innerText = cEl.p;
      document.getElementById("m10-v2").innerText = cEl.val;
      document.getElementById("m10-t2").innerText =
        cEl.val <= 3
          ? "Nhường"
          : cEl.val === 8 || cEl.z === 2
            ? "Bền"
            : "Nhận/Góp";
    }
  }

  // --- WIRING EVERYTHING UP ---
  Store.subscribe(initMod1_AtomBuilder);
  Store.subscribe(initMod2_EConfig);
  Store.subscribe(initMod8_PTMini);
  Store.subscribe(initMod7_Cell);
  Store.subscribe(initMod6_Valence);
  Store.subscribe(initMod5_Group);
  Store.subscribe(initMod3_9_Mappings);
  Store.subscribe(initMod4_Trend);
  Store.subscribe(initMod10_Compare);

  document
    .getElementById("master-z-slider")
    .addEventListener("input", (e) => Store.setZ(e.target.value));
  document
    .getElementById("m4-metric")
    .addEventListener("change", () => Store.notify());

  // Init sequence
  Store.notify();

  // --- PART E: QUIZ LOGIC ---
  document.querySelectorAll(".quiz-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const isCorrect = this.dataset.correct === "true";
      if (isCorrect) {
        this.classList.add("correct");
      } else {
        this.classList.add("wrong");
        setTimeout(() => this.classList.remove("wrong"), 1000);
      }
    });
  });

  // --- MODULE 11: BONDING SIM (KCl) ---
  const btnSim11 = document.getElementById("sim11-btn");
  const eDot = document.getElementById("sim11-e");
  const clZone = document.getElementById("sim11-cl");
  const clVal = document.getElementById("sim11-cl-val");
  let bonded = false;

  btnSim11.addEventListener("click", () => {
    if (!bonded) {
      // Animate E transfer
      eDot.style.transform = "translate(110px, -50%)"; // Move to Cl
      setTimeout(() => {
        clZone.classList.remove("border-green-400");
        clZone.classList.add("border-yellow-400", "shadow-[0_0_15px_yellow]");
        clVal.innerText = "8";
        btnSim11.innerText = "Làm lại";
        bonded = true;
      }, 1000);
    } else {
      // Reset
      eDot.style.transform = "translate(0, -50%)";
      clZone.classList.add("border-green-400");
      clZone.classList.remove("border-yellow-400", "shadow-[0_0_15px_yellow]");
      clVal.innerText = "7";
      btnSim11.innerText = "Chuyển giao Electron";
      bonded = false;
    }
  });
});
// IIFE để đóng gói toàn bộ logic, không làm ô nhiễm global scope
const IonicSim = (function () {
  // --- State chung ---
  let state = {
    m5_transferred: false,
    m6_al: 0,
    m6_o: 0,
    m8_interval: null,
    m9_broken: false,
    m10_dissolved: false,
  };

  // --- Module 1: Cation Builder ---
  function runCation() {
    const atom = document.getElementById("m1-atom");
    const e = document.getElementById("m1-e");
    e.style.transform = "translate(30px, -30px)";
    e.style.opacity = "0";
    setTimeout(() => {
      atom.innerHTML = "Na⁺";
      atom.className =
        "w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold transition-all duration-500 relative";
    }, 500);
  }

  // --- Module 2: Anion Builder ---
  function runAnion() {
    const atom = document.getElementById("m2-atom");
    const e = document.getElementById("m2-e");
    e.style.opacity = "1";
    e.style.transform = "translate(20px, 0)";
    setTimeout(() => {
      atom.innerHTML = "Cl⁻";
      atom.className =
        "w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white font-bold transition-all duration-500 relative";
      e.style.display = "none";
    }, 600);
  }

  // --- Module 3: Radius Comparator ---
  function toggleRadius() {
    const outer = document.getElementById("m3-outer");
    const btn = document.getElementById("m3-btn");
    const label = document.getElementById("m3-label");
    const exp = document.getElementById("m3-exp");

    if (btn.innerText.includes("Ion")) {
      outer.classList.replace("scale-100", "scale-50");
      outer.style.opacity = "0";
      btn.innerText = "Khôi phục Atom Na";
      label.innerText = "R = 0.95 Å";
      exp.style.opacity = "1";
    } else {
      outer.classList.replace("scale-50", "scale-100");
      outer.style.opacity = "1";
      btn.innerText = "Tạo Ion Na⁺";
      label.innerText = "R = 1.86 Å";
      exp.style.opacity = "0";
    }
  }

  // --- Module 4: Coulomb Simulator ---
  function updateCoulomb() {
    const qInput = document.getElementById("m4-q").value;
    const rInput = document.getElementById("m4-r").value;

    document.getElementById("m4-q-val").innerText = `+${qInput} / -${qInput}`;
    document.getElementById("m4-r-val").innerText = `${rInput} Å`;

    const ion1 = document.getElementById("m4-ion1");
    const ion2 = document.getElementById("m4-ion2");

    // Điều chỉnh vị trí theo r (1-5)
    const leftPos = 50 - rInput * 8;
    const rightPos = 50 - rInput * 8;
    ion1.style.left = `${leftPos}%`;
    ion2.style.right = `${rightPos}%`;

    // Tính lực F tỉ lệ q^2 / r^2
    const force = (qInput * qInput) / (rInput * rInput);
    const baseWidth = 5;
    const width = baseWidth + force * 40; // Scale hiển thị

    document.getElementById("m4-force-l").style.width = `${width}px`;
    document.getElementById("m4-force-l").style.left =
      `calc(${leftPos}% + 32px)`;
    document.getElementById("m4-force-r").style.width = `${width}px`;
    document.getElementById("m4-force-r").style.right =
      `calc(${rightPos}% + 32px)`;

    const fLabel = document.getElementById("m4-f-val");
    if (force > 1.5) fLabel.innerText = "Rất mạnh";
    else if (force > 0.5) fLabel.innerText = "Trung bình";
    else fLabel.innerText = "Yếu";
  }

  // --- Module 5: Main Transfer Animator ---
  function runTransfer() {
    if (state.m5_transferred) return;

    const na = document.getElementById("m5-na");
    const cl = document.getElementById("m5-cl");
    const e = document.getElementById("m5-e");
    const arrow = document.getElementById("m5-arrow");
    const msg = document.getElementById("m5-msg");

    // Tính toán khoảng cách bay
    const dist =
      cl.getBoundingClientRect().left - na.getBoundingClientRect().left;
    e.style.setProperty("--dist", `${dist}px`);

    // Kích hoạt bay
    e.classList.add("transfer-anim");
    arrow.style.opacity = "0";
    msg.innerText = "Electron đang di chuyển...";

    setTimeout(() => {
      // Thay đổi trạng thái Na -> Na+
      na.children[0].className =
        "w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10";
      na.children[0].innerHTML =
        '<span class="font-black text-xl text-white">Na⁺</span>';
      document.getElementById("m5-label-na").innerText = "2,8 (Bền)";

      // Thay đổi trạng thái Cl -> Cl-
      cl.children[0].className =
        "w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.8)] z-10";
      cl.children[0].innerHTML =
        '<span class="font-black text-xl text-white">Cl⁻</span>';
      document.getElementById("m5-label-cl").innerText = "2,8,8 (Bền)";

      e.style.display = "none";

      // Hút nhau
      setTimeout(() => {
        na.style.transform = `translateX(${dist / 2 - 20}px)`;
        cl.style.transform = `translateX(-${dist / 2 - 20}px)`;
        msg.innerText = "Lực hút tĩnh điện tạo thành mạng tinh thể NaCl!";
        state.m5_transferred = true;
      }, 500);
    }, 1500);
  }

  function resetTransfer() {
    state.m5_transferred = false;
    const na = document.getElementById("m5-na");
    const cl = document.getElementById("m5-cl");
    const e = document.getElementById("m5-e");
    const msg = document.getElementById("m5-msg");

    e.classList.remove("transfer-anim");
    e.style.display = "block";
    e.style.transform = "none";

    na.style.transform = "none";
    cl.style.transform = "none";
    document.getElementById("m5-arrow").style.opacity = "1";

    na.children[0].className =
      "w-20 h-20 rounded-full border-2 border-blue-400 bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]";
    na.children[0].innerHTML =
      '<span class="font-black text-xl text-blue-700 dark:text-blue-300">Na</span>';
    document.getElementById("m5-label-na").innerText = "2,8,1";

    cl.children[0].className =
      "w-20 h-20 rounded-full border-2 border-green-400 bg-green-100 dark:bg-green-900/40 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)]";
    cl.children[0].innerHTML =
      '<span class="font-black text-xl text-green-700 dark:text-green-300">Cl</span>';
    document.getElementById("m5-label-cl").innerText = "2,8,7";

    msg.innerText = "";
  }

  // --- Module 6: Formula Balancer ---
  function updateFormulaUI() {
    document.getElementById("m6-al-count").innerText = state.m6_al;
    document.getElementById("m6-o-count").innerText = state.m6_o;

    const total = state.m6_al * 3 + state.m6_o * -2;
    const totalEl = document.getElementById("m6-total");
    totalEl.innerText = (total > 0 ? "+" : "") + total;

    totalEl.className = `font-mono text-lg font-black transition-colors duration-300 ${total === 0 && state.m6_al > 0 ? "text-emerald-500" : "text-slate-500"}`;

    const res = document.getElementById("m6-result");
    if (state.m6_al === 2 && state.m6_o === 3) {
      res.innerHTML = "Chính xác! Công thức: <strong>Al₂O₃</strong>";
      res.classList.add("animate-pulse");
    } else if (total === 0 && state.m6_al > 0) {
      res.innerHTML = "Chưa tối giản! Phải là tỉ lệ nhỏ nhất.";
      res.classList.remove("animate-pulse");
      res.style.color = "#f59e0b";
    } else {
      res.innerHTML = "";
      res.style.color = "#10b981";
    }
  }

  function addIon(type) {
    if (type === "Al" && state.m6_al < 4) {
      state.m6_al++;
      const area = document.getElementById("m6-al-area");
      const el = document.createElement("div");
      el.className =
        "w-6 h-6 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center text-[10px] font-bold shrink-0 animate-[bounce_0.3s]";
      el.innerText = "+3";
      area.appendChild(el);
    } else if (type === "O" && state.m6_o < 6) {
      state.m6_o++;
      const area = document.getElementById("m6-o-area");
      const el = document.createElement("div");
      el.className =
        "w-6 h-6 rounded-full bg-pink-200 text-pink-800 flex items-center justify-center text-[10px] font-bold shrink-0 animate-[bounce_0.3s]";
      el.innerText = "-2";
      area.appendChild(el);
    }
    updateFormulaUI();
  }

  function resetFormula() {
    state.m6_al = 0;
    state.m6_o = 0;
    document.getElementById("m6-al-area").innerHTML = "";
    document.getElementById("m6-o-area").innerHTML = "";
    updateFormulaUI();
  }

  // --- Module 7: Lattice Explorer ---
  function initLattice() {
    const grid = document.getElementById("m7-grid");
    let html = "";
    // Tạo grid 3x3
    for (let i = 0; i < 9; i++) {
      const isNa = i % 2 === 1; // 1,3,5,7 là Na ở giữa các cạnh (giả lập)
      const isCenterNa = i === 4;

      if (isCenterNa) {
        html += `<div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shadow z-10 cursor-pointer" onmouseover="IonicSim.highlightLattice(true)" onmouseout="IonicSim.highlightLattice(false)">Na⁺</div>`;
      } else if (isNa) {
        html += `<div class="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center text-[10px] opacity-50">Na⁺</div>`;
      } else {
        html += `<div class="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold lattice-cl transition-all duration-300">Cl⁻</div>`;
      }
    }
    grid.innerHTML = html;
  }

  function highlightLattice(on) {
    const cls = document.querySelectorAll(".lattice-cl");
    const msg = document.getElementById("m7-msg");
    cls.forEach((el) => {
      if (on) {
        el.style.transform = "scale(1.1)";
        el.style.boxShadow = "0 0 10px #22c55e";
      } else {
        el.style.transform = "scale(1)";
        el.style.boxShadow = "none";
      }
    });
    msg.innerText = on
      ? "Mặt cắt 2D: 1 Na⁺ được bao quanh bởi 4 Cl⁻ (Thực tế 3D là 6)"
      : "";
  }

  // --- Module 8: Crystal Growth Lab ---
  function updateLab() {
    const temp = document.getElementById("m8-temp").value;
    document.getElementById("m8-temp-val").innerText = `${temp}°C`;

    const crystal = document.getElementById("m8-crystal");

    // Size scale từ 20C đến 100C. Nguội (20) -> to (scale 10)
    let scale = 1;
    if (temp < 80) {
      scale = 1 + ((80 - temp) / 60) * 15; // Max scale ~16
    }

    crystal.style.transform = `rotate(45deg) scale(${scale})`;

    // Màu nước
    const water = document.getElementById("m8-water");
    water.style.backgroundColor = `rgba(59, 130, 246, ${temp / 200})`;
  }

  function resetLab() {
    document.getElementById("m8-temp").value = 100;
    updateLab();
  }

  // --- Module 9: Brittleness ---
  function hitCrystal() {
    if (state.m9_broken) {
      // Reset
      document.getElementById("m9-row2").classList.remove("shatter-anim");
      document.getElementById("m9-row2").style.transform = "translateX(0)";
      document.getElementById("m9-msg").innerText =
        "Tinh thể rắn nhưng dòn. Click búa để đập.";
      state.m9_broken = false;
    } else {
      // Đập
      const row2 = document.getElementById("m9-row2");
      document.getElementById("m9-hammer").style.transform = "rotate(-45deg)";
      setTimeout(() => {
        document.getElementById("m9-hammer").style.transform = "rotate(0)";
      }, 200);

      // Dịch chuyển lớp -> Cùng dấu gặp nhau -> Lực đẩy
      row2.style.transform = "translateX(24px)";
      document.getElementById("m9-msg").innerText =
        "Trượt lớp -> Các ion cùng dấu (+ gặp +, - gặp -) đẩy nhau -> Vỡ!";

      setTimeout(() => {
        row2.classList.add("shatter-anim");
        state.m9_broken = true;
      }, 600);
    }
  }

  // --- Module 10: Conductivity ---
  function toggleDissolve() {
    const salt = document.getElementById("m10-salt");
    const ions = document.getElementById("m10-ions");
    const bulb = document.getElementById("m10-bulb");
    const btn = document.getElementById("m10-btn");

    if (!state.m10_dissolved) {
      salt.style.height = "0";
      salt.style.opacity = "0";
      ions.style.opacity = "1";
      setTimeout(() => {
        bulb.classList.add("bulb-on");
        btn.innerText = "Kết tinh lại";
        state.m10_dissolved = true;
      }, 800);
    } else {
      bulb.classList.remove("bulb-on");
      ions.style.opacity = "0";
      setTimeout(() => {
        salt.style.height = "16px";
        salt.style.opacity = "1";
        btn.innerText = "Hòa tan vào nước";
        state.m10_dissolved = false;
      }, 500);
    }
  }

  // --- Module 11: Quiz logic ---
  function checkAns(btn, isCorrect) {
    // Reset all
    const siblings = btn.parentElement.children;
    for (let s of siblings) {
      const bg = s.querySelector(".absolute");
      if (bg) bg.style.transform = "translate-x-full";
      s.classList.remove("ring-2", "ring-red-500", "ring-green-500");
    }

    if (isCorrect) {
      btn.classList.add("ring-2", "ring-green-500");
      const bg = btn.querySelector(".absolute");
      if (bg) {
        bg.style.transform = "translateX(0)";
        btn.classList.add("text-white");
      }
    } else {
      btn.classList.add("ring-2", "ring-red-500");
      btn.classList.add("animate-[shake_0.5s]");
      setTimeout(() => btn.classList.remove("animate-[shake_0.5s]"), 500);
    }
  }

  // Init call
  window.addEventListener("DOMContentLoaded", () => {
    initLattice();
    updateCoulomb();
  });

  // Expose API
  return {
    runCation,
    runAnion,
    toggleRadius,
    updateCoulomb,
    runTransfer,
    resetTransfer,
    addIon,
    resetFormula,
    highlightLattice,
    updateLab,
    resetLab,
    hitCrystal,
    toggleDissolve,
    checkAns,
  };
})();

// CSS phụ trợ cho JS (Shake anim cho quiz)
const style = document.createElement("style");
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
(function () {
  "use strict";

  // ==========================================
  // SHARED DATA
  // ==========================================
  const elementsData = {
    1: {
      s: "H",
      n: "Hydrogen",
      g: 1,
      p: 1,
      en: 2.2,
      e: 1,
      conf: "1s¹",
      val: 1,
    },
    6: {
      s: "C",
      n: "Carbon",
      g: 14,
      p: 2,
      en: 2.55,
      e: 6,
      conf: "[He] 2s² 2p²",
      val: 4,
    },
    7: {
      s: "N",
      n: "Nitrogen",
      g: 15,
      p: 2,
      en: 3.04,
      e: 7,
      conf: "[He] 2s² 2p³",
      val: 5,
    },
    8: {
      s: "O",
      n: "Oxygen",
      g: 16,
      p: 2,
      en: 3.44,
      e: 8,
      conf: "[He] 2s² 2p⁴",
      val: 6,
    },
    9: {
      s: "F",
      n: "Fluorine",
      g: 17,
      p: 2,
      en: 3.98,
      e: 9,
      conf: "[He] 2s² 2p⁵",
      val: 7,
    },
    14: {
      s: "Si",
      n: "Silicon",
      g: 14,
      p: 3,
      en: 1.9,
      e: 14,
      conf: "[Ne] 3s² 3p²",
      val: 4,
    },
    15: {
      s: "P",
      n: "Phosphorus",
      g: 15,
      p: 3,
      en: 2.19,
      e: 15,
      conf: "[Ne] 3s² 3p³",
      val: 5,
    },
    16: {
      s: "S",
      n: "Sulfur",
      g: 16,
      p: 3,
      en: 2.58,
      e: 16,
      conf: "[Ne] 3s² 3p⁴",
      val: 6,
    },
    17: {
      s: "Cl",
      n: "Chlorine",
      g: 17,
      p: 3,
      en: 3.16,
      e: 17,
      conf: "[Ne] 3s² 3p⁵",
      val: 7,
    },
  };

  const bpData = {
    15: [
      { n: "NH₃", bp: -33, h: true },
      { n: "PH₃", bp: -87 },
      { n: "AsH₃", bp: -62 },
    ],
    16: [
      { n: "H₂O", bp: 100, h: true },
      { n: "H₂S", bp: -60 },
      { n: "H₂Se", bp: -41 },
    ],
    17: [
      { n: "HF", bp: 19, h: true },
      { n: "HCl", bp: -85 },
      { n: "HBr", bp: -66 },
    ],
  };

  // ==========================================
  // MODULE 1 & 8: Water States & Shell/Bond Map
  // ==========================================
  const waterSim = {
    container: document.getElementById("water-sim-container"),
    mols: [],
    lines: [],
    state: "ice",
    reqId: null,
    init() {
      this.container.innerHTML = "";
      const numMols = 8;
      for (let i = 0; i < numMols; i++) {
        let mol = document.createElement("div");
        mol.className = "water-mol";
        this.container.appendChild(mol);
        this.mols.push({ el: mol, x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0 });
      }
      for (let i = 0; i < numMols * 2; i++) {
        let line = document.createElement("div");
        line.className = "h-bond-line";
        this.container.appendChild(line);
        this.lines.push(line);
      }
      this.setButtons();
      this.changeState("ice");
      this.animate();
    },
    setButtons() {
      const btns = ["ice", "liquid", "gas"];
      btns.forEach((id) => {
        document.getElementById("btn-" + id).addEventListener("click", (e) => {
          btns.forEach((b) => {
            const el = document.getElementById("btn-" + b);
            el.className = el.className.replace(
              "bg-white dark:bg-slate-600 shadow text-blue-600",
              "hover:bg-white dark:hover:bg-slate-600 text-slate-500 dark:text-slate-300",
            );
          });
          e.target.className = e.target.className.replace(
            "hover:bg-white dark:hover:bg-slate-600 text-slate-500 dark:text-slate-300",
            "bg-white dark:bg-slate-600 shadow text-blue-600",
          );
          this.changeState(id);
        });
      });
    },
    changeState(s) {
      this.state = s;
      const desc = document.getElementById("water-desc");
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      if (s === "ice") {
        desc.innerHTML =
          "Đá: Cấu trúc tứ diện rỗng, các phân tử cố định. <br/> LK Hydrogen bền vững (thể tích lớn hơn lỏng).";
        // Hex grid approx
        const pos = [
          [w / 2, h / 4],
          [w / 2 - 40, h / 2],
          [w / 2 + 40, h / 2],
          [w / 2, h * 0.75],
          [w / 2 - 80, h / 4],
          [w / 2 + 80, h / 4],
          [w / 2 - 40, h * 0.8],
          [w / 2 + 40, h * 0.8],
        ];
        this.mols.forEach((m, i) => {
          m.tx = pos[i % 8][0];
          m.ty = pos[i % 8][1];
        });
      } else if (s === "liquid") {
        desc.innerHTML =
          "Lỏng: Các phân tử chuyển động trượt lên nhau. <br/> LK Hydrogen hình thành & đứt gãy liên tục (đặc hơn đá).";
      } else {
        desc.innerHTML =
          "Hơi: Các phân tử chuyển động hỗn loạn, khoảng cách xa. <br/> Hầu như không còn LK Hydrogen.";
      }
    },
    animate() {
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;

      this.mols.forEach((m) => {
        if (this.state === "ice") {
          m.x += (m.tx - m.x) * 0.1;
          m.y += (m.ty - m.y) * 0.1;
        } else {
          let speed = this.state === "liquid" ? 1 : 4;
          m.vx += (Math.random() - 0.5) * speed;
          m.vy += (Math.random() - 0.5) * speed;
          // Dampening
          m.vx *= 0.9;
          m.vy *= 0.9;
          m.x += m.vx;
          m.y += m.vy;
          // Bounce
          if (m.x < 10 || m.x > w - 10) m.vx *= -1;
          if (m.y < 10 || m.y > h - 10) m.vy *= -1;
          m.x = Math.max(10, Math.min(w - 10, m.x));
          m.y = Math.max(10, Math.min(h - 10, m.y));
        }
        m.el.style.left = m.x - 8 + "px";
        m.el.style.top = m.y - 8 + "px";
      });

      // Draw H-bonds
      this.lines.forEach((l) => (l.style.opacity = 0));
      let lineIdx = 0;
      let threshold =
        this.state === "ice" ? 60 : this.state === "liquid" ? 45 : 20;

      for (let i = 0; i < this.mols.length; i++) {
        for (let j = i + 1; j < this.mols.length; j++) {
          let dx = this.mols[j].x - this.mols[i].x;
          let dy = this.mols[j].y - this.mols[i].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < threshold && lineIdx < this.lines.length) {
            let l = this.lines[lineIdx++];
            l.style.width = dist + "px";
            l.style.left = this.mols[i].x + "px";
            l.style.top = this.mols[i].y + "px";
            l.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
            l.style.opacity = this.state === "gas" ? 0.2 : 1;
          }
        }
      }
      this.reqId = requestAnimationFrame(this.animate.bind(this));
    },
  };

  // ==========================================
  // MODULE 3, 4, 7, 10: Mini Periodic Table
  // ==========================================
  const miniPT = {
    grid: document.getElementById("mini-pt-grid"),
    explainer: document.getElementById("cell-explainer"),
    layout: [
      [1, null, null, null, null, null],
      [null, 6, 7, 8, 9, null],
      [null, 14, 15, 16, 17, null],
    ],
    cells: {},
    init() {
      this.grid.innerHTML = "";
      this.layout.forEach((row) => {
        row.forEach((z) => {
          let cell = document.createElement("div");
          if (!z) {
            cell.style.visibility = "hidden";
          } else {
            let data = elementsData[z];
            cell.className = "pt-cell text-xs relative";
            cell.innerHTML = `<span class="font-bold text-sm">${data.s}</span><span class="text-[8px] text-slate-500 dark:text-slate-400 absolute top-1 left-1">${z}</span>`;
            cell.onclick = () => this.showInfo(z, cell);
            this.cells[z] = cell;
          }
          this.grid.appendChild(cell);
        });
      });
      this.bindButtons();
    },
    showInfo(z, cellEl) {
      Object.values(this.cells).forEach((c) => c.classList.remove("highlight"));
      if (cellEl) cellEl.classList.add("highlight");
      const d = elementsData[z];
      const isHbond = ["N", "O", "F"].includes(d.s);
      this.explainer.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${d.s}</div>
          <div>
            <div class="font-bold text-sm">${d.n} (Z=${z})</div>
            <div class="text-xs">Độ âm điện: <span class="font-mono text-pink-600">${d.en}</span></div>
          </div>
        </div>
        <p class="text-xs mt-2">${isHbond ? "✅ <strong>Có thể tạo liên kết Hydrogen</strong> (Độ âm điện lớn, có cặp electron chưa liên kết)." : "❌ Không tạo được liên kết Hydrogen mạnh."}</p>
      `;
    },
    bindButtons() {
      const reset = () =>
        Object.values(this.cells).forEach((c) => {
          c.style.opacity = 1;
          c.classList.remove("highlight");
        });
      document.getElementById("hl-reset").onclick = reset;

      document.getElementById("hl-period-2").onclick = () => {
        reset();
        Object.keys(this.cells).forEach((z) => {
          if (elementsData[z].p !== 2) this.cells[z].style.opacity = 0.2;
        });
      };
      document.getElementById("hl-group-16").onclick = () => {
        reset();
        Object.keys(this.cells).forEach((z) => {
          if (elementsData[z].g !== 16) this.cells[z].style.opacity = 0.2;
        });
      };
      document.getElementById("hl-hbond").onclick = () => {
        reset();
        Object.keys(this.cells).forEach((z) => {
          if (!["N", "O", "F"].includes(elementsData[z].s))
            this.cells[z].style.opacity = 0.2;
          else this.cells[z].classList.add("highlight");
        });
      };
    },
  };

  // ==========================================
  // MODULE 2, 5, 11: Atom Builder, Valence, Orbitals
  // ==========================================
  const atomBuilder = {
    canvas: document.getElementById("atom-builder-canvas"),
    configText: document.getElementById("config-text"),
    orbitalCont: document.getElementById("orbital-container"),
    selector: document.getElementById("atom-selector"),
    init() {
      this.selector.addEventListener("change", (e) =>
        this.render(parseInt(e.target.value)),
      );
      this.render(8); // Default Oxygen
    },
    render(z) {
      const data = elementsData[z];
      // 1. Config text
      this.configText.innerText = data.conf;

      // 2. Build Atom Shells
      this.canvas.innerHTML = "";
      const nuc = document.createElement("div");
      nuc.className = "atom-nucleus";
      nuc.innerText = data.s;
      this.canvas.appendChild(nuc);

      let shellCap = [2, 8, 18];
      let eLeft = z;
      let shells = [];
      for (let i = 0; eLeft > 0; i++) {
        let eInShell = Math.min(eLeft, shellCap[i]);
        shells.push(eInShell);
        eLeft -= eInShell;
      }

      const baseR = 25;
      shells.forEach((count, sIdx) => {
        let isValence = sIdx === shells.length - 1;
        let r = baseR + sIdx * 20;
        let shellDiv = document.createElement("div");
        shellDiv.className = "atom-shell";
        shellDiv.style.width = r * 2 + "px";
        shellDiv.style.height = r * 2 + "px";
        this.canvas.appendChild(shellDiv);

        for (let i = 0; i < count; i++) {
          let angle = (i / count) * Math.PI * 2;
          let x = Math.cos(angle) * r;
          let y = Math.sin(angle) * r;
          let eDiv = document.createElement("div");
          eDiv.className = "electron-dot" + (isValence ? " valence" : "");
          eDiv.style.left = `calc(50% + ${x}px)`;
          eDiv.style.top = `calc(50% + ${y}px)`;
          this.canvas.appendChild(eDiv);
        }
      });

      // 3. Orbital filling (simplified valence)
      this.orbitalCont.innerHTML = "";
      let valE = data.val;
      let subshells =
        z <= 2
          ? [{ n: "1s", cap: 2 }]
          : [
              { n: "2s", cap: 2 },
              { n: "2p", cap: 6 },
            ];
      if (z > 10)
        subshells = [
          { n: "3s", cap: 2 },
          { n: "3p", cap: 6 },
        ];

      let eToFill = valE;
      subshells.forEach((sub) => {
        let boxCount = sub.cap / 2;
        let group = document.createElement("div");
        group.className = "flex gap-1 items-end";
        let label = document.createElement("span");
        label.className = "text-[9px] text-slate-500 mr-1 pb-1";
        label.innerText = sub.n;
        group.appendChild(label);

        // Fill logic (Hund's rule simplified)
        let boxesArr = Array(boxCount).fill(0);
        for (let i = 0; i < Math.min(eToFill, sub.cap); i++) {
          if (i < boxCount) boxesArr[i] += 1;
          else boxesArr[i % boxCount] += 1;
        }
        eToFill -= sub.cap;

        boxesArr.forEach((fill) => {
          let box = document.createElement("div");
          box.className = "orbital-box";
          if (fill >= 1) box.innerHTML += '<div class="arrow-up"></div>';
          if (fill === 2) box.innerHTML += '<div class="arrow-down"></div>';
          group.appendChild(box);
        });
        this.orbitalCont.appendChild(group);
      });
    },
  };

  // ==========================================
  // MODULE 9: Period Trend Graph (BP)
  // ==========================================
  const trendGraph = {
    container: document.getElementById("trend-graph-bars"),
    sel: document.getElementById("graph-group-sel"),
    init() {
      this.sel.addEventListener("change", (e) => this.render(e.target.value));
      this.render("16");
    },
    render(group) {
      this.container.innerHTML = "";
      const data = bpData[group];
      data.forEach((item, i) => {
        let wrap = document.createElement("div");
        wrap.className = "graph-bar-wrap";

        let hPercent = ((item.bp + 100) / 250) * 100; // mapped to fit container
        let bar = document.createElement("div");
        bar.className = `graph-bar ${item.h ? "bg-pink-500" : "bg-blue-400 dark:bg-blue-500"}`;
        bar.style.height = "0%";

        let val = document.createElement("div");
        val.className = `graph-val ${item.h ? "text-pink-600 dark:text-pink-400" : "text-slate-600 dark:text-slate-300"}`;
        val.innerText = item.bp + "°";

        let lbl = document.createElement("div");
        lbl.className =
          "graph-label text-slate-600 dark:text-slate-300 font-bold";
        lbl.innerText = item.n;

        wrap.appendChild(val);
        wrap.appendChild(bar);
        wrap.appendChild(lbl);
        this.container.appendChild(wrap);

        // Animate
        setTimeout(
          () => (bar.style.height = Math.max(5, hPercent) + "%"),
          50 * i,
        );
      });
    },
  };

  // ==========================================
  // MODULE 6: Compare 2 Elements
  // ==========================================
  const elementCompare = {
    selA: document.getElementById("comp-el-a"),
    selB: document.getElementById("comp-el-b"),
    res: document.getElementById("comp-result"),
    init() {
      const update = () => this.calc();
      this.selA.addEventListener("change", update);
      this.selB.addEventListener("change", update);
      this.calc();
    },
    calc() {
      let a = this.selA.value;
      let b = this.selB.value;
      let hBondA = ["N", "O", "F"].includes(a);
      let hBondB = ["N", "O", "F"].includes(b);

      let html = `<div class="grid grid-cols-2 gap-2 text-center text-[11px]">`;
      html += `<div><strong>H-${a}:</strong> ${hBondA ? '<span class="text-pink-500">Phân cực mạnh (H linh động)</span>' : "Phân cực yếu"}</div>`;
      html += `<div><strong>${b}:</strong> ${hBondB ? '<span class="text-pink-500">Có cặp e- tự do, ĐÂĐ lớn</span>' : "Không đủ ĐÂĐ"}</div>`;
      html += `</div>`;

      if (hBondA && hBondB) {
        html += `<div class="mt-2 text-center font-bold text-pink-600 bg-pink-50 dark:bg-pink-900/30 p-1 rounded">H-${a} ... ${b} -> Tạo Liên Kết Hydrogen!</div>`;
      } else {
        html += `<div class="mt-2 text-center font-bold text-slate-500 bg-slate-100 dark:bg-slate-700/50 p-1 rounded">Không tạo được LK Hydrogen. (Chỉ có Van der Waals)</div>`;
      }
      this.res.innerHTML = html;
    },
  };

  // ==========================================
  // MODULE TƯƠNG TÁC VDW: Van der Waals Slider
  // ==========================================
  const vdwSim = {
    slider: document.getElementById("vdw-slider"),
    cloud1: document.getElementById("vdw-cloud-1"),
    cloud2: document.getElementById("vdw-cloud-2"),
    d1l: document.getElementById("vdw-delta-1l"),
    d1r: document.getElementById("vdw-delta-1r"),
    d2l: document.getElementById("vdw-delta-2l"),
    d2r: document.getElementById("vdw-delta-2r"),
    init() {
      this.slider.addEventListener("input", (e) => this.update(e.target.value));
    },
    update(val) {
      // val from -20 to 20
      let v = parseInt(val);
      // Move cloud 1
      this.cloud1.style.transform = `translateX(${v}px)`;
      // Induce dipole in cloud 2 (moves same direction to escape e- repulsion)
      this.cloud2.style.transform = `translateX(${v * 0.7}px)`;

      let op = Math.abs(v) / 20;
      if (v > 0) {
        this.d1l.style.opacity = op;
        this.d1l.innerText = "δ+";
        this.d1l.className =
          "absolute left-[-15px] text-[10px] text-red-500 transition-opacity";
        this.d1r.style.opacity = op;
        this.d1r.innerText = "δ-";
        this.d1r.className =
          "absolute right-[-15px] text-[10px] text-blue-500 transition-opacity";
        this.d2l.style.opacity = op * 0.7;
        this.d2l.innerText = "δ+";
        this.d2l.className =
          "absolute left-[-15px] text-[10px] text-red-500 transition-opacity";
        this.d2r.style.opacity = op * 0.7;
        this.d2r.innerText = "δ-";
        this.d2r.className =
          "absolute right-[-15px] text-[10px] text-blue-500 transition-opacity";
      } else if (v < 0) {
        this.d1l.style.opacity = op;
        this.d1l.innerText = "δ-";
        this.d1l.className =
          "absolute left-[-15px] text-[10px] text-blue-500 transition-opacity";
        this.d1r.style.opacity = op;
        this.d1r.innerText = "δ+";
        this.d1r.className =
          "absolute right-[-15px] text-[10px] text-red-500 transition-opacity";
        this.d2l.style.opacity = op * 0.7;
        this.d2l.innerText = "δ-";
        this.d2l.className =
          "absolute left-[-15px] text-[10px] text-blue-500 transition-opacity";
        this.d2r.style.opacity = op * 0.7;
        this.d2r.innerText = "δ+";
        this.d2r.className =
          "absolute right-[-15px] text-[10px] text-red-500 transition-opacity";
      } else {
        this.d1l.style.opacity = 0;
        this.d1r.style.opacity = 0;
        this.d2l.style.opacity = 0;
        this.d2r.style.opacity = 0;
      }
    },
  };

  // Initialize all modules
  window.addEventListener("DOMContentLoaded", () => {
    waterSim.init();
    miniPT.init();
    atomBuilder.init();
    trendGraph.init();
    elementCompare.init();
    vdwSim.init();
  });
})();
(function () {
  "use strict";

  // Helpers
  const $ = (s) => document.querySelector(`#covalent ${s}`);
  const $$ = (s) => document.querySelectorAll(`#covalent ${s}`);

  // Module 1: Bond Distance
  function initBondDistance() {
    const slider = $("#bond-distance");
    const aLeft = $("#atom-left");
    const aRight = $("#atom-right");
    const cloud = $("#electron-cloud");
    const feedback = $("#energy-feedback");
    if (!slider || !aLeft) return;

    slider.addEventListener("input", (e) => {
      let val = parseInt(e.target.value); // 0 (push) to 100 (pull)

      // Calculate positions (0 -> center overlap, 100 -> far apart)
      let dist = val / 2; // 0 to 50
      aLeft.style.left = `calc(50% - 24px - ${dist}px)`;
      aRight.style.right = `calc(50% - 24px - ${dist}px)`;

      if (val < 20) {
        feedback.textContent = "Đẩy nhau (Năng lượng cao)";
        feedback.className =
          "absolute bottom-2 font-mono text-xs font-bold px-3 py-1 rounded-full bg-red-100 text-red-600";
        cloud.style.opacity = "0.2";
        cloud.style.width = "40px";
      } else if (val >= 20 && val <= 50) {
        feedback.textContent = "Cân bằng (Bền vững nhất)";
        feedback.className =
          "absolute bottom-2 font-mono text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-600";
        cloud.style.opacity = "0.8";
        cloud.style.width = `${50 - dist}px`;
        cloud.style.backgroundColor = "rgba(74, 222, 128, 0.5)"; // green tint
      } else {
        feedback.textContent = "Tách biệt (Không liên kết)";
        feedback.className =
          "absolute bottom-2 font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600";
        cloud.style.opacity = "0";
      }
    });
    // Trigger init
    slider.dispatchEvent(new Event("input"));
  }

  // Module 2: Electronegativity Diff
  function initElectronegativity() {
    const in1 = $("#en-atom1");
    const in2 = $("#en-atom2");
    const res = $("#en-result-val");
    const marker = $("#en-marker");
    const badge = $("#en-type-badge");
    if (!in1) return;

    const update = () => {
      let v1 = parseFloat(in1.value) || 0;
      let v2 = parseFloat(in2.value) || 0;
      let diff = Math.abs(v1 - v2).toFixed(1);
      res.textContent = diff;

      // Scale 0 -> 3.3 roughly
      let percent = (diff / 3.3) * 100;
      if (percent > 100) percent = 100;
      marker.style.left = `${percent}%`;

      if (diff < 0.4) {
        badge.textContent = "Cộng hóa trị KHÔNG phân cực";
        badge.className =
          "mt-auto py-2 px-4 rounded-lg bg-green-100 text-green-700 font-bold text-center border border-green-200";
      } else if (diff >= 0.4 && diff < 1.7) {
        badge.textContent = "Cộng hóa trị CÓ phân cực";
        badge.className =
          "mt-auto py-2 px-4 rounded-lg bg-blue-100 text-blue-700 font-bold text-center border border-blue-200";
      } else {
        badge.textContent = "Liên kết ION";
        badge.className =
          "mt-auto py-2 px-4 rounded-lg bg-red-100 text-red-700 font-bold text-center border border-red-200";
      }
    };
    in1.addEventListener("input", update);
    in2.addEventListener("input", update);
    update();
  }

  // Module 3: Polarity Cloud
  function initPolarity() {
    const slider = $("#polar-slider");
    const cloud = $("#polar-cloud");
    if (!slider) return;

    slider.addEventListener("input", (e) => {
      let val = parseInt(e.target.value); // -50 to 50
      // Map -50..50 to -50%..0% translation
      let transX = -25 + val / 2;
      cloud.style.transform = `translateX(${transX}%)`;
    });
  }

  // Module 4: Sigma & Pi
  function initSigmaPi() {
    const bSig = $("#btn-sigma");
    const bPi = $("#btn-pi");
    const vSig = $("#sigma-view");
    const vPi = $("#pi-view");
    const sl = $("#s-left"),
      sr = $("#s-right");
    const pl = $("#p-left"),
      pr = $("#p-right");
    const desc = $("#overlap-desc");
    if (!bSig) return;

    bSig.addEventListener("click", () => {
      bSig.className =
        "flex-1 py-2 bg-teal-500 text-white rounded-lg font-bold shadow-md hover:bg-teal-600 transition-colors";
      bPi.className =
        "flex-1 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-bold hover:bg-slate-300 transition-colors";
      vSig.style.opacity = "1";
      vPi.style.opacity = "0";
      desc.textContent =
        "Xen phủ trục (dọc theo đường nối tâm). Thường là liên kết đơn.";
      // Animate overlap
      sl.style.transform = "translateX(-20px)";
      sr.style.transform = "translateX(20px)";
    });

    bPi.addEventListener("click", () => {
      bPi.className =
        "flex-1 py-2 bg-pink-500 text-white rounded-lg font-bold shadow-md hover:bg-pink-600 transition-colors";
      bSig.className =
        "flex-1 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-bold hover:bg-slate-300 transition-colors";
      vSig.style.opacity = "0";
      vPi.style.opacity = "1";
      desc.textContent =
        "Xen phủ bên (hai AO song song). Hình thành liên kết đôi/ba.";
      // Animate overlap
      pl.style.transform = "translateX(-10px)";
      pr.style.transform = "translateX(10px)";
    });

    // Auto trigger animation on load
    setTimeout(() => {
      sl.style.transform = "translateX(-20px)";
      sr.style.transform = "translateX(20px)";
    }, 500);
  }

  // Module 5: VSEPR Viewer
  function initVSEPR() {
    const sel = $("#vsepr-select");
    const orb = $("#v-orbitals");
    const cA = $("#v-center");
    const ang = $("#vsepr-angle");
    if (!sel) return;

    const draw = (type) => {
      orb.innerHTML = "";
      if (type === "linear") {
        cA.textContent = "C";
        ang.textContent = "Góc: ~180°";
        orb.innerHTML = `
          <div class="absolute w-8 h-8 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold" style="transform: translateX(-50px)">O</div>
          <div class="absolute w-[60px] h-1 bg-slate-300 dark:bg-slate-600" style="transform: translateX(-25px)"></div>
          <div class="absolute w-8 h-8 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold" style="transform: translateX(50px)">O</div>
          <div class="absolute w-[60px] h-1 bg-slate-300 dark:bg-slate-600" style="transform: translateX(25px)"></div>
        `;
      } else if (type === "trigonal") {
        cA.textContent = "B";
        ang.textContent = "Góc: ~120°";
        const angles = [30, 150, 270];
        angles.forEach((a) => {
          let rad = (a * Math.PI) / 180;
          let x = Math.cos(rad) * 45;
          let y = Math.sin(rad) * 45;
          orb.innerHTML += `<div class="absolute w-8 h-8 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold" style="transform: translate(${x}px, ${y}px)">F</div>
          <div class="absolute w-[45px] h-1 bg-slate-300 dark:bg-slate-600 origin-left" style="transform: rotate(${a}deg)"></div>`;
        });
      } else if (type === "tetrahedral") {
        cA.textContent = "C";
        ang.textContent = "Góc: ~109.5°";
        const angles = [90, 210, 330]; // Fake 2D projection
        angles.forEach((a) => {
          let rad = (a * Math.PI) / 180;
          let x = Math.cos(rad) * 45;
          let y = Math.sin(rad) * 45;
          orb.innerHTML += `<div class="absolute w-6 h-6 rounded-full bg-blue-300 text-slate-800 text-[10px] flex items-center justify-center font-bold" style="transform: translate(${x}px, ${y}px)">H</div>
          <div class="absolute w-[45px] h-1 bg-slate-300 dark:bg-slate-600 origin-left" style="transform: rotate(${a}deg)"></div>`;
        });
        orb.innerHTML += `<div class="absolute w-6 h-6 rounded-full bg-blue-300 text-slate-800 text-[10px] flex items-center justify-center font-bold" style="transform: translate(0px, -20px) scale(1.3)">H</div>`;
      } else if (type === "bent") {
        cA.textContent = "O";
        ang.textContent = "Góc: ~104.5°";
        const angles = [45, 135];
        angles.forEach((a) => {
          let rad = (a * Math.PI) / 180;
          let x = Math.cos(rad) * 40;
          let y = Math.sin(rad) * 40;
          orb.innerHTML += `<div class="absolute w-6 h-6 rounded-full bg-blue-300 text-slate-800 text-[10px] flex items-center justify-center font-bold" style="transform: translate(${x}px, ${y}px)">H</div>
          <div class="absolute w-[40px] h-1 bg-slate-300 dark:bg-slate-600 origin-left" style="transform: rotate(${a}deg)"></div>`;
        });
        // Lone pairs
        orb.innerHTML += `<div class="absolute w-4 h-4 rounded-full bg-yellow-400/50" style="transform: translate(-15px, -25px)"></div>
        <div class="absolute w-4 h-4 rounded-full bg-yellow-400/50" style="transform: translate(15px, -25px)"></div>`;
      }
    };
    sel.addEventListener("change", (e) => draw(e.target.value));
    draw("linear");
  }

  // Module 6: Lewis Structure Viewer
  function initLewis() {
    const btns = $$(".lewis-btn");
    const toggle = $("#lewis-toggle");
    const disp = $("#lewis-display");
    if (!toggle) return;

    let mode = "dots"; // dots | lines
    let currentM = "H2O";

    const render = () => {
      let html = "";
      let bond =
        mode === "dots"
          ? '<span class="text-rose-500 mx-1">:</span>'
          : '<span class="text-rose-500 mx-1">-</span>';
      let bondDouble =
        mode === "dots"
          ? '<span class="text-rose-500 mx-1">::</span>'
          : '<span class="text-rose-500 mx-1">=</span>';

      if (currentM === "H2O") {
        html = `<div class="relative">H${bond}O${bond}H<div class="absolute -top-4 left-1/2 -translate-x-1/2 text-sm text-rose-500 tracking-widest">..</div></div>`;
      } else if (currentM === "CO2") {
        html = `O${bondDouble}C${bondDouble}O`;
      } else if (currentM === "CH4") {
        html = `
          <div class="flex flex-col items-center leading-none">
            <div>H</div>
            <div class="-my-1 rotate-90">${bond}</div>
            <div>H${bond}C${bond}H</div>
            <div class="-my-1 rotate-90">${bond}</div>
            <div>H</div>
          </div>
        `;
      }
      disp.innerHTML = html;
    };

    btns.forEach((b) =>
      b.addEventListener("click", (e) => {
        btns.forEach((x) => {
          x.classList.remove("bg-rose-500", "text-white");
          x.classList.add("text-rose-500");
        });
        e.target.classList.add("bg-rose-500", "text-white");
        e.target.classList.remove("text-rose-500");
        currentM = e.target.dataset.type;
        render();
      }),
    );

    toggle.addEventListener("click", () => {
      mode = mode === "dots" ? "lines" : "dots";
      toggle.textContent = mode === "dots" ? "Dấu chấm (E)" : "Đường gạch (-)";
      render();
    });
    render();
  }

  // Module 7: Hybridization
  function initHybridization() {
    const btns = $$(".hyb-btn");
    const resTitle = $("#hyb-result div");
    const resDesc = $("#hyb-result p");
    if (!btns.length) return;

    btns.forEach((b) =>
      b.addEventListener("click", (e) => {
        btns.forEach((x) => {
          x.classList.remove("bg-emerald-500", "text-white");
        });
        e.target.classList.add("bg-emerald-500", "text-white");

        let type = e.target.dataset.hyb;
        let desc = e.target.dataset.desc;

        // format html
        resTitle.innerHTML = type.replace(/(\d)/, "<sup>$1</sup>");
        resDesc.textContent = desc;
      }),
    );
    btns[0].click();
  }

  // Module 8: Coordinate Bond
  function initCoordinateBond() {
    const btn = $("#cb-trigger");
    const nh3 = $("#cb-nh3");
    const h = $("#cb-h");
    const pair = $("#cb-pair");
    const arrow = $("#cb-arrow");
    if (!btn) return;

    let state = 0; // 0: separated, 1: bonded
    btn.addEventListener("click", () => {
      if (state === 0) {
        nh3.style.transform = "translateX(-20px)";
        h.style.transform = "translateX(20px)";
        pair.style.right = "-12px"; // move towards center
        arrow.style.opacity = "1";
        btn.textContent = "Tách liên kết";
        state = 1;
      } else {
        nh3.style.transform = "translateX(-40px)";
        h.style.transform = "translateX(60px)";
        pair.style.right = "-3px";
        arrow.style.opacity = "0";
        btn.textContent = "Mô phỏng phản ứng";
        state = 0;
      }
    });
  }

  // Module 9: Bond Strength Chart
  function initBondStrength() {
    const chart = $("#bond-chart");
    const btn = $("#btn-chart-animate");
    if (!chart) return;

    const data = [
      { name: "H-F", e: 565, color: "bg-cyan-500" },
      { name: "H-Cl", e: 431, color: "bg-cyan-400" },
      { name: "H-Br", e: 364, color: "bg-cyan-300" },
      { name: "H-I", e: 297, color: "bg-cyan-200" },
    ];
    let max = 600;

    const render = () => {
      chart.innerHTML = "";
      data.forEach((d, i) => {
        let w = (d.e / max) * 100;
        let html = `
          <div class="flex items-center text-sm">
            <div class="w-12 font-bold">${d.name}</div>
            <div class="flex-1 bg-slate-200 dark:bg-slate-700 h-6 rounded-full overflow-hidden">
              <div class="h-full ${d.color} transition-all duration-1000 ease-out flex items-center px-2 text-xs font-bold text-slate-800" style="width: 0%"></div>
            </div>
            <div class="w-16 text-right font-mono">${d.e}</div>
          </div>
        `;
        chart.innerHTML += html;
      });

      // Animate
      setTimeout(() => {
        const bars = chart.querySelectorAll(
          ".bg-cyan-500, .bg-cyan-400, .bg-cyan-300, .bg-cyan-200",
        );
        bars.forEach((b, i) => {
          b.style.width = `${(data[i].e / max) * 100}%`;
          b.textContent = `${data[i].e} kJ/mol`;
        });
      }, 50);
    };

    btn.addEventListener("click", render);
    render();
  }

  // Module 10: Quiz
  function initQuiz() {
    const groups = $$(".quiz-group");
    if (!groups) return;

    groups.forEach((g) => {
      let btns = g.querySelectorAll(".quiz-btn");
      let fb = g.nextElementSibling;
      btns.forEach((b) => {
        b.addEventListener("click", (e) => {
          // reset
          btns.forEach((x) => {
            x.classList.remove("bg-indigo-500", "text-white", "bg-red-500");
            x.classList.add("bg-white", "dark:bg-transparent");
          });

          let isCorrect = b.dataset.v === "1";
          if (isCorrect) {
            b.classList.add("bg-green-500", "text-white");
            b.classList.remove("bg-white");
            fb.textContent = "Chính xác! 🎉";
            fb.className =
              "quiz-feedback mt-2 text-sm font-bold text-green-600 dark:text-green-400 block";
          } else {
            b.classList.add("bg-red-500", "text-white");
            b.classList.remove("bg-white");
            fb.textContent = "Sai rồi. Hãy thử lại!";
            fb.className =
              "quiz-feedback mt-2 text-sm font-bold text-red-600 dark:text-red-400 block";
          }
        });
      });
    });
  }

  // Run all
  initBondDistance();
  initElectronegativity();
  initPolarity();
  initSigmaPi();
  initVSEPR();
  initLewis();
  initHybridization();
  initCoordinateBond();
  initBondStrength();
  initQuiz();
})();
