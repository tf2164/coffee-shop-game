import React, { useState } from 'react';

function DifficultySelector({ onChangeDifficulty }) {
  const [difficulty, setDifficulty] = useState('easy');

  const handleChange = (event) => {
    const selectedDifficulty = event.target.value;
    setDifficulty(selectedDifficulty);
    onChangeDifficulty(selectedDifficulty);
  };

  return (
    <div>
      <h3>Choose AI Difficulty:</h3>
      <label>
        <input
          type="radio"
          value="easy"
          checked={difficulty === 'easy'}
          onChange={handleChange}
        />
        Easy (Random Move)
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="hard"
          checked={difficulty === 'hard'}
          onChange={handleChange}
        />
        Hard (Minimax)
      </label>
    </div>
  );
}

export default DifficultySelector;
