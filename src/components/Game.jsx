"use client";
import { useGlobalContext } from "@/context/Context";
import { useEffect, useRef, useState } from "react";
import { formattedTime } from "./Funtcions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdClose } from "react-icons/md";
import RestartBtn from "./RestartBtn";
export default function Game({ language, dictionary }) {
  // console.log("dictionary", dictionary.letters);
  const {
    point,
    setPoint,
    isLetter,
    setIsLetter,
    timer,
    isInput,
    setTimer,
    show,
    setShow,
    words,
    setWords,
    filterWords,
    setFilterWords,
    isCorrect,
    setIsCorrect,
    isCorrectPoint,
    setIsCorrectPoint,
    matchWords,
    setMatchWords,
    inCorrectWord,
    setInCorrectWord,
  } = useGlobalContext();

  // const [words, setWords] = useState("");
  // const [newValue, setNewValue] = useState("");
  // const [filterWords, setFilterWords] = useState("");
  // const [isCorrect, setIsCorrect] = useState(false);
  // const [isCorrectPoint, setIsCorrectPoint] = useState(null);
  // const [matchWords, setMatchWords] = useState([]);

  // const [inCorrectWord, setInCorrectWord] = useState(0);
  let lettersShuffle = dictionary.letters;
  const ref = useRef();
  const handleClick = (e) => {
    const clickedElement = e.target.closest("li");
    const content = clickedElement.querySelector("p").textContent;

    setWords([...words, content]);
  };

  function handleShowText(e) {
    e.preventDefault();
    // let newData = words.join("");
    const filter = dictionary.possible_words.find((word, index) => {
      //  console.log(word);
      return word === words;
    });
    setFilterWords(filter);

    if (filter !== undefined) {
      if (!matchWords.includes(filter)) {
        setMatchWords([...matchWords, filter]);
        if (filter.length === 7) {
          setPoint((prev) => (prev += filter?.length));
        } else if (words.length === 6) {
          setPoint((prev) => (prev += filter?.length));
        } else if (words.length === 5) {
          setPoint((prev) => (prev += filter?.length));
        } else if (words.length === 4) {
          setPoint((prev) => (prev += filter?.length));
        } else {
          setPoint((prev) => (prev += 1));
        }
        setIsCorrect(true);
        setIsCorrectPoint(true);
        toast.success(`Success Your Found Words`);

        setWords("");
        lettersShuffle = dictionary.letters.sort(() => Math.random() - 0.5);
      } else {
        console.log("bu kelşme");
        toast.error(`Bu kelime Bulundu`);
      }

      setTimer((prev) => (prev += 15));

      setTimeout(() => {
        setIsCorrect(false);
      }, [1500]);
    } else {
      if (filter === undefined) {
        setPoint((prev) => (prev -= 2));
        setInCorrectWord((prev) => (prev += 1));
        setIsCorrectPoint(false);
        toast.error(`Words not found`);
      }
    }

    let timeout = setTimeout(() => {
      setIsCorrectPoint(null);
    }, 1500);

    return () => clearTimeout(timeout);
  }

  // console.log("point", point);
  const handleDelete = () => {
    setNewValue("");
    setWords("");
    setFilterWords("");
    setPoint(0);
  };
  // console.log("words", words);
  // console.log(filterWords, "filter");
  // const filter = dictionary.possible_words.filter((word, index) => {
  //   console.log(word);
  //   return word === words;
  // });
  // console.log(filterWords);
  // console.log(timer);
  // console.log(isCorrectPoint);

  // useEffect(() => {
  //   if (isCorrectPoint !== null) {
  //     let timeout = setTimeout(() => {
  //       setIsCorrectPoint(null);
  //     }, 1500);

  //     // Zamanlayıcıyı temizleme fonksiyonunu döndür
  //     return () => clearTimeout(timeout);
  //   }
  // }, [isCorrectPoint]);

  // console.log("mathcWords", matchWords);
  return (
    <div className="mx-auto max-w-8xl my-8">
      {/* <div className="p-4 w-96">
          {matchWords.length > 0 && (
            <div className="rounded-md max-w-2xl mx-auto my-2 p-4">
              <h6 className="text-center text-2xl -mt-4">Words Found</h6>
              <ul className="">
                <li className="flex items-center justify-between">
                  <span> Word</span>
                  <span>Score</span>
                </li>

                {matchWords.map((word, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span> {word}</span>
                      <span className="text-emerald-700">+{word.length}</span>
                    </li>
                  );
                })}
              </ul> 

              <div className="overflow-x-auto h-72">
                <table className="table p-2 ">
       
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Word</th>
                      <th>Point</th>
                    </tr>
                  </thead>
                  <tbody>
             
                    {matchWords.map((word, index) => (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{word}</td>
                        <td>{word.length}</td>
                      </tr>
                    ))}

              
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
              
            </div>
          )}
        </div> */}

      <div className="flex max-w-xl mx-auto items-center justify-between  p-4">
        <div className="bg-emerald-400 rounded-md  w-28 p-2 text-white font-bold text-center relative">
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

        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        {matchWords.length > 0 && (
          <div className="relative">
            <button
              className="btn "
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Show Words
            </button>
            {isCorrect && (
              <p className="absolute -right-3 -top-3">
                <span className="relative flex h-8 w-8">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex items-center justify-center rounded-full h-8 w-8 p-2 text-[10px] bg-yellow-500 text-white font-bold">
                    +1
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

        <div className="bg-sky-600 rounded-md px-4 py-2 text-white font-bold relative text-center">
          <span className="text-sm"> Score : {point}</span>

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
                    {point >= 2 && <span>-2</span>}
                  </span>
                </span>
              </p>
            )}
          </>
        </div>
      </div>

      <div className="flex items-center flex-col justify-center">
        <input
          className="text-center border-b border-slate-300  w-72 p-4 outline-none"
          value={words}
          placeholder="Your Words"
          readOnly
        />

        <div className=" mt-12 gap-2">
          <ul id="hexGrid">
            {lettersShuffle.map((letter, index) => (
              <li
                key={index}
                className="hex"

                // onClick={handleClick} ref={ref}
              >
                <div className="hexIn">
                  <a className="hexLink">
                    <p>{letter}</p>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center">
        <form onSubmit={handleShowText}>
          <input
            type="text"
            className="border border-slate-300  p-2  rounded-s-lg text-center outline-yellow-400 "
            value={words}
            disabled={isInput}
            placeholder="Enter Words"
            onChange={(e) => {
              setWords(e.target.value);

              if (e.target.value) {
                setIsLetter(true);
              }
            }}
          />

          <button
            type="submit"
            disabled={isInput}
            className="rounded-e-lg  bg-amber-400 p-2 text-gray-900 font-bold outline-yellow-400"
          >
            Check
          </button>
        </form>

       {
       timer===0 && <RestartBtn/>
       
       }
    
      </div>
<button onClick={()=>setShow(true)}>Show Modak</button>
     

      {/* Show Results=  */}
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

                <div>
                  <div className="my-8 ">
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
                      <li className="flex items-center justify-between border-b border-slate-300 p-3 text-sm">
                        <span className="">Total Point</span>
                        <span>{point}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <RestartBtn/>
              </div>
            </div>
          </div>
        </>
      )}

      <ToastContainer
        autoClose={1400}
        pauseOnFocusLoss={true}
        pauseOnHover={false}
        position="top-center"
      />
    </div>
  );
}
