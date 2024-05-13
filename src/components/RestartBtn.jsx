"use client";
import { useGlobalContext } from "@/context/Context";
const RestartBtn = ({ language }) => {
  const { handleRestart } = useGlobalContext();

  return (
    <button
      className="rounded-full  px-6 py-2  bg-rose-950 hover:bg-rose-800 duration-150
         ease-in-out  text-sm text-white"
      onClick={handleRestart}
    >
      {language === "turkish" ? "Tekrar Oyna" : "Play Again"}
    </button>
  );
};

export default RestartBtn;
