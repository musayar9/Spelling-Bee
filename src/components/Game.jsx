"use client";
import { useGlobalContext } from "@/context/Context";
import { useEffect, useRef, useState } from "react";
import { formattedTime } from "./Funtcions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdClose } from "react-icons/md";
import RestartBtn from "./RestartBtn";
import Timer from "./Timer";
import WordsTable from "./WordsTable";
import Point from "./Point";
export default function Game({ language, dictionary }) {

  const {
    point,
    setPoint,
    isLetter,
    setIsLetter,
    timer,
    isInput,
    setTimer,
    show,
    setShow,
    words,
    setWords,
    filterWords,
    setFilterWords,
    isCorrect,
    setIsCorrect,
    isCorrectPoint,
    setIsCorrectPoint,
    matchWords,
    setMatchWords,
    inCorrectWord,
    setInCorrectWord,
  } = useGlobalContext();

  // const [words, setWords] = useState("");
  // const [newValue, setNewValue] = useState("");
  // const [filterWords, setFilterWords] = useState("");
  // const [isCorrect, setIsCorrect] = useState(false);
  // const [isCorrectPoint, setIsCorrectPoint] = useState(null);
  // const [matchWords, setMatchWords] = useState([]);

  // const [inCorrectWord, setInCorrectWord] = useState(0);
  let lettersShuffle = dictionary.letters;
  const ref = useRef();
  const handleClick = (e) => {
    const clickedElement = e.target.closest("li");
    const content = clickedElement.querySelector("p").textContent;

    setWords([...words, content]);
  };

  function handleShowText(e) {
    e.preventDefault();
    // let newData = words.join("");
    const filter = dictionary.possible_words.find((word, index) => {
      //  console.log(word);
      return word === words;
    });
    setFilterWords(filter);

    if (filter !== undefined) {
      if (!matchWords.includes(filter)) {
        setMatchWords([...matchWords, filter]);
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
        setIsCorrect(true);
        setIsCorrectPoint(true);
        toast.success(`Success Your Found Words`);

        setWords("");
        lettersShuffle = dictionary.letters.sort(() => Math.random() - 0.5);
      } else {
        console.log("bu kelşme");
        toast.error(`Bu kelime Bulundu`);
      }

      setTimer((prev) => (prev += 15));

      setTimeout(() => {
        setIsCorrect(false);
      }, [1500]);
    } else {
      if (filter === undefined) {
        setPoint((prev) => (prev -= 2));
        setInCorrectWord((prev) => (prev += 1));
        setIsCorrectPoint(false);
        toast.error(`Words not found`);
      }
    }

    let timeout = setTimeout(() => {
      setIsCorrectPoint(null);
    }, 1500);

    return () => clearTimeout(timeout);
  }



  return (
    <div className="mx-auto max-w-8xl my-6">
      <div className="flex max-w-xl mx-auto items-center justify-between  p-4">
        <Timer />
        <WordsTable />

        <Point />
      </div>

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
        <form onSubmit={handleShowText}>
          <input
            type="text"
            className="border border-slate-300  p-2  rounded-s-lg text-center outline-yellow-400 "
            value={words}
            disabled={isInput}
            placeholder="Enter Words"
            onChange={(e) => {
              setWords(e.target.value);

              if (e.target.value) {
                setIsLetter(true);
              }
            }}
          />

          <button
            type="submit"
            disabled={isInput}
            className="rounded-e-lg  bg-amber-400 p-2 text-gray-900 font-bold hover:bg-amber-500 duration-150 ease-in-out"
          >
            Check
          </button>
        </form>

        {timer === 0 && (
          <div className="mt-4 flex items-center justify-center">
            {" "}
            <RestartBtn />
          </div>
        )}
      </div>
      <button onClick={() => setShow(true)}>Show Modak</button>

      {/* Show Results=  */}
      {show && (
        <>
          <div className=" fixed  z-50 inset-0 bg-black bg-opacity-75 flex justify-center items-center w-full  ">
            <div className=" absolute top-20 p-8 w-full max-w-xl max-h-full bg-white rounded-lg">
              {/* Modal content */}
              <div className="relative     ">
                <div className="flex items-center ">
                  <p className="text-2xl mx-auto  pl-4">Your Score</p>
                  <button
                    onClick={() => setShow(false)}
                    type="button"
                    className="absolute -top-2  right-1  hover:text-red-800 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                  >
                    <MdClose size={28} />
                  </button>
                </div>

                <div className="mt-4 ">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between border-b border-slate-300 p-3 text-sm">
                      <span className="">Correct Word Count</span>
                      <span>
                        <span className="text-emerald-600 pr-1">
                          {" "}
                          {matchWords && matchWords.length}
                        </span>
                        || ({dictionary.possible_words.length})
                      </span>
                    </li>

                    <li className="flex items-center justify-between border-b border-slate-300 p-3 text-sm">
                      <span className="">InCorrect Word Count</span>
                      <span>
                        <span className="text-red-600 pr-1">
                          {" "}
                          {inCorrectWord}
                        </span>
                        || ({dictionary.possible_words.length})
                      </span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-300 p-3 text-sm">
                      <span className="">Earned Second</span>
                      <span>{matchWords.length * 15} sec.</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-300 p-3 text-sm">
                      <span className="">Loser Second</span>
                      <span>{inCorrectWord * 2} sec.</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-center space-x-4 mt-5 text-sm">
                    <p className="text-2xl font-semibold">
                      Total Point = <span className="font-bold text-3xl text-amber-500">
                      {point}
                    </span>
                    </p>
               
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-end">
                  {" "}
                  <RestartBtn />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <ToastContainer
        autoClose={1400}
        pauseOnFocusLoss={true}
        pauseOnHover={false}
        position="top-center"
      />
    </div>
  );
}
