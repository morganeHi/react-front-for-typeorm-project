import React, { useState } from 'react';

const GuessGame = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
  };

  return (
    <div>
      <h2>Guess the Number Game</h2>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
};

export default GuessGame;