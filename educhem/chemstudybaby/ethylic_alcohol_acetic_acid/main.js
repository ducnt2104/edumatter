document.documentElement.classList.add("dark");
// --- 1. THEME TOGGLE ---
function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}

// --- 2. ALCOHOL SLIDER SIMULATION ---
const range = document.getElementById("alcoholRange");
const display = document.getElementById("alcoholDegreeDisplay");
const ethanolBar = document.getElementById("ethanolBar");
const waterBar = document.getElementById("waterBar");
const ethVol = document.getElementById("ethanolVol");
const watVol = document.getElementById("waterVol");

range.addEventListener("input", (e) => {
  const val = e.target.value;
  display.textContent = `${val}°`;
  ethanolBar.style.height = `${val}%`;
  waterBar.style.height = `${100 - val}%`;
  ethVol.textContent = val;
  watVol.textContent = 100 - val;
});

// --- 3. ACETIC ACID SIMULATION ---
function simulateAcid(type) {
  const box = document.getElementById("acidReactionBox");
  const text = document.getElementById("acidReactionText");
  const icon = document.getElementById("mainIcon");
  const eqn = document.getElementById("reactionEquation");
  const bubbles = document.getElementById("bubbleEffect");

  // Reset states
  icon.className = "fas fa-flask text-6xl mb-3 transition-all duration-500";
  bubbles.classList.add("hidden");
  eqn.style.opacity = "0";

  if (type === "litmus") {
    icon.classList.add(
      "text-red-500",
      "drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]",
    );
    text.innerText = "Quỳ tím hóa đỏ";
    eqn.innerText = "Tính acid yếu";
    eqn.style.opacity = "1";
  } else if (type === "zinc") {
    bubbles.classList.remove("hidden");
    text.innerText = "Sủi bọt khí Hydro";
    eqn.innerText = "2CH₃COOH + Zn → (CH₃COO)₂Zn + H₂↑";
    eqn.style.opacity = "1";
  } else if (type === "caco3") {
    bubbles.classList.remove("hidden");
    text.innerText = "Sủi bọt khí CO₂";
    eqn.innerText = "2CH₃COOH + CaCO₃ → (CH₃COO)₂Ca + H₂O + CO₂↑";
    eqn.style.opacity = "1";
  } else {
    icon.classList.add("text-brand-green");
    text.innerText = "CH₃COOH";
  }
}

// --- 4. VIRTUAL LAB LOGIC (State Machine) ---
const experiments = [
  {
    id: 0,
    title: "Đốt cháy Ethanol (C₂H₅OH)",
    desc: "Phản ứng cháy của Ethanol tạo ra ngọn lửa màu xanh nhạt, tỏa nhiều nhiệt.",
    steps: ["Chuẩn bị Ethanol trong chén sứ", "Châm lửa"],
    result:
      "Ethanol cháy với ngọn lửa màu xanh mờ, không khói. Phản ứng tỏa nhiệt mạnh. \nPT: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O",
    type: "fire",
    liquidColor: "#a5f3fc", // Màu trắng trong
  },
  {
    id: 1,
    title: "Ethanol tác dụng với Sodium (Na)",
    desc: "Thả mẩu Natri vào ống nghiệm chứa Ethanol nguyên chất.",
    steps: ["Cho mẩu Natri vào Ethanol", "Quan sát khí thoát ra"],
    result:
      "Mẩu Natri tan dần, sủi bọt khí không màu (H₂). \nPT: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑",
    type: "bubbles",
    solidColor: "#cbd5e1", // Màu kim loại Na
    liquidColor: "#a5f3fc",
  },
  {
    id: 2,
    title: "Tính Acid của Axit Axetic (CH₃COOH)",
    desc: "Sử dụng quỳ tím để kiểm tra tính axit.",
    steps: ["Nhúng quỳ tím vào dung dịch CH₃COOH", "Quan sát đổi màu"],
    result:
      "Giấy quỳ tím chuyển sang màu đỏ (hoặc hồng cam), chứng tỏ dung dịch có tính axit yếu.",
    type: "litmus",
    liquidColor: "#f1f5f9", // Màu trong suốt axit
  },
  {
    id: 3,
    title: "Phản ứng Ester hóa",
    desc: "Đun nóng CH₃COOH với C₂H₅OH có H₂SO₄ đặc làm xúc tác.",
    steps: ["Trộn Axit và Rượu", "Thêm H₂SO₄ đặc", "Đun nóng"],
    result:
      "Tạo ra chất lỏng nhẹ hơn nước, có mùi thơm (Ethyl Acetate). \nPT: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O",
    type: "mix",
    liquidColor: "#fcd34d", // Hơi vàng nhẹ sau phản ứng
  },
  {
    id: 4,
    title: "CH₃COOH + Kim loại (Mg)",
    desc: "Cho dây Magie vào ống nghiệm chứa Axit Axetic.",
    steps: ["Thả dây Mg vào axit", "Quan sát hiện tượng"],
    result:
      "Dây Mg tan dần, có khí không màu thoát ra (H₂). \nPT: 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂↑",
    type: "bubbles_mg",
    solidColor: "#94a3b8", // Màu xám Mg
    liquidColor: "#f1f5f9",
  },
  {
    id: 5,
    title: "CH₃COOH + Oxide Kim loại (CuO)",
    desc: "Cho bột đồng(II) oxide vào Axit Axetic và đun nhẹ.",
    steps: ["Cho bột CuO đen vào axit", "Lắc đều và đun nhẹ"],
    result:
      "Bột đen CuO tan dần, dung dịch chuyển sang màu xanh lam (muối đồng). \nPT: 2CH₃COOH + CuO → (CH₃COO)₂Cu + H₂O",
    type: "color_change",
    solidColor: "#1e293b", // Màu đen CuO
    liquidColor: "#f1f5f9", // Ban đầu trong
    finalColor: "#3b82f6", // Màu xanh lam sau phản ứng
  },
  {
    id: 6,
    title: "Phản ứng cháy của CH₃COOH",
    desc: "Quan sát kỹ hơn sự tạo thành CO₂ và H₂O.",
    steps: ["Đốt cháy Acid Acetic", "Hứng sản phẩm cháy"],
    result:
      "Tạo ra khí CO₂ làm đục nước vôi trong. \nPT: CH₃COOH + 2O₂ → 2CO₂ + 2H₂O",
    type: "fire",
    liquidColor: "#a5f3fc",
  },
];

let currentLabId = 0;
let isAnimating = false;

// DOM Elements
const stage = document.getElementById("labStage");
const titleEl = document.getElementById("expTitle");
const descEl = document.getElementById("expDesc");
const stepsEl = document.getElementById("expSteps");
const resultBox = document.getElementById("expResultBox");
const resultText = document.getElementById("expResultText");
const actionBtn = document.getElementById("actionBtn");
const tabs = document.querySelectorAll(".lab-tab");

// 1. Khởi tạo
function init() {
  switchLab(0);

  actionBtn.addEventListener("click", runExperiment);
}

// 2. Chuyển đổi Lab
function switchLab(index) {
  if (isAnimating) return; // Chặn khi đang chạy
  currentLabId = index;
  const data = experiments[index];

  // Update Tabs UI
  tabs.forEach((t, i) => {
    if (i === index) t.classList.add("active");
    else t.classList.remove("active");
  });

  // Update Info Text
  titleEl.innerText = data.title;
  descEl.innerText = data.desc;

  // Update Steps List
  stepsEl.innerHTML = data.steps
    .map(
      (step, i) =>
        `<div class="flex items-center text-sm">
        <span class="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs mr-3">${i + 1}</span>
        ${step}
       </div>`,
    )
    .join("");

  // Reset Result Box
  resultBox.classList.add("hidden");
  actionBtn.innerText = "Bắt đầu thí nghiệm";
  actionBtn.disabled = false;
  actionBtn.classList.remove("bg-gray-500");
  actionBtn.classList.add("bg-brand-green");

  // Reset Visual Stage
  renderVisuals(data);
}

// 3. Vẽ hình ảnh minh họa (Flask, Liquid, etc.)
function renderVisuals(data) {
  let innerHTML = "";

  // Cấu trúc bình cầu cơ bản
  const flaskBase = `
    <div class="flask-container">
      <div class="flame" id="flameElement"></div>
      <div class="flask-neck">
        ${data.type === "litmus" ? '<div class="litmus-paper" id="litmusPaper"></div>' : ""}
      </div>
      <div class="flask-body">
        <div class="flask-liquid" id="liquid" style="background: ${data.liquidColor}"></div>
        ${
          data.type === "bubbles" ||
          data.type === "bubbles_mg" ||
          data.type === "color_change"
            ? `<div class="solid-piece" id="solidPiece" style="background: ${data.solidColor}"></div>`
            : ""
        }
        <div id="bubblesContainer"></div>
      </div>
    </div>
  `;

  stage.innerHTML = flaskBase;
}

// 4. Chạy Thí Nghiệm (Animation Logic)
function runExperiment() {
  if (isAnimating) return;
  isAnimating = true;
  actionBtn.disabled = true;
  actionBtn.innerText = "Đang phản ứng...";

  const data = experiments[currentLabId];
  const liquid = document.getElementById("liquid");
  const flame = document.getElementById("flameElement");

  // Logic từng loại phản ứng
  if (data.type === "fire") {
    // Hiệu ứng cháy
    flame.classList.add("burning");
    setTimeout(() => finishExperiment(data), 3000);
  } else if (data.type === "bubbles" || data.type === "bubbles_mg") {
    // Hiệu ứng sủi bọt + tan chất rắn
    createBubbles();
    const solid = document.getElementById("solidPiece");
    if (solid) solid.classList.add("dissolved"); // Tan biến
    setTimeout(() => finishExperiment(data), 3000);
  } else if (data.type === "litmus") {
    // Nhúng quỳ tím
    const paper = document.getElementById("litmusPaper");
    paper.style.transform = "translateY(50px)"; // Nhúng xuống
    setTimeout(() => {
      paper.style.backgroundColor = "#ef4444"; // Hóa đỏ
      setTimeout(() => {
        paper.style.transform = "translateY(0px)"; // Kéo lên
        finishExperiment(data);
      }, 1000);
    }, 1000);
  } else if (data.type === "mix") {
    // Đổi màu nhẹ / tách lớp
    liquid.style.height = "70%"; // Thêm dung dịch
    setTimeout(() => {
      liquid.style.background = "#fbbf24"; // Đổi màu ester
      finishExperiment(data);
    }, 2000);
  } else if (data.type === "color_change") {
    // Tan chất rắn + Đổi màu dung dịch
    const solid = document.getElementById("solidPiece");
    if (solid) solid.classList.add("dissolved");

    setTimeout(() => {
      liquid.style.background = data.finalColor; // Hóa xanh
      finishExperiment(data);
    }, 2000);
  }
}

// Hàm tạo bọt khí
function createBubbles() {
  const container = document.getElementById("bubblesContainer");
  const interval = setInterval(() => {
    const b = document.createElement("div");
    b.classList.add("bubble");
    b.style.left = Math.random() * 80 + 10 + "px";
    b.style.width = Math.random() * 10 + 5 + "px";
    b.style.height = b.style.width;
    container.appendChild(b);

    // Xóa bọt sau khi bay lên
    setTimeout(() => b.remove(), 2000);
  }, 100);

  // Dừng tạo bọt sau 2.5s
  setTimeout(() => clearInterval(interval), 2500);
}

// 5. Kết thúc thí nghiệm & Hiện kết quả
function finishExperiment(data) {
  isAnimating = false;
  resultText.innerText = data.result;
  resultBox.classList.remove("hidden");
  resultBox.classList.add("animate-fade-in-up"); // Cần thêm keyframe nếu muốn đẹp hơn

  actionBtn.innerText = "Làm lại thí nghiệm";
  actionBtn.disabled = false;
  actionBtn.classList.remove("bg-brand-green");
  actionBtn.classList.add("bg-gray-600");

  // Đổi hành động nút thành Reset
  actionBtn.onclick = () => {
    switchLab(currentLabId); // Reset về trạng thái đầu
    actionBtn.onclick = runExperiment; // Gán lại hàm chạy
  };
}

// Chạy khởi tạo khi trang load
document.addEventListener("DOMContentLoaded", init);
// --- 5. QUIZ LOGIC (Gamified) ---
const quizData = [
  {
    q: "Độ cồn là gì?",
    a: [
      "Số gam rượu trong 100g nước",
      "Số ml rượu nguyên chất trong 100ml dung dịch",
      "Khối lượng riêng của rượu",
      "Nhiệt độ sôi của rượu",
    ],
    correct: 1,
  },
  {
    q: "Sản phẩm cháy của Ethanol là gì?",
    a: ["CO và H2O", "Chỉ có CO2", "CO2 và H2O", "Muối cacbonat"],
    correct: 2,
  },
  {
    q: "Giấm ăn là dung dịch Acid Acetic có nồng độ khoảng bao nhiêu?",
    a: ["2% - 5%", "10% - 15%", "20% - 25%", "Trên 30%"],
    correct: 0,
  },
  {
    q: "Chất nào dùng để nhận biết Acid Acetic và Rượu Etylic?",
    a: ["Quỳ tím", "Sodium", "Oxi", "Nước"],
    correct: 0,
  },
  {
    q: "Phản ứng giữa Rượu và Axit gọi là gì?",
    a: [
      "Phản ứng cháy",
      "Phản ứng xà phòng hóa",
      "Phản ứng ester hóa",
      "Phản ứng trung hòa",
    ],
    correct: 2,
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const data = quizData[currentQuestion];
  document.getElementById("questionCounter").innerText =
    `Câu hỏi ${currentQuestion + 1}/${quizData.length}`;
  document.getElementById("questionText").innerText = data.q;
  document.getElementById("quizProgress").style.width =
    `${(currentQuestion / quizData.length) * 100}%`;

  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  data.a.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className =
      "w-full text-left p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-brand-blue hover:text-white transition-all font-medium";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(idx);
    container.appendChild(btn);
  });
}

function checkAnswer(idx) {
  const isCorrect = idx === quizData[currentQuestion].correct;
  const overlay = document.getElementById("feedbackOverlay");
  const icon = document.getElementById("feedbackIcon");
  const title = document.getElementById("feedbackTitle");
  const text = document.getElementById("feedbackText");

  overlay.classList.remove("hidden");

  if (isCorrect) {
    score += 10;
    icon.innerHTML = "🎉";
    title.innerText = "Chính xác!";
    title.className = "text-2xl font-bold mb-2 text-green-500";
    text.innerText = "Bạn đã nắm vững kiến thức này.";
  } else {
    icon.innerHTML = "😅";
    title.innerText = "Sai rồi!";
    title.className = "text-2xl font-bold mb-2 text-red-500";
    text.innerText = `Đáp án đúng là: ${quizData[currentQuestion].a[quizData[currentQuestion].correct]}`;
  }
}

function nextQuestion() {
  document.getElementById("feedbackOverlay").classList.add("hidden");
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("scoreScreen").classList.remove("hidden");
  document.getElementById("finalScore").innerText =
    `${score}/${quizData.length * 10}`;
  document.getElementById("quizProgress").style.width = "100%";
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("scoreScreen").classList.add("hidden");
  loadQuestion();
}

// Init Quiz
loadQuestion();
