"use client";

import { useGlobalContext } from "@/context/Context";
const Point = ({ language }) => {
  const { point, isCorrectPoint, filterWords } = useGlobalContext();

  return (
    <div className="bg-sky-600 rounded-full px-6 py-2 text-white font-bold relative text-center">
      <span className="text-sm space-x-2">
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
                { <span>-2</span>}
              </span>
            </span>
          </p>
        )}
      </>
    </div>
  );
};

export default Point;
