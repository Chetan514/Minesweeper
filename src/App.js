import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import GameHeader from './components/GameHeader/GameHeader';
import GameToolBar from './components/GameToolBar/GameToolBar';

function App() {
  return (
    <div className="App">
      <GameHeader/>
      <GameToolBar />
      <GameBoard />
    </div>
  );
}

export default App;
