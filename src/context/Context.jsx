"use client";

import { createContext, useContext, useState } from "react";
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
  return (
    <GameContext.Provider
      value={{
        englishDictionary,
        turkishDictionary,
        point,
        setPoint,
        timer,
        setTimer,
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
