import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Moviecard from "./Moviecard";
import { LOGO } from "../Utils/constant";
import { remove } from "../Utils/addToCartSlice";
import { Link } from "react-router-dom";
import error from "../Images/error.png";

const WatchLater = () => {
  const cart = useSelector((store) => store.cart.cartArray);
  const dispatch = useDispatch();
  return (
    <div>
      <div class="fixed">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Your Image"
          className="md:static fixed h-full w-full"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <Link to="/browse">
        <img
          src={LOGO}
          alt="logo"
          className="w-60 md:ml-5 ml-[15%] md:top-5 top-[3%] relative"
        />
      </Link>
      {!cart.length == 0 && (
        <button
          className="bg-[#d4d4d4] text-red-600 relative left-[82rem]  p-2 text-lg font-bold rounded-md hover:opacity-80"
          onClick={() => {
            dispatch(remove());
          }}
        >
          Remove
        </button>
      )}

      {cart.length == 0 && (
        <div>
          <img
            src={error}
            alt="error"
            className="relative md:w-72 w-48 md:left-[40rem] left-[20%] md:top-10 top-16"
          />
          <h1 className="text-[#d4d4d4] font-bold md:text-3xl text-2xl absolute md:left-[40rem] left-[10%] md:top-[28rem] top-[60%]">
            Nothing in Watch Later
          </h1>
          <h1 className="text-[#d4d4d4] font-bold md:text-3xl text-2xl absolute md:left-[30rem] left-[10%] md:top-[31rem] top-[66%]">
            Please Add Some Movies To Watch Later🚀
          </h1>
        </div>
      )}
      <div className="mt-32 flex gap-3 pl-14 flex-wrap">
        {cart.map((i) => (
          <Moviecard key={i.id} movieData={i} />
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
