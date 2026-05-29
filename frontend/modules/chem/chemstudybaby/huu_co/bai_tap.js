// --- DATA ---
// A=0, B=1, C=2, D=3
const sectionTitles = {
  1: "PHẦN I – NHẬN BIẾT (10 câu)",
  2: "PHẦN II – THÔNG HIỂU (10 câu)",
  3: "PHẦN III – VẬN DỤNG (6 câu)",
  4: "PHẦN IV – VẬN DỤNG CAO (4 câu)",
};

const questionData = [
  // PHẦN I
  {
    id: 1,
    section: 1,
    q: "Chất béo là triester của acid béo với chất nào sau đây?",
    options: ["Methanol", "Ethanol", "Glycerol", "Ethylene glycol"],
    correct: 2,
  },
  {
    id: 2,
    section: 1,
    q: "Ở điều kiện thường, mỡ động vật thường tồn tại ở trạng thái nào?",
    options: ["Rắn", "Lỏng", "Khí", "Dung dịch"],
    correct: 0,
  },
  {
    id: 3,
    section: 1,
    q: "Công thức phân tử của Glucose là",
    options: ["C12H22O11", "C6H12O6", "(C6H10O5)n", "CH3COOH"],
    correct: 1,
  },
  {
    id: 4,
    section: 1,
    q: "Tinh bột có nhiều nhất trong loại thực phẩm nào sau đây?",
    options: ["Quả nho chín", "Cây mía", "Ngũ cốc và các loại hạt", "Thịt bò"],
    correct: 2,
  },
  {
    id: 5,
    section: 1,
    q: "Thành phần chính của bông, gỗ, tre, nứa là",
    options: ["Tinh bột", "Saccharose", "Protein", "Cellulose"],
    correct: 3,
  },
  {
    id: 6,
    section: 1,
    q: "Để nhận biết hồ tinh bột, người ta thường dùng thuốc thử là",
    options: [
      "Dung dịch AgNO3 trong NH3",
      "Dung dịch NaOH",
      "Dung dịch Iodine (Iốt)",
      "Quỳ tím",
    ],
    correct: 2,
  },
  {
    id: 7,
    section: 1,
    q: "Protein được tạo nên từ các đơn vị cơ bản là",
    options: ["Glucose", "Glycerol", "Amino acid", "Ethylene"],
    correct: 2,
  },
  {
    id: 8,
    section: 1,
    q: "Khi đốt cháy tóc hoặc lông gà, ta thấy có mùi khét đặc trưng là do sự cháy của",
    options: ["Chất béo", "Tinh bột", "Protein", "Polymer tổng hợp"],
    correct: 2,
  },
  {
    id: 9,
    section: 1,
    q: "Polymer nào sau đây có nguồn gốc từ thiên nhiên?",
    options: ["Polyethylene (PE)", "Tơ nylon", "Cao su tổng hợp", "Tơ tằm"],
    correct: 3,
  },
  {
    id: 10,
    section: 1,
    q: 'Hiện tượng "ô nhiễm trắng" gây ra bởi loại rác thải nào sau đây?',
    options: [
      "Rác thải hữu cơ",
      "Túi nilon và đồ nhựa khó phân hủy",
      "Vỏ trái cây",
      "Giấy vụn",
    ],
    correct: 1,
  },

  // PHẦN II
  {
    id: 11,
    section: 2,
    q: "Tại sao không thể rửa sạch vết dầu mỡ bám trên áo bằng nước thuần túy?",
    options: [
      "Vì dầu mỡ tan vô hạn trong nước.",
      "Vì dầu mỡ không tan trong nước và nhẹ hơn nước.",
      "Vì nước làm dầu mỡ đông đặc lại.",
      "Vì nước phản ứng hóa học tạo chất kết tủa với dầu mỡ.",
    ],
    correct: 1,
  },
  {
    id: 12,
    section: 2,
    q: "Sản phẩm của phản ứng xà phòng hóa chất béo khi đun nóng với dung dịch NaOH là",
    options: [
      "Glycerol và acid béo.",
      "Glycerol và xà phòng (muối của acid béo).",
      "Ethanol và xà phòng.",
      "Glucose và acid béo.",
    ],
    correct: 1,
  },
  {
    id: 13,
    section: 2,
    q: "Hiện tượng xảy ra khi đun nóng dung dịch glucose với AgNO3 trong NH3 là",
    options: [
      "Có sủi bọt khí không màu.",
      "Có lớp bạc sáng bóng bám vào thành ống nghiệm.",
      "Dung dịch chuyển sang màu xanh tím.",
      "Có kết tủa màu xanh lam.",
    ],
    correct: 1,
  },
  {
    id: 14,
    section: 2,
    q: "Khi nhai cơm kỹ trong miệng, ta cảm thấy có vị ngọt là do",
    options: [
      "Trong cơm có sẵn rất nhiều đường glucose.",
      "Tinh bột bị enzyme trong nước bọt thủy phân thành đường.",
      "Do vị giác bị đánh lừa bởi nước.",
      "Do cơm có chứa nhiều saccharose.",
    ],
    correct: 1,
  },
  {
    id: 15,
    section: 2,
    q: "Phản ứng thủy phân Saccharose trong môi trường acid tạo ra sản phẩm là",
    options: [
      "Chỉ tạo ra Glucose.",
      "Chỉ tạo ra Fructose.",
      "Hỗn hợp Glucose và Fructose.",
      "Tinh bột và nước.",
    ],
    correct: 2,
  },
  {
    id: 16,
    section: 2,
    q: "Hiện tượng lòng trắng trứng đông đặc lại khi luộc hoặc khi cho thêm acid được gọi là",
    options: [
      "Sự thủy phân.",
      "Sự đông tụ protein.",
      "Sự trùng hợp.",
      "Sự xà phòng hóa.",
    ],
    correct: 1,
  },
  {
    id: 17,
    section: 2,
    q: "Sự tạo thành tinh bột trong cây xanh diễn ra nhờ quá trình nào?",
    options: [
      "Quá trình hô hấp.",
      "Quá trình quang hợp dưới ánh sáng mặt trời.",
      "Quá trình lên men.",
      "Quá trình bón phân hóa học.",
    ],
    correct: 1,
  },
  {
    id: 18,
    section: 2,
    q: "Tơ nylon và tơ tằm khác nhau cơ bản ở điểm nào khi đem đốt?",
    options: [
      "Tơ tằm cháy có mùi khét như tóc cháy, tơ nylon thì không.",
      "Tơ nylon cháy có mùi khét như tóc cháy, tơ tằm thì không.",
      "Cả hai đều cháy có mùi khét giống hệt nhau.",
      "Cả hai đều không cháy được.",
    ],
    correct: 0,
  },
  {
    id: 19,
    section: 2,
    q: "Đặc điểm chung của các chất dẻo như PE, PP là",
    options: [
      "Có tính đàn hồi rất cao như cao su.",
      "Có tính dẻo, được dùng làm vật liệu gia dụng.",
      "Có thể kéo thành sợi dài và dai như tơ.",
      "Có khả năng tan tốt trong nước.",
    ],
    correct: 1,
  },
  {
    id: 20,
    section: 2,
    q: "Nguyên tắc 5R (Reduce, Reuse, Recycle, Refuse, Renew) nhằm mục đích chính là",
    options: [
      "Tăng năng suất cây trồng.",
      "Tiết kiệm năng lượng điện.",
      "Bảo vệ môi trường và hạn chế rác thải nhựa.",
      "Sản xuất thêm nhiều chất dẻo mới.",
    ],
    correct: 2,
  },

  // PHẦN III
  {
    id: 21,
    section: 3,
    q: "Bằng phương pháp hóa học, để nhận biết 3 dung dịch: glucose, saccharose và hồ tinh bột, ta nên dùng các thuốc thử theo thứ tự nào?",
    options: [
      "Quỳ tím và nước bromine.",
      "Dung dịch Iodine và dung dịch AgNO3/NH3.",
      "Dung dịch NaOH và dung dịch HCl.",
      "Phenolphthalein và quỳ tím.",
    ],
    correct: 1,
  },
  {
    id: 22,
    section: 3,
    q: "Thủy phân hoàn toàn 324 gam tinh bột với hiệu suất 80%. Khối lượng glucose thu được là (Cho C=12, H=1, O=16)",
    options: ["288 gam.", "360 gam.", "144 gam.", "450 gam."],
    correct: 0,
  },
  {
    id: 23,
    section: 3,
    q: "Vắt chanh vào cốc sữa đậu nành thấy xuất hiện các mảng kết tủa trắng. Đây là hiện tượng",
    options: [
      "Protein trong đậu nành bị đông tụ bởi acid trong chanh.",
      "Protein bị thủy phân hoàn toàn thành amino acid.",
      "Chất béo trong sữa đậu nành bị xà phòng hóa.",
      "Đường trong sữa đậu nành bị lên men.",
    ],
    correct: 0,
  },
  {
    id: 24,
    section: 3,
    q: "Một loại polymer X có mắt xích là −CH2−CH2−. Tên gọi của X là",
    options: [
      "Polyvinyl chloride (PVC).",
      "Polyethylene (PE).",
      "Polypropylene (PP).",
      "Polystyrene (PS).",
    ],
    correct: 1,
  },
  {
    id: 25,
    section: 3,
    q: "Khi thủy phân hoàn toàn 1 mol chất béo (RCOO)3C3H5 trong dung dịch NaOH, số mol xà phòng thu được là",
    options: ["1 mol.", "2 mol.", "3 mol.", "4 mol."],
    correct: 2,
  },
  {
    id: 26,
    section: 3,
    q: "Để phân biệt sợi tơ tằm tự nhiên và sợi tơ nylon tổng hợp, cách đơn giản nhất là",
    options: [
      "Ngâm vào nước lạnh.",
      "Đốt và ngửi mùi khét của sản phẩm cháy.",
      "Nhìn màu sắc dưới ánh đèn.",
      "Cân khối lượng của hai sợi.",
    ],
    correct: 1,
  },

  // PHẦN IV
  {
    id: 27,
    section: 4,
    q: "Xà phòng hóa hoàn toàn 17,8 gam chất béo (C17H35COO)3C3H5 bằng dung dịch NaOH vừa đủ. Khối lượng glycerol thu được sau phản ứng là (Cho C=12, H=1, O=16, Na=23)",
    options: ["1,84 gam.", "0,92 gam.", "2,76 gam.", "3,68 gam."],
    correct: 0,
  },
  {
    id: 28,
    section: 4,
    q: "Lên men m gam glucose để tạo thành ethylic alcohol. Toàn bộ lượng khí CO2 sinh ra được dẫn vào dung dịch nước vôi trong dư, thu được 50 gam kết tủa trắng. Biết hiệu suất lên men là 90%. Giá trị của m là",
    options: ["45 gam.", "50 gam.", "55,56 gam.", "40,5 gam."],
    correct: 1,
  },
  {
    id: 29,
    section: 4,
    q: "Thủy phân hoàn toàn m gam saccharose, thu được dung dịch X. Cho toàn bộ dung dịch X tác dụng với AgNO3 trong NH3 dư, đun nóng thu được 21,6 gam bạc. Giá trị của m là",
    options: ["34,2 gam.", "17,1 gam.", "68,4 gam.", "18,0 gam."],
    correct: 1,
  },
  {
    id: 30,
    section: 4,
    q: "Đốt cháy hoàn toàn một lượng protein (lông gà), sản phẩm cháy gồm có CO2, H2O và N2. Nếu dẫn sản phẩm cháy qua dung dịch nước vôi trong dư thấy xuất hiện 10 gam kết tủa và thoát ra 1,12 lít khí N2 (đkc). Phần trăm khối lượng của nguyên tố Nitrogen có trong lượng protein trên gần nhất với giá trị nào sau đây?",
    options: ["15%.", "16%.", "14%.", "18%."],
    correct: 1,
  },
];

// --- STATE ---
let userAnswers = {}; // { questionId: optionIndex }
let isSubmitted = false;
const totalQuestions = questionData.length;

// --- RENDER FUNCTION ---
function renderQuiz() {
  const container = document.getElementById("quiz-container");
  let currentSection = 0;
  let html = "";

  questionData.forEach((item, index) => {
    // Insert Section Title if needed
    if (item.section !== currentSection) {
      currentSection = item.section;
      html += `<div class="section-title">${sectionTitles[currentSection]}</div>`;
    }

    // Question Card
    html += `
                <div class="question-card" id="card-${item.id}">
                    <div class="question-text">
                        <span class="question-number">Câu ${item.id}:</span> ${item.q}
                    </div>
                    <ul class="options-list">
                        ${item.options
                          .map(
                            (opt, optIndex) => `
                            <li class="option-item" id="opt-${item.id}-${optIndex}">
                                <input type="radio" name="q${item.id}" id="radio-${item.id}-${optIndex}" value="${optIndex}" onchange="handleSelect(${item.id}, ${optIndex})">
                                <label class="option-label" for="radio-${item.id}-${optIndex}">
                                    <span class="option-tag">${String.fromCharCode(65 + optIndex)}</span>
                                    <span class="option-text">${opt}</span>
                                </label>
                            </li>
                        `,
                          )
                          .join("")}
                    </ul>
                </div>
                `;
  });

  container.innerHTML = html;
}

// --- LOGIC ---
function handleSelect(questionId, optionIndex) {
  if (isSubmitted) return;
  userAnswers[questionId] = optionIndex;
  updateProgressBar();
}

function updateProgressBar() {
  const answered = Object.keys(userAnswers).length;
  const percentage = (answered / totalQuestions) * 100;

  document.getElementById("progress-bar").style.width = `${percentage}%`;
  document.getElementById("answered-count").innerText = answered;
}

function submitQuiz() {
  if (isSubmitted) return;

  const answeredCount = Object.keys(userAnswers).length;
  if (answeredCount < totalQuestions) {
    const confirmSubmit = confirm(
      `Bạn mới làm ${answeredCount}/${totalQuestions} câu. Bạn có chắc chắn muốn nộp bài không?`,
    );
    if (!confirmSubmit) return;
  }

  isSubmitted = true;

  // Disable footer button
  const footerBtn = document.querySelector(".footer .btn-submit");
  footerBtn.innerText = "Đã nộp bài";
  footerBtn.disabled = true;
  footerBtn.style.backgroundColor = "#ccc";
  footerBtn.style.cursor = "not-allowed";

  calculateAndShowResults();
}

function calculateAndShowResults() {
  let correctCount = 0;

  questionData.forEach((q) => {
    const card = document.getElementById(`card-${q.id}`);
    const userAnswer = userAnswers[q.id];

    card.classList.add("reviewed"); // Enable CSS for correct/incorrect styles

    // Highlight Logic
    // 1. Highlight correct answer
    const correctOption = document.getElementById(`opt-${q.id}-${q.correct}`);
    if (correctOption) correctOption.classList.add("correct");

    // 2. Check user answer
    if (userAnswer !== undefined) {
      if (userAnswer === q.correct) {
        correctCount++;
      } else {
        const userOption = document.getElementById(`opt-${q.id}-${userAnswer}`);
        if (userOption) userOption.classList.add("incorrect");
      }
    }

    // Disable inputs
    const inputs = card.querySelectorAll("input");
    inputs.forEach((input) => (input.disabled = true));
  });

  const score = (correctCount / totalQuestions) * 10;
  showModal(score.toFixed(1), correctCount);
}

function showModal(score, correctCount) {
  const modal = document.getElementById("result-modal");
  const scoreDisplay = document.getElementById("score-display");
  const messageDisplay = document.getElementById("result-message");
  const countDisplay = document.getElementById("correct-count");
  const circle = document.getElementById("score-circle");

  scoreDisplay.innerText = score;
  countDisplay.innerText = correctCount;

  let message = "";
  let color = "";

  if (score >= 8) {
    message = "RẤT TỐT!";
    color = "#28a745";
  } else if (score >= 6) {
    message = "ĐẠT";
    color = "#ffc107";
  } else {
    message = "CẦN ÔN LẠI";
    color = "#dc3545";
  }

  messageDisplay.innerText = message;
  messageDisplay.style.color = color;
  scoreDisplay.style.color = color;

  // Update circle gradient based on percentage
  const percentage = (score / 10) * 100;
  circle.style.background = `conic-gradient(${color} ${percentage}%, #e0e0e0 ${percentage}%)`;

  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("result-modal").classList.remove("active");
  // Scroll to top to review
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetQuiz() {
  // Reload page to reset everything cleanly
  window.location.reload();
}

// --- INITIALIZATION ---
window.onload = function () {
  renderQuiz();
};
