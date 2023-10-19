import Header from "./Header";
import Primary from "./Primary";
import Secondary from "./Secondary";
import useNowPlayingMovie from "../Utils/useNowPlayingMovie";
import usePopularMovie from "../Utils/usePopularMovies";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovie();
  return (
    <div>
      <Header />
      <Primary />
      <Secondary />
    </div>
  );
};

export default Browse;
