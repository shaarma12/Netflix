import React from "react";
import { useSelector } from "react-redux";
import usePlayCard from "../Utils/usePlayCard";

const NewVideo = ({ moviehi }) => {
  const clip = useSelector((store) => store.movie?.clipVideo);
  usePlayCard({ moviehi });
  return (
    <div>
      <div>
        <iframe
          src={
            "https://www.youtube.com/embed/" +
            clip?.key +
            "?autoplay=1&loop=1&autopause=0&mute=1"
          }
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="md:w-[94.974rem] w-screen h-full md:h-full aspect-video"
        ></iframe>
      </div>
    </div>
  );
};

export default NewVideo;
