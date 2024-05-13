"use client";
import { useGlobalContext } from "@/context/Context";
import { useEffect, useRef, useState } from "react";
import { formattedTime } from "./Funtcions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RestartBtn from "./RestartBtn";
import Timer from "./Timer";
import WordsTable from "./WordsTable";
import Point from "./Point";
import ResultModal from "./ResultModal";
import FormArea from "./FormArea"
import LettersHive from "./LettersHive";
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
    <div className="mx-auto max-w-8xl h-[100%] my-6">
      <div className="flex max-w-xl mx-auto items-center justify-between  p-4">
        <Timer />
        <WordsTable />
        <Point />
      </div>

    <LettersHive letters={lettersShuffle}/>

      <div className="mt-6 flex flex-col items-center justify-center">
       <FormArea handleSubmit={handleShowText}/>

        {timer === 0 && (
          <div className="mt-4 flex items-center justify-center">
            {" "}
            <RestartBtn />
          </div>
        )}
      </div>
      <button onClick={() => setShow(true)}>Show Modak</button>

      <ResultModal dictionary={dictionary} />

      <ToastContainer
        autoClose={1400}
        pauseOnFocusLoss={true}
        pauseOnHover={false}
        position="top-center"
      />
    </div>
  );
}
