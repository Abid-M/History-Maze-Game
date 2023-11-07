
// Start btn function
document.addEventListener('DOMContentLoaded', (event) => {
  const gameStartBtn = document.getElementById("gameStartBtn");

  // Add click event listener to the button
  gameStartBtn.addEventListener("click", function () {
      console.log("hi"); 
      window.location.href = "maze.html"; 
  });
});
