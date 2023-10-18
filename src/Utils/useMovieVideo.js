import { useEffect } from "react";
import { options } from "./constant";
import { useDispatch } from "react-redux";
import { addTrailer } from "./moviesDataSlice";

const useMovieVideo = ({ movieId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/+${movieId}+/videos?language=en-US`,
      options
    );
    const response = await data.json();
    const res = response?.results;
    const rest = res.filter((i) => {
      return i?.type === "Trailer";
    });
    const trailer = rest.length === 0 ? res[0] : rest[0];
    dispatch(addTrailer(trailer));
  };
};
export default useMovieVideo;
