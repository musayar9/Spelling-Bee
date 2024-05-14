"use client";
import { useGlobalContext } from "@/context/Context";

const FormArea = ({ handleSubmit, language }) => {
  const { words, setWords, isInput, setIsLetter } = useGlobalContext();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-amber-400 p-2  rounded-s-full text-center focus:ring-1 focus:outline-none focus:ring-amber-300 shadow-lg shadow-amber-500/50  "
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
          className="rounded-e-full border border-amber-400  bg-amber-500 p-2 px-6 tracking-widest text-gray-50 font-bold hover:bg-amber-500 duration-150 ease-in-out    shadow-lg shadow-amber-500/50  bg-gradient-to-r from-amber-400 via-amber-500
            to-amber-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300"
        >
          {language === "turkish" ? "Gönder" : "Check"}
        </button>
      </form>
    </>
  );
};

export default FormArea;
