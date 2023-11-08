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
* Implementing character icon movement
```
else if (key === "ArrowDown") {
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
```

### Challenges

* Initially getting movement of the character icon was tricky to implement/
* Checkpoint system


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
