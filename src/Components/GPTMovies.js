import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovies = () => {
  const { movieName, movieData } = useSelector((store) => store.GPT);
  if (!movieName) return null;
  return (
    <div>
      {movieName.map((i, index) => (
        <MovieList key={i} title={i} movies={movieData[index]} />
      ))}
    </div>
  );
};

export default GPTMovies;
