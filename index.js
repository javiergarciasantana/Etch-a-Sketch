
// function createGrid() {
//   const gridContainer = document.getElementById('grid-container');
//   gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
//   gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
//   for (let i = 0; i < 16; i++) {
//     for (let j = 0; j < 16; j++) {
//       const gridSquare = document.createElement('div');
//       gridSquare.className = 'grid-square';
      
      
//       gridSquare.addEventListener('mouseover', function() {
        
//         gridSquare.style.backgroundColor = 'black';
//       });
      
//       gridContainer.appendChild(gridSquare);
//     }
//   }
// }


function buttonClick() {
  let size = prompt("Enter the grid size");
  if (size <= 100) {
    const gridContainer = document.getElementById('grid-container');

    // Remove existing grid squares
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
  
    // Update the grid template columns and rows
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  
    // Create the new grid
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
  
        gridSquare.addEventListener('mouseover', function() {
          gridSquare.style.backgroundColor = 'black';
        });
  
        gridContainer.appendChild(gridSquare);
      }
    }
  } else {
    console.log("ERROR: Max size must be 100");
  }

}

