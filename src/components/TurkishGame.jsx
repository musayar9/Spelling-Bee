"use client";

import { useGlobalContext } from "@/context/Context";
import Game from "./Game";

/*Turkish game area */
const TurkishGame = () => {
  const { turkishDictionary } = useGlobalContext();

  return (
    <>
      <Game language={"turkish"} dictionary={turkishDictionary} />
    </>
  );
};

export default TurkishGame;
