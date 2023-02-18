import React from 'react';
import { NUM_OF_GUESS_LETTERS } from '../../constants';

const Form = ({
  inputText,
  clearInputText,
  handleInputChange,
  addGuess,
  canAddNewGuess,
}) => {
  const validationPattern = `[a-zA-Z]{${NUM_OF_GUESS_LETTERS}}`;

  const handleSubmit = (event) => {
    console.log(inputText);
    event.preventDefault();
    addGuess(inputText);
    clearInputText();
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        pattern={validationPattern}
        type="text"
        value={inputText}
        onChange={handleInputChange}
        disabled={!canAddNewGuess}
      />
    </form>
  );
};

export default Form;
