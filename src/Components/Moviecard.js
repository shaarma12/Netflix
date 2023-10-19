import React from "react";
import { IMG } from "../Utils/constant";
const Moviecard = ({ movieData }) => {
  return (
    <div className="w-40">
      <img src={IMG + movieData?.poster_path} className="rounded-lg" />
    </div>
  );
};

export default Moviecard;
