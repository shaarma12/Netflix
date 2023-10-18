import Header from "./Header";
import Primary from "./Primary";
import Secondary from "./Secondary";
import useNowPlayingMovie from "../Utils/useNowPlayingMovie";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Header />
      <Primary />
      <Secondary />
    </div>
  );
};

export default Browse;
