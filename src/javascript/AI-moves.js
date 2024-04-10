import React from 'react';
import beanyTacImage from '../images/beany-tac.png';
import { calculateWinner } from '../tic-tac'


function makeAIMove(squares, maximizingPlayer) {
  const emptySquares = squares
    .map((square, index) => (square === null ? index : null))
    .filter((index) => index !== null);

  if (calculateWinner(squares) || emptySquares.length === 0) {
    return null; // If the game is over or no empty squares, return null
  }

  let bestMove = null;
  let bestScore = maximizingPlayer ? -Infinity : Infinity;

  for (let i = 0; i < emptySquares.length; i++) {
    const move = emptySquares[i];
    squares[move] = maximizingPlayer ? 'sugar' : 'bean';

    const score = minimax(squares, 0, false); // Call minimax with depth 0 and maximizing set to false

    squares[move] = null; // Undo the move

    if ((maximizingPlayer && score > bestScore) || (!maximizingPlayer && score < bestScore)) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
}

function minimax(squares, depth, maximizingPlayer) {
  const result = calculateWinner(squares);

  if (result !== null) {
    return result === 'sugar' ? 1 : result === 'bean' ? -1 : 0;
  }

  if (maximizingPlayer) {
    let maxScore = -Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        squares[i] = 'sugar';
        const score = minimax(squares, depth + 1, false);
        squares[i] = null;
        maxScore = Math.max(maxScore, score);
      }
    }
    return maxScore;
  } else {
    let minScore = Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        squares[i] = <div style={{ backgroundImage: `url(${beanyTacImage})` }}></div>;
        const score = minimax(squares, depth + 1, true);
        squares[i] = null;
        minScore = Math.min(minScore, score);
      }
    }
    return minScore;
  }
}

export default makeAIMove;
