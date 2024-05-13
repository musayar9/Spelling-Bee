"use client";

import { useGlobalContext } from "@/context/Context";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const WordsTable = () => {
  const { matchWords, isCorrectPoint, point } = useGlobalContext();

  return (
    <>
      {" "}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {matchWords.length > 0 && (
        <div className="relative">
          <button
            className="btn "
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Show Words
          </button>
          {isCorrectPoint === true && (
            <p className="absolute -right-3 -top-3">
              <span className="relative flex h-8 w-8">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex items-center justify-center rounded-full h-8 w-8 p-2 text-[10px] bg-yellow-500 text-white font-bold">
                  <FaCheck />
                </span>
              </span>
            </p>
          )}

          {isCorrectPoint === false && (
            <p className="absolute -right-3 -top-3">
              <span className="relative flex h-8 w-8">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex items-center justify-center rounded-full h-8 w-8 p-2 text-[10px] bg-rose-600 text-white font-bold">
                <IoMdClose/>
                </span>
              </span>
            </p>
          )}
        </div>
      )}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <h3 className="font-bold text-lg text-center my-4">Words Found!</h3>
          <div className="overflow-x-auto h-64">
            <table className="table p-2 ">
              {/* head */}
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Word</th>
                  <th>Point</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {matchWords.map((word, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{word}</td>
                    <td>+{word.length}</td>
                  </tr>
                ))}

                {/* row 2 */}
              </tbody>
              <tfoot>
                <tr className="">
                  <th>Sum Words:{matchWords.length} </th>
                  <th>Total Score</th>

                  <th>{point}</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default WordsTable;
