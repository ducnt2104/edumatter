// ==========================================
// 1. CẤU HÌNH CỘT (GRID CONFIG)
// ==========================================
const romanToColumn = {
  IA: 1,
  IIA: 2,
  IIIB: 3,
  IVB: 4,
  VB: 5,
  VIB: 6,
  VIIB: 7,
  VIIIB: 8,
  IB: 11,
  IIB: 12,
  IIIA: 13,
  IVA: 14,
  VA: 15,
  VIA: 16,
  VIIA: 17,
  VIIIA: 18,
};
const tableContainer = document.getElementById("periodic-table");
// 1.1. ĐỊNH NGHĨA MÀU SẮC THEO KHỐI (Dùng cho hàm renderTable)
const blockColors = {
  s: "bg-red-600 text-white border-red-400 hover:bg-red-500",
  p: "bg-yellow-600 text-white border-yellow-400 hover:bg-yellow-500",
  d: "bg-blue-600 text-white border-blue-400 hover:bg-blue-500",
  f: "bg-green-600 text-white border-green-400 hover:bg-green-500",
};

// ==========================================
// 2. LOGIC TÍNH TOÁN VỊ TRÍ (GIỮ NGUYÊN)
// ==========================================
function getGridPosition(element) {
  const z = element.basic.number;
  const groupRaw = element.details.position.group;

  // A. Xử lý họ Lanthanides (57-71)
  if (z >= 57 && z <= 71) {
    return { row: 9, col: z - 57 + 4 };
  }
  // B. Xử lý họ Actinides (89-103)
  if (z >= 89 && z <= 103) {
    return { row: 10, col: z - 89 + 4 };
  }
  // C. Xử lý nhóm VIIIB
  if (groupRaw === "VIIIB") {
    if ([26, 44, 76, 108].includes(z))
      return { row: element.details.position.period, col: 8 };
    if ([27, 45, 77, 109].includes(z))
      return { row: element.details.position.period, col: 9 };
    if ([28, 46, 78, 110].includes(z))
      return { row: element.details.position.period, col: 10 };
    return { row: element.details.position.period, col: 8 };
  }
  // D. Các nguyên tố còn lại
  let col = 1;
  if (!isNaN(groupRaw)) {
    col = parseInt(groupRaw);
  } else if (romanToColumn[groupRaw]) {
    col = romanToColumn[groupRaw];
  }

  return { row: element.details.position.period, col: col };
}

// ==========================================
// 3. RENDER BẢNG (KHÔI PHỤC ONCLICK VÀ LOGIC MÀU)
// ==========================================
function renderTable() {
  if (typeof DETAILED_PERIODIC_TABLE === "undefined") {
    console.error(
      "Không tìm thấy dữ liệu DETAILED_PERIODIC_TABLE từ element.js"
    );
    return;
  }

  // Tạo nhãn dòng F-block
  const hasLanthanides = DETAILED_PERIODIC_TABLE.some(
    (e) => e.basic.number >= 57 && e.basic.number <= 71
  );
  if (hasLanthanides) {
    const labelLa = document.createElement("div");
    labelLa.className = "f-block-label";
    labelLa.style.gridRow = 9;
    labelLa.innerText = "57-71 Lanthanides";
    tableContainer.appendChild(labelLa);

    const labelAc = document.createElement("div");
    labelAc.className = "f-block-label";
    labelAc.style.gridRow = 10;
    labelAc.innerText = "89-103 Actinides";
    tableContainer.appendChild(labelAc);
  }

  DETAILED_PERIODIC_TABLE.forEach((el) => {
    const pos = getGridPosition(el);
    const cell = document.createElement("div");

    // Lấy block và áp dụng màu sắc
    const blockType = el.details.position.block;
    const colorClass =
      blockColors[blockType] || "bg-slate-700 border-slate-600";
    cell.className = `element-cell ${colorClass}`;
    cell.style.gridColumn = pos.col;
    cell.style.gridRow = pos.row;

    // Nội dung ô
    cell.innerHTML = `
                <div class="text-[10px] font-mono opacity-80 absolute top-1 left-2">${el.basic.number}</div>
                <div class="text-xl md:text-2xl font-black mt-2 text-center drop-shadow-md">${el.basic.symbol}</div>
                <div class="text-[9px] font-semibold truncate w-full text-center px-1 opacity-90">${el.basic.nameVI}</div>
              `;

    // Gán sự kiện click!
    cell.onclick = () => openModal(el);
    tableContainer.appendChild(cell);
  });
}

document.addEventListener("DOMContentLoaded", renderTable);

// ==========================================
// 4. LOGIC HIỂN THỊ MODAL CHI TIẾT (ĐÃ FIX & BỔ SUNG)
// ==========================================
const modalBackdrop = document.getElementById("modal-backdrop");
const modalContent = document.getElementById("modal-content");

const safe = (val, suffix = "") => (val ? val + suffix : "---");

function openModal(data) {
  const b = data.basic;
  const d = data.details;
  const p = d.physical || {};
  const c = d.chemical || {};
  const pos = d.position || {};
  const prep = d.preparation || {}; // Thêm biến cho Điều chế

  // --- 1. Header & Cơ bản ---
  document.getElementById("m-symbol").innerText = b.symbol;
  document.getElementById("m-name-vi").innerText = b.nameVI;
  document.getElementById("m-name-en").innerText = b.nameEN;
  document.getElementById("m-number").innerText = b.number;
  document.getElementById("m-mass").innerText = b.atomicMass;
  document.getElementById("m-config").innerText = b.electronConfig;
  document.getElementById("m-p").innerText = b.number;
  document.getElementById("m-e").innerText = b.number;
  document.getElementById("m-n").innerText =
    Math.round(b.atomicMass) - b.number;

  // --- 2. Thông số chỉ số ---
  document.getElementById("m-electronegativity").innerText = safe(b.en);
  document.getElementById("m-valence").innerText = safe(b.valenceElectrons);

  // --- 3. Vị trí & Nguồn gốc ---
  document.getElementById("m-group").innerText = safe(pos.group);
  document.getElementById("m-period").innerText = safe(pos.period);
  document.getElementById("m-type").innerText = safe(pos.type);
  document.getElementById("m-block").innerText = safe(pos.block, "-block");
  document.getElementById("m-origin").innerText =
    d.origin || "Đang cập nhật dữ liệu lịch sử...";

  // --- 4. Tính chất Vật lý ---
  document.getElementById("m-state").innerText = safe(p.state);
  document.getElementById("m-color").innerText = safe(p.color);
  document.getElementById("m-melting").innerText = safe(p.meltingPoint);
  document.getElementById("m-boiling").innerText = safe(p.boilingPoint);
  document.getElementById("m-density").innerText = safe(p.density);
  document.getElementById("m-physical-props").innerText = safe(
    p.properties,
    "."
  );

  // --- 5. Hóa học & Số Oxy hóa (Đã bổ sung Type, Reactivity, Reaction) ---
  const oxidationData = c.oxidationStates || b.ox;

  // ✅ BỔ SUNG: Tính chất Hóa học (Loại)
  document.getElementById("m-chemical-type").innerText = safe(c.type);

  const oxContainer = document.getElementById("m-oxidation");
  oxContainer.innerHTML = "";

  if (oxidationData) {
    const states = oxidationData
      .toString()
      .split(",")
      .map((s) => s.trim());

    states.forEach((state) => {
      const badge = document.createElement("span");
      badge.className =
        "px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded border border-indigo-200";
      badge.innerText = state;
      oxContainer.appendChild(badge);
    });
  } else {
    oxContainer.innerText = "---";
  }

  // ✅ ĐÃ CÓ: Khả năng phản ứng & Phản ứng tiêu biểu
  document.getElementById("m-reactivity").innerText = safe(c.reactivity);
  document.getElementById("m-reaction").innerText = safe(c.notableReactions);

  // --- 6. Ứng dụng & Tự nhiên ---
  document.getElementById("m-applications").innerText = safe(
    d.applications,
    "."
  );
  document.getElementById("m-natural").innerText = safe(
    d.naturalOccurrence,
    "."
  );

  // ✅ BỔ SUNG: Điều chế
  document.getElementById("m-prep-lab").innerText = safe(prep.lab);
  document.getElementById("m-prep-industry").innerText = safe(prep.industry);

  // --- 7. Đồng vị (Render Table Rows) ---
  const isoList = document.getElementById("m-isotopes-list");
  isoList.innerHTML = "";
  document.getElementById("m-isotopes-summary").innerText =
    d.isotopes?.summary || "";
  if (d.isotopes && d.isotopes.list && d.isotopes.list.length > 0) {
    d.isotopes.list.forEach((iso) => {
      const tr = document.createElement("tr");
      tr.className = "border-b border-slate-100 hover:bg-slate-50";
      tr.innerHTML = `
                        <td class="px-4 py-2 font-medium text-slate-800">${
                          iso.name
                        }</td>
                        <td class="px-4 py-2 text-slate-500">${
                          iso.abundance || "Vết"
                        }</td>
                        <td class="px-4 py-2 text-xs text-slate-500 italic">${
                          iso.role || "-"
                        }</td>
                      `;
      isoList.appendChild(tr);
    });
  } else {
    isoList.innerHTML = `<tr><td colspan="3" class="px-4 py-2 text-center text-slate-400 italic">Dữ liệu đồng vị đang cập nhật...</td></tr>`;
  }

  // --- 8. Hợp chất (Render Cards) ---
  const compList = document.getElementById("m-compounds-list");
  compList.innerHTML = "";
  if (d.compounds && d.compounds.length > 0) {
    d.compounds.forEach((comp) => {
      const div = document.createElement("div");
      div.className =
        "bg-white p-3 rounded border border-slate-200 shadow-sm flex items-start gap-3";
      div.innerHTML = `
                        <div class="bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded text-xs min-w-[50px] text-center">${comp.formula}</div>
                        <div>
                            <div class="font-bold text-slate-800 text-sm">${comp.name}</div>
                            <div class="text-xs text-slate-500">${comp.desc}</div>
                        </div>
                      `;
      compList.appendChild(div);
    });
  } else {
    compList.innerHTML = `<div class="text-slate-400 text-sm italic">Không có hợp chất quan trọng hoặc chưa cập nhật.</div>`;
  }

  // --- 9. An toàn ---
  const safety = d.safety || {};
  document.getElementById("m-toxicity").innerText = safe(safety.toxicity);
  document.getElementById("m-hazards").innerText = safe(safety.hazards);

  // --- HIỆU ỨNG MỞ MODAL ---
  modalBackdrop.classList.remove("hidden");
  setTimeout(() => {
    modalContent.classList.remove("scale-95", "opacity-0");
    modalContent.classList.add("scale-100", "opacity-100");
  }, 10);

  // --- KHỞI TẠO 3D ---
  initAtom3D(b.number);
}

function closeModal() {
  modalContent.classList.remove("scale-100", "opacity-100");
  modalContent.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    modalBackdrop.classList.add("hidden");
    stop3D(); // Tắt 3D để tiết kiệm RAM
  }, 300);
}

// Click ra ngoài để đóng
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});

// ==========================================
// 5. THREE.JS ENGINE (ATOM 3D)
// ==========================================
let scene, camera, renderer, animationId;
const container = document.getElementById("atom-container");
let electrons = [];
let nucleusGroup;

function stop3D() {
  if (animationId) cancelAnimationFrame(animationId);
  if (renderer) {
    renderer.dispose();
    renderer.forceContextLoss();
    if (renderer.domElement) renderer.domElement.remove();
    renderer = null;
  }
  if (scene) {
    scene.clear();
    scene = null;
  }
  container.innerHTML = "";
}

function initAtom3D(protonCount) {
  stop3D(); // Reset cũ

  // Setup Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(
    50,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 18;

  // Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Controls (Chuột và Cảm ứng)
  let isDragging = false;
  let previousMouse = { x: 0, y: 0 };

  // --- 1. SỰ KIỆN CHUỘT (DESKTOP) ---
  container.onmousedown = (e) => {
    isDragging = true;
    previousMouse = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  };
  window.onmouseup = () => {
    isDragging = false;
  };
  container.onmousemove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMouse.x;
    const deltaY = e.clientY - previousMouse.y;
    scene.rotation.y += deltaX * 0.005;
    scene.rotation.x += deltaY * 0.005;
    previousMouse = { x: e.clientX, y: e.clientY };
  };
  container.onwheel = (e) => {
    e.preventDefault();
    camera.position.z += e.deltaY * 0.01;
    camera.position.z = Math.max(5, Math.min(camera.position.z, 50));
  };

  // --- 2. SỰ KIỆN CẢM ỨNG (MOBILE)
  container.ontouchstart = (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      previousMouse = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
    e.preventDefault();
  };
  container.ontouchend = () => {
    isDragging = false;
  };
  container.ontouchmove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - previousMouse.x;
    const deltaY = currentY - previousMouse.y;
    scene.rotation.y += deltaX * 0.005;
    scene.rotation.x += deltaY * 0.005;
    previousMouse = { x: currentX, y: currentY };
    e.preventDefault();
  };

  // Ánh sáng
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffffff, 1.5);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  // HẠT NHÂN (Nucleus)
  const nucleusGeo = new THREE.SphereGeometry(1.5, 32, 32);
  const nucleusMat = new THREE.MeshStandardMaterial({
    color: 0xff3333,
    emissive: 0xaa0000,
    emissiveIntensity: 0.4,
    roughness: 0.4,
    metalness: 0.5,
  });
  nucleusGroup = new THREE.Mesh(nucleusGeo, nucleusMat);
  scene.add(nucleusGroup);

  // ELECTRONS
  electrons = [];
  const shells = [2, 8, 18, 32, 32, 18, 8]; // Sức chứa tối đa các lớp
  let remaining = protonCount;
  let shellIdx = 0;

  while (remaining > 0 && shellIdx < shells.length) {
    const count = Math.min(remaining, shells[shellIdx]);
    const radius = 4 + shellIdx * 2.5;
    createShell(count, radius, shellIdx);
    remaining -= count;
    shellIdx++;
  }

  animate();
}

function createShell(count, radius, index) {
  // Vòng quỹ đạo
  const orbitGeo = new THREE.TorusGeometry(radius, 0.03, 16, 100);
  const orbitMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.1,
  });
  const orbit = new THREE.Mesh(orbitGeo, orbitMat);
  orbit.rotation.x = Math.random() * Math.PI;
  orbit.rotation.y = Math.random() * Math.PI;
  scene.add(orbit);

  // Group chứa electron
  const eGroup = new THREE.Group();
  eGroup.rotation.copy(orbit.rotation);
  scene.add(eGroup);

  // Hạt Electron
  const eGeo = new THREE.SphereGeometry(0.2, 16, 16);
  const eMat = new THREE.MeshStandardMaterial({
    color: 0x00ffff,
    emissive: 0x00ffff,
    emissiveIntensity: 1,
  });

  for (let i = 0; i < count; i++) {
    const mesh = new THREE.Mesh(eGeo, eMat);
    const angle = (i / count) * Math.PI * 2;
    mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
    eGroup.add(mesh);
  }

  // Tốc độ xoay
  const speed = (index % 2 == 0 ? 1 : -1) * (0.02 - index * 0.002);
  electrons.push({ group: eGroup, speed: speed });
}

function animate() {
  animationId = requestAnimationFrame(animate);

  if (nucleusGroup) {
    nucleusGroup.rotation.y += 0.005;
    nucleusGroup.rotation.x += 0.002;
  }

  electrons.forEach((e) => {
    e.group.rotation.z += e.speed;
  });

  renderer.render(scene, camera);
}

// Resize Handler
window.addEventListener("resize", () => {
  if (camera && renderer && container) {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
});
