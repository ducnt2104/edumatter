 document.documentElement.classList.add("dark");
      // 1. CLASS GAME LOGIC
      const draggables = document.querySelectorAll(".draggable-item");
      const dropZones = document.querySelectorAll(".drop-zone");
      let dragItem = null;

      draggables.forEach((item) => {
        item.addEventListener("dragstart", () => {
          dragItem = item;
        });
        item.addEventListener("dragend", () => {
          dragItem = null;
        });
      });

      dropZones.forEach((zone) => {
        zone.addEventListener("dragover", (e) => {
          e.preventDefault();
          zone.classList.add("drag-over");
        });
        zone.addEventListener("dragleave", () => {
          zone.classList.remove("drag-over");
        });
        zone.addEventListener("drop", () => {
          zone.classList.remove("drag-over");
          if (dragItem) {
            const type = dragItem.getAttribute("data-type");
            const accept = zone.getAttribute("data-accept");
            const msg = document.getElementById("gameMsg");

            if (type === accept) {
              zone.appendChild(dragItem);
              dragItem.classList.add("bg-green-100", "border-green-500");
              msg.innerText = "Chính xác!";
              msg.className =
                "absolute bottom-2 left-0 w-full text-center text-xs font-bold text-green-600";
            } else {
              msg.innerText = "Sai rồi! Hãy thử lại.";
              msg.className =
                "absolute bottom-2 left-0 w-full text-center text-xs font-bold text-red-500";
            }
          }
        });
      });

      function resetClassGame() {
        const container = document.getElementById("draggables");
        const items = document.querySelectorAll(".draggable-item");
        items.forEach((item) => {
          item.classList.remove("bg-green-100", "border-green-500");
          container.appendChild(item);
        });
        document.getElementById("gameMsg").innerText = "";
      }

      // 2. CHAIN BUILDER
      function setChainType(type) {
        const visual = document.getElementById("chainVisual");
        const explain = document.getElementById("chainExplain");

        if (type === "straight") {
          visual.innerHTML = `
               <div class="flex items-center gap-1">
                  <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">C</div>
                  <div class="w-4 h-1 bg-gray-400"></div>
                  <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">C</div>
                  <div class="w-4 h-1 bg-gray-400"></div>
                  <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">C</div>
               </div>
            `;
          explain.innerText =
            "Mạch thẳng: Các nguyên tử Carbon liên kết liên tiếp nhau thành một chuỗi.";
        } else if (type === "branched") {
          visual.innerHTML = `
               <div class="flex flex-col items-center">
                  <div class="flex items-center gap-1">
                     <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">C</div>
                     <div class="w-4 h-1 bg-gray-400"></div>
                     <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">C</div>
                     <div class="w-4 h-1 bg-gray-400"></div>
                     <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">C</div>
                  </div>
                  <div class="w-1 h-4 bg-gray-400"></div>
                  <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">C</div>
               </div>
            `;
          explain.innerText =
            "Mạch nhánh: Có nguyên tử Carbon rẽ nhánh từ mạch chính.";
        } else {
          visual.innerHTML = `
               <div class="relative w-24 h-24">
                  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">C</div>
                  <div class="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">C</div>
                  <div class="absolute bottom-0 left-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">C</div>
                  <!-- Bonds would be css lines, simplifying for demo -->
                  <svg class="absolute inset-0 w-full h-full pointer-events-none stroke-gray-400 stroke-2">
                     <line x1="50%" y1="15%" x2="15%" y2="85%" />
                     <line x1="50%" y1="15%" x2="85%" y2="85%" />
                     <line x1="15%" y1="85%" x2="85%" y2="85%" />
                  </svg>
               </div>
            `;
          explain.innerText =
            "Mạch vòng: Các nguyên tử Carbon liên kết khép kín.";
        }
      }

      // 3. COMBUSTION EXPERIMENT
      function runCombustionStep1() {
        const flame = document.getElementById("methaneFlame");
        const tube = document.getElementById("combustionTube");
        const drops = document.getElementById("waterDrops");
        const res = document.getElementById("combustionResult");
        const btnLime = document.getElementById("btnLime");

        // Ignite
        flame.style.opacity = "1";

        // Move tube
        setTimeout(() => {
          tube.style.opacity = "1";
          tube.style.top = "20px"; // Lower into flame area
        }, 500);

        // Show water
        setTimeout(() => {
          drops.classList.remove("hidden");
          res.classList.remove("hidden");
          res.innerHTML = "Thấy các giọt nước li ti.<br>=> Có Hydrogen (H).";
          btnLime.disabled = false;
          btnLime.classList.add("animate-pulse");
        }, 2000);
      }

      function runCombustionStep2() {
        const lime = document.getElementById("limeWater");
        const tube = document.getElementById("combustionTube");
        const res = document.getElementById("combustionResult");
        const flame = document.getElementById("methaneFlame");

        // Rotate tube up
        tube.style.transform = "translate(-50%, 0) rotate(0deg)";
        flame.style.opacity = "0"; // Turn off flame

        setTimeout(() => {
          lime.classList.replace("bg-blue-100/30", "bg-white/80"); // Cloudy
          res.innerHTML += "<br>Nước vôi trong vẩn đục.<br>=> Có khí CO₂.";
        }, 1000);
      }

      function resetCombustion() {
        document.getElementById("methaneFlame").style.opacity = "0";
        const tube = document.getElementById("combustionTube");
        tube.style.opacity = "0";
        tube.style.top = "4px";
        tube.style.transform = "translate(-50%, 0)";

        document.getElementById("waterDrops").classList.add("hidden");
        const lime = document.getElementById("limeWater");
        lime.className =
          "w-full h-1/3 bg-blue-100/30 absolute bottom-0 rounded-b-none transition-colors duration-1000";

        document.getElementById("combustionResult").classList.add("hidden");
        document.getElementById("btnLime").disabled = true;
        document.getElementById("btnLime").classList.remove("animate-pulse");
      }

      // 4. BROMINE TEST
      function runBromineTest() {
        const liquid = document.getElementById("bromineLiquid");
        const bubbles = document.getElementById("gasBubbles");
        const explain = document.getElementById("brExplain");

        bubbles.classList.remove("hidden");
        explain.innerText = "Khí Ethylene đi vào dung dịch Bromine...";

        setTimeout(() => {
          liquid.style.backgroundColor = "rgba(255,255,255,0.4)"; // Clear
          explain.innerHTML =
            "Dung dịch <strong>MẤT MÀU</strong> da cam.<br>=> Ethylene đã phản ứng cộng với Bromine.";
        }, 2000);
      }

      function resetBromineTest() {
        document.getElementById("bromineLiquid").style.backgroundColor =
          "#f97316";
        document.getElementById("gasBubbles").classList.add("hidden");
        document.getElementById("brExplain").innerText =
          "Dẫn khí vào dung dịch...";
      }

      // 5. POLYMERIZATION
        function runPolymerization() {
    const container = document.getElementById("polyContainer");
    const result = document.getElementById("polyResult");

    container.innerHTML = "";
    result.classList.add("hidden");

    let count = 6; // số mắt xích

    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const unit = document.createElement("div");
        unit.className =
          "polymer flex items-center px-2 py-1 border border-indigo-400 rounded text-xs font-bold text-indigo-600 bg-white dark:bg-gray-900";

        unit.textContent = "-CH₂-CH₂-";
        container.appendChild(unit);
      }, i * 400);
    }

    setTimeout(() => {
      result.classList.remove("hidden");
    }, count * 400 + 300);
  }

      // 6. DISTILLATION
      const fractions = {
        gas: { t: "< 40°C", app: "Khí đốt (Gas)" },
        gasoline: { t: "40-200°C", app: "Xăng ô tô, xe máy" },
        kerosene: { t: "175-325°C", app: "Dầu hỏa (Máy bay)" },
        diesel: { t: "250-350°C", app: "Nhiên liệu Diesel (Xe tải)" },
        fueloil: { t: "370-600°C", app: "Dầu Mazut (Tàu biển)" },
        bitumen: { t: "> 600°C", app: "Nhựa đường (Làm đường)" },
      };

      function showFraction(key) {
        const data = fractions[key];
        document.getElementById("fracTitle").innerText = data.app;
        document.getElementById("fracTemp").innerText = `Sôi ở: ${data.t}`;
        document.getElementById("fracApp").innerText =
          `Sản phẩm thu được ở tầng này.`;
      }

      // 7. ENVIRONMENT SIM
      function updateEnvSim() {
        const val = document.getElementById("fuelRange").value;
        const co2 = 350 + val * 1.5; // base 350
        const temp = 14 + val * 0.04; // base 14

        document.getElementById("co2Val").innerText = Math.round(co2);
        document.getElementById("tempVal").innerText = temp.toFixed(1);

        const msg = document.getElementById("envMsg");
        if (val > 70) {
          msg.innerText = "Nguy hiểm! Hiệu ứng nhà kính mạnh, băng tan.";
          msg.className =
            "text-center text-sm font-bold text-red-600 animate-pulse";
        } else if (val > 40) {
          msg.innerText = "Cảnh báo! Nhiệt độ đang tăng nhanh.";
          msg.className = "text-center text-sm font-bold text-orange-500";
        } else {
          msg.innerText = "Mức an toàn. Môi trường ổn định.";
          msg.className = "text-center text-sm italic text-gray-600";
        }
      }

      // 8. QUIZ
      const questions = [
        {
          q: "Chất nào sau đây là hydrocarbon?",
          opts: ["C₂H₅OH", "CH₄", "CH₃Cl", "CaCO₃"],
          a: 1,
          explain: "Hydrocarbon chỉ chứa C và H.",
        },
        {
          q: "Phản ứng đặc trưng của Ethylene là gì?",
          opts: [
            "Phản ứng thế",
            "Phản ứng cộng",
            "Phản ứng phân hủy",
            "Phản ứng trao đổi",
          ],
          a: 1,
          explain: "Do có liên kết đôi kém bền.",
        },
        {
          q: "Sản phẩm cháy hoàn toàn của Hydrocarbon là?",
          opts: ["CO và H₂O", "C và H₂", "CO₂ và H₂O", "CO₂ và H₂"],
          a: 2,
          explain: "Tạo khí carbonic và hơi nước.",
        },
        {
          q: "Nhiên liệu nào sau đây là nhiên liệu sạch?",
          opts: ["Than đá", "Dầu mỏ", "Hydrogen", "Củi"],
          a: 2,
          explain: "Hydrogen cháy chỉ tạo nước, không sinh CO₂.",
        },
        {
          q: "Methane có nhiều trong đâu?",
          opts: ["Khí thiên nhiên", "Nước biển", "Không khí", "Than đá"],
          a: 0,
          explain: "Khí thiên nhiên chứa 95% Methane.",
        },
      ];

      let currentQ = 0;
      let score = 0;

      function loadQuiz() {
        const q = questions[currentQ];
        document.getElementById("questionText").innerText = q.q;
        document.getElementById("questionCount").innerText =
          `Câu ${currentQ + 1}/${questions.length}`;

        const div = document.getElementById("optionsContainer");
        div.innerHTML = "";
        q.opts.forEach((opt, idx) => {
          const btn = document.createElement("button");
          btn.className =
            "text-left p-4 rounded border hover:bg-brand-50 dark:hover:bg-gray-700 transition";
          btn.innerHTML = `<span class="font-bold mr-2">${String.fromCharCode(65 + idx)}.</span> ${opt}`;
          btn.onclick = () => checkAnswer(idx, btn);
          div.appendChild(btn);
        });
      }

      function checkAnswer(idx, btn) {
        const q = questions[currentQ];
        const fb = document.getElementById("feedback");
        const next = document.getElementById("nextBtn");
        const btns = document.querySelectorAll("#optionsContainer button");

        btns.forEach((b) => (b.disabled = true));

        if (idx === q.a) {
          score += 2;
          btn.classList.add(
            "bg-green-200",
            "border-green-500",
            "dark:text-black",
          );
          fb.innerHTML = `<span class="text-green-600">Chính xác!</span> ${q.explain}`;
        } else {
          btn.classList.add("bg-red-200", "border-red-500", "dark:text-black");
          btns[q.a].classList.add(
            "bg-green-200",
            "border-green-500",
            "dark:text-black",
          );
          fb.innerHTML = `<span class="text-red-600">Sai rồi!</span> ${q.explain}`;
        }

        fb.classList.remove("hidden");
        next.classList.remove("hidden");
        document.getElementById("scoreDisplay").innerText = `Điểm: ${score}`;
        document.getElementById("progressBar").style.width =
          `${((currentQ + 1) / questions.length) * 100}%`;
      }

      function nextQuestion() {
        currentQ++;
        if (currentQ < questions.length) {
          document.getElementById("feedback").classList.add("hidden");
          document.getElementById("nextBtn").classList.add("hidden");
          loadQuiz();
        } else {
          document.getElementById("quizContainer").classList.add("hidden");
          document.getElementById("quizResult").classList.remove("hidden");
          document.getElementById("finalScore").innerText = score + "/10";
        }
      }

      // Init Theme & Quiz
      const themeToggle = document.getElementById("themeToggle");
      const html = document.documentElement;
      themeToggle.addEventListener("click", () => {
        html.classList.toggle("dark");
      });
      loadQuiz();