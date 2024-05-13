"use client";
import { useGlobalContext } from "@/context/Context";

const FormArea = ({ handleSubmit, language }) => {
  const { words, setWords, isInput, setIsLetter } = useGlobalContext();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-slate-300  p-2  rounded-s-lg text-center outline-yellow-400 "
          value={words}
          disabled={isInput}
          placeholder={language === "turkish" ? "Kelime Girin" : "Enter Words"}
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
          className="rounded-e-lg  bg-amber-400 p-2 text-gray-900 font-bold hover:bg-amber-500 duration-150 ease-in-out"
        >
          {language === "turkish" ? "Gönder" : "Check"}
        </button>
      </form>
    </>
  );
};

export default FormArea;
