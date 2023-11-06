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
      }
    }

    // Add a class "start" to the cell with ID 168
    const startCell = document.getElementById("168");
    startCell.classList.add("start");

    // Position the character at the start cell (cell ID 168)
    const character = document.getElementById("character");
    // const startCellElement = document.querySelector(".start");
    character.style.top = startCell.offsetTop + "px";
    character.style.left = startCell.offsetLeft + "px";
});

document.addEventListener("keydown", (event) => {
    let key = event.key
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

            if(newCell.id.contains(2)){
                window.alert("YOU WIN!")
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
    }
    }
    else if(key === "ArrowLeft"){
      let newPosition = currentCell -1;
      

      let newCell = document.getElementById(newPosition)
      if (newCell.classList.contains('w')){
        newCell.appendChild(character)

        character.style.top = newCell.offsetTop + "px";
        character.style.left = newCell.offsetLeft + "px";
    }
    }
    else if(key === "ArrowRight"){
      let newPosition = currentCell + 1;
      

      let newCell = document.getElementById(newPosition)
      if (newCell.classList.contains('w')){
        newCell.appendChild(character)

        character.style.top = newCell.offsetTop + "px";
        character.style.left = newCell.offsetLeft + "px";
    }
    }
});
