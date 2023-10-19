import { useDispatch } from "react-redux";
import { options } from "./constant";
import { addTopRatedMovies } from "./moviesDataSlice";
import { useEffect } from "react";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const fetchTopRatedMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const result = await data.json();
    const moviesArray = result?.results;
    dispatch(addTopRatedMovies(moviesArray));
  };
  useEffect(() => {
    fetchTopRatedMovie();
  }, []);
};
export default useTopRatedMovie;
