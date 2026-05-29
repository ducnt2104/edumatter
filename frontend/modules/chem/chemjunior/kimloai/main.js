document.documentElement.classList.add("dark");
// 1. REACTIVITY SERIES LOGIC
const metals = [
  { sym: "K", name: "Potassium", group: "Mạnh" },
  { sym: "Na", name: "Sodium", group: "Mạnh" },
  { sym: "Ca", name: "Calcium", group: "Mạnh" },
  { sym: "Mg", name: "Magnesium", group: "Trung bình" },
  { sym: "Al", name: "Aluminium", group: "Trung bình" },
  { sym: "Zn", name: "Zinc", group: "Trung bình" },
  { sym: "Fe", name: "Iron", group: "Trung bình" },
  { sym: "Pb", name: "Lead", group: "Trung bình" },
  { sym: "(H)", name: "Hydrogen", group: "Chuẩn" },
  { sym: "Cu", name: "Copper", group: "Yếu" },
  { sym: "Ag", name: "Silver", group: "Yếu" },
  { sym: "Au", name: "Gold", group: "Yếu" },
];

const slider = document.getElementById("reactivity-slider");
const labelContainer = document.getElementById("reactivity-labels");

// Render labels
metals.forEach((m) => {
  const el = document.createElement("div");
  el.className = "text-center w-8 text-sm transition-all duration-300";
  el.innerText = m.sym;
  if (m.sym === "(H)") el.className += " text-slate-400 font-normal";
  labelContainer.appendChild(el);
});

slider.addEventListener("input", (e) => {
  const val = parseInt(e.target.value);
  const max = 110;
  const index = Math.floor((val / max) * metals.length);
  const safeIndex = Math.min(index, metals.length - 1);

  const m = metals[safeIndex];
  const title = document.getElementById("r-title");
  const desc = document.getElementById("r-desc");

  // Highlight active label
  const labels = labelContainer.children;
  for (let l of labels) l.classList.remove("text-blue-600", "scale-150");
  labels[safeIndex].classList.add("text-blue-600", "scale-150");

  title.innerText = `${m.sym} - Kim loại ${m.group}`;

  if (m.group === "Mạnh") {
    desc.innerText =
      "Mạnh nhất. Tác dụng với nước ngay nhiệt độ thường giải phóng H₂.";
    title.className = "font-bold text-2xl text-red-600 mb-2";
  } else if (m.group === "Trung bình") {
    desc.innerText =
      "Tác dụng với O₂ khi nung nóng. Đẩy H ra khỏi Acid HCl/H₂SO₄ loãng.";
    title.className = "font-bold text-2xl text-yellow-600 mb-2";
  } else if (m.group === "Yếu") {
    desc.innerText =
      "Không tác dụng với Acid loãng. Bền trong không khí (Vàng, Bạc).";
    title.className = "font-bold text-2xl text-blue-600 mb-2";
  } else {
    desc.innerText = "Nguyên tố làm mốc so sánh.";
    title.className = "font-bold text-2xl text-slate-500 mb-2";
  }
});

// 2. BLAST FURNACE LOGIC (Step-by-Step)
let furnaceStep = 0;
const furnaceInstructions = [
  "BƯỚC 1: Nạp nguyên liệu (Quặng sắt, Than cốc, Đá vôi) từ đỉnh lò xuống.",
  "BƯỚC 2: Thổi không khí nóng từ dưới lên. Carbon cháy tạo CO₂ và nhiệt lượng lớn.",
  "BƯỚC 3: Khí CO₂ đi lên gặp than cốc nóng đỏ bị khử thành khí CO (Chất khử chính).",
  "BƯỚC 4: Khí CO khử quặng sắt (Fe₂O₃) thành Sắt kim loại ở thân lò.",
  "BƯỚC 5: Sắt nóng chảy chảy xuống đáy lò. Tháo Gang và Xỉ ra ngoài.",
];

function nextFurnaceStep() {
  if (furnaceStep < 5) furnaceStep++;
  updateFurnaceUI();
}

function resetFurnace() {
  furnaceStep = 0;
  updateFurnaceUI();
}

function updateFurnaceUI() {
  document.getElementById("step-counter").innerText = `BƯỚC ${furnaceStep}/5`;
  const text =
    furnaceStep === 0
      ? 'Nhấn "Bắt đầu" để nạp nguyên liệu...'
      : furnaceInstructions[furnaceStep - 1];
  document.getElementById("furnace-instruction").innerText = text;
  const btn = document.getElementById("btn-furnace-next");
  const btnIcon = btn.querySelector("i");
  const btnText = btn.querySelector("span");

  if (furnaceStep === 5) {
    btnText.innerText = "Hoàn thành";
    btnIcon.className = "fas fa-check";
    btn.disabled = true;
    btn.classList.add("opacity-50", "cursor-not-allowed");
  } else {
    btnText.innerText = furnaceStep === 0 ? "Bắt đầu" : "Bước tiếp theo";
    btnIcon.className = "fas fa-play";
    btn.disabled = false;
    btn.classList.remove("opacity-50", "cursor-not-allowed");
  }

  // Animations based on Step
  const matLayer = document.getElementById("material-layer");
  const iron = document.getElementById("molten-iron");
  const blastL = document.getElementById("air-blast-left");
  const blastR = document.getElementById("air-blast-right");
  const stream = document.getElementById("iron-stream");
  const pool = document.getElementById("iron-pool");

  // Reset all first
  if (furnaceStep === 0) {
    matLayer.style.height = "0";
    blastL.style.width = "0";
    blastR.style.width = "0";
    iron.style.height = "0";
    stream.style.height = "0";
    pool.style.width = "0";
    pool.style.height = "0";
    document.querySelectorAll('[id^="eq-"]').forEach((el) => {
      el.classList.add("opacity-30");
      el.classList.remove("text-white", "font-bold");
    });
    document.getElementById("gas-particles").innerHTML = "";
    return;
  }

  if (furnaceStep >= 1) {
    matLayer.style.height = "60%";
  }
  if (furnaceStep >= 2) {
    blastL.style.width = "60px";
    blastR.style.width = "60px";
    highlightEq("eq-1");
  }
  if (furnaceStep >= 3) {
    highlightEq("eq-2");
    // Add bubbles
    const gasContainer = document.getElementById("gas-particles");
    if (gasContainer.children.length === 0) {
      for (let i = 0; i < 8; i++) {
        const d = document.createElement("div");
        d.className =
          "absolute bg-white w-2 h-2 rounded-full opacity-60 bubble";
        d.style.left = Math.random() * 80 + 10 + "%";
        d.style.animationDelay = Math.random() + "s";
        gasContainer.appendChild(d);
      }
    }
  }
  if (furnaceStep >= 4) {
    highlightEq("eq-3");
    iron.style.height = "30px"; // Iron accumulates
    matLayer.style.height = "50%"; // Consumed a bit
  }
  if (furnaceStep >= 5) {
    highlightEq("eq-4");
    stream.style.height = "80px";
    setTimeout(() => {
      pool.style.width = "120px";
      pool.style.height = "15px";
    }, 500);
  }
}

function highlightEq(id) {
  document.querySelectorAll('[id^="eq-"]').forEach((el) => {
    el.classList.add("opacity-30");
    el.classList.remove("text-white", "font-bold");
  });
  const el = document.getElementById(id);
  el.classList.remove("opacity-30");
  el.classList.add("text-white", "font-bold");
}

// 3. EXPERIMENT TAB LOGIC
function switchExp(id) {
  document
    .querySelectorAll(".exp-content")
    .forEach((el) => el.classList.add("hidden"));
  document.getElementById(`exp-${id}`).classList.remove("hidden");
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document.querySelector(`.tab-btn[data-id="${id}"]`).classList.add("active");
}

// 4. EXPERIMENT SIMULATION FUNCTIONS

// Exp 1: Na + Cl2
function runExp1() {
  const spoon = document.getElementById("spoon-1");
  const fire = document.getElementById("fire-1");
  const smoke = document.getElementById("smoke-1");
  const flask = document.getElementById("flask-1");

  // Reset style first
  fire.style.opacity = "0";
  smoke.style.opacity = "0";
  spoon.style.transform = "translateY(-120%)";
  flask.classList.add("bg-yellow-400/30");

  // Heat
  setTimeout(() => {
    fire.style.opacity = "1";
    setTimeout(() => {
      // Move down
      spoon.style.transform = "translateY(100px)";
      setTimeout(() => {
        // React
        fire.style.transform = "scale(2.5)"; // Flare up
        flask.classList.remove("bg-yellow-400/30"); // Gas consumed
        setTimeout(() => {
          fire.style.opacity = "0";
          fire.style.transform = "scale(1)";
          smoke.style.opacity = "0.9";
          document.getElementById("res-1").classList.remove("hidden");
        }, 800);
      }, 1000);
    }, 800);
  }, 100);
}

// Exp 2: Fe + CuSO4
function runExp2() {
  const nail = document.getElementById("nail-2");
  const coat = document.getElementById("coat-2");
  const liquid = document.getElementById("liquid-2");

  // Reset
  nail.style.top = "-128px";
  coat.style.height = "0";
  liquid.style.backgroundColor = "rgba(59, 130, 246, 0.6)";

  setTimeout(() => {
    nail.style.top = "10px"; // Drop in
    setTimeout(() => {
      coat.style.height = "100%"; // Red coating appears
      liquid.style.backgroundColor = "rgba(180, 255, 180, 0.4)"; // Turns pale green
      document.getElementById("res-2").classList.remove("hidden");
    }, 1500);
  }, 500);
}

// 5. QUIZ DATA & LOGIC (Updated exact 10 questions provided)
const questions = [
  {
    q: "Vì sao dây điện cao thế thường làm bằng Nhôm (Al) thay vì Bạc (Ag) dù Bạc dẫn điện tốt hơn?",
    opts: [
      "Nhôm nhẹ hơn và rẻ tiền hơn",
      "Nhôm dẫn điện tốt hơn Bạc",
      "Nhôm bền hơn trong không khí",
      "Nhôm có nhiệt độ nóng chảy cao hơn",
    ],
    a: 0,
    exp: "Nhôm nhẹ giúp giảm trọng lượng đường dây, giảm chi phí cột điện và rẻ hơn Bạc rất nhiều.",
  },
  {
    q: "Dựa vào tính chất vật lý nào người ta dùng Vonfram (W) làm dây tóc bóng đèn?",
    opts: [
      "Tính dẫn điện tốt nhất",
      "Nhiệt độ nóng chảy rất cao (hơn 3000°C)",
      "Tính dẻo cao nhất",
      "Có ánh kim đẹp",
    ],
    a: 1,
    exp: "Vonfram có nhiệt độ nóng chảy khoảng 3422°C, không bị nóng chảy khi bóng đèn phát sáng.",
  },
  {
    q: "Phương trình hóa học đúng khi đốt bột Nhôm trong khí Oxygen?",
    opts: [
      "Al + O₂ → AlO₂",
      "2Al + 3O₂ → Al₂O₃",
      "4Al + 3O₂ → 2Al₂O₃",
      "Al + O → AlO",
    ],
    a: 2,
    exp: "Tạo thành Nhôm Oxide: 4Al + 3O₂ → 2Al₂O₃.",
  },
  {
    q: "Hiện tượng gì xảy ra khi cho mẩu Natri vào nước có pha Phenolphthalein?",
    opts: [
      "Không hiện tượng",
      "Dung dịch hóa xanh, sủi bọt",
      "Viên Na chạy tròn, sủi bọt khí, dd hóa hồng",
      "Kết tủa trắng xuất hiện",
    ],
    a: 2,
    exp: "Na + H₂O → NaOH + H₂. NaOH là kiềm làm Phenolphthalein chuyển màu hồng.",
  },
  {
    q: "Sắp xếp các kim loại sau theo chiều hoạt động hóa học tăng dần: Cu, Na, Al, Ag, Fe?",
    opts: [
      "Ag, Cu, Fe, Al, Na",
      "Na, Al, Fe, Cu, Ag",
      "Cu, Ag, Fe, Al, Na",
      "Fe, Al, Cu, Ag, Na",
    ],
    a: 0,
    exp: "Chiều tăng dần (từ yếu đến mạnh): Ag < Cu < Fe < Al < Na.",
  },
  {
    q: "Để làm sạch Đồng có lẫn tạp chất là Sắt, ta ngâm hỗn hợp vào dung dịch nào?",
    opts: ["Dung dịch HCl dư", "Dung dịch NaOH", "Dung dịch NaCl", "Nước cất"],
    a: 0,
    exp: "Sắt phản ứng với HCl tan ra, còn Đồng không phản ứng với HCl nên giữ nguyên.",
  },
  {
    q: "Sự khác biệt chính về thành phần giữa Gang và Thép là gì?",
    opts: [
      "Gang chứa nhiều Sắt hơn Thép",
      "Gang chứa 2-5% Carbon, Thép dưới 2% Carbon",
      "Thép chứa nhiều Carbon hơn Gang",
      "Gang không chứa Carbon",
    ],
    a: 1,
    exp: "Hàm lượng Carbon quyết định tính chất: Gang giòn (nhiều C), Thép dẻo và đàn hồi (ít C).",
  },
  {
    q: "Tại sao than hoạt tính được dùng trong mặt nạ phòng độc?",
    opts: [
      "Vì nó cháy được",
      "Vì nó có tính khử mạnh",
      "Vì nó có khả năng hấp phụ khí độc cao",
      "Vì nó rẻ tiền",
    ],
    a: 2,
    exp: "Cấu trúc xốp rỗng giúp than hoạt tính giữ lại các phân tử khí độc trên bề mặt (hấp phụ).",
  },
  {
    q: "Liên kết trong phân tử NaCl được hình thành như thế nào?",
    opts: [
      "Dùng chung electron",
      "Na nhường e tạo Na⁺, Cl nhận e tạo Cl⁻",
      "Lực hút van der Waals",
      "Liên kết kim loại",
    ],
    a: 1,
    exp: "Kim loại điển hình (Na) nhường e cho Phi kim điển hình (Cl) tạo liên kết Ion.",
  },
  {
    q: "So sánh tính chất của Oxide tạo ra khi đốt Lưu huỳnh (S) và Magie (Mg)?",
    opts: [
      "Cả 2 đều là Oxide Base",
      "Cả 2 đều là Oxide Acid",
      "S tạo Oxide Acid, Mg tạo Oxide Base",
      "S tạo Oxide Base, Mg tạo Oxide Acid",
    ],
    a: 2,
    exp: "S là phi kim → SO₂ (Oxide Acid). Mg là kim loại → MgO (Oxide Base).",
  },
];

let qIdx = 0;
let score = 0;

function loadQuiz() {
  if (qIdx >= questions.length) {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("quiz-result").classList.remove("hidden");
    document.getElementById("final-score").innerText = `${score}/10`;
    return;
  }

  const q = questions[qIdx];
  document.getElementById("q-text").innerText = `${qIdx + 1}. ${q.q}`;
  document.getElementById("q-progress").innerText =
    `Câu ${qIdx + 1}/${questions.length}`;
  document.getElementById("q-bar").style.width =
    `${(qIdx / questions.length) * 100}%`;
  document.getElementById("q-score").innerText = `Điểm: ${score}`;

  const optsDiv = document.getElementById("q-options");
  optsDiv.innerHTML = "";
  document.getElementById("q-feedback").classList.add("hidden");
  document.getElementById("q-next").classList.add("hidden");

  q.opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className =
      "w-full text-left p-5 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 transition font-medium text-slate-700 dark:text-slate-200";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i, btn);
    optsDiv.appendChild(btn);
  });
}

function checkAnswer(i, btn) {
  const q = questions[qIdx];
  const allBtns = document.getElementById("q-options").children;
  for (let b of allBtns) b.disabled = true;

  const feedback = document.getElementById("q-feedback");
  feedback.classList.remove("hidden");

  if (i === q.a) {
    score++;
    btn.classList.add("bg-green-100", "border-green-500", "text-green-800");
    btn.innerHTML +=
      ' <i class="fas fa-check-circle float-right text-green-600 text-xl"></i>';
    feedback.className =
      "mt-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800";
    feedback.innerHTML = `<strong class="block mb-1"><i class="fas fa-check mr-2"></i> Chính xác!</strong> ${q.exp}`;
  } else {
    btn.classList.add("bg-red-100", "border-red-500", "text-red-800");
    btn.innerHTML +=
      ' <i class="fas fa-times-circle float-right text-red-600 text-xl"></i>';

    // Highlight correct
    const correctBtn = allBtns[q.a];
    correctBtn.classList.add(
      "bg-green-100",
      "border-green-500",
      "text-green-800",
    );
    correctBtn.innerHTML +=
      ' <i class="fas fa-check-circle float-right text-green-600 text-xl"></i>';

    feedback.className =
      "mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800";
    feedback.innerHTML = `<strong class="block mb-1"><i class="fas fa-times mr-2"></i> Sai rồi!</strong> ${q.exp}`;
  }

  document.getElementById("q-next").classList.remove("hidden");
}

function nextQuestion() {
  qIdx++;
  loadQuiz();
}

function resetQuiz() {
  qIdx = 0;
  score = 0;
  document.getElementById("quiz-container").classList.remove("hidden");
  document.getElementById("quiz-result").classList.add("hidden");
  loadQuiz();
}

// Initialize
loadQuiz();

// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
