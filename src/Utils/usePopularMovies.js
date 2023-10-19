import { useDispatch } from "react-redux";
import { options } from "./constant";
import { addPopularMovies } from "./moviesDataSlice";
import { useEffect } from "react";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const fetchPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const result = await data.json();
    const moviesArray = result?.results;
    dispatch(addPopularMovies(moviesArray));
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);
};
export default usePopularMovie;
