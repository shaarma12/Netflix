import Header from "./Header";
import Primary from "./Primary";
import Secondary from "./Secondary";
import useNowPlayingMovie from "../Utils/useNowPlayingMovie";
import useMovieVideo from "../Utils/useMovieVideo";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovie();
  useMovieVideo();
  return (
    <div>
      <Header />
      <Primary />
      <Secondary />
    </div>
  );
};

export default Browse;
