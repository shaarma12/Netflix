import React from "react";
import { useSelector } from "react-redux";
import useMovieCard from "../Utils/useMovieCard";

const HoverVideo = ({ moviehi }) => {
  //   const moviehi = useSelector((store) => store.movie?.movieId?.id);
  const cardTrailer = useSelector((store) => store.movie?.CardVideo);
  useMovieCard({ moviehi });
  return (
    <div>
      <div className="">
        <iframe
          src={
            "https://www.youtube.com/embed/" +
            cardTrailer?.key +
            "?autoplay=1&loop=1&autopause=0&mute=1"
          }
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-[21rem] aspect-video rounded-t-md"
        ></iframe>
      </div>
    </div>
  );
};

export default HoverVideo;
