/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelector(".boardSquare")
const messageEl = document.querySelector("#message")
console.log(squareEls);
console.log(messageEl);

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  turn = 1
  winner = null

render()
}

// function render() {

// board.forEach((squareEls, idx) => console.log(squareEls))


// }

