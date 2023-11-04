// import React, { StrictMode } from "react";
// import { useSelector } from "react-redux";
// import useMovieCard from "../Utils/useMovieCard";

// const HoverVideo = () => {
//   const moviehi = useSelector((store) => store.movie?.movieId?.id);
//   const cardTrailer = useSelector((store) => store.movie?.CardVideo);
//   useMovieCard({ moviehi });
//   return (
//     <div>
//       <div className="w-[94.5rem]">
//         <iframe
//           src={
//             "https://www.youtube.com/embed/" +
//             cardTrailer?.key +
//             "?autoplay=1&loop=1&autopause=0&mute=1"
//           }
//           title="YouTube video player"
//           allowFullScreen
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           className="w-[94.974rem] aspect-video -mt-12"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default HoverVideo;
