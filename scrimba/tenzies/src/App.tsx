import { useEffect, useState } from "react";
import Die from "./components/Die";
import Dice from "./types/Types";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";
function App() {
  const [dices, setDices] = useState<Dice[]>(allNewDice);
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    if (
      dices.filter((e) => e.isHeld == true && dices[0].value == e.value)
        .length == 10
    ) {
      setTenzies(true);
    }
  }, [dices]);

  function hold(id: string) {
    setDices(dices.map((e) => (e.id == id ? { ...e, isHeld: !e.isHeld! } : e)));
  }

  function updateDices() {
    setDices(
      dices.map((e) =>
        e.isHeld == true
          ? e
          : { ...e, value: (e.value = Math.floor(Math.random() * 6)) },
      ),
    );
  }

  function allNewDice() {
    const res: Dice[] = [];
    for (let i = 0; i < 10; i++) {
      res.push({
        id: nanoid(),
        value: Math.floor(Math.random() * 6),
        isHeld: false,
      } as Dice);
    }
    return res;
  }

  function newGame() {
    setTenzies(false);
    setDices(allNewDice());
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dies">
        {dices.map((e) => (
          <Die
            value={e.value}
            isHeld={e.isHeld}
            key={e.id}
            diceId={e.id}
            holdIt={hold}
          ></Die>
        ))}
      </div>
      <button
        className="btn"
        onClick={tenzies ? () => newGame() : () => updateDices()}
      >
        {tenzies ? "New game" : "Roll"}
      </button>
      {tenzies ? <ReactConfetti /> : <></>}
    </main>
  );
}

export default App;
