"use client";

import { useGlobalContext } from "@/context/Context";
import Game from "./Game";

const TurkishGame = () => {
  const { turkishDictionary } = useGlobalContext();

  return (
    <>
      <Game language={"turkish"} dictionary={turkishDictionary} />
    </>
  );
};

export default TurkishGame;
