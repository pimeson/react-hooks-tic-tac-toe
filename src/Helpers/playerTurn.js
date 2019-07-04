import cloneDeep from 'lodash/cloneDeep'

const playerTurn = (player, coord, board) => {
  const [ x, y ] = coord

  if (board[y][x] !== 0) {
    return board
  }

  const newBoard = cloneDeep(board)

  newBoard[y][x] = player

  return newBoard
}

export default playerTurn