import { useDispatch } from "react-redux";
import { options } from "./constant";
import { addNowPlayingMovies } from "./moviesDataSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const fetchNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const result = await data.json();
    const moviesArray = result?.results;
    dispatch(addNowPlayingMovies(moviesArray));
  };
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovie;