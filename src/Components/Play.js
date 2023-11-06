import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewVideo from "./NewVideo";

const Play = () => {
  const video = useSelector((store) => store.video?.videoArray);
  const dispatch = useDispatch();
  return (
    <div>
      <NewVideo moviehi={video?.id} />
    </div>
  );
};

export default Play;
