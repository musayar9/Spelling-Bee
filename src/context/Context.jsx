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
  const [isInput, setIsInput] = useState(false)
useEffect(() => {
  if (isLetter && timer > 0) {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    // Temizlik fonksiyonunu döndürerek, bileşenin unmount edildiğinde zamanlayıcıyı durdurur
    return () => clearInterval(interval);
  } else if (timer === 0) {
   setIsInput(true)
  }
}, [isLetter, timer, setTimer]);


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
        isInput
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
