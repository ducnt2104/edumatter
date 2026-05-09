    

// 1. Tự động tạo các đốm mốc khi vừa mở trang
function initMold() {
  const container = document.getElementById('mold-container');
  if (!container) return;
  
  container.innerHTML = ''; // Xóa sạch trước khi tạo
  const colors = ['#3d4a1e', '#2d3319', '#5c6341', '#a1a1aa'];

  for (let i = 0; i < 25; i++) {
    const spot = document.createElement('div');
    spot.className = 'mold-spot';
    
    const size = Math.random() * 40 + 20; // Kích thước từ 20px - 60px
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const color = colors[Math.floor(Math.random() * colors.length)];

    spot.style.width = `${size}px`;
    spot.style.height = `${size}px`;
    spot.style.left = `${x}%`;
    spot.style.top = `${y}%`;
    spot.style.backgroundColor = color;
    
    container.appendChild(spot);
  }
}

// 2. Hàm xử lý khi kéo thanh trượt
function runMoldSimulation(val) {
  const ratio = val / 100;
  const spots = document.querySelectorAll('.mold-spot');
  const breadFlesh = document.getElementById('bread-flesh');
  const moldText = document.getElementById('mold-text');

  // Cho các đốm mốc to dần lên
  spots.forEach((spot, index) => {
    // Tạo độ trễ ngẫu nhiên cho từng đốm để trông tự nhiên hơn
    const delay = index * 0.05;
    const scale = Math.max(0, ratio * 1.5); 
    spot.style.transform = `scale(${scale})`;
  });

  // Đổi màu ruột bánh mì sang xám xanh
  breadFlesh.style.filter = `brightness(${100 - ratio * 40}%) grayscale(${ratio * 50}%) sepia(${ratio * 20}%)`;

  // Cập nhật văn bản
  if (val < 10) {
    moldText.innerText = "Ngày 1: Bánh mì thơm ngon!";
    moldText.style.color = "#16a34a";
  } else if (val < 50) {
    moldText.innerText = "Ngày 3: Bắt đầu xuất hiện các bào tử nấm...";
    moldText.style.color = "#ca8a04";
  } else if (val < 85) {
    moldText.innerText = "Ngày 5: Nấm mốc lan rộng, có mùi hôi!";
    moldText.style.color = "#ea580c";
  } else {
    moldText.innerText = "Ngày 7: Hỏng hoàn toàn! Tuyệt đối không ăn.";
    moldText.style.color = "#be123c";
  }
}

// Chạy khởi tạo ngay khi load trang
document.addEventListener('DOMContentLoaded', initMold);

function setPyramid(level) {
    const display = document.getElementById('pyramid-display');
    const contents = [
        "", // Index 0 bỏ qua
        "🍞 Nhóm Lương thực: Cung cấp Tinh bột (Năng lượng chính). Nên ăn đủ.",
        "🥦 Nhóm Rau quả: Cung cấp Vitamin & Chất xơ. Nên ăn nhiều.",
        "🥩 Nhóm Đạm: Cung cấp Protein (Thịt, cá, trứng, sữa). Ăn vừa phải."
    ];
    
    display.innerHTML = `<div class="animate-bounce mb-2">✨</div> ${contents[level]}`;
    display.style.color = level === 1 ? '#b45309' : (level === 2 ? '#15803d' : '#b91c1c');
}
  // 2. Logic Tháp Dinh Dưỡng
  const pyramidData = {
    1: { color: "#f97316", text: "Lương thực: Gạo, bánh mì, khoai... Ăn đủ để cung cấp năng lượng hoạt động.", label: "ĂN ĐỦ" },
    2: { color: "#22c55e", text: "Rau củ & Quả chín: Cung cấp vitamin, chất xơ và khoáng chất.", label: "ĂN NHIỀU" },
    3: { color: "#ef4444", text: "Thịt, cá, trứng, sữa: Cung cấp đạm (Protein) để xây dựng cơ bắp.", label: "ĂN VỪA PHẢI" },
    4: { color: "#eab308", text: "Dầu mỡ, đường, muối: Nhóm cần hạn chế tối đa.", label: "ĂN ÍT" }
  };

  function activatePyramid(id) {
    // Reset colors
    for (let i = 1; i <= 4; i++) {
      document.getElementById('p-' + i).style.backgroundColor = '';
      document.getElementById('p-' + i).style.color = '';
    }
    
    // Highlight selected
    const el = document.getElementById('p-' + id);
    const data = pyramidData[id];
    el.style.backgroundColor = data.color;
    el.style.color = "white";
    
    const desc = document.getElementById('pyramid-desc');
    desc.innerHTML = `<strong style="color:${data.color}">${data.label}:</strong> ${data.text}`;
    
    // Thêm hiệu ứng rung nhẹ khi chọn
    el.classList.add('scale-105');
    setTimeout(() => el.classList.remove('scale-105'), 200);
  }
      // 1. INIT & CONFIG
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });

      // 2. DARK MODE TOGGLE
      const themeToggle = document.getElementById("theme-toggle");
      const htmlElement = document.documentElement;

      // Check local storage or system preference
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }

      themeToggle.addEventListener("click", () => {
        htmlElement.classList.toggle("dark");
        if (htmlElement.classList.contains("dark")) {
          localStorage.theme = "dark";
        } else {
          localStorage.theme = "light";
        }
      });

      // 3. HEAT SIMULATION LOGIC
      function startHeatSim() {
        // Reset widths first
        document.getElementById("bar-iron").style.width = "0%";
        document.getElementById("bar-wood").style.width = "0%";
        document.getElementById("bar-plastic").style.width = "0%";

        setTimeout(() => {
          document.getElementById("bar-iron").style.width = "100%"; // Fast
          document.getElementById("bar-wood").style.width = "30%"; // Slow
          document.getElementById("bar-plastic").style.width = "50%"; // Medium

          // Update Temp Text Simulation
          updateTempText("temp-iron", 100, 2000);
          updateTempText("temp-plastic", 60, 6000);
          updateTempText("temp-wood", 40, 8000);
        }, 100);
      }

      function resetHeatSim() {
        document.getElementById("bar-iron").style.width = "0%";
        document.getElementById("bar-wood").style.width = "0%";
        document.getElementById("bar-plastic").style.width = "0%";
        document.getElementById("temp-iron").innerText = "25°C";
        document.getElementById("temp-wood").innerText = "25°C";
        document.getElementById("temp-plastic").innerText = "25°C";
      }

      function updateTempText(id, maxTemp, duration) {
        let el = document.getElementById(id);
        let start = 25;
        let stepTime = duration / (maxTemp - start);
        let current = start;
        let timer = setInterval(() => {
          current += 1;
          el.innerText = current + "°C";
          if (current >= maxTemp) clearInterval(timer);
        }, stepTime);
      }

     // Init AOS Library
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });

        /* --- SOLAR SIMULATION LOGIC --- */
        function updateSolarSim(val) {
            const percent = parseInt(val);
            const slider = document.getElementById('solar-slider');
            const sunLabel = document.getElementById('sun-percent');
            const sun = document.getElementById('sim-sun');
            const sky = document.getElementById('sky-bg');
            const energyFlow = document.getElementById('energy-flow');
            const bulb = document.getElementById('sim-bulb');
            const roomLight = document.getElementById('room-light');
            const voltage = document.getElementById('voltage-display');
            const panelCells = document.querySelectorAll('#panel-cells div');

            // 1. Update Labels
            sunLabel.innerText = `${percent}%`;

            // 2. Sky Logic (Night to Day)
            // Dark blue (#0f172a) to Light Blue (#38bdf8)
            const skyOpacity = percent / 100;
            if (percent < 20) {
                sky.style.background = `linear-gradient(to bottom, #0f172a, #1e293b)`; // Night
            } else if (percent < 60) {
                sky.style.background = `linear-gradient(to bottom, #3b82f6, #93c5fd)`; // Morning
            } else {
                sky.style.background = `linear-gradient(to bottom, #0ea5e9, #bae6fd)`; // Noon
            }

            // 3. Sun Position & Glow
            sun.style.opacity = percent < 10 ? 0 : 1;
            sun.style.transform = `translate(${percent * 3}px, ${-percent * 1.5}px)`; // Move arc
            sun.style.boxShadow = `0 0 ${percent}px ${percent/2}px rgba(250, 204, 21, 0.6)`;
            
            // 4. Panel Reaction
            panelCells.forEach(cell => {
                // Change from dark blue to brighter blue reflecting sun
                cell.style.backgroundColor = `rgba(30, 58, 138, ${0.5 + (percent/200)})`;
                if(percent > 50) cell.classList.add('shadow-[0_0_10px_rgba(59,130,246,0.5)]');
                else cell.classList.remove('shadow-[0_0_10px_rgba(59,130,246,0.5)]');
            });

            // 5. Energy Flow (Wire Animation)
            if (percent > 20) {
                energyFlow.classList.remove('opacity-0');
                energyFlow.classList.add('flow-line');
                // Speed up animation based on intensity (animation-duration gets lower)
                const speed = 2 - (percent / 60); 
                energyFlow.style.animationDuration = `${Math.max(0.2, speed)}s`;
            } else {
                energyFlow.classList.add('opacity-0');
                energyFlow.classList.remove('flow-line');
            }

            // 6. House Light
            if (percent > 30) {
                bulb.classList.remove('text-gray-500');
                bulb.classList.add('text-yellow-400');
                roomLight.style.opacity = (percent - 30) / 70; // 0 to 1
                // Voltage calculation simulation
                const volts = Math.floor((percent / 100) * 220);
                voltage.innerText = volts;
                voltage.style.color = volts > 180 ? '#22c55e' : (volts > 100 ? '#eab308' : '#ef4444');
            } else {
                bulb.classList.add('text-gray-500');
                bulb.classList.remove('text-yellow-400');
                roomLight.style.opacity = 0;
                voltage.innerText = 0;
            }
        }

        /* --- BIOGAS CYCLE ANIMATION LOOP --- */
        const steps = ['step-1', 'step-2', 'step-3'];
        let currentStep = 0;

        function animateBiogas() {
            // Reset all
            steps.forEach(id => {
                const el = document.getElementById(id);
                el.classList.remove('border-green-500', 'scale-105', 'bg-green-50', 'dark:bg-slate-700');
                if(id === 'step-3') {
                    document.getElementById('biogas-flame').classList.remove('opacity-100');
                    document.getElementById('biogas-flame').classList.add('opacity-50');
                }
            });

            // Activate current
            const activeEl = document.getElementById(steps[currentStep]);
            activeEl.classList.add('border-green-500', 'scale-105', 'bg-green-50', 'dark:bg-slate-700');
            
            // Special effect for final step
            if (steps[currentStep] === 'step-3') {
                const flame = document.getElementById('biogas-flame');
                flame.classList.remove('opacity-50');
                flame.classList.add('opacity-100');
            }

            // Loop
            currentStep = (currentStep + 1) % steps.length;
        }

        // Run animation loop every 2 seconds
        setInterval(animateBiogas, 2000);


      // 5. ACID EXPERIMENT SIMULATION
      function dropAcid() {
        const dropper = document.getElementById("dropper");
        const dropContainer = document.getElementById("drop-container");
        const reactionText = document.getElementById("reaction-text");

        // Animate Dropper
        dropper.style.transform = "translate(-50%, 20px)";
        setTimeout(() => (dropper.style.transform = "translate(-50%, 0)"), 300);

        // Create Drop
        const drop = document.createElement("div");
        drop.className =
          "absolute top-16 left-1/2 w-2 h-2 bg-yellow-200 rounded-full transform -translate-x-1/2 transition-all duration-700";
        dropContainer.appendChild(drop);

        // Animate Drop Falling
        setTimeout(() => {
          drop.style.top = "80%";
          drop.style.opacity = "0";
        }, 50);

        // Start Reaction after drop hits
        setTimeout(() => {
          drop.remove();
          createBubbles();
          reactionText.innerText =
            "Hiện tượng: Sủi bọt khí CO₂ (Canxi cacbonat tác dụng với Acid).";
          reactionText.className =
            "text-center text-green-600 font-bold animate-pulse";
        }, 750);
      }

      function createBubbles() {
        const container = document.getElementById("bubble-container");
        for (let i = 0; i < 15; i++) {
          const b = document.createElement("div");
          b.className = "bubble";
          b.style.left = Math.random() * 80 + 10 + "%";
          b.style.width = Math.random() * 8 + 4 + "px";
          b.style.height = b.style.width;
          b.style.animationDuration = Math.random() * 1 + 1 + "s";
          container.appendChild(b);

          // Auto remove
          setTimeout(() => b.remove(), 2000);
        }
      }

      function resetAcidSim() {
        document.getElementById("reaction-text").innerText =
          "Nhấn vào ống nghiệm để nhỏ Acid (HCl) vào đá vôi.";
        document.getElementById("reaction-text").className =
          "text-center text-gray-500 italic";
        document.getElementById("bubble-container").innerHTML = "";
      }

      // 6. FOOD MOLD SIMULATION
      function updateMold(val) {
        const layer = document.getElementById("mold-layer");
        const dayDisplay = document.getElementById("day-display");

        dayDisplay.innerText = "Ngày " + val;

        // Calculate opacity based on slider (1 -> 0, 10 -> 1)
        let opacity = (val - 1) / 9;
        layer.style.opacity = opacity;
      }

      // 7. QUIZ SYSTEM
      const questions = [
        {
          q: "Vật liệu nào sau đây dẫn điện tốt nhất?",
          options: ["Nhựa", "Gỗ", "Đồng", "Thủy tinh"],
          correct: 2,
        },
        {
          q: "Để sử dụng nhiên liệu gas hiệu quả, an toàn, chúng ta cần làm gì?",
          options: [
            "Mở van gas thật lớn",
            "Cung cấp đủ Oxy và khóa van khi không dùng",
            "Đun nấu liên tục không nghỉ",
            "Đặt bình gas nằm ngang",
          ],
          correct: 1,
        },
        {
          q: "Nguyên liệu chính để sản xuất xi măng là gì?",
          options: ["Đá vôi", "Cát", "Đất sét", "Quặng sắt"],
          correct: 0,
        },
        {
          q: "Thực phẩm nào sau đây chứa nhiều Protein nhất?",
          options: ["Gạo", "Rau cải", "Thịt bò", "Khoai lang"],
          correct: 2,
        },
        {
          q: "Mô hình 3R trong sử dụng vật liệu bao gồm:",
          options: [
            "Reduce, Reuse, Refuse",
            "Reduce, Reuse, Recycle",
            "Recycle, Repair, Reuse",
            "Read, Remember, React",
          ],
          correct: 1,
        },
      ];

      let currentQ = 0;
      let score = 0;

      function renderQuiz() {
        const qData = questions[currentQ];
        document.getElementById("question-number").innerText =
          `Câu ${currentQ + 1}/${questions.length}`;
        document.getElementById("question-text").innerText = qData.q;

        const optsContainer = document.getElementById("options-container");
        optsContainer.innerHTML = "";

        qData.options.forEach((opt, idx) => {
          const btn = document.createElement("button");
          btn.className =
            "w-full text-left p-4 rounded-lg bg-gray-50 dark:bg-slate-700 hover:bg-indigo-100 dark:hover:bg-slate-600 transition border border-transparent hover:border-primary";
          btn.innerText = opt;
          btn.onclick = () => checkAnswer(idx, btn);
          optsContainer.appendChild(btn);
        });

        document.getElementById("next-btn").classList.add("hidden");
        document.getElementById("feedback").classList.add("hidden");
      }

      function checkAnswer(selectedIdx, btnElement) {
        // Disable all buttons
        const buttons = document.getElementById("options-container").children;
        for (let b of buttons) b.disabled = true;

        const correctIdx = questions[currentQ].correct;
        const feedback = document.getElementById("feedback");
        feedback.classList.remove("hidden");

        if (selectedIdx === correctIdx) {
          btnElement.classList.add("bg-green-500", "text-white");
          feedback.innerHTML = '<i class="fas fa-check-circle"></i> Chính xác!';
          feedback.className =
            "mt-6 p-4 rounded-lg text-center font-bold bg-green-100 text-green-700 animate-pulse";
          score++;
          document.getElementById("score-display").innerText = `Điểm: ${score}`;
        } else {
          btnElement.classList.add("bg-red-500", "text-white");
          buttons[correctIdx].classList.add("bg-green-500", "text-white"); // Show correct one
          feedback.innerHTML =
            '<i class="fas fa-times-circle"></i> Sai rồi! Đáp án đúng là: ' +
            questions[currentQ].options[correctIdx];
          feedback.className =
            "mt-6 p-4 rounded-lg text-center font-bold bg-red-100 text-red-700 animate-pulse";
        }

        // Update Progress
        const progress = ((currentQ + 1) / questions.length) * 100;
        document.getElementById("progress-bar").style.width = progress + "%";

        document.getElementById("next-btn").classList.remove("hidden");
      }

      function nextQuestion() {
        currentQ++;
        if (currentQ < questions.length) {
          renderQuiz();
        } else {
          showResult();
        }
      }

      function showResult() {
        document.getElementById("quiz-container").classList.add("hidden");
        document.getElementById("result-container").classList.remove("hidden");
        document.getElementById("final-score").innerText =
          `${score}/${questions.length}`;
      }

      function resetQuiz() {
        currentQ = 0;
        score = 0;
        document.getElementById("score-display").innerText = "Điểm: 0";
        document.getElementById("progress-bar").style.width = "0%";
        document.getElementById("result-container").classList.add("hidden");
        document.getElementById("quiz-container").classList.remove("hidden");
        renderQuiz();
      }

      // Init Quiz
      renderQuiz();