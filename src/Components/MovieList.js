import React from "react";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pb-7 bg-[#141414] overflow-hidden">
      <h1 className="text-white text-3xl mb-4 pl-14 font-bold">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2 pl-14">
          {movies?.map((i) => {
            return <Moviecard key={i.id} movieData={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
