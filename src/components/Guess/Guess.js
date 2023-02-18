import React from 'react';
import { NUM_OF_GUESS_LETTERS } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

const Guess = ({ guess = '', answer }) => {
  const letters = Array.from(guess);
  const checkedGuessLetters = checkGuess(guess, answer);
  console.log(checkedGuessLetters);

  return (
    <p className="guess">
      {range(NUM_OF_GUESS_LETTERS).map((_, index) => {
        const checkedGuessLetterStatus =
          checkedGuessLetters && checkedGuessLetters[index].status;

        const cellClassName = `cell ${checkedGuessLetterStatus}`;

        return (
          <span key={index} className={cellClassName}>
            {letters.length ? letters[index] : ''}
          </span>
        );
      })}
    </p>
  );
};

export default Guess;
