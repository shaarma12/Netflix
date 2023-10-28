import React from "react";

const GPTSearch = () => {
  return (
    <div>
      <div class="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Your Image"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute bottom-[30rem] flex justify-center left-[21rem]">
        <input
          type="text"
          className="w-[45rem] h-14 text-xl rounded-md placeholder:pl-10 placeholder:text-gray-400 pl-4 bg-[#1e1e1e] text-white"
          placeholder="Search for Movies, WebSeries and TV Shows..... "
        />
        <button className="bg-[#e50914ef] ml-6 w-24 text-white text-lg font-bold rounded-md hover:opacity-80 transition-all duration-200">
          Search
        </button>
      </div>
    </div>
  );
};

export default GPTSearch;
