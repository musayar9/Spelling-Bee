"use client";
import { useGlobalContext } from "@/context/Context";
const RestartBtn = ({ language }) => {
  const { handleRestart } = useGlobalContext();

  return (
    <button
      className="rounded-full  px-6 py-3  bg-rose-500  duration-150
         ease-in-out  text-sm text-white     shadow-lg shadow-rose-500/50  bg-gradient-to-r from-rose-400 via-rose-500
            to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300"
      onClick={handleRestart}
    >
      {language === "turkish" ? "Tekrar Oyna" : "Play Again"}
    </button>
  );
};

export default RestartBtn;
