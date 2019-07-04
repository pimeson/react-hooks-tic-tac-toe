import React from 'react';
import { AppContext } from '../App'
import styled from '@emotion/styled'

const squareContents = (square) => {
  switch (square) {
    case 1: return 'O'
    case 2: return 'X'
    default: return ' '
  }
}

const Square = ({ square, x, y }) => {
  return (
    <AppContext.Consumer>
      {
        ([ state, dispatch ]) => (
          <StyledSquare
            square={square}
            turn={state.turn}
            winner={state.winner}
            onClick={() => square === 0 && dispatch({type: 'PLAYER_TURN', coord: [ x, y ]})}
          >
            {squareContents(square)}
          </StyledSquare>
        )
      }
    </AppContext.Consumer>
  )
}

const StyledSquare = styled('span')`
  background: ${ ({ square }) => {
    switch(square) {
      case 1: return 'royalblue'
      case 2: return 'coral'
      default: return 'white'
    }
  } };
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  cursor: ${ ({ winner, square }) => (winner || square !==0) ? 'not-allowed' : 'pointer' }
`

export default Square