import { ChangeEvent, useEffect, useState } from "react";

export default function StarWars() {
  const [starWars, setStarWars] = useState({});
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${input}`)
      .then((res) => res.json())
      .then((data) => setStarWars(data));
    console.log("rendered");
  }, [input]);

  function handleit(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  return (
    <div>
      <pre>{JSON.stringify(starWars, null, 2)}</pre>
      <input type="text" onChange={handleit} value={input} />

      <p>{input}</p>
    </div>
  );
}
