/* =========================================================
   ⚛️ BẢNG TUẦN HOÀN HÓA HỌC — BẢN TƯƠNG TÁC NÂNG CẤP
   Tác giả: Đức (với trợ lý AI)
   Hiệu ứng mượt, vẽ nguyên tử động, highlight nhóm A/B
   ========================================================= */

// ===== HOOKS DOM =====
const table = document.getElementById("periodic-table");
const atomVisual = document.getElementById("atom-visual");

const details = {
  name: document.getElementById("element-name"),
  symbol: document.getElementById("element-symbol"),
  number: document.getElementById("element-number"),
  mass: document.getElementById("element-mass"),
  protons: document.getElementById("element-protons"),
  neutrons: document.getElementById("element-neutrons"),
  electrons: document.getElementById("element-electrons"),
  application: document.getElementById("element-application"),
  group: document.getElementById("element-group"),
  period: document.getElementById("element-period"),
  electronConfig: document.getElementById("element-electronConfig"),
};

// ===== HÀM VẼ BẢNG =====
function renderTable() {
  table.innerHTML = "";

  elements.forEach((elData) => {
    const el = document.createElement("div");

    el.className = `element ${elData.type} group-${elData.groupType}`;
    el.dataset.symbol = elData.symbol;
    el.dataset.number = elData.number;

    el.innerHTML = `
      <div class="symbol">${elData.symbol}</div>
      <div class="number">${elData.number}</div>
    `;

    el.onclick = () => showDetails(elData, el);
    table.appendChild(el);
  });
}

// ===== HIỂN THỊ CHI TIẾT =====
let currentSelected = null;

function showDetails(element, elDiv) {
  // Hiệu ứng chọn
  if (currentSelected) currentSelected.classList.remove("active");
  elDiv.classList.add("active");
  currentSelected = elDiv;

  // Cập nhật thông tin
  details.name.textContent = element.name;
  details.symbol.textContent = element.symbol;
  details.number.textContent = element.number;
  details.mass.textContent = element.mass;
  details.protons.textContent = element.protons;
  details.neutrons.textContent = element.neutrons;
  details.electrons.textContent = element.electrons;
  details.application.textContent = element.application;
  details.group.textContent = element.group;
  details.period.textContent = element.period;
  details.electronConfig.textContent = element.electronConfig.join(", ");

  renderAtom(element);
}

// ===== VẼ NGUYÊN TỬ ĐỘNG =====
function renderAtom(element) {
  atomVisual.innerHTML = "";

  // Hạt nhân
  const nucleus = document.createElement("div");
  nucleus.className = "nucleus";
  nucleus.textContent = `${element.protons}+`;
  atomVisual.appendChild(nucleus);

  // Các vòng electron
  const electronConfig = element.electronConfig;
  const radiusStep = 35;

  electronConfig.forEach((electrons, ringIndex) => {
    const radius = radiusStep * (ringIndex + 1);

    // Vẽ vòng
    const ring = document.createElement("div");
    ring.className = "ring";
    ring.style.width = `${radius * 2}px`;
    ring.style.height = `${radius * 2}px`;
    atomVisual.appendChild(ring);

    // Electron chuyển động
    for (let i = 0; i < electrons; i++) {
      const electron = document.createElement("div");
      electron.className = "electron";

      const angle = (i * 360) / electrons;
      electron.style.setProperty("--angle", `${angle}deg`);
      electron.style.setProperty("--radius", `${radius}px`);
      electron.style.animationDuration = `${4 + ringIndex * 2}s`; // Tốc độ khác nhau
      atomVisual.appendChild(electron);
    }
  });
}

// ===== HIỆU ỨNG HOVER LEGEND =====
function showInfo(info) {
  document.getElementById("info-text").textContent = info;
}

function toggleVisibility(group) {
  const allItems = document.querySelectorAll(".legend-item");
  allItems.forEach((item) => {
    if (group === "all-groups") {
      item.classList.remove("hidden");
    } else if (item.classList.contains(group)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

// ===== KHỞI TẠO =====
renderTable();

/* =========================================================
   🎨 HIỆU ỨNG BỔ SUNG CSS (THÊM VÀO CSS CŨ)
   ========================================================= */
const style = document.createElement("style");
style.textContent = `
.element {
  position: relative;
  transition: all 0.25s ease;
}
.element.active {
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(0,0,0,0.4);
  border: 2px solid #fff;
}
.symbol {
  font-size: 18px;
  font-weight: 700;
}
.number {
  font-size: 11px;
  opacity: 0.8;
}

.nucleus {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: radial-gradient(circle, #ffeb3b, #fbc02d);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #222;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
}

.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

.electron {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #2196f3;
  border-radius: 50%;
  animation: spin infinite linear;
}

@keyframes spin {
  from { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
  to { transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
}
`;
document.head.appendChild(style);
