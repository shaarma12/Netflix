import React from "react";
import useMovieVideo from "../Utils/useMovieVideo";
import { useSelector } from "react-redux";

const Backgroundvideo = ({ movieId }) => {
  const bgTrailer = useSelector((store) => store.movie?.trailer);
  useMovieVideo({ movieId });
  return (
    <div className="w-screen">
      <iframe
        src={
          "https://www.youtube.com/embed/" +
          bgTrailer?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-screen aspect-video"
      ></iframe>
    </div>
  );
};

export default Backgroundvideo;
