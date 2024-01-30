import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameForm from "../GameForm";
import Guesses from "../Guesses";
import Lose from "../Lose/Lose";
import Win from "../Win/Win";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [win, setWin] = React.useState(false);

  function handleSubmitGuesses(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <p>{count === 6 && <Lose answer={answer} />}</p>
      <p>{win === true && <Win count={count} />}</p>
      <Guesses guesses={guesses} answer={answer} />
      <GameForm
        handleSubmitGuesses={handleSubmitGuesses}
        count={count}
        setCount={setCount}
        setWin={setWin}
        win={win}
        answer={answer}
      />
    </>
  );
}

export default Game;
