import { useGlobalContext } from "@/context/Context";

const LettersHive = ({ letters }) => {
  const { words } = useGlobalContext();

  return (
    <div className="flex items-center flex-col justify-center">
      <input
        className="text-center border-b border-slate-300  w-72 p-4 outline-none"
        value={words}
        placeholder="Your Words"
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
                <a className="hexLink">
                  <p>{letter}</p>
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
