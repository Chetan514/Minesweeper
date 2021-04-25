import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import { initialState } from '../../context/reducer';

import './GameHeader.css';

const GameHeader = () => {
  const [{ isGameOver, isGameActive, isWinner }, dispatch] = useStateValue();
  const startGame = () => {
    dispatch({ type: 'START_GAME' });
  };
  const resetGame = () => {
    dispatch({ type: 'RESET_GAME', payload: initialState }); //reset game with original state
  };
  return (
    <div className="gameHeader">
      {isGameOver && (
        <span style={{color : isWinner ? 'green' : 'red'}}>
          {isWinner ? 'You won!' : 'Game is over!'}
          <span
            className="gameHeader-start-stop"
            onClick={resetGame}
          >
            Restart
          </span>
        </span>
      )}

      {!isGameOver && !isGameActive && (
        <span>
          Let's Play MineSweeper!
          <span
            className="gameHeader-start-stop"
            onClick={startGame}
          >
            Start
          </span>
        </span>
      )}
    </div>
  );
};

export default GameHeader;
