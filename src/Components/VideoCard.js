import React from "react";
import HoverVideo from "./HoverVideo";
import { useSelector } from "react-redux";

const VideoCard = () => {
  const card = useSelector((store) => store.movie.movieId);
  console.log(card);
  return (
    <div className="border-2 border-white text-7xl absolute font-extrabold w-60 h-40">
      <h1 className="text-white">{card?.id}</h1>
    </div>
  );
};

export default VideoCard;
