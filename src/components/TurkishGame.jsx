"use client";

import { useGlobalContext } from "@/context/Context";
import Game from "./Game";

const TurkishGame = () => {
  const { turkishDictionary } = useGlobalContext();
  // let trLetters = turkishDictionary.letters.sort(()=>Math.random() - 0.5)
  // let words = turkishDictionary
  // console.log(trLetters);
  return (
    <>
      <Game language={"turkish"}  dictionary={turkishDictionary} />
    </>
  );
};

export default TurkishGame;
