"use client";

import { useRef, useState } from "react";

export default function Game({ language, dictionary }) {
  // console.log("dictionary", dictionary.letters);
  const [words, setWords] = useState([]);
  const [newValue, setNewValue] = useState("");
  let lettersShuffle = dictionary.letters
  const ref = useRef();
  const handleClick = (e) => {
    const clickedElement = e.target.closest("li"); // Tıklanan li öğesini bulun
    const content = clickedElement.querySelector("p").textContent; // Li öğesinin içindeki p etiketinin içeriğini alın
    console.log("Tıklanan içerik:", content);

    setWords([...words, content]);
  };

  function handleShowText() {
    let newData = words.join("");
    setNewValue(newData);
  }
  console.log(newValue !== null && newValue);
  
  const handleDelete = ()=>{
  setNewValue("")
  setWords([])
  
  }
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

        <button onClick={handleShowText}>show text</button>
        <button onClick={handleDelete}>delete text</button>
      </div>
    </>
  );
}
