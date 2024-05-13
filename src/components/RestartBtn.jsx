"use client";
import { useGlobalContext } from "@/context/Context";
const RestartBtn = () => {
  const { handleRestart } = useGlobalContext();

  return (
    <div className=" flex items-center justify-center">
      <button
        className="mt-5  px-4 py-2  bg-rose-950 rounded-md text-white"
        onClick={handleRestart}
      >
        Reset Game
      </button>
    </div>
  );
};

export default RestartBtn;
