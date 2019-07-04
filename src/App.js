import React, { useReducer, createContext } from 'react';
import './App.css';
import TicTacToe from './Components/TicTacToe'
import { INITIAL_BOARD, INITIAL_TURN } from './constants'
import playerTurn from './Helpers/playerTurn'
import currentPlayer from './Helpers/currentPlayer'

export const AppContext = createContext({
  turn: INITIAL_TURN,
  board: INITIAL_BOARD,
  setBoard: (board) => board
})

const initialState = {
  board: INITIAL_BOARD,
  turn: INITIAL_TURN,
  winner: null,
}

const reducer = (state, action) => {
  console.log(state, action)

  switch (action.type) {
    case 'PLAYER_TURN':
      if (state.winner) {
        return state
      }
      return {
        ...state,
        board: playerTurn(currentPlayer(state.turn), action.coord, state.board),
        turn: state.turn + 1,
      }
    case 'RESET_BOARD':
      return initialState
    case 'SET_WINNER':
      return {
        ...state,
        winner: action.winner,
      }
    default:
      return state
  }
}

const App = () => {
  return (
    <AppContext.Provider 
      value={useReducer(reducer, initialState)}
    >
      <AppContext.Consumer>
        {
          ([props, dispatch]) => <TicTacToe {...props} dispatch={dispatch} />
        }
      </AppContext.Consumer>
  </AppContext.Provider>
)}

export default App;
