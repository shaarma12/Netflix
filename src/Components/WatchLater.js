import React from "react";
import { useSelector } from "react-redux";

const WatchLater = () => {
  const cart = useSelector((store) => store.cart.cartArray);
  console.log(cart);
  return (
    <div>
      <h1>WatchLater</h1>
    </div>
  );
};

export default WatchLater;
