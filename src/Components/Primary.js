import React from "react";
import Title from "./Title";
import Backgroundvideo from "./Backgroundvideo";
import { useSelector } from "react-redux";
const Primary = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (movies === null) return;
  const movie = movies[5];
  const { title, overview, id } = movie;
  return (
    <div>
      <Title title={title} overview={overview} />
      <Backgroundvideo movieId={id} />
    </div>
  );
};

export default Primary;
