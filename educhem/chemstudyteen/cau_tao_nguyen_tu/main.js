// ==========================================
// 1. DARK MODE & UI LOGIC (Chạy ngay lập tức để tránh chớp màn hình)
// ==========================================
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    if (html.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  });
}

// ==========================================
// HÀM TOÀN CỤC (CẤU HÌNH ELECTRON & QUIZ)
// (Để ngoài DOMContentLoaded để HTML có thể gọi qua onclick)
// ==========================================
let electrons = 0;
const orbitData = {};

window.addElectron = function (orbName) {
  const max = orbName.includes("s") ? 2 : 6;
  if (!orbitData[orbName]) orbitData[orbName] = 0;

  if (orbitData[orbName] < max) {
    if (electrons < 18) {
      orbitData[orbName]++;
      electrons++;
      updateConfigUI();
    } else {
      alert("Đã đạt giới hạn mô phỏng (18e)!");
    }
  } else {
    alert(`Phân lớp ${orbName} đã bão hòa (Tối đa ${max}e)!`);
  }
};

window.resetConfig = function () {
  electrons = 0;
  for (let key in orbitData) delete orbitData[key];
  updateConfigUI();
};

function updateConfigUI() {
  const totalEl = document.getElementById("total-e-config");
  if (!totalEl) return; // Bảo vệ nếu không có DOM

  totalEl.innerText = electrons;

  ["1s", "2s", "2p", "3s"].forEach((orb) => {
    const count = orbitData[orb] || 0;
    const container = document.getElementById(`vis-${orb}`);
    if (container) {
      container.innerHTML = "";
      for (let i = 0; i < count; i++) {
        const arrow = document.createElement("div");
        arrow.className = "text-xs font-bold text-blue-600";
        arrow.innerText = i % 2 === 0 ? "↑" : "↓";
        container.appendChild(arrow);
      }
    }
  });

  let str = "";
  if (orbitData["1s"]) str += `1s<sup>${orbitData["1s"]}</sup> `;
  if (orbitData["2s"]) str += `2s<sup>${orbitData["2s"]}</sup> `;
  if (orbitData["2p"]) str += `2p<sup>${orbitData["2p"]}</sup> `;
  if (orbitData["3s"]) str += `3s<sup>${orbitData["3s"]}</sup> `;

  document.getElementById("config-result").innerHTML = str || "1s⁰";
}

window.checkAns = function (btn, val) {
  if (val === 10000) {
    btn.classList.add("correct");
    alert("Chính xác! Tỷ lệ là 1/10.000.");
  } else {
    btn.classList.add("wrong");
    setTimeout(() => btn.classList.remove("wrong"), 500);
  }
};

// ==========================================
// CÁC MODULE MÔ PHỎNG (Chỉ chạy khi DOM đã load xong và tồn tại ID)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // --- 2. ATOM BUILDER SIMULATION (CANVAS 1) ---
  class AtomSimulator {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext("2d");
      this.pInput = document.getElementById("range-p");
      this.nInput = document.getElementById("range-n");
      this.eInput = document.getElementById("range-e");

      this.p = 1;
      this.n = 0;
      this.e = 1;

      if (this.pInput)
        this.pInput.addEventListener("input", (e) => {
          this.p = parseInt(e.target.value);
          this.update();
        });
      if (this.nInput)
        this.nInput.addEventListener("input", (e) => {
          this.n = parseInt(e.target.value);
          this.update();
        });
      if (this.eInput)
        this.eInput.addEventListener("input", (e) => {
          this.e = parseInt(e.target.value);
          this.update();
        });

      this.animate();
    }

    update() {
      if (document.getElementById("val-p"))
        document.getElementById("val-p").innerText = this.p;
      if (document.getElementById("val-n"))
        document.getElementById("val-n").innerText = this.n;
      if (document.getElementById("val-e"))
        document.getElementById("val-e").innerText = this.e;

      const charge = this.p - this.e;
      const mass = this.p + this.n;

      const chargeEl = document.getElementById("atom-charge");
      if (chargeEl) {
        chargeEl.innerText = charge > 0 ? `+${charge}` : charge;
        chargeEl.className = `text-xl font-bold font-mono ${charge > 0 ? "text-red-500" : charge < 0 ? "text-blue-500" : "text-green-500"}`;
      }
      if (document.getElementById("atom-mass"))
        document.getElementById("atom-mass").innerText = mass;
    }

    drawNucleus(centerX, centerY) {
      const totalParticles = this.p + this.n;
      if (totalParticles === 0) return;
      const radius = 6 + Math.sqrt(totalParticles) * 2;

      for (let i = 0; i < this.p; i++) {
        const angle = (i / totalParticles) * Math.PI * 2 * 3;
        const r = Math.random() * radius * 0.8;
        this.drawParticle(
          centerX + Math.cos(angle) * r,
          centerY + Math.sin(angle) * r,
          "#ef4444",
          true,
        );
      }
      for (let i = 0; i < this.n; i++) {
        const angle = ((i + this.p) / totalParticles) * Math.PI * 2 * 3;
        const r = Math.random() * radius * 0.8;
        this.drawParticle(
          centerX + Math.cos(angle) * r,
          centerY + Math.sin(angle) * r,
          "#64748b",
          false,
        );
      }
    }

    drawParticle(x, y, color, isProton) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, 6, 0, Math.PI * 2);
      this.ctx.fillStyle = color;
      this.ctx.fill();
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
      if (isProton) {
        this.ctx.fillStyle = "white";
        this.ctx.font = "8px Arial";
        this.ctx.fillText("+", x - 2.5, y + 3);
      }
    }

    drawElectrons(centerX, centerY, time) {
      const kShell = Math.min(this.e, 2);
      if (kShell > 0) this.drawShell(centerX, centerY, 60, kShell, time * 2);

      const lShell = Math.max(0, Math.min(this.e - 2, 8));
      if (lShell > 0) this.drawShell(centerX, centerY, 100, lShell, time * 1.5);
    }

    drawShell(centerX, centerY, radius, count, timeOffset) {
      this.ctx.beginPath();
      this.ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      this.ctx.stroke();

      for (let i = 0; i < count; i++) {
        const angle = timeOffset + i * ((Math.PI * 2) / count);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        this.ctx.beginPath();
        this.ctx.arc(x, y, 4, 0, Math.PI * 2);
        this.ctx.fillStyle = "#3b82f6";
        this.ctx.fill();
        this.ctx.shadowBlur = 5;
        this.ctx.shadowColor = "#3b82f6";
      }
    }

    animate() {
      const time = Date.now() / 1000;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.shadowBlur = 0; // Reset shadow
      this.drawNucleus(this.canvas.width / 2, this.canvas.height / 2);
      this.drawElectrons(this.canvas.width / 2, this.canvas.height / 2, time);
      requestAnimationFrame(() => this.animate());
    }
  }
  if (document.getElementById("atomCanvas")) new AtomSimulator("atomCanvas");

  // --- 3. RUTHERFORD SCATTERING (CLASS VERSION) ---
  class RutherfordSim {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext("2d");
      this.particles = [];
      this.btn = document.getElementById("btn-fire-alpha");
      if (this.btn)
        this.btn.addEventListener("click", () => this.fireParticles());
      this.nucleusX = 300;
      this.nucleusY = 100;
      this.animate();
    }
    fireParticles() {
      for (let i = 0; i < 20; i++) {
        this.particles.push({
          x: 0,
          y: 50 + Math.random() * 100,
          vx: 3 + Math.random() * 2,
          vy: 0,
          deflected: false,
        });
      }
    }
    animate() {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.ctx.beginPath();
      this.ctx.arc(this.nucleusX, this.nucleusY, 8, 0, Math.PI * 2);
      this.ctx.fillStyle = "#ef4444";
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = "red";
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      for (let i = this.particles.length - 1; i >= 0; i--) {
        let p = this.particles[i];
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        this.ctx.fillStyle = "#fbbf24";
        this.ctx.fill();

        if (!p.deflected) {
          const dx = p.x - this.nucleusX,
            dy = p.y - this.nucleusY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 30) {
            if (Math.abs(dy) < 5) {
              p.vx = -p.vx;
              p.vy = (Math.random() - 0.5) * 4;
            } else {
              p.vy += dy > 0 ? 0.5 : -0.5;
            }
            p.deflected = true;
          }
        }
        p.x += p.vx;
        p.y += p.vy;

        if (
          p.x > this.canvas.width ||
          p.x < 0 ||
          p.y < 0 ||
          p.y > this.canvas.height
        ) {
          this.particles.splice(i, 1);
        }
      }
      requestAnimationFrame(() => this.animate());
    }
  }
  if (document.getElementById("rutherfordCanvas1"))
    new RutherfordSim("rutherfordCanvas1");

  // --- 4. ISOTOPE LOGIC ---
  const isoSlider = document.getElementById("isotope-slider");
  if (isoSlider) {
    const p1 = document.getElementById("iso-1-percent"),
      p2 = document.getElementById("iso-2-percent");
    const massDisplay = document.getElementById("avg-mass-display");
    const vis1 = document.getElementById("visual-iso-1"),
      vis2 = document.getElementById("visual-iso-2");

    isoSlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      p1.innerText = val;
      p2.innerText = 100 - val;
      const avg = (35 * val + 37 * (100 - val)) / 100;
      massDisplay.innerText = avg.toFixed(2);
      vis1.style.transform = `scale(${0.5 + val / 200})`;
      vis2.style.transform = `scale(${0.5 + (100 - val) / 200})`;
    });
  }

  // --- 5. MÔ PHỎNG NGUYÊN TỬ (IIFE REFACTORED) ---
  const atomCanvas2 = document.getElementById("atomSimCanvas");
  if (atomCanvas2) {
    const ctxAtom = atomCanvas2.getContext("2d");
    const atomState = { p: 1, n: 0, e: 1, angle: 0 };
    const elements = [
      "n",
      "H",
      "He",
      "Li",
      "Be",
      "B",
      "C",
      "N",
      "O",
      "F",
      "Ne",
    ];
    const elementNames = [
      "Neutronium",
      "Hydrogen",
      "Helium",
      "Lithium",
      "Beryllium",
      "Boron",
      "Carbon",
      "Nitrogen",
      "Oxygen",
      "Fluorine",
      "Neon",
    ];

    function resizeAtomCanvas() {
      if (atomCanvas2.parentElement) {
        atomCanvas2.width = atomCanvas2.parentElement.clientWidth;
        atomCanvas2.height = atomCanvas2.parentElement.clientHeight;
      }
    }
    window.addEventListener("resize", resizeAtomCanvas);
    resizeAtomCanvas();

    function drawAtom2() {
      ctxAtom.clearRect(0, 0, atomCanvas2.width, atomCanvas2.height);
      const cx = atomCanvas2.width / 2,
        cy = atomCanvas2.height / 2;

      for (let i = 0; i < atomState.n; i++) {
        const angle =
          (i / Math.max(1, atomState.n)) * Math.PI * 2 + atomState.angle * 0.5;
        const r = Math.min(20, atomState.n * 2);
        ctxAtom.beginPath();
        ctxAtom.arc(
          cx + Math.cos(angle) * r,
          cy + Math.sin(angle) * r,
          8,
          0,
          Math.PI * 2,
        );
        ctxAtom.fillStyle = "#64748b";
        ctxAtom.fill();
        ctxAtom.strokeStyle = "white";
        ctxAtom.stroke();
      }

      for (let i = 0; i < atomState.p; i++) {
        const angle =
          (i / Math.max(1, atomState.p)) * Math.PI * 2 -
          atomState.angle * 0.5 +
          1;
        const r = Math.min(20, atomState.p * 2);
        const x = cx + Math.cos(angle) * r,
          y = cy + Math.sin(angle) * r;
        ctxAtom.beginPath();
        ctxAtom.arc(x, y, 9, 0, Math.PI * 2);
        ctxAtom.fillStyle = "#ef4444";
        ctxAtom.fill();
        ctxAtom.strokeStyle = "white";
        ctxAtom.stroke();
        ctxAtom.fillStyle = "white";
        ctxAtom.font = "10px Arial";
        ctxAtom.fillText("+", x - 3, y + 3);
      }

      let eCount = atomState.e,
        shellIndex = 1;
      while (eCount > 0) {
        const capacity = shellIndex === 1 ? 2 : 8;
        const currentE = Math.min(eCount, capacity);
        const radius = 60 * shellIndex;

        ctxAtom.beginPath();
        ctxAtom.arc(cx, cy, radius, 0, Math.PI * 2);
        ctxAtom.strokeStyle = "rgba(59, 130, 246, 0.3)";
        ctxAtom.lineWidth = 1;
        ctxAtom.stroke();

        for (let j = 0; j < currentE; j++) {
          const eAngle =
            (j / currentE) * Math.PI * 2 +
            atomState.angle *
              (0.02 / shellIndex) *
              (shellIndex % 2 === 0 ? 1 : -1);
          ctxAtom.beginPath();
          ctxAtom.arc(
            cx + Math.cos(eAngle) * radius,
            cy + Math.sin(eAngle) * radius,
            5,
            0,
            Math.PI * 2,
          );
          ctxAtom.fillStyle = "#3b82f6";
          ctxAtom.shadowBlur = 5;
          ctxAtom.shadowColor = "#3b82f6";
          ctxAtom.fill();
        }
        ctxAtom.shadowBlur = 0;
        eCount -= currentE;
        shellIndex++;
      }
      atomState.angle += 0.05;
      requestAnimationFrame(drawAtom2);
    }
    drawAtom2();

    function updateAtomUI() {
      atomState.p = parseInt(document.getElementById("input-p").value) || 0;
      atomState.n = parseInt(document.getElementById("input-n").value) || 0;
      atomState.e = parseInt(document.getElementById("input-e").value) || 0;

      document.getElementById("disp-p").innerText = atomState.p;
      document.getElementById("disp-n").innerText = atomState.n;
      document.getElementById("disp-e").innerText = atomState.e;

      const charge = atomState.p - atomState.e;
      const chargeEl = document.getElementById("atom-net-charge");
      chargeEl.innerText = charge > 0 ? `+${charge}` : charge;
      chargeEl.className = `text-lg font-mono font-bold ${charge === 0 ? "text-green-500" : charge > 0 ? "text-red-500" : "text-blue-500"}`;

      document.getElementById("atom-mass-num").innerText =
        atomState.p + atomState.n;
      document.getElementById("element-symbol").innerText =
        elements[atomState.p] || "?";
      document.getElementById("element-name").innerText =
        elementNames[atomState.p] || "Unknown";

      const ratio = atomState.p > 0 ? atomState.n / atomState.p : 0;
      const stable =
        (atomState.p === 1 && atomState.n === 0) ||
        (ratio >= 1 && ratio <= 1.5);
      const alertBox = document.getElementById("stability-alert");
      if (alertBox)
        !stable && atomState.p > 1
          ? alertBox.classList.remove("hidden")
          : alertBox.classList.add("hidden");
    }

    ["input-p", "input-n", "input-e"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", updateAtomUI);
    });
  }

  // --- 6. THOMSON EXPERIMENT ---
  const thomsonCanvas = document.getElementById("thomsonCanvas");
  if (thomsonCanvas) {
    const ctxThomson = thomsonCanvas.getContext("2d");
    let thomsonOn = false;
    let particlesT = [];

    function resizeThomson() {
      if (thomsonCanvas.parentElement) {
        thomsonCanvas.width = thomsonCanvas.parentElement.clientWidth;
        thomsonCanvas.height = thomsonCanvas.parentElement.clientHeight;
      }
    }
    window.addEventListener("resize", resizeThomson);
    resizeThomson();

    const switchT = document.getElementById("thomson-switch");
    if (switchT) {
      switchT.addEventListener("change", (e) => {
        thomsonOn = e.target.checked;
        document.getElementById("thomson-status").innerText = thomsonOn
          ? "Đang bật"
          : "Tắt";
      });
    }

    function drawThomson() {
      ctxThomson.clearRect(0, 0, thomsonCanvas.width, thomsonCanvas.height);
      ctxThomson.fillStyle = "rgba(255,255,255,0.05)";
      ctxThomson.fillRect(
        0,
        50,
        thomsonCanvas.width,
        thomsonCanvas.height - 100,
      );

      if (Math.random() < 0.5)
        particlesT.push({
          x: 0,
          y: thomsonCanvas.height / 2,
          vx: 5 + Math.random(),
          vy: 0,
        });

      ctxThomson.fillStyle = "#4ade80";
      // Đổi sang vòng lặp ngược để tránh lỗi Splice
      for (let i = particlesT.length - 1; i >= 0; i--) {
        let p = particlesT[i];
        p.x += p.vx;
        if (
          thomsonOn &&
          p.x > thomsonCanvas.width * 0.2 &&
          p.x < thomsonCanvas.width * 0.8
        )
          p.vy -= 0.15;
        p.y += p.vy;

        ctxThomson.beginPath();
        ctxThomson.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctxThomson.fill();

        if (p.x > thomsonCanvas.width || p.y < 0 || p.y > thomsonCanvas.height)
          particlesT.splice(i, 1);
      }
      requestAnimationFrame(drawThomson);
    }
    drawThomson();
  }

  // --- 7. RUTHERFORD EXPERIMENT (OPTIMIZED) ---
  // LƯU Ý: Dùng ID rutherfordCanvas2 nếu bạn xài chung với Class ở trên.
  const ruthCanvas =
    document.getElementById("rutherfordCanvas2") ||
    document.getElementById("rutherfordCanvas");
  if (ruthCanvas && ruthCanvas.id !== "rutherfordCanvas1") {
    const ctxRuth = ruthCanvas.getContext("2d");
    let alphaParticles = [];

    function resizeRuth() {
      if (ruthCanvas.parentElement) {
        ruthCanvas.width = ruthCanvas.parentElement.clientWidth;
        ruthCanvas.height = ruthCanvas.parentElement.clientHeight;
      }
    }
    window.addEventListener("resize", resizeRuth);
    resizeRuth();

    const btnFire = document.getElementById("btn-rutherford-fire");
    if (btnFire) {
      btnFire.addEventListener("click", () => {
        for (let i = 0; i < 25; i++) {
          setTimeout(() => {
            alphaParticles.push({
              x: 0,
              y: ruthCanvas.height / 2 + (Math.random() - 0.5) * 120,
              vx: 6,
              vy: 0,
              scattered: false,
            });
          }, i * 40);
        }
      });
    }

    function drawRutherford() {
      ctxRuth.fillStyle = "rgba(15, 23, 42, 0.4)";
      ctxRuth.fillRect(0, 0, ruthCanvas.width, ruthCanvas.height);

      const nucleusX = ruthCanvas.width * 0.7,
        nucleusY = ruthCanvas.height / 2;
      const visualRadius = 60,
        coreRadius = 12;

      ctxRuth.beginPath();
      ctxRuth.arc(nucleusX, nucleusY, visualRadius, 0, Math.PI * 2);
      ctxRuth.fillStyle = "rgba(251, 191, 36, 0.15)";
      ctxRuth.fill();

      ctxRuth.beginPath();
      ctxRuth.arc(nucleusX, nucleusY, coreRadius, 0, Math.PI * 2);
      ctxRuth.fillStyle = "#fbbf24";
      ctxRuth.shadowBlur = 15;
      ctxRuth.shadowColor = "#fbbf24";
      ctxRuth.fill();
      ctxRuth.shadowBlur = 0;

      // Lặp ngược an toàn
      for (let i = alphaParticles.length - 1; i >= 0; i--) {
        const p = alphaParticles[i];
        p.x += p.vx;
        p.y += p.vy;

        const dx = p.x - nucleusX,
          dy = p.y - nucleusY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < coreRadius) {
          p.vx = -Math.abs(p.vx) * 0.8;
          p.vy = (dy / dist) * 5;
          p.scattered = true;
          p.x = nucleusX + (dx / dist) * (coreRadius + 1);
        } else if (dist < visualRadius && !p.scattered) {
          const force = (1 - dist / visualRadius) * 0.8;
          p.vy += (dy / dist) * force;
          if (p.x > nucleusX - 10) p.vx *= 0.98;
        }

        ctxRuth.fillStyle = "#ffffff";
        ctxRuth.beginPath();
        ctxRuth.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctxRuth.fill();

        if (
          p.x > ruthCanvas.width ||
          p.x < -50 ||
          p.y < -50 ||
          p.y > ruthCanvas.height + 50
        ) {
          alphaParticles.splice(i, 1);
        }
      }
      requestAnimationFrame(drawRutherford);
    }
    drawRutherford();
  }

  // --- 8. MILLIKAN GAME LOGIC ---
  const millikanSlider = document.getElementById("millikan-slider");
  if (millikanSlider) {
    const oilDrop = document.getElementById("oil-drop");
    const feedback = document.getElementById("millikan-feedback");
    const forceE = document.getElementById("force-electric");
    const voltsDisp = document.getElementById("millikan-volts");

    let dropY = 10,
      dropVelocity = 0;
    const gravity = 0.3,
      targetVoltage = 50;

    function updateMillikan() {
      const voltage = parseInt(millikanSlider.value);
      if (voltsDisp) voltsDisp.innerText = voltage + " V";

      const electricForce = voltage * (gravity / targetVoltage);
      dropVelocity += gravity - electricForce;
      dropVelocity *= 0.95;
      dropY += dropVelocity;

      if (dropY > 90) {
        dropY = 90;
        dropVelocity = 0;
      }
      if (dropY < 0) {
        dropY = 0;
        dropVelocity = 0;
      }

      if (oilDrop) oilDrop.style.top = dropY + "%";
      if (forceE) forceE.style.height = Math.min(50, voltage / 2) + "px";

      if (feedback && oilDrop) {
        if (Math.abs(dropVelocity) < 0.1 && dropY > 10 && dropY < 90) {
          feedback.innerText = "Tuyệt vời! Giọt dầu đang cân bằng.";
          feedback.className =
            "mt-3 text-center text-sm font-bold text-green-500 h-6";
          oilDrop.className =
            "w-4 h-4 bg-green-400 rounded-full shadow-sm absolute transition-all duration-75 ease-linear animate-pulse";
        } else if (dropVelocity > 0.5) {
          feedback.innerText = "Điện thế thấp, giọt dầu đang rơi!";
          feedback.className =
            "mt-3 text-center text-sm font-bold text-slate-500 h-6";
          oilDrop.className =
            "w-4 h-4 bg-yellow-400 rounded-full shadow-sm absolute transition-all duration-75 ease-linear";
        } else if (dropVelocity < -0.5) {
          feedback.innerText = "Điện thế quá cao, giọt dầu bay lên!";
          feedback.className =
            "mt-3 text-center text-sm font-bold text-slate-500 h-6";
          oilDrop.className =
            "w-4 h-4 bg-yellow-400 rounded-full shadow-sm absolute transition-all duration-75 ease-linear";
        }
      }
      requestAnimationFrame(updateMillikan);
    }
    updateMillikan();
  }

  // --- 9. ZOOM MÔ PHỎNG QUY MÔ ---
  const zoomSlider = document.getElementById("zoom-slider");
  if (zoomSlider) {
    const stadiumWrap = document.getElementById("stadium-wrap");
    const nucleusBall = document.getElementById("nucleus-ball");
    const zoomVal = document.getElementById("zoom-val");
    const scaleDesc = document.getElementById("scale-desc");

    zoomSlider.addEventListener("input", (e) => {
      const val = e.target.value;
      if (zoomVal) zoomVal.innerText = val + "x";
      if (stadiumWrap) stadiumWrap.style.transform = `scale(${1 + val / 100})`;

      if (val > 5000) {
        if (scaleDesc) {
          scaleDesc.innerText = "Hạt nhân (Quả bóng Tennis)";
          scaleDesc.classList.replace("text-slate-300", "text-red-400");
        }
        if (nucleusBall) nucleusBall.style.transform = "scale(20)";
      } else {
        if (scaleDesc) {
          scaleDesc.innerText = "Nguyên tử (Sân vận động)";
          scaleDesc.classList.replace("text-red-400", "text-slate-300");
        }
        if (nucleusBall) nucleusBall.style.transform = "scale(1)";
      }
    });
  }

  // --- 10. DRAG AND DROP ---
  const dropZone = document.getElementById("drop-zone");
  if (dropZone) {
    document.querySelectorAll('[draggable="true"]').forEach((item) => {
      item.addEventListener("dragstart", (e) =>
        e.dataTransfer.setData("type", e.target.id),
      );
    });

    dropZone.addEventListener("dragover", (e) => e.preventDefault());
    dropZone.addEventListener("drop", (e) => {
      const type = e.dataTransfer.getData("type");
      if (type === "drag-nucleus") {
        dropZone.innerHTML = `
            <div class="text-red-500 font-bold animate-bounce">D ≈ 10¹⁴ g/cm³</div>
            <p class="text-xs text-slate-500">Mật độ cực lớn! 1 thìa cafe hạt nhân nặng hàng tỷ tấn.</p>
          `;
      } else {
        dropZone.innerHTML = `
            <div class="text-blue-500 font-bold">D ≈ 0.00...1 g/cm³</div>
            <p class="text-xs text-slate-500">Vùng không gian rỗng, electron chiếm diện tích nhưng khối lượng không đáng kể.</p>
          `;
      }
    });
  }

  // --- 11. QUAY ELECTRON ORBIT ---
  const orbit = document.querySelector(".electron-orbit");
  if (orbit) {
    let angle = 0;
    setInterval(() => {
      angle += 1;
      orbit.style.transform = `rotate(${angle}deg)`;
    }, 40);
  }
});
