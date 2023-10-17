import { useEffect } from "react";
import { options } from "./constant";
import { useDispatch } from "react-redux";
import { addTrailer } from "./moviesDataSlice";

const useMovieVideo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/926393/videos?language=en-US",
      options
    );
    const response = await data.json();
    const res = response?.results;
    const rest = res.filter((i) => {
      return i?.type === "Trailer";
    });
    dispatch(addTrailer(rest[0]));
  };
};
export default useMovieVideo;
