import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constant";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // subscibing the store.
  const userSign = useSelector((store) => store.user);

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
          <div className="flex flex-col items-center relative left-[75rem] bottom-7">
            <img src={userSign.photoURL} className="w-10 rounded-md" />
            {/* <p className="text-white font-medium">{userSign.displayName}</p> */}
          </div>
          <button
            className="relative -top-[4.5rem] ml-[88rem] bg-red-700 w-20 py-3 rounded-md text-white hover:scale-y-105 transition-all duration-200 font-medium"
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
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
