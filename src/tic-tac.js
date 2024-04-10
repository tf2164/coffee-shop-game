import React, { useState, useEffect } from 'react';
import './styling/App.css';
import DifficultySelector from './javascript/difficulty'
import makeAIMove from './javascript/AI-moves';
import beanyTacImage from '../src/images/beany-tac.png';
import sugarTacImage from '../src/images/sugar.png';

const playerImages = {
  bean: <img src={beanyTacImage} alt="bean" className="player-image1"/>,
  sugar: <img src={sugarTacImage} alt="sugar" className="player-image2"/>,
};


function makeRandomMove(squares) {
  // Implement logic to select a random empty square and return its index
  const emptySquares = squares.map((square, index) => (square === null ? index : null)).filter((index) => index !== null);
  if (emptySquares.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    return emptySquares[randomIndex];
  }
  return null;
}

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return "bean" or "sugar" instead of squares[a]
    }
  }

  return null;
}


function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [difficulty, setDifficulty] = useState('easy'); // Track selected difficulty

  useEffect(() => {
    // Check if it's the AI's turn
    if (!xIsNext) {
      if (difficulty === 'easy') {
        // Easy: Random move
        const aiMove = makeRandomMove(board);
        handleAIClick(aiMove);
      } else {
        // Hard: Implement Minimax or other AI logic here
        const aiMove = makeAIMove(board, xIsNext, calculateWinner); // Pass xIsNext and calculateWinner
        handleAIClick(aiMove);
      }
    }
  }, [xIsNext, board, difficulty]);

  const handleClick = (i) => {
    if (xIsNext) {
      handlePlayerClick(i);
    }
  };

  const handlePlayerClick = (i) => {
    const squares = [...board];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = playerImages.bean; // Use the playerImages object
    setBoard(squares);
    setXIsNext(false);
  };  

  const handleAIClick = (i) => {
    const squares = [...board];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = playerImages.sugar;
    setBoard(squares);
    setXIsNext(true);
  };

  const renderSquare = (i) => (
    <button className="square" onClick={() => handleClick(i)}>
      {board[i]}
    </button>
  );

  const winner = calculateWinner(board);
  const status = winner
  ? (
    <div>
      Winner: {calculateWinner ? playerImages.bean : playerImages.sugar}
    </div>
  )
  : (
    <div className='playerNext'>
      Next player: {xIsNext ? playerImages.bean : playerImages.sugar}
     <span></span>

    </div>
  );

  const handleDifficultyChange = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    // Reset the game when difficulty changes if the game is not over
    if (!calculateWinner(board)) {
      setBoard(Array(9).fill(null));
      setXIsNext(true);
    }
  };

  const handleStartOver = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="App">
      <div className="board-container">
     
        <div className="status">{status}</div>
        <div className="board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
      <div className="options">
        <DifficultySelector onChangeDifficulty={handleDifficultyChange} />
        <button className="start-over-button" onClick={handleStartOver}>
          Start Over
        </button>
      </div>
    </div>
  );


}

export default Game;
