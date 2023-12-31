import React from "react";
import { useSelector } from "react-redux";
import useMovieCard from "../Utils/useMovieCard";

const HoverVideo = ({ moviehi }) => {
  const cardTrailer = useSelector((store) => store.movie?.CardVideo);
  useMovieCard({ moviehi });
  return (
    <div>
      <div>
        <iframe
          src={
            "https://www.youtube.com/embed/" +
            cardTrailer?.key +
            "?autoplay=1&loop=1&autopause=0&mute=1"
          }
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-[20rem] h-[8.3rem] aspect-video rounded-t-md"
        ></iframe>
      </div>
    </div>
  );
};

export default HoverVideo;
