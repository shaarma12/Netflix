import { useEffect } from "react";
import { options } from "./constant";
import { useDispatch } from "react-redux";
import { addonTheAir } from "./moviesDataSlice";

const useOnTheAir = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchOnTheAir();
  }, []);

  const fetchOnTheAir = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addonTheAir(json?.results));
  };
};
export default useOnTheAir;
