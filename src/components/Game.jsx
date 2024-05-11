"use client";
import { useGlobalContext } from "@/context/Context";
import { useRef, useState } from "react";

export default function Game({ language, dictionary }) {
  // console.log("dictionary", dictionary.letters);
  const { point, setPoint } = useGlobalContext();

  const [words, setWords] = useState("");
  const [newValue, setNewValue] = useState("");
  const [filterWords, setFilterWords] = useState("");
  let lettersShuffle = dictionary.letters;
  const ref = useRef();
  const handleClick = (e) => {
    const clickedElement = e.target.closest("li"); // Tıklanan li öğesini bulun
    const content = clickedElement.querySelector("p").textContent; // Li öğesinin içindeki p etiketinin içeriğini alın
    // console.log("Tıklanan içerik:", content);

    setWords([...words, content]);
  };

  function handleShowText() {
    // let newData = words.join("");
    const filter = dictionary.possible_words.find((word, index) => {
      //  console.log(word);
      return word === words;
    });
    setFilterWords(filter);

    if (filter !== undefined) {
      if (filter.length === 7) {
        setPoint((prev) => (prev += filter?.length));
      } else if (words.length === 6) {
        setPoint((prev) => (prev += filter?.length));
      } else if (words.length === 5) {
        setPoint((prev) => (prev += filter?.length));
      } else if (words.length === 4) {
        setPoint((prev) => (prev += filter?.length));
      } else {
        setPoint((prev) => (prev += 1));
      }
    } else {
      console.log("data isnot found");
    }

    setNewValue();
  }
  console.log("point", point);
  const handleDelete = () => {
    setNewValue("");
    setWords("");
       setFilterWords("");
    setPoint(0);
  };
  // console.log("words", words);
  // console.log(filterWords, "filter");
  // const filter = dictionary.possible_words.filter((word, index) => {
  //   console.log(word);
  //   return word === words;
  // });
  console.log(filterWords);
  return (
    <div className="max-w-6xl mx-auto my-8 ">
      <div className="flex items-center flex-col justify-center">
        <input
          className="text-center border-b border-slate-300  w-72 p-4 outline-none"
          value={words}
          placeholder="Your Words"
          readOnly
        />

        <div className=" mt-12 gap-2">
          <ul id="hexGrid">
            {lettersShuffle.map((letter, index) => (
              <li
                key={index}
                className="hex"

                // onClick={handleClick} ref={ref}
              >
                <div className="hexIn">
                  <a className="hexLink">
                    <p>{letter}</p>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center">
        <input
          type="text"
          className="border border-slate-300  p-4  rounded-md text-center outline-yellow-400 "
          value={words}
          placeholder="Enter Words"
          onChange={(e) => {
            setWords(e.target.value);
          }}
        />

        <div className="flex items-center justify-between mt-12 w-72">
          <button
            className="rounded-md bg-red-500 px-4 py-2 text-gray-100"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            onClick={handleShowText}
            className="rounded-md bg-[#58c7f3] px-4 py-2 text-gray-100"
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
}
