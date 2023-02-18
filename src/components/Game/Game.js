import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [inputText, setInputText] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(false);

  React.useEffect(() => {
    console.log(guesses);
  }, [guesses]);

  const numberOfGuesses = guesses.length;
  const canAddNewGuess =
    numberOfGuesses < NUM_OF_GUESSES_ALLOWED && !hasWon;

  const handleInputChange = (event) => {
    const currentValue = event.target.value;
    setInputText(currentValue.toUpperCase());
  };

  const clearInputText = () => setInputText('');

  const addGuess = () => {
    canAddNewGuess && setGuesses((prev) => [...prev, inputText]);
    inputText === answer && setHasWon(true);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <Form
        inputText={inputText}
        clearInputText={clearInputText}
        handleInputChange={handleInputChange}
        addGuess={addGuess}
        canAddNewGuess={canAddNewGuess}
      />
      <Banner
        hasWon={hasWon}
        numberOfGuesses={numberOfGuesses}
        answer={answer}
      />
    </>
  );
}

export default Game;
