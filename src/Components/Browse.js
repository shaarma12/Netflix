import Header from "./Header";
import Primary from "./Primary";
import Secondary from "./Secondary";
import useNowPlayingMovie from "../Utils/useNowPlayingMovie";
import usePopularMovie from "../Utils/usePopularMovies";
import useTopRatedMovie from "../Utils/useTopRatedMovie";
import useUpcomingMovie from "../Utils/useUpcomingMovie";
import useTopRatedShows from "../Utils/useTopRatedShows";
import useOnTheAir from "../Utils/useOnTheAir";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const GPT = useSelector((store) => store.GPT?.GPTopen);
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  useTopRatedShows();
  useOnTheAir();
  return (
    <div>
      <Header />
      {GPT ? (
        <GPTSearch />
      ) : (
        <>
          <Primary />
          <Secondary />
        </>
      )}
    </div>
  );
};

export default Browse;
