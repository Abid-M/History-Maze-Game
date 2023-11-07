let category; 
// either medieval or industrialRev


let span = document.querySelector(".close");
let endModal = document.getElementById("endModal");
span.addEventListener("click", () => {
  endModal.style.display = "none";
})

document.addEventListener("DOMContentLoaded", function () {
    const maze = document.getElementById("maze");
    
  
    // Array of cell IDs that should be white
    const cellIds = [
      2, 15, 16, 17, 18, 21, 23, 25, 29, 31, 32, 33, 34, 35, 36, 38, 41, 42, 45,
      49, 51, 60, 62, 63, 64, 68, 69, 71, 72, 73, 74, 75, 80, 81, 84, 90, 93, 97,
      98, 100, 103, 106, 108, 111, 112, 113, 114, 115, 116, 119, 120, 121, 122,
      124, 126, 132, 135, 137, 139, 145, 146, 148, 149, 150, 152, 153, 154, 155,
      168,
    ];


  
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 13; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        const cellId = i * 13 + j + 1; // Calculate cell IDs
        cell.id = cellId.toString(); // Set ID (to make it easier)
        maze.appendChild(cell);
  
        if (cellIds.includes(cellId)) {
          // Add class
          cell.classList.add("w");
        }

        if(cell.id === "112" || cell.id === "121" || cell.id === "62" || cell.id === "17"){
          cell.classList.add("checkpoint")
          cell.style.backgroundColor = "green"
          cell.style.borderRadius = "50px"
        }
      }
    }

    // Add a class "start" to the cell with ID 168
    const startCell = document.getElementById("168");

    // Position the character at the start cell (cell ID 168)
    const character = document.getElementById("character");
    character.style.top = startCell.offsetTop + "px";
    character.style.left = startCell.offsetLeft + "px";

    const urlParams = new URLSearchParams(window.location.search);
    category = urlParams.get('era'); // 'medieval' or 'industrialRev' ******added new trial **** Matthew's edit 

    if(category){
      fetchQuestions();//***** added new-trial */ **** Matthew's edit 
    }
});

async function fetchQuestions() {


    let apiUrl = `https://history-game-info.onrender.com/random/${category}`; // Use the 'category' variable to change the endpoint **** Matthew's edit 
    // const response = await fetch(apiUrl); **** Matthew's edit 
    // const data = await response.json(); **** Matthew's edit 

    
    const response = await fetch ("https://history-game-info.onrender.com/random/medieval")
    const data = await response.json()

    for(let i =0; i<4; i++){

      let label = document.getElementById(`labelOp${i+1}`)
      let option = document.getElementById(`option${i+1}`)

      label.textContent = data.answers[i].text;
      option.textContent = data.answers[i].text;
      option.value = data.answers[i].text

      let question = document.getElementById("question")
      question.textContent = data.question
    }
    checkAnswer(data)
}

document.addEventListener("keydown", (event) => {
    let key = event.key
    let modal = document.getElementById("myModal");

    // up -13, down +13, left -1, right +1

    let character = document.getElementById("character")
    let currentCell = parseInt(character.parentElement.id);
    console.log(currentCell)

    if (key === "ArrowUp") {
        let newPosition = currentCell - 13
        let newCell = document.getElementById(newPosition)

        if (newCell.classList.contains('w')){
            newCell.appendChild(character)

            character.style.top = newCell.offsetTop + "px";
            character.style.left = newCell.offsetLeft + "px";
            
            if (newCell.className.includes("checkpoint")) {
                fetchQuestions();
                modal.style.display = "block";
            }

            if(newCell.id === "2"){
              console.log("runnign this console log")
              let path = document.querySelectorAll(".w")
              console.log(path)

              for (let i =0; i < path.length; i++) {
                if (path[i].classList.contains("checkpoint")) {
                  let endModal = document.getElementById("endModal")

                  document.getElementById("endMessage").textContent = "You need to complete all the Checkpoints in order to finish!"
                  document.getElementById("endMessage").style.color = "red";

                  endModal.style.display = "block"
                  break;
                } else {
                  let endModal = document.getElementById("endModal")

                  document.getElementById("endMessage").textContent = "You win, thanks for playing!"
                  document.getElementById("endMessage").style.color = "green"

                
                  endModal.style.display = "block"

                  console.log("You WIN!")

                }
              }
            }
        }
    }

    else if(key === "ArrowDown"){
      let newPosition = currentCell + 13;
      

      let newCell = document.getElementById(newPosition)
      if (newCell.classList.contains('w')){
        newCell.appendChild(character)

        character.style.top = newCell.offsetTop + "px";
        character.style.left = newCell.offsetLeft + "px";
        if (newCell.classList.contains("checkpoint")) {
            fetchQuestions();
            modal.style.display = "block";
        }
    }
    }

    else if(key === "ArrowLeft"){
      let newPosition = currentCell -1;
      

      let newCell = document.getElementById(newPosition)
      if (newCell.classList.contains('w')){
        newCell.appendChild(character)

        character.style.top = newCell.offsetTop + "px";
        character.style.left = newCell.offsetLeft + "px";

        if (newCell.classList.contains("checkpoint")) {
            fetchQuestions();
            modal.style.display = "block";
        }
      }
    }
    else if(key === "ArrowRight"){
      let newPosition = currentCell + 1;
      

      let newCell = document.getElementById(newPosition)
      if (newCell.classList.contains('w')){
        newCell.appendChild(character)

        character.style.top = newCell.offsetTop + "px";
        character.style.left = newCell.offsetLeft + "px";

        if (newCell.classList.contains("checkpoint")) {
            fetchQuestions();
            modal.style.display = "block";
        }
    }
    }
});



function checkAnswer(data) {
  let checkp = document.querySelector("#submit");
  let modal = document.getElementById("myModal");

  checkp.addEventListener("click", () => {
    const selectedValue = document.querySelector('input[name="question"]:checked').value;
    let correctAnswer;

    for (let i = 0; i < 4; i++) {
      if (data.answers[i].value == 1) {
        correctAnswer = data.answers[i].text;
      }
    }

    const successMessageElement = document.getElementById("successMessage");
    const wrongMessageElement = document.getElementById("wrongMessage");

    successMessageElement.textContent = "";
    wrongMessageElement.textContent = "";

    if (correctAnswer === selectedValue) {
      let userChecks = document.getElementById("userCheckpoints")
      successMessageElement.textContent = `Well Done! You got it right!`;
     



      setTimeout(function() {
        successMessageElement.textContent = '';
        modal.style.display = "none";       
        
        let currentCellID = parseInt(character.parentElement.id);
        let currentCell = document.getElementById(currentCellID)
        currentCell.classList.remove("checkpoint")
        currentCell.style.backgroundColor = "";
        currentCell.style.borderRadius = "";
      }, 1000);
    } else if (correctAnswer !== selectedValue){
      wrongMessageElement.textContent = `You got it Wrong!\nCorrect Answer: ${correctAnswer}!\nTry a different question!`;

      setTimeout(function() {
        wrongMessageElement.textContent = '';
        fetchQuestions();
      }, 1000);
    }
    else{
      successMessageElement.textContent = ""
      wrongMessageElement.textContent = ""

    }
  });
}

module.exports = { checkAnswer, fetchQuestions }


