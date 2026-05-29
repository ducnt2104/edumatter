const elements = [
  {
    z: 1,
    s: "H",
    n: "Hydrogen",
    m: 1.008,
    type: "Phi kim",
    bg: "from-blue-500 to-indigo-600",
    cfg: "1s¹",
  },
  {
    z: 2,
    s: "He",
    n: "Helium",
    m: 4.002,
    type: "Khí hiếm",
    bg: "from-purple-500 to-purple-700",
    cfg: "1s²",
  },
  {
    z: 3,
    s: "Li",
    n: "Lithium",
    m: 6.941,
    type: "Kim loại kiềm",
    bg: "from-red-500 to-red-700",
    cfg: "[He] 2s¹",
  },
  {
    z: 4,
    s: "Be",
    n: "Beryllium",
    m: 9.012,
    type: "Kiềm thổ",
    bg: "from-orange-500 to-orange-700",
    cfg: "[He] 2s²",
  },
  {
    z: 5,
    s: "B",
    n: "Boron",
    m: 10.81,
    type: "Á kim",
    bg: "from-emerald-500 to-emerald-700",
    cfg: "[He] 2s² 2p¹",
  },
  {
    z: 6,
    s: "C",
    n: "Carbon",
    m: 12.011,
    type: "Phi kim",
    bg: "from-zinc-700 to-black",
    cfg: "[He] 2s² 2p²",
  },
  {
    z: 7,
    s: "N",
    n: "Nitrogen",
    m: 14.007,
    type: "Phi kim",
    bg: "from-blue-400 to-indigo-600",
    cfg: "[He] 2s² 2p³",
  },
  {
    z: 8,
    s: "O",
    n: "Oxygen",
    m: 15.999,
    type: "Phi kim",
    bg: "from-sky-400 to-blue-600",
    cfg: "[He] 2s² 2p⁴",
  },
  {
    z: 9,
    s: "F",
    n: "Fluorine",
    m: 18.998,
    type: "Halogen",
    bg: "from-teal-400 to-green-600",
    cfg: "[He] 2s² 2p⁵",
  },
  {
    z: 10,
    s: "Ne",
    n: "Neon",
    m: 20.18,
    type: "Khí hiếm",
    bg: "from-purple-600 to-fuchsia-800",
    cfg: "[He] 2s² 2p⁶",
  },
  {
    z: 11,
    s: "Na",
    n: "Sodium",
    m: 22.99,
    type: "Kim loại kiềm",
    bg: "from-red-600 to-red-800",
    cfg: "[Ne] 3s¹",
  },
  {
    z: 12,
    s: "Mg",
    n: "Magnesium",
    m: 24.305,
    type: "Kiềm thổ",
    bg: "from-orange-600 to-orange-800",
    cfg: "[Ne] 3s²",
  },
  {
    z: 13,
    s: "Al",
    n: "Aluminum",
    m: 26.982,
    type: "Kim loại",
    bg: "from-slate-400 to-slate-600",
    cfg: "[Ne] 3s² 3p¹",
  },
  {
    z: 14,
    s: "Si",
    n: "Silicon",
    m: 28.085,
    type: "Á kim",
    bg: "from-emerald-600 to-emerald-800",
    cfg: "[Ne] 3s² 3p²",
  },
  {
    z: 15,
    s: "P",
    n: "Phosphorus",
    m: 30.974,
    type: "Phi kim",
    bg: "from-amber-600 to-orange-700",
    cfg: "[Ne] 3s² 3p³",
  },
  {
    z: 16,
    s: "S",
    n: "Sulfur",
    m: 32.06,
    type: "Phi kim",
    bg: "from-yellow-500 to-yellow-700",
    cfg: "[Ne] 3s² 3p⁴",
  },
  {
    z: 17,
    s: "Cl",
    n: "Chlorine",
    m: 35.45,
    type: "Halogen",
    bg: "from-green-500 to-green-700",
    cfg: "[Ne] 3s² 3p⁵",
  },
  {
    z: 18,
    s: "Ar",
    n: "Argon",
    m: 39.948,
    type: "Khí hiếm",
    bg: "from-purple-700 to-indigo-900",
    cfg: "[Ne] 3s² 3p⁶",
  },
  {
    z: 19,
    s: "K",
    n: "Potassium",
    m: 39.098,
    type: "Kim loại kiềm",
    bg: "from-red-700 to-pink-900",
    cfg: "[Ar] 4s¹",
  },
  {
    z: 20,
    s: "Ca",
    n: "Calcium",
    m: 40.078,
    type: "Kiềm thổ",
    bg: "from-orange-700 to-yellow-900",
    cfg: "[Ar] 4s²",
  },
];

const grid = document.getElementById("periodic-grid");

elements.forEach((el) => {
  const card = document.createElement("div");
  card.className = "perspective-1000 h-56 cursor-pointer";

  // Hàm xử lý click trực tiếp
  card.onclick = function () {
    this.classList.toggle("is-flipped");
  };

  card.innerHTML = `
                <div class="card-inner shadow-2xl">
                    <div class="card-front bg-gradient-to-br ${el.bg} flex flex-col items-center justify-center text-white border border-white/20">
                        <span class="absolute top-3 left-4 font-mono text-xl opacity-40">${el.z}</span>
                        <h2 class="text-6xl font-black mb-1">${el.s}</h2>
                        <p class="text-lg font-medium opacity-90">${el.n}</p>
                        <div class="absolute bottom-4 px-3 py-1 bg-black/20 rounded-full text-[10px] uppercase tracking-widest">
                            ${el.type}
                        </div>
                    </div>

                    <div class="card-back bg-white p-5 flex flex-col justify-between border-2 border-slate-200">
                        <div class="flex justify-between items-start">
                            <div>
                                <p class="text-[10px] text-slate-400 uppercase font-bold">Số hiệu</p>
                                <p class="text-2xl font-black text-slate-800">Z = ${el.z}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-[10px] text-slate-400 uppercase font-bold">Khối lượng</p>
                                <p class="text-sm font-bold text-slate-600">${el.m}</p>
                            </div>
                        </div>
                        
                        <div class="bg-slate-100 p-3 rounded-lg">
                            <p class="text-[10px] text-slate-500 uppercase font-bold mb-1">Cấu hình Electron</p>
                            <p class="text-sm font-mono font-bold text-indigo-700">${el.cfg}</p>
                        </div>

                        <div class="text-[9px] text-center text-slate-400 italic">
                            Chạm lần nữa để quay lại
                        </div>
                    </div>
                </div>
            `;
  grid.appendChild(card);
});
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

// --- 2. ATOM SIMULATION (CANVAS) NÂNG CẤP ---
const canvas = document.getElementById("atomCanvas");
const ctx = canvas.getContext("2d");

// Khởi tạo thông số (Tối đa 118)
let protons = 1,
  neutrons = 0,
  electrons = 1;

// Cấu hình các lớp electron (Số e tối đa mỗi lớp từ 1-7)
const shellLimits = [2, 8, 18, 32, 32, 18, 8];

function getShellData(totalElectrons) {
  let distribution = [];
  let remaining = totalElectrons;
  for (let limit of shellLimits) {
    if (remaining > limit) {
      distribution.push(limit);
      remaining -= limit;
    } else {
      distribution.push(remaining);
      remaining = 0;
      break;
    }
  }
  return distribution;
}

function drawAtom() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const isDark = document.documentElement.classList.contains("dark");

  // 1. VẼ CÁC QUỸ ĐẠO (7 VÒNG)
  const shellData = getShellData(electrons);
  const baseRadius = 40;
  const stepRadius = 25; // Khoảng cách giữa các vòng

  shellData.forEach((_, index) => {
    const r = baseRadius + index * stepRadius;
    ctx.strokeStyle = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
    ctx.stroke();
  });

  // 2. VẼ NHÂN (NUCLEUS)
  // Tỉ lệ hạt trong nhân thu nhỏ lại để không chiếm quá nhiều diện tích khi lên 118 hạt
  const nucleusRadius = 15 + (protons + neutrons) * 0.15;
  ctx.fillStyle = isDark
    ? "rgba(239, 68, 68, 0.2)"
    : "rgba(252, 165, 165, 0.4)";
  ctx.beginPath();
  ctx.arc(centerX, centerY, nucleusRadius, 0, Math.PI * 2);
  ctx.fill();

  // Vẽ Protons & Neutrons (Dạng đám mây hạt để tránh lag)
  const drawParticles = (count, color, offset) => {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + offset;
      const dist = (i % 5) * (nucleusRadius / 6);
      const px = centerX + Math.cos(angle) * dist;
      const py = centerY + Math.sin(angle) * dist;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  drawParticles(protons, "#ef4444", 0); // Proton đỏ
  drawParticles(neutrons, "#9ca3af", Math.PI); // Neutron xám

  // 3. VẼ ELECTRONS CHUYỂN ĐỘNG
  const time = Date.now() / 1000;

  shellData.forEach((count, shellIndex) => {
    const r = baseRadius + shellIndex * stepRadius;
    const speed = 1.5 - shellIndex * 0.15; // Vòng ngoài quay chậm hơn

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + time * speed;
      const ex = centerX + Math.cos(angle) * r;
      const ey = centerY + Math.sin(angle) * r;

      // Electron
      ctx.fillStyle = "#3b82f6";
      ctx.shadowBlur = 5;
      ctx.shadowColor = "#3b82f6";
      ctx.beginPath();
      ctx.arc(ex, ey, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0; // Reset shadow
    }
  });

  requestAnimationFrame(drawAtom);
}

// Cập nhật Slider (Đảm bảo HTML của bạn có max="118")
["p", "n", "e"].forEach((id) => {
  document.getElementById(`${id}-slider`).addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    if (id === "p") protons = val;
    if (id === "n") neutrons = val;
    if (id === "e") electrons = val;
    document.getElementById(`${id}-val`).innerText = val;
    updateAtomLogic();
  });
});

function updateAtomLogic() {
  // Giữ nguyên logic tính điện tích và khối lượng của bạn
  const charge = protons - electrons;
  const chargeEl = document.getElementById("charge-display");
  // ... code update UI của bạn ...
}

drawAtom();

// --- 4. QUIZ LOGIC ---
const quizData = [
  {
    q: "Hạt nhân nguyên tử được cấu tạo bởi loại hạt nào?",
    a: [
      { text: "Proton và Electron", correct: false },
      { text: "Proton và Neutron", correct: true },
      { text: "Chỉ Proton", correct: false },
      { text: "Neutron và Electron", correct: false },
    ],
    explain: "Hạt nhân nằm ở tâm, gồm Proton (+) và Neutron (không mang điện).",
  },
  {
    q: "Nguyên tử trung hòa về điện vì:",
    a: [
      { text: "Số Proton = Số Neutron", correct: false },
      { text: "Số Proton = Số Electron", correct: true },
      { text: "Số Neutron = Số Electron", correct: false },
      { text: "Khối lượng Proton rất lớn", correct: false },
    ],
    explain: "Điện tích dương của P cân bằng với điện tích âm của E.",
  },
  {
    q: "Nguyên tố hóa học là tập hợp các nguyên tử có cùng:",
    a: [
      { text: "Số Neutron", correct: false },
      { text: "Số khối", correct: false },
      { text: "Số Proton", correct: true },
      { text: "Số lớp Electron", correct: false },
    ],
    explain: "Số Proton là đặc trưng duy nhất của một nguyên tố.",
  },
  {
    q: "Trong bảng tuần hoàn, các nguyên tố cùng Nhóm có đặc điểm gì?",
    a: [
      { text: "Cùng số lớp electron", correct: false },
      { text: "Cùng tính chất hóa học", correct: true },
      { text: "Cùng khối lượng", correct: false },
      { text: "Cùng trạng thái vật lý", correct: false },
    ],
    explain:
      "Các nguyên tố cùng nhóm có số e lớp ngoài cùng giống nhau nên tính chất hóa học tương tự.",
  },
];

let currentQIndex = 0;
let score = 0;

function loadQuiz() {
  const q = quizData[currentQIndex];
  document.getElementById("question-text").innerText =
    `Câu ${currentQIndex + 1}: ${q.q}`;
  const container = document.getElementById("answers-container");
  container.innerHTML = "";

  q.a.forEach((ans) => {
    const btn = document.createElement("button");
    btn.className =
      "w-full p-4 text-left rounded-xl border-2 border-slate-200 dark:border-slate-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition font-medium";
    btn.innerText = ans.text;
    btn.onclick = () => checkAnswer(ans.correct, btn, q.explain);
    container.appendChild(btn);
  });

  // Update Progress
  const pct = (currentQIndex / quizData.length) * 100;
  document.getElementById("quiz-progress").style.width = `${pct}%`;
}

function checkAnswer(isCorrect, btn, explain) {
  // Disable all buttons
  const buttons = document.getElementById("answers-container").children;
  for (let b of buttons) b.disabled = true;

  const feedback = document.getElementById("feedback");
  feedback.classList.remove(
    "hidden",
    "bg-green-100",
    "text-green-800",
    "bg-red-100",
    "text-red-800",
  );

  if (isCorrect) {
    score++;
    btn.classList.add("bg-green-500", "text-white", "border-green-500");
    feedback.classList.add("bg-green-100", "text-green-800");
    feedback.innerHTML = `<i class="fas fa-check-circle"></i> Chính xác! ${explain}`;
  } else {
    btn.classList.add("bg-red-500", "text-white", "border-red-500");
    feedback.classList.add("bg-red-100", "text-red-800");
    feedback.innerHTML = `<i class="fas fa-times-circle"></i> Sai rồi. ${explain}`;
  }

  document.getElementById("next-btn").classList.remove("hidden");
  document.getElementById("next-btn").onclick = nextQuestion;
}

function nextQuestion() {
  currentQIndex++;
  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");

  if (currentQIndex < quizData.length) {
    loadQuiz();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-content").classList.add("hidden");
  document.getElementById("quiz-result").classList.remove("hidden");
  document.getElementById("score").innerText = score;
  document.getElementById("total-q").innerText = quizData.length;
  document.getElementById("quiz-progress").style.width = `100%`;
}

function resetQuiz() {
  currentQIndex = 0;
  score = 0;
  document.getElementById("quiz-content").classList.remove("hidden");
  document.getElementById("quiz-result").classList.add("hidden");
  loadQuiz();
}

// Init Quiz
loadQuiz();
document.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const waves = document.querySelector(".footer-waves");
  if (waves) {
    waves.style.transform = `translateY(${scrolled * 0.05}px)`;
  }
});
