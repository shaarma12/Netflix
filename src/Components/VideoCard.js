import React from "react";
import Backgroundvideo from "./Backgroundvideo";

const VideoCard = ({ movieid }) => {
  return (
    <div className="border-2 border-white absolute text-7xl font-extrabold w-60 h-40">
      <Backgroundvideo movieId={movieid} />
    </div>
  );
};

export default VideoCard;
