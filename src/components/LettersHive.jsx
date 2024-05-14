import { useGlobalContext } from "@/context/Context";

const LettersHive = ({ letters, language }) => {
  const { words } = useGlobalContext();

  return (
    <div className="flex items-center flex-col justify-center">
      <input
        className="text-center border-b border-slate-300  w-72 p-4 outline-none"
        value={words}
        placeholder={language === "turkish" ? "Kelimen" : "Your Word's"}
        readOnly
      />

      <div className=" mt-12 gap-2">
        <ul id="hexGrid">
          {letters.map((letter, index) => (
            <li
              key={index}
              className="hex"

              // onClick={handleClick} ref={ref}
            >
              <div className="hexIn">
                <a className="block w-[100%] h-[100%] text-center overflow-hidden hexLink border-amber-400
                bg-yellow-500   font-bold
                shadow shadow-yellow-600/50  bg-gradient-to-r from-amber-300 via-yellow-400 to-yellow-400
               ">
                  <p className="w-[100%] p-[38%] box-border bg-transparent font-[800] text-[1.4em] text-black">{letter}</p>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LettersHive;
