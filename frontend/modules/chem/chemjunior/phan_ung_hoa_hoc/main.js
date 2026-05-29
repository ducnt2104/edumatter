document.documentElement.classList.add("dark");
// 1. Dark Mode
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
}
themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
});

// 2. SIMULATION 1: Salt Separation
let sim1State = 0;
function sim1Action(action) {
  const water = document.getElementById("sim1-water");
  const salt = document.getElementById("sim1-salt");
  const fire = document.getElementById("sim1-fire");
  const steam = document.getElementById("sim1-steam");
  const status = document.getElementById("sim1-status");

  if (action === "mix") {
    // Create salt particles
    salt.innerHTML = "";
    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      p.className =
        "w-1 h-1 bg-white rounded-full absolute transition-all duration-1000";
      p.style.left = Math.random() * 100 + "%";
      p.style.bottom = "0px";
      salt.appendChild(p);
    }
    // Dissolve animation
    setTimeout(() => {
      Array.from(salt.children).forEach((p) => {
        p.style.bottom = Math.random() * 80 + "%";
        p.style.opacity = "0"; // Dissolve
      });
      status.innerText = "Muối tan tạo thành dung dịch đồng nhất.";
      sim1State = 1;
    }, 100);
  } else if (action === "heat") {
    if (sim1State < 1) {
      status.innerText = "Hãy hòa tan muối trước!";
      return;
    }
    fire.style.opacity = "1";
    steam.style.opacity = "1";
    status.innerText = "Nước bay hơi, muối kết tinh trở lại.";

    // Evaporate water
    water.style.height = "0%";

    // Salt reappears
    setTimeout(() => {
      Array.from(salt.children).forEach((p) => {
        p.style.bottom = "0px";
        p.style.opacity = "1";
      });
      fire.style.opacity = "0";
      steam.style.opacity = "0";
      status.innerText = "Thu được muối rắn ban đầu (Biến đổi vật lí).";
    }, 2000);
  } else if (action === "reset") {
    water.style.height = "100%";
    salt.innerHTML = "";
    fire.style.opacity = "0";
    steam.style.opacity = "0";
    status.innerText = "";
    sim1State = 0;
  }
}

// 3. SIMULATION 2: Fe + S
let sim2Step = 0;
function sim2Run(step) {
  const particles = document.getElementById("sim2-particles");
  const msg = document.getElementById("sim2-msg");
  const magnet = document.getElementById("sim2-magnet");
  const glow = document.getElementById("sim2-glow");

  if (step === "mix") {
    particles.innerHTML = "";
    // Grey Fe particles
    for (let i = 0; i < 10; i++)
      particles.innerHTML += `<div class="w-3 h-3 bg-gray-400 rounded-full particle-fe"></div>`;
    // Yellow S particles
    for (let i = 0; i < 8; i++)
      particles.innerHTML += `<div class="w-3 h-3 bg-yellow-400 rounded-full particle-s"></div>`;
    msg.innerText = "Hỗn hợp Fe và S chưa phản ứng.";
    sim2Step = 1;
  } else if (step === "magnet1") {
    if (sim2Step !== 1) return;
    magnet.classList.remove("hidden");
    setTimeout(() => {
      const fes = document.querySelectorAll(".particle-fe");
      fes.forEach((p) => (p.style.transform = "translateY(-40px)"));
      msg.innerText = "Nam châm hút sắt => Vẫn là chất riêng biệt.";
      setTimeout(() => {
        fes.forEach((p) => (p.style.transform = "none"));
        magnet.classList.add("hidden");
      }, 2000);
    }, 100);
  } else if (step === "heat") {
    if (sim2Step !== 1) return;
    glow.style.backgroundColor = "rgba(249, 115, 22, 0.5)"; // Orange glow
    msg.innerText = "Phản ứng tỏa nhiệt mạnh! Ánh sáng chói lòa...";
    setTimeout(() => {
      glow.style.backgroundColor = "transparent";
      particles.innerHTML = "";
      // Black FeS product
      for (let i = 0; i < 15; i++)
        particles.innerHTML += `<div class="w-4 h-4 bg-black rounded-sm m-0.5"></div>`;
      msg.innerText = "Tạo thành chất rắn màu đen (FeS).";
      sim2Step = 2;
    }, 2000);
  } else if (step === "magnet2") {
    if (sim2Step !== 2) return;
    magnet.classList.remove("hidden");
    setTimeout(() => {
      // No movement
      msg.innerText = "Nam châm KHÔNG hút chất rắn đen => Đã tạo chất mới.";
      setTimeout(() => magnet.classList.add("hidden"), 2000);
    }, 500);
  }
}

// 4. SIMULATION 3: Scale
let sim3State = 0;
function sim3Weigh() {
  if (sim3State !== 0) return;
  document.getElementById("sim3-display").innerText = "250.00 g";
  sim3State = 1;
}
function sim3Pour() {
  if (sim3State !== 1) {
    alert("Hãy cân trước!");
    return;
  }
  const beakerA = document.getElementById("beaker-a");
  const liquidB = document.getElementById("liquid-b");

  beakerA.style.transform = "translate(80px, -40px) rotate(45deg)";
  beakerA.querySelector("div").style.height = "0"; // Empty A

  setTimeout(() => {
    liquidB.style.height = "80%";
    liquidB.style.backgroundColor = "white"; // Precipitate
    liquidB.innerText = "↓";
    liquidB.className +=
      " flex items-center justify-center font-bold text-slate-400";
    document.getElementById("sim3-result").innerText =
      "Khối lượng vẫn là 250.00g => Bảo toàn khối lượng.";
    sim3State = 2;
  }, 800);
}
function sim3Reset() {
  document.getElementById("beaker-a").style.transform = "none";
  document.getElementById("beaker-a").querySelector("div").style.height = "50%";
  const lb = document.getElementById("liquid-b");
  lb.style.height = "50%";
  lb.style.backgroundColor = "rgba(250, 204, 21, 0.5)";
  lb.innerText = "";
  document.getElementById("sim3-display").innerText = "0.00 g";
  document.getElementById("sim3-result").innerText = "";
  sim3State = 0;
}

// 5. TOPIC 4: Balloon
function updateBalloon(val) {
  const size = 60 + val * 40;
  const b = document.getElementById("balloon");
  b.style.width = size + "px";
  b.style.height = size + "px";
  b.innerText = val + " mol";
  document.getElementById("mol-val").innerText = "n = " + val + " mol";
  document.getElementById("vol-val").innerText =
    "V = " + (val * 24.79).toFixed(2) + " L";
}

// 6. TOPIC 5: Catalyst Interaction
let hasCatalyst = false;
let bubblesInterval1, bubblesInterval2;

function createBubble(tubeId, speed) {
  const container = document.getElementById(tubeId);
  const b = document.createElement("div");
  b.className = "bubble";
  const size = Math.random() * 6 + 4;
  b.style.width = size + "px";
  b.style.height = size + "px";
  b.style.left = Math.random() * 80 + 10 + "%";
  b.style.animation = `bubble ${speed}s linear infinite`;
  container.appendChild(b);
  setTimeout(() => b.remove(), speed * 1000);
}

// Init slow bubbles for Tube 1
setInterval(() => createBubble("bubbles-1", 4), 800);

function sim5Action(action) {
  if (action === "add_catalyst") {
    document.getElementById("mno2-layer").style.opacity = "1";
    document.getElementById("btn-catalyst").disabled = true;
    document.getElementById("btn-catalyst").style.opacity = "0.5";
    hasCatalyst = true;
    // Start fast bubbles
    bubblesInterval2 = setInterval(() => createBubble("bubbles-2", 1.5), 100);
    document.getElementById("sim5-feedback").innerText =
      "MnO2 làm H2O2 phân hủy cực nhanh!";
  } else if (action === "reset") {
    hasCatalyst = false;
    document.getElementById("mno2-layer").style.opacity = "0";
    document.getElementById("btn-catalyst").disabled = false;
    document.getElementById("btn-catalyst").style.opacity = "1";
    clearInterval(bubblesInterval2);
    document.getElementById("bubbles-2").innerHTML = "";
    document.getElementById("sim5-feedback").innerText = "";

    // Reset splint icon
    const sContainer = document.getElementById("splint-container");
    sContainer.innerHTML = `<div class="w-full py-2 bg-orange-100 border border-orange-300 text-orange-700 rounded flex items-center justify-center gap-2 select-none text-sm font-bold"><i class="fas fa-fire"></i> Kéo que đóm</div>`;
  }
}

// Drag and Drop Logic for Splint
const feedback = document.getElementById("sim5-feedback");

// Removed addEventListener to fix ReferenceError. Logic now uses inline function defined below.
function dragSplint(ev) {
  ev.dataTransfer.setData("text/plain", "splint");
  ev.dataTransfer.effectAllowed = "move";
}

function allowDrop(ev) {
  ev.preventDefault();
}

function enterTube(id) {
  if (id === 1) {
    feedback.innerText = "Ống 1: Tàn đóm chỉ hồng nhẹ (ít O2)";
  } else if (id === 2) {
    if (hasCatalyst) {
      feedback.innerText = "Ống 2: BÙNG CHÁY! (Nhiều O2 thoát ra)";
      feedback.className =
        "absolute top-2 w-full text-center font-bold text-red-600 animate-pulse";
    } else {
      feedback.innerText = "Ống 2: Chưa có xúc tác (ít O2)";
    }
  }
}

function leaveTube(id) {
  feedback.innerText = "";
  feedback.className =
    "absolute top-2 w-full text-center font-bold text-xs text-slate-500";
}

function dropSplint(ev) {
  ev.preventDefault();
}

// 7. TOPIC 6: Concentration
let s6Sugar = 0;
let s6Water = 0;
function sim6Run(step) {
  const sugarEl = document.getElementById("sim6-sugar");
  const waterEl = document.getElementById("sim6-water");
  const res = document.getElementById("sim6-result");

  if (step === "addSugar") {
    s6Sugar = 15;
    sugarEl.style.height = "15%";
    res.innerText = "Đã thêm 15g đường.";
  } else if (step === "addWater") {
    if (s6Sugar === 0) {
      alert("Thêm đường trước!");
      return;
    }
    s6Water = 85;
    waterEl.style.height = "85%";
    res.innerText = "Đã thêm 85g nước.";
  } else if (step === "mix") {
    if (s6Water === 0) return;
    const rod = document.getElementById("sim6-rod");
    rod.classList.remove("hidden");
    rod.classList.add("animate-spin"); // Simple spin to sim mixing
    setTimeout(() => {
      rod.classList.add("hidden");
      sugarEl.style.opacity = "0"; // Dissolved
      waterEl.style.backgroundColor = "rgba(255,255,255,0.8)"; // Syrupy
      res.innerText = "Đường tan hết. C% = 15%.";
    }, 1000);
  }
}

// 8. QUIZ LOGIC
const questions = [
  {
    q: "Quá trình nào là biến đổi hóa học?",
    options: [
      "Thủy tinh nóng chảy",
      "Cơm bị ôi thiu",
      "Bẻ cong dây sắt",
      "Hòa tan đường",
    ],
    correct: 1,
    hint: "Tạo ra chất mới có mùi chua.",
  },
  {
    q: "Đốt cháy methane (CH4) là phản ứng gì?",
    options: ["Tỏa nhiệt", "Thu nhiệt", "Hòa tan", "Bay hơi"],
    correct: 0,
    hint: "Sinh ra nhiệt làm nóng môi trường.",
  },
  {
    q: "Công thức tính khối lượng chất là gì?",
    options: ["m = n / M", "m = n x M", "m = M / n", "m = n + M"],
    correct: 1,
    hint: "Số mol nhân Khối lượng mol.",
  },
  {
    q: "Tại sao chẻ nhỏ củi giúp bếp dễ cháy hơn?",
    options: [
      "Tăng nhiệt độ",
      "Tăng nồng độ O2",
      "Tăng diện tích tiếp xúc",
      "Có chất xúc tác",
    ],
    correct: 2,
    hint: "Củi nhỏ tiếp xúc với Oxi nhiều hơn.",
  },
  {
    q: "Hòa tan 20g muối vào 80g nước, C% là bao nhiêu?",
    options: ["20%", "25%", "80%", "15%"],
    correct: 0,
    hint: "m(ct)/m(dd) = 20 / (20+80).",
  },
];
let currentQ = 0;
function loadQuiz() {
  if (currentQ >= questions.length) {
    document.getElementById("question-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    return;
  }
  const q = questions[currentQ];
  document.getElementById("question-text").innerText =
    "Câu " + (currentQ + 1) + ": " + q.q;
  const grid = document.getElementById("options-grid");
  grid.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className =
      "p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 transition text-left";
    btn.innerText = opt;
    btn.onclick = () => checkAns(idx, btn);
    grid.appendChild(btn);
  });
  document.getElementById("progress-bar").style.width =
    (currentQ / questions.length) * 100 + "%";
}
function checkAns(idx, btn) {
  const q = questions[currentQ];
  if (idx === q.correct) {
    btn.classList.add("bg-green-500", "text-white");
    document.getElementById("feedback").innerText = "Chính xác! 🎉";
    document.getElementById("feedback").className =
      "text-green-500 font-bold text-center mt-2";
    setTimeout(() => {
      currentQ++;
      loadQuiz();
      document.getElementById("feedback").innerText = "";
    }, 1000);
  } else {
    btn.classList.add("bg-red-500", "text-white");
    document.getElementById("feedback").innerText = "Gợi ý: " + q.hint;
    document.getElementById("feedback").className =
      "text-red-500 font-bold text-center mt-2";
  }
}
function resetQuiz() {
  currentQ = 0;
  document.getElementById("result-box").classList.add("hidden");
  document.getElementById("question-box").classList.remove("hidden");
  loadQuiz();
}
loadQuiz();
