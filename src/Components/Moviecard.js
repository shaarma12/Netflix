import React from "react";
import { IMG } from "../Utils/constant";
const Moviecard = ({ movieData }) => {
  // let title = movieData?.original_title;
  // if (title == null) {
  //   title = movieData?.name;
  // }
  return (
    <div className=" w-64 hover:scale-125 transition-all duration-300 drop-shadow-xl cursor-pointer">
      {/* <h1 className="text-white absolute top-16 left-36 text-xl font-bold bg-gradient-to-b from-black">
        {title.slice(0, 10)}
      </h1> */}
      <img src={IMG + movieData?.backdrop_path} className="rounded-md" />
    </div>
  );
};

export default Moviecard;
