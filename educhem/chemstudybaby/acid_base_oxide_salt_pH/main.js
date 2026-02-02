// --- 1. THEME & UI LOGIC ---
      const themeToggle = document.getElementById("theme-toggle");
      const themeIcon = document.getElementById("theme-icon");
      const html = document.documentElement;

      function updateThemeIcon() {
        if (html.classList.contains("dark")) {
          themeIcon.classList.remove("fa-moon");
          themeIcon.classList.add("fa-sun");
        } else {
          themeIcon.classList.remove("fa-sun");
          themeIcon.classList.add("fa-moon");
        }
      }

      // Check local storage or system preference
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
      updateThemeIcon();

      themeToggle.addEventListener("click", () => {
        html.classList.toggle("dark");
        if (html.classList.contains("dark")) {
          localStorage.theme = "dark";
        } else {
          localStorage.theme = "light";
        }
        updateThemeIcon();
      });

      // Sticky Navbar Effect
      window.addEventListener("scroll", () => {
        const nav = document.getElementById("navbar");
        if (window.scrollY > 50) {
          nav.classList.add("shadow-md", "bg-white/80", "dark:bg-slate-900/80");
        } else {
          nav.classList.remove(
            "shadow-md",
            "bg-white/80",
            "dark:bg-slate-900/80",
          );
        }
      });

      // --- 2. ACID SIMULATION (Zn + HCl) ---
      let hasZinc = false;
      let hasAcid = false;

      function addZinc() {
        if (hasZinc) return;
        const zinc = document.getElementById("zinc-pellet");
        zinc.style.opacity = "1";
        hasZinc = true;
        checkAcidReaction();
      }

      function addAcid() {
        if (hasAcid) return;
        const liquid = document.getElementById("acid-liquid");
        liquid.style.height = "60%";
        liquid.style.backgroundColor = "rgba(200, 230, 255, 0.4)";
        hasAcid = true;
        setTimeout(checkAcidReaction, 1000); // Delay for liquid to fill
      }

      function checkAcidReaction() {
        if (hasZinc && hasAcid) {
          const container = document.getElementById("bubbles-container");
          document.getElementById("acid-result").innerHTML =
            "Phản ứng xảy ra! Khí H₂ thoát ra mạnh, Zn tan dần.";

          // Create bubbles loop
          const interval = setInterval(() => {
            if (!hasZinc || !hasAcid) {
              clearInterval(interval);
              return;
            }
            const bubble = document.createElement("div");
            bubble.className = "bubble";
            // Random size and position
            const size = Math.random() * 10 + 5;
            const left = Math.random() * 40 + 10; // Centerish

            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${left}px`;
            bubble.style.bottom = "10px";
            bubble.style.animation = `bubble ${Math.random() * 1 + 1}s linear infinite`;

            container.appendChild(bubble);

            // Remove after animation
            setTimeout(() => bubble.remove(), 2000);
          }, 200);

          // Dissolve Zinc visual effect
          setTimeout(() => {
            document.getElementById("zinc-pellet").style.transform =
              "translate(-50%) scale(0.5)";
          }, 3000);
        }
      }

      function resetAcidSim() {
        hasZinc = false;
        hasAcid = false;
        document.getElementById("zinc-pellet").style.opacity = "0";
        document.getElementById("zinc-pellet").style.transform =
          "translate(-50%) scale(1)";
        document.getElementById("acid-liquid").style.height = "0";
        document.getElementById("bubbles-container").innerHTML = "";
        document.getElementById("acid-result").innerText = "";
      }

      // --- 3. BASE pH SIMULATION (Food Test) ---
      function updatePH(val) {
        const display = document.getElementById("ph-display");
        const slider = document.getElementById("ph-slider");
        slider.value = val;
        let color = "";
        let text = "";

        if (val < 7) {
          color = "#ef4444"; // Red
          text = `pH = ${val}: ACID (Quỳ → Đỏ)`;
        } else if (val == 7) {
          color = "#22c55e"; // Green
          text = `pH = ${val}: TRUNG TÍNH (Không đổi màu)`;
        } else {
          color = "#3b82f6"; // Blue
          text = `pH = ${val}: BASE (Quỳ → Xanh)`;
        }

        display.style.backgroundColor = color;
        display.innerText = text;
      }

      function setPH(val, label) {
        updatePH(val);
        const display = document.getElementById("ph-display");
        display.innerText = `${label} - pH ~ ${val}`;
      }

      // --- 4. OXIDE SIMULATION (CuO + HCl) ---
      function addHCLtoCuO() {
        const liquid = document.getElementById("cuo-liquid");
        const powder = document.getElementById("cuo-powder");
        const result = document.getElementById("cuo-result");

        // Fill with HCl
        liquid.style.height = "60%";
        liquid.style.backgroundColor = "rgba(200, 230, 255, 0.4)"; // Clear HCl color

        setTimeout(() => {
          // Reaction happens
          liquid.style.backgroundColor = "rgba(34, 197, 94, 0.8)"; // Green CuCl2
          powder.style.opacity = "0"; // Dissolve
          result.innerText =
            "Hiện tượng: Bột đen tan dần, dung dịch chuyển sang màu xanh lá (CuCl₂).";
          result.className =
            "mt-3 text-sm font-bold text-green-600 min-h-[20px] text-center";
        }, 1500);
      }

      function resetCuO() {
        document.getElementById("cuo-liquid").style.height = "0";
        document.getElementById("cuo-powder").style.opacity = "1";
        document.getElementById("cuo-result").innerText =
          "Trạng thái: Bột CuO màu đen ở đáy ống nghiệm.";
        document.getElementById("cuo-result").className =
          "mt-3 text-sm text-slate-700 dark:text-slate-300 italic min-h-[20px] text-center";
      }

      // --- 5. SALT REACTION ---
      function dropSalt(type) {
        const beaker = document.getElementById("salt-beaker");
        if (!beaker) return;

        const drop = document.createElement("div");
        drop.className =
          "absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10";
        drop.style.top = "0";
        drop.style.backgroundColor = type === "NaCl" ? "#93c5fd" : "#cbd5e1"; // Blue-300 vs Slate-300
        drop.style.transition = "top 0.5s ease-in, opacity 0.5s ease-in";

        beaker.appendChild(drop);

        // Trigger animation
        requestAnimationFrame(() => {
          drop.style.top = "80%";
          drop.style.opacity = "0";
        });

        // Remove after animation
        setTimeout(() => drop.remove(), 500);
      }

      function runSaltReaction() {
        const sol = document.getElementById("salt-solution");
        const ppt = document.getElementById("precipitate");

        // Fill solution
        sol.style.height = "80%";

        setTimeout(() => {
          // Form precipitate
          ppt.style.height = "20px";
          ppt.style.bottom = "0";
        }, 1000);
      }
      function resetSalt() {
        document.getElementById("salt-solution").style.height = "0";
        document.getElementById("precipitate").style.height = "0";
      }

      // --- 6. FERTILIZER SIM ---
      function feedPlant(type) {
        const leaf1 = document.getElementById("leaf-1");
        const leaf2 = document.getElementById("leaf-2");
        const fruit = document.getElementById("fruit");
        const status = document.getElementById("plant-status");

        if (type === "N") {
          leaf1.setAttribute("fill", "#15803d"); // Dark green
          leaf2.setAttribute("fill", "#15803d");
          status.innerText = "Đã bón Đạm: Lá xanh tốt, quang hợp mạnh!";
          status.className =
            "text-xs text-center text-green-600 font-bold bg-white/80 p-1 rounded";
        } else if (type === "K") {
          fruit.setAttribute("r", "10"); // Grow fruit
          status.innerText = "Đã bón Kali: Ra quả, tăng sức đề kháng!";
          status.className =
            "text-xs text-center text-purple-600 font-bold bg-white/80 p-1 rounded";
        }
      }

      function resetPlant() {
        document.getElementById("leaf-1").setAttribute("fill", "#facc15"); // Yellow
        document.getElementById("leaf-2").setAttribute("fill", "#facc15");
        document.getElementById("fruit").setAttribute("r", "0");
        document.getElementById("plant-status").innerText =
          "Cây đang còi cọc, lá vàng!";
        document.getElementById("plant-status").className =
          "text-xs text-center text-red-500 font-bold bg-white/80 p-1 rounded";
      }

      // --- 7. QUIZ GAME (Updated) ---
      const questions = [
        {
          q: "Chất nào sau đây là acid?",
          a: ["KCl", "NaOH", "HClO₄", "CaO"],
          correct: 2,
        },
        {
          q: "Hiện tượng khi cho Mg vào dung dịch HCl?",
          a: [
            "Không hiện tượng",
            "Kết tủa trắng",
            "Sủi bọt khí",
            "Dung dịch hóa xanh",
          ],
          correct: 2,
        },
        {
          q: "Dung dịch có pH = 10 là môi trường gì?",
          a: ["Acid", "Trung tính", "Base", "Muối"],
          correct: 2,
        },
        {
          q: "Oxit nào tác dụng được với dung dịch Acid?",
          a: ["CO", "CO₂", "CuO", "NO"],
          correct: 2,
        },
        {
          q: "Phân đạm (Urea) cung cấp nguyên tố dinh dưỡng nào?",
          a: [
            "Nitrogen (N)",
            "Phosphorus (P)",
            "Potassium (K)",
            "Calcium (Ca)",
          ],
          correct: 0,
        },
      ];

      let currentQ = 0;
      let score = 0;

      function loadQuestion() {
        const q = questions[currentQ];
        document.getElementById("question-text").innerText =
          `Câu ${currentQ + 1}: ${q.q}`;
        const grid = document.getElementById("options-grid");
        grid.innerHTML = "";

        q.a.forEach((opt, index) => {
          const btn = document.createElement("button");
          btn.className =
            "p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition text-left font-medium";
          btn.innerText = opt;
          btn.onclick = () => checkAnswer(index, btn);
          grid.appendChild(btn);
        });

        document.getElementById("feedback").classList.add("hidden");
        document.getElementById("next-btn").classList.add("hidden");
      }

      function checkAnswer(selectedIndex, btn) {
        const correctIndex = questions[currentQ].correct;
        const feedback = document.getElementById("feedback");
        const allBtns = document.getElementById("options-grid").children;

        // Disable all buttons
        for (let b of allBtns) b.disabled = true;

        feedback.classList.remove("hidden");

        if (selectedIndex === correctIndex) {
          btn.classList.add(
            "bg-green-100",
            "border-green-500",
            "text-green-700",
          );
          feedback.innerHTML =
            "<i class='fas fa-check-circle text-green-500'></i> Chính xác!";
          feedback.className =
            "mt-6 p-4 rounded-xl text-center font-bold bg-green-50 text-green-700";
          score++;
        } else {
          btn.classList.add("bg-red-100", "border-red-500", "text-red-700");
          allBtns[correctIndex].classList.add(
            "bg-green-100",
            "border-green-500",
            "text-green-700",
          );
          feedback.innerHTML = `<i class='fas fa-times-circle text-red-500'></i> Sai rồi! Đáp án đúng là: ${questions[currentQ].a[correctIndex]}`;
          feedback.className =
            "mt-6 p-4 rounded-xl text-center font-bold bg-red-50 text-red-700";
        }

        // Update progress
        const pct = ((currentQ + 1) / questions.length) * 100;
        document.getElementById("progress-bar").style.width = `${pct}%`;

        document.getElementById("next-btn").classList.remove("hidden");
      }

      function nextQuestion() {
        currentQ++;
        if (currentQ < questions.length) {
          loadQuestion();
        } else {
          finishQuiz();
        }
      }

      function finishQuiz() {
        document.getElementById("quiz-container").children[0].innerText =
          "Kết thúc!";
        document.getElementById("options-grid").innerHTML = "";
        document.getElementById("feedback").classList.add("hidden");
        document.getElementById("next-btn").classList.add("hidden");

        const resultDiv = document.getElementById("quiz-reset-container");
        resultDiv.classList.remove("hidden");
        resultDiv.querySelector("h3").innerText =
          `Bạn đạt ${score}/${questions.length} điểm!`;
      }

      function restartQuiz() {
        currentQ = 0;
        score = 0;
        document.getElementById("quiz-reset-container").classList.add("hidden");
        document.getElementById("progress-bar").style.width = "0%";
        loadQuestion();
      }

      // Init
      document.addEventListener("DOMContentLoaded", () => {
        loadQuestion();
        resetPlant(); // Init SVG state
      });