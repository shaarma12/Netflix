import React from "react";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="">
      <h1 className="text-white text-2xl mb-3 pl-14 font-bold z-30">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth no-scrollbar h-96">
        <div className="flex gap-2 pl-14">
          {movies.map((i) => (
            <Moviecard key={i.id} movieData={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
