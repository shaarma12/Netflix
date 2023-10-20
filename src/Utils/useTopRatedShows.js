import { useDispatch } from "react-redux";
import { options } from "./constant";
import { addtopRatedShows } from "./moviesDataSlice";
import { useEffect } from "react";

const useTopRatedShows = () => {
  const dispatch = useDispatch();
  const fetchTopRatedSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    );
    const result = await data.json();
    const moviesArray = result?.results;
    dispatch(addtopRatedShows(moviesArray));
  };
  useEffect(() => {
    fetchTopRatedSeries();
  }, []);
};
export default useTopRatedShows;
