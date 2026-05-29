// --- 1. THEME TOGGLE LOGIC ---
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// Check local storage or system preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  htmlElement.classList.add("dark");
} else {
  htmlElement.classList.remove("dark");
}

themeToggleBtn.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
  if (htmlElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
});

// --- 2. HERO PARTICLE ANIMATION (Canvas) ---
const canvas = document.getElementById("hero-particles");
const ctx = canvas.getContext("2d");
let particlesArray;

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize handler
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

// Particle Class
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = Math.random() > 0.5 ? "#3b82f6" : "#ec4899";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    // Boundary check (wrap around)
    if (this.x > canvas.width) this.x = 0;
    else if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    else if (this.y < 0) this.y = canvas.height;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  const numberOfParticles = 50;
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
// --- 7. QUIZ SYSTEM (>15 Questions) ---
const quizData = [
  {
    q: "Số oxi hóa của Nitơ (N) trong HNO₃ là bao nhiêu?",
    a: ["+3", "+4", "+5", "-3"],
    correct: 2,
    explain: "H(+1), O(-2). Gọi N là x: 1 + x + 3(-2) = 0 => x = +5.",
  },
  {
    q: "Trong phản ứng: Zn + CuSO₄ → ZnSO₄ + Cu, chất nào đóng vai trò chất khử?",
    a: ["Zn", "CuSO₄", "ZnSO₄", "Cu"],
    correct: 0,
    explain: "Zn từ 0 lên +2 (nhường e) => Chất khử.",
  },
  {
    q: "Phản ứng nào sau đây KHÔNG phải là phản ứng oxi hóa - khử?",
    a: [
      "2Na + Cl₂ → 2NaCl",
      "CaCO₃ → CaO + CO₂",
      "2H₂ + O₂ → 2H₂O",
      "Fe + 2HCl → FeCl₂ + H₂",
    ],
    correct: 1,
    explain:
      "Trong phản ứng phân hủy CaCO₃, số oxi hóa của Ca, C, O không thay đổi.",
  },
  {
    q: "Số oxi hóa của Mn trong ion MnO₄⁻ là:",
    a: "+6",
    b: "+7",
    c: "+4",
    d: "+2",
    a: ["+6", "+7", "+4", "+2"],
    correct: 1,
    explain: "Mn + 4(-2) = -1 => Mn - 8 = -1 => Mn = +7.",
  },
  {
    q: "Cho phản ứng: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Chất oxi hóa là:",
    a: ["Fe₂O₃", "CO", "Fe", "CO₂"],
    correct: 0,
    explain:
      "Fe trong Fe₂O₃ có số OXH +3, giảm xuống 0 => Fe₂O₃ là chất oxi hóa.",
  },
  {
    q: "Cân bằng phản ứng: Al + HNO₃ → Al(NO₃)₃ + NO + H₂O. Hệ số của HNO₃ là:",
    a: ["1", "2", "3", "4"],
    correct: 3,
    explain:
      "Al(0)->Al(+3)+3e; N(+5)+3e->N(+2). Tỉ lệ 1:1. Al + 4HNO3 -> Al(NO3)3 + NO + 2H2O.",
  },
  {
    q: "Trong các hợp chất, Flo (F) luôn có số oxi hóa là:",
    a: "-1",
    b: "+1",
    c: "0",
    d: "Thay đổi tùy chất",
    a: ["-1", "+1", "0", "Thay đổi tùy chất"],
    correct: 0,
    explain:
      "Flo có độ âm điện lớn nhất, luôn hút e nên số OXH luôn là -1 trong hợp chất.",
  },
  {
    q: "Hiện tượng sắt bị gỉ trong không khí ẩm là ví dụ của:",
    a: "Sự khử",
    b: "Sự điện ly",
    c: "Sự ăn mòn điện hóa (OXH-K)",
    d: "Phản ứng trao đổi",
    a: [
      "Sự khử",
      "Sự điện ly",
      "Sự ăn mòn điện hóa (OXH-K)",
      "Phản ứng trao đổi",
    ],
    correct: 2,
    explain: "Gỉ sét là quá trình Fe bị oxi hóa bởi O₂ và H₂O trong không khí.",
  },
  {
    q: "Số oxi hóa của S trong SO₄²⁻ là:",
    a: "+4",
    b: "+6",
    c: "-2",
    d: "0",
    a: ["+4", "+6", "-2", "0"],
    correct: 1,
    explain: "S + 4(-2) = -2 => S = +6.",
  },
  {
    q: "Dấu hiệu nhận biết phản ứng oxi hóa khử là:",
    a: "Có kết tủa",
    b: "Có khí thoát ra",
    c: "Có sự thay đổi số oxi hóa",
    d: "Có nước tạo thành",
    a: [
      "Có kết tủa",
      "Có khí thoát ra",
      "Có sự thay đổi số oxi hóa",
      "Có nước tạo thành",
    ],
    correct: 2,
    explain:
      "Định nghĩa: Phản ứng OXH-K là phản ứng có sự thay đổi số oxi hóa.",
  },
  {
    q: "Hệ số cân bằng tối giản của Cu trong phản ứng: Cu + H₂SO₄ (đặc, nóng) → CuSO₄ + SO₂ + H₂O là:",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    a: ["1", "2", "3", "4"],
    correct: 0,
    explain: "1Cu + 2H2SO4 -> 1CuSO4 + 1SO2 + 2H2O.",
  },
  {
    q: "Chất nào vừa có tính oxi hóa, vừa có tính khử?",
    a: ["F₂", "Na", "S", "Al"],
    correct: 2,
    explain:
      "Lưu huỳnh (S) có số OXH 0 (trung gian) nên có thể giảm xuống -2 hoặc tăng lên +4, +6.",
  },
];

let currentQuestion = 0;
let score = 0;

function renderQuiz() {
  const q = quizData[currentQuestion];

  // Text
  document.getElementById("question-text").textContent =
    `Câu ${currentQuestion + 1}: ${q.q}`;
  document.getElementById("quiz-progress-text").textContent =
    `Câu ${currentQuestion + 1}/${quizData.length}`;
  document.getElementById("quiz-progress-bar").style.width =
    `${((currentQuestion + 1) / quizData.length) * 100}%`;

  // Options
  const grid = document.getElementById("options-grid");
  grid.innerHTML = "";

  q.a.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className =
      "quiz-option w-full p-4 text-left border-2 border-gray-200 dark:border-slate-700 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:shadow-md";
    btn.innerHTML = `<span class="inline-block w-8 h-8 bg-gray-100 dark:bg-slate-800 rounded-full text-center leading-8 mr-3 font-bold">${String.fromCharCode(65 + index)}</span> ${opt}`;
    btn.onclick = () => checkAnswer(index, btn);
    grid.appendChild(btn);
  });

  // Reset UI
  document.getElementById("quiz-feedback").classList.add("hidden");
  document.getElementById("btn-next-question").classList.add("hidden");
}

function checkAnswer(selectedIndex, btn) {
  // Disable all buttons
  const buttons = document.querySelectorAll(".quiz-option");
  buttons.forEach((b) => (b.disabled = true));

  const q = quizData[currentQuestion];
  const isCorrect = selectedIndex === q.correct;

  if (isCorrect) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    buttons[q.correct].classList.add("correct"); // Show correct answer
  }

  // Show feedback
  const fb = document.getElementById("quiz-feedback");
  document.getElementById("feedback-content").textContent = q.explain;
  fb.classList.remove("hidden");

  // Show Next Button
  document.getElementById("btn-next-question").classList.remove("hidden");
}

function nextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    renderQuiz();
  } else {
    // End Quiz
    const container = document.getElementById("quiz-container");
    container.innerHTML = `
                    <div class="text-center py-10 animate-fade-in">
                        <div class="text-6xl text-yellow-500 mb-4"><i class="fas fa-trophy"></i></div>
                        <h3 class="text-3xl font-bold mb-4">Hoàn Thành!</h3>
                        <p class="text-xl mb-6">Điểm số của bạn: <span class="text-blue-500 font-bold">${score}/${quizData.length}</span></p>
                        <p class="text-gray-500">Bạn đã nắm vững kiến thức phản ứng Oxi hóa - Khử!</p>
                    </div>
                `;
    document.getElementById("btn-next-question").classList.add("hidden");
  }
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  // Restore HTML structure if needed or just re-render
  // Ideally reload specific section content, here we just location reload or re-init
  // For smoother UX, let's just rebuild the container
  const container = document.getElementById("quiz-container");
  // (Re-injecting structure simplified for this single-file constraints)
  location.reload(); // Simplest way to full reset without complex state management in vanilla JS
}

// Init Quiz
renderQuiz();
(function () {
  // DATA: Elements 1-20
  const elements = [
    {
      z: 1,
      sym: "H",
      name: "Hydrogen",
      g: 1,
      p: 1,
      en: 2.2,
      ox: "+1",
      val: 1,
      conf: "1s¹",
      type: "nm",
    },
    {
      z: 2,
      sym: "He",
      name: "Helium",
      g: 18,
      p: 1,
      en: 0,
      ox: "0",
      val: 2,
      conf: "1s²",
      type: "ng",
    },
    {
      z: 3,
      sym: "Li",
      name: "Lithium",
      g: 1,
      p: 2,
      en: 0.98,
      ox: "+1",
      val: 1,
      conf: "[He] 2s¹",
      type: "m",
    },
    {
      z: 4,
      sym: "Be",
      name: "Beryllium",
      g: 2,
      p: 2,
      en: 1.57,
      ox: "+2",
      val: 2,
      conf: "[He] 2s²",
      type: "m",
    },
    {
      z: 5,
      sym: "B",
      name: "Boron",
      g: 13,
      p: 2,
      en: 2.04,
      ox: "+3",
      val: 3,
      conf: "[He] 2s² 2p¹",
      type: "nm",
    },
    {
      z: 6,
      sym: "C",
      name: "Carbon",
      g: 14,
      p: 2,
      en: 2.55,
      ox: "-4, +2, +4",
      val: 4,
      conf: "[He] 2s² 2p²",
      type: "nm",
    },
    {
      z: 7,
      sym: "N",
      name: "Nitrogen",
      g: 15,
      p: 2,
      en: 3.04,
      ox: "-3, +3, +5",
      val: 5,
      conf: "[He] 2s² 2p³",
      type: "nm",
    },
    {
      z: 8,
      sym: "O",
      name: "Oxygen",
      g: 16,
      p: 2,
      en: 3.44,
      ox: "-2",
      val: 6,
      conf: "[He] 2s² 2p⁴",
      type: "nm",
    },
    {
      z: 9,
      sym: "F",
      name: "Fluorine",
      g: 17,
      p: 2,
      en: 3.98,
      ox: "-1",
      val: 7,
      conf: "[He] 2s² 2p⁵",
      type: "nm",
    },
    {
      z: 10,
      sym: "Ne",
      name: "Neon",
      g: 18,
      p: 2,
      en: 0,
      ox: "0",
      val: 8,
      conf: "[He] 2s² 2p⁶",
      type: "ng",
    },
    {
      z: 11,
      sym: "Na",
      name: "Sodium",
      g: 1,
      p: 3,
      en: 0.93,
      ox: "+1",
      val: 1,
      conf: "[Ne] 3s¹",
      type: "m",
    },
    {
      z: 12,
      sym: "Mg",
      name: "Magnesium",
      g: 2,
      p: 3,
      en: 1.31,
      ox: "+2",
      val: 2,
      conf: "[Ne] 3s²",
      type: "m",
    },
    {
      z: 13,
      sym: "Al",
      name: "Aluminum",
      g: 13,
      p: 3,
      en: 1.61,
      ox: "+3",
      val: 3,
      conf: "[Ne] 3s² 3p¹",
      type: "m",
    },
    {
      z: 14,
      sym: "Si",
      name: "Silicon",
      g: 14,
      p: 3,
      en: 1.9,
      ox: "-4, +4",
      val: 4,
      conf: "[Ne] 3s² 3p²",
      type: "nm",
    },
    {
      z: 15,
      sym: "P",
      name: "Phosphorus",
      g: 15,
      p: 3,
      en: 2.19,
      ox: "-3, +3, +5",
      val: 5,
      conf: "[Ne] 3s² 3p³",
      type: "nm",
    },
    {
      z: 16,
      sym: "S",
      name: "Sulfur",
      g: 16,
      p: 3,
      en: 2.58,
      ox: "-2, +4, +6",
      val: 6,
      conf: "[Ne] 3s² 3p⁴",
      type: "nm",
    },
    {
      z: 17,
      sym: "Cl",
      name: "Chlorine",
      g: 17,
      p: 3,
      en: 3.16,
      ox: "-1, +1, +3, +5, +7",
      val: 7,
      conf: "[Ne] 3s² 3p⁵",
      type: "nm",
    },
    {
      z: 18,
      sym: "Ar",
      name: "Argon",
      g: 18,
      p: 3,
      en: 0,
      ox: "0",
      val: 8,
      conf: "[Ne] 3s² 3p⁶",
      type: "ng",
    },
    {
      z: 19,
      sym: "K",
      name: "Potassium",
      g: 1,
      p: 4,
      en: 0.82,
      ox: "+1",
      val: 1,
      conf: "[Ar] 4s¹",
      type: "m",
    },
    {
      z: 20,
      sym: "Ca",
      name: "Calcium",
      g: 2,
      p: 4,
      en: 1.0,
      ox: "+2",
      val: 2,
      conf: "[Ar] 4s²",
      type: "m",
    },
  ];

  const getEl = (z) => elements.find((e) => e.z === parseInt(z));

  /* MODULE 6: EN Compare Battle */
  function initCompare() {
    const sel1 = document.getElementById("en-el1");
    const sel2 = document.getElementById("en-el2");

    // Populate dropdowns (exclude noble gases)
    elements
      .filter((e) => e.en > 0)
      .forEach((e) => {
        sel1.add(new Option(e.sym, e.z));
        sel2.add(new Option(e.sym, e.z));
      });
    sel1.value = 8; // O
    sel2.value = 9; // F (OF2 example)

    const updateBattle = () => {
      const e1 = getEl(sel1.value);
      const e2 = getEl(sel2.value);

      document.getElementById("en-val1").textContent = `EN: ${e1.en}`;
      document.getElementById("en-val2").textContent = `EN: ${e2.en}`;

      const rope = document.getElementById("en-rope");
      const electron = document.getElementById("en-electron");
      const res = document.getElementById("en-result");

      if (e1.z === e2.z) {
        rope.style.width = "50%";
        electron.style.left = "50%";
        res.innerHTML = `Hai nguyên tử giống nhau. Độ âm điện bằng nhau.<br><strong>Số oxi hóa = 0</strong> (Quy tắc 1).`;
      } else if (e1.en > e2.en) {
        const pull = 50 - (e1.en - e2.en) * 10;
        rope.style.width = `${Math.max(10, pull)}%`;
        electron.style.left = `${Math.max(10, pull)}%`;
        res.innerHTML = `<strong>${e1.sym}</strong> hút e mạnh hơn (EN ${e1.en} > ${e2.en}).<br>${e1.sym} mang số oxi hóa <strong>ÂM</strong>, ${e2.sym} mang số oxi hóa <strong>DƯƠNG</strong>.`;
      } else {
        const pull = 50 + (e2.en - e1.en) * 10;
        rope.style.width = `${Math.min(90, pull)}%`;
        electron.style.left = `${Math.min(90, pull)}%`;
        res.innerHTML = `<strong>${e2.sym}</strong> hút e mạnh hơn (EN ${e2.en} > ${e1.en}).<br>Do đó trong phân tử giả định, ${e2.sym} nhận e (-), ${e1.sym} mất e (+).`;
      }
    };

    sel1.addEventListener("change", updateBattle);
    sel2.addEventListener("change", updateBattle);
    updateBattle();
  }

  /* MODULE 7,3,4,10: Mini Periodic Table & Highlighters & Cell */
  function initPeriodicTable() {
    const pt = document.getElementById("mini-pt");
    // Simple 8-column layout mapping (groups 1, 2, 13, 14, 15, 16, 17, 18)
    const gridMap = [
      { z: 1, c: 1 },
      { z: 2, c: 8 },
      { z: 3, c: 1 },
      { z: 4, c: 2 },
      { z: 5, c: 3 },
      { z: 6, c: 4 },
      { z: 7, c: 5 },
      { z: 8, c: 6 },
      { z: 9, c: 7 },
      { z: 10, c: 8 },
      { z: 11, c: 1 },
      { z: 12, c: 2 },
      { z: 13, c: 3 },
      { z: 14, c: 4 },
      { z: 15, c: 5 },
      { z: 16, c: 6 },
      { z: 17, c: 7 },
      { z: 18, c: 8 },
      { z: 19, c: 1 },
      { z: 20, c: 2 },
    ];

    let cellsHTML = "";
    let currentCell = 1;

    // Generate up to 32 cells (4 rows x 8 cols)
    for (let r = 1; r <= 4; r++) {
      for (let c = 1; c <= 8; c++) {
        const elMap = gridMap.find((m) => m.z === currentCell);
        if (elMap && elMap.c === c) {
          const e = getEl(currentCell);
          let bg = "bg-slate-200 dark:bg-slate-700"; // default
          if (e.type === "m")
            bg =
              "bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300";
          else if (e.type === "nm")
            bg =
              "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300";
          else if (e.type === "ng")
            bg =
              "bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300";

          cellsHTML += `<div class="pt-cell ${bg} border border-slate-300 dark:border-slate-600 font-bold text-sm" data-z="${e.z}" data-g="${e.g}" data-p="${e.p}">${e.sym}</div>`;
          currentCell++;
        } else {
          cellsHTML += `<div class="pt-empty"></div>`;
        }
      }
    }
    pt.innerHTML = cellsHTML;

    // Interaction (Cell Explainer)
    const cellEl = document.getElementById("cell-explainer");
    pt.querySelectorAll(".pt-cell").forEach((cell) => {
      cell.addEventListener("mouseenter", () => {
        const e = getEl(cell.dataset.z);
        cellEl.innerHTML = `
          <div class="flex items-center gap-6 w-full">
            <div class="text-4xl font-black text-slate-800 dark:text-slate-100">${e.sym}</div>
            <div class="border-l border-slate-300 dark:border-slate-600 pl-4 space-y-1 text-sm flex-grow">
              <div class="flex justify-between"><strong>Tên:</strong> <span>${e.name} (Z=${e.z})</span></div>
              <div class="flex justify-between"><strong>Nhóm:</strong> <span>${e.g}</span></div>
              <div class="flex justify-between"><strong>Cấu hình:</strong> <span class="font-mono text-cyan-600 dark:text-cyan-400">${e.conf}</span></div>
              <div class="flex justify-between pt-1 border-t border-slate-200 dark:border-slate-700">
                <strong class="text-pink-500">Số OXH phổ biến:</strong> 
                <span class="font-bold bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-2 rounded">${e.ox}</span>
              </div>
            </div>
          </div>
        `;
      });
    });

    // Highlighters
    const clearHl = () =>
      pt.querySelectorAll(".pt-cell").forEach((c) => {
        c.classList.remove(
          "hl-active",
          "text-blue-500",
          "text-green-500",
          "text-purple-500",
        );
        c.style.opacity = "1";
      });
    const applyHl = (attr, val, colorClass) => {
      clearHl();
      pt.querySelectorAll(".pt-cell").forEach((c) => {
        if (c.dataset[attr] == val) {
          c.classList.add("hl-active", colorClass);
        } else {
          c.style.opacity = "0.3";
        }
      });
    };

    document
      .getElementById("hl-group1")
      .addEventListener("click", () => applyHl("g", 1, "text-blue-500"));
    document
      .getElementById("hl-group2")
      .addEventListener("click", () => applyHl("g", 2, "text-green-500"));
    document
      .getElementById("hl-period2")
      .addEventListener("click", () => applyHl("p", 2, "text-purple-500"));
    document.getElementById("hl-clear").addEventListener("click", clearHl);
  }

  /* MODULE 9: Trend Graph */
  function initTrendGraph() {
    const container = document.getElementById("trend-graph");
    // Chart period 2 and 3 elements (excluding noble gases)
    const p23 = elements.filter((e) => (e.p === 2 || e.p === 3) && e.en > 0);

    let html = "";
    const maxEn = 4.0;

    p23.forEach((e) => {
      const hPercent = (e.en / maxEn) * 100;
      html += `
        <div class="trend-bar-container group relative">
          <div class="absolute -top-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold bg-slate-800 text-white px-1 rounded pointer-events-none">${e.en}</div>
          <div class="trend-bar" style="height: ${hPercent}%"></div>
          <div class="text-[10px] font-bold mt-1 text-slate-500 dark:text-slate-400">${e.sym}</div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  /* MODULE 1, 2, 5, 11: Atom Builder, Config, Orbital */
  function initAtomDeepDive() {
    const slider = document.getElementById("atom-z-slider");

    const s1 = document.getElementById("shell-1");
    const s2 = document.getElementById("shell-2");
    const s3 = document.getElementById("shell-3");
    const e1 = document.getElementById("e-count-1");
    const e2 = document.getElementById("e-count-2");
    const e3 = document.getElementById("e-count-3");
    const nuc = document.getElementById("nucleus");
    const ana = document.getElementById("atom-analysis");

    const cfgTxt = document.getElementById("config-text");
    const orbCon = document.getElementById("orbital-container");
    const orbOut = document.getElementById("orbital-conclusion");

    const updateAtom = () => {
      const z = parseInt(slider.value);
      const e = getEl(z);

      nuc.textContent = e.sym;

      // Calculate shells
      let shellArr = [0, 0, 0];
      let remain = z;
      if (remain > 0) {
        shellArr[0] = Math.min(2, remain);
        remain -= shellArr[0];
      }
      if (remain > 0) {
        shellArr[1] = Math.min(8, remain);
        remain -= shellArr[1];
      }
      if (remain > 0) {
        shellArr[2] = remain;
      }

      const applyShell = (shell, countText, count, max) => {
        if (count > 0) {
          shell.style.display = "flex";
          shell.style.opacity = "1";
          countText.textContent = `${count}e⁻`;
          shell.style.borderColor = count === max ? "#22c55e" : ""; // green if full
        } else {
          shell.style.display = "none";
        }
      };

      applyShell(s1, e1, shellArr[0], 2);
      applyShell(s2, e2, shellArr[1], 8);
      applyShell(s3, e3, shellArr[2], 8);

      // Valence Analysis
      let v = e.val;
      let text = `<strong>${e.name}</strong> có <strong>${v}</strong> electron lớp ngoài cùng. `;
      if (e.type === "ng") {
        text += `Cấu hình bền vững, không nhường/nhận e. <strong>Số OXH = 0</strong>.`;
      } else if (v <= 3) {
        text += `Khuynh hướng nhường ${v}e để đạt octet. <br><strong>Số OXH đặc trưng: +${v}</strong>.`;
      } else if (v >= 5) {
        const need = 8 - v;
        text += `Khuynh hướng nhận ${need}e (hoặc góp chung). <br><strong>Số OXH âm (thường gặp): -${need}</strong>.`;
      } else {
        text += `Khuynh hướng tạo liên kết cộng hóa trị. <br><strong>Số OXH đa dạng: từ -4 đến +4</strong>.`;
      }
      ana.innerHTML = text;

      // Config & Orbitals
      cfgTxt.textContent = e.conf;

      // Build simple orbital boxes (1s, 2s, 2p)
      let orbHtml = "";
      const drawBox = (name, electrons) => {
        let arrows = "";
        if (electrons === 1) arrows = "arrow-up";
        if (electrons === 2) arrows = "arrow-up arrow-down";
        return `
          <div class="flex flex-col items-center">
            <span class="text-[10px] text-slate-400 mb-1">${name}</span>
            <div class="orb-box ${arrows}"></div>
          </div>`;
      };

      let eOrb = z;
      // 1s
      let fill1s = Math.min(2, eOrb);
      eOrb -= fill1s;
      orbHtml += drawBox("1s", fill1s);
      // 2s
      if (z >= 3) {
        let fill2s = Math.min(2, eOrb);
        eOrb -= fill2s;
        orbHtml += drawBox("2s", fill2s);
      }
      // 2p (3 boxes)
      if (z >= 5) {
        orbHtml += '<div class="flex gap-1">';
        for (let i = 0; i < 3; i++) {
          let fillP = 0;
          // Hund's rule simplified
          if (eOrb > i) fillP++; // up arrows
          if (eOrb > i + 3) fillP++; // down arrows
          orbHtml += drawBox("2p", fillP);
        }
        orbHtml += "</div>";
        eOrb = Math.max(0, eOrb - 6);
      }
      // 3s
      if (z >= 11) {
        let fill3s = Math.min(2, eOrb);
        eOrb -= fill3s;
        orbHtml += drawBox("3s", fill3s);
      }
      // 3p (3 boxes)
      if (z >= 13) {
        orbHtml += '<div class="flex gap-1">';
        for (let i = 0; i < 3; i++) {
          let fillP = 0;
          if (eOrb > i) fillP++;
          if (eOrb > i + 3) fillP++;
          orbHtml += drawBox("3p", fillP);
        }
        orbHtml += "</div>";
      }

      orbCon.innerHTML = orbHtml;

      // Conclusion text mirrors analysis
      let conc = `${e.sym} có ${v}e hóa trị. `;
      if (v <= 3 && e.type !== "ng")
        conc += `Dễ mất ${v}e ở phân lớp ngoài cùng -> tạo Ion dương mang điện +${v}.`;
      else if (v >= 5 && e.type !== "ng")
        conc += `Còn thiếu ${8 - v}e ở phân lớp p -> dễ nhận thêm để có số oxi hóa -${8 - v}.`;
      else
        conc += `Các electron s và p ngoài cùng có thể tham gia liên kết, tạo nhiều mức oxi hóa.`;
      orbOut.textContent = conc;
    };

    slider.addEventListener("input", updateAtom);
    updateAtom(); // init
  }

  /* MODULE 12: Oxidation Calculator */
  function initCalculator() {
    const formulas = [
      {
        f: "Al₂O₃",
        target: "Al",
        steps: [
          "Biết O = -2 (Quy tắc 2).",
          "Gọi x là số oxi hóa của Al.",
          "Tổng: 2x + 3(-2) = 0 (Quy tắc 3).",
          "2x - 6 = 0 ⇒ 2x = +6 ⇒ <strong>x = +3</strong>.",
        ],
      },
      {
        f: "H₂SO₄",
        target: "S",
        steps: [
          "Biết H = +1, O = -2 (Quy tắc 2).",
          "Gọi x là số oxi hóa của S.",
          "Tổng: 2(+1) + x + 4(-2) = 0.",
          "+2 + x - 8 = 0 ⇒ <strong>x = +6</strong>.",
        ],
      },
      {
        f: "KMnO₄",
        target: "Mn",
        steps: [
          "K nhóm IA ⇒ K = +1. O = -2.",
          "Gọi x là số oxi hóa của Mn.",
          "1(+1) + x + 4(-2) = 0.",
          "1 + x - 8 = 0 ⇒ <strong>x = +7</strong>.",
        ],
      },
      {
        f: "NH₄⁺",
        target: "N",
        steps: [
          "Biết H = +1.",
          "Gọi x là số oxi hóa của N.",
          "Tổng = điện tích ion = +1 (Quy tắc 4).",
          "x + 4(+1) = +1 ⇒ x + 4 = 1 ⇒ <strong>x = -3</strong>.",
        ],
      },
      {
        f: "OF₂",
        target: "O",
        steps: [
          "F có độ âm điện lớn nhất ⇒ F luôn là -1.",
          "Gọi x là số oxi hóa của O.",
          "Tổng: x + 2(-1) = 0.",
          "x - 2 = 0 ⇒ <strong>x = +2</strong> (Đây là ngoại lệ của Oxi!).",
        ],
      },
    ];

    const btnContainer = document.getElementById("calc-buttons");
    const display = document.getElementById("calc-display");

    formulas.forEach((item, idx) => {
      const btn = document.createElement("button");
      btn.className =
        "px-4 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600 font-bold hover:bg-blue-50 dark:hover:bg-slate-600 transition";
      btn.innerHTML = item.f;
      btn.onclick = () => {
        // Build explanation HTML
        let html = `<h4 class="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Tìm số oxi hóa của ${item.target} trong ${item.f}:</h4>`;
        html += `<div class="space-y-3">`;
        item.steps.forEach((step, i) => {
          html += `<div class="p-3 bg-white dark:bg-slate-900 rounded border-l-4 border-blue-400 shadow-sm opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style="animation-delay: ${i * 0.3}s">
            <span class="text-sm text-slate-500 font-mono mr-2">Step ${i + 1}:</span> ${step}
          </div>`;
        });
        html += `</div>`;
        display.innerHTML = html;
      };
      btnContainer.appendChild(btn);
    });
  }

  // Helper keyframes for animation injected directly into head
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fadeIn {
      to { opacity: 1; transform: translateY(0); }
      from { opacity: 0; transform: translateY(10px); }
    }
  `;
  document.head.appendChild(style);

  // Initialize all modules
  document.addEventListener("DOMContentLoaded", () => {
    initCompare();
    initPeriodicTable();
    initTrendGraph();
    initAtomDeepDive();
    initCalculator();
  });
})();
(function () {
  // Common Data (Elements 1-20) - Extended for Redox context
  const elements = [
    {
      z: 1,
      sym: "H",
      name: "Hydrogen",
      g: 1,
      p: 1,
      en: 2.2,
      val: 1,
      conf: "1s¹",
      type: "nm",
      rx: "Lưỡng tính (nhường/nhận 1e)",
    },
    {
      z: 2,
      sym: "He",
      name: "Helium",
      g: 18,
      p: 1,
      en: 0,
      val: 2,
      conf: "1s²",
      type: "ng",
      rx: "Trơ (không OXH/Khử)",
    },
    {
      z: 3,
      sym: "Li",
      name: "Lithium",
      g: 1,
      p: 2,
      en: 0.98,
      val: 1,
      conf: "[He] 2s¹",
      type: "m",
      rx: "Khử rất mạnh (Dễ mất 1e)",
    },
    {
      z: 4,
      sym: "Be",
      name: "Beryllium",
      g: 2,
      p: 2,
      en: 1.57,
      val: 2,
      conf: "[He] 2s²",
      type: "m",
      rx: "Khử mạnh (Mất 2e)",
    },
    {
      z: 5,
      sym: "B",
      name: "Boron",
      g: 13,
      p: 2,
      en: 2.04,
      val: 3,
      conf: "[He] 2s² 2p¹",
      type: "nm",
      rx: "Khử yếu / Lưỡng cực",
    },
    {
      z: 6,
      sym: "C",
      name: "Carbon",
      g: 14,
      p: 2,
      en: 2.55,
      val: 4,
      conf: "[He] 2s² 2p²",
      type: "nm",
      rx: "Lưỡng tính (thường cộng hóa trị)",
    },
    {
      z: 7,
      sym: "N",
      name: "Nitrogen",
      g: 15,
      p: 2,
      en: 3.04,
      val: 5,
      conf: "[He] 2s² 2p³",
      type: "nm",
      rx: "OXH mạnh (Nhận 3e)",
    },
    {
      z: 8,
      sym: "O",
      name: "Oxygen",
      g: 16,
      p: 2,
      en: 3.44,
      val: 6,
      conf: "[He] 2s² 2p⁴",
      type: "nm",
      rx: "OXH rất mạnh (Nhận 2e)",
    },
    {
      z: 9,
      sym: "F",
      name: "Fluorine",
      g: 17,
      p: 2,
      en: 3.98,
      val: 7,
      conf: "[He] 2s² 2p⁵",
      type: "nm",
      rx: "OXH mạnh nhất (Nhận 1e)",
    },
    {
      z: 10,
      sym: "Ne",
      name: "Neon",
      g: 18,
      p: 2,
      en: 0,
      val: 8,
      conf: "[He] 2s² 2p⁶",
      type: "ng",
      rx: "Trơ",
    },
    {
      z: 11,
      sym: "Na",
      name: "Sodium",
      g: 1,
      p: 3,
      en: 0.93,
      val: 1,
      conf: "[Ne] 3s¹",
      type: "m",
      rx: "Khử rất mạnh (Dễ mất 1e)",
    },
    {
      z: 12,
      sym: "Mg",
      name: "Magnesium",
      g: 2,
      p: 3,
      en: 1.31,
      val: 2,
      conf: "[Ne] 3s²",
      type: "m",
      rx: "Khử mạnh (Mất 2e)",
    },
    {
      z: 13,
      sym: "Al",
      name: "Aluminum",
      g: 13,
      p: 3,
      en: 1.61,
      val: 3,
      conf: "[Ne] 3s² 3p¹",
      type: "m",
      rx: "Khử trung bình (Mất 3e)",
    },
    {
      z: 14,
      sym: "Si",
      name: "Silicon",
      g: 14,
      p: 3,
      en: 1.9,
      val: 4,
      conf: "[Ne] 3s² 3p²",
      type: "nm",
      rx: "Lưỡng tính",
    },
    {
      z: 15,
      sym: "P",
      name: "Phosphorus",
      g: 15,
      p: 3,
      en: 2.19,
      val: 5,
      conf: "[Ne] 3s² 3p³",
      type: "nm",
      rx: "OXH yếu / Khử",
    },
    {
      z: 16,
      sym: "S",
      name: "Sulfur",
      g: 16,
      p: 3,
      en: 2.58,
      val: 6,
      conf: "[Ne] 3s² 3p⁴",
      type: "nm",
      rx: "OXH khá mạnh (Nhận 2e)",
    },
    {
      z: 17,
      sym: "Cl",
      name: "Chlorine",
      g: 17,
      p: 3,
      en: 3.16,
      val: 7,
      conf: "[Ne] 3s² 3p⁵",
      type: "nm",
      rx: "OXH rất mạnh (Nhận 1e)",
    },
    {
      z: 18,
      sym: "Ar",
      name: "Argon",
      g: 18,
      p: 3,
      en: 0,
      val: 8,
      conf: "[Ne] 3s² 3p⁶",
      type: "ng",
      rx: "Trơ",
    },
    {
      z: 19,
      sym: "K",
      name: "Potassium",
      g: 1,
      p: 4,
      en: 0.82,
      val: 1,
      conf: "[Ar] 4s¹",
      type: "m",
      rx: "Khử cực mạnh",
    },
    {
      z: 20,
      sym: "Ca",
      name: "Calcium",
      g: 2,
      p: 4,
      en: 1.0,
      val: 2,
      conf: "[Ar] 4s²",
      type: "m",
      rx: "Khử mạnh",
    },
  ];

  const getEl = (z) => elements.find((e) => e.z === parseInt(z));

  /* MODULE 6: Compare 2 Elements (Redox Role Prediction) */
  function initCompare() {
    const sel1 = document.getElementById("rx-el1");
    const sel2 = document.getElementById("rx-el2");

    // Populate dropdowns (exclude noble gases)
    elements
      .filter((e) => e.en > 0)
      .forEach((e) => {
        sel1.add(new Option(e.sym, e.z));
        sel2.add(new Option(e.sym, e.z));
      });
    sel1.value = 12; // Mg
    sel2.value = 8; // O

    const updateBattle = () => {
      const e1 = getEl(sel1.value);
      const e2 = getEl(sel2.value);

      document.getElementById("rx-val1").textContent = `EN: ${e1.en}`;
      document.getElementById("rx-val2").textContent = `EN: ${e2.en}`;

      const rope = document.getElementById("rx-rope");
      const electron = document.getElementById("rx-electron");
      const res = document.getElementById("rx-result");

      if (e1.z === e2.z) {
        rope.style.width = "50%";
        electron.style.left = "50%";
        res.innerHTML = `<strong>Không có sự dịch chuyển e</strong> (Đơn chất). Số OXH = 0.`;
      } else if (e1.en > e2.en) {
        const pull = 50 - (e1.en - e2.en) * 15;
        rope.style.width = `${Math.max(5, pull)}%`;
        electron.style.left = `${Math.max(5, pull)}%`;
        res.innerHTML = `<div><strong class="text-blue-500">${e1.sym} hút e</strong> (Chất Oxi hóa)</div>
                         <div><strong class="text-red-500">${e2.sym} nhường e</strong> (Chất Khử)</div>`;
      } else {
        const pull = 50 + (e2.en - e1.en) * 15;
        rope.style.width = `${Math.min(95, pull)}%`;
        electron.style.left = `${Math.min(95, pull)}%`;
        res.innerHTML = `<div><strong class="text-red-500">${e1.sym} nhường e</strong> (Chất Khử)</div>
                         <div><strong class="text-blue-500">${e2.sym} hút e</strong> (Chất Oxi hóa)</div>`;
      }
    };

    sel1.addEventListener("change", updateBattle);
    sel2.addEventListener("change", updateBattle);
    updateBattle();
  }

  /* MODULE 7, 3, 4, 10: Mini PT & Highlighters */
  function initPeriodicTable() {
    const pt = document.getElementById("rx-mini-pt");
    const gridMap = [
      { z: 1, c: 1 },
      { z: 2, c: 8 },
      { z: 3, c: 1 },
      { z: 4, c: 2 },
      { z: 5, c: 3 },
      { z: 6, c: 4 },
      { z: 7, c: 5 },
      { z: 8, c: 6 },
      { z: 9, c: 7 },
      { z: 10, c: 8 },
      { z: 11, c: 1 },
      { z: 12, c: 2 },
      { z: 13, c: 3 },
      { z: 14, c: 4 },
      { z: 15, c: 5 },
      { z: 16, c: 6 },
      { z: 17, c: 7 },
      { z: 18, c: 8 },
      { z: 19, c: 1 },
      { z: 20, c: 2 },
    ];

    let cellsHTML = "";
    let currentCell = 1;

    for (let r = 1; r <= 4; r++) {
      for (let c = 1; c <= 8; c++) {
        const elMap = gridMap.find((m) => m.z === currentCell);
        if (elMap && elMap.c === c) {
          const e = getEl(currentCell);
          // Color code by metal/nonmetal
          let bg = "bg-slate-200 dark:bg-slate-700";
          if (e.type === "m")
            bg = "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400";
          else if (e.type === "nm")
            bg =
              "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400";
          else if (e.type === "ng")
            bg = "bg-slate-100 dark:bg-slate-800 text-slate-400";

          cellsHTML += `<div class="pt-cell ${bg} border border-slate-300 dark:border-slate-600 font-bold text-sm" data-z="${e.z}" data-type="${e.type}" data-p="${e.p}">${e.sym}</div>`;
          currentCell++;
        } else {
          cellsHTML += `<div class="pt-empty"></div>`;
        }
      }
    }
    pt.innerHTML = cellsHTML;

    // Explainer
    const cellEl = document.getElementById("rx-cell-explainer");
    pt.querySelectorAll(".pt-cell").forEach((cell) => {
      cell.addEventListener("mouseenter", () => {
        const e = getEl(cell.dataset.z);
        let roleBadge = "";
        if (e.type === "m")
          roleBadge =
            '<span class="bg-red-500 text-white px-2 py-0.5 rounded text-xs">Thường là Chất Khử</span>';
        else if (e.type === "nm")
          roleBadge =
            '<span class="bg-blue-500 text-white px-2 py-0.5 rounded text-xs">Thường là Chất OXH</span>';
        else
          roleBadge =
            '<span class="bg-slate-500 text-white px-2 py-0.5 rounded text-xs">Trơ</span>';

        cellEl.innerHTML = `
          <div class="flex items-center gap-6 w-full">
            <div class="text-4xl font-black text-slate-800 dark:text-slate-100 w-12 text-center">${e.sym}</div>
            <div class="border-l border-slate-300 dark:border-slate-600 pl-4 space-y-1 text-sm flex-grow">
              <div class="flex items-center gap-2"><strong>${e.name}</strong> ${roleBadge}</div>
              <div><strong>Bản chất:</strong> ${e.rx}</div>
              <div class="text-slate-500 text-xs mt-1 font-mono">EN: ${e.en} | Hóa trị: ${e.val}e</div>
            </div>
          </div>
        `;
      });
    });

    // Highlighters
    const clearHl = () =>
      pt.querySelectorAll(".pt-cell").forEach((c) => {
        c.classList.remove(
          "hl-active",
          "text-red-500",
          "text-blue-500",
          "text-emerald-500",
        );
        c.style.opacity = "1";
      });
    const applyHl = (attr, val, colorClass) => {
      clearHl();
      pt.querySelectorAll(".pt-cell").forEach((c) => {
        if (c.dataset[attr] == val) c.classList.add("hl-active", colorClass);
        else c.style.opacity = "0.3";
      });
    };

    document
      .getElementById("hl-metals")
      .addEventListener("click", () => applyHl("type", "m", "text-red-500"));
    document
      .getElementById("hl-nonmetals")
      .addEventListener("click", () => applyHl("type", "nm", "text-blue-500"));
    document
      .getElementById("hl-period3")
      .addEventListener("click", () => applyHl("p", 3, "text-emerald-500"));
    document.getElementById("hl-rx-clear").addEventListener("click", clearHl);
  }

  /* MODULE 9: Trend Graph (Period 3 EN -> Redox strength) */
  function initTrendGraph() {
    const container = document.getElementById("rx-trend-graph");
    const p3 = elements.filter((e) => e.p === 3 && e.en > 0);

    let html = "";
    const maxEn = 4.0;

    p3.forEach((e) => {
      const hPercent = (e.en / maxEn) * 100;
      // Gradient shift from Red (Reducer) to Blue (Oxidizer)
      let colorClass =
        e.type === "m"
          ? "from-red-400 to-red-500"
          : "from-blue-400 to-blue-500";
      if (e.sym === "Si") colorClass = "from-purple-400 to-purple-500"; // Metalloid

      html += `
        <div class="flex-1 flex flex-col items-center justify-end h-full group relative cursor-pointer">
          <div class="absolute -top-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold bg-slate-800 text-white px-1 rounded pointer-events-none">EN:${e.en}</div>
          <div class="w-full max-w-[24px] bg-gradient-to-t ${colorClass} rounded-t-sm transition-all duration-500" style="height: ${hPercent}%"></div>
          <div class="text-xs font-bold mt-1 text-slate-600 dark:text-slate-300">${e.sym}</div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  /* MODULE 1, 2, 5, 11: Dynamic Atom & Orbitals (Redox contextualized) */
  function initAtomDeepDive() {
    const select = document.getElementById("rx-atom-select");

    // Add specific interesting elements for redox
    const targets = [11, 12, 13, 8, 9, 17]; // Na, Mg, Al, O, F, Cl
    targets.forEach((z) => {
      const e = getEl(z);
      select.add(
        new Option(
          `${e.name} (${e.sym}) - ${e.type === "m" ? "Khử" : "Oxi hóa"}`,
          z,
        ),
      );
    });

    const s1 = document.getElementById("rx-shell-1");
    const s2 = document.getElementById("rx-shell-2");
    const s3 = document.getElementById("rx-shell-3");
    const e1 = document.getElementById("rx-e1");
    const e2 = document.getElementById("rx-e2");
    const e3 = document.getElementById("rx-e3");
    const nuc = document.getElementById("rx-nucleus");
    const ana = document.getElementById("rx-atom-analysis");

    const cfgTxt = document.getElementById("rx-config-text");
    const orbCon = document.getElementById("rx-orbital-container");

    const updateAtom = () => {
      const z = parseInt(select.value);
      const e = getEl(z);

      nuc.textContent = e.sym;
      nuc.className = `absolute w-8 h-8 rounded-full text-white flex items-center justify-center font-bold shadow-lg z-10 transition-all duration-300 ${e.type === "m" ? "bg-red-500" : "bg-blue-500"}`;

      let shellArr = [0, 0, 0];
      let remain = z;
      if (remain > 0) {
        shellArr[0] = Math.min(2, remain);
        remain -= shellArr[0];
      }
      if (remain > 0) {
        shellArr[1] = Math.min(8, remain);
        remain -= shellArr[1];
      }
      if (remain > 0) {
        shellArr[2] = remain;
      }

      const applyShell = (shell, countText, count, max, isOutermost) => {
        if (count > 0) {
          shell.style.display = "flex";
          shell.style.opacity = "1";
          countText.textContent = `${count}e⁻`;
          // Highlight valence shell based on type
          if (isOutermost) {
            shell.style.borderColor = e.type === "m" ? "#ef4444" : "#3b82f6";
            shell.style.borderWidth = "2px";
            shell.style.borderStyle = "dashed";
          } else {
            shell.style.borderColor = "";
            shell.style.borderWidth = "1px";
            shell.style.borderStyle = "solid";
          }
        } else {
          shell.style.display = "none";
        }
      };

      const outerIdx = shellArr[2] > 0 ? 2 : shellArr[1] > 0 ? 1 : 0;
      applyShell(s1, e1, shellArr[0], 2, outerIdx === 0);
      applyShell(s2, e2, shellArr[1], 8, outerIdx === 1);
      applyShell(s3, e3, shellArr[2], 8, outerIdx === 2);

      // Orbital Drawing
      cfgTxt.textContent = e.conf;
      let orbHtml = "";
      const drawBox = (name, electrons, isValence) => {
        let arrows = "";
        if (electrons === 1) arrows = "arrow-up";
        if (electrons === 2) arrows = "arrow-up arrow-down";
        let boxStyle = isValence
          ? e.type === "m"
            ? "border-red-400 bg-red-50/50"
            : "border-blue-400 bg-blue-50/50"
          : "";
        return `
          <div class="flex flex-col items-center">
            <span class="text-[10px] text-slate-400 mb-1">${name}</span>
            <div class="orb-box ${arrows} ${boxStyle}"></div>
          </div>`;
      };

      let eOrb = z;
      const isV1 = z <= 2;
      const isV2 = z > 2 && z <= 10;
      const isV3 = z > 10;

      let fill1s = Math.min(2, eOrb);
      eOrb -= fill1s;
      orbHtml += drawBox("1s", fill1s, isV1);

      if (z >= 3) {
        let fill2s = Math.min(2, eOrb);
        eOrb -= fill2s;
        orbHtml += drawBox("2s", fill2s, isV2);
      }
      if (z >= 5) {
        orbHtml += '<div class="flex gap-1">';
        for (let i = 0; i < 3; i++) {
          let fillP = 0;
          if (eOrb > i) fillP++;
          if (eOrb > i + 3) fillP++;
          orbHtml += drawBox("2p", fillP, isV2);
        }
        orbHtml += "</div>";
        eOrb = Math.max(0, eOrb - 6);
      }
      if (z >= 11) {
        let fill3s = Math.min(2, eOrb);
        eOrb -= fill3s;
        orbHtml += drawBox("3s", fill3s, isV3);
      }
      if (z >= 13) {
        orbHtml += '<div class="flex gap-1">';
        for (let i = 0; i < 3; i++) {
          let fillP = 0;
          if (eOrb > i) fillP++;
          if (eOrb > i + 3) fillP++;
          orbHtml += drawBox("3p", fillP, isV3);
        }
        orbHtml += "</div>";
      }
      orbCon.innerHTML = orbHtml;

      // Analysis Text
      if (e.type === "m") {
        ana.innerHTML = `<strong>Nguyên tử ${e.sym}</strong> có ${e.val}e lớp ngoài cùng (nét đứt đỏ).<br>Xu hướng: <strong>Nhường ${e.val}e</strong> để đạt cấu hình bền vững -> Thể hiện <strong>Tính Khử</strong>.`;
        ana.className =
          "mt-6 w-full p-4 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-xl text-sm border border-red-200 dark:border-red-800";
      } else {
        const need = 8 - e.val;
        ana.innerHTML = `<strong>Nguyên tử ${e.sym}</strong> có ${e.val}e lớp ngoài cùng, còn thiếu ${need}e ở các orbital p.<br>Xu hướng: <strong>Nhận ${need}e</strong> để lấp đầy orbital -> Thể hiện <strong>Tính Oxi Hóa</strong>.`;
        ana.className =
          "mt-6 w-full p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-xl text-sm border border-blue-200 dark:border-blue-800";
      }
    };

    select.addEventListener("change", updateAtom);
    updateAtom();
  }

  /* MODULE 8: Mg + O Simulation (Electron Mapping) */
  let rxSimState = 0; // 0: init, 1: done
  window.runRedoxSim = function () {
    if (rxSimState === 1) return;

    const e1 = document.getElementById("sim-e1");
    const e2 = document.getElementById("sim-e2");
    const slot1 = document.getElementById("sim-slot1");
    const slot2 = document.getElementById("sim-slot2");
    const mg = document.getElementById("sim-mg");
    const o = document.getElementById("sim-o");
    const mgLabel = document.getElementById("sim-mg-label");
    const oLabel = document.getElementById("sim-o-label");
    const flash = document.getElementById("sim-flash");

    // Calculate translation distances based on current DOM rects
    const rectMg = mg.getBoundingClientRect();
    const rectO = o.getBoundingClientRect();
    const distanceX = rectO.left - rectMg.left;

    // Move electrons
    e1.style.transform = `translate(${distanceX}px, 0)`;
    e2.style.transform = `translate(${distanceX}px, 0)`;

    // Change styles mid-flight
    setTimeout(() => {
      // Flash
      flash.classList.add("rx-flash-anim");
      setTimeout(() => flash.classList.remove("rx-flash-anim"), 500);

      // Atoms become Ions
      mg.classList.remove("border-slate-500");
      mg.classList.add("border-red-500", "bg-red-900/50");
      mg.querySelector("span").innerHTML = "Mg<sup>2+</sup>";

      o.classList.remove("border-slate-500");
      o.classList.add("border-blue-500", "bg-blue-900/50");
      o.querySelector("span").innerHTML = "O<sup>2-</sup>";

      // Hide electrons and fill slots
      e1.style.opacity = "0";
      e2.style.opacity = "0";
      slot1.classList.remove("border", "border-dashed", "opacity-50");
      slot1.classList.add("bg-red-400", "shadow-[0_0_8px_#f87171]");
      slot2.classList.remove("border", "border-dashed", "opacity-50");
      slot2.classList.add("bg-red-400", "shadow-[0_0_8px_#f87171]");

      // Update Labels
      mgLabel.innerHTML = "Ion Mg<sup>2+</sup> (Bị OXH)";
      oLabel.innerHTML = "Ion O<sup>2-</sup> (Bị Khử)";

      rxSimState = 1;
    }, 1000);
  };

  window.resetRedoxSim = function () {
    if (rxSimState === 0) return;

    const e1 = document.getElementById("sim-e1");
    const e2 = document.getElementById("sim-e2");
    const slot1 = document.getElementById("sim-slot1");
    const slot2 = document.getElementById("sim-slot2");
    const mg = document.getElementById("sim-mg");
    const o = document.getElementById("sim-o");
    const mgLabel = document.getElementById("sim-mg-label");
    const oLabel = document.getElementById("sim-o-label");

    e1.style.transition = "none";
    e2.style.transition = "none";
    e1.style.transform = `translate(-50%, 0)`;
    e2.style.transform = `translate(-50%, 0)`;
    e1.style.opacity = "1";
    e2.style.opacity = "1";

    // Force reflow
    void e1.offsetWidth;
    e1.style.transition = "all 1s ease-in-out";
    e2.style.transition = "all 1s ease-in-out";

    mg.className =
      "w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-500 flex items-center justify-center relative shadow-lg transition-all duration-500";
    mg.querySelector("span").innerHTML = "Mg";
    o.className =
      "w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-500 flex items-center justify-center relative shadow-lg transition-all duration-500";
    o.querySelector("span").innerHTML = "O";

    slot1.className =
      "absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-dashed border-blue-400 opacity-50";
    slot2.className =
      "absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-dashed border-blue-400 opacity-50";

    mgLabel.innerHTML = "Chất khử (Mg⁰)";
    oLabel.innerHTML = "Chất OXH (O⁰)";

    rxSimState = 0;
  };

  /* MODULE 12: Interactive Equation Analyzer */
  function initEqAnalyzer() {
    const data = {
      1: {
        eq: "Fe₂O₃ + 3CO → 2Fe + 3CO₂",
        red: "CO (C từ +2 lên +4)",
        ox: "Fe₂O₃ (Fe từ +3 xuống 0)",
        pro_red: "Fe³⁺ + 3e → Fe⁰",
        pro_ox: "C⁺² → C⁺⁴ + 2e",
      },
      2: {
        eq: "2Ag + Cl₂ → 2AgCl",
        red: "Ag (từ 0 lên +1)",
        ox: "Cl₂ (từ 0 xuống -1)",
        pro_red: "Cl₂⁰ + 2e → 2Cl⁻",
        pro_ox: "Ag⁰ → Ag⁺ + 1e",
      },
      3: {
        eq: "Ag⁺ + Fe²⁺ → Ag + Fe³⁺",
        red: "Fe²⁺ (từ +2 lên +3)",
        ox: "Ag⁺ (từ +1 xuống 0)",
        pro_red: "Ag⁺ + 1e → Ag⁰",
        pro_ox: "Fe²⁺ → Fe³⁺ + 1e",
      },
    };

    const btns = document.querySelectorAll(".eq-btn");
    const display = document.getElementById("eq-analyzer-display");

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Active state
        btns.forEach((b) =>
          b.classList.remove(
            "border-purple-500",
            "bg-purple-50",
            "dark:bg-purple-900/30",
          ),
        );
        btn.classList.add(
          "border-purple-500",
          "bg-purple-50",
          "dark:bg-purple-900/30",
        );

        const d = data[btn.dataset.eq];

        display.innerHTML = `
          <div class="w-full space-y-4 animate-[simFlash_0.5s_ease-out]">
            <div class="text-center font-mono text-xl font-bold bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 mb-6">
              ${d.eq}
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <div class="text-xs text-red-600 dark:text-red-400 font-bold uppercase mb-1">Chất Khử (Nhường e)</div>
                <div class="font-bold">${d.red}</div>
                <div class="mt-2 text-sm font-mono bg-white/50 dark:bg-black/20 p-2 rounded">Sự OXH: ${d.pro_ox}</div>
              </div>
              
              <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <div class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase mb-1">Chất Oxi Hóa (Nhận e)</div>
                <div class="font-bold">${d.ox}</div>
                <div class="mt-2 text-sm font-mono bg-white/50 dark:bg-black/20 p-2 rounded">Sự Khử: ${d.pro_red}</div>
              </div>
            </div>
          </div>
        `;
      });
    });
  }

  // Initialize all
  document.addEventListener("DOMContentLoaded", () => {
    initCompare();
    initPeriodicTable();
    initTrendGraph();
    initAtomDeepDive();
    initEqAnalyzer();
  });
})();
(function () {
  // Helper for DOMContentLoaded or direct execution
  function runModules() {
    // --- Mod 1: LCM Visualizer ---
    (function initMod1() {
      const i1 = document.getElementById("m1-i1");
      const i2 = document.getElementById("m1-i2");
      const v1 = document.getElementById("m1-v1");
      const v2 = document.getElementById("m1-v2");
      const o1 = document.getElementById("m1-o1");
      const o2 = document.getElementById("m1-o2");
      const lcmOut = document.getElementById("m1-lcm");
      function update() {
        let c = parseInt(i1.value);
        let n = parseInt(i2.value);
        v1.textContent = c;
        v2.textContent = n;
        let a = c,
          b = n;
        while (b !== 0) {
          let t = b;
          b = a % b;
          a = t;
        }
        let lcm = (c * n) / a;
        lcmOut.textContent = lcm;
        o1.textContent = lcm / c;
        o2.textContent = lcm / n;
      }
      if (i1 && i2) {
        i1.addEventListener("input", update);
        i2.addEventListener("input", update);
        update();
      }
    })();

    // --- Mod 2: Oxidation State Calculator ---
    (function initMod2() {
      const sel = document.getElementById("m2-sel");
      const eq = document.getElementById("m2-eq");
      const res = document.getElementById("m2-res");
      const data = {
        kmno4: { eq: "+1 + x + 4(-2) = 0", r: "+7" },
        hno3: { eq: "+1 + x + 3(-2) = 0", r: "+5" },
        h2so4: { eq: "+2(+1) + x + 4(-2) = 0", r: "+6" },
        k2cr2o7: { eq: "2(+1) + 2x + 7(-2) = 0", r: "+6" },
      };
      function update() {
        let val = data[sel.value];
        if (val) {
          eq.textContent = val.eq;
          res.textContent = val.r;
        }
      }
      if (sel) {
        sel.addEventListener("change", update);
        update();
      }
    })();

    // --- Mod 3: Half Reaction Builder ---
    (function initMod3() {
      const inp = document.getElementById("m3-i");
      const fb = document.getElementById("m3-fb");
      function update() {
        if (parseInt(inp.value) === 3) {
          fb.textContent = "✅ Chính xác! (Nhường 3e)";
          fb.className = "text-sm font-bold text-green-500 mt-2";
        } else {
          fb.textContent = "❌ Chưa đúng, Fe -> Fe3+ nhường mấy e?";
          fb.className = "text-sm font-bold text-red-500 mt-2";
        }
      }
      if (inp) {
        inp.addEventListener("input", update);
        update();
      }
    })();

    // --- Mod 4: Al + O2 Mini-game ---
    (function initMod4() {
      const cAl = document.getElementById("coef-al");
      const cO2 = document.getElementById("coef-o2");
      const cAl2O3 = document.getElementById("coef-al2o3");
      const fb = document.getElementById("balance-feedback");
      function update() {
        let al = parseInt(cAl.value) || 0;
        let o2 = parseInt(cO2.value) || 0;
        let al2o3 = parseInt(cAl2O3.value) || 0;
        let lAl = al,
          lO = o2 * 2,
          rAl = al2o3 * 2,
          rO = al2o3 * 3;

        document.getElementById("count-left-al").textContent = lAl;
        document.getElementById("count-left-o").textContent = lO;
        document.getElementById("count-right-al").textContent = rAl;
        document.getElementById("count-right-o").textContent = rO;

        let mAl = Math.max(lAl, rAl, 1),
          mO = Math.max(lO, rO, 1);
        document.getElementById("bar-left-al").style.width =
          (lAl / mAl) * 100 + "%";
        document.getElementById("bar-right-al").style.width =
          (rAl / mAl) * 100 + "%";
        document.getElementById("bar-left-o").style.width =
          (lO / mO) * 100 + "%";
        document.getElementById("bar-right-o").style.width =
          (rO / mO) * 100 + "%";

        if (lAl === rAl && lO === rO && lAl > 0 && lO > 0) {
          fb.textContent = "🎉 Tuyệt vời! Phương trình đã cân bằng! (4-3-2)";
          fb.className =
            "text-xl font-bold text-green-500 mt-4 text-center transition-all";
        } else {
          fb.textContent = "Chưa cân bằng...";
          fb.className =
            "text-xl font-bold text-gray-400 mt-4 text-center transition-all";
        }
      }
      if (cAl && cO2 && cAl2O3) {
        [cAl, cO2, cAl2O3].forEach((el) =>
          el.addEventListener("input", update),
        );
        update();
      }
    })();

    // --- Mod 5: Cu + HNO3 ---
    (function initMod5() {
      const ids = ["m5-c1", "m5-c2", "m5-c3", "m5-c4", "m5-c5"];
      const inputs = ids.map((id) => document.getElementById(id));
      const stat = document.getElementById("m5-stat");
      const fb = document.getElementById("m5-fb");
      function update() {
        if (!inputs[0]) return;
        const [c1, c2, c3, c4, c5] = inputs.map(
          (el) => parseInt(el.value) || 0,
        );
        const lCu = c1,
          lH = c2,
          lN = c2,
          lO = 3 * c2;
        const rCu = c3,
          rH = 2 * c5,
          rN = 2 * c3 + c4,
          rO = 6 * c3 + c4 + c5;
        const bal = (a, b) => a === b && a > 0;
        const ok = bal(lCu, rCu) && bal(lH, rH) && bal(lN, rN) && bal(lO, rO);
        stat.innerHTML = `
          <div class="${bal(lCu, rCu) ? "text-green-600" : "text-red-500"}">Cu:${lCu}|${rCu}</div>
          <div class="${bal(lH, rH) ? "text-green-600" : "text-red-500"}">H:${lH}|${rH}</div>
          <div class="${bal(lN, rN) ? "text-green-600" : "text-red-500"}">N:${lN}|${rN}</div>
          <div class="${bal(lO, rO) ? "text-green-600" : "text-red-500"}">O:${lO}|${rO}</div>
        `;
        fb.textContent = ok ? "✅ Đúng! (3-8-3-2-4)" : "❌ Cố lên...";
        fb.className =
          "font-bold text-center text-sm " +
          (ok ? "text-green-500" : "text-red-500");
      }
      inputs.forEach((el) => el && el.addEventListener("input", update));
      update();
    })();

    // --- Mod 6: Cl2 + KOH ---
    (function initMod6() {
      const ids = ["m6-c1", "m6-c2", "m6-c3", "m6-c4", "m6-c5"];
      const inputs = ids.map((id) => document.getElementById(id));
      const stat = document.getElementById("m6-stat");
      const fb = document.getElementById("m6-fb");
      function update() {
        if (!inputs[0]) return;
        const [c1, c2, c3, c4, c5] = inputs.map(
          (el) => parseInt(el.value) || 0,
        );
        const lCl = 2 * c1,
          lK = c2,
          lO = c2,
          lH = c2;
        const rCl = c3 + c4,
          rK = c3 + c4,
          rO = 3 * c4 + c5,
          rH = 2 * c5;
        const bal = (a, b) => a === b && a > 0;
        const ok = bal(lCl, rCl) && bal(lK, rK) && bal(lO, rO) && bal(lH, rH);
        stat.innerHTML = `
          <div class="${bal(lCl, rCl) ? "text-green-600" : "text-red-500"}">Cl:${lCl}|${rCl}</div>
          <div class="${bal(lK, rK) ? "text-green-600" : "text-red-500"}">K:${lK}|${rK}</div>
          <div class="${bal(lO, rO) ? "text-green-600" : "text-red-500"}">O:${lO}|${rO}</div>
          <div class="${bal(lH, rH) ? "text-green-600" : "text-red-500"}">H:${lH}|${rH}</div>
        `;
        fb.textContent = ok ? "✅ Chuẩn xác! (3-6-5-1-3)" : "❌ Tính lại xem";
        fb.className =
          "font-bold text-center text-sm " +
          (ok ? "text-green-500" : "text-red-500");
      }
      inputs.forEach((el) => el && el.addEventListener("input", update));
      update();
    })();

    // --- Mod 7: KMnO4 + HCl ---
    (function initMod7() {
      const ids = ["m7-c1", "m7-c2", "m7-c3", "m7-c4", "m7-c5", "m7-c6"];
      const inputs = ids.map((id) => document.getElementById(id));
      const stat = document.getElementById("m7-stat");
      const fb = document.getElementById("m7-fb");
      function update() {
        if (!inputs[0]) return;
        const [c1, c2, c3, c4, c5, c6] = inputs.map(
          (el) => parseInt(el.value) || 0,
        );
        const lK = c1,
          lMn = c1,
          lO = 4 * c1,
          lH = c2,
          lCl = c2;
        const rK = c3,
          rMn = c4,
          rO = c6,
          rH = 2 * c6,
          rCl = c3 + 2 * c4 + 2 * c5;
        const bal = (a, b) => a === b && a > 0;
        const ok =
          bal(lK, rK) &&
          bal(lMn, rMn) &&
          bal(lO, rO) &&
          bal(lH, rH) &&
          bal(lCl, rCl);
        stat.innerHTML = `
          <div class="${bal(lK, rK) ? "text-green-600" : "text-red-500"}">K:${lK}|${rK}</div>
          <div class="${bal(lMn, rMn) ? "text-green-600" : "text-red-500"}">Mn:${lMn}|${rMn}</div>
          <div class="${bal(lO, rO) ? "text-green-600" : "text-red-500"}">O:${lO}|${rO}</div>
          <div class="${bal(lH, rH) ? "text-green-600" : "text-red-500"}">H:${lH}|${rH}</div>
          <div class="${bal(lCl, rCl) ? "text-green-600" : "text-red-500"}">Cl:${lCl}|${rCl}</div>
        `;
        fb.textContent = ok
          ? "✅ Siêu đẳng! (2-16-2-2-5-8)"
          : "❌ Khó đấy, từ từ...";
        fb.className =
          "font-bold text-center text-sm " +
          (ok ? "text-green-500" : "text-red-500");
      }
      inputs.forEach((el) => el && el.addEventListener("input", update));
      update();
    })();

    // --- Mod 8: Ion-E Acid ---
    (function initMod8() {
      const h = document.getElementById("m8-h");
      const w = document.getElementById("m8-w");
      const fb = document.getElementById("m8-fb");
      function update() {
        let vH = parseInt(h.value),
          vW = parseInt(w.value);
        if (vH === 14 && vW === 7) {
          fb.textContent = "✅ Chính xác! Thêm 14H⁺ và 7H₂O";
          fb.className = "mt-3 text-center text-sm font-bold text-green-500";
        } else {
          fb.textContent = "❌ Kiểm tra lại số Oxi vế trái (7 O)";
          fb.className = "mt-3 text-center text-sm font-bold text-red-500";
        }
      }
      if (h && w) {
        h.addEventListener("input", update);
        w.addEventListener("input", update);
        update();
      }
    })();

    // --- Mod 9: Ion-E Base ---
    (function initMod9() {
      const oh = document.getElementById("m9-oh");
      const w = document.getElementById("m9-w");
      const fb = document.getElementById("m9-fb");
      function update() {
        let vOH = parseInt(oh.value),
          vW = parseInt(w.value);
        if (vOH === 4 && vW === 2) {
          fb.textContent = "✅ Giỏi lắm! Thêm 4OH⁻ và 2H₂O";
          fb.className = "mt-3 text-center text-sm font-bold text-green-500";
        } else {
          fb.textContent = "❌ Kiểm tra lại số điện tích và Oxi";
          fb.className = "mt-3 text-center text-sm font-bold text-red-500";
        }
      }
      if (oh && w) {
        oh.addEventListener("input", update);
        w.addEventListener("input", update);
        update();
      }
    })();

    // --- Mod 10: Charge Balance ---
    (function initMod10() {
      const iL = document.getElementById("m10-l");
      const iR = document.getElementById("m10-r");
      const fb = document.getElementById("m10-fb");
      function update() {
        let l = parseInt(iL.value),
          r = parseInt(iR.value);
        if (l === 6 && r === 6) {
          fb.textContent = "✅ Hai vế đều là +6. Phản ứng đúng!";
          fb.className = "text-center text-sm font-bold text-green-500";
        } else {
          fb.textContent = "Gợi ý: VT có 8(+) và 2(-). VP có 3*(+2).";
          fb.className = "text-center text-sm font-bold text-gray-500";
        }
      }
      if (iL && iR) {
        iL.addEventListener("input", update);
        iR.addEventListener("input", update);
      }
    })();
  }

  // Exec on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runModules);
  } else {
    runModules();
  }
})();
(function () {
  "use strict";

  // ==========================================
  // REDOX INTERACTIONS (Content specific)
  // ==========================================

  // 1. Galvanic Cell (Pin Điện Hóa)
  let batteryOn = false;
  let batteryInterval;

  window.toggleBattery = function () {
    batteryOn = !batteryOn;
    const btn = document.getElementById("btn-battery");
    const volt = document.getElementById("voltage-display");
    const path = document.getElementById("electron-path");
    const znRod = document.getElementById("zinc-rod");
    const cuRod = document.getElementById("copper-rod");

    if (batteryOn) {
      btn.innerHTML =
        '<i class="fas fa-stop-circle mr-2"></i> Ngắt Mạch (Tắt Pin)';
      btn.classList.replace("bg-orange-500", "bg-red-500");
      btn.classList.replace("hover:bg-orange-600", "hover:bg-red-600");
      btn.classList.replace("shadow-orange-500/30", "shadow-red-500/30");

      // Animate voltage
      let v = 0;
      let vInt = setInterval(() => {
        v += 0.05;
        if (v >= 1.1) {
          v = 1.1;
          clearInterval(vInt);
        }
        volt.innerText = v.toFixed(2) + "V";
        volt.classList.add("text-green-500");
      }, 50);

      // Rod animation (Zn shrinks, Cu grows slightly)
      znRod.style.width = "1.5rem";
      cuRod.style.width = "2.5rem";

      // Spawn electrons
      batteryInterval = setInterval(() => {
        const e = document.createElement("div");
        e.className =
          "absolute w-3 h-3 bg-yellow-300 rounded-full shadow-[0_0_8px_yellow] electron-anim z-30";
        path.appendChild(e);
        setTimeout(() => {
          if (e.parentNode) e.remove();
        }, 2000);
      }, 400);
    } else {
      btn.innerHTML = '<i class="fas fa-bolt mr-2"></i> Kết Nối Mạch (Bật Pin)';
      btn.classList.replace("bg-red-500", "bg-orange-500");
      btn.classList.replace("hover:bg-red-600", "hover:bg-orange-600");
      btn.classList.replace("shadow-red-500/30", "shadow-orange-500/30");

      volt.innerText = "0.00V";
      volt.classList.remove("text-green-500");

      znRod.style.width = "2rem";
      cuRod.style.width = "2rem";

      clearInterval(batteryInterval);
      path.innerHTML = "";
    }
  };

  // 2. Breathalyzer
  const alcSlider = document.getElementById("alcohol-slider");
  if (alcSlider) {
    alcSlider.addEventListener("input", (e) => {
      let val = parseFloat(e.target.value);
      document.getElementById("breath-val").innerText =
        val.toFixed(2) + " mg/L";

      // Color interp: Orange(249,115,22) to Green(34,197,94)
      let r = val / 100;
      let cr = Math.round(249 - r * (249 - 34));
      let cg = Math.round(115 + r * (197 - 115));
      let cb = Math.round(22 + r * (94 - 22));

      document.getElementById("breath-color").style.backgroundColor =
        `rgb(${cr},${cg},${cb})`;

      let st = document.getElementById("breath-status");
      if (val === 0) {
        st.innerText = "Tuyệt đối An toàn";
        st.className = "text-green-600 font-bold text-lg mt-1";
      } else if (val <= 25) {
        st.innerText = "Có cồn (Nhẹ)";
        st.className = "text-yellow-600 font-bold text-lg mt-1";
      } else {
        st.innerText = "Vi phạm (Phạt nặng)";
        st.className = "text-red-600 font-bold text-lg mt-1";
      }
    });
  }

  // 3. Chlorine Calc
  const calcBtn = document.getElementById("calc-chlorine");
  if (calcBtn) {
    calcBtn.addEventListener("click", () => {
      let vol = parseFloat(document.getElementById("water-vol").value);
      if (isNaN(vol) || vol <= 0) vol = 0;
      let kg = vol * 0.005; // 5mg/L = 0.005 kg/m3
      document.getElementById("chlorine-res").innerHTML =
        `Cần dùng: <span class="text-2xl font-bold mx-2">${kg.toFixed(1)}</span> kg Chlorine`;
    });
  }

  // ==========================================
  // 11 REQUIRED MODULES (Atomic Structure)
  // ==========================================

  const pTableLayout = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
    [19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const elementsData = {
    1: { sy: "H", n: "Hydrogen", m: 1.01, en: 2.2, r: 53 },
    2: { sy: "He", n: "Helium", m: 4.0, en: 0, r: 31 },
    3: { sy: "Li", n: "Lithium", m: 6.94, en: 0.98, r: 167 },
    4: { sy: "Be", n: "Beryllium", m: 9.01, en: 1.57, r: 112 },
    5: { sy: "B", n: "Boron", m: 10.81, en: 2.04, r: 87 },
    6: { sy: "C", n: "Carbon", m: 12.01, en: 2.55, r: 67 },
    7: { sy: "N", n: "Nitrogen", m: 14.01, en: 3.04, r: 56 },
    8: { sy: "O", n: "Oxygen", m: 16.0, en: 3.44, r: 48 },
    9: { sy: "F", n: "Fluorine", m: 19.0, en: 3.98, r: 42 },
    10: { sy: "Ne", n: "Neon", m: 20.18, en: 0, r: 38 },
    11: { sy: "Na", n: "Sodium", m: 22.99, en: 0.93, r: 190 },
    12: { sy: "Mg", n: "Magnesium", m: 24.31, en: 1.31, r: 145 },
    13: { sy: "Al", n: "Aluminum", m: 26.98, en: 1.61, r: 118 },
    14: { sy: "Si", n: "Silicon", m: 28.09, en: 1.9, r: 111 },
    15: { sy: "P", n: "Phosphorus", m: 30.97, en: 2.19, r: 98 },
    16: { sy: "S", n: "Sulfur", m: 32.06, en: 2.58, r: 88 },
    17: { sy: "Cl", n: "Chlorine", m: 35.45, en: 3.16, r: 79 },
    18: { sy: "Ar", n: "Argon", m: 39.95, en: 0, r: 71 },
    19: { sy: "K", n: "Potassium", m: 39.1, en: 0.82, r: 243 },
    20: { sy: "Ca", n: "Calcium", m: 40.08, en: 1.0, r: 194 },
  };

  // Logic Gen
  function getShells(z) {
    let s = [0, 0, 0, 0],
      r = z;
    if (r > 0) {
      let f = Math.min(2, r);
      s[0] += f;
      r -= f;
    }
    if (r > 0) {
      let f = Math.min(8, r);
      s[1] += f;
      r -= f;
    }
    if (r > 0) {
      let f = Math.min(8, r);
      s[2] += f;
      r -= f;
    }
    if (r > 0) {
      let f = Math.min(18, r);
      s[3] += f;
      r -= f;
    }
    return s.filter((x) => x > 0);
  }

  function getConfig(z) {
    const o = [
      { n: 1, l: "s", c: 2 },
      { n: 2, l: "s", c: 2 },
      { n: 2, l: "p", c: 6 },
      { n: 3, l: "s", c: 2 },
      { n: 3, l: "p", c: 6 },
      { n: 4, l: "s", c: 2 },
    ];
    let res = [],
      r = z;
    for (let x of o) {
      if (r <= 0) break;
      let f = Math.min(x.c, r);
      res.push(`${x.n}${x.l}<sup>${f}</sup>`);
      r -= f;
    }
    return res.join(" ");
  }

  function getOrbitals(z) {
    const order = [
      { n: "1s", c: 2 },
      { n: "2s", c: 2 },
      { n: "2p", c: 6 },
      { n: "3s", c: 2 },
      { n: "3p", c: 6 },
      { n: "4s", c: 2 },
    ];
    let rem = parseInt(z);
    let html = '<div class="flex flex-wrap gap-2">';
    for (let o of order) {
      if (rem <= 0) break;
      let fill = Math.min(o.c, rem);
      rem -= fill;
      let boxes = o.c / 2;
      html += `<div class="flex flex-col items-center"><span class="text-[10px] text-gray-500 font-bold mb-1">${o.n}</span><div class="flex gap-1">`;
      for (let i = 0; i < boxes; i++) {
        let arr = "";
        if (fill > i) arr += "↑";
        if (fill > i + boxes) arr += "↓";
        if (!arr) arr = "&nbsp;";
        html += `<div class="border border-gray-400 w-6 h-6 flex items-center justify-center bg-white text-black font-mono leading-none shadow-inner text-xs">${arr}</div>`;
      }
      html += `</div></div>`;
    }
    html += "</div>";
    return html;
  }

  function drawAtom(z) {
    const shells = getShells(z);
    let html = `<div class="relative w-48 h-48 mx-auto flex items-center justify-center my-4">`;
    html += `<div class="w-8 h-8 bg-red-500 rounded-full z-10 flex items-center justify-center text-white text-xs font-bold shadow-md">+${z}</div>`;
    shells.forEach((count, sIdx) => {
      const isVal = sIdx === shells.length - 1; // Valence layer
      const size = 60 + sIdx * 40;
      const bColor = isVal
        ? "border-orange-400 border-[3px]"
        : "border-blue-300 border-2";
      html += `<div class="absolute rounded-full ${bColor} shell-anim" style="width:${size}px; height:${size}px;">`;
      for (let e = 0; e < count; e++) {
        const angle = (e / count) * 2 * Math.PI;
        const r = size / 2;
        const x = r * Math.cos(angle) + r - 4;
        const y = r * Math.sin(angle) + r - 4;
        const eColor = isVal
          ? "bg-orange-500 shadow-[0_0_5px_orange]"
          : "bg-blue-600";
        html += `<div class="absolute w-2 h-2 rounded-full ${eColor}" style="left:${x}px; top:${y}px;"></div>`;
      }
      html += `</div>`;
    });
    html += `</div>`;
    return html;
  }

  function renderPTableDOM() {
    let html =
      '<div class="grid gap-1" style="grid-template-columns: repeat(18, minmax(1.5rem, 1fr));">';
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 18; c++) {
        let z = pTableLayout[r][c];
        if (z !== 0) {
          let sy = elementsData[z].sy;
          html += `<div class="ptable-cell cursor-pointer border border-gray-300 dark:border-gray-600 rounded text-center p-1 bg-white dark:bg-slate-700 hover:bg-blue-500 hover:text-white transition-colors" data-z="${z}" data-period="${r + 1}" data-group="${c + 1}">
            <div class="text-[8px] text-left text-gray-400 dark:text-gray-300 leading-none w-full">${z}</div>
            <div class="font-bold text-sm leading-none mt-1">${sy}</div>
          </div>`;
        } else {
          html += `<div></div>`;
        }
      }
    }
    html += "</div>";
    document.getElementById("mini-ptable").innerHTML = html;

    document.querySelectorAll("#section-4 .ptable-cell").forEach((el) => {
      el.addEventListener("click", (e) => {
        document.getElementById("z1-slider").value =
          e.currentTarget.getAttribute("data-z");
        updateAllModules();
      });
    });
  }

  function renderAtomInfo(z, containerId) {
    let d = elementsData[z];
    let shells = getShells(z);
    let atomDraw = drawAtom(z);
    let cfg = getConfig(z);
    let orbs = getOrbitals(z);

    let html = `
      <div class="flex items-center gap-4 mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
        <div class="w-16 h-16 border-2 border-gray-800 dark:border-gray-300 flex flex-col items-center justify-center font-bold relative bg-gray-50 dark:bg-slate-800 text-black dark:text-white">
          <span class="absolute top-0 left-1 text-[10px]">${z}</span>
          <span class="text-2xl">${d.sy}</span>
          <span class="absolute bottom-0 text-[10px]">${d.m}</span>
        </div>
        <div>
          <div class="font-bold text-lg">${d.n}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-900 px-2 py-1 rounded mt-1 font-mono">${cfg}</div>
        </div>
      </div>
      
      <div class="text-center font-bold text-sm text-gray-600 dark:text-gray-400 mb-1">Mô Hình & Lớp Electron</div>
      ${atomDraw}
      
      <div class="mb-4 text-xs flex justify-center gap-2">
        <span class="px-2 py-1 bg-blue-100 text-blue-800 font-bold rounded shadow-sm border border-blue-200">K: ${shells[0] || 0}</span>
        <span class="px-2 py-1 bg-blue-100 text-blue-800 font-bold rounded shadow-sm border border-blue-200">L: ${shells[1] || 0}</span>
        <span class="px-2 py-1 bg-blue-100 text-blue-800 font-bold rounded shadow-sm border border-blue-200">M: ${shells[2] || 0}</span>
        <span class="px-2 py-1 bg-blue-100 text-blue-800 font-bold rounded shadow-sm border border-blue-200">N: ${shells[3] || 0}</span>
      </div>
      
      <div class="pt-3 border-t border-gray-200 dark:border-gray-700">
        <div class="text-xs font-bold mb-2 text-gray-600 dark:text-gray-400">Phân bố Orbital:</div>
        ${orbs}
      </div>
    `;
    document.getElementById(containerId).innerHTML = html;
  }

  function renderTrendGraph(z1, z2) {
    let e1 = elementsData[z1];
    let e2 = z2 ? elementsData[z2] : null;
    let maxR = 250;
    let maxEN = 4.0;

    let html = `<div class="flex flex-col gap-4">`;
    // Radius Bar
    html += `<div>
      <div class="text-sm font-bold mb-1 text-gray-700 dark:text-gray-300">Bán kính nguyên tử (pm)</div>
      <div class="flex items-center gap-3 mb-1">
        <div class="w-8 font-bold text-right text-blue-600">${e1.sy}</div>
        <div class="flex-1 bg-gray-200 dark:bg-gray-700 rounded h-4 overflow-hidden relative">
          <div class="bg-blue-500 h-full transition-all duration-500" style="width: ${(e1.r / maxR) * 100}%"></div>
        </div>
        <div class="w-8 text-xs font-mono">${e1.r}</div>
      </div>`;
    if (e2) {
      html += `
      <div class="flex items-center gap-3">
        <div class="w-8 font-bold text-right text-red-600">${e2.sy}</div>
        <div class="flex-1 bg-gray-200 dark:bg-gray-700 rounded h-4 overflow-hidden relative">
          <div class="bg-red-500 h-full transition-all duration-500" style="width: ${(e2.r / maxR) * 100}%"></div>
        </div>
        <div class="w-8 text-xs font-mono">${e2.r}</div>
      </div>`;
    }
    html += `</div>`;

    // EN Bar
    html += `<div>
      <div class="text-sm font-bold mb-1 text-gray-700 dark:text-gray-300">Độ âm điện (Electronegativity)</div>
      <div class="flex items-center gap-3 mb-1">
        <div class="w-8 font-bold text-right text-blue-600">${e1.sy}</div>
        <div class="flex-1 bg-gray-200 dark:bg-gray-700 rounded h-4 overflow-hidden relative">
          <div class="bg-green-500 h-full transition-all duration-500" style="width: ${(e1.en / maxEN) * 100}%"></div>
        </div>
        <div class="w-8 text-xs font-mono">${e1.en.toFixed(2)}</div>
      </div>`;
    if (e2) {
      html += `
      <div class="flex items-center gap-3">
        <div class="w-8 font-bold text-right text-red-600">${e2.sy}</div>
        <div class="flex-1 bg-gray-200 dark:bg-gray-700 rounded h-4 overflow-hidden relative">
          <div class="bg-orange-500 h-full transition-all duration-500" style="width: ${(e2.en / maxEN) * 100}%"></div>
        </div>
        <div class="w-8 text-xs font-mono">${e2.en.toFixed(2)}</div>
      </div>`;
    }
    html += `</div></div>`;

    document.getElementById("trend-graph-container").innerHTML = html;
  }

  function updateAllModules() {
    let z1 = document.getElementById("z1-slider").value;
    document.getElementById("z1-val").innerText = z1;
    renderAtomInfo(z1, "atom1-display");

    let compareOn = document.getElementById("compare-mode").checked;
    let disp2 = document.getElementById("atom2-display");
    let cont2 = document.getElementById("z2-container");

    if (compareOn) {
      disp2.classList.remove("hidden");
      cont2.classList.remove("hidden");
      let z2 = document.getElementById("z2-slider").value;
      document.getElementById("z2-val").innerText = z2;
      renderAtomInfo(z2, "atom2-display");
      renderTrendGraph(z1, z2);
    } else {
      disp2.classList.add("hidden");
      cont2.classList.add("hidden");
      renderTrendGraph(z1, null);
    }
  }

  // Setup Listeners
  document
    .getElementById("z1-slider")
    .addEventListener("input", updateAllModules);
  document
    .getElementById("z2-slider")
    .addEventListener("input", updateAllModules);
  document
    .getElementById("compare-mode")
    .addEventListener("change", updateAllModules);

  document.getElementById("hl-period").addEventListener("change", (e) => {
    let val = e.target.value;
    document.querySelectorAll("#section-4 .ptable-cell").forEach((el) => {
      el.classList.remove("hl-period");
      if (val && el.getAttribute("data-period") === val)
        el.classList.add("hl-period");
    });
  });

  document.getElementById("hl-group").addEventListener("change", (e) => {
    let val = e.target.value;
    document.querySelectorAll("#section-4 .ptable-cell").forEach((el) => {
      el.classList.remove("hl-group");
      if (val && el.getAttribute("data-group") === val)
        el.classList.add("hl-group");
    });
  });

  // Init
  renderPTableDOM();
  updateAllModules();
})();
