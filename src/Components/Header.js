import { auth } from "../Utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANG } from "../Utils/constant";
import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import search from "../Images/search.svg";
import notification from "../Images/notification.svg";
import up from "../Images/up.svg";
import down from "../Images/down.svg";
import Dropdown from "./Dropdown";
import { GPTsearch } from "../Utils/gptSlice";
import { Language } from "../Utils/configSlice";

const Header = () => {
  // Subscribing the cart
  const cartCount = useSelector((store) => store.cart.cartArray);
  const [userInput, setUserInput] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgRef = useRef();
  // subscibing the store for userSign-in.
  const userSign = useSelector((store) => store.user);
  // Subscribing the store for the GPT Search Page.
  const GPTPage = useSelector((store) => store.GPT?.GPTopen);
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
    <div className="absolute md:w-[13.5rem] w-32 md:ml-6 md:mb-1 mt-2 z-50 opacity-100 filter contrast-125">
      {userSign ? (
        <div className="sticky top-0">
          {GPTPage ? (
            <div className="flex mt-3">
              <img
                src={LOGO}
                alt="logo"
                className="w-32 ml-5"
                onClick={() => {
                  dispatch(GPTsearch(false));
                }}
              />
              <ul className="hidden md:flex md: text-white mx-9 md:mt-3 ">
                <Link to="/browse">
                  <li
                    className="mr-5 hover:opacity-70 transition-all duration-200"
                    onClick={() => {
                      dispatch(GPTsearch(false));
                    }}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/browse">
                  <div className="flex hover:opacity-70 transition-all duration-200">
                    <li className="mr-1">TV</li>
                    <li className="mr-5">Shows</li>
                  </div>
                </Link>
                <Link to="/browse">
                  <li className="mr-5 hover:opacity-70 transition-all duration-200">
                    Movies
                  </li>
                </Link>
                <Link to="/browse">
                  <div className="flex hover:opacity-70 transition-all duration-200">
                    <li className="mr-1">New</li>
                    <li className="mr-1">&</li>
                    <li className="mr-5">Popular</li>
                  </div>
                </Link>
                <Link to="/browse">
                  <div className="flex hover:opacity-70 transition-all duration-200">
                    <li className="mr-1">My</li>
                    <li className="mr-5">List</li>
                  </div>
                </Link>
                <Link to="/browse">
                  <div className="flex hover:opacity-70 transition-all duration-200">
                    <li className="mr-1">Browse</li>
                    <li className="mr-1">by</li>
                    <li>Languages</li>
                  </div>
                </Link>
              </ul>
            </div>
          ) : (
            <div className="flex mt-14">
              <img
                src={LOGO}
                alt="logo"
                className="md:w-32 w-24 md:-mt-0 -mt-3 md:ml-5 ml-2"
              />
              <ul className="hidden md:flex text-white mx-9 mt-3 ">
                <Link to="/browse">
                  <li
                    className="mr-5 hover:opacity-70 transition-all duration-200"
                    onClick={() => {
                      dispatch(GPTsearch(false));
                    }}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/browse">
                  <div className="flex hover:opacity-70 transition-all duration-200">
                    <li className="mr-1">TV</li>
                    <li className="mr-5">Shows</li>
                  </div>
                </Link>
                <Link to="/browse">
                  <li className="mr-5 hover:opacity-70 transition-all duration-200">
                    Movies
                  </li>
                </Link>
                <Link to="/browse">
                  <div className="flex hover:opacity-70 transition-all duration-200">
                    <li className="mr-1">New</li>
                    <li className="mr-1">&</li>
                    <li className="mr-5">Popular</li>
                  </div>
                </Link>
                <Link to="/browse">
                  <div className="flex hover:opacity-70 transition-all duration-200">
                    <li className="mr-1">My</li>
                    <li className="mr-5">List</li>
                  </div>
                </Link>
                <Link to="/browse">
                  <div className="flex hover:opacity-70 transition-all duration-200">
                    <li className="mr-1">Browse</li>
                    <li className="mr-1">by</li>
                    <li>Languages</li>
                  </div>
                </Link>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div>
          <img src={LOGO} alt="logo" />
          <select
            className="md:mr-6 md:p-2 p-1 text-sm bg-black bg-opacity-[0.85] text-white rounded-sm md:left-[82rem] left-[17rem] relative bottom-10 md:bottom-14"
            onClick={(e) => {
              dispatch(Language(e.target.value));
            }}
          >
            {SUPPORTED_LANG.map((i) => {
              return (
                <option key={i.default} value={i.default}>
                  {i.name}
                </option>
              );
            })}
          </select>
        </div>
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
                      userInput ? setShowInput(true) : setShowInput(false);
                    }}
                  />
                }
                <input
                  type="text"
                  onChange={(e) => {
                    setUserInput(e.target.value);
                  }}
                  placeholder="Movies,TV Shows"
                  className="bg-[#2a2a2ab3] rounded-r-sm px-9 py-1 -ml-56 mr-10 relative bottom-[0.15rem] outline-none text-white border-y-2 border-r-2 border-gray-200"
                />
              </div>
            ) : (
              <div className="hidden md:block w-6 mr-6">
                <img
                  src={search}
                  alt="Search"
                  className="w-6 cursor-pointer mr-6 mb-1"
                  onClick={() => {
                    setShowInput(true);
                  }}
                />
              </div>
            )}
            <Link to="/browse">
              {!GPTPage && (
                <div
                  className="flex hover:opacity-70 transition-all duration-200 text-sm md:text-lg md:mt-0 mt-2"
                  onClick={() => {
                    dispatch(GPTsearch(true));
                  }}
                >
                  <p className="text-white md:mr-1 md:static absolute right-[66.5rem]">
                    GPT
                  </p>
                  <p className="text-white md:mr-6 md:static absolute right-[63.7rem]">
                    Search
                  </p>
                </div>
              )}
              {GPTPage && (
                <select
                  className="md:mr-6 p-[0.15rem] bg-transparent md:bg-[#2a2a2ab3] text-white rounded-sm -ml-[1200%] md:mt-0 mt-1 md:ml-0"
                  onClick={(e) => {
                    dispatch(Language(e.target.value));
                  }}
                >
                  {SUPPORTED_LANG.map((i) => {
                    return (
                      <option
                        key={i.default}
                        value={i.default}
                        className="md:bg-none bg-[#2a2a2ab3]"
                      >
                        {i.name}
                      </option>
                    );
                  })}
                </select>
              )}
            </Link>
            <Link to="/watchlater" className="mr-6">
              <img
                src={notification}
                alt="notification"
                className="w-[1.2rem] md:w-20 md:mr-6 absolute md:static right-[69rem] md:right-0 cursor-pointer md:mb-[0.4rem] md:top-1 top-2"
              />
            </Link>
            {cartCount.length > 0 && (
              <p className="text-white md:relative md:right-7 absolute right-[68.5rem] bottom-2 ">
                {cartCount.length}
              </p>
            )}
            <img
              src={userSign.photoURL}
              ref={imgRef}
              className="md:w-8 w-5 rounded-md md:relative bottom-[0.15rem] cursor-pointer md:mr-2 absolute md:right-0 right-[61.5rem]  md:-top-1 top-2"
              onClick={() => {
                setShowDropDown(!showDropDown);
              }}
            />
            {showDropDown ? (
              <img src={up} className="md:w-4 w-0 cursor-pointer" />
            ) : (
              <img src={down} className="md:w-4 w-0 cursor-pointer" />
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
