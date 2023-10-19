import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const Secondary = () => {
  const movies1 = useSelector((store) => store.movie?.nowPlayingMovies);
  const movies2 = useSelector((store) => store.movie?.popularMovies);
  return (
    <div>
      <MovieList title="Now Playing" movies={movies1} />
      <MovieList title="Popular Movies" movies={movies2} />
      <MovieList title="Now Playing" movies={movies1} />
      <MovieList title="Now Playing" movies={movies1} />
      <MovieList title="Now Playing" movies={movies1} />
    </div>
  );
};

export default Secondary;
