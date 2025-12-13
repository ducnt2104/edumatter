/* =========================================================
   HÀM HỖ TRỢ FETCH API + FALLBACK KHI CHƯA CÓ SERVER
========================================================= */
async function api(url, method = "GET", body = null, isForm = false) {
  try {
    const opt = { method };
    if (body && !isForm) {
      opt.headers = { "Content-Type": "application/json" };
      opt.body = JSON.stringify(body);
    } else if (body && isForm) {
      opt.body = body;
    }

    const res = await fetch(url, opt);
    return await res.json();
  } catch (err) {
    console.warn("Server chưa chạy → dùng chế độ offline");
    return { offline: true };
  }
}

/* =========================================================
   LẤY THÔNG TIN TÀI KHOẢN
========================================================= */
async function loadAccount() {
  const data = await api("http://localhost:3000/api/account");

  // Dữ liệu offline mặc định (nếu server chưa chạy)
  if (data.offline) {
    document.getElementById("acc-username").textContent = "username123";
    document.getElementById("acc-email").textContent = "example@gmail.com";
    document.getElementById("acc-created").textContent = "12/02/2025";
    return;
  }

  // Đổ dữ liệu từ server
  document.getElementById("acc-username").textContent = data.username;
  document.getElementById("acc-email").textContent = data.email;
  document.getElementById("acc-created").textContent = data.created;
}

loadAccount();

/* =========================================================
   CẬP NHẬT THÔNG TIN
========================================================= */
async function updateInfo() {
  const username = document.getElementById("input-username").value;
  const email = document.getElementById("input-email").value;

  const data = await api("http://localhost:3000/api/update-info", "POST", {
    username,
    email,
  });

  showNotify(data.message || "Cập nhật thành công!", !data.offline);
  loadAccount();
}

/* =========================================================
   ĐỔI MẬT KHẨU
========================================================= */
async function changePassword() {
  const oldPass = document.getElementById("old-pass").value;
  const newPass = document.getElementById("new-pass").value;

  const data = await api("http://localhost:3000/api/change-password", "POST", {
    oldPass,
    newPass,
  });

  showNotify(data.message || "Đổi mật khẩu thành công!", !data.offline);
}

/* =========================================================
   UPLOAD AVATAR
========================================================= */
async function uploadAvatar(event) {
  const file = event.target.files[0];
  const form = new FormData();
  form.append("avatar", file);

  const data = await api(
    "http://localhost:3000/api/avatar",
    "POST",
    form,
    true
  );

  showNotify(data.message || "Cập nhật avatar thành công!", !data.offline);
}

/* =========================================================
   HỘP THÔNG BÁO NHẸ – MƯỢT – ĐẸP
========================================================= */
function showNotify(msg, success = true) {
  const box = document.createElement("div");
  box.className = "notify-box";
  box.textContent = msg;

  box.style.background = success
    ? "rgba(0,200,120,0.85)"
    : "rgba(255,60,60,0.85)";

  document.body.appendChild(box);

  setTimeout(() => box.classList.add("show"), 10); // animation xuất hiện

  setTimeout(() => {
    box.classList.remove("show");
    setTimeout(() => box.remove(), 300);
  }, 2500);
}

/* =========================================================
   ACTIVE SIDEBAR
========================================================= */
document.querySelectorAll(".sidebar-item").forEach((item) => {
  const link = item.getAttribute("data-link");

  // Bấm để chuyển trang
  item.addEventListener("click", () => {
    window.location.href = link;
  });

  // Active trang hiện tại
  if (window.location.href.includes(link)) {
    item.classList.add("active");
  }
});

/* =========================================================
   CUỘN LÊN ĐẦU TRANG
========================================================= */
document.querySelectorAll("#footer a").forEach((a) => {
  if (a.getAttribute("href") === "#") {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
