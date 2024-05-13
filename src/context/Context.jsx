"use client";

import { createContext, useContext, useEffect, useState } from "react";
import english from "../../public/dictionaries/english.js";
import turkish from "../../public/dictionaries/turkish.js";
const GameContext = createContext();

const GameProvider = ({ children }) => {
  let englishDictionary = english;
  let turkishDictionary = turkish;
  //   console.log("english", englishDictionary);
  //   console.log("turkish", turkishDictionary);
  const [point, setPoint] = useState(0);
  const [timer, setTimer] = useState(60);
  const [isLetter, setIsLetter] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [show, setShow] = useState(false);

  const [words, setWords] = useState("");
  const [newValue, setNewValue] = useState("");
  const [filterWords, setFilterWords] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isCorrectPoint, setIsCorrectPoint] = useState(null);
  const [matchWords, setMatchWords] = useState([]);
  const [restartBtn, setRestartBtn] = useState(false);
  const [inCorrectWord, setInCorrectWord] = useState(0);
  useEffect(() => {
    if (isLetter && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      // Temizlik fonksiyonunu döndürerek, bileşenin unmount edildiğinde zamanlayıcıyı durdurur
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsInput(true);
      setShow(true);
      setRestartBtn(true);
      setIsLetter(false)
    }
  }, [isLetter, timer, setTimer]);

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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GameContext);
};

export default GameProvider;
