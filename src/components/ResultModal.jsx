"use client";
import { useGlobalContext } from "@/context/Context";
import { MdClose } from "react-icons/md";
import RestartBtn from "./RestartBtn";
const ResultModal = ({ dictionary }) => {
  const { show, setShow, matchWords, inCorrectWord, point } =
    useGlobalContext();

  return (
    <>
      {show && (
        <>
          <div className=" fixed  z-50 inset-0 bg-black bg-opacity-75 flex justify-center items-center w-full  ">
            <div className=" absolute top-20 p-8 w-full max-w-xl max-h-full bg-white rounded-lg">
              {/* Modal content */}
              <div className="relative     ">
                <div className="flex items-center ">
                  <p className="text-2xl mx-auto  pl-4">Your Score</p>
                  <button
                    onClick={() => setShow(false)}
                    type="button"
                    className="absolute -top-2  right-1  hover:text-red-800 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                  >
                    <MdClose size={28} />
                  </button>
                </div>

                <div className="mt-4 ">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between border-b border-slate-300 p-3 text-sm">
                      <span className="">Correct Word Count</span>
                      <span>
                        <span className="text-emerald-600 pr-1">
                          {" "}
                          {matchWords && matchWords.length}
                        </span>
                        || ({dictionary.possible_words.length})
                      </span>
                    </li>

                    <li className="flex items-center justify-between border-b border-slate-300 p-3 text-sm">
                      <span className="">InCorrect Word Count</span>
                      <span>
                        <span className="text-red-600 pr-1">
                          {" "}
                          {inCorrectWord}
                        </span>
                        || ({dictionary.possible_words.length})
                      </span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-300 p-3 text-sm">
                      <span className="">Earned Second</span>
                      <span>{matchWords.length * 15} sec.</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-300 p-3 text-sm">
                      <span className="">Loser Second</span>
                      <span>{inCorrectWord * 2} sec.</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-center space-x-4 mt-5 text-sm">
                    <p className="text-2xl font-semibold">
                      Total Point ={" "}
                      <span className="font-bold text-3xl text-amber-500">
                        {point}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-end">
                  {" "}
                  <RestartBtn />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ResultModal;
