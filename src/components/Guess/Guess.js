import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const lettersStatus = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={value ? `cell ${lettersStatus[num].status}` : "cell"}
        >
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
