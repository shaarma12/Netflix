import React from "react";

const Title = ({ title, overview }) => {
  const Title = title.toUpperCase();
  return (
    <div className="absolute w-screen aspect-video bg-gradient-to-r from-black">
      <div className="mt-64 ml-11">
        <h1 className="text-7xl font-extrabold mb-3 text-white w-[35rem]">
          {Title}
        </h1>
        <h3 className="text-lg font-medium mb-6 text-white w-[35rem]">
          {overview}
        </h3>
        <button className="bg-white text-black font-bold h-[3rem] w-[7.5rem] rounded-md mr-3">
          Play
        </button>
        <button className="bg-gray-600 text-white font-bold h-[3rem] w-[10.5rem] rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Title;
