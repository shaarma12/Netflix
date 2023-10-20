import Header from "./Header";
import Primary from "./Primary";
import Secondary from "./Secondary";
import useNowPlayingMovie from "../Utils/useNowPlayingMovie";
import usePopularMovie from "../Utils/usePopularMovies";
import useTopRatedMovie from "../Utils/useTopRatedMovie";
import useUpcomingMovie from "../Utils/useUpcomingMovie";
import useTopRatedShows from "../Utils/useTopRatedShows";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  useTopRatedShows();
  return (
    <div>
      <Header />
      <Primary />
      <Secondary />
    </div>
  );
};

export default Browse;
