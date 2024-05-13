import { useGlobalContext } from "@/context/Context";
import { formattedTime } from "./Funtcions";
const Timer = () => {
  const { timer, isCorrect } = useGlobalContext();

  return (
    <div className="bg-emerald-400 rounded-full  w-28 p-2 text-white font-bold text-center relative">
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
