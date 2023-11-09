let category;
// either medieval or industrialRev

let span = document.querySelector(".close");
let endModal = document.getElementById("endModal");
span.addEventListener("click", () => {
  endModal.style.display = "none";
});

let restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", () => {
  window.location.href = "maze.html";
});

let homepageButton = document.querySelector("#homepage");
homepageButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

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
  //maze is a <div>

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

      if (
        cell.id === "112" ||
        cell.id === "121" ||
        cell.id === "62" ||
        cell.id === "17"
      ) {
        cell.classList.add("checkpoint");
        category === "medieval"
          ? (cell.style.backgroundImage = "url('./images/med_check_icon.png')")
          : (cell.style.backgroundImage = "url('./images/Ind_check_icon.png')");
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
  character.style.top = startCell.offsetTop + "px"; // setting the top property of character equal to the vertical position of startCell relative to its offset parent - aligning character with the top of the startCell element.
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
  const key = event.key;
  const modal = document.getElementById("myModal");
  const character = document.getElementById("character");
  const currentCell = parseInt(character.parentElement.id);

  if (modal.style.display === "block") return;

  let newPosition;
  let direction;

  if (key === "ArrowUp") {
    newPosition = currentCell - 13;
    direction = "top";
  } else if (key === "ArrowDown") {
    newPosition = currentCell + 13;
    direction = "top";
  } else if (key === "ArrowLeft") {
    newPosition = currentCell - 1;
    direction = "left";
  } else if (key === "ArrowRight") {
    newPosition = currentCell + 1;
    direction = "left";
  }

  const newCell = document.getElementById(newPosition);

  if (newCell && newCell.classList.contains("w")) {
    newCell.appendChild(character);
    character.style[direction] = newCell.style[direction];

    if (newCell.classList.contains("checkpoint")) {
      fetchQuestions();
      modal.style.display = "block";
    }

    if (newCell.id === "2") {
      const path = document.querySelectorAll(".w");
      const endModal = document.getElementById("endModal");
      let hasCheckpoint = false;

      for (let i = 0; i < path.length; i++) {
        const cell = path[i];
        if (cell.classList.contains("checkpoint")) {
          hasCheckpoint = true;
          break;
        }
      }

      if (hasCheckpoint) {
        document.getElementById(
          "endMessage"
        ).innerHTML = `You need to complete <span class="red">all the Checkpoints</span> in order to finish!`;
      } else {
        document.getElementById(
          "endMessage"
        ).innerHTML = `<span class="green">You win,</span> thanks for playing!<p>Free Roam!</p>`;
        console.log("You WIN!");
      }

      endModal.style.display = "block";

      const backToHomepageButton = document.getElementById("BackToHomepage");
      backToHomepageButton.textContent = "Back to Game";

      backToHomepageButton.addEventListener("click", () => {
        endModal.style.display = "none";
      });
    }
  }
});

function checkAnswer(data) {
  const checkp = document.querySelector("#submit");
  const modal = document.getElementById("myModal");
  const successMessageElement = document.getElementById("successMessage");
  const wrongMessageElement = document.getElementById("wrongMessage");

  checkp.addEventListener("click", () => {
    const selectedValue = document.querySelector(
      'input[name="question"]:checked'
    ).value;
    const correctAnswer = data.answers.find(
      (answer) => answer.value === 1
    )?.text;

    successMessageElement.style.fontSize = wrongMessageElement.style.fontSize =
      "20px";

    successMessageElement.innerHTML = `<span class="green">Well Done! You got it right!</span>`;
    wrongMessageElement.innerHTML = `<span class="red">You got it Wrong!</span><br><br>\nCorrect Answer : <br><span class="small"> '${correctAnswer}' </span><br><br>\nTry a different question! <br><br><hr>`;

    successMessageElement.style.display = wrongMessageElement.style.display =
      "none";

    if (correctAnswer === selectedValue) {
      successMessageElement.style.display = "block";

      setTimeout(() => {
        successMessageElement.style.display = "none";
        modal.style.display = "none";
        const currentCellID = parseInt(character.parentElement.id);
        const currentCell = document.getElementById(currentCellID);
        currentCell.classList.remove("checkpoint");
        currentCell.style.backgroundImage = "";
      }, 2000);
    } else {
      wrongMessageElement.style.display = "block";

      setTimeout(() => {
        wrongMessageElement.style.display = "none";
        fetchQuestions();
      }, 5000);
    }
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  let audio = document.getElementById("gameAudio");
  let muteButton = document.getElementById("muteButton");
  let enableAudioButton = document.getElementById("enableAudio");

  muteButton.addEventListener("click", function () {
    audio.muted = true;
  });

  enableAudioButton.addEventListener("click", function () {
    audio.muted = false;
  });
});

// async function createNewQuiz(e) {
//   e.preventDefault();

//   const question = e.target.question.value;
//   const answers = e.target.answer.value.split(",");
//   const correctAnswer = e.target.correctAnswer.value.trim();

//   const data = {
//     question,
//     answers: answers.map((text, index) => ({
//       text,
//       value: index === correctAnswer ? 1 : 0,
//     })),
//     correctAnswer: [{ text: correctAnswer, value: 1 }],
//   };
//   console.log(data);

//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   };

//   const response = await fetch("http://localhost:3000/medieval", options);

//   e.target.question.value = "";
//   e.target.answer.value = "";
//   e.target.correctAnswer.value = "";

//   if (response.ok) {
//     alert("Quiz added.");
//   }
// }

module.exports = { checkAnswer, fetchQuestions };
