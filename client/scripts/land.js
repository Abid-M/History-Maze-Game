
const gameStartBtn = document.getElementById("gameStartBtn");
const medievalRadio = document.getElementById("medieval");
const industrialRadio = document.getElementById("industrial");

gameStartBtn.addEventListener("click", function () {
  if (medievalRadio.checked) {
    localStorage.setItem("selectedTheme", "medieval");
    window.location.href = "maze.html";
  } else if (industrialRadio.checked) {
    localStorage.setItem("selectedTheme", "industrialRev");
    window.location.href = "./maze.html";
  }
});



