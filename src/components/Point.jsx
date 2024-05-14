"use client";

import { useGlobalContext } from "@/context/Context";
const Point = ({ language }) => {
  const { point, isCorrectPoint, filterWords } = useGlobalContext();

  return (
    <div
      className="bg-sky-500 rounded-full px-6 py-2 text-white font-bold relative text-center    shadow-lg shadow-sky-500/50  bg-gradient-to-r from-sky-400 via-sky-500
            to-sky-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300"
    >
      <span className="text-md space-x-2">
        {language === "turkish" ? "Puan" : "Score"} : {point}
      </span>

      <>
        {isCorrectPoint === true && (
          <>
            <p className="absolute -right-3 -top-3">
              <span className="relative flex h-8 w-8">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex items-center justify-center rounded-full h-8 w-8 p-2 text-[10px] bg-emerald-500">
                  +{filterWords.length}
                </span>
              </span>
            </p>
          </>
        )}

        {isCorrectPoint === false && (
          <p className="absolute -right-3 -top-3">
            <span className="relative flex h-8 w-8">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex items-center justify-center rounded-full h-8 w-8 p-2 text-[10px] bg-red-500">
                {<span>-2</span>}
              </span>
            </span>
          </p>
        )}
      </>
    </div>
  );
};

export default Point;
