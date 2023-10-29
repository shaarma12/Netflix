import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovies = () => {
  const { movieName, movieData } = useSelector((store) => store.GPT);
  if (!movieName) return null;
  return (
    <div className="absolute top-96 w-[94.8rem]">
      {movieName.map((i, index) => {
        return (
          <MovieList key={i} title={i} movies={movieData[index]?.results} />
        );
      })}
    </div>
  );
};

export default GPTMovies;
