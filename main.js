const qs = (s) => document.querySelector(s);
const qsa = (s) => [...document.querySelectorAll(s)];
const header = qs("#header");
const themeBtn = qs("#themeToggle");
const menuBtn = qs("#menuToggle");
const footer = qs("#footer");
const sidebar = qs("#sidebar");
const randomHSL = () => `hsl(${Math.random() * 360}, 85%, 55%)`;
function shadeColor(hex, percent) {
  let f = parseInt(hex.slice(1), 16),
    t = percent < 0 ? 0 : 255,
    p = Math.abs(percent),
    R = f >> 16,
    G = (f >> 8) & 0xff,
    B = f & 0xff;
  return (
    "#" +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  );
}
function setRandomHeader() {
  header.style.background = `linear-gradient(135deg, ${randomHSL()}, ${randomHSL()}, ${randomHSL()})`;
  header.style.backgroundSize = "300% 300%";
}
function setHeaderBySubject() {
  const base = document.body.dataset.subject;
  if (!header) return;
  if (!base) return setRandomHeader();
  const hex = base.startsWith("#") ? base : `#${base}`;
  const g1 = hex;
  const g2 = shadeColor(hex, 0.25);
  const g3 = shadeColor(hex, -0.2);
  const gradient = `linear-gradient(135deg, ${g1}, ${g2}, ${g3})`;
  header.style.background = gradient;
  header.style.backgroundSize = "300% 300%";
}
function enableHeaderGlow() {
  if (!header) return;
  header.addEventListener("mousemove", (e) => {
    const r = header.getBoundingClientRect();
    header.style.setProperty("--hx", e.clientX - r.left + "px");
    header.style.setProperty("--hy", e.clientY - r.top + "px");
  });
}
function animateSiteTitle() {
  const t = qs(".site-title");
  if (t) t.classList.add("scan-animate");
}
function toggleSidebar() {
  if (!menuBtn || !sidebar) return;
  menuBtn.onclick = () => sidebar.classList.toggle("open");
}
function setupTheme() {
  const body = document.body;
  const saved = localStorage.getItem("theme");
  body.classList.add(saved || "light");
  themeBtn?.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    const mode = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", mode);

    setHeaderBySubject();
  });
}
function setupCards() {
  const cards = qsa(".card");
  cards.forEach((card) => {
    const color = card.dataset.color || "#3b82f6";
    card.style.setProperty("--accent", color);
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
      card.classList.add("hovering");
    });
    card.addEventListener("mouseenter", () => {
      card.classList.add("active");
      cards.forEach(
        (c) => c !== card && c.classList.remove("active", "hovering")
      );
    });
    card.addEventListener("mouseleave", () =>
      card.classList.remove("active", "hovering")
    );
    card.addEventListener("click", () => {
      if (card.dataset.link) window.location.href = card.dataset.link;
      document.body.dataset.subject = color;
      setHeaderBySubject();
    });
  });
}
function setupSectionToggle() {
  qsa(".section").forEach((sec) => {
    const head = sec.querySelector(".section-header");
    if (!head) return;

    head.addEventListener("click", () => sec.classList.toggle("closed"));
  });
}
function enableFooterGlow() {
  if (!footer) return;
  footer.addEventListener("mousemove", (e) => {
    const r = footer.getBoundingClientRect();
    footer.style.setProperty("--fx", e.clientX - r.left + "px");
    footer.style.setProperty("--fy", e.clientY - r.top + "px");
  });
}
function init() {
  setHeaderBySubject();
  enableHeaderGlow();
  animateSiteTitle();
  toggleSidebar();
  setupTheme();
  setupCards();
  setupSectionToggle();
  enableFooterGlow();
  if (header) header.style.animation = "headerFlow 12s linear infinite";
}
document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", init)
  : init();
