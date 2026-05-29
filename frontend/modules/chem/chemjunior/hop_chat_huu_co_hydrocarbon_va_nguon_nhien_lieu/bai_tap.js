// --- DỮ LIỆU CÂU HỎI ---
const sectionTitles = {
  1: "PHẦN I – NHẬN BIẾT",
  2: "PHẦN II – THÔNG HIỂU",
  3: "PHẦN III – VẬN DỤNG",
  4: "PHẦN IV – VẬN DỤNG CAO",
};

const questionData = [
  // PHẦN I - NHẬN BIẾT
  {
    id: 1,
    section: 1,
    q: "Hợp chất hữu cơ là hợp chất của nguyên tố nào sau đây?",
    options: ["A. Nitrogen", "B. Oxygen", "C. Carbon", "D. Sulfur"],
    correct: 2,
  },
  {
    id: 2,
    section: 1,
    q: "Trong các chất sau, chất nào là hợp chất hữu cơ?",
    options: [
      "A. CO<sub>2</sub>",
      "B. CaCO<sub>3</sub>",
      "C. CH<sub>4</sub>",
      "D. NaCN",
    ],
    correct: 2,
  },
  {
    id: 3,
    section: 1,
    q: "Hydrocarbon là hợp chất mà phân tử chỉ chứa hai nguyên tố là",
    options: [
      "A. Carbon và Oxygen.",
      "B. Carbon và Hydrogen.",
      "C. Carbon và Nitrogen.",
      "D. Hydrogen và Oxygen.",
    ],
    correct: 1,
  },
  {
    id: 4,
    section: 1,
    q: "Trong hợp chất hữu cơ, nguyên tử Carbon luôn có hóa trị là",
    options: ["A. I", "B. II", "C. III", "D. IV"],
    correct: 3,
  },
  {
    id: 5,
    section: 1,
    q: "Alkane là những hydrocarbon mạch hở, trong phân tử chỉ chứa loại liên kết nào?",
    options: [
      "A. Liên kết đơn",
      "B. Liên kết đôi",
      "C. Liên kết ba",
      "D. Liên kết vòng",
    ],
    correct: 0,
  },
  {
    id: 6,
    section: 1,
    q: "Chất nào sau đây là thành phần chính của khí thiên nhiên và khí mỏ dầu?",
    options: ["A. Ethylene", "B. Methane", "C. Acetylene", "D. Benzene"],
    correct: 1,
  },
  {
    id: 7,
    section: 1,
    q: "Đặc điểm cấu tạo phân tử của Ethylene (Alkene) là có chứa",
    options: [
      "A. một liên kết đơn.",
      "B. một liên kết đôi.",
      "C. một liên kết ba.",
      "D. hai liên kết đôi.",
    ],
    correct: 1,
  },
  {
    id: 8,
    section: 1,
    q: "Chất nào sau đây có khả năng làm mất màu dung dịch nước Bromine?",
    options: ["A. Methane", "B. Ethane", "C. Ethylene", "D. Propane"],
    correct: 2,
  },
  {
    id: 9,
    section: 1,
    q: "Sản phẩm thu được khi đốt cháy hoàn toàn một hydrocarbon là",
    options: [
      "A. CO và H<sub>2</sub>O.",
      "B. CO<sub>2</sub> và H<sub>2</sub>.",
      "C. CO<sub>2</sub> và H<sub>2</sub>O.",
      "D. C và H<sub>2</sub>O.",
    ],
    correct: 2,
  },
  {
    id: 10,
    section: 1,
    q: "Phương pháp chính để chế biến dầu mỏ thành các sản phẩm như xăng, dầu hỏa là",
    options: [
      "A. chưng cất phân đoạn.",
      "B. phản ứng trùng hợp.",
      "C. phản ứng cộng.",
      "D. phản ứng cháy.",
    ],
    correct: 0,
  },

  // PHẦN II - THÔNG HIỂU
  {
    id: 11,
    section: 2,
    q: "Nhóm chất nào sau đây đều là dẫn xuất của hydrocarbon?",
    options: [
      "A. CH<sub>4</sub>, C<sub>2</sub>H<sub>4</sub>",
      "B. C<sub>2</sub>H<sub>6</sub>, C<sub>3</sub>H<sub>8</sub>",
      "C. C<sub>2</sub>H<sub>5</sub>OH, CH<sub>3</sub>Cl",
      "D. C<sub>2</sub>H<sub>2</sub>, C<sub>6</sub>H<sub>6</sub>",
    ],
    correct: 2,
  },
  {
    id: 12,
    section: 2,
    q: "Mạch carbon có thể tồn tại ở những dạng nào sau đây?",
    options: [
      "A. Chỉ có mạch thẳng.",
      "B. Chỉ có mạch nhánh.",
      "C. Mạch thẳng, mạch nhánh và mạch vòng.",
      "D. Chỉ có mạch vòng.",
    ],
    correct: 2,
  },
  {
    id: 13,
    section: 2,
    q: "Phản ứng đặc trưng của methane (alkane) khi tác dụng với chlorine (có ánh sáng) là",
    options: [
      "A. phản ứng cộng.",
      "B. phản ứng thế.",
      "C. phản ứng trùng hợp.",
      "D. phản ứng trao đổi.",
    ],
    correct: 1,
  },
  {
    id: 14,
    section: 2,
    q: "Hiện tượng xảy ra khi dẫn khí ethylene vào dung dịch nước bromine là",
    options: [
      "A. dung dịch từ màu vàng nâu chuyển sang không màu.",
      "B. dung dịch từ không màu chuyển sang màu hồng.",
      "C. có sủi bọt khí và xuất hiện kết tủa trắng.",
      "D. không có hiện tượng gì xảy ra.",
    ],
    correct: 0,
  },
  {
    id: 15,
    section: 2,
    q: "Ứng dụng nào sau đây là của ethylene trong thực tế?",
    options: [
      "A. Làm nhiên liệu cho bật lửa gas.",
      "B. Kích thích quả mau chín.",
      "C. Dùng để sát trùng vết thương.",
      "D. Làm nguyên liệu sản xuất vôi sống.",
    ],
    correct: 1,
  },
  {
    id: 16,
    section: 2,
    q: "Nhựa PE (polyethylene) được tạo ra từ phản ứng nào sau đây?",
    options: [
      "A. Phản ứng cháy của methane.",
      "B. Phản ứng thế của ethane.",
      "C. Phản ứng trùng hợp ethylene.",
      "D. Phản ứng cộng bromine vào ethylene.",
    ],
    correct: 2,
  },
  {
    id: 17,
    section: 2,
    q: "Tại sao dầu mỏ được gọi là hỗn hợp các hydrocarbon?",
    options: [
      "A. Vì nó tan hoàn toàn trong nước.",
      "B. Vì nó chứa nhiều loại hydrocarbon khác nhau.",
      "C. Vì nó chỉ chứa methane.",
      "D. Vì nó có màu trắng và nhẹ hơn nước.",
    ],
    correct: 1,
  },
  {
    id: 18,
    section: 2,
    q: "Việc đốt cháy quá nhiều nhiên liệu hóa thạch gây ra hiệu ứng nhà kính chủ yếu do khí",
    options: [
      "A. O<sub>2</sub>",
      "B. N<sub>2</sub>",
      "C. CO<sub>2</sub>",
      "D. H<sub>2</sub>",
    ],
    correct: 2,
  },
  {
    id: 19,
    section: 2,
    q: "Để phân biệt methane và ethylene bằng phương pháp hóa học, người ta dùng",
    options: [
      "A. nước vôi trong.",
      "B. dung dịch nước bromine.",
      "C. dung dịch phenolphthalein.",
      "D. quỳ tím.",
    ],
    correct: 1,
  },
  {
    id: 20,
    section: 2,
    q: "Công thức cấu tạo thu gọn của ethylene là",
    options: [
      "A. CH<sub>2</sub>=CH<sub>2</sub>",
      "B. CH<sub>3</sub>-CH<sub>3</sub>",
      "C. CH≡CH",
      "D. CH<sub>4</sub>",
    ],
    correct: 0,
  },

  // PHẦN III - VẬN DỤNG
  {
    id: 21,
    section: 3,
    q: "Đốt cháy hoàn toàn 4,958 lít khí methane (đkc). Thể tích khí CO<sub>2</sub> thu được (đkc) là",
    options: [
      "A. 2,479 lít.",
      "B. 4,958 lít.",
      "C. 9,916 lít.",
      "D. 12,395 lít.",
    ],
    correct: 1,
  },
  {
    id: 22,
    section: 3,
    q: "Cho 2,479 lít khí ethylene (đkc) tác dụng hoàn toàn với dung dịch bromine dư. Khối lượng bromine (M=160) đã tham gia phản ứng là",
    options: ["A. 8,0 gam.", "B. 16,0 gam.", "C. 32,0 gam.", "D. 4,0 gam."],
    correct: 1,
  },
  {
    id: 23,
    section: 3,
    q: "Một hydrocarbon có công thức phân tử C<sub>3</sub>H<sub>8</sub> (Propane). Số lượng công thức cấu tạo của chất này là",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    correct: 0,
  },
  {
    id: 24,
    section: 3,
    q: "Khi đốt cháy 1 mol methane tỏa ra nhiệt lượng là 891 kJ. Nhiệt lượng tỏa ra khi đốt cháy hoàn toàn 3,2 gam methane (M=16) là",
    options: ["A. 178,2 kJ.", "B. 891 kJ.", "C. 2851,2 kJ.", "D. 445,5 kJ."],
    correct: 0,
  },
  {
    id: 25,
    section: 3,
    q: "Hợp chất hữu cơ X có chứa 85,7% Carbon và 14,3% Hydrogen về khối lượng. Biết khối lượng mol của X là 28 g/mol. Công thức phân tử của X là",
    options: [
      "A. CH<sub>4</sub>",
      "B. C<sub>2</sub>H<sub>4</sub>",
      "C. C<sub>2</sub>H<sub>6</sub>",
      "D. C<sub>3</sub>H<sub>6</sub>",
    ],
    correct: 1,
  },
  {
    id: 26,
    section: 3,
    q: "Để làm chín nhanh một sọt quả xanh theo cách dân gian, người ta thường đặt vào giữa sọt",
    options: [
      "A. một bát nước lạnh.",
      "B. vài quả đã chín hoàn toàn.",
      "C. một ít muối ăn.",
      "D. vài viên đá lạnh.",
    ],
    correct: 1,
  },

  // PHẦN IV - VẬN DỤNG CAO
  {
    id: 27,
    section: 4,
    q: "Dẫn 6,1975 lít (đkc) hỗn hợp khí gồm methane và ethylene đi qua dung dịch bromine dư, thấy có 16 gam bromine tham gia phản ứng. Thành phần phần trăm về thể tích của methane trong hỗn hợp là",
    options: ["A. 40%", "B. 60%", "C. 50%", "D. 20%"],
    correct: 1,
  },
  {
    id: 28,
    section: 4,
    q: "Một bình gas loại 12kg chứa hỗn hợp propane (C<sub>3</sub>H<sub>8</sub>) và butane (C<sub>4</sub>H<sub>10</sub>) theo tỉ lệ mol 1:2. Khi đốt cháy hoàn toàn, nhiệt lượng tỏa ra ước tính là bao nhiêu kJ (Biết nhiệt đốt cháy của propane là 2220 kJ/mol, butane là 2850 kJ/mol)?",
    options: [
      "A. 586.200 kJ",
      "B. 624.500 kJ",
      "C. 450.000 kJ",
      "D. 712.000 kJ",
    ],
    correct: 0,
  },
  {
    id: 29,
    section: 4,
    q: "Trộn một lượng methane và oxygen theo tỉ lệ thể tích nào sau đây để tạo thành hỗn hợp nổ mạnh nhất?",
    options: [
      "A. 1 thể tích methane : 1 thể tích oxygen",
      "B. 1 thể tích methane : 2 thể tích oxygen",
      "C. 2 thể tích methane : 1 thể tích oxygen",
      "D. 1 thể tích methane : 3 thể tích oxygen",
    ],
    correct: 1,
  },
  {
    id: 30,
    section: 4,
    q: "Đốt cháy hoàn toàn m gam hỗn hợp X gồm hai alkane kế tiếp nhau. Sản phẩm cháy dẫn qua bình đựng Ca(OH)<sub>2</sub> dư thấy có 40 gam kết tủa và khối lượng dung dịch giảm 15,2 gam. Công thức phân tử của hai alkane là",
    options: [
      "A. CH<sub>4</sub> và C<sub>2</sub>H<sub>6</sub>",
      "B. C<sub>2</sub>H<sub>6</sub> và C<sub>3</sub>H<sub>8</sub>",
      "C. C<sub>3</sub>H<sub>8</sub> và C<sub>4</sub>H<sub>10</sub>",
      "D. C<sub>4</sub>H<sub>10</sub> và C<sub>5</sub>H<sub>12</sub>",
    ],
    correct: 0,
  },
];

// --- LOGIC ỨNG DỤNG ---
const userAnswers = new Array(questionData.length).fill(null);
let isSubmitted = false;

// 1. Render câu hỏi
function renderQuiz() {
  const container = document.getElementById("quiz-app");
  let html = "";
  let currentSection = 0;

  questionData.forEach((item, index) => {
    // Render section header nếu bắt đầu section mới
    if (item.section !== currentSection) {
      html += `<div class="section-title">${sectionTitles[item.section]}</div>`;
      currentSection = item.section;
    }

    // ĐÃ SỬA: Không còn thêm class 'is-correct-answer' ở đây nữa
    html += `
                <div class="question-card" id="q-card-${index}">
                    <div class="q-header">
                        <span class="q-number">Câu ${item.id}</span>
                    </div>
                    <div class="q-text">${item.q}</div>
                    <div class="options-list">
                        ${item.options
                          .map(
                            (opt, optIndex) => `
                            <div class="option-item" id="q${index}-opt-item-${optIndex}">
                                <input type="radio" 
                                       name="q${index}" 
                                       id="q${index}-opt${optIndex}" 
                                       value="${optIndex}"
                                       onchange="handleSelect(${index}, ${optIndex})">
                                <label for="q${index}-opt${optIndex}" class="option-label">
                                    ${opt}
                                </label>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            `;
  });

  container.innerHTML = html;
  updateProgress();
}

// 2. Xử lý chọn đáp án
function handleSelect(questionIndex, optionIndex) {
  if (isSubmitted) return; // Không cho chọn lại khi đã nộp
  userAnswers[questionIndex] = optionIndex;
  updateProgress();
}

// 3. Cập nhật Progress Bar
function updateProgress() {
  const answeredCount = userAnswers.filter((a) => a !== null).length;
  const total = questionData.length;
  const percent = (answeredCount / total) * 100;

  document.getElementById("progress-bar").style.width = `${percent}%`;
  document.getElementById("progress-text").textContent =
    `${answeredCount}/${total} đã làm`;
}

// 4. Nộp bài và Chấm điểm
function submitQuiz() {
  if (isSubmitted) return;

  const answeredCount = userAnswers.filter((a) => a !== null).length;
  if (answeredCount < questionData.length) {
    const confirmSubmit = confirm(
      `Bạn mới làm ${answeredCount}/${questionData.length} câu. Bạn có chắc chắn muốn nộp bài không?`,
    );
    if (!confirmSubmit) return;
  }

  isSubmitted = true;
  let correctCount = 0;

  // Logic chấm và hiện màu
  questionData.forEach((item, index) => {
    const card = document.getElementById(`q-card-${index}`);
    const userChoice = userAnswers[index];
    const inputs = document.getElementsByName(`q${index}`);

    // Khóa input
    inputs.forEach((input) => (input.disabled = true));

    // Xử lý đếm điểm và đánh dấu thẻ
    if (userChoice === item.correct) {
      correctCount++;
      card.classList.add("correct");
    } else {
      if (userChoice !== null) {
        card.classList.add("wrong"); // Sai thì hiện đỏ
      }
    }

    // ĐÃ SỬA: Chỉ thêm class hiển thị đáp án đúng SAU KHI nộp
    const correctOptionItem = document.getElementById(
      `q${index}-opt-item-${item.correct}`,
    );
    if (correctOptionItem) {
      correctOptionItem.classList.add("show-correct");
    }
  });

  // Tính điểm
  const score = (correctCount / questionData.length) * 10;
  showResult(score, correctCount);

  // Đổi nút
  document.getElementById("btn-submit").style.display = "none";
  document.getElementById("btn-reset").style.display = "block";
}

// 5. Hiển thị Modal Kết quả
function showResult(score, correctCount) {
  const modal = document.getElementById("result-modal");
  const scoreEl = document.getElementById("modal-score");
  const countEl = document.getElementById("modal-correct-count");
  const badgeEl = document.getElementById("modal-badge");

  scoreEl.textContent = score.toFixed(1);
  countEl.textContent = `Đúng ${correctCount}/${questionData.length} câu`;

  // Nhận xét
  badgeEl.className = "result-badge";
  if (score >= 8.0) {
    badgeEl.textContent = "RẤT TỐT";
    badgeEl.classList.add("badge-good");
  } else if (score >= 6.0) {
    badgeEl.textContent = "ĐẠT";
    badgeEl.classList.add("badge-pass");
  } else {
    badgeEl.textContent = "CẦN ÔN LẠI";
    badgeEl.classList.add("badge-fail");
  }

  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("result-modal").classList.remove("active");
}

// 6. Làm lại
function resetQuiz() {
  if (isSubmitted) closeModal();

  // Reset biến
  userAnswers.fill(null);
  isSubmitted = false;

  // Reset UI
  renderQuiz();
  document.getElementById("btn-submit").style.display = "block";
  document.getElementById("btn-reset").style.display = "none";
  scrollToTop();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Khởi chạy
renderQuiz();
