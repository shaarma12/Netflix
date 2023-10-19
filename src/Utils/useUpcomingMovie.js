import { useDispatch } from "react-redux";
import { options } from "./constant";
import { addUpcomingMovies } from "./moviesDataSlice";
import { useEffect } from "react";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  const fetchUpcomingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const result = await data.json();
    const moviesArray = result?.results;
    dispatch(addUpcomingMovies(moviesArray));
  };
  useEffect(() => {
    fetchUpcomingMovie();
  }, []);
};
export default useUpcomingMovie;
