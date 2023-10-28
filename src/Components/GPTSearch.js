import React from "react";

const GPTSearch = () => {
  return (
    <div>
      <form className="absolute bottom-[30rem] flex justify-center left-[21rem]">
        <input
          type="text"
          className="w-[45rem] h-14 text-xl rounded-md placeholder:pl-10 placeholder:text-gray-400 pl-4 bg-[#1e1e1e] text-white"
          placeholder="Search for Movies, WebSeries and TV Shows..... "
        />
        <button className="bg-[#e50914ef] ml-6 w-24 text-white text-lg font-bold rounded-md hover:opacity-80 transition-all duration-200">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearch;
