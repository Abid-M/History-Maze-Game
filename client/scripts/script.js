let category;
// either medieval or industrialRev

let span = document.querySelector(".close");
let endModal = document.getElementById("endModal");
span.addEventListener("click", () => {
  endModal.style.display = "none";
});

let restartButton = document.querySelector("#restartButton")
restartButton.addEventListener("click", ()=>{
  window.location.href = "maze.html"
})

let homepageButton = document.querySelector("#homepage")
homepageButton.addEventListener("click", ()=>{
  window.location.href = "index.html"
})

let audioSource = document.getElementById("gameAudio")

let muteButton = document.getElementById("muteButton")
muteButton.addEventListener("click", ()=>{
  audioSource.muted = true;
})

let audioButton = document.getElementById("enableAudio")
muteButton.addEventListener("click", ()=>{
  audioSource.muted = false
})



let startModal = document.getElementById("startModal");
//let closebutton  = document.getElementsByClassName("close")
let closebutton = document.getElementById("instructions-close");

closebutton.addEventListener("click", () => {
  startModal.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  category = localStorage.getItem("selectedTheme");

  startModal.style.display = "block";

  if (category === "medieval") {
    document.getElementById(
      "categorySelected"
    ).textContent = `Category Selected: 'Medieval'`;
  } else if (category === "industrialRev") {
    document.getElementById(
      "categorySelected"
    ).textContent = `Category Selected: 'Industrial Revolution'`;
    document.body.style.backgroundImage =
      'url("./images/industrialBackground.jpg")';
    document.getElementById("character").style.background =
      'url("./images/ind_icon.png")';
    document.getElementById("character").style.backgroundSize = "cover";
  } else {
    document.getElementById(
      "categorySelected"
    ).textContent = `No Category Selected!`;
    window.location.href = "index.html";
  }

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
      if (cell.id === "2") {
        cell.style.backgroundColor = "gold";
      }

      if (cell.id === "112" || cell.id === "121" || cell.id === "62" || cell.id === "17") {
        cell.classList.add("checkpoint");
        category === 'medieval' ? cell.style.backgroundImage = "url('./images/med_check_icon.png')" : cell.style.backgroundImage = "url('./images/Ind_check_icon.png')"
        cell.style.backgroundSize = "contain"; // This ensures that the image fits into the cell.
        cell.style.backgroundRepeat = "no-repeat"; // This ensures the image does not tile.
        cell.style.backgroundPosition = "center"; // This centers the image in the cell.
      }
    }
  }

  // Add a class "start" to the cell with ID 168
  const startCell = document.getElementById("168");

  // Position the character at the start cell (cell ID 168)
  const character = document.getElementById("character");
  character.style.top = startCell.offsetTop + "px";
  character.style.left = startCell.offsetLeft + "px";
});

async function fetchQuestions() {
  const response = await fetch(
    `https://history-game-info.onrender.com/random/${category}`
  );
  const data = await response.json();

  for (let i = 0; i < 4; i++) {
    let label = document.getElementById(`labelOp${i + 1}`);
    let option = document.getElementById(`option${i + 1}`);

    label.textContent = data.answers[i].text;
    option.textContent = data.answers[i].text;
    option.value = data.answers[i].text;

    let question = document.getElementById("question");
    question.textContent = data.question;
  }
  checkAnswer(data);
}

document.addEventListener("keydown", (event) => {
  let key = event.key;
  let modal = document.getElementById("myModal");

  // up -13, down +13, left -1, right +1

  let character = document.getElementById("character");
  let currentCell = parseInt(character.parentElement.id);
  console.log(currentCell);

  if (key === "ArrowUp") {
    if (modal.style.display !== "block") {
      let newPosition = currentCell - 13;
      let newCell = document.getElementById(newPosition);

      if (newCell.classList.contains("w")) {
        newCell.appendChild(character);

        character.style.top = newCell.offsetTop + "px";
        character.style.left = newCell.offsetLeft + "px";

        if (newCell.className.includes("checkpoint")) {
          fetchQuestions();
          modal.style.display = "block";
        }

        if (newCell.id === "2") {
          let path = document.querySelectorAll(".w");
          console.log(path);

          for (let i = 0; i < path.length; i++) {
            if (path[i].classList.contains("checkpoint")) {
              let endModal = document.getElementById("endModal");
              
              document.getElementById("endMessage").innerHTML =`You need to complete <span class="red"> all the Checkpoints </span>in order to finish!`

              backToHomepageButton = document.getElementById("BackToHomepage")
              backToHomepageButton.textContent = "Back to Game"
              
              
              endModal.style.display = "block";

              backToHomepageButton.addEventListener("click", ()=>{
                endModal.style.display = "none"

              })
              break;
            } else {
              let endModal = document.getElementById("endModal");

              document.getElementById("endMessage").innerHTML =
                `<span class="green">You win,</span> thanks for playing!<p>Free Roam!</p>`;
              

              backToHomepageButton = document.getElementById("BackToHomepage");

              backToHomepageButton.addEventListener("click", () => {
                endModal.style.display = "none"
              });

              endModal.style.display = "block";

              console.log("You WIN!");
            }
          }
        }
      }
    }
  } else if (key === "ArrowDown") {
      if (modal.style.display !== "block") {
        let newPosition = currentCell + 13;

        let newCell = document.getElementById(newPosition);
        if (newCell.classList.contains("w")) {
          newCell.appendChild(character);

          character.style.top = newCell.offsetTop + "px";
          character.style.left = newCell.offsetLeft + "px";
          if (newCell.classList.contains("checkpoint")) {
            fetchQuestions();
            modal.style.display = "block";
          }
        }
      }
  } else if (key === "ArrowLeft") {
    if (modal.style.display !== "block") {
      let newPosition = currentCell - 1;

      let newCell = document.getElementById(newPosition);
      if (newCell.classList.contains("w")) {
        newCell.appendChild(character);

        character.style.top = newCell.offsetTop + "px";
        character.style.left = newCell.offsetLeft + "px";

        if (newCell.classList.contains("checkpoint")) {
          fetchQuestions();
          modal.style.display = "block";
        }
      }
    }
  } else if (key === "ArrowRight") {
    if (modal.style.display !== "block") {
      let newPosition = currentCell + 1;

      let newCell = document.getElementById(newPosition);
      if (newCell.classList.contains("w")) {
        newCell.appendChild(character);

        character.style.top = newCell.offsetTop + "px";
        character.style.left = newCell.offsetLeft + "px";

        if (newCell.classList.contains("checkpoint")) {
          fetchQuestions();
          modal.style.display = "block";
        }
      }
    }
  }
});

function checkAnswer(data) {
  let checkp = document.querySelector("#submit");
  let modal = document.getElementById("myModal");

  checkp.addEventListener("click", () => {
    const selectedValue = document.querySelector(
      'input[name="question"]:checked'
    ).value;
    let correctAnswer;

    for (let i = 0; i < 4; i++) {
      if (data.answers[i].value == 1) {
        correctAnswer = data.answers[i].text;
      }
    }

    const successMessageElement = document.getElementById("successMessage");
    const wrongMessageElement = document.getElementById("wrongMessage");

    successMessageElement.style.fontSize = "20px";
    wrongMessageElement.style.fontSize = "20px";

    // correct answer code
    successMessageElement.innerHTML = `<span class="green">Well Done! You got it right!</span>`;

    // wrong answer code
    wrongMessageElement.innerHTML = `<span class="red">You got it Wrong!</span> 
    <br><br>\nCorrect Answer : <br><span class="small"> '${correctAnswer}' </span><br><br>
    \nTry a different question! <br><br><hr>`;

    successMessageElement.style.display = "none";
    wrongMessageElement.style.display = "none";

    if (correctAnswer === selectedValue) {
      successMessageElement.style.display = "block";

      setTimeout(function () {
        successMessageElement.style.display = "none";
        modal.style.display = "none";

        let currentCellID = parseInt(character.parentElement.id);
        let currentCell = document.getElementById(currentCellID);
        currentCell.classList.remove("checkpoint");
        currentCell.style.backgroundImage = "";
      }, 2000);
    } else if (correctAnswer !== selectedValue) {
      wrongMessageElement.style.display = "block";

      setTimeout(function () {
        wrongMessageElement.style.display = "none";
        fetchQuestions();
      }, 5000);
    } else {
      successMessageElement.textContent = "";
      wrongMessageElement.textContent = "";
    }
  });
}
module.exports = { checkAnswer, fetchQuestions };
