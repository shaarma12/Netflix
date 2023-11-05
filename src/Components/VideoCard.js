import React from "react";
import HoverVideo from "./HoverVideo";
import { useSelector } from "react-redux";
import { IMG } from "../Utils/constant";
import Play from "../Images/Play.png";

const VideoCard = () => {
  const card = useSelector((store) => store.movie.movieId);
  console.log(card);
  return (
    <div className="flex bg-[#141414] flex-col items-center rounded-md scale-y-125  text-7xl absolute top-10 right-5 font-extrabold w-[21rem] z-50 h-[14rem] ml-10">
      {/* <img
        src={IMG + card?.backdrop_path}
        className=" rounded-t-md h-28 w-96"
      /> */}
      <HoverVideo moviehi={card.id} />
      <div className="flex">
        <button className="bg-white rounded-full w-9 h-8 px-1 absolute top-40 left-4 hover:opacity-80 mr-2">
          <img src={Play} alt="Play" className="w-4 ml-2" />
        </button>
        <button className="bg-white rounded-full w-9 h-8 px-1 absolute top-40 right-56 hover:opacity-80 mr-2">
          <img src={Play} alt="Play" className="w-4 ml-2" />
        </button>
        <button className="bg-white rounded-full w-9 h-8 px-1 absolute top-40 right-44 hover:opacity-80 mr-2">
          <img src={Play} alt="Play" className="w-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
