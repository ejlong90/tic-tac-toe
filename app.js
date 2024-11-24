let board = ["", "", "", "", "", "", "", "", ""]; // 9 empty cells
let currentPlayer = "X"; // X starts first
let nextPlayer = "O"; // other player
const opponent = document.querySelector("#opponent"); // set opponent
const result = document.querySelector(".result"); // players choice once opponent type is chosen
//const resetButton = document.querySelector('button'); // resetting board 

//Log the opponent when the dropdown changes
opponent.addEventListener("change", (event) => {
  result.textContent = `You selected ${event.target.value}`;
});

function displayBoard() {
    console.log(board[0], board[1], board [2]);
    console.log(board[3], board[4], board [5]);
    console.log(board[6], board[7], board [8]);
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

  for(const combinations of winningCominations) {
    const [a, b, c] = combinations; // Destruction indices
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner (X or O)
    }
  }
    return null; // No winner yet

}