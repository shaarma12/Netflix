import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const Secondary = () => {
  const movies1 = useSelector((store) => store.movie?.nowPlayingMovies);
  const movies2 = useSelector((store) => store.movie?.popularMovies);
  const movies3 = useSelector((store) => store.movie?.topRatedMovies);
  const movies4 = useSelector((store) => store.movie?.upcomingMovies);
  return (
    <div>
      <MovieList title="Now Playing" movies={movies1} />
      <MovieList title="Popular Movies" movies={movies2} />
      <MovieList title="Top Rated" movies={movies3} />
      <MovieList title="Upcoming Movies" movies={movies4} />
    </div>
  );
};

export default Secondary;
