// Lấy các phần tử DOM
const theoryScreen = document.getElementById("theory-screen");
const videoScreen = document.getElementById("video-screen");
const videoPlayer = document.getElementById("video-player");
const btnVideoScreen = document.getElementById("btn-video-screen");
const btnBackToTheory = document.getElementById("btn-back-to-theory");
const playButtons = document.querySelectorAll(".btn-play-video");

// Chuyển sang trang video
btnVideoScreen.addEventListener("click", () => {
    switchScreen(theoryScreen, videoScreen);
});

// Quay lại trang lý thuyết
btnBackToTheory.addEventListener("click", () => {
    if (!videoPlayer.paused) {
        videoPlayer.pause();
        videoPlayer.src = ""; // Dừng và xóa video
    }
    switchScreen(videoScreen, theoryScreen);
});

// Chơi video từ danh sách
playButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const videoSrc = `videos/${button.getAttribute("data-video")}`;
        if (videoPlayer.src !== videoSrc) {
            videoPlayer.src = videoSrc; // Đổi video chỉ khi video khác
        }
        videoPlayer.classList.remove("hidden");
        videoPlayer.play();
    });
});

// Hàm chuyển đổi màn hình với hiệu ứng mượt
function switchScreen(fromScreen, toScreen) {
    fromScreen.classList.remove("active");
    fromScreen.classList.add("hidden");
    requestAnimationFrame(() => {
        toScreen.classList.remove("hidden");
        toScreen.classList.add("active");
    });
}
