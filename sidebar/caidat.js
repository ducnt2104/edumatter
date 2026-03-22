// ================= LOGIC QUẢN LÝ DỮ LIỆU =================
const defaultSettings = {
  darkMode: false,
  bigText: false,
  themeColor: "#4caf50",
  notifySound: true,
};
function getSettings() {
  const saved = localStorage.getItem("appSettings");
  return saved ? JSON.parse(saved) : defaultSettings;
}
function saveSettings(newSettings) {
  localStorage.setItem("appSettings", JSON.stringify(newSettings));
  applyVisuals(newSettings);
  showToast("Đã lưu cài đặt mới!");
}
function updateSetting(key, value) {
  const current = getSettings();
  current[key] = value;
  saveSettings(current);
}

// ================= LOGIC GIAO DIỆN (VIEW) =================

const els = {
  darkMode: document.getElementById("darkMode"),
  bigText: document.getElementById("bigText"),
  notifySound: document.getElementById("notifySound"),
  colorCircles: document.querySelectorAll(".color-circle"),
};

function applyVisuals(settings) {
  document.body.classList.toggle("dark-mode", settings.darkMode);

  document.body.classList.toggle("large-text", settings.bigText);

  document.documentElement.style.setProperty(
    "--primary-color",
    settings.themeColor,
  );
  els.darkMode.checked = settings.darkMode;
  els.bigText.checked = settings.bigText;
  els.notifySound.checked = settings.notifySound;

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
function rgbToHex(rgb) {
  if (rgb.startsWith("#")) return rgb;
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function hex(x) {
  return ("0" + parseInt(x).toString(16)).slice(-2);
}

// ================= SỰ KIỆN (CONTROLLER) =================

const currentSettings = getSettings();
applyVisuals(currentSettings);

els.darkMode.addEventListener("change", (e) =>
  updateSetting("darkMode", e.target.checked),
);

els.bigText.addEventListener("change", (e) =>
  updateSetting("bigText", e.target.checked),
);

els.notifySound.addEventListener("change", (e) =>
  updateSetting("notifySound", e.target.checked),
);

window.changeTheme = function (color, el) {
  updateSetting("themeColor", color);
};

document.getElementById("resetAll").addEventListener("click", () => {
  if (confirm("Khôi phục tất cả về mặc định?")) {
    saveSettings(defaultSettings);
    location.reload();
  }
});
document.getElementById("clearCache").addEventListener("click", () => {
  if (confirm("Xóa bộ nhớ đệm sẽ đặt lại các tùy chọn. Bạn có chắc không?")) {
    localStorage.clear();
    alert("Đã xóa sạch bộ nhớ!");
    location.reload();
  }
});

function showToast(msg) {
  const t = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2000);
}
