import { auth } from "../Utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constant";
import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import search from "../Images/search.svg";
import notification from "../Images/notification.svg";
import up from "../Images/up.svg";
import down from "../Images/down.svg";
import Dropdown from "./Dropdown";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgRef = useRef();
  // subscibing the store.
  const userSign = useSelector((store) => store.user);
  const [showInput, setShowInput] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, Signed up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unmounting
    return () => unsubscribe;
  }, []);

  return (
    <div className="absolute w-[13.5rem] ml-6 mb-1 z-50 opacity-100 filter contrast-125">
      {userSign ? (
        <div>
          <div className="flex mt-14">
            <img src={LOGO} alt="logo" className="w-32 ml-5" />
            <ul className="flex text-white mx-9 mt-3 ">
              <Link to="/browse">
                <li className="mr-5">Home</li>
              </Link>
              <Link to="/browse">
                <li className="mr-1">TV</li>
              </Link>
              <Link to="/browse">
                <li className="mr-5">Shows</li>
              </Link>
              <Link to="/browse">
                <li className="mr-5">Movies</li>
              </Link>
              <Link to="/browse">
                <li className="mr-1">New</li>
              </Link>
              <Link to="/browse">
                <li className="mr-1">&</li>
              </Link>
              <Link to="/browse">
                <li className="mr-5">Popular</li>
              </Link>
              <Link to="/browse">
                <li className="mr-1">My</li>
              </Link>
              <Link to="/browse">
                <li className="mr-5">List</li>
              </Link>
              <Link to="/browse">
                <li className="mr-1">Browse</li>
              </Link>
              <Link to="/browse">
                <li className="mr-1">by</li>
              </Link>
              <Link to="/browse">
                <li>Languages</li>
              </Link>
            </ul>
          </div>
        </div>
      ) : (
        <img src={LOGO} alt="logo" />
      )}
      {userSign && (
        <div>
          <div className="flex justify-center relative left-[75rem] bottom-11">
            {showInput ? (
              <div className="flex w-52">
                {
                  <img
                    src={search}
                    alt="search"
                    className="w-12 bg-[#2a2a2ab3] rounded-l-sm pr-3 pl-3 relative right-[13rem] bottom-[0.15rem] border-y-2 border-l-2 border-gray-200"
                    onClick={() => {
                      setShowInput(false);
                    }}
                  />
                }
                <input
                  type="text"
                  placeholder="Movies,TV Shows"
                  className="bg-[#2a2a2ab3] rounded-r-sm px-9 py-1 -ml-56 mr-10 relative bottom-[0.15rem] outline-none text-white border-y-2 border-r-2 border-gray-200"
                />
              </div>
            ) : (
              <img
                src={search}
                alt="Search"
                className="w-6 cursor-pointer mr-6 mb-1 "
                onClick={() => {
                  setShowInput(true);
                }}
              />
            )}
            <Link to="/browse">
              <p className="text-white mr-6">Children</p>
            </Link>
            <img
              src={notification}
              alt="notification"
              className="w-[1.35rem] mr-6 cursor-pointer mb-[0.4rem]"
            />

            <img
              src={userSign.photoURL}
              ref={imgRef}
              className="w-8 rounded-md relative bottom-[0.15rem] cursor-pointer mr-2"
              onClick={() => {
                setShowDropDown(!showDropDown);
              }}
            />
            {showDropDown ? (
              <img src={up} className="w-4 cursor-pointer" />
            ) : (
              <img src={down} className="w-4 cursor-pointer" />
            )}
            {showDropDown && (
              <Dropdown setShowDropDown={setShowDropDown} imgRef={imgRef} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
