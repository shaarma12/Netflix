import React from "react";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="mb-14 bg-[#141414]">
      <h1 className="text-white text-lg mb-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies?.map((i) => {
            return <Moviecard key={i.id} movieData={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
