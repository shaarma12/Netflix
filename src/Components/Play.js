import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewVideo from "./NewVideo";
import { Link } from "react-router-dom";
import { LOGO } from "../Utils/constant";

const Play = () => {
  const video = useSelector((store) => store.video?.videoArray);
  return (
    <div className="-mt-28">
      <Link to="/browse">
        <img src={LOGO} alt="logo" className="w-60 ml-5 top-5 absolute" />
      </Link>
      <NewVideo moviehi={video?.id} />
    </div>
  );
};

export default Play;
