import { ChangeEvent, useEffect, useState } from "react";

interface Imeme {
  topText: string;
  bottomText: string;
  randomImage: string;
}

interface MemeData {
  url: string;
}

export default function Meme() {
  const [allMemeData, setAllMemeData] = useState<MemeData[]>([]);
  const [meme, setMeme] = useState<Imeme>({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((data) => data.json())
      .then((res) => setAllMemeData(res.data.memes));
  }, []);

  async function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeData.length);
    setMeme((prev) => {
      return { ...prev, randomImage: allMemeData[randomNumber].url };
    });
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    console.log("hi");
    const { name, value } = event.target;
    setMeme((prev) => {
      return { ...prev, [name]: [value] };
    });
    console.log(value);
  }

  return (
    <main>
      <form className="form">
        <label htmlFor="" className="form--label">
          Top Text
        </label>
        <label htmlFor="" className="form--label">
          Bottom Text
        </label>
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          onChange={handleInput}
        />
        <button
          type="button"
          className="form--button"
          onClick={() => getMemeImage()}
        >
          Get a new meme image 🖼
        </button>
        <div className="meme">
          <img
            src={meme.randomImage}
            alt="meme-image"
            className="form--image"
          />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      </form>
    </main>
  );
}
