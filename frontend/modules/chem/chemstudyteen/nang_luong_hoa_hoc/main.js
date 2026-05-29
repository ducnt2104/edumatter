// === 1. THEME & UI LOGIC ===
const themeToggle = document.getElementById("theme-toggle");
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

// Tab Switching Logic
function switchTab(tabId) {
  // Hide all content
  document
    .querySelectorAll(".calc-content")
    .forEach((el) => el.classList.add("hidden"));
  document
    .querySelectorAll(".calc-content")
    .forEach((el) => el.classList.remove("block"));

  // Deactivate buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add(
      "bg-white",
      "text-slate-600",
      "dark:bg-slate-800",
      "dark:text-slate-300",
    );
  });

  // Show target
  const target = document.getElementById(tabId);
  target.classList.remove("hidden");
  target.classList.add("block");

  // Activate button (find the one calling this)
  const activeBtn = event.currentTarget;
  activeBtn.classList.remove(
    "bg-white",
    "text-slate-600",
    "dark:bg-slate-800",
    "dark:text-slate-300",
  );
  activeBtn.classList.add("bg-blue-600", "text-white");
}

// === 6. QUIZ SYSTEM ===
const questions = [
  {
    q: "Phản ứng nào sau đây là phản ứng tỏa nhiệt?",
    options: [
      "Nung đá vôi (CaCO3)",
      "Đốt cháy than (C)",
      "Hòa tan NH4Cl",
      "Nhiệt phân Cu(OH)2",
    ],
    correct: 1, // Index
    explain:
      "Đốt cháy than (C + O2 -> CO2) giải phóng nhiệt lượng lớn ra môi trường.",
  },
  {
    q: "Trong phản ứng thu nhiệt, giá trị biến thiên enthalpy (ΔrH) có dấu gì?",
    options: ["Âm (-)", "Dương (+)", "Bằng 0", "Không xác định"],
    correct: 1,
    explain: "Phản ứng thu nhiệt làm tăng năng lượng của hệ, do đó ΔrH > 0.",
  },
  {
    q: "Nhiệt tạo thành chuẩn của đơn chất bền (ví dụ O2, N2) bằng bao nhiêu?",
    options: ["100 kJ/mol", "Luôn dương", "Luôn âm", "Bằng 0"],
    correct: 3,
    explain:
      "Theo quy ước, nhiệt tạo thành chuẩn của các đơn chất ở dạng bền nhất bằng 0.",
  },
  {
    q: "Để tính ΔrH dựa trên năng lượng liên kết (Eb), ta dùng công thức nào?",
    options: ["SP - CĐ", "CĐ - SP", "CĐ + SP", "SP / CĐ"],
    correct: 1,
    explain:
      "Với năng lượng liên kết: ΔrH = Tổng Eb(Chất đầu) - Tổng Eb(Sản phẩm).",
  },
];

let currentQ = 0;
let score = 0;

function renderQuiz() {
  if (currentQ >= questions.length) {
    // Finish
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("final-score").innerText =
      `${score}/${questions.length}`;
    return;
  }

  const q = questions[currentQ];
  document.getElementById("question-number").innerText =
    `Câu ${currentQ + 1}/${questions.length}`;
  document.getElementById("score").innerText = score;
  document.getElementById("question-text").innerText = q.q;

  // Generate Options
  const optContainer = document.getElementById("options-container");
  optContainer.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className =
      "option-btn p-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 text-left font-medium text-slate-700 dark:text-slate-200";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(idx, btn);
    optContainer.appendChild(btn);
  });

  // Hide feedback
  document.getElementById("feedback-area").classList.add("hidden");
}

function checkAnswer(selectedIdx, btnElement) {
  // Disable all buttons
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((b) => (b.disabled = true));

  const q = questions[currentQ];
  const feedbackArea = document.getElementById("feedback-area");
  const feedbackTitle = document.getElementById("feedback-title");
  const feedbackText = document.getElementById("feedback-text");

  feedbackArea.classList.remove("hidden");

  if (selectedIdx === q.correct) {
    btnElement.classList.add("correct");
    feedbackTitle.innerText = "Chính xác! 🎉";
    feedbackTitle.className = "font-bold mb-1 text-green-600";
    feedbackArea.classList.add("border-green-500");
    feedbackArea.classList.remove("border-red-500");
    score++;
  } else {
    btnElement.classList.add("wrong");
    // Highlight correct one
    buttons[q.correct].classList.add("correct");
    feedbackTitle.innerText = "Chưa đúng rồi 😅";
    feedbackTitle.className = "font-bold mb-1 text-red-600";
    feedbackArea.classList.add("border-red-500");
    feedbackArea.classList.remove("border-green-500");
  }

  feedbackText.innerText = q.explain;

  // Update Progress Bar
  const percent = ((currentQ + 1) / questions.length) * 100;
  document.getElementById("quiz-progress").style.width = `${percent}%`;
}

function nextQuestion() {
  currentQ++;
  renderQuiz();
}

function resetQuiz() {
  currentQ = 0;
  score = 0;
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  document.getElementById("quiz-progress").style.width = "0%";
  renderQuiz();
}

// Initialize Quiz
renderQuiz();
(function () {
  const root = document.getElementById("phan-ung");
  if (!root) return;

  // Mod 1: Tabs
  const tabExo = root.querySelector("#tab-exo-btn");
  const tabEndo = root.querySelector("#tab-endo-btn");
  const tabContent = root.querySelector("#tab-content");
  const tabText = root.querySelector("#tab-text");

  tabExo.addEventListener("click", () => {
    tabExo.className =
      "flex-1 py-3 rounded-xl font-bold transition-all bg-red-100 text-red-600 border-2 border-red-500 scale-105 shadow-md";
    tabEndo.className =
      "flex-1 py-3 rounded-xl font-bold transition-all bg-slate-100 text-slate-600 border-2 border-transparent hover:bg-blue-50 hover:text-blue-600";
    tabContent.className =
      "p-4 rounded-xl bg-red-50 dark:bg-slate-800 border-l-4 border-red-500 transition-colors duration-300";
    tabText.innerHTML =
      "<strong>Phản ứng tỏa nhiệt:</strong> Giải phóng năng lượng (nhiệt) ra môi trường. Năng lượng chất đầu > Sản phẩm. Môi trường xung quanh <strong>nóng lên</strong>.";
  });

  tabEndo.addEventListener("click", () => {
    tabEndo.className =
      "flex-1 py-3 rounded-xl font-bold transition-all bg-blue-100 text-blue-600 border-2 border-blue-500 scale-105 shadow-md";
    tabExo.className =
      "flex-1 py-3 rounded-xl font-bold transition-all bg-slate-100 text-slate-600 border-2 border-transparent hover:bg-red-50 hover:text-red-600";
    tabContent.className =
      "p-4 rounded-xl bg-blue-50 dark:bg-slate-800 border-l-4 border-blue-500 transition-colors duration-300";
    tabText.innerHTML =
      "<strong>Phản ứng thu nhiệt:</strong> Hấp thụ năng lượng (nhiệt) từ môi trường. Năng lượng chất đầu < Sản phẩm. Môi trường xung quanh <strong>lạnh đi</strong>.";
  });

  // Mod 2: Bond Slider
  const bondSlider = root.querySelector("#bond-slider");
  const atom1 = root.querySelector("#atom-1");
  const atom2 = root.querySelector("#atom-2");
  const bondLine = root.querySelector("#bond-line");
  const energyFlash = root.querySelector("#energy-flash");

  bondSlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    // val 0 (apart) -> 50 (touching) -> 100 (merged/stable)
    const dist = Math.abs(50 - val);
    const translation = 15 + dist * 1.5; // max 90px
    atom1.style.transform = `translateX(-${translation}px)`;
    atom2.style.transform = `translateX(${translation}px)`;

    if (val < 40) {
      bondLine.style.opacity = "0";
      energyFlash.style.opacity = "0";
    } else if (val > 60) {
      bondLine.style.opacity = "1";
      bondLine.style.width = "20px";
      // Flash effect if moving towards 100
      energyFlash.style.opacity = (val - 60) / 80; // slight yellow glow
    } else {
      bondLine.style.opacity = "1";
      bondLine.style.width = "40px";
      energyFlash.style.opacity = "0";
    }
  });

  // Mod 3: Energy Diagram
  const btnExo = root.querySelector("#btn-exo");
  const btnEndo = root.querySelector("#btn-endo");
  const path = root.querySelector("#energy-path");
  const endDot = root.querySelector("#end-dot");
  const labelDelta = root.querySelector("#label-delta");

  btnExo.addEventListener("click", () => {
    path.setAttribute("d", "M 20 40 Q 150 10 280 120");
    path.setAttribute("stroke", "#ef4444");
    endDot.setAttribute("cy", "120");
    endDot.setAttribute("fill", "#10b981");
    labelDelta.textContent = "ΔrH < 0";
    labelDelta.setAttribute("y", "80");
    btnExo.className =
      "px-3 py-1 rounded-lg bg-red-500 text-white font-bold text-sm";
    btnEndo.className =
      "px-3 py-1 rounded-lg bg-slate-200 text-slate-700 font-bold text-sm";
  });

  btnEndo.addEventListener("click", () => {
    path.setAttribute("d", "M 20 120 Q 150 10 280 40");
    path.setAttribute("stroke", "#3b82f6");
    endDot.setAttribute("cy", "40");
    endDot.setAttribute("fill", "#ef4444");
    labelDelta.textContent = "ΔrH > 0";
    labelDelta.setAttribute("y", "80");
    btnEndo.className =
      "px-3 py-1 rounded-lg bg-blue-500 text-white font-bold text-sm";
    btnExo.className =
      "px-3 py-1 rounded-lg bg-slate-200 text-slate-700 font-bold text-sm";
  });

  // Mod 4: Beaker Lab
  const btnCaO = root.querySelector("#btn-add-cao");
  const btnNH4NO3 = root.querySelector("#btn-add-nh4no3");
  const btnReset = root.querySelector("#btn-reset-beaker");
  const beakerLiquid = root.querySelector("#beaker-liquid");
  const beakerBubbles = root.querySelector("#beaker-bubbles");
  const mercury = root.querySelector("#thermometer-mercury");
  const tempDisplay = root.querySelector("#temp-display");

  const resetBeaker = () => {
    beakerLiquid.className =
      "w-full h-[40%] bg-blue-300/50 transition-all duration-1000";
    beakerBubbles.style.opacity = "0";
    mercury.style.height = "50%";
    mercury.className =
      "w-1.5 bg-red-500 rounded-t-full transition-all duration-1000 relative";
    tempDisplay.textContent = "25°C";
  };

  btnCaO.addEventListener("click", () => {
    beakerLiquid.className =
      "w-full h-[50%] bg-orange-200/80 transition-all duration-1000";
    beakerBubbles.style.opacity = "1";
    mercury.style.height = "90%";
    mercury.className =
      "w-1.5 bg-red-600 rounded-t-full transition-all duration-1000 relative";
    tempDisplay.textContent = "80°C";
  });

  btnNH4NO3.addEventListener("click", () => {
    beakerLiquid.className =
      "w-full h-[50%] bg-blue-200/80 transition-all duration-1000";
    beakerBubbles.style.opacity = "0";
    mercury.style.height = "20%";
    mercury.className =
      "w-1.5 bg-blue-500 rounded-t-full transition-all duration-1000 relative";
    tempDisplay.textContent = "5°C";
  });

  btnReset.addEventListener("click", resetBeaker);

  // Mod 5: KClO3 Heating
  const btnHeat = root.querySelector("#btn-heat");
  const btnStopHeat = root.querySelector("#btn-stop-heat");
  const flame = root.querySelector("#burner-flame");
  const gas = root.querySelector("#o2-gas");
  const heatStatus = root.querySelector("#heat-status");

  btnHeat.addEventListener("click", () => {
    flame.style.opacity = "1";
    setTimeout(() => {
      gas.style.opacity = "1";
    }, 500);
    heatStatus.textContent = "Đang đun nóng: Phản ứng xảy ra, sinh khí O₂.";
    heatStatus.className = "text-xs text-center mt-2 text-red-500 font-bold";
  });

  btnStopHeat.addEventListener("click", () => {
    flame.style.opacity = "0";
    gas.style.opacity = "0";
    heatStatus.textContent =
      "Ngừng đun: Phản ứng dừng lại ngay lập tức (Thu nhiệt).";
    heatStatus.className = "text-xs text-center mt-2 text-slate-500";
  });

  // Mod 6: Classifier
  const classItems = root.querySelectorAll(".classifier-item");
  const btnCheckClass = root.querySelector("#btn-check-class");

  classItems.forEach((item) => {
    item.addEventListener("click", () => {
      const badge = item.querySelector(".badge");
      if (
        badge.textContent === "Chưa chọn" ||
        badge.textContent === "Thu Nhiệt"
      ) {
        badge.textContent = "Tỏa Nhiệt";
        badge.className =
          "badge px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-600";
        item.dataset.selected = "toa";
      } else {
        badge.textContent = "Thu Nhiệt";
        badge.className =
          "badge px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-600";
        item.dataset.selected = "thu";
      }
      item.style.borderColor = "#e2e8f0"; // reset border
    });
  });

  btnCheckClass.addEventListener("click", () => {
    classItems.forEach((item) => {
      if (item.dataset.selected === item.dataset.correct) {
        item.style.borderColor = "#10b981"; // green
      } else {
        item.style.borderColor = "#ef4444"; // red
      }
    });
  });

  // Mod 7: Equation Analyzer
  const eqParts = root.querySelectorAll(".eq-part");
  const eqTooltip = root.querySelector("#eq-tooltip");

  eqParts.forEach((part) => {
    part.addEventListener("click", () => {
      eqTooltip.innerHTML = `<strong>Giải thích:</strong> ${part.dataset.info}`;
      eqTooltip.classList.add("scale-105");
      setTimeout(() => eqTooltip.classList.remove("scale-105"), 200);
    });
  });

  // Mod 8: Quiz
  const quizBtns = root.querySelectorAll("#quiz-options button");
  const quizFeedback = root.querySelector("#quiz-feedback");

  quizBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // reset others
      quizBtns.forEach((b) => {
        b.className =
          "w-full text-left p-3 rounded-lg border border-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm";
      });
      const isCorrect = btn.dataset.ans === "true";
      if (isCorrect) {
        btn.className =
          "w-full text-left p-3 rounded-lg border-2 border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold";
        quizFeedback.textContent =
          "Đúng! Nhiệt phân Cu(OH)₂ cần cung cấp nhiệt (Thu nhiệt).";
        quizFeedback.className =
          "mt-3 text-sm font-bold opacity-100 text-green-600 transition-opacity h-5";
      } else {
        btn.className =
          "w-full text-left p-3 rounded-lg border-2 border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-bold";
        quizFeedback.textContent = "Sai! Hãy thử lại.";
        quizFeedback.className =
          "mt-3 text-sm font-bold opacity-100 text-red-600 transition-opacity h-5";
      }
    });
  });

  // Mod 10: Enthalpy Gauge
  const ethSlider = root.querySelector("#enthalpy-slider");
  const gaugeNeedle = root.querySelector("#gauge-needle");
  const gaugeValue = root.querySelector("#gauge-value");
  const gaugeBg = root.querySelector("#gauge-bg-overlay");

  ethSlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    gaugeValue.textContent = `${val > 0 ? "+" : ""}${val} kJ`;

    // Map -1000 to 1000 -> -90deg to 90deg
    const angle = (val / 1000) * 90;
    gaugeNeedle.style.transform = `rotate(${angle}deg)`;

    if (val < 0) {
      gaugeValue.className =
        "text-2xl font-mono font-bold mt-4 z-10 text-red-600";
      gaugeBg.style.backgroundColor = `rgba(239, 68, 68, ${Math.abs(val) / 2000})`; // max 0.5 opacity
    } else if (val > 0) {
      gaugeValue.className =
        "text-2xl font-mono font-bold mt-4 z-10 text-blue-600";
      gaugeBg.style.backgroundColor = `rgba(59, 130, 246, ${val / 2000})`;
    } else {
      gaugeValue.className =
        "text-2xl font-mono font-bold mt-4 z-10 text-slate-800 dark:text-slate-200";
      gaugeBg.style.backgroundColor = "transparent";
    }
  });
})();
(function () {
  // Prevent global pollution
  const DB = [
    {
      z: 1,
      sym: "H",
      name: "Hydrogen",
      per: 1,
      grp: 1,
      mass: 1.0,
      val: 1,
      en: 2.2,
      conf: "1s¹",
      state: "H₂(g)",
      dHf: 0,
    },
    {
      z: 2,
      sym: "He",
      name: "Helium",
      per: 1,
      grp: 18,
      mass: 4.0,
      val: 2,
      en: 0,
      conf: "1s²",
      state: "He(g)",
      dHf: 0,
    },
    {
      z: 3,
      sym: "Li",
      name: "Lithium",
      per: 2,
      grp: 1,
      mass: 6.9,
      val: 1,
      en: 1.0,
      conf: "1s² 2s¹",
      state: "Li(s)",
      dHf: 0,
    },
    {
      z: 4,
      sym: "Be",
      name: "Beryllium",
      per: 2,
      grp: 2,
      mass: 9.0,
      val: 2,
      en: 1.5,
      conf: "1s² 2s²",
      state: "Be(s)",
      dHf: 0,
    },
    {
      z: 5,
      sym: "B",
      name: "Boron",
      per: 2,
      grp: 13,
      mass: 10.8,
      val: 3,
      en: 2.0,
      conf: "1s² 2s² 2p¹",
      state: "B(s)",
      dHf: 0,
    },
    {
      z: 6,
      sym: "C",
      name: "Carbon",
      per: 2,
      grp: 14,
      mass: 12.0,
      val: 4,
      en: 2.5,
      conf: "1s² 2s² 2p²",
      state: "C(graphite)",
      dHf: 0,
    },
    {
      z: 7,
      sym: "N",
      name: "Nitrogen",
      per: 2,
      grp: 15,
      mass: 14.0,
      val: 5,
      en: 3.0,
      conf: "1s² 2s² 2p³",
      state: "N₂(g)",
      dHf: 0,
    },
    {
      z: 8,
      sym: "O",
      name: "Oxygen",
      per: 2,
      grp: 16,
      mass: 16.0,
      val: 6,
      en: 3.5,
      conf: "1s² 2s² 2p⁴",
      state: "O₂(g)",
      dHf: 0,
    },
    {
      z: 9,
      sym: "F",
      name: "Fluorine",
      per: 2,
      grp: 17,
      mass: 19.0,
      val: 7,
      en: 4.0,
      conf: "1s² 2s² 2p⁵",
      state: "F₂(g)",
      dHf: 0,
    },
    {
      z: 10,
      sym: "Ne",
      name: "Neon",
      per: 2,
      grp: 18,
      mass: 20.2,
      val: 8,
      en: 0,
      conf: "1s² 2s² 2p⁶",
      state: "Ne(g)",
      dHf: 0,
    },
  ];

  const safeDOM = (id) => document.getElementById(id);
  if (!safeDOM("enthalpy")) return; // Exit if context not found

  // === ENTHALPY CALCULATOR ===
  const btnCalc = safeDOM("btnCalcH") || document.getElementById("btn-calc-h");
  if (btnCalc) {
    btnCalc.addEventListener("click", () => {
      const inp = safeDOM("inp-o2").value;
      const res = safeDOM("res-calc");
      const o2Val = parseFloat(inp) || 0;
      // Formula: sum(products) - sum(reactants)
      // Products: 1*CO2 (-393.5) + 2*H2O (-285.8) = -965.1
      // Reactants: 1*CH4 (-74.8) + 2*O2 (o2Val)
      let sp = -393.5 + 2 * -285.8;
      let cd = -74.8 + 2 * o2Val;
      let drH = sp - cd;

      res.classList.remove(
        "hidden",
        "bg-red-100",
        "text-red-700",
        "bg-green-100",
        "text-green-700",
        "bg-blue-100",
        "text-blue-700",
      );

      if (o2Val !== 0) {
        res.innerHTML = `⚠️ Sai sót! Đơn chất O₂ phải có Δ<sub>f</sub>H° = 0. Bạn đang nhập ${o2Val}. Hãy sửa lại!`;
        res.classList.add(
          "bg-red-100",
          "text-red-700",
          "dark:bg-red-900/40",
          "dark:text-red-300",
        );
      } else {
        res.innerHTML = `✅ Chính xác! Δ<sub>r</sub>H° = (-393.5 + 2×(-285.8)) - (-74.8 + 2×0) = <span class="text-xl">${drH.toFixed(1)} kJ</span> (Phản ứng tỏa nhiệt)`;
        res.classList.add(
          "bg-green-100",
          "text-green-700",
          "dark:bg-green-900/40",
          "dark:text-green-300",
        );
      }
    });
  }

  // === MODULE 7: MINI PT ===
  function renderPT() {
    const pt = safeDOM("mini-pt");
    let html = "";
    const grid = [
      [1, 0, 0, 0, 0, 0, 0, 2],
      [3, 4, 5, 6, 7, 8, 9, 10],
    ];
    grid.forEach((row) => {
      row.forEach((z) => {
        if (z === 0) {
          html += `<div></div>`;
        } else {
          let el = DB.find((e) => e.z === z);
          html += `<div class="pt-cell border border-slate-300 dark:border-slate-600 rounded p-1 text-center cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all bg-white dark:bg-slate-800 shadow-sm" data-z="${z}" data-per="${el.per}" data-grp="${el.grp}" id="cell-${z}">
            <div class="text-[10px] text-slate-400 font-mono">${z}</div>
            <div class="font-bold text-sm text-slate-800 dark:text-white">${el.sym}</div>
          </div>`;
        }
      });
    });
    pt.innerHTML = html;

    // Attach click for Module 10
    document.querySelectorAll(".pt-cell").forEach((cell) => {
      cell.addEventListener("click", () => {
        let z = parseInt(cell.getAttribute("data-z"));
        triggerModule10(z);
      });
    });
  }

  // === MODULE 10: CELL EXPLAINER ===
  function triggerModule10(z) {
    const el = DB.find((e) => e.z === z);
    const box = safeDOM("m10-explainer");
    safeDOM("exp-sym").textContent = el.sym;
    safeDOM("exp-name").textContent = el.name;
    safeDOM("exp-z").textContent = el.z;
    safeDOM("exp-mass").textContent = el.mass;
    safeDOM("exp-state").textContent = el.state;
    box.classList.remove("hidden");
    box.classList.add("animate-pulse");
    setTimeout(() => box.classList.remove("animate-pulse"), 500);

    // Auto update master slider
    safeDOM("master-z").value = z;
    updateMasterDashboard(z);
  }

  // === MODULE 3 & 4: HIGHLIGHTERS ===
  function initHighlighters() {
    const clear = () => {
      document
        .querySelectorAll(".pt-cell")
        .forEach((c) => c.classList.remove("hl-active"));
    };
    safeDOM("hl-clear").addEventListener("click", clear);
    safeDOM("hl-p1").addEventListener("click", () => {
      clear();
      document
        .querySelectorAll('.pt-cell[data-per="1"]')
        .forEach((c) => c.classList.add("hl-active"));
    });
    safeDOM("hl-p2").addEventListener("click", () => {
      clear();
      document
        .querySelectorAll('.pt-cell[data-per="2"]')
        .forEach((c) => c.classList.add("hl-active"));
    });
    safeDOM("hl-g1").addEventListener("click", () => {
      clear();
      document
        .querySelectorAll('.pt-cell[data-grp="1"]')
        .forEach((c) => c.classList.add("hl-active"));
    });
    safeDOM("hl-g16").addEventListener("click", () => {
      clear();
      document
        .querySelectorAll('.pt-cell[data-grp="16"]')
        .forEach((c) => c.classList.add("hl-active"));
    });
  }

  // === MODULE 6: COMPARE 2 ELEMENTS ===
  function initCompare() {
    const s1 = safeDOM("cmp-1");
    const s2 = safeDOM("cmp-2");
    let opts = DB.map(
      (e) => `<option value="${e.z}">${e.sym} (${e.name})</option>`,
    ).join("");
    s1.innerHTML = opts;
    s2.innerHTML = opts;
    s1.value = 6; // C
    s2.value = 8; // O

    const compare = () => {
      const z1 = parseInt(s1.value);
      const z2 = parseInt(s2.value);
      const e1 = DB.find((e) => e.z === z1);
      const e2 = DB.find((e) => e.z === z2);
      const res = safeDOM("cmp-result");
      if (z1 === z2) {
        res.innerHTML = "Vui lòng chọn 2 nguyên tố khác nhau.";
      } else {
        let comp = e1.en > e2.en ? ">" : e1.en < e2.en ? "<" : "=";
        res.innerHTML = `Độ âm điện: <strong>${e1.sym} (${e1.en}) <span class="text-red-500 mx-2">${comp}</span> ${e2.sym} (${e2.en})</strong><br>
        <span class="text-xs text-slate-500 mt-1 block">Đơn chất: ${e1.state} và ${e2.state} đều có Δ<sub>f</sub>H° = 0.</span>`;
      }
    };
    s1.addEventListener("change", compare);
    s2.addEventListener("change", compare);
    compare();
  }

  // === MODULE 9: TREND GRAPH ===
  function renderTrendGraph() {
    const container = safeDOM("m9-trend");
    let html = "";
    DB.filter((e) => e.per === 2).forEach((e) => {
      let height = (e.en / 4.0) * 100;
      html += `<div class="flex flex-col items-center gap-1 flex-1 relative group cursor-pointer">
        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-t relative h-32 flex items-end">
          <div class="w-full bg-indigo-400 dark:bg-indigo-500 rounded-t transition-all duration-700" style="height: ${height}%"></div>
        </div>
        <div class="text-xs font-bold text-slate-800 dark:text-slate-200">${e.sym}</div>
        <div class="absolute -top-6 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">EN: ${e.en}</div>
      </div>`;
    });
    container.innerHTML = html;
  }

  // === MASTER DASHBOARD (Modules 1, 2, 5, 8, 11) ===
  function updateMasterDashboard(z) {
    const el = DB.find((e) => e.z === z);

    // M1: Atom Builder & M8: Shell Map
    safeDOM("m1-nuc").textContent = `+${z}`;
    const n1 = Math.min(z, 2);
    const n2 = Math.max(0, z - 2);

    let s1HTML = "";
    for (let i = 0; i < n1; i++) {
      s1HTML += `<div class="electron-container" style="--deg: ${i * (360 / n1)}"><div class="electron-dot text-blue-500"></div></div>`;
    }
    safeDOM("m1-s1").innerHTML = s1HTML;

    let s2HTML = "";
    if (n2 > 0) {
      for (let i = 0; i < n2; i++) {
        s2HTML += `<div class="electron-container" style="--deg: ${i * (360 / n2)}"><div class="electron-dot text-green-500"></div></div>`;
      }
    }
    safeDOM("m1-s2").innerHTML = s2HTML;

    safeDOM("m8-k").textContent = n1;
    safeDOM("m8-l").textContent = n2;

    // M2: Config
    safeDOM("m2-config").textContent = el.conf
      .replace(/1/g, "¹")
      .replace(/2/g, "²")
      .replace(/3/g, "³")
      .replace(/4/g, "⁴")
      .replace(/5/g, "⁵")
      .replace(/6/g, "⁶"); // Simplistic replace just for visual if data is plain, but data already has superscripts. So just set it.
    safeDOM("m2-config").textContent = el.conf;

    // M5: Valence
    safeDOM("m5-sym").textContent = el.sym;
    let v = el.val;
    let pos = [0, 0, 0, 0]; // top, right, bottom, left
    for (let i = 0; i < v; i++) pos[i % 4]++;
    safeDOM("m5-t").innerHTML = "•".repeat(pos[0]);
    safeDOM("m5-r").innerHTML = "•".repeat(pos[1]);
    safeDOM("m5-b").innerHTML = "•".repeat(pos[2]);
    safeDOM("m5-l").innerHTML = "•".repeat(pos[3]);

    // M11: Orbitals
    let h1s = z >= 2 ? "↑↓" : "↑&nbsp;";
    let h2s = z >= 4 ? "↑↓" : z === 3 ? "↑&nbsp;" : "&nbsp;&nbsp;";
    let p = Math.max(0, z - 4);
    let px = "&nbsp;&nbsp;",
      py = "&nbsp;&nbsp;",
      pz = "&nbsp;&nbsp;";
    if (p > 0) px = "↑&nbsp;";
    if (p > 1) py = "↑&nbsp;";
    if (p > 2) pz = "↑&nbsp;";
    if (p > 3) px = "↑↓";
    if (p > 4) py = "↑↓";
    if (p > 5) pz = "↑↓";
    safeDOM("orb-1s").innerHTML = h1s;
    safeDOM("orb-2s").innerHTML = h2s;
    safeDOM("orb-2px").innerHTML = px;
    safeDOM("orb-2py").innerHTML = py;
    safeDOM("orb-2pz").innerHTML = pz;
  }

  // Init Master Slider
  const slider = safeDOM("master-z");
  slider.addEventListener("input", (e) => {
    updateMasterDashboard(parseInt(e.target.value));
  });

  // Run initializations
  renderPT();
  initHighlighters();
  initCompare();
  renderTrendGraph();
  updateMasterDashboard(6); // Default Carbon
})();
