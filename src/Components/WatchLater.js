import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Moviecard from "./Moviecard";

const WatchLater = () => {
  const cart = useSelector((store) => store.cart.cartArray);
  console.log(cart);
  return (
    <div>
      <Header />
      <h1>WatchLater</h1>
      <div className="flex overflow-x-scroll scroll-smooth no-scrollbar">
        <div className="flex gap-2 pl-14">
          {cart.map((i) => (
            <Moviecard key={i.id} movieData={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
