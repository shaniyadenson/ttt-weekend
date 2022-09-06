/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
  
]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/
const form = document.querySelector("form")
const squareEls = document.querySelector(".boardSquare")
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#reset-button")
//console.log(squareEls);
//console.log(messageEl);

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('section.board').addEventListener('click', handleClick)
form.addEventListener('reset', init)

/*-------------------------------- Functions --------------------------------*/
init()


function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null

render()
}




function handleClick(evt) {
const sqIdx = parseInt(evt.target.id)

if (board[sqIdx] !== 'null') return;
// if (board[sqIdx] !== null) {
//   return
// } else if (winner !== null) {
//   return
// } 
board[sqIdx] = turn
turn = turn * (-1)
getWinner()
render()

}

function render () {
  board.forEach(function(square) { 
    if (square === null) {
      squareEls.textContent = ''
      } else if (square === 1) {
        squareEls.textContent = 'X'
      } else if (square === -1) {
        squareEls.textContent = 'O'
      }
  
  })

  if (winner === null) {
    messageEl.textContent = `It's Player ${turn}'s turn!`
    } else if (winner === 'T') {
    messageEl.textContent = "It is a tie!"
    } else if (winner === 1) {
    messageEl.textContent = `Player ${winner} has won!`
    } else if (winner === -1) {
    messageEl.textContent = `Player ${winner} has won!`
    }


}
  


function getWinner() {
  winningCombos.forEach(combo => {
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
      winner = turn
    } else if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === -3) {
      winner = turn
    } else if (!board.includes(null)) {
      winner = "T"
    } else {
      return null
    }
  })

}
