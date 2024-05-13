"use client";
import { useGlobalContext } from "@/context/Context";
const RestartBtn = () => {
  const { handleRestart } = useGlobalContext();

  return (

      <button
        className="  px-4 py-2  bg-rose-950 hover:bg-rose-800 duration-150
         ease-in-out rounded-sm text-sm text-white"
        onClick={handleRestart}
      >
        Reset Game
      </button>

  );
};

export default RestartBtn;
