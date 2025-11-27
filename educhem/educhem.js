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
