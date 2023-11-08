import React from "react";
import Play from "../Images/Play.png";
import info from "../Images/info.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToVideo } from "../Utils/VideoSlice";
import { useNavigate } from "react-router-dom";

const Title = ({ title, overview }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((store) => store.movie?.popularMovies);
  const movie = movies[12];
  const Title = title.toUpperCase();
  return (
    <div className="absolute w-[94.5em] aspect-video bg-gradient-to-r from-black">
      <div className="mt-80 ml-14">
        <h1 className="text-6xl font-extrabold mb-3 text-gray-100 w-[35rem]">
          {Title}
        </h1>
        <h3 className="text-md font-medium mb-6 text-gray-200 w-[33rem] text-justify">
          {overview.slice(0, 341)}
        </h3>
        <div className="flex">
          <button
            className="bg-white text-black font-bold h-[3rem] w-[8rem]  rounded-md mr-3 hover:opacity-80"
            onClick={() => {
              dispatch(addToVideo(movie));
              navigate("/watch");
            }}
          >
            <div className="flex pl-5 justify-center">
              <img
                src={Play}
                className="w-[1.7rem] mr-3 ml-2 h-[1.7rem] mt-[0.15rem]"
              />
              <p className="text-xl mb-1 mr-6">Play</p>
            </div>
          </button>
          <button className="bg-[#6d6d6eb3] text-white font-bold h-[3rem] w-[11.2rem] rounded-md text-xl pb-1 hover:opacity-80">
            <div className="flex justify-center mt-2 -ml-2">
              <img
                src={info}
                alt="More Info"
                className="w-9 -mt-[0.3rem] mr-2"
              />
              <p className="-mt-[0.15rem]">More Info</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
