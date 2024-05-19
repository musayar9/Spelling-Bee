"use client";
import { useGlobalContext } from "@/context/Context";
import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RestartBtn from "./RestartBtn";
import Timer from "./Timer";
import WordsTable from "./WordsTable";
import Point from "./Point";
import ResultModal from "./ResultModal";
import FormArea from "./FormArea";
import LettersHive from "./LettersHive";
import Breadcrumbs from "./Breadcrumbs";



/*Game area */
export default function Game({ language, dictionary }) {
  const {
    setPoint,
    timer,
    setTimer,
    setShow,
    words,
    setWords,
    setFilterWords,
    setIsCorrect,
    setIsCorrectPoint,
    matchWords,
    setMatchWords,
    setInCorrectWord,
    setRestartBtn,
    setKnow,
  } = useGlobalContext();

  /*the words of the relevant language */
  let lettersShuffle = dictionary.letters;

  /* checking the words found*/
  useEffect(() => {
    if (dictionary.words.length === matchWords.length) {
      setShow(true);
      setRestartBtn(true);
      setKnow(true);
    }
    return;
  });

  /*finding the right word, scoring and time control */
  function handleShowText(e) {
    e.preventDefault();
    const filter = dictionary.words.find((word) => {
      return word === words;
    });
    setFilterWords(filter);
    if (words.length <= 2) {
      toast.warning(`${language === "turkish" ? "Çok Kısa" : "Too Short"}`);
    } else {
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

          toast.success(
            `${
              language === "turkish"
                ? "Tebrikler. doğru kelimeyi buldun"
                : "Congratulations. you found the right word"
            }`
          );

          setWords("");
          lettersShuffle = dictionary.letters.sort(() => Math.random() - 0.5);
        } else {
          toast.error(
            `${
              language === "turkish" ? "Bu Kelime Bulundu" : "This Word Found"
            }`
          );
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
          toast.error(
            `${
              language === "turkish" ? "Kelime Bulunamadı" : "Words not found"
            }`
          );
        }
      }
    }

    let timeout = setTimeout(() => {
      setIsCorrectPoint(null);
    }, 1500);

    return () => clearTimeout(timeout);
  }

  return (
    <div className="mx-auto max-w-8xl h-[100%] my-6">
      <Breadcrumbs language={language} />

      <div className="flex max-w-xl mx-auto items-center justify-between  p-4">
        <Timer />
        <WordsTable language={language} />
        <Point language={language} />
      </div>

      <LettersHive letters={lettersShuffle} language={language} />

      <div className="mt-6 flex flex-col items-center justify-center">
        {timer === 0 || (
          <FormArea
            handleSubmit={handleShowText}
            language={language}
            dictionary={dictionary}
          />
        )}

        {timer === 0 && (
          <div className="mt-4 flex items-center justify-center">
            <RestartBtn language={language} />
          </div>
        )}
      </div>

      <ResultModal dictionary={dictionary} language={language} />

      <ToastContainer
        className="rounded-md  text-sm p-4"
        autoClose={1400}
        pauseOnFocusLoss={true}
        pauseOnHover={false}
        position="top-center"
      />
    </div>
  );
}
