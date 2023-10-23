import React from "react";
import { IMG } from "../Utils/constant";
const Moviecard = ({ movieData }) => {
  return (
    <div className="w-56 hover:scale-125 transition-all duration-300 drop-shadow-xl cursor-pointer">
      <img src={IMG + movieData?.backdrop_path} className="rounded-lg" />
    </div>
  );
};

export default Moviecard;
