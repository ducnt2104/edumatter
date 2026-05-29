 // ==========================================
      // 1. SYSTEM UTILITIES & THEME
      // ==========================================
      document.addEventListener("DOMContentLoaded", () => {
        const themeToggle = document.getElementById("theme-toggle");
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
          localStorage.theme = html.classList.contains("dark")
            ? "dark"
            : "light";
          // Redraw canvas colors if needed
          initSimulations();
        });

        // Initialize all simulations
        initSimulations();

        // Header Scroll Effect
        window.addEventListener("scroll", () => {
          const header = document.getElementById("main-header");
          if (window.scrollY > 50) {
            header.classList.add("shadow-md");
          } else {
            header.classList.remove("shadow-md");
          }
        });
      });

      function initSimulations() {
        initGraphSim();
        initParticleSim("canvas-concentration", "conc");
        initParticleSim("canvas-temp", "temp");
        initSurfaceAreaSim();
      }

      // ==========================================
      // 2. SIMULATION: KINETIC GRAPH (SECTION I)
      // ==========================================
      let graphCtx, graphCanvas;
      let animationIdGraph;

      function initGraphSim() {
        graphCanvas = document.getElementById("kineticGraph");
        graphCtx = graphCanvas.getContext("2d");
        const slider = document.getElementById("reactionRateSlider");
        const display = document.getElementById("rateValueDisplay");

        function drawGraph() {
          const width = graphCanvas.width;
          const height = graphCanvas.height;
          const rate = parseInt(slider.value); // 1 to 10

          // Update text
          if (rate < 4) display.innerText = "Chậm";
          else if (rate < 8) display.innerText = "Trung bình";
          else display.innerText = "Nhanh";
          display.style.color =
            rate < 4 ? "#3b82f6" : rate < 8 ? "#eab308" : "#ef4444";

          // Clear
          graphCtx.clearRect(0, 0, width, height);

          // Draw Axes
          graphCtx.beginPath();
          graphCtx.strokeStyle = "#94a3b8";
          graphCtx.lineWidth = 2;
          graphCtx.moveTo(40, 10);
          graphCtx.lineTo(40, height - 20); // Y axis
          graphCtx.lineTo(width - 10, height - 20); // X axis
          graphCtx.stroke();

          // Draw Reactant Curve (Descending) - Red
          graphCtx.beginPath();
          graphCtx.strokeStyle = "#ef4444";
          graphCtx.lineWidth = 3;
          let startY = 30;
          graphCtx.moveTo(40, startY);

          // Simulate exponential decay based on rate
          for (let x = 40; x < width - 10; x += 2) {
            let time = (x - 40) / 20;
            let k = rate * 0.05;
            let y = height - 20 - (height - 50) * Math.exp(-k * time);
            // For Reactant: Start High, go Low. So Y increases.
            // Actually Y coord increases downwards.
            // Let's use simple math: C = C0 * e^(-kt)
            // Map C to Y: High C = low Y value.
            let cnorm = Math.exp(-k * time);
            let drawY = height - 20 - cnorm * (height - 50);
            graphCtx.lineTo(x, drawY);
          }
          graphCtx.stroke();

          // Draw Product Curve (Ascending) - Blue
          graphCtx.beginPath();
          graphCtx.strokeStyle = "#3b82f6";
          graphCtx.moveTo(40, height - 20);
          for (let x = 40; x < width - 10; x += 2) {
            let time = (x - 40) / 20;
            let k = rate * 0.05;
            let cnorm = 1 - Math.exp(-k * time);
            let drawY = height - 20 - cnorm * (height - 50);
            graphCtx.lineTo(x, drawY);
          }
          graphCtx.stroke();
        }

        slider.addEventListener("input", drawGraph);
        drawGraph();
      }

      // ==========================================
      // 3. SIMULATION: PARTICLE SYSTEM (SECTION II)
      // ==========================================
      // Shared class for Concentration and Temperature Sims
      const sims = {};

      function initParticleSim(canvasId, type) {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext("2d");

        // Set canvas resolution
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const slider = document.getElementById(`range-${type}`);
        const countDisplay = document.getElementById(
          type === "conc" ? "collision-count-conc" : "val-temp",
        );

        let particles = [];
        let collisionCount = 0;
        let lastTime = Date.now();
        let collisionTimer = 0;

        class Particle {
          constructor() {
            this.r = 3; // radius
            this.x = Math.random() * (canvas.width - 2 * this.r) + this.r;
            this.y = Math.random() * (canvas.height - 2 * this.r) + this.r;

            // Velocity base
            const speed = type === "temp" ? parseInt(slider.value) * 1.5 : 3;
            const angle = Math.random() * Math.PI * 2;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;

            this.color =
              type === "temp"
                ? `hsl(${360 - slider.value * 20}, 70%, 50%)`
                : "#3b82f6";
            this.flash = 0;
          }

          update() {
            this.x += this.vx;
            this.y += this.vy;

            // Wall collision
            if (this.x - this.r < 0 || this.x + this.r > canvas.width)
              this.vx *= -1;
            if (this.y - this.r < 0 || this.y + this.r > canvas.height)
              this.vy *= -1;

            // Constrain
            this.x = Math.max(this.r, Math.min(canvas.width - this.r, this.x));
            this.y = Math.max(this.r, Math.min(canvas.height - this.r, this.y));

            if (this.flash > 0) this.flash--;
          }

          draw() {
            ctx.beginPath();
            ctx.arc(
              this.x,
              this.y,
              this.r + (this.flash > 0 ? 2 : 0),
              0,
              Math.PI * 2,
            );
            ctx.fillStyle = this.flash > 0 ? "#fff" : this.color;
            ctx.fill();
            ctx.closePath();
          }
        }

        function createParticles() {
          particles = [];
          let count = type === "conc" ? parseInt(slider.value) : 30; // Fixed count for temp, variable for conc
          for (let i = 0; i < count; i++) {
            particles.push(new Particle());
          }
        }

        function animate() {
          if (sims[canvasId].stop) return;

          ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Trail effect
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Update particles
          for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Check collisions with other particles
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < particles[i].r + particles[j].r) {
                // Collision!
                // Simple elastic collision logic (swap velocities for simplicity in visual)
                let tempVx = particles[i].vx;
                let tempVy = particles[i].vy;
                particles[i].vx = particles[j].vx;
                particles[i].vy = particles[j].vy;
                particles[j].vx = tempVx;
                particles[j].vy = tempVy;

                // Separate slightly to prevent sticking
                particles[i].x += particles[i].vx * 0.5;
                particles[i].y += particles[i].vy * 0.5;

                // Flash effect
                particles[i].flash = 5;
                particles[j].flash = 5;
                collisionCount++;
              }
            }
          }

          // Update Collision Counter per second
          const now = Date.now();
          if (now - lastTime >= 1000) {
            if (type === "conc") {
              countDisplay.innerText = collisionCount;
              // Update Label text
              const val = parseInt(slider.value);
              document.getElementById("val-conc").innerText =
                val < 40 ? "Thấp" : val < 70 ? "Trung bình" : "Cao";
              document.getElementById("val-conc").style.color =
                val < 40 ? "#3b82f6" : val < 70 ? "#eab308" : "#ef4444";
            } else {
              // Temp Sim Label
              const tempVal = parseInt(slider.value);
              countDisplay.innerText = tempVal * 10 + "°C";
              // Update bar color
              const indicator = document.getElementById("temp-indicator");
              indicator.style.opacity = tempVal / 10;
            }
            collisionCount = 0;
            lastTime = now;
          }

          requestAnimationFrame(animate);
        }

        // Event Listeners
        slider.addEventListener("input", () => {
          createParticles();
        });

        // Start
        sims[canvasId] = { stop: false };
        createParticles();
        animate();
      }

      // ==========================================
      // 4. SIMULATION: SURFACE AREA (SECTION II)
      // ==========================================
      function initSurfaceAreaSim() {
        const range = document.getElementById("range-surface");
        const container = document.getElementById("cube-container");
        const label = document.getElementById("val-surface");

        range.addEventListener("input", () => {
          const level = parseInt(range.value);
          container.innerHTML = "";

          // Reset Grid classes
          container.className =
            "relative w-32 h-32 transition-all duration-500 grid gap-1";

          if (level === 1) {
            // One big block
            label.innerText = "Nguyên khối";
            container.classList.add("grid-cols-1");
            const div = document.createElement("div");
            div.className =
              "bg-yellow-500 w-full h-full rounded shadow-inner border border-yellow-600";
            container.appendChild(div);
          } else if (level === 2) {
            // 4 blocks (2x2)
            label.innerText = "Chia nhỏ";
            container.classList.add("grid-cols-2");
            for (let i = 0; i < 4; i++) {
              const div = document.createElement("div");
              div.className =
                "bg-yellow-500 w-full h-full rounded shadow-inner border border-yellow-600 animate-pulse";
              container.appendChild(div);
            }
          } else {
            // 16 blocks (4x4)
            label.innerText = "Dạng bột mịn";
            container.classList.add("grid-cols-4");
            for (let i = 0; i < 16; i++) {
              const div = document.createElement("div");
              div.className =
                "bg-yellow-500 w-full h-full rounded-sm shadow-inner border border-yellow-600 animate-pulse";
              container.appendChild(div);
            }
          }
        });
        // Init default
        range.dispatchEvent(new Event("input"));
      }

      // ==========================================
      // 5. SIMULATION: CATALYST (SECTION II)
      // ==========================================
      const btnCat = document.getElementById("btn-catalyst");
      const pathCat = document.getElementById("path-cat");
      const ball = document.getElementById("reaction-ball");
      let hasCatalyst = false;

      btnCat.addEventListener("click", () => {
        hasCatalyst = !hasCatalyst;
        if (hasCatalyst) {
          // Lower activation energy
          pathCat.setAttribute("d", "M 20,80 Q 100,50 180,90"); // Lower hill
          pathCat.setAttribute("stroke", "#22c55e"); // Green
          btnCat.innerHTML = '<i class="fas fa-minus"></i> Bỏ xúc tác';
          btnCat.classList.replace("bg-slate-200", "bg-green-200");
          btnCat.classList.replace("hover:bg-purple-500", "hover:bg-red-500");

          // Animate ball faster
          animateBall(1000);
        } else {
          // Higher activation energy
          pathCat.setAttribute("d", "M 20,80 Q 100,10 180,90"); // High hill
          pathCat.setAttribute("stroke", "#ef4444"); // Red
          btnCat.innerHTML = '<i class="fas fa-plus"></i> Thêm xúc tác';
          btnCat.classList.replace("bg-green-200", "bg-slate-200");
          btnCat.classList.replace("hover:bg-red-500", "hover:bg-purple-500");

          // Animate ball slower
          animateBall(3000);
        }
      });

      function animateBall(duration) {
        // Remove old animation
        ball.style.animation = "none";
        ball.offsetHeight; /* trigger reflow */

        // We use JS to calculate path position for smoother "rolling" physics look
        // But CSS offset-path is not fully supported everywhere, so simple Keyframe or SVG animateMotion
        // Let's use simple CSS animation class toggle for demonstration or SVG SMIL

        // Cleanest way in pure JS/CSS without complex math:
        const anim = ball.animate(
          [{ offsetDistance: "0%" }, { offsetDistance: "100%" }],
          {
            duration: duration,
            iterations: Infinity,
            easing: "ease-in-out",
          },
        );

        // Note: offset-path needs to be set in CSS to match the path d
        // Since d changes, we need to update the style dynamically
        // BUT, offset-path support varies.
        // Alternative: SMIL <animateMotion> inside SVG

        // Let's use a simpler visual hack: CSS keyframes move X, Y approximates Q curve
        // For stability, let's just use CSS translate.
      }

      // Simulating the rolling ball simply
      let ballTime = 0;
      function loopBall() {
        ballTime += hasCatalyst ? 0.04 : 0.01;
        if (ballTime > 1) ballTime = 0;

        // Quadratic Bezier: (1-t)^2 P0 + 2(1-t)t P1 + t^2 P2
        // P0=(20,80), P2=(180,90)
        // P1 changes: (100, 10) vs (100, 50)

        const t = ballTime;
        const P0 = { x: 20, y: 80 };
        const P2 = { x: 180, y: 90 };
        const P1 = hasCatalyst ? { x: 100, y: 50 } : { x: 100, y: 10 }; // Control point

        const x =
          Math.pow(1 - t, 2) * P0.x +
          2 * (1 - t) * t * P1.x +
          Math.pow(t, 2) * P2.x;
        const y =
          Math.pow(1 - t, 2) * P0.y +
          2 * (1 - t) * t * P1.y +
          Math.pow(t, 2) * P2.y;

        ball.setAttribute("cx", x);
        ball.setAttribute("cy", y);
        requestAnimationFrame(loopBall);
      }
      loopBall();

      // ==========================================
      // 6. VIRTUAL LAB LOGIC (SECTION IV)
      // ==========================================

      // --- Experiment 1: Mg + HCl ---
      function startExp1() {
        const strip1 = document.getElementById("mg-strip-1");
        const strip2 = document.getElementById("mg-strip-2");
        const liquid1 = document.getElementById("liquid-1");
        const liquid2 = document.getElementById("liquid-2");
        const res = document.getElementById("exp1-result");

        // Drop Mg
        strip1.style.top = "60px";
        strip2.style.top = "60px";

        setTimeout(() => {
          // Reaction starts
          // Beaker 1 (0.5M): Slow bubbles, Mg disappears slowly
          createBubbles(liquid1, 5, 2000);
          strip1.style.transition = "opacity 5s";
          strip1.style.opacity = "0";

          // Beaker 2 (2M): Fast bubbles, Mg disappears fast
          createBubbles(liquid2, 20, 500);
          strip2.style.transition = "opacity 2s";
          strip2.style.opacity = "0";

          res.style.opacity = "1";
        }, 600);
      }

      function resetExp1() {
        const strip1 = document.getElementById("mg-strip-1");
        const strip2 = document.getElementById("mg-strip-2");
        const res = document.getElementById("exp1-result");

        strip1.style.transition = "top 0.5s";
        strip2.style.transition = "top 0.5s";
        strip1.style.top = "-10px";
        strip2.style.top = "-10px";
        strip1.style.opacity = "1";
        strip2.style.opacity = "1";

        // Remove bubbles
        document
          .querySelectorAll(".bubble-particle")
          .forEach((b) => b.remove());
        res.style.opacity = "0";
      }

      // --- Experiment 2: CaCO3 + HCl ---
      function startExp2() {
        const liquid3 = document.getElementById("liquid-3");
        const liquid4 = document.getElementById("liquid-4");
        const lump = document.getElementById("caco3-lump");
        const powder = document.getElementById("caco3-powder");
        const res = document.getElementById("exp2-result");

        // Drop
        lump.style.top = "60px";
        powder.style.top = "60px";

        setTimeout(() => {
          // Lump: Slow bubbles
          createBubbles(liquid3, 5, 1500);
          lump.style.transition = "opacity 6s, width 6s, height 6s";
          lump.style.width = "0px";
          lump.style.height = "0px";
          lump.style.opacity = "0";

          // Powder: Intense bubbles
          createBubbles(liquid4, 30, 300);
          powder.style.transition = "opacity 1.5s";
          powder.style.opacity = "0";

          res.style.opacity = "1";
        }, 600);
      }

      function resetExp2() {
        const lump = document.getElementById("caco3-lump");
        const powder = document.getElementById("caco3-powder");
        const res = document.getElementById("exp2-result");

        lump.style.transition = "none";
        lump.style.top = "-40px";
        lump.style.width = "40px";
        lump.style.height = "40px";
        lump.style.opacity = "1";

        powder.style.transition = "none";
        powder.style.top = "-30px";
        powder.style.opacity = "1";

        document
          .querySelectorAll(".bubble-particle")
          .forEach((b) => b.remove());
        res.style.opacity = "0";
      }

      // Utility: Create Bubbles
      function createBubbles(container, intensity, interval) {
        let count = 0;
        const maxBubbles = intensity * 10;

        const intervalId = setInterval(() => {
          if (count > maxBubbles) {
            clearInterval(intervalId);
            return;
          }
          const b = document.createElement("div");
          b.className = "bubble-particle";
          const size = Math.random() * 6 + 2;
          b.style.width = size + "px";
          b.style.height = size + "px";
          b.style.left = Math.random() * 80 + 10 + "%";
          b.style.animation = `bubble-rise ${Math.random() + 0.5}s linear forwards`;
          container.appendChild(b);
          count++;
        }, interval);
      }

      // ==========================================
      // 7. GAMIFIED QUIZ LOGIC (SECTION V)
      // ==========================================
      const quizData = [
        {
          q: "Yếu tố nào sau đây KHÔNG làm tăng tốc độ phản ứng?",
          opts: [
            "Tăng nhiệt độ",
            "Dùng chất xúc tác",
            "Tăng thể tích bình chứa (khí)",
            "Tăng diện tích bề mặt",
          ],
          a: 2, // Index of correct answer
          expl: "Tăng thể tích làm giảm áp suất => giảm nồng độ khí => giảm tốc độ.",
        },
        {
          q: "Để hầm xương nhanh nhừ, người ta thường dùng nồi áp suất. Yếu tố nào được áp dụng?",
          opts: [
            "Nồng độ",
            "Diện tích bề mặt",
            "Nhiệt độ & Áp suất",
            "Chất xúc tác",
          ],
          a: 2,
          expl: "Nồi áp suất làm tăng áp suất hơi nước, dẫn đến nhiệt độ sôi của nước tăng (có thể >100°C).",
        },
        {
          q: "Enzyme trong cơ thể người đóng vai trò là gì?",
          opts: [
            "Chất tham gia",
            "Chất xúc tác sinh học",
            "Sản phẩm",
            "Chất ức chế",
          ],
          a: 1,
          expl: "Enzyme là chất xúc tác sinh học giúp các phản ứng trong cơ thể xảy ra nhanh ở nhiệt độ thường.",
        },
        {
          q: "Tại sao than tổ ong lại có các lỗ rỗng?",
          opts: [
            "Để nhẹ hơn",
            "Để tăng diện tích tiếp xúc với O2",
            "Để đẹp hơn",
            "Để giảm khói",
          ],
          a: 1,
          expl: "Các lỗ giúp tăng diện tích tiếp xúc giữa carbon và oxygen, giúp than cháy đều và hiệu quả.",
        },
        {
          q: "Hằng số tốc độ k phụ thuộc vào yếu tố nào?",
          opts: [
            "Nồng độ",
            "Nhiệt độ & Bản chất chất phản ứng",
            "Áp suất",
            "Thời gian",
          ],
          a: 1,
          expl: "k không đổi khi nồng độ thay đổi, chỉ đổi khi nhiệt độ đổi hoặc có xúc tác.",
        },
      ];

      let currentQ = 0;
      let score = 0;

      function startQuiz() {
        currentQ = 0;
        score = 0;
        updateScore();
        loadQuestion();
      }

      function loadQuestion() {
        const container = document.getElementById("quiz-container");
        const data = quizData[currentQ];

        container.innerHTML = `
                <h3 class="text-2xl font-bold mb-6 text-slate-800 dark:text-white animate-fade-in">Câu ${currentQ + 1}: ${data.q}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${data.opts
                      .map(
                        (opt, index) => `
                        <button onclick="checkAnswer(${index})" class="p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all text-left font-medium text-slate-700 dark:text-slate-300">
                            ${String.fromCharCode(65 + index)}. ${opt}
                        </button>
                    `,
                      )
                      .join("")}
                </div>
            `;

        // Update progress bar
        document.getElementById("quiz-progress").style.width =
          `${(currentQ / quizData.length) * 100}%`;
      }

      function checkAnswer(userChoice) {
        const data = quizData[currentQ];
        const feedback = document.getElementById("quiz-feedback");
        const icon = document.getElementById("feedback-icon");
        const title = document.getElementById("feedback-text");
        const desc = document.getElementById("feedback-desc");

        feedback.classList.remove("hidden");
        feedback.classList.add("flex");

        if (userChoice === data.a) {
          // Correct
          score += 10;
          updateScore();
          icon.innerHTML = "🎉";
          title.innerText = "Chính xác!";
          title.className = "text-2xl font-bold mb-2 text-green-500";
          // Play sound effect (optional/simulated visual)
        } else {
          // Wrong
          icon.innerHTML = "😢";
          title.innerText = "Chưa đúng rồi!";
          title.className = "text-2xl font-bold mb-2 text-red-500";
        }
        desc.innerText = data.expl;
      }

      function nextQuestion() {
        document.getElementById("quiz-feedback").classList.add("hidden");
        document.getElementById("quiz-feedback").classList.remove("flex");

        currentQ++;
        if (currentQ < quizData.length) {
          loadQuestion();
        } else {
          // End Quiz
          const container = document.getElementById("quiz-container");
          let message = "";
          if (score === 50) message = "Xuất sắc! Bạn là chuyên gia hóa học! 🏆";
          else if (score >= 30)
            message = "Làm tốt lắm! Ôn lại chút nữa là tuyệt vời. 👍";
          else message = "Hãy xem lại lý thuyết và thử lại nhé! 💪";

          container.innerHTML = `
                    <div class="text-center animate-bounce-slow">
                        <div class="text-6xl mb-4">🎓</div>
                        <h3 class="text-3xl font-bold mb-4 dark:text-white">Hoàn thành!</h3>
                        <p class="text-xl text-blue-500 font-bold mb-6">Điểm số: ${score}/50</p>
                        <p class="text-slate-600 dark:text-slate-300 mb-8">${message}</p>
                        <button onclick="startQuiz()" class="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg">Làm lại</button>
                    </div>
                `;
          document.getElementById("quiz-progress").style.width = "100%";
        }
      }

      function updateScore() {
        const el = document.getElementById("quiz-score");
        // Counter animation
        let currentVal = parseInt(el.innerText);
        const step = score > currentVal ? 1 : -1;

        if (currentVal !== score) {
          el.innerText = score;
        }
      }