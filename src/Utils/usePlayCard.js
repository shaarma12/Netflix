import { useEffect } from "react";
import { options } from "./constant";
import { useDispatch } from "react-redux";
import { addClipVideo } from "./moviesDataSlice";

const usePlayCard = ({ moviehi }) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const results = await fetch(
      `https://api.themoviedb.org/3/movie/+${moviehi}+/videos?language=en-US`,
      options
    );
    const data = await results.json();
    const res = data?.results;
    if (!res) {
      return null;
    }
    const rest = res.filter((i) => {
      return i?.type === "Clip";
    });
    const clip = rest.length === 0 ? res[0] : rest[0];
    dispatch(addClipVideo(clip));
  };
  useEffect(() => {
    fetchData();
  }, []);
};
export default usePlayCard;
