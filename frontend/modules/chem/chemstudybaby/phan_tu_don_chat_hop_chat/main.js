// --- GLOBAL SETTINGS ---
document.documentElement.classList.add("dark");
const html = document.documentElement;
document.getElementById("theme-toggle").addEventListener("click", () => {
  html.classList.toggle("dark");
});

// --- PART 1: CLASSIFICATION GAME ---
const game1Data = [
  { formula: "H₂", name: "Khí Hydrogen", type: "donchat" },
  { formula: "NH₃", name: "Ammonia", type: "hopchat" },
  { formula: "Al", name: "Nhôm (Aluminium)", type: "donchat" },
  { formula: "CaCO₃", name: "Calcium Carbonate", type: "hopchat" },
  { formula: "O₂", name: "Oxygen", type: "donchat" },
];
let g1Index = 0;
let g1Score = 0;

function loadGame1() {
  if (g1Index >= game1Data.length) {
    document.getElementById("game1-display").innerHTML =
      `<span class="text-green-500 font-bold text-lg">Hoàn thành! ${g1Score}/${game1Data.length}</span>`;
    return;
  }
  const item = game1Data[g1Index];
  document.getElementById("game1-formula").innerText = item.formula;
  document.getElementById("game1-name").innerText = item.name;
  document.getElementById("game1-feedback").innerText = "";
}

function checkClassify(type) {
  if (g1Index >= game1Data.length) return;
  const item = game1Data[g1Index];
  const feedback = document.getElementById("game1-feedback");

  if (type === item.type) {
    feedback.innerText = "Chính xác!";
    feedback.className = "h-6 mt-2 text-sm font-bold text-green-500";
    g1Score++;
  } else {
    feedback.innerText = "Sai rồi!";
    feedback.className = "h-6 mt-2 text-sm font-bold text-red-500";
  }

  document.getElementById("game1-score").innerText =
    `${g1Score}/${game1Data.length}`;
  g1Index++;
  setTimeout(loadGame1, 800);
}
loadGame1();

// --- PART 1: MOLECULE VIEWER ---
function renderMol(type) {
  const container = document.getElementById("mol-render");
  const label = document.getElementById("mol-label");
  container.innerHTML = "";

  let html = "";
  if (type === "H2O") {
    html = `<div class="relative w-32 h-32 animate-float">
                        <div class="w-14 h-14 rounded-full bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg flex items-center justify-center text-white font-bold border-2 border-white/30 text-xl">O</div>
                        <div class="w-8 h-8 rounded-full bg-slate-300 absolute top-0 right-0 shadow-lg text-xs flex items-center justify-center font-bold border border-slate-400">H</div>
                        <div class="w-8 h-8 rounded-full bg-slate-300 absolute top-0 left-0 shadow-lg text-xs flex items-center justify-center font-bold border border-slate-400">H</div>
                        <div class="w-8 h-2 bg-slate-400 absolute top-8 right-8 rotate-45 -z-10 rounded-full"></div>
                        <div class="w-8 h-2 bg-slate-400 absolute top-8 left-8 -rotate-45 -z-10 rounded-full"></div>
                     </div>`;
    label.innerText = "Nước (H₂O) - 18 amu";
  } else if (type === "CH4") {
    html = `<div class="relative w-32 h-32 animate-float">
                        <div class="w-14 h-14 rounded-full bg-gray-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg flex items-center justify-center text-white font-bold border-2 border-white/30 text-xl">C</div>
                        <div class="w-7 h-7 rounded-full bg-white absolute top-0 left-1/2 -translate-x-1/2 text-xs flex items-center justify-center border font-bold shadow-md">H</div>
                        <div class="w-7 h-7 rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 text-xs flex items-center justify-center border font-bold shadow-md">H</div>
                        <div class="w-7 h-7 rounded-full bg-white absolute top-1/2 left-0 -translate-y-1/2 text-xs flex items-center justify-center border font-bold shadow-md">H</div>
                        <div class="w-7 h-7 rounded-full bg-white absolute top-1/2 right-0 -translate-y-1/2 text-xs flex items-center justify-center border font-bold shadow-md">H</div>
                     </div>`;
    label.innerText = "Methane (CH₄) - 16 amu";
  } else if (type === "Ne") {
    html = `<div class="w-20 h-20 rounded-full bg-orange-500 shadow-[0_0_30px_orange] flex items-center justify-center text-white font-bold animate-pulse text-2xl border-4 border-orange-300">Ne</div>`;
    label.innerText = "Neon (Ne) - Đơn chất khí hiếm";
  } else if (type === "NH3") {
    html = `<div class="relative w-32 h-32 animate-float">
                <div class="w-14 h-14 rounded-full bg-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg flex items-center justify-center text-white font-bold border-2 border-white/30 text-xl">N</div>
                <div class="w-7 h-7 rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 text-xs flex items-center justify-center border font-bold shadow-md">H</div>
                <div class="w-7 h-7 rounded-full bg-white absolute bottom-2 left-0 text-xs flex items-center justify-center border font-bold shadow-md">H</div>
                <div class="w-7 h-7 rounded-full bg-white absolute bottom-2 right-0 text-xs flex items-center justify-center border font-bold shadow-md">H</div>
             </div>`;
    label.innerText = "Ammonia (NH₃) - 17 amu";
  }
  container.innerHTML = html;
}
renderMol("H2O");

// --- PART 2: BOND SIMULATION ---
function switchBond(type) {
  const ionic = document.getElementById("scene-ionic");
  const covalent = document.getElementById("scene-covalent");
  const btnI = document.getElementById("tab-ionic");
  const btnC = document.getElementById("tab-covalent");

  if (type === "ionic") {
    ionic.classList.remove("hidden");
    covalent.classList.add("hidden");
    btnI.classList.add("active", "text-white", "bg-blue-600");
    btnI.classList.remove("text-slate-500");
    btnC.classList.remove("active", "text-white", "bg-blue-600");
    btnC.classList.add("text-slate-500");
  } else {
    ionic.classList.add("hidden");
    covalent.classList.remove("hidden");
    btnC.classList.add("active", "text-white", "bg-blue-600");
    btnC.classList.remove("text-slate-500");
    btnI.classList.remove("active", "text-white", "bg-blue-600");
    btnI.classList.add("text-slate-500");
  }
}

function animateIonic() {
  const e1 = document.getElementById("e1");
  const e2 = document.getElementById("e2");

  // Move electrons to Oxygen
  e1.style.transform = "translate(100px, 0)";
  e2.style.transform = "translate(100px, 0)";
  e1.style.opacity = "0";
  e2.style.opacity = "0";

  setTimeout(() => {
    document.getElementById("mg-symbol").innerHTML = "Mg²⁺";
    document.getElementById("o-symbol").innerHTML = "O²⁻";
    document.getElementById("mg-symbol").className =
      "font-bold text-xl text-blue-600";
    document.getElementById("o-symbol").className =
      "font-bold text-xl text-red-600";
    document.querySelector(".gap-16").classList.replace("gap-16", "gap-2"); // Snap together
  }, 800);
}
function resetIonic() {
  const e1 = document.getElementById("e1");
  const e2 = document.getElementById("e2");
  e1.style.transform = "none";
  e2.style.transform = "none";
  e1.style.opacity = "1";
  e2.style.opacity = "1";
  document.getElementById("mg-symbol").innerText = "Mg";
  document.getElementById("o-symbol").innerText = "O";
  document.getElementById("mg-symbol").className = "font-bold text-xl";
  document.getElementById("o-symbol").className = "font-bold text-xl";
  document.querySelector(".gap-2")?.classList.replace("gap-2", "gap-16");
}

function animateCovalent() {
  document
    .getElementById("covalent-container")
    .classList.replace("gap-4", "gap-0");
}
function resetCovalent() {
  document
    .getElementById("covalent-container")
    .classList.replace("gap-0", "gap-4");
}

// --- PART 3: VALENCY & CHART ---
// Chart.js init
const ctx = document.getElementById("massChart").getContext("2d");
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["H (1.6%)", "N (22.2%)", "O (76.2%)"],
    datasets: [
      {
        data: [1, 14, 48],
        backgroundColor: ["#3b82f6", "#8b5cf6", "#ef4444"],
        borderWidth: 0,
      },
    ],
  },
  options: { plugins: { legend: { display: false } }, cutout: "70%" },
});

function checkValencyP() {
  const v = document.getElementById("valency-p-select").value;
  const fb = document.getElementById("p-valency-feedback");
  if (v === "5") {
    fb.innerText = "Chính xác! P có hóa trị V (V x 2 = II x 5)";
    fb.className = "text-sm font-bold mt-2 h-5 text-green-500 animate-pulse";
  } else if (v !== "0") {
    fb.innerText = "Sai rồi. Hãy thử tính: a = (2 x 5) / 2";
    fb.className = "text-sm font-bold mt-2 h-5 text-red-500";
  } else {
    fb.innerText = "";
  }
}

// --- PART 4: EXPERIMENTS TAB ---
function switchExp(tabName) {
  // Hide all content
  document
    .querySelectorAll(".exp-content")
    .forEach((el) => el.classList.add("hidden", "flex"));
  document
    .querySelectorAll(".exp-content")
    .forEach((el) => el.classList.remove("flex"));

  // Show selected
  const selected = document.getElementById("exp-" + tabName);
  selected.classList.remove("hidden");
  selected.classList.add("flex");

  // Update buttons
  document.querySelectorAll(".exp-tab").forEach((b) => {
    b.classList.remove(
      "active",
      "border-primary",
      "bg-white",
      "dark:bg-slate-700",
    );
    b.classList.add("border-transparent");
  });

  // Find active button
  const btn = document.querySelector(
    `button[onclick="switchExp('${tabName}')"]`,
  );
  btn.classList.add(
    "active",
    "border-primary",
    "bg-white",
    "dark:bg-slate-700",
  );
  btn.classList.remove("border-transparent");
}

// Exp 1: Conductivity
function setConductSol(type) {
  const bulb = document.getElementById("bulb-icon");
  const liquid = document.getElementById("beaker-liquid");
  const res = document.getElementById("conduct-result");

  if (type === "salt") {
    bulb.className =
      "fas fa-lightbulb text-6xl absolute -top-16 left-1/2 -translate-x-1/2 text-yellow-400 drop-shadow-[0_0_20px_yellow] z-20 transition-all";
    liquid.className =
      "w-full h-3/4 bg-blue-300/50 absolute bottom-0 transition-colors duration-500";
    res.innerText = "Đèn sáng: Nước muối (Chất Ion) dẫn điện tốt.";
    res.className = "mt-6 font-bold text-center text-green-600 text-lg";
  } else if (type === "sugar") {
    bulb.className =
      "fas fa-lightbulb text-6xl absolute -top-16 left-1/2 -translate-x-1/2 text-slate-300 z-20 transition-all";
    liquid.className =
      "w-full h-3/4 bg-yellow-100/50 absolute bottom-0 transition-colors duration-500";
    res.innerText = "Đèn tắt: Nước đường (CHT) không dẫn điện.";
    res.className = "mt-6 font-bold text-center text-red-600 text-lg";
  } else {
    bulb.className =
      "fas fa-lightbulb text-6xl absolute -top-16 left-1/2 -translate-x-1/2 text-slate-300 z-20 transition-all";
    liquid.className =
      "w-full h-3/4 bg-blue-100/20 absolute bottom-0 transition-colors duration-500";
    res.innerText = "Đèn tắt: Nước cất gần như không dẫn điện.";
    res.className = "mt-6 font-bold text-center text-slate-500 text-lg";
  }
}

// Exp 2: Heat
function toggleHeat() {
  document.getElementById("fire-flame").style.opacity = "1";
  setTimeout(() => {
    // Sugar turns black (carbon)
    document.getElementById("sugar-pile").style.backgroundColor = "#1a1a1a";
    document.getElementById("sugar-pile").style.height = "10px"; // melts/collapses
    // Salt stays white
    document.getElementById("salt-pile").style.backgroundColor = "#fff";

    document.getElementById("heat-desc").innerText =
      "Đường bị phân hủy thành than (đen). Muối ăn vẫn giữ nguyên màu trắng.";
    document.getElementById("heat-desc").className =
      "text-center max-w-lg font-bold text-slate-800 dark:text-white min-h-[50px] animate-pulse";
  }, 2000);
}

// Exp 3: Diffusion
function startDiffusion() {
  const container = document.getElementById("diffusion-container");
  container.innerHTML = "";
  // Create 30 particles
  for (let i = 0; i < 30; i++) {
    const p = document.createElement("div");
    p.className = "diffusion-particle bg-purple-600";
    p.style.boxShadow = "0 0 4px #8b5cf6";
    // Start at bottom center
    p.style.top = "90%";
    p.style.left = "50%";
    container.appendChild(p);

    // Animate after small delay
    setTimeout(() => {
      p.style.top = Math.random() * 90 + "%";
      p.style.left = Math.random() * 90 + "%";
      p.style.opacity = "0.6";
    }, 100);
  }
}

// Exp 4: Neon
function updateNeonLight(val) {
  const txt = document.getElementById("neon-text");
  const reflect = document.getElementById("neon-text-reflect");
  if (val > 20) {
    const intensity = val;
    txt.style.color = "#fff";
    txt.style.textShadow = `0 0 ${intensity / 5}px #fff, 0 0 ${intensity / 2}px #00eaff, 0 0 ${intensity}px #00eaff`;
    reflect.style.color = "#fff";
    reflect.style.textShadow = `0 0 ${intensity / 5}px #fff, 0 0 ${intensity / 2}px #00eaff, 0 0 ${intensity}px #00eaff`;
  } else {
    txt.style.color = "#1e293b";
    txt.style.textShadow = "none";
    reflect.style.color = "#1e293b";
    reflect.style.textShadow = "none";
  }
}

// --- PART 5: QUIZ (Updated with new questions) ---
const quizQs = [
  // Part 1
  {
    q: "Chất nào sau đây là đơn chất?",
    opts: ["Nước (H₂O)", "Khí Nitrogen (N₂)", "Muối ăn (NaCl)", "Khí CO₂"],
    a: 1,
  },
  {
    q: "Methane (CH₄) gồm 1 nguyên tử C (12) và 4 nguyên tử H (1). KLPT là?",
    opts: ["14 amu", "16 amu", "18 amu", "20 amu"],
    a: 1,
  },
  {
    q: "Tại sao Neon (Ne) là phân tử đặc biệt?",
    opts: [
      "Vì nó có 2 nguyên tử",
      "Vì nó là kim loại",
      "Vì nó là đơn chất có 1 nguyên tử",
      "Vì nó không có khối lượng",
    ],
    a: 2,
  },
  // Part 2
  {
    q: "Trong phân tử MgO, liên kết thuộc loại gì?",
    opts: [
      "Cộng hóa trị",
      "Liên kết Ion",
      "Liên kết kim loại",
      "Không có liên kết",
    ],
    a: 1,
  },
  {
    q: "Phân tử Chlorine (Cl₂) được hình thành bằng cách nào?",
    opts: [
      "Nhường electron",
      "Nhận electron",
      "Góp chung electron",
      "Hút tĩnh điện",
    ],
    a: 2,
  },
  {
    q: "So sánh nhiệt độ nóng chảy của muối ăn (Ion) và đường (Cộng hóa trị)?",
    opts: [
      "Muối cao hơn đường",
      "Đường cao hơn muối",
      "Bằng nhau",
      "Không xác định",
    ],
    a: 0,
  },
  // Part 3
  {
    q: "Hóa trị của Phosphorus (P) trong P₂O₅ là bao nhiêu? (Biết O hóa trị II)",
    opts: ["II", "III", "IV", "V"],
    a: 3,
  },
  {
    q: "Công thức hóa học của hợp chất tạo bởi Al (III) và O (II) là?",
    opts: ["AlO", "Al₂O₃", "Al₃O₂", "AlO₂"],
    a: 1,
  },
  {
    q: "Thành phần % khối lượng của Nitrogen trong HNO₃ (KLPT=63)?",
    opts: ["1.6%", "22.2%", "76.2%", "50%"],
    a: 1,
  },
];
let qIdx = 0;
let qScore = 0;

function renderQuiz() {
  if (qIdx >= quizQs.length) {
    document.getElementById("quiz-question-container").classList.add("hidden");
    document.getElementById("quiz-end").classList.remove("hidden");
    document.getElementById("final-score").innerText =
      `${qScore}/${quizQs.length}`;
    return;
  }

  const curr = quizQs[qIdx];
  document.getElementById("q-number").innerText =
    `Câu ${qIdx + 1}/${quizQs.length}`;
  document.getElementById("q-text").innerText = curr.q;

  const div = document.getElementById("q-options");
  div.innerHTML = "";
  curr.opts.forEach((o, i) => {
    div.innerHTML += `<button onclick="checkQuiz(${i}, this)" class="q-opt w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition font-medium">${o}</button>`;
  });

  document.getElementById("q-feedback").innerText = "";
  document.getElementById("q-next").disabled = true;
}

function checkQuiz(i, btn) {
  const correct = quizQs[qIdx].a;
  const btns = document.querySelectorAll(".q-opt");
  btns.forEach((b) => (b.disabled = true));

  if (i === correct) {
    btn.classList.add("bg-green-100", "border-green-500", "text-green-700");
    document.getElementById("q-feedback").innerText = "Chính xác! 🎉";
    document.getElementById("q-feedback").className =
      "font-bold text-lg text-green-500 animate-pulse";
    qScore++;
  } else {
    btn.classList.add("bg-red-100", "border-red-500", "text-red-700");
    btns[correct].classList.add(
      "bg-green-100",
      "border-green-500",
      "text-green-700",
    );
    document.getElementById("q-feedback").innerText = "Sai rồi!";
    document.getElementById("q-feedback").className =
      "font-bold text-lg text-red-500";
  }
  document.getElementById("q-score").innerText = `Điểm: ${qScore}`;
  document.getElementById("q-next").disabled = false;
}

function nextQuiz() {
  qIdx++;
  renderQuiz();
}

function resetQuiz() {
  qIdx = 0;
  qScore = 0;
  document.getElementById("quiz-end").classList.add("hidden");
  document.getElementById("quiz-question-container").classList.remove("hidden");
  renderQuiz();
}

renderQuiz();
