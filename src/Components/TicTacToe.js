import React from 'react';
import styled from '@emotion/styled';
import Board from './Board'
import currentPlayer from '../Helpers/currentPlayer'
import { MAX_NUMBER_OF_TURNS } from '../constants'

const StyledTicTacToe = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  .current-player {
    text-transform: uppercase;
    color: ${ ({ turn }) => currentPlayer(turn) === 1 ? 'royalblue' : 'coral' }
  };
  .winner-title {
    color: #00E676;
  }
  .draw {
    color: red;
  }
  height: 100vh;
  justify-content: space-evenly;
`
const TicTacToe = ({turn, winner, board, dispatch}) => (
  <StyledTicTacToe turn={turn}>
    <h1> TICKY TACKY TOE ! </h1>
    {
      !winner && turn !== MAX_NUMBER_OF_TURNS &&
      <>
        <h1>Turn {turn}</h1>
        <h4 className='current-player' >Current Player: {currentPlayer(turn)} </h4>
      </>
    }
    {
      !winner && turn === MAX_NUMBER_OF_TURNS && <h2 className='draw'>CATS GAME</h2>
    }
    {winner && <h2 className='winner-title'>{`Player ${winner} has won the game! Congratulations!`}</h2>}
    <Board board={board} setWinner={(winner) => dispatch({ type: 'SET_WINNER', winner })}/>
    <button onClick={() => dispatch({ type: 'RESET_BOARD' })}>Reset Board</button>
  </StyledTicTacToe>
)

export default TicTacToe