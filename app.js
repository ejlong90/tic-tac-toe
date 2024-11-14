let board = ["", "", "", "", "", "", "", "", ""]; // 9 empty cells
let currentPlayer = "X"; // X starts first
let nextPlayer = "O"; // other player
let opponent = document.getElementById(select); // set opponent
let resetButton = document.querySelector('button'); // resetting board 

function myOpponent() { // dropdown of human or opponent option and once selected, starts game
  
}


// Testing reset board function. Want the board to reset when this button is clicked
resetButton.addEventListener("click",  )
  console.log('Button was clicked')


function displayBoard() {
    console.log(board[0], board[1], board [2]);
    console.log(board[3], board[4], board [5]);
    console.log(board[6], board[7], board [8]);
}

function checkWinner() { // funtion to check for winning combos
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