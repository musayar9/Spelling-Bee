import { useGlobalContext } from "@/context/Context";
import { formattedTime } from "./Funtcions";
const Timer = () => {
  const { timer, isCorrect } = useGlobalContext();

  return (
    <div className="text-lg w-28 bg-emerald-500 text-white px-4 py-2 text-center  rounded-full shadow-lg shadow-emerald-500/50  bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 relative">
      <span className="">{formattedTime(timer)}</span>{" "}
      {isCorrect && (
        <>
          <p className="absolute -right-3 -top-3">
            <span className="relative flex h-8 w-8">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex items-center justify-center rounded-full h-8 w-8 p-2 text-[10px] bg-sky-500">
                +15
              </span>
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default Timer;
