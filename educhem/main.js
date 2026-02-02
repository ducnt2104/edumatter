// Tạo các hạt phân tử trang trí ngẫu nhiên
function createDecorations() {
  const icons = ["fa-fill-drip", "fa-vials", "fa-dna", "fa-circle-nodes"];
  for (let i = 0; i < 8; i++) {
    const icon = document.createElement("i");
    icon.className = `fas ${icons[Math.floor(Math.random() * icons.length)]} molecule`;
    icon.style.left = Math.random() * 100 + "vw";
    icon.style.top = Math.random() * 100 + "vh";
    icon.style.fontSize = Math.random() * 20 + 20 + "px";
    icon.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(icon);
  }
}

window.onload = createDecorations;

// Hiệu ứng tương tác đơn giản cho card
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});
