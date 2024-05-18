"use client";

import { useGlobalContext } from "@/context/Context";
import Game from "./Game";

/*English Game area */

const EnglishGame = () => {


  const { englishDictionary } = useGlobalContext();

  return (
    <>
      <Game language={"english"} dictionary={englishDictionary} />
    </>
  );
};

export default EnglishGame;
