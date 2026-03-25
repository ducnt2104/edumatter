      // --- 1. DARK MODE LOGIC ---
      const themeToggle = document.getElementById("themeToggle");
      const html = document.documentElement;

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

      themeToggle.addEventListener("click", () => {
        html.classList.toggle("dark");
        localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
      });

      // --- 2. SCROLL TO QUIZ ---
      function scrollToQuiz() {
        document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
      }

      // 1. Logic cho phần mô phỏng Khối lượng vs Số hiệu (Ar & K)
      function setHistoryMode(mode) {
        const boxK = document.getElementById("box-k");
        const boxAr = document.getElementById("box-ar");
        const btnMass = document.getElementById("btn-mass");
        const btnAtomic = document.getElementById("btn-atomic");
        const feedback = document.getElementById("history-feedback");
        const axisLabel = document.getElementById("axis-label");

        if (mode === "mass") {
          // Mendeleev: Theo khối lượng (K nhẹ hơn Ar nên K đứng trước)
          boxK.style.left = "20%";
          boxAr.style.left = "60%";

          btnMass.className =
            "px-4 py-2 rounded-lg bg-purple-500 text-white text-sm font-bold shadow-lg transition-all hover:scale-105";
          btnAtomic.className =
            "px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 text-slate-700 dark:text-white text-sm font-bold transition-all hover:scale-105";

          feedback.textContent =
            "Lỗi logic: K (kim loại kiềm) lại bị xếp trước Ar (Khí hiếm) làm sai lệch tính chất cột dọc!";
          feedback.className =
            "mt-3 text-center text-sm font-bold text-red-500 min-h-[20px]";
          axisLabel.textContent = "Chiều tăng dần Khối lượng";
        } else {
          // Moseley: Theo số hiệu Z (Ar Z=18 đứng trước K Z=19)
          boxAr.style.left = "20%";
          boxK.style.left = "60%";

          btnAtomic.className =
            "px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-bold shadow-lg transition-all hover:scale-105";
          btnMass.className =
            "px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 text-slate-700 dark:text-white text-sm font-bold transition-all hover:scale-105";

          feedback.innerHTML =
            "<i class='fas fa-check-circle mr-1'></i> Sắp xếp hoàn hảo: Các nguyên tố cùng nhóm có tính chất giống nhau!";
          feedback.className =
            "mt-3 text-center text-sm font-bold text-green-600 min-h-[20px]";
          axisLabel.textContent = "Chiều tăng dần Điện tích hạt nhân (Z)";
        }
      }

      // 2. Logic cho Quiz trắc nghiệm
      function checkQuiz(button, isCorrect) {
        // Reset buttons in the same container
        const container = button.parentElement;
        const buttons = container.querySelectorAll(".quiz-btn");
        buttons.forEach((btn) => {
          btn.classList.remove("correct", "incorrect");
        });

        // Check answer
        const feedback = document.getElementById(container.id + "-feedback");
        feedback.classList.remove("hidden", "text-green-600", "text-red-500");

        if (isCorrect) {
          button.classList.add("correct");
          feedback.textContent =
            "Chính xác! Mendeleev đã sắp xếp theo khối lượng nguyên tử.";
          feedback.classList.add("text-green-600");
        } else {
          button.classList.add("incorrect");
          feedback.textContent =
            "Chưa chính xác. Hãy nhớ lại kiến thức sơ khai năm 1869 nhé!";
          feedback.classList.add("text-red-500");
        }
      }

      // 3. Logic cho thẻ lật (Toggle Reveal)
      function toggleReveal(id) {
        const content = document.getElementById(id);
        const iconId = "icon-" + id;
        const icon = document.getElementById(iconId);

        if (content.classList.contains("open")) {
          content.classList.remove("open");
          if (icon) icon.style.transform = "rotate(0deg)";
        } else {
          content.classList.add("open");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      }

      // --- 4. SIMULATION 2: ATOM BUILDER ---
      const elementsData = {
        1: { s: "H", n: "Hydrogen", m: 1.008, p: 1, g: "IA" },
        2: { s: "He", n: "Helium", m: 4.002, p: 1, g: "VIIIA" },
        3: { s: "Li", n: "Lithium", m: 6.941, p: 2, g: "IA" },
        6: { s: "C", n: "Carbon", m: 12.01, p: 2, g: "IVA" },
        11: { s: "Na", n: "Sodium", m: 22.99, p: 3, g: "IA" },
        18: { s: "Ar", n: "Argon", m: 39.94, p: 3, g: "VIIIA" },
        19: { s: "K", n: "Potassium", m: 39.09, p: 4, g: "IA" },
        20: { s: "Ca", n: "Calcium", m: 40.08, p: 4, g: "IIA" },
      };

      // 1. Logic cho Scanner Ô nguyên tố
      const slider = document.getElementById("box-slider");
      slider.addEventListener("input", (e) => {
        const z = e.target.value;
        const el = elementsData[z] || {
          s: "?",
          n: "Unknown",
          m: "???",
          p: "?",
          g: "?",
        };
        document.getElementById("box-z").innerText = z;
        document.getElementById("box-symbol").innerText = el.s;
        document.getElementById("box-name").innerText = el.n;
        document.getElementById("box-mass").innerText = el.m;

        // Đồng bộ với Visualizer Nguyên tử
        updateAtom(z, el.p);
      });

      // 2. Logic cho Visualizer Lớp vỏ
      function updateAtom(z, periods) {
        const container = document.getElementById("atom-visualizer");
        const displayP = document.getElementById("display-period");
        const nucleusText = document.getElementById("nucleus");

        // Clear orbits
        const oldOrbits = container.querySelectorAll(".orbit");
        oldOrbits.forEach((o) => o.remove());

        displayP.innerText = periods;
        nucleusText.innerText = "+" + z;

        for (let i = 1; i <= periods; i++) {
          const orbit = document.createElement("div");
          orbit.className = "orbit";
          const size = 40 + i * 40;
          orbit.style.width = size + "px";
          orbit.style.height = size + "px";

          // Thêm 1 electron minh họa cho mỗi lớp
          const electron = document.createElement("div");
          electron.className = "electron";
          electron.style.top = "50%";
          electron.style.left = "-3px";
          orbit.appendChild(electron);

          container.appendChild(orbit);
        }
      }

      // 3. Logic cho Nhóm
      function highlightGroup(group) {
        const info = document.getElementById("group-info-box");
        if (group === "IA") {
          info.innerHTML =
            "<span class='text-emerald-500 font-bold'>Nhóm IA:</span> Đều có cấu hình electron lớp ngoài cùng là <b>ns¹</b>. Rất dễ nhường 1e.";
        } else {
          info.innerHTML =
            "<span class='text-blue-500 font-bold'>Nhóm VIIIA:</span> Đều có cấu hình electron bền vững <b>ns²np⁶</b> (trừ He). Rất trơ về hóa học.";
        }
      }

      // 5. Thí nghiệm ảo
      function simulateReaction(metal) {
        const effect = document.getElementById("reaction-effect");
        const desc = document.getElementById("reaction-desc");
        const water = document.getElementById("water");

        effect.style.opacity = "1";
        water.classList.add("bg-pink-300"); // Đổi màu phenolphtalein

        if (metal === "Li") {
          desc.innerText = "Lithium sủi bọt khí H₂ chậm.";
        } else {
          desc.innerText =
            "Sodium chạy trên mặt nước, nóng chảy thành viên tròn, phản ứng mạnh!";
        }

        setTimeout(() => {
          effect.style.opacity = "0";
          water.classList.remove("bg-pink-300");
        }, 2000);
      }

      // Khởi tạo ban đầu
      updateAtom(1, 1);
      // --- 5. SIMULATION 3: DRAG & DROP GAME (Block Classification) ---
      const draggables = document.querySelectorAll(".drag-item");
      const dropZones = document.querySelectorAll(".drop-zone");
      const dragFeedback = document.getElementById("drag-feedback");

      draggables.forEach((draggable) => {
        draggable.addEventListener("dragstart", () => {
          draggable.classList.add("opacity-50");
          draggable.setAttribute("data-dragging", "true");
        });

        draggable.addEventListener("dragend", () => {
          draggable.classList.remove("opacity-50");
          draggable.removeAttribute("data-dragging");
        });
      });

      dropZones.forEach((zone) => {
        zone.addEventListener("dragover", (e) => {
          e.preventDefault(); // Allow drop
          zone.classList.add("bg-gray-200", "dark:bg-slate-600");
        });

        zone.addEventListener("dragleave", () => {
          zone.classList.remove("bg-gray-200", "dark:bg-slate-600");
        });

        zone.addEventListener("drop", (e) => {
          e.preventDefault();
          zone.classList.remove("bg-gray-200", "dark:bg-slate-600");

          const draggingItem = document.querySelector('[data-dragging="true"]');
          const type = draggingItem.getAttribute("data-type");
          const target = zone.getAttribute("data-target");

          if (type === target) {
            zone.appendChild(draggingItem);
            draggingItem.classList.remove("bg-white", "dark:bg-slate-700");
            draggingItem.classList.add(
              "bg-green-100",
              "text-green-700",
              "border-none",
            );
            dragFeedback.textContent = "🎉 Chính xác! Bạn rất giỏi.";
            dragFeedback.className =
              "text-center text-xs mt-2 font-bold text-green-500";
          } else {
            dragFeedback.textContent =
              "❌ Sai rồi! Thử lại nhé. (Gợi ý: Na nhóm IA là s, O nhóm VIA là p)";
            dragFeedback.className =
              "text-center text-xs mt-2 font-bold text-red-500";
          }
        });
      });

      // --- 6. SIMULATION 4: TRENDS (Radius & Acid/Base) ---

      (function () {
        const elements = {
          1: { s: "H", n: "Hydrogen", c: "1s¹", b: "s", p: 1 },
          2: { s: "He", n: "Helium", c: "1s²", b: "s", p: 1 },
          6: { s: "C", n: "Carbon", c: "1s² 2s² 2p²", b: "p", p: 2 },
          8: { s: "O", n: "Oxygen", c: "1s² 2s² 2p⁴", b: "p", p: 2 },
          11: { s: "Na", n: "Sodium", c: "1s² 2s² 2p⁶ 3s¹", b: "s", p: 3 },
          12: { s: "Mg", n: "Magnesium", c: "1s² 2s² 2p⁶ 3s²", b: "s", p: 3 },
          13: { s: "Al", n: "Aluminium", c: "[Ne] 3s² 3p¹", b: "p", p: 3 },
          17: { s: "Cl", n: "Chlorine", c: "[Ne] 3s² 3p⁵", b: "p", p: 3 },
          20: { s: "Ca", n: "Calcium", c: "[Ar] 4s²", b: "s", p: 4 },
          26: { s: "Fe", n: "Iron", c: "[Ar] 3d⁶ 4s²", b: "d", p: 4 },
          29: { s: "Cu", n: "Copper", c: "[Ar] 3d¹⁰ 4s¹", b: "d", p: 4 },
          35: { s: "Br", n: "Bromine", c: "[Ar] 3d¹⁰ 4s² 4p⁵", b: "p", p: 4 },
        };

        // ⚛️ Atom Builder Logic
        const slider = document.getElementById("lab-z-slider");
        const updateLab = (z) => {
          const el = elements[z] || {
            s: "?",
            n: "N/A",
            c: "...",
            b: "?",
            p: 1,
          };
          document.getElementById("lab-z-val").innerText = z;
          document.getElementById("lab-symbol").innerText = el.s;
          document.getElementById("lab-block").innerText = el.b;
          document.getElementById("lab-config").innerText = el.c;

          const blockInd = document.getElementById("block-indicator");
          const colors = {
            s: "border-red-500 text-red-500",
            p: "border-yellow-500 text-yellow-500",
            d: "border-blue-500 text-blue-500",
            f: "border-purple-500 text-purple-500",
          };
          blockInd.className = `p-3 rounded-xl border-2 flex flex-col justify-center items-center transition-all duration-500 ${colors[el.b] || "border-slate-300"}`;

          renderAtom(z);
        };

        const renderAtom = (z) => {
          const container = document.getElementById("atom-canvas-container");
          container.querySelectorAll(".shell").forEach((s) => s.remove());

          const shellConfig = [2, 8, 18, 32];
          let remainingE = z;
          let shellIdx = 0;

          while (remainingE > 0 && shellIdx < 4) {
            const eInShell = Math.min(remainingE, shellConfig[shellIdx]);
            const shell = document.createElement("div");
            const size = 60 + shellIdx * 50;
            const isValence = remainingE <= shellConfig[shellIdx];

            shell.className = `shell ${isValence ? "valence-shell" : ""}`;
            shell.style.width = `${size}px`;
            shell.style.height = `${size}px`;

            for (let i = 0; i < eInShell; i++) {
              const e = document.createElement("div");
              e.className = "electron-dot";
              e.style.offsetPath = `circle(${size / 2}px at 50% 50%)`;
              e.style.animationDelay = `-${i * (5 / eInShell)}s`;
              shell.appendChild(e);
            }
            container.appendChild(shell);
            remainingE -= eInShell;
            shellIdx++;
          }
        };

        slider.addEventListener("input", (e) => updateLab(e.target.value));

        // 📊 Period Explorer
        document.querySelectorAll(".period-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const p = btn.dataset.period;
            const track = document.getElementById("period-track");
            track.innerHTML = "";
            const filtered = Object.entries(elements).filter(
              ([z, el]) => el.p == p,
            );
            filtered.forEach(([z, el], i) => {
              const b = document.createElement("div");
              b.className = "element-badge";
              b.style.animationDelay = `${i * 0.1}s`;
              b.innerText = el.s;
              track.appendChild(b);
            });
            document.getElementById("period-info").innerText =
              `Chu kỳ ${p} gồm các nguyên tố có ${p} lớp electron.`;
          });
        });

        // 🧬 Group Analyzer
        window.analyzeGroup = (group) => {
          const res = document.getElementById("group-result");
          if (group === "IA") {
            res.innerHTML =
              "<strong>Nhóm IA:</strong> Các nguyên tố khối <b>s</b>, có 1e lớp ngoài cùng. Tính kim loại mạnh nhất, dễ nhường electron.";
          } else {
            res.innerHTML =
              "<strong>Nhóm VIIIA:</strong> Các nguyên tố khối <b>p</b> (trừ He), có 8e lớp ngoài cùng. Cấu hình bền vững, trơ về mặt hóa học.";
          }
        };

        // ⚡ Bonding Simulator
        window.simulateBond = () => {
          const line = document.getElementById("bond-line");
          const atomA = document.getElementById("atom-a");
          const atomB = document.getElementById("atom-b");
          line.style.width = "100%";
          atomA.style.transform = "translateX(30px)";
          atomB.style.transform = "translateX(-30px)";
          document.getElementById("bond-desc").innerText =
            "Na nhường 1e cho Cl → Liên kết Ion NaCl được hình thành!";
        };

        window.resetBond = () => {
          document.getElementById("bond-line").style.width = "0";
          document.getElementById("atom-a").style.transform = "translateX(0)";
          document.getElementById("atom-b").style.transform = "translateX(0)";
          document.getElementById("bond-desc").innerText = "";
        };

        // 🎮 Mini Game Logic
        const gamePool = [
          { z: 11, s: "Na", b: "s" },
          { z: 8, s: "O", b: "p" },
          { z: 26, s: "Fe", b: "d" },
          { z: 20, s: "Ca", b: "s" },
          { z: 13, s: "Al", b: "p" },
          { z: 29, s: "Cu", b: "d" },
        ];

        const initGame = () => {
          const container = document.getElementById("game-items");
          gamePool
            .sort(() => Math.random() - 0.5)
            .forEach((item) => {
              const div = document.createElement("div");
              div.className = "game-item";
              div.draggable = true;
              div.innerText = `${item.s} (Z=${item.z})`;
              div.dataset.block = item.b;
              div.addEventListener("dragstart", (e) => {
                div.classList.add("dragging");
                e.dataTransfer.setData("block", item.b);
              });
              div.addEventListener("dragend", () =>
                div.classList.remove("dragging"),
              );
              container.appendChild(div);
            });
        };

        document.querySelectorAll(".drop-target").forEach((zone) => {
          zone.addEventListener("dragover", (e) => e.preventDefault());
          zone.addEventListener("drop", (e) => {
            const block = e.dataTransfer.getData("block");
            if (block === zone.dataset.block) {
              const dragged = document.querySelector(".dragging");
              zone.querySelector(".slot").appendChild(dragged);
              dragged.draggable = false;
              dragged.classList.replace("game-item", "px-2");
              checkWin();
            }
          });
        });

        const checkWin = () => {
          if (document.getElementById("game-items").children.length === 0) {
            document.getElementById("game-feedback").innerText =
              "🎉 Tuyệt vời! Bạn đã phân loại đúng tất cả.";
            document.getElementById("game-feedback").className =
              "text-center mt-6 font-bold text-xl text-green-400 animate-bounce";
          }
        };

        // Init
        updateLab(11);
        initGame();
      })();

      // --- 7. QUIZ LOGIC ---
      const questions = [
        {
          q: "Mendeleev sắp xếp các nguyên tố hóa học vào bảng tuần hoàn dựa theo quy luật về:",
          options: [
            "Khối lượng nguyên tử",
            "Cấu hình electron",
            "Số hiệu nguyên tử",
            "Số khối",
          ],
          correct: 0,
          explain:
            "Thời điểm 1869 chưa tìm ra cấu tạo nguyên tử, Mendeleev dựa vào Khối lượng.",
        },
        {
          q: "Các nguyên tố nhóm A là các nguyên tố thuộc khối nào?",
          options: ["Khối s và f", "Khối d và f", "Khối s và p", "Khối p và d"],
          correct: 2,
          explain:
            "Nhóm A bao gồm nguyên tố s (IA, IIA) và nguyên tố p (IIIA-VIIIA).",
        },
        {
          q: "Trong một chu kì, theo chiều tăng của Z, bán kính nguyên tử biến đổi như thế nào?",
          options: [
            "Tăng dần",
            "Giảm dần",
            "Không đổi",
            "Biến đổi không quy luật",
          ],
          correct: 1,
          explain: "Z tăng -> Hút e mạnh hơn -> Bán kính co lại (Giảm).",
        },
        {
          q: "Độ âm điện lớn nhất trong bảng tuần hoàn thuộc về nguyên tố nào?",
          options: [
            "Chlorine (Cl)",
            "Oxygen (O)",
            "Francium (Fr)",
            "Fluorine (F)",
          ],
          correct: 3,
          explain: "Fluorine (F) có độ âm điện 3.98, lớn nhất bảng.",
        },
        {
          q: "Nguyên tử của nguyên tố X có Z = 11. Vị trí của X trong bảng tuần hoàn là?",
          options: [
            "Chu kì 2, nhóm IA",
            "Chu kì 3, nhóm IA",
            "Chu kì 3, nhóm IIA",
            "Chu kì 2, nhóm VIIA",
          ],
          correct: 1,
          explain:
            "Z=11 (2,8,1) => 3 lớp e (Chu kì 3), 1e ngoài cùng (Nhóm IA).",
        },
      ];

      let currentQ = 0;
      let score = 0;
      const quizContainer = document.getElementById("quiz-container");
      const qText = document.getElementById("question-text");
      const optsContainer = document.getElementById("options-container");
      const quizFeedback = document.getElementById("quiz-feedback");
      const progressBar = document.getElementById("quiz-progress");

      function loadQuestion() {
        if (currentQ >= questions.length) {
          showResults();
          return;
        }

        const q = questions[currentQ];
        qText.textContent = `Câu ${currentQ + 1}: ${q.q}`;
        optsContainer.innerHTML = "";

        // Update Progress
        const pct = (currentQ / questions.length) * 100;
        progressBar.style.width = `${pct}%`;

        q.options.forEach((opt, idx) => {
          const btn = document.createElement("button");
          btn.className =
            "w-full text-left p-4 rounded-lg bg-white dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 border border-transparent hover:border-blue-300 transition-all flex justify-between items-center group";
          btn.innerHTML = `<span>${opt}</span> <i class="fas fa-check-circle opacity-0 group-hover:opacity-100 text-blue-500"></i>`;
          btn.onclick = () => checkAnswer(idx, btn);
          optsContainer.appendChild(btn);
        });
      }

      function checkAnswer(selectedIdx, btnElement) {
        const q = questions[currentQ];
        const buttons = optsContainer.querySelectorAll("button");

        // Disable all buttons
        buttons.forEach((b) => (b.disabled = true));

        if (selectedIdx === q.correct) {
          score++;
          btnElement.classList.add(
            "bg-green-100",
            "border-green-500",
            "dark:bg-green-900/30",
          );
          btnElement.querySelector("i").className =
            "fas fa-check-circle text-green-500";
        } else {
          btnElement.classList.add(
            "bg-red-100",
            "border-red-500",
            "dark:bg-red-900/30",
          );
          btnElement.querySelector("i").className =
            "fas fa-times-circle text-red-500";
          // Show correct
          buttons[q.correct].classList.add(
            "bg-green-100",
            "border-green-500",
            "dark:bg-green-900/30",
          );
        }

        // Show explanation toast/append
        const explain = document.createElement("div");
        explain.className =
          "mt-4 p-3 bg-blue-50 dark:bg-slate-800 text-sm text-blue-800 dark:text-blue-300 rounded animate-pulse";
        explain.innerHTML = `<strong>💡 Giải thích:</strong> ${q.explain}`;
        optsContainer.appendChild(explain);

        // Next Question Delay
        setTimeout(() => {
          currentQ++;
          loadQuestion();
        }, 2500);
      }

      function showResults() {
        quizContainer.classList.add("hidden");
        quizFeedback.classList.remove("hidden");
        progressBar.style.width = "100%";

        document.getElementById("feedback-score").textContent =
          `Bạn trả lời đúng ${score}/${questions.length} câu.`;

        if (score === questions.length) {
          document.getElementById("feedback-title").textContent =
            "Xuất sắc! Thiên tài Hóa học";
          document.getElementById("feedback-icon").textContent = "🏆";
        } else if (score >= 3) {
          document.getElementById("feedback-title").textContent =
            "Làm tốt lắm!";
          document.getElementById("feedback-icon").textContent = "🌟";
        } else {
          document.getElementById("feedback-title").textContent =
            "Cần cố gắng thêm!";
          document.getElementById("feedback-icon").textContent = "📚";
        }
      }

      function resetQuiz() {
        currentQ = 0;
        score = 0;
        quizContainer.classList.remove("hidden");
        quizFeedback.classList.add("hidden");
        loadQuestion();
      }

      // Init Quiz
      loadQuestion();
      (function () {
        // 1. Data Store
        const radiusData = {
          period: [
            { s: "Li", z: 3, r: 152, shells: 2 },
            { s: "Be", z: 4, r: 112, shells: 2 },
            { s: "B", z: 5, r: 88, shells: 2 },
            { s: "C", z: 6, r: 77, shells: 2 },
            { s: "N", z: 7, r: 70, shells: 2 },
            { s: "O", z: 8, r: 66, shells: 2 },
            { s: "F", z: 9, r: 64, shells: 2 },
            { s: "Ne", z: 10, r: 160, shells: 2 }, // Note: Noble gas van der waals radius
          ],
          group: [
            { s: "Li", z: 3, r: 152, shells: 2 },
            { s: "Na", z: 11, r: 186, shells: 3 },
            { s: "K", z: 19, r: 227, shells: 4 },
            { s: "Rb", z: 37, r: 248, shells: 5 },
            { s: "Cs", z: 55, r: 265, shells: 6 },
          ],
        };

        const abData = {
          Na: {
            f: "NaOH",
            o: "Na₂O",
            t: "Base mạnh",
            ph: 14,
            c: "#3b82f6",
            d: "Dung dịch kiềm mạnh, làm phenolphtalein hóa hồng đậm.",
          },
          Mg: {
            f: "Mg(OH)₂",
            o: "MgO",
            t: "Base yếu",
            ph: 10,
            c: "#60a5fa",
            d: "Base ít tan, dùng làm thuốc giảm acid dạ dày.",
          },
          Al: {
            f: "Al(OH)₃",
            o: "Al₂O₃",
            t: "Lưỡng tính",
            ph: 7,
            c: "#94a3b8",
            d: "Có thể phản ứng với cả acid và base mạnh.",
          },
          Si: {
            f: "H₂SiO₃",
            o: "SiO₂",
            t: "Acid rất yếu",
            ph: 6,
            c: "#fbbf24",
            d: "Dạng keo, tính acid không đáng kể.",
          },
          P: {
            f: "H₃PO₄",
            o: "P₂O₅",
            t: "Acid trung bình",
            ph: 3,
            c: "#f59e0b",
            d: "Acid ba nấc, dùng trong công nghiệp thực phẩm.",
          },
          S: {
            f: "H₂SO₄",
            o: "SO₃",
            t: "Acid mạnh",
            ph: 1,
            c: "#f43f5e",
            d: "Acid cực mạnh, có tính háo nước cao.",
          },
          Cl: {
            f: "HClO₄",
            o: "Cl₂O₇",
            t: "Acid rất mạnh",
            ph: 0,
            c: "#be123c",
            d: "Acid mạnh nhất trong các acid có oxy.",
          },
        };

        // 2. Radius Lab Logic
        const rVisual = document.getElementById("radius-visual");
        const rStat = document.getElementById("stat-r");
        const zStat = document.getElementById("val-z");
        const sStat = document.getElementById("val-shells");
        const nucleus = document.getElementById("nucleus-focus");

        function updateRadius(data) {
          const scale = data.r / 200; // Normalize
          rVisual.style.width = `${100 * scale}px`;
          rVisual.style.height = `${100 * scale}px`;
          rStat.innerText = `${data.r} pm`;
          zStat.innerText = data.z;
          sStat.innerText = data.shells;
          nucleus.innerText = data.s;

          // Update Chi Pointer purely based on trend (simplified)
          const chiPos = (data.z % 20) * 5;
          document.getElementById("chi-pointer").style.left = `${20 + chiPos}%`;
        }

        document
          .getElementById("slider-period")
          .addEventListener("input", (e) => {
            const data = radiusData.period[e.target.value];
            updateRadius(data);
          });

        document
          .getElementById("slider-group")
          .addEventListener("input", (e) => {
            const data = radiusData.group[e.target.value];
            updateRadius(data);
          });

        // 3. Acid-Base Lab Logic
        const abSelector = document.getElementById("ab-selector");
        const phFluid = document.getElementById("ph-fluid");
        const phDisplay = document.getElementById("ph-val-display");

        Object.keys(abData).forEach((el) => {
          const btn = document.createElement("button");
          btn.className = "ab-btn";
          btn.innerText = el;
          btn.onclick = () => {
            document
              .querySelectorAll(".ab-btn")
              .forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            renderAB(el);
          };
          abSelector.appendChild(btn);
        });

        function renderAB(el) {
          const info = abData[el];
          document.getElementById("ab-formula").innerText = info.f;
          document.getElementById("ab-oxide").innerText = `Oxide: ${info.o}`;
          document.getElementById("ab-tag").innerText = info.t;
          document.getElementById("ab-tag").style.backgroundColor = info.c;
          document.getElementById("ab-desc").innerText = info.d;

          // Animate PH Meter
          const phPercent = ((14 - info.ph) / 14) * 100;
          phFluid.style.height = `${100 - phPercent}%`;
          phFluid.style.backgroundColor = info.c;
          phDisplay.innerText = info.ph;
        }

        // Initialize
        updateRadius(radiusData.period[0]);
        abSelector.firstChild.click();
      })();
      (function () {
        const elementsData = {
          1: {
            name: "H",
            shells: [1],
            group: "IA",
            period: 1,
            type: "Phi kim",
            valency: "I",
            oxide: "H2O",
          },
          3: {
            name: "Li",
            shells: [2, 1],
            group: "IA",
            period: 2,
            type: "Kim loại mạnh",
            valency: "I",
            oxide: "Li2O",
          },
          11: {
            name: "Na",
            shells: [2, 8, 1],
            group: "IA",
            period: 3,
            type: "Kim loại mạnh",
            valency: "I",
            oxide: "Na2O",
          },
          12: {
            name: "Mg",
            shells: [2, 8, 2],
            group: "IIA",
            period: 3,
            type: "Kim loại",
            valency: "II",
            oxide: "MgO",
          },
          13: {
            name: "Al",
            shells: [2, 8, 3],
            group: "IIIA",
            period: 3,
            type: "Lưỡng tính",
            valency: "III",
            oxide: "Al2O3",
          },
          14: {
            name: "Si",
            shells: [2, 8, 4],
            group: "IVA",
            period: 3,
            type: "Phi kim",
            valency: "IV",
            oxide: "SiO2",
          },
          15: {
            name: "P",
            shells: [2, 8, 5],
            group: "VA",
            period: 3,
            type: "Phi kim",
            valency: "V",
            oxide: "P2O5",
          },
          16: {
            name: "S",
            shells: [2, 8, 6],
            group: "VIA",
            period: 3,
            type: "Phi kim",
            valency: "VI",
            oxide: "SO3",
          },
          17: {
            name: "Cl",
            shells: [2, 8, 7],
            group: "VIIA",
            period: 3,
            type: "Phi kim mạnh",
            valency: "VII",
            oxide: "Cl2O7",
          },
          19: {
            name: "K",
            shells: [2, 8, 8, 1],
            group: "IA",
            period: 4,
            type: "Kim loại mạnh",
            valency: "I",
            oxide: "K2O",
          },
          20: {
            name: "Ca",
            shells: [2, 8, 8, 2],
            group: "IIA",
            period: 4,
            type: "Kim loại",
            valency: "II",
            oxide: "CaO",
          },
        };

        const inputZ = document.getElementById("inputZ");
        const btnDecode = document.getElementById("btnDecode");
        const decodeResult = document.getElementById("decodeResult");
        const atomCanvas = document.getElementById("atomCanvas");
        const valencyBox = document.getElementById("valencyBox");
        const phIndicator = document.getElementById("phIndicator");
        const phText = document.getElementById("phText");

        function initApp() {
          btnDecode.addEventListener("click", () =>
            decode(parseInt(inputZ.value)),
          );

          // Application Cards Toggle
          document.querySelectorAll(".app-card").forEach((card) => {
            card.addEventListener("click", () => {
              card.classList.toggle("active");
            });
          });

          // Default Load
          decode(11);
        }

        function decode(z) {
          const data = elementsData[z] || {
            name: "?",
            shells: [1],
            group: "?",
            period: "?",
            type: "Chưa cập nhật",
            valency: "?",
            oxide: "?",
          };

          // Update Badges
          decodeResult.innerHTML = `
      <div class="decode-badge">
        <div class="text-[10px] text-slate-400 font-bold uppercase">Ký hiệu</div>
        <div class="text-xl font-black text-blue-600">${data.name}</div>
      </div>
      <div class="decode-badge">
        <div class="text-[10px] text-slate-400 font-bold uppercase">Chu kì</div>
        <div class="text-xl font-black text-slate-700 dark:text-slate-200">${data.period}</div>
      </div>
      <div class="decode-badge">
        <div class="text-[10px] text-slate-400 font-bold uppercase">Nhóm</div>
        <div class="text-xl font-black text-slate-700 dark:text-slate-200">${data.group}</div>
      </div>
      <div class="decode-badge">
        <div class="text-[10px] text-slate-400 font-bold uppercase">Loại</div>
        <div class="text-[10px] font-bold text-emerald-600">${data.type}</div>
      </div>
    `;

          // Update Atom Visualizer
          const nucleus = document.getElementById("nucleus");
          nucleus.innerText = z;

          // Remove old shells
          const oldShells = atomCanvas.querySelectorAll(".shell");
          oldShells.forEach((s) => s.remove());

          data.shells.forEach((count, index) => {
            const radius = 40 + index * 25;
            const shell = document.createElement("div");
            shell.className = "shell";
            shell.style.width = `${radius * 2}px`;
            shell.style.height = `${radius * 2}px`;
            shell.style.animationDuration = `${5 + index * 3}s`;

            for (let i = 0; i < count; i++) {
              const electron = document.createElement("div");
              electron.className = "electron";
              const angle = (i / count) * 360;
              electron.style.transform = `rotate(${angle}deg) translateX(${radius}px)`;
              shell.appendChild(electron);
            }
            atomCanvas.appendChild(shell);
          });

          // Update Valency & Acid/Base
          valencyBox.innerHTML = `
      <p>• Hóa trị cao nhất: <b>${data.valency}</b></p>
      <p>• Công thức Oxide: <b>${data.oxide}</b></p>
    `;

          updateAcidBase(data);
        }

        function updateAcidBase(data) {
          let color = "#94a3b8";
          let label = "Trung tính / Lưỡng tính";

          if (data.type.includes("Kim loại mạnh")) {
            color = "#3b82f6";
            label = "Base mạnh";
          } else if (data.type === "Phi kim mạnh") {
            color = "#ef4444";
            label = "Acid mạnh";
          } else if (data.type === "Phi kim") {
            color = "#f59e0b";
            label = "Acid yếu/TB";
          }

          phIndicator.style.backgroundColor = color;
          phIndicator.style.boxShadow = `0 0 15px ${color}`;
          phText.innerText = label;
          phText.style.color = color;
        }

        initApp();
      })();
      // DATA logic đơn giản (có thể mở rộng)
const oxideType = {
  "Na": { type: "base", ph: 12, oxide: "Na2O" },
  "Ca": { type: "base", ph: 11, oxide: "CaO" },
  "Al": { type: "amphoteric", ph: 7, oxide: "Al2O3" },
  "Zn": { type: "amphoteric", ph: 7, oxide: "ZnO" },
  "C": { type: "acid", ph: 4, oxide: "CO2" },
  "S": { type: "acid", ph: 3, oxide: "SO3" },
  "N": { type: "neutral", ph: 7, oxide: "NO" }
};

// gọi khi click nguyên tố
function updateAcidBase(element) {
  const data = oxideType[element];
  if (!data) return;

  const indicator = document.getElementById("phIndicator");
  const text = document.getElementById("phText");

  // di chuyển thanh pH
  const percent = (data.ph / 14) * 100;
  indicator.style.left = percent + "%";

  // hiển thị text
  let label = "";
  if (data.type === "acid") label = "Oxide acid 🔴";
  if (data.type === "base") label = "Oxide base 🔵";
  if (data.type === "amphoteric") label = "Lưỡng tính ⚖️";
  if (data.type === "neutral") label = "Trung tính ⚪";

  text.innerHTML = `
    ${label} <br>
    Oxide: <b>${data.oxide}</b> <br>
    pH ≈ ${data.ph}
  `;
}