import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewVideo from "./NewVideo";
import { Link } from "react-router-dom";
import { LOGO } from "../Utils/constant";

const Play = () => {
  const video = useSelector((store) => store.video?.videoArray);
  return (
    <div className="md:-mt-28 mt-44">
      <Link to="/browse">
        <img
          src={LOGO}
          alt="logo"
          className="w-60 md:ml-5 ml-14 top-5 absolute"
        />
      </Link>
      <NewVideo moviehi={video?.id} />
    </div>
  );
};

export default Play;
