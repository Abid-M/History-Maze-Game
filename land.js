

// document.addEventListener('DOMContentLoaded', (event) => {
//   const gameStartBtn = document.getElementById("gameStartBtn");

//   // Add click event listener to the button
//   gameStartBtn.addEventListener("click", function () {
//       console.log("hi"); 
//       window.location.href = "maze.html"; 
//   });
// });


// // Start btn function // CALLING HTML FILE ver
  const gameStartBtn = document.getElementById("gameStartBtn");
  const medievalRadio = document.getElementById("medieval")
  
    
    gameStartBtn.addEventListener("click", function () {

if(medievalRadio.checked){
    window.location.href = "maze.html"; 
} else{
    console.log("other html")
//we might need to have a variable in script.js so then if its medieval then we can change the api url too Erica 
// gocha !
} });




// // CALLING API ver

// const callApiBtn = document.getElementById("callApiBtn");

// callApiBtn.addEventListener("click",function(){


// })

