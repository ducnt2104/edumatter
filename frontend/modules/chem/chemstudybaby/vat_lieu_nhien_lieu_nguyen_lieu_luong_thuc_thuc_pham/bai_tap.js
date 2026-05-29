const questionData = [
  // PHẦN 1: NHẬN BIẾT
  {
    id: 1,
    section: 1,
    q: "Vật liệu nào sau đây có tính đàn hồi, không thấm nước và không dẫn điện?",
    options: ["A. Thủy tinh", "B. Kim loại", "C. Cao su", "D. Gốm"],
    correct: 2,
  },
  {
    id: 2,
    section: 1,
    q: "Nhiên liệu nào sau đây tồn tại ở trạng thái khí trong điều kiện thường?",
    options: ["A. Than đá", "B. Xăng", "C. Khí Biogas", "D. Củi"],
    correct: 2,
  },
  {
    id: 3,
    section: 1,
    q: "Nhóm chất nào cung cấp năng lượng chính cho mọi hoạt động của cơ thể, có nhiều trong gạo và ngô?",
    options: [
      "A. Protein (Chất đạm)",
      "B. Carbohydrate (Tinh bột)",
      "C. Lipid (Chất béo)",
      "D. Vitamin",
    ],
    correct: 1,
  },
  {
    id: 4,
    section: 1,
    q: "Nước biển là nguyên liệu tự nhiên được con người sử dụng chủ yếu để sản xuất:",
    options: ["A. Xi măng", "B. Kim loại nhôm", "C. Muối ăn", "D. Xăng dầu"],
    correct: 2,
  },
  {
    id: 5,
    section: 1,
    q: "Đặc điểm nào dưới đây mô tả đúng tính chất của vật liệu thủy tinh?",
    options: [
      "A. Dẫn điện rất tốt",
      "B. Có tính đàn hồi cao",
      "C. Trong suốt, bền với môi trường nhưng dễ vỡ",
      "D. Không bị nứt vỡ khi va đập mạnh",
    ],
    correct: 2,
  },
  {
    id: 6,
    section: 1,
    q: "Trong mô hình 3R, từ 'Recycle' có nghĩa là gì?",
    options: [
      "A. Giảm thiểu sử dụng",
      "B. Tái sử dụng sản phẩm",
      "C. Tái chế chất thải thành vật liệu mới",
      "D. Vứt bỏ rác thải đúng nơi quy định",
    ],
    correct: 2,
  },
  {
    id: 7,
    section: 1,
    q: "Nhóm nào sau đây hoàn toàn là nhiên liệu hóa thạch?",
    options: [
      "A. Củi, rơm rạ, trấu",
      "B. Than đá, dầu mỏ, khí thiên nhiên",
      "C. Biogas, xăng sinh học E5",
      "D. Năng lượng mặt trời, năng lượng gió",
    ],
    correct: 1,
  },
  {
    id: 8,
    section: 1,
    q: "Thực phẩm nào sau đây là nguồn cung cấp Protein (chất đạm) quan trọng cho cơ thể?",
    options: [
      "A. Khoai tây, khoai lang",
      "B. Thịt, cá, trứng, sữa",
      "C. Mỡ lợn, dầu thực vật",
      "D. Rau muống, bắp cải",
    ],
    correct: 1,
  },
  {
    id: 9,
    section: 1,
    q: "Vật liệu nào thường có ánh kim và dẫn nhiệt, dẫn điện tốt nhất?",
    options: ["A. Gốm sứ", "B. Nhựa PVC", "C. Kim loại", "D. Thủy tinh"],
    correct: 2,
  },
  {
    id: 10,
    section: 1,
    q: "Phương pháp phổ biến nhất để bảo quản lương thực (lúa, đỗ, lạc) tránh bị nấm mốc là:",
    options: [
      "A. Ngâm trong nước sạch",
      "B. Phơi khô hoặc sấy khô",
      "C. Để ở nơi tối và ẩm ướt",
      "D. Bọc kín bằng túi nilon ngay sau khi thu hoạch",
    ],
    correct: 1,
  },

  // PHẦN 2: THÔNG HIỂU
  {
    id: 11,
    section: 2,
    q: "Tại sao lõi dây điện thường làm bằng đồng còn lớp vỏ ngoài làm bằng nhựa?",
    options: [
      "A. Vì nhựa dẫn điện tốt hơn đồng",
      "B. Vì đồng dẫn điện tốt, còn nhựa cách điện để bảo đảm an toàn",
      "C. Vì đồng nhẹ hơn nhựa nên dễ uốn cong",
      "D. Vì lớp vỏ nhựa giúp dây điện không bị thấm nước làm hỏng đồng",
    ],
    correct: 1,
  },
  {
    id: 12,
    section: 2,
    q: "Điểm khác biệt cơ bản về vai trò của lương thực so với thực phẩm là gì?",
    options: [
      "A. Lương thực cung cấp tinh bột để làm thức ăn chính, thực phẩm cung cấp các dưỡng chất bổ sung",
      "B. Lương thực chỉ ăn được khi còn sống, thực phẩm phải nấu chín",
      "C. Lương thực luôn có giá thành cao hơn thực phẩm",
      "D. Lương thực không chứa năng lượng, chỉ có thực phẩm mới có",
    ],
    correct: 0,
  },
  {
    id: 13,
    section: 2,
    q: "Tại sao việc thay thế nhiên liệu hóa thạch bằng năng lượng tái tạo là cần thiết?",
    options: [
      "A. Vì năng lượng tái tạo (gió, mặt trời) rẻ hơn và giảm ô nhiễm môi trường",
      "B. Vì nhiên liệu hóa thạch tỏa nhiệt quá thấp khi cháy",
      "C. Vì năng lượng tái tạo dễ lưu trữ trong bình chứa hơn",
      "D. Vì nhiên liệu hóa thạch không thể sử dụng để chạy máy móc",
    ],
    correct: 0,
  },
  {
    id: 14,
    section: 2,
    q: "Khi thực hiện thí nghiệm dẫn nhiệt trên các thanh vật liệu, sáp gắn ở đầu thanh kim loại chảy ra đầu tiên chứng tỏ điều gì?",
    options: [
      "A. Kim loại là vật liệu nhẹ nhất",
      "B. Kim loại có khả năng dẫn nhiệt tốt hơn các vật liệu khác",
      "C. Kim loại có nhiệt độ nóng chảy thấp hơn sáp",
      "D. Kim loại cứng hơn nên hút nhiệt mạnh hơn",
    ],
    correct: 1,
  },
  {
    id: 15,
    section: 2,
    q: "Để sử dụng nhiên liệu tiết kiệm và hiệu quả khi đun nấu, chúng ta nên:",
    options: [
      "A. Mở lửa thật lớn ngay cả khi dùng nồi nhỏ",
      "B. Đóng kín hoàn toàn các lỗ thông hơi của bếp",
      "C. Điều chỉnh ngọn lửa vừa phải và cung cấp đủ không khí (oxygen)",
      "D. Dùng thật nhiều nhiên liệu cùng một lúc để nhanh chín",
    ],
    correct: 2,
  },
  {
    id: 16,
    section: 2,
    q: "Đá vôi là nguyên liệu chính để sản xuất ra sản phẩm nào trong ngành xây dựng?",
    options: [
      "A. Nhôm và đồng",
      "B. Xi măng và vôi",
      "C. Nhựa và cao su",
      "D. Kính và thủy tinh",
    ],
    correct: 1,
  },
  {
    id: 17,
    section: 2,
    q: "Tại sao thực phẩm để trong ngăn mát tủ lạnh lại lâu bị hỏng hơn bên ngoài?",
    options: [
      "A. Vì trong tủ lạnh không có không khí",
      "B. Vì nhiệt độ thấp làm ức chế sự phát triển của vi khuẩn và nấm mốc",
      "C. Vì ánh sáng trong tủ lạnh giúp diệt khuẩn",
      "D. Vì tủ lạnh làm thực phẩm mất hoàn toàn nước",
    ],
    correct: 1,
  },
  {
    id: 18,
    section: 2,
    q: "Khái niệm 'nguyên liệu' dùng để chỉ:",
    options: [
      "A. Sản phẩm cuối cùng đã được đóng gói",
      "B. Vật liệu thô lấy từ tự nhiên, cần qua chế biến để tạo ra sản phẩm",
      "C. Các loại máy móc dùng trong nhà máy",
      "D. Các loại bao bì dùng để đựng sản phẩm",
    ],
    correct: 1,
  },
  {
    id: 19,
    section: 2,
    q: "Khi dùng bếp than, tại sao người ta thường dùng quạt để thổi vào bếp lúc mới nhóm?",
    options: [
      "A. Để làm giảm nhiệt độ của than",
      "B. Để cung cấp thêm oxygen giúp than cháy nhanh và mạnh hơn",
      "C. Để đẩy các hạt bụi than ra xa người nấu",
      "D. Để làm cho viên than nhanh nóng chảy",
    ],
    correct: 1,
  },
  {
    id: 20,
    section: 2,
    q: "Tại sao các chuyên gia dinh dưỡng khuyên chúng ta nên ăn đa dạng các loại thực phẩm?",
    options: [
      "A. Để kích thích vị giác ăn ngon miệng hơn",
      "B. Để đảm bảo cung cấp đầy đủ các nhóm chất dinh dưỡng khác nhau cho cơ thể",
      "C. Để tiết kiệm chi phí mua một loại thực phẩm đắt tiền",
      "D. Để giảm bớt thời gian chế biến món ăn",
    ],
    correct: 1,
  },

  // PHẦN 3: VẬN DỤNG
  {
    id: 21,
    section: 3,
    q: "Dựa trên tháp dinh dưỡng, nhóm thực phẩm nào con người nên ăn với số lượng ít nhất?",
    options: [
      "A. Nhóm lương thực (ngũ cốc, khoai)",
      "B. Nhóm rau củ và quả chín",
      "C. Nhóm thịt, cá, trứng, sữa",
      "D. Nhóm đường, muối và dầu mỡ",
    ],
    correct: 3,
  },
  {
    id: 22,
    section: 3,
    q: "Cách nào sau đây là tuyệt đối không được làm khi dập tắt đám cháy do xăng dầu?",
    options: [
      "A. Dùng cát phủ kín lên ngọn lửa",
      "B. Dùng nước tạt trực tiếp vào đám cháy",
      "C. Dùng bình chữa cháy dạng bọt",
      "D. Dùng chăn chiên thấm nước trùm lên",
    ],
    correct: 1,
  },
  {
    id: 23,
    section: 3,
    q: "Gia đình bạn Nam xây hầm ủ chất thải chăn nuôi để lấy khí methane đun nấu. Đây là ví dụ về việc sử dụng:",
    options: [
      "A. Nhiên liệu hóa thạch",
      "B. Nhiên liệu tái tạo (Biogas)",
      "C. Năng lượng hạt nhân",
      "D. Nguyên liệu thô chưa qua xử lý",
    ],
    correct: 1,
  },
  {
    id: 24,
    section: 3,
    q: "Các công trình bằng đá vôi thường bị ăn mòn theo thời gian do hiện tượng mưa acid. Thí nghiệm nào sau đây mô phỏng hiện tượng này?",
    options: [
      "A. Nhỏ nước cất vào đá vôi",
      "B. Nhỏ dung dịch giấm ăn hoặc acid vào đá vôi",
      "C. Đốt nóng đá vôi trên ngọn lửa",
      "D. Ngâm đá vôi trong nước muối",
    ],
    correct: 1,
  },
  {
    id: 25,
    section: 3,
    q: "Tại sao tay cầm của các loại xoong, chảo thường được bọc một lớp nhựa hoặc gỗ?",
    options: [
      "A. Để giảm giá thành sản xuất",
      "B. Vì nhựa và gỗ dẫn nhiệt kém, giúp người cầm không bị bỏng",
      "C. Để làm cho dụng cụ bền hơn với va đập",
      "D. Để trang trí cho dụng cụ thêm đẹp mắt",
    ],
    correct: 1,
  },
  {
    id: 26,
    section: 3,
    q: "Bạn thấy một chiếc bánh mì có những vết đốm màu xanh và mùi lạ. Cách xử lý nào sau đây là đúng nhất?",
    options: [
      "A. Cắt bỏ phần màu xanh rồi ăn phần còn lại",
      "B. Đem nướng lại thật kỹ để diệt mốc rồi ăn",
      "C. Bỏ ngay vào thùng rác vì nấm mốc đã sinh ra độc tố trong toàn bộ bánh",
      "D. Rửa sạch vết mốc dưới vòi nước rồi sử dụng",
    ],
    correct: 2,
  },

  // PHẦN 4: VẬN DỤNG CAO
  {
    id: 27,
    section: 4,
    q: "Một người thợ làm việc trong môi trường hầm lò hẹp cần nhóm lửa. Để lửa cháy sáng, không khói và tiết kiệm nhiên liệu, người thợ nên:",
    options: [
      "A. Chất thật nhiều củi vào cùng một lúc",
      "B. Xếp củi thưa ra để không khí dễ lưu thông và cung cấp đủ oxygen",
      "C. Vẩy thêm nước vào củi để tạo hơi ẩm",
      "D. Đóng kín cửa hầm để giữ nhiệt độ cao",
    ],
    correct: 1,
  },
  {
    id: 28,
    section: 4,
    q: "Tái chế nhựa mang lại lợi ích gì lớn nhất cho an ninh năng lượng và tài nguyên?",
    options: [
      "A. Nhựa tái chế có thể dùng để sản xuất ra xăng dầu giá rẻ",
      "B. Giúp tiết kiệm dầu mỏ (nguyên liệu sản xuất nhựa) và năng lượng so với sản xuất nhựa mới",
      "C. Nhựa tái chế có khả năng tự phân hủy sinh học nhanh hơn",
      "D. Nhựa tái chế giúp làm giảm nồng độ oxygen trong khí quyển",
    ],
    correct: 1,
  },
  {
    id: 29,
    section: 4,
    q: "Trong chu trình sản xuất: 'Cây mía -> Nhà máy đường -> Đường ăn & Bã mía (đốt lò hơi)'. Cây mía đóng vai trò là:",
    options: [
      "A. Vật liệu xây dựng",
      "B. Nhiên liệu lỏng",
      "C. Nguyên liệu cho quá trình sản xuất",
      "D. Chất phụ gia thực phẩm",
    ],
    correct: 2,
  },
  {
    id: 30,
    section: 4,
    q: "Tại sao các quốc gia phát triển đang chuyển dần từ xe chạy xăng sang xe điện?",
    options: [
      "A. Vì pin xe điện bền vô hạn và không bao giờ hỏng",
      "B. Để giảm phụ thuộc vào nhiên liệu hóa thạch và cắt giảm khí thải gây ô nhiễm không khí",
      "C. Vì điện năng được tạo ra hoàn toàn miễn phí từ tự nhiên",
      "D. Vì xe điện chạy nhanh hơn xe chạy xăng rất nhiều lần",
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

function initQuiz() {
  const contentDiv = document.getElementById("quiz-content");
  let currentSection = 0;

  questionData.forEach((item, index) => {
    if (item.section !== currentSection) {
      currentSection = item.section;
      const sectionHeader = document.createElement("div");
      sectionHeader.className = "section-header";
      sectionHeader.innerText = sectionTitles[currentSection];
      contentDiv.appendChild(sectionHeader);
    }

    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `q-card-${item.id}`;

    const qText = document.createElement("div");
    qText.className = "question-text";
    qText.innerText = `Câu ${item.id}: ${item.q}`;
    card.appendChild(qText);

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

    const explanation = document.createElement("div");
    explanation.className = "explanation";
    explanation.id = `explain-${item.id}`;
    const letters = ["A", "B", "C", "D"];
    explanation.innerHTML = `<strong>Đáp án đúng: ${letters[item.correct]}</strong>`;
    card.appendChild(explanation);

    contentDiv.appendChild(card);
  });
}

function selectOption(qid, oid) {
  if (isSubmitted) return;

  userAnswers[qid] = oid;

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

function updateProgress() {
  const total = questionData.length;
  const answered = Object.keys(userAnswers).length;
  const percent = Math.round((answered / total) * 100);

  document.getElementById("progress-bar").style.width = `${percent}%`;
  document.getElementById("progress-text").innerText =
    `Đã làm: ${answered}/${total} câu (${percent}%)`;
}

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

    explanation.style.display = "block";

    if (userChoice !== undefined && userChoice === correctChoice) {
      correctCount++;
    }

    labels.forEach((lbl) => {
      const oid = parseInt(lbl.dataset.oid);
      const input = lbl.querySelector("input");
      input.disabled = true;

      lbl.classList.remove("selected");

      if (oid === correctChoice) {
        lbl.classList.add("correct");
      } else if (userChoice === oid && userChoice !== correctChoice) {
        lbl.classList.add("incorrect");
      }
    });
  });

  const score = (correctCount / 30) * 10;
  showResult(score, correctCount);

  document.getElementById("btn-submit").style.display = "none";
  document.getElementById("btn-retry").style.display = "block";
}

function showResult(score, correctCount) {
  const overlay = document.getElementById("result-overlay");
  const scoreEl = document.getElementById("final-score");
  const countEl = document.getElementById("correct-count");
  const gradeEl = document.getElementById("feedback-grade");
  const scoreCircle = document.querySelector(".score-circle");

  scoreEl.innerText = score.toFixed(1);
  countEl.innerText = correctCount;

  let grade = "";
  let color = "";

  if (score >= 8) {
    grade = "RẤT TỐT!";
    color = "#10b981";
  } else if (score >= 6) {
    grade = "ĐẠT";
    color = "#f59e0b";
  } else {
    grade = "CẦN ÔN LẠI";
    color = "#ef4444";
  }

  gradeEl.innerText = grade;
  gradeEl.style.color = color;
  scoreCircle.style.background = color;

  overlay.classList.add("active");
}

function closeResultModal() {
  document.getElementById("result-overlay").classList.remove("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function retryQuiz() {
  if (confirm("Bạn có chắc muốn làm lại bài không?")) {
    location.reload();
  }
}

window.onload = initQuiz;
