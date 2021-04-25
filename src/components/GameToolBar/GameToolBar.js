import React from 'react';
import { GameLevel } from './GameLevel/GameLevel'
import { Flag } from './Flag/Flag'
import Timer from './Timer/Timer';
import './GameToolBar.css';

const GameToolBar = () => {
  return (
    <div className="gameToolbar">
      <GameLevel />
      <div className="gameToolbar-mid">
        <Flag />
        <Timer />
      </div>
      <span className="gameToolbar-icons" role="img" aria-label="images">
        🔈
        ⚙
        ❌
        </span>
    </div>
  );
};

export default GameToolBar;
