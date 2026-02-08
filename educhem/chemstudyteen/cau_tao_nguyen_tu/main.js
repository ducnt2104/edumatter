// --- 1. DARK MODE & UI LOGIC ---
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
  if (html.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
});

// --- 2. ATOM BUILDER SIMULATION (CANVAS) ---
class AtomSimulator {
  constructor() {
    this.canvas = document.getElementById("atomCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.pInput = document.getElementById("range-p");
    this.nInput = document.getElementById("range-n");
    this.eInput = document.getElementById("range-e");

    // State
    this.p = 1;
    this.n = 0;
    this.e = 1;

    // Bind events
    this.pInput.addEventListener("input", (e) => {
      this.p = parseInt(e.target.value);
      this.update();
    });
    this.nInput.addEventListener("input", (e) => {
      this.n = parseInt(e.target.value);
      this.update();
    });
    this.eInput.addEventListener("input", (e) => {
      this.e = parseInt(e.target.value);
      this.update();
    });

    // Start loop
    this.animate();
  }

  update() {
    // Update text displays
    document.getElementById("val-p").innerText = this.p;
    document.getElementById("val-n").innerText = this.n;
    document.getElementById("val-e").innerText = this.e;

    // Calculations
    const charge = this.p - this.e;
    const mass = this.p + this.n;

    const chargeEl = document.getElementById("atom-charge");
    chargeEl.innerText = charge > 0 ? `+${charge}` : charge;
    chargeEl.className = `text-xl font-bold font-mono ${charge > 0 ? "text-red-500" : charge < 0 ? "text-blue-500" : "text-green-500"}`;

    document.getElementById("atom-mass").innerText = mass;
  }

  drawNucleus(centerX, centerY) {
    const totalParticles = this.p + this.n;
    if (totalParticles === 0) return;

    const radius = 6 + Math.sqrt(totalParticles) * 2;

    // Draw Protons (Red)
    for (let i = 0; i < this.p; i++) {
      const angle = (i / totalParticles) * Math.PI * 2 * 3; // Spread them
      const r = Math.random() * radius * 0.8;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;

      this.ctx.beginPath();
      this.ctx.arc(x, y, 6, 0, Math.PI * 2);
      this.ctx.fillStyle = "#ef4444";
      this.ctx.fill();
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
      // Symbol
      this.ctx.fillStyle = "white";
      this.ctx.font = "8px Arial";
      this.ctx.fillText("+", x - 2.5, y + 3);
    }

    // Draw Neutrons (Gray)
    for (let i = 0; i < this.n; i++) {
      const angle = ((i + this.p) / totalParticles) * Math.PI * 2 * 3;
      const r = Math.random() * radius * 0.8;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;

      this.ctx.beginPath();
      this.ctx.arc(x, y, 6, 0, Math.PI * 2);
      this.ctx.fillStyle = "#64748b";
      this.ctx.fill();
      this.ctx.strokeStyle = "white";
      this.ctx.stroke();
    }
  }

  drawElectrons(centerX, centerY, time) {
    // Shell 1 (K) - Max 2
    const kShell = Math.min(this.e, 2);
    if (kShell > 0) {
      this.ctx.beginPath();
      this.ctx.arc(centerX, centerY, 60, 0, Math.PI * 2);
      this.ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      this.ctx.stroke();

      for (let i = 0; i < kShell; i++) {
        const angle = time * 2 + i * Math.PI;
        const x = centerX + Math.cos(angle) * 60;
        const y = centerY + Math.sin(angle) * 60;
        this.drawElectron(x, y);
      }
    }

    // Shell 2 (L) - Max 8
    const lShell = Math.max(0, Math.min(this.e - 2, 8));
    if (lShell > 0) {
      this.ctx.beginPath();
      this.ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
      this.ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      this.ctx.stroke();

      for (let i = 0; i < lShell; i++) {
        const angle = time * 1.5 + i * ((Math.PI * 2) / lShell);
        const x = centerX + Math.cos(angle) * 100;
        const y = centerY + Math.sin(angle) * 100;
        this.drawElectron(x, y);
      }
    }
  }

  drawElectron(x, y) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, 4, 0, Math.PI * 2);
    this.ctx.fillStyle = "#3b82f6";
    this.ctx.fill();
    this.ctx.shadowBlur = 5;
    this.ctx.shadowColor = "#3b82f6";
  }

  animate() {
    const time = Date.now() / 1000;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2;

    this.drawNucleus(cx, cy);
    this.drawElectrons(cx, cy, time);

    requestAnimationFrame(() => this.animate());
  }
}

// --- 3. RUTHERFORD SCATTERING SIMULATION ---
class RutherfordSim {
  constructor() {
    this.canvas = document.getElementById("rutherfordCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.btn = document.getElementById("btn-fire-alpha");

    this.btn.addEventListener("click", () => this.fireParticles());
    this.nucleusX = 300;
    this.nucleusY = 100;

    this.animate();
  }

  fireParticles() {
    // Create 10 particles at random Y
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: 0,
        y: 50 + Math.random() * 100, // Spread vertically
        vx: 3 + Math.random() * 2,
        vy: 0,
        deflected: false,
      });
    }
  }

  animate() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Trail effect
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw Gold Nucleus
    this.ctx.beginPath();
    this.ctx.arc(this.nucleusX, this.nucleusY, 8, 0, Math.PI * 2);
    this.ctx.fillStyle = "#ef4444";
    this.ctx.fill();
    this.ctx.shadowBlur = 10;
    this.ctx.shadowColor = "red";

    // Update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      this.ctx.fillStyle = "#fbbf24"; // Gold color alpha
      this.ctx.fill();

      // Logic: Check proximity to nucleus
      if (!p.deflected) {
        const dx = p.x - this.nucleusX;
        const dy = p.y - this.nucleusY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Interaction zone
        if (dist < 30) {
          // Simple repulsion logic
          if (Math.abs(dy) < 5) {
            // Direct hit (rare) -> Bounce back
            p.vx = -p.vx;
            p.vy = (Math.random() - 0.5) * 4;
          } else {
            // Deflect
            p.vy += dy > 0 ? 0.5 : -0.5;
          }
          p.deflected = true;
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      // Remove if out of bounds
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

// --- 4. ISOTOPE LOGIC ---
const isoSlider = document.getElementById("isotope-slider");
const p1 = document.getElementById("iso-1-percent");
const p2 = document.getElementById("iso-2-percent");
const massDisplay = document.getElementById("avg-mass-display");
const vis1 = document.getElementById("visual-iso-1");
const vis2 = document.getElementById("visual-iso-2");

isoSlider.addEventListener("input", (e) => {
  const val = parseInt(e.target.value);
  p1.innerText = val;
  p2.innerText = 100 - val;

  // Formula: (35*a + 37*b)/100
  const avg = (35 * val + 37 * (100 - val)) / 100;
  massDisplay.innerText = avg.toFixed(2);

  // Scale visuals
  vis1.style.transform = `scale(${0.5 + val / 200})`; // 0.5 to 1.0
  vis2.style.transform = `scale(${0.5 + (100 - val) / 200})`;
});

// --- 5. CONFIGURATION BUILDER LOGIC ---
let electrons = 0;
const orbitData = {}; // Stores electrons in '1s', '2s' etc.

function addElectron(orbName) {
  const max = orbName.includes("s") ? 2 : 6;
  if (!orbitData[orbName]) orbitData[orbName] = 0;

  // Simplified Rule Check (Sequential filling enforced loosely for UX)
  if (orbitData[orbName] < max) {
    if (electrons < 18) {
      // Limit for UI
      orbitData[orbName]++;
      electrons++;
      updateConfigUI();
    } else {
      alert("Đã đạt giới hạn mô phỏng (18e)!");
    }
  } else {
    alert(`Phân lớp ${orbName} đã bão hòa (Tối đa ${max}e)!`);
  }
}

function resetConfig() {
  electrons = 0;
  for (let key in orbitData) delete orbitData[key];
  updateConfigUI();
}

function updateConfigUI() {
  document.getElementById("total-e-config").innerText = electrons;

  // Update visual arrows
  ["1s", "2s", "2p", "3s"].forEach((orb) => {
    const count = orbitData[orb] || 0;
    const container = document.getElementById(`vis-${orb}`);
    container.innerHTML = "";

    // Draw arrows (↑ ↓)
    const pairs = Math.ceil(count / 2); // For P orbital visualization logic
    // Simplified visual: Just show arrows
    for (let i = 0; i < count; i++) {
      const arrow = document.createElement("div");
      arrow.className = "text-xs font-bold text-blue-600";
      arrow.innerText = i % 2 === 0 ? "↑" : "↓";
      container.appendChild(arrow);
    }
  });

  // Update Text Config
  let str = "";
  if (orbitData["1s"]) str += `1s<sup>${orbitData["1s"]}</sup> `;
  if (orbitData["2s"]) str += `2s<sup>${orbitData["2s"]}</sup> `;
  if (orbitData["2p"]) str += `2p<sup>${orbitData["2p"]}</sup> `;
  if (orbitData["3s"]) str += `3s<sup>${orbitData["3s"]}</sup> `;

  document.getElementById("config-result").innerHTML = str || "1s⁰";
}

(function () {
  // --- 1. ATOM SIMULATION (Mô phỏng Nguyên tử) ---
  const atomCanvas = document.getElementById("atomSimCanvas");
  const ctxAtom = atomCanvas.getContext("2d");

  // State
  const atomState = { p: 1, n: 0, e: 1, angle: 0 };
  const elements = ["n", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne"];
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

  // Resize canvas
  function resizeAtomCanvas() {
    const parent = atomCanvas.parentElement;
    atomCanvas.width = parent.clientWidth;
    atomCanvas.height = parent.clientHeight;
  }
  window.addEventListener("resize", resizeAtomCanvas);
  resizeAtomCanvas();

  function drawAtom() {
    ctxAtom.clearRect(0, 0, atomCanvas.width, atomCanvas.height);
    const cx = atomCanvas.width / 2;
    const cy = atomCanvas.height / 2;

    // Vẽ Hạt nhân (Nucleus) - Rung nhẹ
    const nucleusSize = 10 + (atomState.p + atomState.n) * 1.5;

    // Vẽ Neutrons
    for (let i = 0; i < atomState.n; i++) {
      const angle =
        (i / Math.max(1, atomState.n)) * Math.PI * 2 + atomState.angle * 0.5;
      const r = Math.min(20, atomState.n * 2);
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;

      ctxAtom.beginPath();
      ctxAtom.arc(x, y, 8, 0, Math.PI * 2);
      ctxAtom.fillStyle = "#64748b"; // Gray
      ctxAtom.fill();
      ctxAtom.strokeStyle = "white";
      ctxAtom.stroke();
    }

    // Vẽ Protons
    for (let i = 0; i < atomState.p; i++) {
      // Offset phase để không trùng neutron
      const angle =
        (i / Math.max(1, atomState.p)) * Math.PI * 2 -
        atomState.angle * 0.5 +
        1;
      const r = Math.min(20, atomState.p * 2);
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;

      ctxAtom.beginPath();
      ctxAtom.arc(x, y, 9, 0, Math.PI * 2);
      ctxAtom.fillStyle = "#ef4444"; // Red
      ctxAtom.fill();
      ctxAtom.strokeStyle = "white";
      ctxAtom.stroke();

      // Dấu +
      ctxAtom.fillStyle = "white";
      ctxAtom.font = "10px Arial";
      ctxAtom.fillText("+", x - 3, y + 3);
    }

    // Vẽ Electron Shells
    const maxShells = Math.ceil(atomState.e / 2); // Giả lập đơn giản: 2e lớp 1, 8e lớp 2
    let eCount = atomState.e;
    let shellIndex = 1;

    while (eCount > 0) {
      const capacity = shellIndex === 1 ? 2 : 8;
      const currentE = Math.min(eCount, capacity);
      const radius = 60 * shellIndex;

      // Vẽ quỹ đạo
      ctxAtom.beginPath();
      ctxAtom.arc(cx, cy, radius, 0, Math.PI * 2);
      ctxAtom.strokeStyle = "rgba(59, 130, 246, 0.3)"; // Blue faint
      ctxAtom.lineWidth = 1;
      ctxAtom.stroke();

      // Vẽ Electrons
      for (let j = 0; j < currentE; j++) {
        const speed = 0.02 / shellIndex;
        const eAngle =
          (j / currentE) * Math.PI * 2 +
          atomState.angle * speed * (shellIndex % 2 === 0 ? 1 : -1);
        const ex = cx + Math.cos(eAngle) * radius;
        const ey = cy + Math.sin(eAngle) * radius;

        ctxAtom.beginPath();
        ctxAtom.arc(ex, ey, 5, 0, Math.PI * 2);
        ctxAtom.fillStyle = "#3b82f6"; // Blue
        ctxAtom.fill();
        ctxAtom.shadowBlur = 5;
        ctxAtom.shadowColor = "#3b82f6";
      }
      ctxAtom.shadowBlur = 0; // Reset shadow

      eCount -= currentE;
      shellIndex++;
    }

    atomState.angle += 0.05;
    requestAnimationFrame(drawAtom);
  }
  drawAtom();

  // Event Listeners for Atom Builder
  function updateAtomUI() {
    atomState.p = parseInt(document.getElementById("input-p").value);
    atomState.n = parseInt(document.getElementById("input-n").value);
    atomState.e = parseInt(document.getElementById("input-e").value);

    document.getElementById("disp-p").innerText = atomState.p;
    document.getElementById("disp-n").innerText = atomState.n;
    document.getElementById("disp-e").innerText = atomState.e;

    // Tính toán
    const charge = atomState.p - atomState.e;
    const chargeText = charge > 0 ? `+${charge}` : charge;
    const chargeEl = document.getElementById("atom-net-charge");
    chargeEl.innerText = chargeText;
    chargeEl.className = `text-lg font-mono font-bold ${charge === 0 ? "text-green-500" : charge > 0 ? "text-red-500" : "text-blue-500"}`;

    document.getElementById("atom-mass-num").innerText =
      atomState.p + atomState.n;

    // Tên nguyên tố
    const symbol = elements[atomState.p] || "?";
    const name = elementNames[atomState.p] || "Unknown";
    document.getElementById("element-symbol").innerText = symbol;
    document.getElementById("element-name").innerText = name;

    // Check bền
    const ratio = atomState.p > 0 ? atomState.n / atomState.p : 0;
    const stable =
      (atomState.p === 1 && atomState.n === 0) || (ratio >= 1 && ratio <= 1.5);
    const alertBox = document.getElementById("stability-alert");
    if (!stable && atomState.p > 1) {
      alertBox.classList.remove("hidden");
    } else {
      alertBox.classList.add("hidden");
    }
  }

  ["input-p", "input-n", "input-e"].forEach((id) => {
    document.getElementById(id).addEventListener("input", updateAtomUI);
  });

  // --- 2. THOMSON EXPERIMENT ---
  const thomsonCanvas = document.getElementById("thomsonCanvas");
  const ctxThomson = thomsonCanvas.getContext("2d");
  let thomsonOn = false;
  let particlesT = [];

  // Resize Thomson
  function resizeThomson() {
    const parent = thomsonCanvas.parentElement;
    thomsonCanvas.width = parent.clientWidth;
    thomsonCanvas.height = parent.clientHeight;
  }
  window.addEventListener("resize", resizeThomson);
  resizeThomson();

  document.getElementById("thomson-switch").addEventListener("change", (e) => {
    thomsonOn = e.target.checked;
    document.getElementById("thomson-status").innerText = thomsonOn
      ? "Đang bật"
      : "Tắt";
  });

  function drawThomson() {
    ctxThomson.clearRect(0, 0, thomsonCanvas.width, thomsonCanvas.height);

    // Vẽ ống (giả lập)
    ctxThomson.fillStyle = "rgba(255,255,255,0.05)";
    ctxThomson.fillRect(0, 50, thomsonCanvas.width, thomsonCanvas.height - 100);

    // Sinh hạt
    if (Math.random() < 0.5) {
      particlesT.push({
        x: 0,
        y: thomsonCanvas.height / 2,
        vx: 5 + Math.random(),
        vy: 0,
      });
    }

    // Cập nhật và vẽ hạt
    ctxThomson.fillStyle = "#4ade80"; // Green phosphor color
    for (let i = 0; i < particlesT.length; i++) {
      let p = particlesT[i];

      // Physics
      p.x += p.vx;

      // Nếu bật điện trường, hạt bị hút lên trên (về cực dương)
      if (
        thomsonOn &&
        p.x > thomsonCanvas.width * 0.2 &&
        p.x < thomsonCanvas.width * 0.8
      ) {
        p.vy -= 0.15; // Lực điện trường hút lên (y giảm)
      }
      p.y += p.vy;

      // Draw
      ctxThomson.beginPath();
      ctxThomson.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctxThomson.fill();

      // Xóa hạt ra khỏi màn hình
      if (p.x > thomsonCanvas.width || p.y < 0 || p.y > thomsonCanvas.height) {
        particlesT.splice(i, 1);
        i--;
      }
    }
    requestAnimationFrame(drawThomson);
  }
  drawThomson();

  // --- 3. RUTHERFORD EXPERIMENT (OPTIMIZED) ---
  const ruthCanvas = document.getElementById("rutherfordCanvas");
  const ctxRuth = ruthCanvas.getContext("2d");
  let alphaParticles = [];

  function resizeRuth() {
    const parent = ruthCanvas.parentElement;
    ruthCanvas.width = parent.clientWidth;
    ruthCanvas.height = parent.clientHeight;
  }
  window.addEventListener("resize", resizeRuth);
  resizeRuth();

  document
    .getElementById("btn-rutherford-fire")
    .addEventListener("click", () => {
      for (let i = 0; i < 25; i++) {
        setTimeout(() => {
          alphaParticles.push({
            x: 0,
            y: ruthCanvas.height / 2 + (Math.random() - 0.5) * 120, // Tập trung bắn vào giữa
            vx: 6,
            vy: 0,
            scattered: false,
          });
        }, i * 40);
      }
    });

  function drawRutherford() {
    ctxRuth.fillStyle = "rgba(15, 23, 42, 0.4)"; // Tạo hiệu ứng đuôi mờ cho hạt
    ctxRuth.fillRect(0, 0, ruthCanvas.width, ruthCanvas.height);

    const nucleusX = ruthCanvas.width * 0.7;
    const nucleusY = ruthCanvas.height / 2;

    // --- CẤU HÌNH KÍCH THƯỚC ---
    const visualRadius = 60; // Đã tăng gấp 3 lần (Au bự hơn)
    const coreRadius = 12; // Lõi cứng (chạm vào là bật ngược)

    // Vẽ vùng ảnh hưởng tĩnh điện (Quầng sáng quanh Au)
    ctxRuth.beginPath();
    ctxRuth.arc(nucleusX, nucleusY, visualRadius, 0, Math.PI * 2);
    ctxRuth.fillStyle = "rgba(251, 191, 36, 0.15)";
    ctxRuth.fill();

    // Vẽ lõi hạt nhân vàng
    ctxRuth.beginPath();
    ctxRuth.arc(nucleusX, nucleusY, coreRadius, 0, Math.PI * 2);
    ctxRuth.fillStyle = "#fbbf24";
    ctxRuth.shadowBlur = 15;
    ctxRuth.shadowColor = "#fbbf24";
    ctxRuth.fill();
    ctxRuth.shadowBlur = 0;

    // --- XỬ LÝ HẠT ALPHA ---
    for (let i = 0; i < alphaParticles.length; i++) {
      const p = alphaParticles[i];

      p.x += p.vx;
      p.y += p.vy;

      const dx = p.x - nucleusX;
      const dy = p.y - nucleusY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // 1. Logic va chạm trực diện (Bật ngược lại - Không đi xuyên)
      if (dist < coreRadius) {
        p.vx = -Math.abs(p.vx) * 0.8; // Bật ngược lại phía sau
        p.vy = (dy / dist) * 5; // Lệch hướng tùy vị trí chạm
        p.scattered = true;
        // Đẩy hạt ra mép lõi để tránh bị kẹt trong vòng lặp va chạm
        p.x = nucleusX + (dx / dist) * (coreRadius + 1);
      }

      // 2. Logic tán xạ tĩnh điện (Lệch hướng khi đi gần)
      else if (dist < visualRadius && !p.scattered) {
        const force = (1 - dist / visualRadius) * 0.8;
        p.vy += (dy / dist) * force;
        // Nếu hạt tiến quá gần trục X của tâm, tăng tốc độ bay ra
        if (p.x > nucleusX - 10) p.vx *= 0.98;
      }

      // Vẽ hạt Alpha
      ctxRuth.fillStyle = "#ffffff";
      ctxRuth.beginPath();
      ctxRuth.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctxRuth.fill();

      // Xóa hạt khi ra khỏi màn hình
      if (
        p.x > ruthCanvas.width ||
        p.x < -50 ||
        p.y < -50 ||
        p.y > ruthCanvas.height + 50
      ) {
        alphaParticles.splice(i, 1);
        i--;
      }
    }

    requestAnimationFrame(drawRutherford);
  }

  drawRutherford();

  // --- 4. MILLIKAN GAME LOGIC ---
  const millikanSlider = document.getElementById("millikan-slider");
  const oilDrop = document.getElementById("oil-drop");
  const feedback = document.getElementById("millikan-feedback");
  const forceE = document.getElementById("force-electric");
  const voltsDisp = document.getElementById("millikan-volts");

  // Vật lý đơn giản
  let dropY = 10; // % top
  let dropVelocity = 0;
  const gravity = 0.3;
  const targetVoltage = 50; // Điểm cân bằng giả định (50V)

  function updateMillikan() {
    const voltage = parseInt(millikanSlider.value);
    voltsDisp.innerText = voltage + " V";

    // Lực điện tỷ lệ với điện thế (đẩy lên)
    const electricForce = voltage * (gravity / targetVoltage);

    // Cập nhật vận tốc (F = ma)
    // Xuống (+), Lên (-)
    dropVelocity += gravity - electricForce;

    // Ma sát không khí (để dễ điều khiển hơn)
    dropVelocity *= 0.95;

    // Cập nhật vị trí
    dropY += dropVelocity;

    // Giới hạn biên
    if (dropY > 90) {
      dropY = 90;
      dropVelocity = 0;
    } // Chạm đáy
    if (dropY < 0) {
      dropY = 0;
      dropVelocity = 0;
    } // Chạm trần

    // Render Drop
    oilDrop.style.top = dropY + "%";

    // Render Vectors
    // Gravity (Fixed height visual)
    // Electric Force (Dynamic height visual)
    const eHeight = Math.min(50, voltage / 2); // max height visualization
    forceE.style.height = eHeight + "px";

    // Feedback Text
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

    requestAnimationFrame(updateMillikan);
  }
  updateMillikan();
})();
// 1. Xử lý Zoom mô phỏng Quy mô
const slider = document.getElementById("zoom-slider");
const stadiumWrap = document.getElementById("stadium-wrap");
const nucleusBall = document.getElementById("nucleus-ball");
const zoomVal = document.getElementById("zoom-val");
const scaleDesc = document.getElementById("scale-desc");

slider.addEventListener("input", (e) => {
  const val = e.target.value;
  zoomVal.innerText = val + "x";

  // Phóng to container
  stadiumWrap.style.transform = `scale(${1 + val / 100})`;

  // Khi zoom cực lớn, thay đổi mô tả
  if (val > 5000) {
    scaleDesc.innerText = "Hạt nhân (Quả bóng Tennis)";
    scaleDesc.classList.replace("text-slate-300", "text-red-400");
    nucleusBall.style.transform = "scale(20)";
  } else {
    scaleDesc.innerText = "Nguyên tử (Sân vận động)";
    scaleDesc.classList.replace("text-red-400", "text-slate-300");
    nucleusBall.style.transform = "scale(1)";
  }
});

// 2. Xử lý Kéo thả (Drag and Drop)
const dropZone = document.getElementById("drop-zone");

document.querySelectorAll('[draggable="true"]').forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("type", e.target.id);
  });
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

// 3. Quiz nhanh
function checkAns(btn, val) {
  if (val === 10000) {
    btn.classList.add("correct");
    alert("Chính xác! Tỷ lệ là 1/10.000.");
  } else {
    btn.classList.add("wrong");
    setTimeout(() => btn.classList.remove("wrong"), 500);
  }
}
const orbit = document.querySelector(".electron-orbit");
let angle = 0;

setInterval(() => {
  angle += 1;
  orbit.style.transform = `rotate(${angle}deg)`;
}, 40);
