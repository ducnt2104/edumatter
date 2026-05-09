// Hiệu ứng di chuột tạo parallax nhẹ cho các card
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    card.style.transform = `perspective(1000px) translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `perspective(1000px) translateY(0) rotateX(0) rotateY(0)`;
  });
});

// Console log "Hacker" easter egg
console.log(
  "%c EDUOJ ",
  "background: #00ff9d; color: #000; font-weight: bold; padding: 5px;",
);
console.log("Hệ thống đã sẵn sàng. Chào mừng coder!");
