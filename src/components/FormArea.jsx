"use client";
import { useGlobalContext } from "@/context/Context";

const FormArea = ({ handleSubmit, language }) => {
  const { words, setWords, isInput, setIsLetter } = useGlobalContext();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-amber-400 p-2  rounded-s-full text-center outline-yellow-400 "
          value={words}
          disabled={isInput}
          placeholder={language === "turkish" ? "Kelime Girin" : "Enter Words"}
          onChange={(e) => {
            setWords(e.target.value.toLowerCase());

            if (e.target.value) {
              setIsLetter(true);
            }
          }}
        />

        <button
          type="submit"
          disabled={isInput}
          className="rounded-e-full border border-amber-400  bg-amber-400 p-2 px-6 text-gray-900 font-bold hover:bg-amber-500 duration-150 ease-in-out"
        >
          {language === "turkish" ? "Gönder" : "Check"}
        </button>
      </form>
    </>
  );
};

export default FormArea;
