function playground() {
  const nums: number[] = [1, 2, 3, 4, 5];
  let res: number[] = [];
  res = nums.map((e: number) => e * 2);
  console.log(res);
}

function playground2() {
  const names: string[] = ["alice", "bob", "charlie", "danielle"];
  console.log(names.map((e: string) => e[0].toUpperCase() + e.substring(1)));
}

function playground3() {
  const pokemon: string[] = ["Bulbasaur", "Charmander", "Squirtle"];
  return pokemon.map((e: string) => <p>{e}</p>);
}

export function Card() {
  return (
    <section className="card-section">
      {playground3()}
      <img src="src/assets/val.jpg" alt="" className="card-image" />
      <div className="card-stats">
        <img className="card-stats-image" src="src/assets/star.png" alt="" />
        <span>5.0</span>
        <span className="text-gray">(6) •</span>
        <span className="text-gray">USA</span>
      </div>
      <h2>Life Lessons with Valeria</h2>
      <p>
        <span>From 145€</span> / Person
      </p>
    </section>
  );
}
