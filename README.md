# Time Labyrinth
## An adventure Maze Game

###### This History Maze Game is an engaging and educational experience designed specifically for secondary school kids. It offers an exciting journey through a maze filled with historical checkpoints that challenge users with history-related questions. To advance through the maze, players must correctly answer these questions. The game has been meticulously crafted using HTML, CSS, JavaScript, ExpressJS, and NodeJS to provide an immersive and interactive learning experience.

## Educational Benefits
* Enhances historical knowledge by presenting historical facts in an engaging format.
* Encourages critical thinking and problem-solving skills through the interactive questions.
* Provides an enjoyable and memorable way for students to learn history.

## Installation & Usage

### Installation 
* Clone or download the repo

### Usage
* Open the terminal
* Install the dependencies using `npm install`
* Run `node index.js` on the command line to run the server
* Open HTML with LiveServer

## Technologies
* __HTML, CSS, and JavaScript:__ *The game is built using a combination of web technologies, making it accessible on a wide range of devices.*

* __ExpressJS and NodeJS:__ *The backend technology stack provides for data storage and api requests.*
## Preview
![ezgif com-resize](https://github.com/Abid-M/Lap1Proj/assets/77882906/677ccab0-41d9-42ae-a326-b784e9119974)

## Wins & Challenges
### Wins 

* Implementing the creation of the maze with checkpoints
``` 
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
            category === 'medieval' ? cell.style.backgroundImage = "url('./images/med_check_icon.png')" : cell.style.backgroundImage = "url('./images/Ind_check_icon.png')"
            cell.style.backgroundSize = "contain"; // This ensures that the image fits into the cell.
            cell.style.backgroundRepeat = "no-repeat"; // This ensures the image does not tile.
            cell.style.backgroundPosition = "center"; // This centers the image in the cell.
          }
```
* Implementing character icon movement and triggering a multiple choice quiz to pop up when our character hits a checkpoint
```
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
        document.getElementById("endMessage").innerHTML = `You need to complete <span class="red">all the Checkpoints</span> in order to finish!`;
      } else {
        document.getElementById("endMessage").innerHTML = `<span class="green">You win,</span> thanks for playing!<p>Free Roam!</p>`;
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
```

* Getting the answer to the multiple choice question to be checked against the solutions in our API

```function checkAnswer(data) {
  const checkp = document.querySelector("#submit");
  const modal = document.getElementById("myModal");
  const successMessageElement = document.getElementById("successMessage");
  const wrongMessageElement = document.getElementById("wrongMessage");
  
  checkp.addEventListener("click", () => {
    const selectedValue = document.querySelector('input[name="question"]:checked').value;
    const correctAnswer = data.answers.find(answer => answer.value === 1)?.text;
    
    successMessageElement.style.fontSize = wrongMessageElement.style.fontSize = "20px";
    
    successMessageElement.innerHTML = `<span class="green">Well Done! You got it right!</span>`;
    wrongMessageElement.innerHTML = `<span class="red">You got it Wrong!</span><br><br>\nCorrect Answer : <br><span class="small"> '${correctAnswer}' </span><br><br>\nTry a different question! <br><br><hr>`;
    
    successMessageElement.style.display = wrongMessageElement.style.display = "none";
    
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
}```



### Challenges

* Initially getting movement of the character icon was tricky to implement.
* Checkpoint system.
* Getting the audio mute buttons to work.
* Some of the more advanced styling techniques were very hard to implement.


## Bugs
* Resizing browser screen moves the character icon
* The Multiple choice question buttons remain checked after the answer is submitted

## Future Features
* Allow users to choose a character icon from a list of options for gameplay.

* Introduce multiple maze levels, each increasing in difficulty.

* Incorporate a lives system, wherein users have three lives, and losing all three lives (by answering three questions incorrectly) requires them to restart the maze.

* Expand the range of history categories available to provide a broader selection of topics.

* Implement subcategories within each main category, offering more specific themes within the broader history topics (e.g., "Medieval Daily Life" as a sub category).

* Enable teachers to create custom categories and populate them with their own set of questions.

* Gradually increase the difficulty of questions as players progress through the maze, ensuring a suitable and challenging educational experience tailored for secondary school students.
