// 1. KHỞI TẠO AOS
AOS.init({ once: true });

// 2. CHUYỂN TRANG MƯỢT
function openLink(url) {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.5s";
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

// 3. XỬ LÝ DARK/LIGHT MODE
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = themeToggleBtn.querySelector("i");
const htmlRoot = document.documentElement;

// Biến lưu màu RGB cho canvas (để thay đổi theo theme)
let particleColorRGB = "0, 210, 255"; // Màu mặc định (Dark mode)

function setTheme(theme) {
  if (theme === "light") {
    htmlRoot.setAttribute("data-theme", "light");
    themeIcon.classList.remove("fa-lightbulb");
    themeIcon.classList.add("fa-moon"); // Icon mặt trăng khi ở Light mode
    particleColorRGB = "0, 119, 182"; // Màu xanh đậm hơn cho Light mode
  } else {
    htmlRoot.removeAttribute("data-theme");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-lightbulb"); // Icon bóng đèn/mặt trời khi ở Dark mode
    particleColorRGB = "0, 210, 255"; // Màu xanh neon sáng
  }
  localStorage.setItem("theme", theme);
}

// Kiểm tra localStorage khi tải trang
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

// Sự kiện click nút đổi theme
themeToggleBtn.addEventListener("click", () => {
  const currentTheme = htmlRoot.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
});

// 4. HIỆU ỨNG CANVAS: MẠNG LƯỚI NGUYÊN TỬ (ATOM NETWORK)
const canvas = document.getElementById("chem-canvas");
const ctx = canvas.getContext("2d");

let particlesArray;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", () => {
  resizeCanvas();
  init();
});
resizeCanvas();

class Particle {
  constructor(x, y, directionX, directionY, size) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    // Sử dụng biến màu động
    ctx.fillStyle = "rgb(" + particleColorRGB + ")";
    ctx.fill();
  }
  update() {
    if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
    if (this.y > canvas.height || this.y < 0)
      this.directionY = -this.directionY;
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

function init() {
  particlesArray = [];
  let numberOfParticles = (canvas.height * canvas.width) / 9000;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 2 + 1;
    let x = Math.random() * (innerWidth - size * 4) + size * 2;
    let y = Math.random() * (innerHeight - size * 4) + size * 2;
    let directionX = Math.random() * 1 - 0.5;
    let directionY = Math.random() * 1 - 0.5;
    particlesArray.push(new Particle(x, y, directionX, directionY, size));
  }
}

function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance =
        (particlesArray[a].x - particlesArray[b].x) *
          (particlesArray[a].x - particlesArray[b].x) +
        (particlesArray[a].y - particlesArray[b].y) *
          (particlesArray[a].y - particlesArray[b].y);

      if (distance < (canvas.width / 7) * (canvas.height / 7)) {
        opacityValue = 1 - distance / 20000;
        // Sử dụng biến màu động cho đường nối
        ctx.strokeStyle = "rgba(" + particleColorRGB + "," + opacityValue + ")";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connect();
}

init();
animate();
