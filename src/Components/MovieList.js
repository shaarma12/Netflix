import React from "react";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="pb-14">
      <h1 className="text-white text-2xl mb-3 pl-14 font-bold">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth no-scrollbar">
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
