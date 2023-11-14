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
              <img src={LOGO} alt="logo" className="w-32 ml-5" />
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
              <img src={LOGO} alt="logo" className="w-32 ml-5" />
              <ul className="flex text-white mx-9 mt-3 ">
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
            className="md:mr-6 md:p-2 p-1 text-sm bg-black bg-opacity-[0.85] text-white rounded-sm md:left-[82rem] left-[17rem] relative bottom-10 md:bottom-6"
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
              <div className="hidden md:flex md:w-52">
                {
                  <img
                    src={search}
                    alt="search"
                    className="hidden md:w-12 md:bg-[#2a2a2ab3] md:rounded-l-sm md:pr-3 md:pl-3 md:relative md:right-[13rem] md:bottom-[0.15rem] md:border-y-2 md:border-l-2 md:border-gray-200"
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
                  className="md:bg-[#2a2a2ab3] md:rounded-r-sm md:px-9 md:py-1 md:-ml-56 md:mr-10 md:relative md:bottom-[0.15rem] md:outline-none md:text-white md:border-y-2 md:border-r-2 md:border-gray-200"
                />
              </div>
            ) : (
              <img
                src={search}
                alt="Search"
                className="hidden md:w-6 md:cursor-pointer md:mr-6 md:mb-1"
                onClick={() => {
                  setShowInput(true);
                }}
              />
            )}
            <Link to="/browse">
              {!GPTPage && (
                <div
                  className="flex hover:opacity-70 transition-all duration-200"
                  onClick={() => {
                    dispatch(GPTsearch(true));
                  }}
                >
                  <p className="text-white mr-1">GPT</p>
                  <p className="text-white mr-6">Search</p>
                </div>
              )}
              {GPTPage && (
                <select
                  className="mr-6 p-[0.15rem] bg-[#2a2a2ab3] text-white rounded-sm"
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
              )}
            </Link>
            <Link to="/watchlater" className="mr-6">
              <img
                src={notification}
                alt="notification"
                className="w-[1.35rem] mr-6 cursor-pointer mb-[0.4rem]"
              />
            </Link>
            {cartCount.length > 0 && (
              <p className="text-white relative right-7 bottom-2 ">
                {cartCount.length}
              </p>
            )}

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
