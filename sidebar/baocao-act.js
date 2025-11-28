document.getElementById("reportForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const pop = document.getElementById("successPopup");
  pop.style.display = "block";

  setTimeout(() => {
    pop.style.display = "none";
  }, 2500);

  e.target.reset();
});
