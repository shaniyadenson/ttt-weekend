/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  
]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('section > div')
const messageEl = document.querySelector("#message")
const resetBtnEl = document.querySelector("button")
//console.log(messageEl);

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square => {
  square.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', init)
/*-------------------------------- Functions --------------------------------*/
init()


function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null

render()
}




function handleClick(evt) {
  // console.log('whoo')

  let sqIdx = parseInt(evt.target.id.replace('sq', ''))
  
  if(board[sqIdx] || winner) {
    return
  }
  board[sqIdx] = turn
  turn *= -1
  winner = getWinner()
  render()

}

function render () {

  board.forEach((cell, idx) => {
    let cellLetter
    if (cell === 1) {
      cellLetter = 'X'
    } else if (cell === -1) {
      cellLetter = 'O'
    } else if (cell === null) {
      cellLetter = ''
    }
    squareEls[idx].textContent = cellLetter
  })

  if (!winner) {
    messageEl.textContent = `It is ${turn === 1 ? 'x' : 'O'}'s turn`
  } else if (winner === 'T') {
    messageEl.textContent = `Cat's game.`
  } else {
    messageEl.textContent = `Congratulations ${winner === 1 ? 'X' : 'O'}!!`
  }
}
  


function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    let sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]
    if (Math.abs(sum) === 3) return board[winningCombos[i][0]]
  }

  if (!board.includes(null)) {
    return 'T'
  } else {
    return null
  }
}
