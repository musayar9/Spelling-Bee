"use client";

import { createContext, useContext } from "react";
import  english  from "../../public/dictionaries/english.js";
import  turkish  from "../../public/dictionaries/turkish.js";
const GameContext = createContext();

const GameProvider = ({ children }) => {
  let englishDictionary = english;
  let turkishDictionary = turkish;
//   console.log("english", englishDictionary);
//   console.log("turkish", turkishDictionary);

  return <GameContext.Provider value={{
  englishDictionary, turkishDictionary
  
  }}>{children}</GameContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(GameContext);
};

export default GameProvider;
