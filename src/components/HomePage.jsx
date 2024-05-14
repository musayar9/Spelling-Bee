"use client";
import Link from "next/link";


const HomePage = () => {

  return (
    <div className="max-w-3xl mx-auto my-24">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl text-center">
          Spelling <span className="text-yellow-400">Bee</span> Game
        </h1>
        <p className="text-xl  text-slate-500 text-center my-8 tracking-widest p-2">
          In this game you are given 7 letters. You are trying to find words
          that can be formed using these seven letters. You have one minute to
          find the words. For each word you find correctly, you will earn 15
          seconds and points equal to the length of the word. For each wrong
          word you lose 2 points
        </p>

        <h4 className="text-slate-500">Choose the version you want to play</h4>
        <div className="flex gap-4 mt-4">
          <Link
            href="/turkish"
            className="text-lg bg-amber-500 text-white px-6 py-2.5 rounded-full 
            shadow-lg shadow-amber-500/50  bg-gradient-to-r from-amber-400 via-amber-500
            to-amber-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300"
          >
            Turkish
          </Link>
          <Link
            href="/english"
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300  shadow-lg shadow-pink-500/50 font-medium rounded-full px-6 py-2.5 text-center"
          >
            English
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
