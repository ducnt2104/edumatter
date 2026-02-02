document.documentElement.classList.add("dark");
      // --- 1. THEME TOGGLE ---
      function toggleTheme() {
        document.documentElement.classList.toggle("dark");
      }

      // --- 2. MINI SIM: IODINE TEST ---
      function toggleIodine(el, isStarch) {
        const liquid = el.querySelector(".liquid");
        // Reset
        liquid.style.backgroundColor = "rgba(255,255,255,0.8)";

        // Drop animation
        setTimeout(() => {
          if (isStarch) {
            liquid.style.backgroundColor = "#4c1d95"; // Dark Violet
          } else {
            liquid.style.backgroundColor = "#fde047"; // Iodine yellow/brown stays yellow
          }
        }, 500);
      }

      // --- 3. MINI SIM: PROTEIN EGG ---
      function updateEgg(temp) {
        const tempDisplay = document.getElementById("tempDisplay");
        const eggWhite = document.getElementById("eggWhite");
        const eggStatus = document.getElementById("eggStatus");
        const eggYolk = document.getElementById("eggYolk");

        tempDisplay.innerText = temp + "°C";

        // Tính toán độ trắng đục
        let opacity = 0;
        if (temp > 60) {
          // Tăng tốc độ trắng: (temp - 60) / 30 để đạt độ trắng tối đa sớm hơn
          opacity = Math.min((temp - 60) / 35, 1);
        }

        // Ép kiểu màu trắng đục trực tiếp
        eggWhite.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";

        // Thêm hiệu ứng mờ (blur) nhẹ khi đông tụ để nhìn giống thật hơn
        eggWhite.style.backdropFilter = `blur(${opacity * 2}px)`;

        if (temp >= 85) {
          eggStatus.innerText = "TRẠNG THÁI: ĐÔNG TỤ HOÀN TOÀN";
          eggStatus.style.color = "#fb923c"; // Orange-400
          eggYolk.style.transform = "scale(1.1)";
        } else if (temp > 60) {
          eggStatus.innerText = "TRẠNG THÁI: ĐANG ĐÔNG TỤ...";
          eggStatus.style.color = "#fdba74"; // Orange-300
        } else {
          eggStatus.innerText = "TRẠNG THÁI: LỎNG";
          eggStatus.style.color = "#9ca3af";
          eggYolk.style.transform = "scale(1)";
        }
      }

      // --- 4. MINI SIM: POLYMER BUILDER ---
      const colors = [
        "bg-red-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
      ];
      function addMonomer() {
        const chain = document.getElementById("polyChain");
        const bead = document.createElement("div");
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        bead.className = `w-8 h-8 rounded-full ${randomColor} flex items-center justify-center text-xs text-white poly-bead animate-pulse`;
        bead.innerHTML = '<i class="fas fa-link"></i>';
        chain.appendChild(bead);
        chain.scrollLeft = chain.scrollWidth;
      }

      // --- 5. VIRTUAL LAB LOGIC ---
      // Cấu hình dữ liệu thí nghiệm
      const experiments = [
        {
          title: "1. Tráng bạc Glucose",
          desc: "Phản ứng oxy hóa Glucose bằng AgNO3 trong môi trường NH3.",
          steps: [
            "Thêm dung dịch AgNO3 1%",
            "Thêm NH3 cho đến khi kết tủa tan hết",
            "Thêm dung dịch Glucose & đun nhẹ",
          ],
          finalColor: "silver-coated",
          result:
            "Bạc kim loại bám vào thành ống nghiệm tạo thành lớp gương sáng bóng.",
        },
        {
          title: "2. Tinh bột + Iodine",
          desc: "Phản ứng đặc trưng để nhận biết tinh bột.",
          steps: [
            "Cho hồ tinh bột vào ống nghiệm",
            "Nhỏ 1-2 giọt dung dịch Iodine",
          ],
          finalColor: "bg-blue-900", // Xanh tím thẫm
          result:
            "Dung dịch chuyển sang màu xanh tím đặc trưng. Khi đun nóng màu biến mất, để nguội hiện lại.",
        },
        {
          title: "3. Đông tụ Protein",
          desc: "Sự biến tính của lòng trắng trứng dưới tác dụng nhiệt.",
          steps: ["Cho lòng trắng trứng vào", "Đun nóng ống nghiệm"],
          finalColor: "bg-slate-100 opacity-90",
          result: "Protein bị đông tụ thành các mảng trắng đục không tan.",
        },
        {
          title: "4. Cấu tạo Polymer",
          desc: "Mô phỏng phản ứng trùng hợp tạo nhựa.",
          steps: ["Chuẩn bị Monomer", "Thêm chất xúc tác", "Nâng nhiệt độ"],
          finalColor: "bg-cyan-200",
          result:
            "Dung dịch trở nên đặc quánh, tạo thành khối nhựa Polymer dẻo.",
        },
        {
          title: "5. Phản ứng xà phòng hóa",
          desc: "Thủy phân chất béo trong dung dịch kiềm NaOH.",
          steps: [
            "Cho dầu ăn vào bát sứ",
            "Thêm dung dịch NaOH đặc",
            "Đun sôi hỗn hợp và khuấy",
          ],
          finalColor: "bg-yellow-100",
          result:
            "Hỗn hợp đặc lại, tạo thành muối của acid béo (xà phòng) và glycerol.",
        },
        {
          title: "6. Phản ứng thủy phân",
          desc: "Thủy phân Saccharose hoặc Ester.",
          steps: [
            "Cho dung dịch vào ống nghiệm",
            "Thêm H2SO4 loãng làm xúc tác",
            "Đun nóng cách thủy",
          ],
          finalColor: "bg-white/40",
          result:
            "Sản phẩm bị cắt thành các phân tử nhỏ hơn (ví dụ: Glucose + Fructose).",
        },
        {
          title: "7. Lipid không tan trong nước",
          desc: "Kiểm tra tính vật lý của chất béo.",
          steps: [
            "Cho nước cất vào ống nghiệm",
            "Cho dầu ăn vào",
            "Lắc mạnh và quan sát",
          ],
          finalColor: "bg-yellow-400/50",
          isLayered: true, // Đặc thù tách lớp
          result:
            "Dầu không tan, tạo thành nhũ tương tạm thời rồi lại tách lớp nổi lên trên.",
        },
        {
          title: "8. Phản ứng Biure",
          desc: "Phản ứng màu của Peptide/Protein với đồng.",
          steps: ["Cho lòng trắng trứng vào", "Thêm NaOH", "Thêm CuSO4 loãng"],
          finalColor: "bg-purple-600",
          result: "Phức chất màu tím đặc trưng được hình thành.",
        },
        {
          title: "9. Màu với Cu(OH)2",
          desc: "Glucose phản ứng với Cu(OH)2 tạo phức chất.",
          steps: [
            "Tạo kết tủa Cu(OH)2",
            "Cho dung dịch Glucose vào",
            "Lắc nhẹ",
          ],
          finalColor: "bg-blue-600",
          result:
            "Kết tủa tan ra, tạo thành dung dịch phức đồng màu xanh lam thẫm.",
        },
        {
          title: "10. Phản ứng tạo Slime",
          desc: "Tạo liên kết chéo giữa PVA và Borax.",
          steps: [
            "Cho dung dịch hồ dán (PVA)",
            "Thêm màu thực phẩm",
            "Thêm dung dịch Borax và khuấy nhanh",
          ],
          finalColor: "bg-green-400",
          result:
            "Cấu trúc mạng lưới được hình thành, tạo ra chất dẻo Slime đàn hồi.",
        },
      ];

      let activeExp = null;
      let stepIndex = 0;

      function switchLab(index) {
        // Reset trạng thái
        activeExp = experiments[index];
        stepIndex = 0;

        // UI: Active Tab
        const tabs = document.querySelectorAll(".lab-tab");
        tabs.forEach((tab, i) => {
          tab.classList.toggle("active", i === index);
        });

        // UI: Text & Info
        document.getElementById("expTitle").innerText = activeExp.title;
        document.getElementById("expDesc").innerText = activeExp.desc;
        document.getElementById("expResultBox").classList.add("hidden");

        // UI: Steps
        const stepsDiv = document.getElementById("expSteps");
        stepsDiv.innerHTML = activeExp.steps
          .map(
            (s, i) => `
        <div id="step-item-${i}" class="flex items-start gap-3 opacity-40 transition-all duration-300">
            <span class="bg-brand-accent text-dark px-2 py-0.5 rounded text-xs font-black">${i + 1}</span>
            <p class="text-sm">${s}</p>
        </div>
    `,
          )
          .join("");

        // UI: Reset Stage (Ống nghiệm)
        const stage = document.getElementById("labStage");
        stage.innerHTML = `
        <div class="relative flex flex-col items-center">
            <div id="tube" class="w-16 h-48 border-4 border-white/20 rounded-b-full relative overflow-hidden bg-white/5 shadow-inner">
                <div id="liquid" class="absolute bottom-0 left-0 w-full h-0 transition-all duration-1000 ease-out bg-white/20"></div>
                <div id="bubbles" class="absolute inset-0 hidden"></div>
            </div>
            <div class="mt-4 w-24 h-4 bg-white/10 rounded-full blur-md"></div>
        </div>
    `;

        // Cập nhật nút bấm
        const btn = document.getElementById("actionBtn");
        btn.disabled = false;
        btn.innerText = `Bắt đầu: ${activeExp.steps[0]}`;
        btn.onclick = () => runStep();

        // Làm nổi bật bước 1
        updateStepUI();
      }

      function updateStepUI() {
        const items = document.querySelectorAll('[id^="step-item-"]');
        items.forEach((item, i) => {
          if (i === stepIndex) {
            item.classList.remove("opacity-40");
            item.classList.add(
              "opacity-100",
              "translate-x-2",
              "text-brand-accent",
            );
          } else if (i < stepIndex) {
            item.classList.add("opacity-100", "text-gray-400");
            item.classList.remove("text-brand-accent", "translate-x-2");
          }
        });
      }

      function runStep() {
        const liquid = document.getElementById("liquid");
        const tube = document.getElementById("tube");
        const bubbles = document.getElementById("bubbles");

        // Hiệu ứng "đổ vào" - tăng mực nước
        const newHeight = ((stepIndex + 1) / activeExp.steps.length) * 80;
        liquid.style.height = `${newHeight}%`;

        // Hiệu ứng rung ống nghiệm
        tube.classList.add("shaking");
        setTimeout(() => tube.classList.remove("shaking"), 500);

        // Xử lý bước cuối cùng
        if (stepIndex === activeExp.steps.length - 1) {
          // Đổi màu / Thêm class kết quả
          if (activeExp.finalColor.startsWith("bg-")) {
            liquid.className = `absolute bottom-0 left-0 w-full transition-all duration-1000 ease-out ${activeExp.finalColor}`;
          } else {
            liquid.classList.add(activeExp.finalColor);
          }

          // Hiện bọt khí nếu cần (cho thí nghiệm đun nóng)
          if (
            activeExp.steps.some((s) => s.includes("đun") || s.includes("sôi"))
          ) {
            bubbles.classList.remove("hidden");
            createBubbles();
          }

          // Hiện kết quả
          document.getElementById("expResultText").innerText = activeExp.result;
          document.getElementById("expResultBox").classList.remove("hidden");
          document.getElementById("actionBtn").innerText =
            "Thí nghiệm hoàn tất";
          document.getElementById("actionBtn").disabled = true;
        } else {
          stepIndex++;
          updateStepUI();
          document.getElementById("actionBtn").innerText =
            `Bước tiếp: ${activeExp.steps[stepIndex]}`;
        }
      }

      function createBubbles() {
        const container = document.getElementById("bubbles");
        for (let i = 0; i < 15; i++) {
          const b = document.createElement("div");
          b.className = "bubble";
          b.style.left = Math.random() * 100 + "%";
          b.style.width = b.style.height = Math.random() * 8 + 4 + "px";
          b.style.animationDelay = Math.random() * 2 + "s";
          container.appendChild(b);
        }
      }

      // Khởi động thí nghiệm đầu tiên khi load trang
      document.addEventListener("DOMContentLoaded", () => {
        switchLab(0);
      });

      // --- 6. QUIZ LOGIC (Based on User's New Content) ---
      const quizData = [
        {
          q: "Chất béo là gì?",
          a: [
            "Dầu mỏ",
            "Triester của Glycerol & Axit béo",
            "Một loại Protein",
            "Polymer thiên nhiên",
          ],
          correct: 1,
        },
        {
          q: "Hiện tượng khi nhỏ Iodine vào Hồ tinh bột?",
          a: ["Không màu", "Kết tủa trắng", "Màu xanh tím", "Sủi bọt khí"],
          correct: 2,
        },
        {
          q: "Phản ứng tráng bạc dùng để nhận biết chất nào?",
          a: ["Glucose", "Saccharose", "Tinh bột", "Cellulose"],
          correct: 0,
        },
        {
          q: "Khi nấu canh cua, gạch cua nổi lên là do hiện tượng gì?",
          a: ["Lên men", "Thủy phân", "Đông tụ Protein", "Tráng gương"],
          correct: 2,
        },
        {
          q: "Nhựa PE (Polyethylene) thuộc loại chất nào?",
          a: ["Lipid", "Carbohydrate", "Protein", "Polymer tổng hợp"],
          correct: 3,
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
            "w-full text-left p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-brand-carb hover:text-white transition-all font-medium";
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
          text.innerText = "Kiến thức chuẩn xác!";
        } else {
          icon.innerHTML = "😅";
          title.innerText = "Chưa đúng!";
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