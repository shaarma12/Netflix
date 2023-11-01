import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Moviecard from "./Moviecard";

const WatchLater = () => {
  const cart = useSelector((store) => store.cart.cartArray);
  console.log(cart);
  return (
    <div className="bg-black">
      {/* <Header /> */}
      <h1 className="text-white text-center text-xl font-bold">WatchLater</h1>
      <div className="mt-44 flex gap-3 pl-14 flex-wrap">
        {cart.map((i) => (
          <Moviecard key={i.id} movieData={i} />
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
