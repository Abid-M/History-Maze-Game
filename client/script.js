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
});

async function fetchQuestions() {
    console.log("asdhyasjkd")
    const response = await fetch ("https://history-game-info.onrender.com/medieval")
    const data = await response.json()

    console.log(data[0].question)
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
                modal.style.display = "block";
            }

            if(newCell.id === "2"){
                window.alert("YOU WIN!")
                console.log("win!")
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

let checkp = document.querySelector("#checkp")
checkp.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedValue = document.querySelector('input[name="question"]:checked').value;
    console.log(selectedValue)
});


