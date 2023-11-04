// import { useEffect } from "react";
// import { options } from "./constant";
// import { useDispatch } from "react-redux";
// import { addCardVideo } from "./moviesDataSlice";

// const useMovieCard = ({ moviehi }) => {
//   const dispatch = useDispatch();
//   const fetchData = async () => {
//     const results = await fetch(
//       `https://api.themoviedb.org/3/movie/+${moviehi}+/videos?language=en-US`,
//       options
//     );
//     const data = await results.json();
//     const res = data?.results;
//     const rest = res.filter((i) => {
//       return i?.type === "Trailer";
//     });
//     const trailer = rest.length === 0 ? res[0] : rest[0];
//     dispatch(addCardVideo(trailer));
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
// };
// export default useMovieCard;
