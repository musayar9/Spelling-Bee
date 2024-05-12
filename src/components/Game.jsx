"use client";
import { useGlobalContext } from "@/context/Context";
import { useEffect, useRef, useState } from "react";
import { formattedTime } from "./Funtcions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Game({ language, dictionary }) {
  // console.log("dictionary", dictionary.letters);
  const { point, setPoint, isLetter, setIsLetter, timer, isInput, setTimer } =
    useGlobalContext();

  const [words, setWords] = useState("");
  const [newValue, setNewValue] = useState("");
  const [filterWords, setFilterWords] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isCorrectPoint, setIsCorrectPoint] = useState(null);
  const [matchWords, setMatchWords] = useState([]);
  let lettersShuffle = dictionary.letters;
  const ref = useRef();
  const handleClick = (e) => {
    const clickedElement = e.target.closest("li"); 
    const content = clickedElement.querySelector("p").textContent; 
  

    setWords([...words, content]);
  };

  function handleShowText() {
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
              lettersShuffle = dictionary.letters.sort(
                () => Math.random() - 0.5
              );
      } else {
        console.log("bu kelşme");
        toast.error(`Bu kelime Bulundu`);
      }

      setTimer((prev) => (prev += 15));



      setTimeout(() => {
        setIsCorrect(false);
      }, [1500]);
    } else {
      if (filter === undefined && point >= 2) {
        setPoint((prev) => (prev -= 2));
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
    <div className="max-w-6xl mx-auto my-8 ">
      <div className="flex max-w-2xl mx-auto  justify-between  p-4">
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
        <input
          type="text"
          className="border border-slate-300  p-4  rounded-md text-center outline-yellow-400 "
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

        <div className="flex items-center justify-between mt-12 w-72">
          <button
            className="rounded-md bg-red-500 px-4 py-2 text-gray-100"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            onClick={handleShowText}
            className="rounded-md bg-[#58c7f3] px-4 py-2 text-gray-100"
          >
            Check
          </button>
        </div>
      </div>
      <ToastContainer
        autoClose={1400}
        pauseOnFocusLoss={true}
        pauseOnHover={false}
        position="top-center"
      />
    </div>
  );
}
