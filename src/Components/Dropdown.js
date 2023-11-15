import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { USER_AVATAR } from "../Utils/constant";
import { Link } from "react-router-dom";
import pencil from "../Images/pencil.svg";
import help from "../Images/help.svg";
import transfer from "../Images/transfer.svg";
import account from "../Images/account.svg";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";

const Dropdown = ({ setShowDropDown, imgRef }) => {
  const dropDownRef = useRef();
  const user = useSelector((store) => store.user);
  window.addEventListener("click", (e) => {
    if (e.target !== imgRef.current && e.target !== Dropdown.current) {
      setShowDropDown(false);
    }
  });
  return (
    <div
      className="absolute top-14 text-white w-56 ml-8  p-4 bg-[#202020b3] rounded-sm"
      ref={dropDownRef}
    >
      <div className="flex mb-2 mt-2">
        <img
          src={user?.photoURL}
          alt="user photo"
          className="w-8 rounded-md mr-2"
        />
        <Link to="/browse">
          <p className="mt-1 hover:underline">{user?.displayName}</p>
        </Link>
      </div>
      <div className="flex mb-2">
        <img src={pencil} alt="user photo" className="w-8 rounded-md mr-2" />
        <Link to="/browse">
          <p className="mt-1 hover:underline">Manage Profiles</p>
        </Link>
      </div>
      <div className="flex mb-2">
        <img src={transfer} alt="user photo" className="w-8 rounded-md mr-2" />
        <Link to="/browse">
          <p className="mt-1 hover:underline">Transfer Profile</p>
        </Link>
      </div>
      <div className="flex mb-2">
        <img src={account} alt="user photo" className="w-8 rounded-md mr-2" />
        <Link to="/browse">
          <p className="mt-1 hover:underline">Account</p>
        </Link>
      </div>

      <div className="flex mb-4">
        <img src={help} alt="user photo" className="w-8 rounded-md mr-2" />
        <Link to="/browse">
          <p className="mt-1 hover:underline">Help Center</p>
        </Link>
      </div>
      <div className="border-b-[1px] border-[#aca8a8b3] w-56 -ml-4"></div>
      <div className="flex mt-3">
        <Link to="/browse">
          <p
            className="mt-1 hover:underline ml-7"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  // Sign-out successful.
                })
                .catch((error) => {
                  // An error happened.
                });
            }}
          >
            Sign out of Netflix
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
