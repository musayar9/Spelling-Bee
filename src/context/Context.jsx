"use client";

import { createContext, useContext, useEffect, useState } from "react";
import english from "../../public/dictionaries/english.js";
import turkish from "../../public/dictionaries/turkish.js";
import { usePathname } from "next/navigation";
const GameContext = createContext();

const GameProvider = ({ children }) => {
  /*variables was created to use English and Turkish dictionaries. */
  let englishDictionary = english;
  let turkishDictionary = turkish;

  /*The states to be used for the components were also defined */
  const [point, setPoint] = useState(0);
  const [timer, setTimer] = useState(60);
  const [isLetter, setIsLetter] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [show, setShow] = useState(false);
  const [words, setWords] = useState("");
  const [know, setKnow] = useState(false);
  const [filterWords, setFilterWords] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isCorrectPoint, setIsCorrectPoint] = useState(null);
  const [matchWords, setMatchWords] = useState([]);
  const [restartBtn, setRestartBtn] = useState(false);
  const [inCorrectWord, setInCorrectWord] = useState(0);
  const [keyValue, setKeyValue] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    /*If you are on the home page, all data will be cleared. */
    if (pathname === "/") {
      setShow(false);
      setMatchWords([]);
      setInCorrectWord(0);
      setPoint(0);
      setTimer(60);
      setIsLetter(false);
      setWords("");
      setIsInput(false);
    }

    /*time and input controls */
    if (isLetter && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsInput(true);
      setShow(true);
      setRestartBtn(true);
      setIsLetter(false);
    }
  }, [isLetter, timer, setTimer, pathname]);

  /*game reset button */
  const handleRestart = () => {
    setShow(false);
    setMatchWords([]);
    setInCorrectWord(0);
    setPoint(0);
    setTimer(60);
    setIsLetter(false);
    setWords("");
    setIsInput(false);
  };

  return (
    /*area where data is transferred to subcomponents */
    <GameContext.Provider
      value={{
        englishDictionary,
        turkishDictionary,
        point,
        setPoint,
        timer,
        setTimer,
        isLetter,
        setIsLetter,
        isInput,
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
        handleRestart,
        setRestartBtn,
        know,
        setKnow,
        keyValue,
        setKeyValue,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

/*created a custom hook */
export const useGlobalContext = () => {
  return useContext(GameContext);
};

export default GameProvider;
