// DATA SOURCE
const questionData = [
  // PHẦN 1: NHẬN BIẾT
  {
    id: 1,
    section: 1,
    q: "Ở điều kiện thường, oxygen là chất ở thể nào?",
    options: ["A. Rắn.", "B. Lỏng.", "C. Khí.", "D. Plasma."],
    correct: 2,
  },
  {
    id: 2,
    section: 1,
    q: "Chất khí nào chiếm tỉ lệ thể tích lớn nhất trong không khí?",
    options: [
      "A. Oxygen.",
      "B. Nitrogen.",
      "C. Carbon dioxide.",
      "D. Hơi nước.",
    ],
    correct: 1,
  },
  {
    id: 3,
    section: 1,
    q: "Khí oxygen có mùi và vị như thế nào?",
    options: [
      "A. Mùi hắc, vị chua.",
      "B. Mùi thơm, vị ngọt.",
      "C. Không màu, không mùi, không vị.",
      "D. Màu xanh nhạt, mùi hắc.",
    ],
    correct: 2,
  },
  {
    id: 4,
    section: 1,
    q: "Tỉ lệ thể tích khí oxygen trong không khí là khoảng bao nhiêu?",
    options: ["A. 1%.", "B. 78%.", "C. 21%.", "D. 0,03%."],
    correct: 2,
  },
  {
    id: 5,
    section: 1,
    q: "Thành phần nào trong không khí đóng vai trò chính trong việc duy trì sự cháy?",
    options: [
      "A. Nitrogen.",
      "B. Oxygen.",
      "C. Carbon dioxide.",
      "D. Khí hiếm.",
    ],
    correct: 1,
  },
  {
    id: 6,
    section: 1,
    q: "Khí nào được thực vật sử dụng cho quá trình quang hợp?",
    options: ["A. Oxygen.", "B. Nitrogen.", "C. Carbon dioxide.", "D. Argon."],
    correct: 2,
  },
  {
    id: 7,
    section: 1,
    q: "Biểu hiện nào sau đây không phải là dấu hiệu của ô nhiễm không khí?",
    options: [
      "A. Tầm nhìn bị giảm do sương mù quang hóa.",
      "B. Xuất hiện mùi khó chịu.",
      "C. Không khí trong lành, mát mẻ.",
      "D. Gây kích ứng mắt và da.",
    ],
    correct: 2,
  },
  {
    id: 8,
    section: 1,
    q: "Nguồn gây ô nhiễm không khí nào sau đây đến từ tự nhiên?",
    options: [
      "A. Khí thải nhà máy.",
      "B. Núi lửa phun trào.",
      "C. Đốt rơm rạ.",
      "D. Khói xe máy.",
    ],
    correct: 1,
  },
  {
    id: 9,
    section: 1,
    q: "Ở 20 °C và 1 atm, 1 lít nước có thể hòa tan được bao nhiêu ml khí oxygen?",
    options: ["A. 21 ml.", "B. 78 ml.", "C. 31 ml.", "D. 100 ml."],
    correct: 2,
  },
  {
    id: 10,
    section: 1,
    q: "Thành phần 'khí khác' (khí hiếm, bụi...) chiếm bao nhiêu phần trăm thể tích không khí?",
    options: ["A. 1%.", "B. 5%.", "C. 10%.", "D. 21%."],
    correct: 0,
  },

  // PHẦN 2: THÔNG HIỂU
  {
    id: 11,
    section: 2,
    q: "Tại sao oxygen được dùng trong bình khí của thợ lặn?",
    options: [
      "A. Vì oxygen giúp thợ lặn bơi nhanh hơn.",
      "B. Vì oxygen duy trì sự hô hấp dưới nước.",
      "C. Vì oxygen làm nước ấm hơn.",
      "D. Vì oxygen nhẹ hơn nước.",
    ],
    correct: 1,
  },
  {
    id: 12,
    section: 2,
    q: "Nhận định nào sau đây về tính chất vật lí của oxygen là đúng?",
    options: [
      "A. Oxygen nhẹ hơn không khí.",
      "B. Oxygen tan rất nhiều trong nước.",
      "C. Oxygen nặng hơn không khí.",
      "D. Oxygen có màu xanh khi ở thể khí.",
    ],
    correct: 2,
  },
  {
    id: 13,
    section: 2,
    q: "Nếu não người không được cung cấp oxygen trong khoảng 4–5 phút thì điều gì sẽ xảy ra?",
    options: [
      "A. Não hoạt động tốt hơn.",
      "B. Não bắt đầu bị tổn thương.",
      "C. Không có ảnh hưởng gì.",
      "D. Cơ thể chỉ cảm thấy hơi mệt.",
    ],
    correct: 1,
  },
  {
    id: 14,
    section: 2,
    q: "Vai trò của hơi nước trong không khí đối với Trái Đất là gì?",
    options: [
      "A. Duy trì sự cháy.",
      "B. Cung cấp dinh dưỡng cho cây.",
      "C. Góp phần ổn định nhiệt độ và tạo ra mưa.",
      "D. Làm giảm nồng độ oxygen.",
    ],
    correct: 2,
  },
  {
    id: 15,
    section: 2,
    q: "Vì sao nói nitrogen có ích cho sự phát triển của cây trồng?",
    options: [
      "A. Vì cây trực tiếp hít nitrogen để quang hợp.",
      "B. Vì nitrogen có thể chuyển hóa thành dạng dưỡng chất cho cây.",
      "C. Vì nitrogen giúp cây tiêu diệt sâu bệnh.",
      "D. Vì nitrogen ngăn chặn tia cực tím.",
    ],
    correct: 1,
  },
  {
    id: 16,
    section: 2,
    q: "Hoạt động nào sau đây góp phần bảo vệ môi trường không khí?",
    options: [
      "A. Đốt rác thải nhựa tại gia đình.",
      "B. Sử dụng năng lượng mặt trời thay cho than đá.",
      "C. Chặt cây xanh để xây nhà cao tầng.",
      "D. Tăng cường sử dụng xe máy cá nhân.",
    ],
    correct: 1,
  },
  {
    id: 17,
    section: 2,
    q: "Hiện tượng 'cháy rừng' gây ra hậu quả gì đối với không khí?",
    options: [
      "A. Tăng lượng oxygen.",
      "B. Làm không khí sạch hơn.",
      "C. Phát tán khói bụi và khí độc.",
      "D. Làm giảm nhiệt độ Trái Đất.",
    ],
    correct: 2,
  },
  {
    id: 18,
    section: 2,
    q: "Tại sao ở các bệnh viện, bệnh nhân suy hô hấp cần được thở bằng bình oxygen?",
    options: [
      "A. Để làm mát phổi.",
      "B. Vì nồng độ oxygen trong bình cao hơn không khí, giúp trao đổi chất dễ hơn.",
      "C. Để giảm lượng khí nitrogen trong máu.",
      "D. Vì oxygen trong bình có mùi thơm dễ chịu.",
    ],
    correct: 1,
  },
  {
    id: 19,
    section: 2,
    q: "Thành phần nào trong không khí ngăn cản sự cháy quá mãnh liệt?",
    options: ["A. Oxygen.", "B. Nitrogen.", "C. Hơi nước.", "D. Khí hiếm."],
    correct: 1,
  },
  {
    id: 20,
    section: 2,
    q: "Sự thay đổi thành phần không khí do sự có mặt của các 'chất lạ' được gọi là gì?",
    options: [
      "A. Sự biến đổi khí hậu.",
      "B. Sự ô nhiễm không khí.",
      "C. Sự quang hợp.",
      "D. Sự hô hấp.",
    ],
    correct: 1,
  },

  // PHẦN 3: VẬN DỤNG
  {
    id: 21,
    section: 3,
    q: "Một thợ lặn muốn lặn xuống biển sâu. Thiết bị nào sau đây là bắt buộc phải có để duy trì sự sống?",
    options: [
      "A. Bình khí chứa nitrogen nguyên chất.",
      "B. Bình khí chứa oxygen nén.",
      "C. Bình khí chứa carbon dioxide.",
      "D. Máy hút bụi mini.",
    ],
    correct: 1,
  },
  {
    id: 22,
    section: 3,
    q: "Khi đốt bếp than, nếu ta quạt mạnh vào bếp thì lửa cháy to hơn. Điều này là do:",
    options: [
      "A. Quạt làm hạ nhiệt độ của than.",
      "B. Quạt cung cấp thêm lượng oxygen cho sự cháy.",
      "C. Quạt đẩy khí nitrogen đi chỗ khác.",
      "D. Quạt làm than mềm hơn.",
    ],
    correct: 1,
  },
  {
    id: 23,
    section: 3,
    q: "Để giảm thiểu ô nhiễm không khí tại các thành phố lớn, giải pháp nào sau đây là hiệu quả nhất?",
    options: [
      "A. Xây dựng thêm nhiều bãi đỗ xe.",
      "B. Phát triển hệ thống giao thông công cộng và xe điện.",
      "C. Đốt rác thải sinh hoạt vào ban đêm.",
      "D. Hạn chế trồng cây xanh trên đường phố.",
    ],
    correct: 1,
  },
  {
    id: 24,
    section: 3,
    q: "Trong một căn phòng kín, nếu có quá nhiều người thì sau một thời gian ta cảm thấy ngột ngạt. Nguyên nhân chính là do:",
    options: [
      "A. Thiếu nitrogen.",
      "B. Thiếu oxygen và tăng carbon dioxide.",
      "C. Nhiệt độ phòng quá thấp.",
      "D. Thiếu hơi nước.",
    ],
    correct: 1,
  },
  {
    id: 25,
    section: 3,
    q: "Tại sao khi nuôi cá trong bể kính, người ta thường lắp thêm máy sủi bọt?",
    options: [
      "A. Để trang trí cho đẹp.",
      "B. Để đẩy cá bơi lội nhiều hơn.",
      "C. Để hòa tan thêm oxygen vào nước cho cá hô hấp.",
      "D. Để làm nước nóng lên.",
    ],
    correct: 2,
  },
  {
    id: 26,
    section: 3,
    q: "Hành động nào của học sinh giúp bảo vệ môi trường không khí tại trường học?",
    options: [
      "A. Vứt rác bừa bãi ra sân trường.",
      "B. Đi xe đạp hoặc đi bộ đến trường.",
      "C. Sử dụng nhiều túi nilon.",
      "D. Đốt giấy vụn trong lớp học.",
    ],
    correct: 1,
  },

  // PHẦN 4: VẬN DỤNG CAO
  {
    id: 27,
    section: 4,
    q: "Giả sử một người bị kẹt trong một căn hầm kín, không có thông gió. Sau bao lâu thì các tế bào não bắt đầu bị tổn thương không phục hồi nếu nồng độ oxygen giảm xuống quá thấp?",
    options: [
      "A. 1–2 phút.",
      "B. 4–5 phút.",
      "C. 9–10 phút.",
      "D. 20–30 phút.",
    ],
    correct: 2,
  }, // Theo Key
  {
    id: 28,
    section: 4,
    q: "Trong một thí nghiệm, người ta úp một chiếc cốc thủy tinh lên một cây nến đang cháy trên đĩa nước. Sau một lúc nến tắt và nước dâng lên trong cốc khoảng 1/5 thể tích không gian cốc. Hiện tượng nước dâng lên chứng minh điều gì?",
    options: [
      "A. Oxygen chiếm khoảng 21% thể tích không khí và đã bị tiêu thụ khi nến cháy.",
      "B. Nitrogen chiếm khoảng 80% và đã đẩy nước vào.",
      "C. Nước tự bốc hơi làm nến tắt.",
      "D. Lực hút của nến làm nước dâng lên.",
    ],
    correct: 0,
  },
  {
    id: 29,
    section: 4,
    q: "Việc đốt rơm rạ sau mỗi mùa vụ ở các vùng nông thôn gây ra tác hại gì nghiêm trọng nhất đối với môi trường không khí ở cả vùng đó và các vùng lân cận?",
    options: [
      "A. Làm đất bị bạc màu.",
      "B. Tạo ra lượng lớn bụi mịn và khí thải gây ô nhiễm diện rộng và giảm tầm nhìn.",
      "C. Làm tăng lượng oxygen trong không khí.",
      "D. Làm giảm độ ẩm của đất.",
    ],
    correct: 1,
  },
  {
    id: 30,
    section: 4,
    q: "Một khu công nghiệp bị phản ánh là gây ô nhiễm không khí. Nếu bạn là một chuyên gia môi trường, biện pháp nào sau đây bạn sẽ đề xuất đầu tiên để kiểm soát bền vững?",
    options: [
      "A. Đóng cửa toàn bộ các nhà máy ngay lập tức.",
      "B. Yêu cầu lắp đặt hệ thống lọc khí thải chuẩn quốc tế và quan trắc tự động.",
      "C. Di dời toàn bộ dân cư xung quanh đi nơi khác.",
      "D. Cho các nhà máy hoạt động vào ban đêm để tránh bị nhìn thấy khói.",
    ],
    correct: 1,
  },
];

const sectionTitles = {
  1: "PHẦN 1: NHẬN BIẾT",
  2: "PHẦN 2: THÔNG HIỂU",
  3: "PHẦN 3: VẬN DỤNG",
  4: "PHẦN 4: VẬN DỤNG CAO",
};

let userAnswers = {};
let isSubmitted = false;

// INIT QUIZ
function initQuiz() {
  const contentDiv = document.getElementById("quiz-content");
  let currentSection = 0;

  questionData.forEach((item, index) => {
    // Add Section Header if needed
    if (item.section !== currentSection) {
      currentSection = item.section;
      const sectionHeader = document.createElement("div");
      sectionHeader.className = "section-header";
      sectionHeader.innerText = sectionTitles[currentSection];
      contentDiv.appendChild(sectionHeader);
    }

    // Create Card
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `q-card-${item.id}`;

    // Question Text
    const qText = document.createElement("div");
    qText.className = "question-text";
    qText.innerText = `Câu ${item.id}: ${item.q}`;
    card.appendChild(qText);

    // Options Grid
    const grid = document.createElement("div");
    grid.className = "options-grid";

    item.options.forEach((optText, optIndex) => {
      const label = document.createElement("label");
      label.className = "option-label";
      label.dataset.qid = item.id;
      label.dataset.oid = optIndex;
      label.onclick = () => selectOption(item.id, optIndex);

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${item.id}`;
      input.className = "option-input";
      input.value = optIndex;

      // Prevent click bubbling causing double triggers
      input.onclick = (e) => {
        e.stopPropagation();
        selectOption(item.id, optIndex);
      };

      const span = document.createElement("span");
      span.innerText = optText;

      label.appendChild(input);
      label.appendChild(span);
      grid.appendChild(label);
    });

    card.appendChild(grid);

    // Explanation Block (Hidden)
    const explanation = document.createElement("div");
    explanation.className = "explanation";
    explanation.id = `explain-${item.id}`;
    // Convert index to Letter for display
    const letters = ["A", "B", "C", "D"];
    explanation.innerHTML = `<strong>Đáp án đúng: ${letters[item.correct]}</strong>`;
    card.appendChild(explanation);

    contentDiv.appendChild(card);
  });
}

// HANDLE SELECTION
function selectOption(qid, oid) {
  if (isSubmitted) return;

  // Update Data
  userAnswers[qid] = oid;

  // Update UI (Visual Selection)
  const labels = document.querySelectorAll(`.option-label[data-qid="${qid}"]`);
  labels.forEach((lbl) => {
    lbl.classList.remove("selected");
    const input = lbl.querySelector("input");
    if (parseInt(lbl.dataset.oid) === oid) {
      lbl.classList.add("selected");
      input.checked = true;
    }
  });

  updateProgress();
}

// PROGRESS BAR
function updateProgress() {
  const total = questionData.length;
  const answered = Object.keys(userAnswers).length;
  const percent = Math.round((answered / total) * 100);

  document.getElementById("progress-bar").style.width = `${percent}%`;
  document.getElementById("progress-text").innerText =
    `Đã làm: ${answered}/${total} câu (${percent}%)`;
}

// SUBMIT QUIZ
function submitQuiz() {
  if (Object.keys(userAnswers).length < questionData.length) {
    if (
      !confirm(
        "Bạn chưa làm hết các câu hỏi. Bạn có chắc chắn muốn nộp bài không?",
      )
    ) {
      return;
    }
  }

  isSubmitted = true;
  let correctCount = 0;

  questionData.forEach((item) => {
    const userChoice = userAnswers[item.id];
    const correctChoice = item.correct;
    const card = document.getElementById(`q-card-${item.id}`);
    const labels = card.querySelectorAll(".option-label");
    const explanation = document.getElementById(`explain-${item.id}`);

    // Show explanation/correct answer
    explanation.style.display = "block";

    // Check correctness
    if (userChoice !== undefined && userChoice === correctChoice) {
      correctCount++;
    }

    // Color the options
    labels.forEach((lbl) => {
      const oid = parseInt(lbl.dataset.oid);
      const input = lbl.querySelector("input");
      input.disabled = true; // Disable inputs

      // Remove selection style
      lbl.classList.remove("selected");

      if (oid === correctChoice) {
        lbl.classList.add("correct"); // Always highlight correct answer Green
      } else if (userChoice === oid && userChoice !== correctChoice) {
        lbl.classList.add("incorrect"); // Highlight wrong selection Red
      }
    });
  });

  // Calculate Score (Scale 10)
  const score = (correctCount / 30) * 10;
  showResult(score, correctCount);

  // Switch Buttons
  document.getElementById("btn-submit").style.display = "none";
  document.getElementById("btn-retry").style.display = "block";
}

// SHOW RESULT
function showResult(score, correctCount) {
  const overlay = document.getElementById("result-overlay");
  const scoreEl = document.getElementById("final-score");
  const countEl = document.getElementById("correct-count");
  const gradeEl = document.getElementById("feedback-grade");
  const scoreCircle = document.querySelector(".score-circle");

  scoreEl.innerText = score.toFixed(1); // 1 decimal place
  countEl.innerText = correctCount;

  let grade = "";
  let color = "";

  if (score >= 8) {
    grade = "RẤT TỐT!";
    color = "#10b981"; // Green
  } else if (score >= 6) {
    grade = "ĐẠT";
    color = "#f59e0b"; // Orange/Yellow
  } else {
    grade = "CẦN ÔN LẠI";
    color = "#ef4444"; // Red
  }

  gradeEl.innerText = grade;
  gradeEl.style.color = color;
  scoreCircle.style.background = color;

  overlay.classList.add("active");
}

function closeResultModal() {
  document.getElementById("result-overlay").classList.remove("active");
  // Scroll to top to review
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// RETRY
function retryQuiz() {
  if (
    confirm("Bạn có chắc muốn làm lại bài không? Mọi kết quả cũ sẽ bị xóa.")
  ) {
    location.reload();
  }
}

// START
window.onload = initQuiz;
