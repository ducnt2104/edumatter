// --- 1. DARK MODE LOGIC ---
      const themeToggle = document.getElementById("themeToggle");
      const html = document.documentElement;

      themeToggle.addEventListener("click", () => {
        html.classList.toggle("dark");
        localStorage.setItem(
          "theme",
          html.classList.contains("dark") ? "dark" : "light",
        );
      });

      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        html.classList.add("dark");
      }

      // --- 2. MOLECULE SIMULATION (CANVAS-LIKE DOM) ---
      const moleculeBoard = document.getElementById("moleculeBoard");
      const moleculeCaption = document.getElementById("moleculeCaption");

      function clearMolecules() {
        moleculeBoard.innerHTML = "";
      }

      function createAtom(x, y, color, size = 12) {
        const atom = document.createElement("div");
        atom.classList.add("molecule");
        atom.style.left = `${x}%`;
        atom.style.top = `${y}%`;
        atom.style.width = `${size}px`;
        atom.style.height = `${size}px`;
        atom.style.backgroundColor = color;
        atom.style.boxShadow = `0 0 5px ${color}`;
        return atom;
      }

      function updateMoleculeView(type) {
        clearMolecules();
        const count = 30; // Number of particles

        if (type === "pure") {
          moleculeCaption.innerHTML =
            "<span class='text-blue-500 font-bold'>Chất tinh khiết (Nước):</span> Chỉ gồm một loại phân tử duy nhất.";
          for (let i = 0; i < count; i++) {
            const x = Math.random() * 90;
            const y = Math.random() * 90;
            moleculeBoard.appendChild(createAtom(x, y, "#3b82f6")); // Blue
          }
        } else if (type === "homogeneous") {
          moleculeCaption.innerHTML =
            "<span class='text-green-500 font-bold'>Hỗn hợp đồng nhất (Nước đường):</span> Các hạt chất tan (trắng) phân bố đều trong dung môi (xanh).";
          for (let i = 0; i < count; i++) {
            const x = Math.random() * 90;
            const y = Math.random() * 90;
            moleculeBoard.appendChild(createAtom(x, y, "#3b82f6")); // Water
            if (i % 3 === 0)
              moleculeBoard.appendChild(
                createAtom(
                  Math.random() * 90,
                  Math.random() * 90,
                  "#ffffff",
                  8,
                ),
              ); // Sugar
          }
        } else if (type === "heterogeneous") {
          moleculeCaption.innerHTML =
            "<span class='text-yellow-500 font-bold'>Hỗn hợp không đồng nhất (Dầu & Nước):</span> Phân lớp rõ rệt. Dầu (vàng) nhẹ hơn nổi lên trên.";
          for (let i = 0; i < count; i++) {
            // Water bottom
            moleculeBoard.appendChild(
              createAtom(
                Math.random() * 90,
                55 + Math.random() * 35,
                "#3b82f6",
              ),
            );
            // Oil top
            moleculeBoard.appendChild(
              createAtom(
                Math.random() * 90,
                5 + Math.random() * 35,
                "#eab308",
                15,
              ),
            );
          }
          // Divider line
          const line = document.createElement("div");
          line.style.cssText =
            "position:absolute; top:50%; width:100%; height:1px; background:rgba(255,255,255,0.3); border-style:dashed;";
          moleculeBoard.appendChild(line);
        } else if (type === "suspension") {
          moleculeCaption.innerHTML =
            "<span class='text-orange-500 font-bold'>Huyền phù (Nước bùn):</span> Các hạt chất rắn (nâu) lơ lửng trong chất lỏng.";
          for (let i = 0; i < count; i++) {
            moleculeBoard.appendChild(
              createAtom(Math.random() * 90, Math.random() * 90, "#3b82f6"),
            );
            if (i % 2 === 0)
              moleculeBoard.appendChild(
                createAtom(
                  Math.random() * 90,
                  Math.random() * 90,
                  "#78350f",
                  16,
                ),
              ); // Dirt
          }
        } else if (type === "emulsion") {
          moleculeCaption.innerHTML =
            "<span class='text-pink-500 font-bold'>Nhũ tương (Sữa/Xốt):</span> Các giọt chất lỏng (trắng/vàng) phân tán đều trong chất lỏng khác.";
          for (let i = 0; i < count; i++) {
            // Nền nước (màu xanh)
            moleculeBoard.appendChild(
              createAtom(Math.random() * 90, Math.random() * 90, "#3b82f6"),
            );
            // Các giọt chất lỏng phân tán (màu trắng đục, kích thước to hơn chút)
            if (i % 2 === 0) {
              moleculeBoard.appendChild(
                createAtom(
                  Math.random() * 90,
                  Math.random() * 90,
                  "#f8fafc", // Màu trắng đục
                  12, // Kích thước giọt
                ),
              );
            }
          }
        }
      }

      // Initialize View
      updateMoleculeView("pure");

      // --- 3. DISSOLVING EXPERIMENT ---
      let dissolveIntervals = {};

      function startDissolve(type) {
        const sugar = document.getElementById(
          type === "normal"
            ? "sugar-normal"
            : type === "stir"
              ? "sugar-stir"
              : "sugar-hot",
        );
        const progress = document.getElementById(`progress-${type}`);

        // Reset specific visuals
        sugar.style.width = "64px";
        sugar.style.opacity = "1";
        progress.style.width = "0";

        if (type === "stir") {
          document.getElementById("stick").classList.add("animate-spin");
          // Slow spin animation via CSS override or just simple rock
          document.getElementById("stick").style.animation =
            "spin 1s linear infinite";
          // Correction: spin is rotate 360, let's just rock it
          document.getElementById("stick").style.transformOrigin = "top center";
        }
        if (type === "hot") {
          document.getElementById("steam").style.opacity = "1";
        }

        // Delay slightly then start animation logic
        setTimeout(() => {
          sugar.style.width = "0px";
          sugar.style.opacity = "0";
          progress.style.width = "100%";
        }, 100);

        // Stop effects after duration
        let duration = type === "hot" ? 2000 : type === "stir" ? 4000 : 10000;

        setTimeout(() => {
          if (type === "stir")
            document.getElementById("stick").style.animation = "none";
          if (type === "hot")
            document.getElementById("steam").style.opacity = "0";
        }, duration);
      }

      function resetDissolve() {
        ["normal", "stir", "hot"].forEach((type) => {
          const sugar = document.getElementById(
            type === "normal"
              ? "sugar-normal"
              : type === "stir"
                ? "sugar-stir"
                : "sugar-hot",
          );
          const progress = document.getElementById(`progress-${type}`);
          sugar.style.width = "64px";
          sugar.style.opacity = "1";
          sugar.style.transition = "none"; // remove transition for instant reset
          progress.style.width = "0";
          progress.style.transition = "none";

          // Force reflow
          void sugar.offsetWidth;

          // Restore transition
          let duration =
            type === "hot" ? "2000ms" : type === "stir" ? "4000ms" : "10000ms";
          sugar.style.transition = `all ${duration} ease-linear`;
          progress.style.transition = `all ${duration} ease-linear`;
        });
      }

      // --- 4. SEPARATION METHODS LAB ---
      const methodContent = document.getElementById("methodContent");
      const methodData = {
        loc: {
          title: "Phương pháp Lọc",
          desc: "Dùng phễu và giấy lọc để tách cát ra khỏi nước.",
          visual: `
            <div class="relative h-64 w-full flex justify-center items-center">
               <div class="flex flex-col items-center animate-pulse">
                 <div class="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[60px] border-t-slate-300 mb-2 relative">
                    <div class="absolute -top-[60px] -left-[30px] w-[60px] h-[10px] bg-yellow-700 rounded-full"></div> <!-- Sand mix -->
                 </div>
                 <div class="h-20 w-1 bg-blue-400"></div> <!-- Drip -->
                 <div class="w-20 h-24 border-2 border-slate-400 border-t-0 bg-blue-100 rounded-b-xl mt-[-5px]"></div>
               </div>
            </div>
          `,
          question: "Phương pháp này KHÔNG thể tách chất nào?",
          options: ["Cát trong nước", "Muối trong nước", "Bã cà phê"],
          answer: 1, // index
          feedback: "Chính xác! Muối tan trong nước nên sẽ chui qua giấy lọc.",
        },
        cocan: {
          title: "Cô cạn",
          desc: "Đun nóng để nước bay hơi, thu được chất rắn hòa tan (Muối).",
          visual: `
             <div class="relative h-64 w-full flex justify-center items-end pb-10">
                <div class="flex flex-col items-center">
                  <div class="w-40 h-10 border-b-4 border-slate-400 rounded-b-full bg-white/50 relative overflow-hidden mb-4">
                     <div class="absolute bottom-0 w-full h-full bg-blue-200 animate-pulse"></div>
                     <div class="absolute bottom-0 w-full h-2 bg-white flex justify-center gap-2">
                       <span class="block w-2 h-2 bg-white rounded-full"></span>
                       <span class="block w-2 h-2 bg-white rounded-full"></span>
                     </div>
                  </div>
                  <div class="text-red-500 text-4xl animate-bounce"><i class="fas fa-fire"></i></div>
                </div>
                <div class="absolute top-10 text-slate-400"><i class="fas fa-wind fa-3x animate-pulse"></i> Bay hơi</div>
             </div>
          `,
          question: "Sản phẩm thu được sau khi cô cạn nước biển là gì?",
          options: ["Nước tinh khiết", "Muối ăn", "Cát"],
          answer: 1,
          feedback: "Đúng! Nước bay hơi hết để lại tinh thể muối.",
        },
        chiet: {
          title: "Phương pháp Chiết",
          desc: "Dùng phễu chiết tách lớp dầu nổi trên mặt nước.",
          visual: `
             <div class="relative h-64 w-full flex justify-center items-center">
                <div class="w-20 h-40 border-2 border-slate-500 rounded-full relative overflow-hidden bg-blue-500">
                   <div class="absolute top-0 w-full h-1/2 bg-yellow-400 border-b border-white"></div> <!-- Oil -->
                   <div class="absolute bottom-0 left-1/2 w-1 h-4 bg-slate-500"></div> <!-- Tap -->
                </div>
             </div>
          `,
          question: "Tại sao dầu ăn lại nổi lên trên nước?",
          options: [
            "Dầu nhẹ hơn nước",
            "Dầu nặng hơn nước",
            "Dầu tan trong nước",
          ],
          answer: 0,
          feedback: "Chính xác! Dầu nhẹ hơn và không tan trong nước.",
        },
        namcham: {
          title: "Dùng Nam châm",
          desc: "Tách sắt ra khỏi hỗn hợp bột gỗ và sắt.",
          visual: `
             <div class="relative h-64 w-full flex justify-center items-center group cursor-pointer">
                <div class="absolute top-10 text-red-600 text-6xl rotate-45 group-hover:translate-y-4 transition-transform"><i class="fas fa-magnet"></i></div>
                <div class="absolute bottom-10 w-40 h-10 bg-yellow-200 rounded flex justify-center items-center gap-2">
                   <span class="w-2 h-2 bg-black rounded-full animate-bounce"></span> <!-- Iron -->
                   <span class="w-2 h-2 bg-yellow-800 rounded-sm"></span> <!-- Wood -->
                   <span class="w-2 h-2 bg-black rounded-full animate-bounce" style="animation-delay:0.1s"></span>
                </div>
             </div>
          `,
          question: "Nam châm có thể tách chất nào sau đây?",
          options: ["Vụn nhựa", "Vụn nhôm", "Mạt sắt"],
          answer: 2,
          feedback: "Chuẩn xác! Sắt có tính từ nên bị nam châm hút.",
        },
      };

      function showMethod(key) {
        // UI Update
        document
          .querySelectorAll(".method-btn")
          .forEach((btn) =>
            btn.classList.remove(
              "border-l-blue-500",
              "bg-blue-50",
              "dark:bg-slate-700",
            ),
          );
        // Note: Logic for styling active button is handled by focus css mostly, but let's re-render content

        const data = methodData[key];
        methodContent.innerHTML = `
            <div class="animate-float">
              <h3 class="text-3xl font-bold text-primary mb-2">${data.title}</h3>
              <p class="mb-6 text-slate-600 dark:text-slate-300">${data.desc}</p>
              ${data.visual}
              <div class="mt-6 bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl text-left w-full max-w-md mx-auto">
                 <p class="font-bold text-sm mb-2">❓ Câu hỏi nhanh: ${data.question}</p>
                 <div class="flex gap-2">
                    ${data.options
                      .map(
                        (opt, idx) => `
                       <button onclick="checkMethodAnswer('${key}', ${idx})" class="flex-1 py-2 px-1 text-xs bg-slate-200 dark:bg-slate-700 hover:bg-blue-500 hover:text-white rounded transition">${opt}</button>
                    `,
                      )
                      .join("")}
                 </div>
                 <div id="method-feedback-${key}" class="mt-2 text-xs font-bold text-green-500 hidden"></div>
              </div>
            </div>
         `;
      }

      function checkMethodAnswer(key, idx) {
        const data = methodData[key];
        const fbDiv = document.getElementById(`method-feedback-${key}`);
        if (idx === data.answer) {
          fbDiv.textContent = data.feedback;
          fbDiv.className =
            "mt-2 text-xs font-bold text-green-500 block animate-pulse";
        } else {
          fbDiv.textContent = "Chưa đúng, hãy thử lại!";
          fbDiv.className = "mt-2 text-xs font-bold text-red-500 block";
        }
      }

      // Init first method
      showMethod("loc");

      // --- 5. QUIZ LOGIC (GAMIFICATION) ---
      const questions = [
        {
          q: "Chất nào sau đây là chất tinh khiết?",
          options: ["Nước chanh", "Nước cất", "Nước biển", "Không khí"],
          a: 1, // index
          explain: "Nước cất chỉ gồm các phân tử H2O, không lẫn tạp chất.",
        },
        {
          q: "Để hòa tan đường nhanh nhất, em nên làm gì?",
          options: [
            "Dùng nước lạnh",
            "Dùng nước nóng & khuấy",
            "Để yên trong cốc",
            "Bỏ viên đường to vào",
          ],
          a: 1,
          explain:
            "Nhiệt độ và tác động cơ học làm tăng tốc độ chuyển động của phân tử.",
        },
        {
          q: "Muốn tách cát ra khỏi nước, ta dùng phương pháp nào?",
          options: ["Cô cạn", "Chiết", "Lọc", "Dùng nam châm"],
          a: 2,
          explain:
            "Cát là chất rắn không tan trong nước, sẽ bị giữ lại trên giấy lọc.",
        },
      ];

      let currentQ = 0;
      let score = 0;

      function loadQuestion() {
        const qData = questions[currentQ];
        const container = document.getElementById("question-content");
        document.getElementById("question-tracker").innerText =
          `Câu hỏi ${currentQ + 1}/${questions.length}`;
        document.getElementById("quiz-progress").style.width =
          `${(currentQ / questions.length) * 100}%`;

        // Hide feedback/next buttons
        document.getElementById("feedback").classList.add("hidden");
        document.getElementById("next-btn").classList.add("hidden");

        let html = `
          <h3 class="text-xl md:text-2xl font-bold mb-6">${qData.q}</h3>
          <div class="grid md:grid-cols-2 gap-4">
        `;

        qData.options.forEach((opt, idx) => {
          html += `
            <button onclick="checkQuizAnswer(${idx})" id="opt-${idx}" class="quiz-opt p-4 rounded-xl border-2 border-slate-200 dark:border-slate-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-left font-medium transition">
              ${String.fromCharCode(65 + idx)}. ${opt}
            </button>
          `;
        });

        html += `</div>`;
        container.innerHTML = html;
      }

      function checkQuizAnswer(selectedIdx) {
        // Disable all buttons
        const opts = document.querySelectorAll(".quiz-opt");
        opts.forEach((btn) => (btn.disabled = true));

        const qData = questions[currentQ];
        const feedback = document.getElementById("feedback");

        if (selectedIdx === qData.a) {
          score += 10;
          document
            .getElementById("opt-" + selectedIdx)
            .classList.add(
              "bg-green-100",
              "border-green-500",
              "text-green-700",
            );
          feedback.innerHTML = `<i class="fas fa-check-circle"></i> Chính xác! ${qData.explain}`;
          feedback.className =
            "mt-6 p-4 rounded-lg text-center font-bold bg-green-100 text-green-700 block";
        } else {
          document
            .getElementById("opt-" + selectedIdx)
            .classList.add("bg-red-100", "border-red-500", "text-red-700");
          document
            .getElementById("opt-" + qData.a)
            .classList.add(
              "bg-green-100",
              "border-green-500",
              "text-green-700",
            );
          feedback.innerHTML = `<i class="fas fa-times-circle"></i> Sai rồi! Đáp án đúng là: ${qData.options[qData.a]}. <br><span class="text-sm font-normal">${qData.explain}</span>`;
          feedback.className =
            "mt-6 p-4 rounded-lg text-center font-bold bg-red-100 text-red-700 block";
        }

        document.getElementById("score-display").innerText = `Điểm: ${score}`;

        if (currentQ < questions.length - 1) {
          document.getElementById("next-btn").classList.remove("hidden");
        } else {
          document.getElementById("restart-btn").classList.remove("hidden");
          document.getElementById("quiz-progress").style.width = "100%";
        }
      }

      function nextQuestion() {
        currentQ++;
        loadQuestion();
      }

      function restartQuiz() {
        currentQ = 0;
        score = 0;
        document.getElementById("score-display").innerText = `Điểm: 0`;
        document.getElementById("restart-btn").classList.add("hidden");
        loadQuestion();
      }

      // Init Quiz
      loadQuestion();