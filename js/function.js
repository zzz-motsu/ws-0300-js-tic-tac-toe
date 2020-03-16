
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

function checkRow({ cells }, value, index) {
  let cursor = index
  let baseIndex = index - (index % 3)
  for (let i = baseIndex; i < baseIndex + 3; i++) {
    if (cells[i] !== value) {
      return false
    }
  }
  return true
}

function checkCol({ cells }, value, index) {
  let cursor = index
  for (let i = 0; i < 3; i++) {
    if (cells[cursor] !== value) {
      return false
    }
    cursor = (cursor + 3) % 9
  }
  return true
}

function checkDiagonal({ cells }, value, index) {
  if(![0, 2, 4, 6, 8].includes(index)) {
    return false
  }
  return [0, 4, 8].every(item => cells[item] === value) || [2, 4, 6].every(item => cells[item] === value)
}

function checkWinner(context, value, index) {
  return [checkRow, checkCol, checkDiagonal].some(cb => cb(context, value, index))
}

function onClickCell(e) {
  const { cells, progress, isCircleTurn, stateMessageElement } = context
  const index = Number(e.target.getAttribute('data-key')) - 1
  if (cells[index] || !progress) {
    return
  }

  const value = isCircleTurn ? CHARACTERS.circle : CHARACTERS.cross
  e.target.innerHTML = value
  cells[index] = value

  if (checkWinner(context, value, index)) {
    context.progress = false
    const message = isCircleTurn ? STATUSES.win.replace('%name%', CHARACTERS.circle) : STATUSES.win.replace('%name%', CHARACTERS.cross)
    stateMessageElement.innerHTML = message
  } else {
    toggleTurn(context)
    context.isCircleTurn = !context.isCircleTurn
  }

  context.handCount++
  if (context.handCount === 9) {
    context.progress = false
    stateMessageElement.innerHTML = STATUSES.draw
  }
}

function subscribe() {
  context.cellElements.forEach(item => {
    item.addEventListener('click', onClickCell)
  })
  context.restartButtonElement.addEventListener('click', () => location.reload())
}

subscribe()
