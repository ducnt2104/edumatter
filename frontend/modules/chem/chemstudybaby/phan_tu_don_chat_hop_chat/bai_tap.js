// --- DATA ---
// Mapping index: A=0, B=1, C=2, D=3
const sectionTitles = {
  1: "PHẦN 1: NHẬN BIẾT",
  2: "PHẦN 2: THÔNG HIỂU",
  3: "PHẦN 3: VẬN DỤNG",
  4: "PHẦN 4: VẬN DỤNG CAO",
};

const questionData = [
  // PHẦN 1
  {
    id: 1,
    section: 1,
    q: "Hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hóa học của chất gọi là:",
    options: ["A. Proton", "B. Electron", "C. Phân tử", "D. Hạt nhân"],
    correct: 2,
  },
  {
    id: 2,
    section: 1,
    q: "Đơn chất là những chất được tạo thành từ:",
    options: [
      "A. Một nguyên tố hóa học",
      "B. Hai nguyên tố hóa học trở lên",
      "C. Các hạt neutron",
      "D. Hỗn hợp nhiều chất",
    ],
    correct: 0,
  },
  {
    id: 3,
    section: 1,
    q: "Chất nào sau đây là hợp chất?",
    options: [
      "A. Khí oxygen (O<sub>2</sub>)",
      "B. Kim loại đồng (Cu)",
      "C. Nước (H<sub>2</sub>O)",
      "D. Khí nitrogen (N<sub>2</sub>)",
    ],
    correct: 2,
  },
  {
    id: 4,
    section: 1,
    q: "Liên kết ion được hình thành bởi:",
    options: [
      "A. Sự dùng chung các electron",
      "B. Lực hút tĩnh điện giữa các ion trái dấu",
      "C. Sự bay hơi của các nguyên tử",
      "D. Lực hút giữa các neutron",
    ],
    correct: 1,
  },
  {
    id: 5,
    section: 1,
    q: "Liên kết cộng hóa trị thường được hình thành giữa:",
    options: [
      "A. Nguyên tử kim loại và phi kim",
      "B. Các nguyên tử phi kim với nhau",
      "C. Các nguyên tử kim loại với nhau",
      "D. Các hạt khí hiếm với nhau",
    ],
    correct: 1,
  },
  {
    id: 6,
    section: 1,
    q: "Trong các hợp chất, nguyên tố Hydrogen (H) luôn được quy ước có hóa trị là:",
    options: ["A. I", "B. II", "C. III", "D. IV"],
    correct: 0,
  },
  {
    id: 7,
    section: 1,
    q: "Công thức hóa học của khí carbon dioxide gồm 1 nguyên tử C và 2 nguyên tử O là:",
    options: [
      "A. CO",
      "B. C<sub>2</sub>O",
      "C. CO<sub>2</sub>",
      "D. C<sub>2</sub>O<sub>2</sub>",
    ],
    correct: 2,
  },
  {
    id: 8,
    section: 1,
    q: "Khối lượng phân tử được tính bằng:",
    options: [
      "A. Tổng số proton trong phân tử",
      "B. Tổng khối lượng của các nguyên tử có trong phân tử (theo đơn vị amu)",
      "C. Khối lượng của nguyên tử lớn nhất",
      "D. Số lượng electron ở lớp vỏ ngoài cùng",
    ],
    correct: 1,
  },
  {
    id: 9,
    section: 1,
    q: "Chất nào sau đây là đơn chất kim loại?",
    options: [
      "A. Khí hydrogen (H<sub>2</sub>)",
      "B. Muối ăn (NaCl)",
      "C. Nhôm (Al)",
      "D. Ammonia (NH<sub>3</sub>)",
    ],
    correct: 2,
  },
  {
    id: 10,
    section: 1,
    q: "Hóa trị là con số biểu thị:",
    options: [
      "A. Khối lượng của nguyên tử",
      "B. Khả năng liên kết của nguyên tử này với nguyên tử khác",
      "C. Số lớp electron của nguyên tử",
      "D. Số hạt neutron trong hạt nhân",
    ],
    correct: 1,
  },

  // PHẦN 2
  {
    id: 11,
    section: 2,
    q: 'Tại sao khí hiếm như Neon (Ne) được coi là một dạng "phân tử" đặc biệt?',
    options: [
      "A. Vì nó có nhiều nguyên tử liên kết với nhau",
      "B. Vì nó tồn tại độc lập dưới dạng đơn nguyên tử nhưng vẫn mang đầy đủ tính chất của chất",
      "C. Vì nó dễ dàng liên kết với các nguyên tố khác",
      "D. Vì nó mang điện tích dương",
    ],
    correct: 1,
  },
  {
    id: 12,
    section: 2,
    q: "Trong phân tử muối ăn (NaCl), nguyên tử Sodium (Na) đã:",
    options: [
      "A. Nhường 1 electron cho Chlorine để tạo ion dương",
      "B. Nhận 1 electron từ Chlorine để tạo ion âm",
      "C. Dùng chung 1 cặp electron với Chlorine",
      "D. Biến đổi thành nguyên tử khác",
    ],
    correct: 0,
  },
  {
    id: 13,
    section: 2,
    q: "Phân tử nước (H<sub>2</sub>O) được hình thành bằng liên kết cộng hóa trị vì:",
    options: [
      "A. Có sự nhường và nhận electron giữa H và O",
      "B. Có sự dùng chung các cặp electron giữa nguyên tử H và O",
      "C. H và O hút nhau bằng lực tĩnh điện",
      "D. O là kim loại còn H là phi kim",
    ],
    correct: 1,
  },
  {
    id: 14,
    section: 2,
    q: "Khối lượng phân tử của khí methane (CH<sub>4</sub>) là bao nhiêu? (Biết C=12, H=1)",
    options: ["A. 13 amu", "B. 14 amu", "C. 16 amu", "D. 20 amu"],
    correct: 2,
  },
  {
    id: 15,
    section: 2,
    q: "Đặc điểm chung của các chất có liên kết ion (như muối ăn) là:",
    options: [
      "A. Thường ở thể khí ở nhiệt độ phòng",
      "B. Có nhiệt độ nóng chảy thấp",
      "C. Khó tan trong nước",
      "D. Có nhiệt độ nóng chảy cao và dẫn điện khi tan trong nước",
    ],
    correct: 3,
  },
  {
    id: 16,
    section: 2,
    q: "Dựa vào quy tắc hóa trị, trong hợp chất P<sub>2</sub>O<sub>5</sub>, Phosphorus (P) có hóa trị là bao nhiêu? (Biết O hóa trị II)",
    options: ["A. III", "B. IV", "C. V", "D. II"],
    correct: 2,
  },
  {
    id: 17,
    section: 2,
    q: "Công thức hóa học nào sau đây biểu diễn một hợp chất được tạo bởi hai nguyên tố hóa học?",
    options: ["A. O<sub>3</sub>", "B. Fe", "C. HCl", "D. Cl<sub>2</sub>"],
    correct: 2,
  },
  {
    id: 18,
    section: 2,
    q: "Sự khác biệt về tính bền nhiệt giữa đường (chất cộng hóa trị) và muối (chất ion) là:",
    options: [
      "A. Muối dễ bị cháy đen khi đun nóng",
      "B. Đường dễ bị phân hủy (cháy đen) ở nhiệt độ thấp hơn muối",
      "C. Cả hai đều không bị ảnh hưởng bởi nhiệt độ",
      "D. Muối bay hơi nhanh hơn đường",
    ],
    correct: 1,
  },
  {
    id: 19,
    section: 2,
    q: "Khi vẽ sơ đồ hình thành liên kết cộng hóa trị trong phân tử Cl<sub>2</sub>, mỗi nguyên tử Chlorine góp chung bao nhiêu electron?",
    options: [
      "A. 1 electron",
      "B. 2 electron",
      "C. 7 electron",
      "D. 8 electron",
    ],
    correct: 0,
  },
  {
    id: 20,
    section: 2,
    q: "Tại sao các nguyên tử có xu hướng liên kết với nhau?",
    options: [
      "A. Để làm tăng khối lượng nguyên tử",
      "B. Để đạt được lớp vỏ electron bền vững giống khí hiếm",
      "C. Để triệt tiêu hoàn toàn các proton",
      "D. Để có thể bay hơi nhanh hơn",
    ],
    correct: 1,
  },

  // PHẦN 3
  {
    id: 21,
    section: 3,
    q: "Khối lượng phân tử của Calcium carbonate (CaCO<sub>3</sub>) là bao nhiêu? (Biết Ca=40, C=12, O=16)",
    options: ["A. 68 amu", "B. 100 amu", "C. 84 amu", "D. 120 amu"],
    correct: 1,
  },
  {
    id: 22,
    section: 3,
    q: "Lập công thức hóa học của hợp chất tạo bởi Aluminium (III) và Oxygen (II):",
    options: [
      "A. AlO",
      "B. AlO<sub>2</sub>",
      "C. Al<sub>3</sub>O<sub>2</sub>",
      "D. Al<sub>2</sub>O<sub>3</sub>",
    ],
    correct: 3,
  },
  {
    id: 23,
    section: 3,
    q: "Phần trăm khối lượng của nguyên tố Oxygen trong phân tử nước (H<sub>2</sub>O) xấp xỉ là: (Biết H=1, O=16)",
    options: ["A. 11,1%", "B. 50%", "C. 88,9%", "D. 16%"],
    correct: 2,
  },
  {
    id: 24,
    section: 3,
    q: "Một hợp chất có công thức hóa học X<sub>2</sub>O<sub>3</sub> và có khối lượng phân tử là 102 amu. Nguyên tố X là: (Biết O=16, Al=27, Fe=56)",
    options: [
      "A. Iron (Fe)",
      "B. Aluminium (Al)",
      "C. Copper (Cu)",
      "D. Magnesium (Mg)",
    ],
    correct: 1,
  },
  {
    id: 25,
    section: 3,
    q: "Để mô tả quá trình tạo thành liên kết trong phân tử MgO, em cần biết:",
    options: [
      "A. Mg nhường 2e cho O",
      "B. Mg nhận 2e từ O",
      "C. Mg và O dùng chung 2 cặp electron",
      "D. Mg và O đều nhường electron cho nhau",
    ],
    correct: 0,
  },
  {
    id: 26,
    section: 3,
    q: "Trong trò chơi ghép thẻ hóa trị, nếu em có thẻ nguyên tử Silicon hóa trị IV, em cần bao nhiêu thẻ nguyên tử Oxygen hóa trị II để lập được công thức hợp chất đúng?",
    options: ["A. 1 thẻ", "B. 2 thẻ", "C. 3 thẻ", "D. 4 thẻ"],
    correct: 1,
  },

  // PHẦN 4
  {
    id: 27,
    section: 4,
    q: "Một phân tử hợp chất gồm 2 nguyên tử của nguyên tố X liên kết với 5 nguyên tử Oxygen, nặng hơn phân tử Hydrogen (H<sub>2</sub>) là 71 lần. X là nguyên tố nào?",
    options: [
      "A. Nitrogen (14)",
      "B. Phosphorus (31)",
      "C. Sulfur (32)",
      "D. Carbon (12)",
    ],
    correct: 1,
  },
  {
    id: 28,
    section: 4,
    q: "Cho biết công thức hóa học của hợp chất tạo bởi nguyên tố X với nhóm (SO<sub>4</sub>) hóa trị II là X<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>. Công thức hóa học của X với Oxygen là:",
    options: [
      "A. XO",
      "B. X<sub>2</sub>O",
      "C. X<sub>2</sub>O<sub>3</sub>",
      "D. XO<sub>2</sub>",
    ],
    correct: 2,
  },
  {
    id: 29,
    section: 4,
    q: "Quan sát mô hình cấu tạo của kim cương và than chì. Dù đều là đơn chất của nguyên tố Carbon nhưng chúng có tính chất vật lý khác nhau là do:",
    options: [
      "A. Số lượng electron khác nhau",
      "B. Cách sắp xếp các nguyên tử và liên kết giữa chúng khác nhau",
      "C. Khối lượng nguyên tử Carbon trong kim cương nặng hơn",
      "D. Một chất là đơn chất, một chất là hợp chất",
    ],
    correct: 1,
  },
  {
    id: 30,
    section: 4,
    q: "Một loại quặng sắt chứa 70% sắt về khối lượng, còn lại là oxygen. Công thức hóa học của hợp chất sắt này là: (Biết Fe=56, O=16)",
    options: [
      "A. FeO",
      "B. Fe<sub>3</sub>O<sub>4</sub>",
      "C. Fe<sub>2</sub>O<sub>3</sub>",
      "D. Fe<sub>2</sub>O",
    ],
    correct: 2,
  },
];

// --- STATE ---
let userAnswers = {}; // { 1: 0, 2: 1 ... }
let isSubmitted = false;

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  renderQuiz();
});

// --- RENDER ---
function renderQuiz() {
  const container = document.getElementById("quiz-container");
  let currentSection = 0;
  let html = "";

  questionData.forEach((q, index) => {
    // Section Header
    if (q.section !== currentSection) {
      currentSection = q.section;
      html += `<div class="section-title">${sectionTitles[currentSection]}</div>`;
    }

    // Options HTML
    let optionsHtml = "";
    q.options.forEach((opt, optIdx) => {
      optionsHtml += `
                        <div class="option-item" id="opt-item-${q.id}-${optIdx}">
                            <input type="radio" 
                                name="q${q.id}" 
                                id="q${q.id}-opt${optIdx}" 
                                value="${optIdx}"
                                onchange="handleAnswer(${q.id}, ${optIdx})">
                            <label class="option-label" for="q${q.id}-opt${optIdx}">
                                ${opt}
                            </label>
                        </div>
                    `;
    });

    // Question Card
    html += `
                    <div class="question-card" id="card-${q.id}">
                        <div class="q-text">
                            <span class="q-number">Câu ${q.id}:</span>
                            ${q.q}
                        </div>
                        <div class="options-list">
                            ${optionsHtml}
                        </div>
                    </div>
                `;
  });

  container.innerHTML = html;
}

// --- LOGIC ---
function handleAnswer(questionId, optionIndex) {
  if (isSubmitted) return;

  userAnswers[questionId] = optionIndex;
  updateProgress();
}

function updateProgress() {
  const total = questionData.length;
  const answered = Object.keys(userAnswers).length;

  document.getElementById("progress-count").innerText = answered;
  const percent = (answered / total) * 100;
  document.getElementById("progress-bar").style.width = `${percent}%`;
}

function submitQuiz() {
  const total = questionData.length;
  const answered = Object.keys(userAnswers).length;

  if (answered < total) {
    const confirmSubmit = confirm(
      `Bạn mới làm ${answered}/${total} câu. Bạn có chắc chắn muốn nộp bài không?`,
    );
    if (!confirmSubmit) return;
  }

  isSubmitted = true;
  document.getElementById("submit-btn").disabled = true;
  document.getElementById("submit-btn").innerText = "ĐÃ NỘP BÀI";
  document.getElementById("quiz-container").classList.add("submitted");

  // Lock inputs and Grade
  let correctCount = 0;

  questionData.forEach((q) => {
    const inputs = document.getElementsByName(`q${q.id}`);
    inputs.forEach((input) => (input.disabled = true));

    const userAnswer = userAnswers[q.id];
    const correctAnswer = q.correct;

    // Highlight Correct Answer
    const correctItem = document.getElementById(
      `opt-item-${q.id}-${correctAnswer}`,
    );
    if (correctItem) correctItem.classList.add("is-correct");

    if (userAnswer === correctAnswer) {
      correctCount++;
    } else if (userAnswer !== undefined) {
      // Highlight Wrong Answer
      const wrongItem = document.getElementById(
        `opt-item-${q.id}-${userAnswer}`,
      );
      if (wrongItem) wrongItem.classList.add("is-wrong");
    }
  });

  showResultModal(correctCount, total);
}

function showResultModal(correct, total) {
  const score = (correct / total) * 10;
  const formattedScore = score.toFixed(1);

  // Text & Color logic
  let rankText = "";
  let rankColor = "";
  let message = "";

  if (score >= 8) {
    rankText = "RẤT TỐT";
    rankColor = "#10b981"; // Green
    message = "Kiến thức của bạn rất vững chắc!";
  } else if (score >= 6) {
    rankText = "ĐẠT";
    rankColor = "#f59e0b"; // Amber
    message = "Bạn đã nắm được kiến thức cơ bản.";
  } else {
    rankText = "CẦN ÔN LẠI";
    rankColor = "#ef4444"; // Red
    message = "Hãy xem lại lý thuyết và làm lại nhé.";
  }

  // Update DOM
  document.getElementById("final-score").innerText = formattedScore;
  document.getElementById("result-rank").innerText = rankText;
  document.getElementById("result-rank").style.color = rankColor;
  document.getElementById("result-text").innerText = message;
  document.getElementById("correct-count").innerText = `${correct}/${total}`;
  document.getElementById("correct-percent").innerText =
    `${Math.round((correct / total) * 100)}%`;

  // Update Circle Chart
  const percent = (correct / total) * 100;
  document.getElementById("score-circle-graphic").style.background =
    `conic-gradient(${rankColor} ${percent}%, #e5e7eb ${percent}% 100%)`;
  document.querySelector(".score-number").style.color = rankColor;

  // Show Modal
  const modal = document.getElementById("result-modal");
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("result-modal").style.display = "none";
}

function retryQuiz() {
  location.reload();
}
