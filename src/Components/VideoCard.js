import React, { useState } from "react";
import HoverVideo from "./HoverVideo";
import { useDispatch, useSelector } from "react-redux";
import Play from "../Images/Play.png";
import add from "../Images/add.svg";
import thumbs from "../Images/thumbs.svg";
import cool from "../Images/cool.svg";
import { addToCart } from "../Utils/addToCartSlice";
import { addToVideo } from "../Utils/VideoSlice";
import { useNavigate } from "react-router-dom";

const VideoCard = () => {
  const [tag, setTag] = useState(null);
  const [onHoverText, setOnHoverText] = useState(null);
  const [duration, setDuration] = useState(false);
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const card = useSelector((store) => store.movie.movieId);
  const title = !card?.original_title
    ? card?.original_name
    : card?.original_title;
  setTimeout(() => {
    setDuration(false);
  }, 2000);
  return (
    <div className="flex bg-[#141414] flex-col items-center rounded-md scale-y-125 absolute top-10 right-5  w-[20rem] z-50 h-[14rem] ml-10">
      {duration && (
        <p className="text-white text-xs absolute top-24 left-[10rem] bg-[#141414] p-2">
          {tag}
        </p>
      )}
      <HoverVideo moviehi={card.id} />
      <p className="text-white text-2xl ml-10 mt-1 w-full font-bold">{title}</p>
      <p className="text-xs text-white mt-1  w-28 ml-28">{onHoverText}</p>
      <div className="flex ">
        <button
          className="bg-white rounded-full w-9 h-8 px-1 absolute top-[11rem] right-64 hover:opacity-80 mr-2"
          onMouseEnter={() => {
            setOnHoverText("Play");
          }}
          onMouseLeave={() => {
            setOnHoverText(null);
          }}
          onClick={() => {
            dispatch(addToVideo(card));
            navigate("/watch");
          }}
        >
          <img src={Play} alt="Play" className="w-4 ml-2" />
        </button>
        <button
          className=" bg-[#141414] border-2 border-[#5e5959] rounded-full w-9 h-8 px-1 absolute top-[11rem] right-52 hover:opacity-80 mr-2"
          onMouseEnter={() => {
            setOnHoverText(" Add to Watch Later");
          }}
          onMouseLeave={() => {
            setOnHoverText(null);
          }}
        >
          <img
            src={add}
            alt="Play"
            className="w-5 ml-[0.15rem]"
            onClick={() => {
              dispatch(addToCart(card));
              setTag("Added to Watch Later");
              setDuration(true);
            }}
          />
        </button>
        <button
          className=" bg-[#141414] border-2 border-[#5e5959] rounded-full w-9 h-8 px-1 absolute top-[11rem] right-40 hover:opacity-80 mr-2"
          onMouseEnter={() => {
            setOnHoverText("Add to Liked Videos");
          }}
          onMouseLeave={() => {
            setOnHoverText(null);
          }}
          onClick={() => {
            setLike(true);
          }}
        >
          {like ? (
            <img src={cool} alt="cool" className="w-5 ml-[0.15rem]" />
          ) : (
            <img src={thumbs} alt="Play" className="w-5 ml-[0.15rem]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
