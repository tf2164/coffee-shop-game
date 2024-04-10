import React from 'react';
import './styling/coffeeanimate.css'; 
import Game from './tic-tac';

function Test() {
  return (
    <main className='arrangement'>
      <div class="cup-container">
        <div class="cup">
          <div className='cap-box'>
            <div className="mug">
              <div className='foam'></div>
              <div className="handle"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="game-container">
        <Game />
      </div>
    </main>
  );
}

export default Test;
