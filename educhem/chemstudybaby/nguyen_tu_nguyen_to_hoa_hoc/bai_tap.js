// --- DATA ---
// Mapping index: A=0, B=1, C=2, D=3
const sectionTitles = {
  1: "PHẦN 1: NHẬN BIẾT",
  2: "PHẦN 2: THÔNG HIỂU",
  3: "PHẦN 3: VẬN DỤNG",
  4: "PHẦN 4: VẬN DỤNG CAO",
};

const questionData = [
  // PHẦN 1 (10 câu)
  {
    id: 1,
    section: 1,
    q: "Nguyên tử được cấu tạo từ các loại hạt cơ bản nào sau đây?",
    options: [
      "A. Proton và neutron",
      "B. Proton và electron",
      "C. Proton, neutron và electron",
      "D. Neutron và electron",
    ],
    correct: 2,
  },
  {
    id: 2,
    section: 1,
    q: "Trong nguyên tử, hạt mang điện tích dương là:",
    options: ["A. Electron", "B. Proton", "C. Neutron", "D. Hạt nhân"],
    correct: 1,
  },
  {
    id: 3,
    section: 1,
    q: "Khối lượng nguyên tử được tính bằng đơn vị nào?",
    options: [
      "A. Gam (g)",
      "B. Kilogam (kg)",
      "C. amu (atomic mass unit)",
      "D. cm³",
    ],
    correct: 2,
  },
  {
    id: 4,
    section: 1,
    q: "Tập hợp những nguyên tử cùng loại, có cùng số proton trong hạt nhân được gọi là:",
    options: [
      "A. Hỗn hợp",
      "B. Nguyên tố hóa học",
      "C. Phân tử",
      "D. Chất tinh khiết",
    ],
    correct: 1,
  },
  {
    id: 5,
    section: 1,
    q: "Kí hiệu hóa học của nguyên tố Carbon là:",
    options: ["A. Ca", "B. Cu", "C. C", "D. Cl"],
    correct: 2,
  },
  {
    id: 6,
    section: 1,
    q: "Bảng tuần hoàn các nguyên tố hóa học hiện nay có bao nhiêu chu kì?",
    options: ["A. 5", "B. 6", "C. 7", "D. 8"],
    correct: 2,
  },
  {
    id: 7,
    section: 1,
    q: "Nhóm các nguyên tố nằm ở cột cuối cùng bên phải (Nhóm VIIIA) trong bảng tuần hoàn được gọi là:",
    options: [
      "A. Kim loại kiềm",
      "B. Phi kim mạnh",
      "C. Khí hiếm",
      "D. Kim loại chuyển tiếp",
    ],
    correct: 2,
  },
  {
    id: 8,
    section: 1,
    q: "Trong một nguyên tử trung hòa về điện, số hạt proton luôn bằng:",
    options: [
      "A. Số hạt neutron",
      "B. Số hạt electron",
      "C. Tổng số hạt proton và neutron",
      "D. Số lớp electron",
    ],
    correct: 1,
  },
  {
    id: 9,
    section: 1,
    q: "Kí hiệu hóa học của nguyên tố Sodium (Natri) là:",
    options: ["A. S", "B. So", "C. Na", "D. N"],
    correct: 2,
  },
  {
    id: 10,
    section: 1,
    q: "Thành phần nào của nguyên tử có khối lượng rất nhỏ, không đáng kể so với các thành phần còn lại?",
    options: ["A. Hạt nhân", "B. Proton", "C. Neutron", "D. Electron"],
    correct: 3,
  },

  // PHẦN 2 (10 câu)
  {
    id: 11,
    section: 2,
    q: "Vì sao nguyên tử được coi là trung hòa về điện?",
    options: [
      "A. Vì nó không chứa các hạt mang điện",
      "B. Vì số proton mang điện dương bằng số electron mang điện âm",
      "C. Vì hạt nhân nằm ở tâm nguyên tử",
      "D. Vì khối lượng electron quá nhỏ",
    ],
    correct: 1,
  },
  {
    id: 12,
    section: 2,
    q: "Nguyên tử X có 11 proton. Số electron chuyển động quanh hạt nhân của nguyên tử X là:",
    options: ["A. 11", "B. 12", "C. 22", "D. 23"],
    correct: 0,
  },
  {
    id: 13,
    section: 2,
    q: "Khối lượng nguyên tử chủ yếu tập trung ở đâu?",
    options: [
      "A. Lớp vỏ electron",
      "B. Các lớp electron phía ngoài",
      "C. Hạt nhân nguyên tử",
      "D. Khoảng không gian giữa hạt nhân và lớp vỏ",
    ],
    correct: 2,
  },
  {
    id: 14,
    section: 2,
    q: "Hai nguyên tử X (8p, 8n) và Y (8p, 9n) được gọi là cùng một nguyên tố hóa học vì:",
    options: [
      "A. Chúng có cùng số neutron",
      "B. Chúng có cùng khối lượng nguyên tử",
      "C. Chúng có cùng số proton trong hạt nhân",
      "D. Chúng có cùng số lớp electron",
    ],
    correct: 2,
  },
  {
    id: 15,
    section: 2,
    q: "Các nguyên tố trong cùng một hàng (chu kì) của bảng tuần hoàn có đặc điểm chung là:",
    options: [
      "A. Có cùng số electron lớp ngoài cùng",
      "B. Có cùng số lớp electron",
      "C. Có tính chất hóa học tương tự nhau",
      "D. Có cùng số proton",
    ],
    correct: 1,
  },
  {
    id: 16,
    section: 2,
    q: "Dựa vào bảng tuần hoàn, các nguyên tố kim loại thường nằm ở vị trí nào?",
    options: [
      "A. Phía trên bên phải của bảng",
      "B. Ở cột cuối cùng bên phải",
      "C. Bên trái và phía dưới của bảng",
      "D. Chỉ nằm ở chu kì 1",
    ],
    correct: 2,
  },
  {
    id: 17,
    section: 2,
    q: "Một nguyên tử có 6 proton và 6 neutron. Khối lượng xấp xỉ của nguyên tử đó là:",
    options: ["A. 6 amu", "B. 12 amu", "C. 18 amu", "D. 0 amu"],
    correct: 1,
  },
  {
    id: 18,
    section: 2,
    q: "Kí hiệu hóa học nào sau đây viết sai quy tắc?",
    options: ["A. H", "B. Na", "C. AL", "D. Ca"],
    correct: 2,
  },
  {
    id: 19,
    section: 2,
    q: "Nguyên tố Iodine (I) có vai trò quan trọng đối với sức khỏe con người như thế nào?",
    options: [
      "A. Giúp xương chắc khỏe",
      "B. Ngăn ngừa bệnh bướu cổ",
      "C. Giúp máu lưu thông tốt",
      "D. Tăng cường thị lực",
    ],
    correct: 1,
  },
  {
    id: 20,
    section: 2,
    q: "Ô nguyên tố trong bảng tuần hoàn không cho biết thông tin nào sau đây?",
    options: [
      "A. Tên nguyên tố",
      "B. Số hiệu nguyên tử (số p)",
      "C. Số hạt neutron",
      "D. Khối lượng nguyên tử",
    ],
    correct: 2,
  },

  // PHẦN 3 (6 câu)
  {
    id: 21,
    section: 3,
    q: "Nguyên tử của nguyên tố Magnesium (Mg) có 12 proton. Số electron ở lớp vỏ và điện tích hạt nhân của Mg lần lượt là:",
    options: ["A. 12e và +12", "B. 24e và +12", "C. 12e và -12", "D. 12e và 0"],
    correct: 0,
  },
  {
    id: 22,
    section: 3,
    q: "Nguyên tử X có 19 proton và 20 neutron. Khối lượng nguyên tử X tính theo đơn vị amu là:",
    options: ["A. 19 amu", "B. 20 amu", "C. 39 amu", "D. 1 amu"],
    correct: 2,
  },
  {
    id: 23,
    section: 3,
    q: "Nguyên tố X nằm ở chu kì 2, nhóm VA. Tên và kí hiệu của nguyên tố X là:",
    options: [
      "A. Oxygen (O)",
      "B. Nitrogen (N)",
      "C. Carbon (C)",
      "D. Fluorine (F)",
    ],
    correct: 1,
  },
  {
    id: 24,
    section: 3,
    q: "Sắp xếp các nguyên tố sau theo chiều tăng dần điện tích hạt nhân: F (số hiệu 9), Ne (số hiệu 10), Na (số hiệu 11), Mg (số hiệu 12).",
    options: [
      "A. Mg, Na, Ne, F",
      "B. F, Ne, Na, Mg",
      "C. Na, Mg, F, Ne",
      "D. Ne, F, Mg, Na",
    ],
    correct: 1,
  },
  {
    id: 25,
    section: 3,
    q: "Để mô phỏng cấu tạo nguyên tử Lithium (3p, 4n), em cần chuẩn bị số hạt nhựa màu để đại diện cho p, n, e lần lượt là:",
    options: [
      "A. 3 hạt p, 3 hạt n, 4 hạt e",
      "B. 3 hạt p, 4 hạt n, 3 hạt e",
      "C. 4 hạt p, 3 hạt n, 3 hạt e",
      "D. 3 hạt p, 4 hạt n, 4 hạt e",
    ],
    correct: 1,
  },
  {
    id: 26,
    section: 3,
    q: "Canxi (Calcium) là nguyên tố quan trọng cấu tạo nên xương và răng. Thực phẩm nào sau đây chứa nhiều nguyên tố này nhất?",
    options: [
      "A. Gạo và ngô",
      "B. Tôm, cua, sữa",
      "C. Mỡ lợn và bơ",
      "D. Đường và muối ăn",
    ],
    correct: 1,
  },

  // PHẦN 4 (4 câu)
  {
    id: 27,
    section: 4,
    q: "Tổng số hạt (p, n, e) trong nguyên tử X là 40 hạt. Biết số hạt mang điện nhiều hơn số hạt không mang điện là 12 hạt. Số hạt proton của nguyên tử X là:",
    options: ["A. 12", "B. 13", "C. 14", "D. 15"],
    correct: 1,
  },
  {
    id: 28,
    section: 4,
    q: "Một nguyên tử X có khối lượng là 23 amu và có 12 hạt neutron trong hạt nhân. Vị trí của nguyên tố X trong bảng tuần hoàn là:",
    options: [
      "A. Ô 11, chu kì 3, nhóm IA",
      "B. Ô 12, chu kì 3, nhóm IIA",
      "C. Ô 11, chu kì 2, nhóm IA",
      "D. Ô 23, chu kì 4, nhóm IA",
    ],
    correct: 0,
  },
  {
    id: 29,
    section: 4,
    q: "Quan sát mô hình Rutherford – Bohr, nguyên tử X có 3 lớp electron và có 2 electron ở lớp ngoài cùng. Phát biểu nào sau đây về X là sai?",
    options: [
      "A. X là một nguyên tố kim loại",
      "B. X thuộc chu kì 3 trong bảng tuần hoàn",
      "C. X có số hiệu nguyên tử là 12",
      "D. X là một nguyên tố khí hiếm",
    ],
    correct: 3,
  },
  {
    id: 30,
    section: 4,
    q: "Vì sao khối lượng của nguyên tử thường được coi bằng khối lượng của hạt nhân (tổng khối lượng p và n)?",
    options: [
      "A. Vì electron nằm ở quá xa hạt nhân",
      "B. Vì electron chuyển động quá nhanh nên không cân được",
      "C. Vì electron có khối lượng cực kì nhỏ (xấp xỉ 1/1840 amu), không đáng kể so với p và n",
      "D. Vì electron chỉ mang điện tích âm, không có khối lượng thực sự",
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
