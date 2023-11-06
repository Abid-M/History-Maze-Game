
let characterPosition = 168; 
 
document.addEventListener("DOMContentLoaded", function () {
    const maze = document.getElementById("maze");
  
    //each cell(id) want to be white
    const cellIds = [
      2, 15, 16, 17, 18, 21, 23, 25, 29, 31, 32, 33, 34, 35, 36, 38, 41, 42, 45,
      49, 51, 60, 62, 63, 64, 68, 69, 71, 72, 73, 74, 75, 80, 81, 84, 90, 93, 97,
      98, 100, 103, 106, 108, 111, 112, 113, 114, 115, 116, 119, 120, 121, 122,
      124, 126, 132, 135, 137, 139, 145, 146, 148, 149, 150, 152, 153, 154, 155,
      168,
    ];
  
    let cellCounter = 1; // cell counter
  
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 13; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        const cellId = i * 13 + j + 1; // calculate cell ids
        cell.id = cellId.toString(); // set ID (to make it easier)
        maze.appendChild(cell);
  
        if (cellIds.includes(cellId)) {
          // add class
          cell.classList.add("w");
        }
  

        cellCounter++;
      }
    }
  });