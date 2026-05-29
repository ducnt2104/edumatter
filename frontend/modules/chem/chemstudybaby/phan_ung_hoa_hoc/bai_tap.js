// --- DATA ---
// Mapping answers: A=0, B=1, C=2, D=3
const questionData = [
  // I. NHẬN BIẾT
  {
    id: 1,
    section: 1,
    q: "Hiện tượng nào sau đây là biến đổi vật lí?",
    options: [
      "A. Củi cháy thành tro.",
      "B. Đinh sắt để lâu ngày bị gỉ sét.",
      "C. Nước đá tan chảy thành nước lỏng.",
      "D. Nung đá vôi tạo thành vôi sống.",
    ],
    correct: 2,
  }, // 1C
  {
    id: 2,
    section: 1,
    q: "Biến đổi hóa học là hiện tượng:",
    options: [
      "A. Chất biến đổi trạng thái nhưng giữ nguyên là chất ban đầu.",
      "B. Chất biến đổi hình dạng nhưng giữ nguyên là chất ban đầu.",
      "C. Chất biến đổi tạo ra chất khác.",
      "D. Chất chỉ thay đổi kích thước.",
    ],
    correct: 2,
  }, // 2C
  {
    id: 3,
    section: 1,
    q: "Chất ban đầu tham gia vào phản ứng hóa học được gọi là:",
    options: [
      "A. Sản phẩm.",
      "B. Chất xúc tác.",
      "C. Chất phản ứng (chất đầu).",
      "D. Chất kết tủa.",
    ],
    correct: 2,
  }, // 3C
  {
    id: 4,
    section: 1,
    q: "Phản ứng tỏa nhiệt là phản ứng:",
    options: [
      "A. Thu năng lượng từ môi trường.",
      "B. Giải phóng năng lượng (nhiệt) ra môi trường.",
      "C. Không làm thay đổi nhiệt độ môi trường.",
      "D. Chỉ xảy ra khi đun nóng liên tục.",
    ],
    correct: 1,
  }, // 4B
  {
    id: 5,
    section: 1,
    q: "Biểu thức đúng của Định luật bảo toàn khối lượng cho phản ứng A + B -> C + D là:",
    options: [
      "A. mA + mC = mB + mD",
      "B. mA + mB = mC + mD",
      "C. mA - mB = mC - mD",
      "D. mA x mB = mC x mD",
    ],
    correct: 1,
  }, // 5B
  {
    id: 6,
    section: 1,
    q: "Đơn vị của khối lượng mol (M) là:",
    options: ["A. amu.", "B. gam (g).", "C. g/mol.", "D. lít (l)."],
    correct: 2,
  }, // 6C
  {
    id: 7,
    section: 1,
    q: "Ở điều kiện chuẩn (25 độ C, 1 bar), thể tích mol của chất khí bất kì là:",
    options: ["A. 22,4 lít.", "B. 24,0 lít.", "C. 24,79 lít.", "D. 22,7 lít."],
    correct: 2,
  }, // 7C
  {
    id: 8,
    section: 1,
    q: "Tỉ khối của khí A đối với khí B (dA/B) được tính bằng công thức:",
    options: [
      "A. dA/B = MA / MB",
      "B. dA/B = MB / MA",
      "C. dA/B = MA x MB",
      "D. dA/B = MA + MB",
    ],
    correct: 0,
  }, // 8A
  {
    id: 9,
    section: 1,
    q: "Chất làm tăng tốc độ phản ứng nhưng không bị thay đổi sau phản ứng gọi là:",
    options: [
      "A. Chất phản ứng.",
      "B. Sản phẩm.",
      "C. Chất xúc tác.",
      "D. Chất tan.",
    ],
    correct: 2,
  }, // 9C
  {
    id: 10,
    section: 1,
    q: "Nồng độ phần trăm (C%) cho biết số gam chất tan có trong:",
    options: [
      "A. 100g nước.",
      "B. 100g dung dịch.",
      "C. 1 lít dung dịch.",
      "D. 1 lít dung môi.",
    ],
    correct: 1,
  }, // 10B

  // II. THÔNG HIỂU
  {
    id: 11,
    section: 2,
    q: "Quá trình cồn để trong lọ không kín bị bay hơi được xếp vào loại:",
    options: [
      "A. Biến đổi hóa học vì cồn đã biến mất.",
      "B. Biến đổi vật lí vì cồn chỉ chuyển từ trạng thái lỏng sang hơi.",
      "C. Phản ứng thu nhiệt.",
      "D. Phản ứng tỏa nhiệt.",
    ],
    correct: 1,
  }, // 11B
  {
    id: 12,
    section: 2,
    q: "Dấu hiệu nào sau đây chứng tỏ có phản ứng hóa học xảy ra khi nhỏ giấm vào đá vôi?",
    options: [
      "A. Đá vôi tan chảy thành chất lỏng.",
      "B. Xuất hiện sủi bọt khí.",
      "C. Đá vôi bị bẻ cong.",
      "D. Không có hiện tượng gì.",
    ],
    correct: 1,
  }, // 12B
  {
    id: 13,
    section: 2,
    q: "Trong phản ứng hóa học, yếu tố nào sau đây được giữ nguyên?",
    options: [
      "A. Liên kết giữa các nguyên tử.",
      "B. Phân tử của các chất.",
      "C. Số nguyên tử của mỗi nguyên tố.",
      "D. Tính chất của các chất.",
    ],
    correct: 2,
  }, // 13C
  {
    id: 14,
    section: 2,
    q: "Tại sao khi đốt than (phản ứng tỏa nhiệt), sau khi mồi lửa thì than tự cháy tiếp?",
    options: [
      "A. Vì nó nhận nhiệt từ môi trường.",
      "B. Vì phản ứng tự giải phóng nhiệt lượng để duy trì sự cháy.",
      "C. Vì than là chất xúc tác.",
      "D. Vì không có chất mới tạo thành.",
    ],
    correct: 1,
  }, // 14B
  {
    id: 15,
    section: 2,
    q: "Cho phương trình: 2Mg + O2 -> 2MgO. Tỉ lệ số phân tử giữa Mg và O2 là:",
    options: ["A. 1 : 1", "B. 1 : 2", "C. 2 : 1", "D. 2 : 2"],
    correct: 2,
  }, // 15C
  {
    id: 16,
    section: 2,
    q: "Khí CO2 (M=44) nặng hay nhẹ hơn không khí (M=29) bao nhiêu lần?",
    options: [
      "A. Nặng hơn khoảng 1,52 lần.",
      "B. Nhẹ hơn khoảng 0,66 lần.",
      "C. Nặng hơn khoảng 2,5 lần.",
      "D. Bằng không khí.",
    ],
    correct: 0,
  }, // 16A
  {
    id: 17,
    section: 2,
    q: "Khi chẻ nhỏ củi để nhóm bếp, ta đang tác động vào yếu tố nào để tăng tốc độ phản ứng?",
    options: [
      "A. Nồng độ.",
      "B. Nhiệt độ.",
      "C. Diện tích bề mặt tiếp xúc.",
      "D. Chất xúc tác.",
    ],
    correct: 2,
  }, // 17C
  {
    id: 18,
    section: 2,
    q: "Một dung dịch muối ăn nồng độ 10% có nghĩa là:",
    options: [
      "A. Có 10g muối trong 100g nước.",
      "B. Có 10g muối trong 100g dung dịch.",
      "C. Có 10g muối trong 1 lít dung dịch.",
      "D. Có 10g muối trong 90g dung dịch.",
    ],
    correct: 1,
  }, // 18B
  {
    id: 19,
    section: 2,
    q: "Quá trình thức ăn bị ôi thiu là biến đổi hóa học vì:",
    options: [
      "A. Thức ăn thay đổi màu sắc.",
      "B. Thức ăn bị mềm đi.",
      "C. Có sự tạo thành chất mới có mùi lạ và độc hại.",
      "D. Thức ăn bị giảm kích thước.",
    ],
    correct: 2,
  }, // 19C
  {
    id: 20,
    section: 2,
    q: "Khi nung đá vôi, ta phải cung cấp nhiệt liên tục. Đây là ví dụ của:",
    options: [
      "A. Phản ứng tỏa nhiệt.",
      "B. Phản ứng thu nhiệt.",
      "C. Biến đổi vật lí.",
      "D. Sự bay hơi.",
    ],
    correct: 1,
  }, // 20B

  // III. VẬN DỤNG
  {
    id: 21,
    section: 3,
    q: "Đốt cháy hoàn toàn 6g Magnesium (Mg) trong Oxygen (O2) thu được 10g Magnesium oxide (MgO). Khối lượng Oxygen đã phản ứng là:",
    options: ["A. 16g.", "B. 6g.", "C. 4g.", "D. 2g."],
    correct: 2,
  }, // 21C
  {
    id: 22,
    section: 3,
    q: "Thể tích của 0,2 mol khí O2 ở điều kiện chuẩn (24,79 l/mol) là:",
    options: [
      "A. 4,48 lít.",
      "B. 4,958 lít.",
      "C. 2,479 lít.",
      "D. 24,79 lít.",
    ],
    correct: 1,
  }, // 22B
  {
    id: 23,
    section: 3,
    q: "Hòa tan 10g đường vào 40g nước. Nồng độ phần trăm (C%) của dung dịch thu được là:",
    options: ["A. 20%.", "B. 25%.", "C. 10%.", "D. 15%."],
    correct: 0,
  }, // 23A
  {
    id: 24,
    section: 3,
    q: "Cho 20,8g BaCl2 phản ứng với Na2SO4 thu được 11,7g NaCl và một lượng BaSO4. Biết tổng khối lượng các chất tham gia là 35g. Khối lượng BaSO4 thu được là:",
    options: ["A. 23,3g.", "B. 11,7g.", "C. 20,8g.", "D. 15,2g."],
    correct: 0,
  }, // 24A
  {
    id: 25,
    section: 3,
    q: "Để tăng tốc độ phân hủy nước oxy già (H2O2), người ta cho thêm một ít bột MnO2. Sau phản ứng, bột MnO2 vẫn nguyên vẹn về khối lượng. MnO2 đóng vai trò là:",
    options: [
      "A. Chất phản ứng.",
      "B. Sản phẩm.",
      "C. Chất xúc tác.",
      "D. Chất tan.",
    ],
    correct: 2,
  }, // 25C
  {
    id: 26,
    section: 3,
    q: "Khối lượng của 0,1 mol khí CO2 (M=44) là:",
    options: ["A. 44g.", "B. 4,4g.", "C. 0,44g.", "D. 440g."],
    correct: 1,
  }, // 26B

  // IV. VẬN DỤNG CAO
  {
    id: 27,
    section: 4,
    q: "Nung 50g đá vôi (CaCO3, M=100) thu được vôi sống (CaO, M=56) và khí CO2. Nếu hiệu suất phản ứng là 100%, khối lượng vôi sống thu được là:",
    options: ["A. 56g.", "B. 28g.", "C. 50g.", "D. 44g."],
    correct: 1,
  }, // 27B
  {
    id: 28,
    section: 4,
    q: "Một dung dịch chứa 0,1 mol NaOH trong 200 mL dung dịch. Nồng độ mol (CM) của dung dịch này là:",
    options: ["A. 0,5 M.", "B. 0,05 M.", "C. 1 M.", "D. 2 M."],
    correct: 0,
  }, // 28A
  {
    id: 29,
    section: 4,
    q: "Đốt cháy hoàn toàn khí methane (CH4) cần 6,4g Oxygen (O2). Biết phương trình: CH4 + 2O2 -> CO2 + 2H2O. Số mol khí methane đã cháy là: (O=16)",
    options: ["A. 0,1 mol.", "B. 0,2 mol.", "C. 0,05 mol.", "D. 0,4 mol."],
    correct: 0,
  }, // 29A
  {
    id: 30,
    section: 4,
    q: "Tại sao khi quạt mạnh vào bếp củi đang cháy thì lửa cháy to hơn, nhưng quạt mạnh vào ngọn nến đang cháy thì nến lại tắt?",
    options: [
      "A. Củi cần oxygen, nến không cần oxygen.",
      "B. Quạt mạnh làm tăng oxygen giúp củi cháy, nhưng làm nhiệt độ ngọn nến giảm xuống dưới điểm cháy nên nến tắt.",
      "C. Nến cháy là biến đổi vật lí nên dễ tắt.",
      "D. Do nến tỏa nhiệt ít hơn củi.",
    ],
    correct: 1,
  }, // 30B
];

const sectionTitles = {
  1: "I. NHẬN BIẾT (10 CÂU)",
  2: "II. THÔNG HIỂU (10 CÂU)",
  3: "III. VẬN DỤNG (6 CÂU)",
  4: "IV. VẬN DỤNG CAO (4 CÂU)",
};

const userAnswers = {}; // Store: { questionId: optionIndex }
let isSubmitted = false;

// --- RENDER LOGIC ---
function initQuiz() {
  const container = document.getElementById("quizContainer");
  let currentSection = 0;

  questionData.forEach((item, index) => {
    // Render Section Title if changed
    if (item.section !== currentSection) {
      currentSection = item.section;
      const secTitle = document.createElement("div");
      secTitle.className = "section-title";
      secTitle.innerText = sectionTitles[currentSection];
      container.appendChild(secTitle);
    }

    // Create Card
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `q-card-${item.id}`;

    // Header
    const qHeader = document.createElement("div");
    qHeader.className = "q-header";
    qHeader.innerHTML = `
                    <div class="q-number">Câu ${item.id}</div>
                    <div class="q-text">${item.q}</div>
                `;

    // Options
    const optionsGrid = document.createElement("div");
    optionsGrid.className = "options-grid";

    item.options.forEach((opt, idx) => {
      const inputId = `q${item.id}_opt${idx}`;

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question_${item.id}`;
      input.id = inputId;
      input.value = idx;
      input.onchange = () => handleSelect(item.id, idx);

      const label = document.createElement("label");
      label.className = "option-label";
      label.setAttribute("for", inputId);
      label.innerText = opt;
      label.id = `label_q${item.id}_opt${idx}`;

      optionsGrid.appendChild(input);
      optionsGrid.appendChild(label);
    });

    card.appendChild(qHeader);
    card.appendChild(optionsGrid);
    container.appendChild(card);
  });
}

// --- INTERACTION LOGIC ---
function handleSelect(questionId, optionIndex) {
  if (isSubmitted) return;
  userAnswers[questionId] = optionIndex;
  updateProgress();
}

function updateProgress() {
  const total = questionData.length;
  const answered = Object.keys(userAnswers).length;
  const percentage = (answered / total) * 100;

  document.getElementById("progressBar").style.width = `${percentage}%`;
  document.getElementById("progressText").innerText =
    `${answered}/${total} câu đã làm`;
}

// --- SUBMIT & GRADING LOGIC ---
function submitQuiz() {
  if (isSubmitted) return;

  const total = questionData.length;
  const answered = Object.keys(userAnswers).length;

  if (answered < total) {
    const confirmSubmit = confirm(
      `Bạn mới làm ${answered}/${total} câu. Bạn có chắc chắn muốn nộp bài không?`,
    );
    if (!confirmSubmit) return;
  }

  isSubmitted = true;
  document.getElementById("submitBtn").disabled = true;
  document.getElementById("submitBtn").innerText = "Đã nộp bài";
  document.getElementById("submitBtn").style.backgroundColor = "#9ca3af";

  let correctCount = 0;

  // Grading Loop
  questionData.forEach((item) => {
    const card = document.getElementById(`q-card-${item.id}`);
    card.classList.add("graded");
    const userChoice = userAnswers[item.id];

    // Highlight Correct Answer (Always show green)
    const correctLabel = document.getElementById(
      `label_q${item.id}_opt${item.correct}`,
    );
    if (correctLabel) correctLabel.classList.add("correct");

    // Check user choice
    if (userChoice !== undefined) {
      if (userChoice === item.correct) {
        correctCount++;
      } else {
        // Highlight Incorrect user choice (Red)
        const wrongLabel = document.getElementById(
          `label_q${item.id}_opt${userChoice}`,
        );
        if (wrongLabel) wrongLabel.classList.add("incorrect");
      }
    }

    // Disable inputs
    const inputs = document.getElementsByName(`question_${item.id}`);
    inputs.forEach((inp) => (inp.disabled = true));
  });

  showResultModal(correctCount, total);
}

function showResultModal(correct, total) {
  const score = (correct / total) * 10;
  const roundedScore = Math.round(score * 10) / 10; // 1 decimal place

  let feedback = "";
  let color = "";

  if (roundedScore >= 8.0) {
    feedback = "RẤT TỐT! Kiến thức của bạn rất vững.";
    color = "#10b981"; // Green
  } else if (roundedScore >= 6.0) {
    feedback = "ĐẠT. Bạn đã nắm được kiến thức cơ bản.";
    color = "#f59e0b"; // Orange
  } else {
    feedback = "CẦN ÔN LẠI. Hãy xem kỹ lại các câu sai nhé.";
    color = "#ef4444"; // Red
  }

  document.getElementById("modalScore").innerText = roundedScore;
  document.getElementById("modalScore").style.backgroundColor = color;
  document.getElementById("modalCorrectCount").innerText = correct;
  document.getElementById("modalFeedback").innerText = feedback;
  document.getElementById("modalTitle").innerText =
    roundedScore >= 6 ? "Chúc mừng!" : "Cố gắng lên!";

  document.getElementById("resultModal").classList.add("active");
}

function closeModal() {
  document.getElementById("resultModal").classList.remove("active");
  // Scroll to top to review
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- INIT ---
window.onload = initQuiz;
