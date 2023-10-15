import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Utils/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSign = useSelector((store) => store.user);
  console.log(userSign);
  return (
    <div className="absolute w-[13.5rem] ml-6 mb-1 z-50 opacity-100 filter contrast-125">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {userSign && (
        <div>
          <div className="flex flex-col items-center relative left-[75rem] bottom-[4.9rem]">
            <img src={userSign.photoURL} className="w-14 rounded-full" />
            <p className="text-white font-medium">{userSign.displayName}</p>
          </div>
          <button
            className="relative bottom-[9.3rem] ml-[88rem] bg-red-700 w-20 py-3 rounded-md text-white hover:scale-y-105 transition-all duration-200 font-medium"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  // Sign-out successful.

                  navigate("/");
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
