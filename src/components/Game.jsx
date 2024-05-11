"use client";

import { useRef, useState } from "react";

export default function Game({ language, dictionary }) {
  // console.log("dictionary", dictionary.letters);
  const [words, setWords] = useState("");

  let lettersShuffle = dictionary.letters.sort(() => Math.random() - 0.5);
  const ref = useRef();
  const handleClick = (e) => {
    const clickedElement = e.target.closest("li"); // Tıklanan li öğesini bulun
    const content = clickedElement.querySelector("p").textContent; // Li öğesinin içindeki p etiketinin içeriğini alın
    console.log("Tıklanan içerik:", content);

    setWords({ ...words, content });
  };
  console.log("words", words);
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <ul id="hexGrid">
          {lettersShuffle.map((letter, index) => (
            <li key={index} className="hex" onClick={handleClick} ref={ref}>
              <div className="hexIn">
                <a className="hexLink">
                  <p>{letter}</p>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
