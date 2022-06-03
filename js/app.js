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

const squareEls = document.querySelectorAll(".squares")
const messageEl = document.querySelector("#message")

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(function(square) {
  square.addEventListener('click', handleClick)
})

/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  board = [1, null, null, null, null, null, null, null, null]
  turn = 1 
  winner = null
  render()
}

function render() {
  board.forEach(function(square, index) {
if (square === 1) {
  squareEls[index].textContent = 'X'
} else if (square === -1) {
  squareEls[index].textContent = 'O'
} 
  })

  if(winner === null){
   messageEl.textContent = `Keep going!! It's ${''}'s turn`
} else if (winner === 'T') {
  messageEl.textContent = `It's a tie`
} else {
  messageEl.textContent = `Congratulations!! Player ${winner} wins!!`
}
}

function handleClick(evt){
  const sqIdx = parseInt(evt.target.id.slice(2))
  console.log(sqIdx)
  if (board[sqIdx] !== null){
    messageEl.textContent = 'This square has been taken! Choose a different one!'
  } else if (winner !== null){
    messageEl.textContent = 'Game Over! Go again!'
  } else { 
    board[sqIdx] = turn
    turn *= -1
    getWinner()
    render()
  }
}