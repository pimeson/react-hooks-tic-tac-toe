import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Row from './Row';

const StyledBoard = styled('div')`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 300px;
`

const Board = ({ board = [], setWinner }) => {

  useEffect(() => {
    // Row Winners
    for (const row of board) {
      if ((row[0] !== 0) && row.filter((x) => x === row[0]).length === 3) { 
        setWinner(row[0])
        break
      }
    }
    // Column Winners
    for (let x = 0; x < 3; x++) {
      if (board[0][x] !== 0) {
        if (board[0][x] === board[1][x] && board[0][x] === board[2][x]) {
          setWinner(board[0][x])
          break
        }
      }
    }
    // Diagonal Winners
    if (board[0][0] !== 0) {
      if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) setWinner(board[0][0])
    }

    if (board[2][0] !== 0) {
      if (board[2][0] === board[1][1] && board[2][0] === board[0][2]) setWinner(board[2][0])
    }
  }, [board])

  return (
    <StyledBoard>
      {
        board.map((row, i) => (<Row row={row} key={i} y={i}/>))
      }
    </StyledBoard>
  )
}

export default Board;