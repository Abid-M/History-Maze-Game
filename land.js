
// // Start btn function // CALLING HTML FILE ver
//   const gameStartBtn = document.getElementById("gameStartBtn");
//   const medievalRadio = document.getElementById("medieval")
//   const industrialRadio = document.getElementById("industrial")

  
    
//     gameStartBtn.addEventListener("click", function () {

// if(medievalRadio.checked){
//     console.log("medieval")
//     window.location.href = "maze.html"; 
// } else if (industrialRadio.checked){
//   console.log("industrial")
//   window.location.href = "maze.html"; 
// }});

const gameStartBtn = document.getElementById("gameStartBtn");
const medievalRadio = document.getElementById("medieval");
const industrialRadio = document.getElementById("industrial");

gameStartBtn.addEventListener("click", function () {
  if (medievalRadio.checked) {
    localStorage.setItem("selectedTheme", "medieval");
    window.location.href = "maze.html";
  } else if (industrialRadio.checked) {
    localStorage.setItem("selectedTheme", "industrialRev");
    window.location.href = "maze.html";
  }
});


// // CALLING API ver

// const callApiBtn = document.getElementById("callApiBtn");

// callApiBtn.addEventListener("click",function(){


// })


//let category;
// either medieval or industrialRev

