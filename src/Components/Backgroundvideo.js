import React from "react";
import useMovieVideo from "../Utils/useMovieVideo";
import { useSelector } from "react-redux";
import useMovieCard from "../Utils/useMovieCard";

const Backgroundvideo = ({ movieId }) => {
  const bgTrailer = useSelector((store) => store.movie?.trailer);
  useMovieVideo({ movieId });
  return (
    <div>
      <div className="w-[94.5rem]">
        <iframe
          src={
            "https://www.youtube.com/embed/" +
            bgTrailer?.key +
            "?autoplay=1&loop=1&autopause=0&mute=1"
          }
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-[94.974rem] aspect-video -mt-12"
        ></iframe>
      </div>
    </div>
  );
};

export default Backgroundvideo;
