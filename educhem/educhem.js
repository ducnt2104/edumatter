// Xử lý click cho menu và card
document.querySelectorAll("[data-link]").forEach((el) => {
  el.addEventListener("click", () => {
    window.location.href = el.getAttribute("data-link");
  });
});
// Âm thanh mở đầu
const audio = new Audio("welcome.mp3");
audio.volume = 0.4;
audio.play().catch(() => {
  console.log("Trình duyệt chặn auto-play, sẽ phát khi user click");
});

const welcome = document.getElementById("welcome");
const startBtn = document.getElementById("startBtn");
const mainContent = document.querySelector(".main-content");

// Khi nhấn "Bắt đầu học"
if (startBtn && welcome && mainContent) {
  startBtn.addEventListener("click", () => {
    // hiệu ứng fade out màn welcome
    welcome.classList.add("fade-out");
    audio.pause();

    welcome.addEventListener(
      "animationend",
      () => {
        welcome.style.display = "none";
        mainContent.style.display = "grid";
        mainContent.classList.add("fade-in");
      },
      { once: true }
    ); // chỉ chạy 1 lần
  });
}

// Điều hướng khi click bất kỳ phần tử có data-link
document.querySelectorAll("[data-link]").forEach((el) => {
  el.addEventListener("click", () => {
    const link = el.getAttribute("data-link");
    if (link) window.location.href = link;
  });
});
// load footer
fetch("../component/footer.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("footer-container").innerHTML = html;
    startFooterParticles();
  });
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.onclick = () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
  } else {
    toggleBtn.innerHTML = `<i class="fas fa-moon"></i>`;
  }
};
// Dark mode
document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// Toggle menu
document.getElementById("menu-toggle").onclick = () => {
    document.querySelector(".sidebar").classList.toggle("active");
};
