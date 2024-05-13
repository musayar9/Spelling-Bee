"use client";

import { useGlobalContext } from "@/context/Context";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const WordsTable = ({ language }) => {
  const { matchWords, isCorrectPoint, point } = useGlobalContext();

  return (
    <>
      {" "}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {matchWords.length > 0 && (
        <div className="relative">
          <button
            className="btn rounded-full px-6 py-2"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            {language === "turkish" ? "Kelimelerin" : "Show Words"}
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
                  <IoMdClose />
                </span>
              </span>
            </p>
          )}
        </div>
      )}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <h3 className="font-bold text-lg text-center my-4">
            {" "}
            {language === "turkish" ? "Bulunan Kelimeler" : "Show Words"}{" "}
          </h3>
          <div className="overflow-x-auto h-64">
            <table className="table p-2 ">
              <thead>
                <tr>
                  <th> {language === "turkish" ? "Sıra" : "Order"} </th>
                  <th> {language === "turkish" ? "Kelime" : "Word"}</th>
                  <th> {language === "turkish" ? "Puan" : "Point"} </th>
                </tr>
              </thead>
              <tbody>
                {matchWords.map((word, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{word}</td>
                    <td>+{word.length}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="">
                  <th>
                    {" "}
                    {language === "turkish" ? "Toplam Kelime" : "Total Words"}:
                    {matchWords.length}{" "}
                  </th>
                  <th>
                    {" "}
                    {language === "turkish"
                      ? "Toplam Puan"
                      : "Total Point"}{" "}
                  </th>

                  <th>{point}</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">
                {" "}
                {language === "turkish" ? "Kapat" : "Close"}{" "}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default WordsTable;
