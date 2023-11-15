import React from "react";
import GPTSearch from "./GPTSearch";
import GPTMovies from "./GPTMovies";

const GPTPage = () => {
  return (
    <div>
      <div class="fixed">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Your Image"
          className="h-screen w-screen md:h-full object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <GPTSearch />
      <GPTMovies />
    </div>
  );
};

export default GPTPage;
