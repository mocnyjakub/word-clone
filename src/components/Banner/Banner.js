import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

const Banner = ({ hasWon, numberOfGuesses, answer }) => {
  const happyBanner = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{numberOfGuesses} guesses</strong>.
      </p>
    </div>
  );

  const sadBanner = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  if (hasWon) return happyBanner;
  if (numberOfGuesses === NUM_OF_GUESSES_ALLOWED) return sadBanner;
  return null;
};

export default Banner;
