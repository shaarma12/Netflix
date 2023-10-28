import React, { useRef } from "react";
import openai from "../Utils/openai";
const GPTSearch = () => {
  const inputRef = useRef();
  const openaiAPI = async () => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: inputRef.current.value }],
      model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion.choices);
  };
  return (
    <div>
      <form
        className="absolute bottom-[30rem] flex justify-center left-[21rem]"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          ref={inputRef}
          className="w-[45rem] h-14 text-xl rounded-md placeholder:pl-10 placeholder:text-gray-400 pl-4 bg-[#1e1e1e] text-white"
          placeholder="Search for Movies, WebSeries and TV Shows..... "
        />
        <button
          className="bg-[#e50914ef] ml-6 w-24 text-white text-lg font-bold rounded-md hover:opacity-80 transition-all duration-200"
          onClick={() => {
            openaiAPI();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearch;
