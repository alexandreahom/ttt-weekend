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
const resetBtn = document.querySelector('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('.board').addEventListener('click', handleClick)
resetBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
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
} else if (square === null){
  squareEls[index].textContent = ''
  }
})

if(winner === null) {
  if (turn === 1) {
    messageEl.textContent = "It is player X's turn"
  } else if (turn === -1) {
    messageEl.textContent = "It is player O's turn"
  }
} else if (winner === 'T') {
  messageEl.textContent = "It's a tie! Go again"
} else {
  messageEl.textContent = `Congratulations! Player ${winner} wins!!`
}
}



function handleClick(evt) {
  let sqIdx = parseInt(evt.target.id.replace('sq', ''))
  if (board[sqIdx] !== null) {
    return
  } else if (winner !== null) {
    return
  } else {
    board[sqIdx] = turn
  }
  turn *= -1
  getWinner()
  render()
}

function getWinner() {
  let sum
  for (let i = 0; i < winningCombos.length; i++){
    sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] 
    if (sum === 3){
      winner = 1
      return
    } else if (sum === -3){
      winner = -1
      return
    } else if (board.includes(null) === false){
    winner =  'T'
    return
    } else {
    winner = null
    }
    
    
  } 
} 