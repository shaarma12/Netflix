import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const Secondary = () => {
  const movies1 = useSelector((store) => store.movie?.nowPlayingMovies);
  const movies2 = useSelector((store) => store.movie?.popularMovies);
  const movies3 = useSelector((store) => store.movie?.topRatedMovies);
  const movies4 = useSelector((store) => store.movie?.upcomingMovies);
  const topRatedShows = useSelector((store) => store.movie?.topRatedShows);
  return (
    <div className="bg-gradient-to-b from-black to-[#141414]">
      <div className="-mt-[15rem] relative">
        <MovieList title="Now Playing" movies={movies1} />
        <MovieList title="Popular Movies" movies={movies2} />
        <MovieList title="Top Rated Movies" movies={movies3} />
        <MovieList title="Upcoming Movies" movies={movies4} />
        <MovieList title="Top Rated Shows" movies={topRatedShows} />
      </div>
    </div>
  );
};

export default Secondary;
