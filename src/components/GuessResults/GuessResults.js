import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

const GuessResults = ({ guesses, answer }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <Guess guess={guesses[index]} answer={answer} key={index} />
      ))}
    </div>
  );
};

export default GuessResults;
