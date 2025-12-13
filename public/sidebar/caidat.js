// Hàm lưu
function saveSetting(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Hàm tải
function loadSetting(key, defaultValue = false) {
  let v = localStorage.getItem(key);
  return v ? JSON.parse(v) : defaultValue;
}

// ============================
// Load trạng thái khi mở trang
// ============================
const darkMode = document.getElementById("darkMode");
const bigText = document.getElementById("bigText");
const soundFX = document.getElementById("soundFX");
const notifySound = document.getElementById("notifySound");

// Load từ bộ nhớ
darkMode.checked = loadSetting("darkMode");
bigText.checked = loadSetting("bigText");
soundFX.checked = loadSetting("soundFX");
notifySound.checked = loadSetting("notifySound");

// Áp dụng ngay
if (darkMode.checked) document.body.style.background = "#222";
if (bigText.checked) document.body.style.fontSize = "20px";

// ============================
// Sự kiện thay đổi
// ============================

// Chế độ tối
darkMode.addEventListener("change", () => {
  saveSetting("darkMode", darkMode.checked);
  document.body.style.background = darkMode.checked ? "#222" : "#f3f3f3";
});

// Cỡ chữ
bigText.addEventListener("change", () => {
  saveSetting("bigText", bigText.checked);
  document.body.style.fontSize = bigText.checked ? "20px" : "16px";
});

// Âm
soundFX.addEventListener("change", () =>
  saveSetting("soundFX", soundFX.checked)
);
notifySound.addEventListener("change", () =>
  saveSetting("notifySound", notifySound.checked)
);

// ============================
// Xóa cache
// ============================
document.getElementById("clearCache").addEventListener("click", () => {
  localStorage.clear();
  alert("Đã xóa toàn bộ cache!");
  location.reload();
});

// Reset tất cả
document.getElementById("resetAll").addEventListener("click", () => {
  localStorage.clear();
  alert("Đã khôi phục mặc định!");
  location.reload();
});
