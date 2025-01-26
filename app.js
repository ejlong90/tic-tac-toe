let board = ["", "", "", "", "", "", "", "", ""]; // 9 empty cells
let currentPlayer = "X"; // X starts first
let nextPlayer = "O"; // other player
const opponent = document.querySelector("#opponent"); // set opponent
const result = document.querySelector(".result"); // players choice once opponent type is chosen
//const resetButton = document.querySelector('button'); // resetting board 

//Log the opponent when the dropdown changes
opponent.addEventListener("change", (event) => {
  result.textContent = `You selected ${event.target.value}`;
  startGame();
});

// attempting to create a dynamic board in JS instead of HTML 
function displayBoard() {
  const boardContainer = document.querySelector(".board"); // Select the board container
  boardContainer.innerHTML = ""; // Clear any existing cells

  //Loop through the board array to create cells
  board.forEach((cell, index) => {
    const cellElement = document.createElement("div"); // Create a cell
    cellElement.classList.add("cell"); // Add the "cell" class
    cellElement.dataset.index = index; // Store the cell index as a data attribute
    cellElement.textContent = cell; // Display the current value ("X". "O or "")

    // Add the hover effect (mouseenter)
    cellElement.addEventListener("mouseenter", () => {
      if (!cellElement.classList.contains("occupied")) { // will not add mark since cell is occupied
        cellElement.textContent = currentPlayer; // Show the current players mark as a preview
        cellElement.style.opacity = 0.5; 
      }
    });

    // Remove the hover effect (mouseleave)
    cellElement.addEventListener("mouseleave", () => {
      if (!cellElement.classList.contains("occupied")) {
        cellElement.textContent = ""; // Clear preview
        cellElement.style.opacity = "1"; // Resets opacity
      }
    });
    
    //add a click event listener to handle moves 
    cellElement.addEventListener("click", () => handledCellClick(index));

    //Append the cell to the board container
    boardContainer.appendChild(cellElement);
  
});

function startGame() {
  board = ["", "", "", "", "", "", "", "", ""]; // Reset board
  displayBoard(); // Update the board display
}

//function to proceed with game after each turn
function nextTurn() { 

}

// funtion to check for winning combos
function checkWinner() {
   const winningCombinations = [ // define an array that will hold all winning combos
    [0, 1, 2], // row 1
    [3, 4, 5], // row 2
    [6, 7, 8], // row 3
    [0, 3, 6], // column 1
    [1, 4, 7], // column 2
    [2, 5, 8], // column 3
    [0, 4, 8], // diagnal 1
    [2, 4, 6], // diagnal 2
   ];

  for(const combinations of winningCombinations) {
    const [a, b, c] = combinations; // Destruction indices
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner (X or O)
    }
  }
    return null; // No winner yet

  }
}


// function to reset game 
function resetGame() {

}