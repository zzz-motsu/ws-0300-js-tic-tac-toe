
// 状態
const context = {
  handCount: 0,
  isCircleTurn: true,
  progress: true,
  cells: new Array(9),
  cellElements: document.querySelectorAll('.js-cell'),
  circleElement: document.querySelector('.turn-item.circle'),
  crossElement: document.querySelector('.turn-item.cross'),
  stateMessageElement: document.querySelector('.js-state-message'),
  restartButtonElement: document.querySelector('.js-restart')
}

const STATUSES = {
  stating: 'starting...',
  win: '%name% win!!',
  draw: 'draw'
}

const ACTIVE_CLASSNAME = 'active'
const CHARACTERS = {
  circle: '○',
  cross: '×'
}

const WINNING_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// 関数
function toggleTurn({ isCircleTurn, circleElement, crossElement }) {
  if(isCircleTurn) {
    circleElement.classList.remove(ACTIVE_CLASSNAME)
    crossElement.classList.add(ACTIVE_CLASSNAME)
  } else {
    circleElement.classList.add(ACTIVE_CLASSNAME)
    crossElement.classList.remove(ACTIVE_CLASSNAME)
  }
}

function checkWinner(context) {
  return WINNING_PATTERNS.some(pattern => {
    const { cells } = context
    const first = cells[pattern[0]]
    const second = cells[pattern[1]]
    const third = cells[pattern[2]]
    return first && first === second && first === third
  })
}

function onClickCell(e) {
  const { cells, progress, isCircleTurn, stateMessageElement } = context
  const index = Number(e.target.getAttribute('data-key')) - 1
  // ○×を書き込めるかチェック
  if (cells[index] || !progress) {
    return
  }

  // ○×を記入
  const value = isCircleTurn ? CHARACTERS.circle : CHARACTERS.cross
  e.target.innerHTML = value
  cells[index] = value

  // どちらかが勝ったケース
  if (checkWinner(context, value, index)) {
    context.progress = false
    const message = isCircleTurn ? STATUSES.win.replace('%name%', CHARACTERS.circle) : STATUSES.win.replace('%name%', CHARACTERS.cross)
    stateMessageElement.innerHTML = message
    return
  }

  // ドローのケース
  context.handCount++
  if (context.handCount === 9) {
    context.progress = false
    stateMessageElement.innerHTML = STATUSES.draw
    return
  }

  toggleTurn(context)
  context.isCircleTurn = !context.isCircleTurn
}

function subscribe() {
  context.cellElements.forEach(item => {
    item.addEventListener('click', onClickCell)
  })
  context.restartButtonElement.addEventListener('click', () => location.reload())
}

subscribe()
