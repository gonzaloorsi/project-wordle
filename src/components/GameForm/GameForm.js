import React from "react";

function GameForm({
  handleSubmitGuesses,
  count,
  setCount,
  setWin,
  win,
  answer,
}) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(answer);
    console.log(tentativeGuess);
    console.log(answer === tentativeGuess);

    if (tentativeGuess.length != 5) {
      window.alert("Please enter exactly 5 characters. 💖 ");
      return;
    }

    console.log({ tentativeGuess });
    handleSubmitGuesses(tentativeGuess);

    if (tentativeGuess === answer) {
      setWin(true);
    }

    setTentativeGuess("");
    setCount(count + 1);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        minLength={5}
        maxLength={5}
        disabled={count === 6 || win == true}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
        required
      />
    </form>
  );
}

export default GameForm;
