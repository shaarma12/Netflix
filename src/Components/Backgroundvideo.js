import React from "react";
import useMovieVideo from "../Utils/useMovieVideo";
import { useSelector } from "react-redux";

const Backgroundvideo = ({ movieId }) => {
  const bgTrailer = useSelector((store) => store.movie?.trailer);
  useMovieVideo({ movieId });
  return (
    <div>
      <div className="md:w-[94.5rem] w-screen">
        <iframe
          src={
            "https://www.youtube.com/embed/" +
            bgTrailer?.key +
            "?autoplay=1&loop=1&autopause=0&mute=1"
          }
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="md:w-[94.974rem] w-screen aspect-video -mt-12"
        ></iframe>
      </div>
    </div>
  );
};

export default Backgroundvideo;
