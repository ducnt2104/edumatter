// ================= LOGIC QUẢN LÝ DỮ LIỆU =================
const defaultSettings = {
  darkMode: false,
  bigText: false,
  themeColor: "#4caf50",
  notifySound: true,
};

// Hàm tiện ích load/save
function getSettings() {
  const saved = localStorage.getItem("appSettings");
  return saved ? JSON.parse(saved) : defaultSettings;
}

function saveSettings(newSettings) {
  localStorage.setItem("appSettings", JSON.stringify(newSettings));
  applyVisuals(newSettings);
  showToast("Đã lưu cài đặt mới!");
}

// Cập nhật 1 trường dữ liệu cụ thể
function updateSetting(key, value) {
  const current = getSettings();
  current[key] = value;
  saveSettings(current);
}

// ================= LOGIC GIAO DIỆN (VIEW) =================

// Các elements
const els = {
  darkMode: document.getElementById("darkMode"),
  bigText: document.getElementById("bigText"),
  notifySound: document.getElementById("notifySound"),
  colorCircles: document.querySelectorAll(".color-circle"),
};

// Áp dụng cài đặt lên giao diện
function applyVisuals(settings) {
  // 1. Dark Mode
  document.body.classList.toggle("dark-mode", settings.darkMode);

  // 2. Big Text
  document.body.classList.toggle("large-text", settings.bigText);

  // 3. Theme Color (CSS Variable)
  document.documentElement.style.setProperty(
    "--primary-color",
    settings.themeColor
  );

  // 4. Update Inputs (Sync UI with Data)
  els.darkMode.checked = settings.darkMode;
  els.bigText.checked = settings.bigText;
  els.notifySound.checked = settings.notifySound;

  // 5. Active Color Circle
  els.colorCircles.forEach((c) => {
    if (
      c.style.background.includes(settings.themeColor) ||
      rgbToHex(c.style.background) === settings.themeColor.toLowerCase()
    ) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });
}

// Hàm phụ: chuyển màu rgb() sang hex để so sánh
function rgbToHex(rgb) {
  if (rgb.startsWith("#")) return rgb;
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function hex(x) {
  return ("0" + parseInt(x).toString(16)).slice(-2);
}

// ================= SỰ KIỆN (CONTROLLER) =================

// Khởi chạy lần đầu
const currentSettings = getSettings();
applyVisuals(currentSettings);

// Event Listeners
els.darkMode.addEventListener("change", (e) =>
  updateSetting("darkMode", e.target.checked)
);

els.bigText.addEventListener("change", (e) =>
  updateSetting("bigText", e.target.checked)
);

els.notifySound.addEventListener("change", (e) =>
  updateSetting("notifySound", e.target.checked)
);

// Hàm đổi màu được gọi từ HTML onclick
window.changeTheme = function (color, el) {
  updateSetting("themeColor", color);
};

// Nút Reset
document.getElementById("resetAll").addEventListener("click", () => {
  if (confirm("Khôi phục tất cả về mặc định?")) {
    saveSettings(defaultSettings);
    location.reload();
  }
});

// Nút Clear Cache
document.getElementById("clearCache").addEventListener("click", () => {
  if (confirm("Xóa bộ nhớ đệm sẽ đặt lại các tùy chọn. Bạn có chắc không?")) {
    localStorage.clear();
    alert("Đã xóa sạch bộ nhớ!");
    location.reload();
  }
});

// Toast
function showToast(msg) {
  const t = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2000);
}
