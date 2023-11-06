import React, { useState } from "react";
import { IMG } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addToCart } from "../Utils/addToCartSlice";
import VideoCard from "./VideoCard";
import { addMovieId } from "../Utils/moviesDataSlice";
const Moviecard = ({ movieData }) => {
  const [see, setSee] = useState(null);
  const dispatch = useDispatch();
  if (!movieData?.poster_path) {
    return null;
  }
  return (
    <div
      className=" w-52 hover:scale-105 transition-all duration-300 drop-shadow-xl cursor-pointer"
      onMouseEnter={() => {
        dispatch(addMovieId(movieData));
        setSee(<VideoCard />);
      }}
      onMouseLeave={() => {
        setSee(null);
      }}
    >
      <div className="hover:scale-y-125">{see}</div>
      <img src={IMG + movieData?.poster_path} className="rounded-md" />
    </div>
  );
};

export default Moviecard;
