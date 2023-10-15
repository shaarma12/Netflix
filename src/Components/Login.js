import { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
const Login = () => {
  const [signin, setSignin] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [ErrorMessageName, setErrorMessageName] = useState();
  const [ErrorMessageEmail, setErrorMessageEmail] = useState();
  const [errorMessagePassword, setErrorMessagePassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div class="relative">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Your Image"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute bottom-[-2.8rem] flex flex-col left-[34rem] w-[28rem] h-[41.5rem] bg-black bg-opacity-[0.85] items-center rounded-md">
        <h1 className="text-white mr-[12.5rem] mt-14 mb-9 text-4xl font-medium">
          {signin ? "Sign In" : "Sign Up"}
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-center"
        >
          {!signin && ErrorMessageName ? (
            <div>
              <input
                ref={name}
                className="mb-[0.40rem] py-[0.7rem] w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg border-b-[3px] border-[#e87c03]"
                type="text"
                placeholder="Name"
              />
              <p className="ml-2 text-[#e87c03] mt-0 mb-4 text-sm">
                {ErrorMessageName}
              </p>
            </div>
          ) : (
            !signin && (
              <input
                ref={name}
                className="mb-4 py-[0.7rem] w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg"
                type="text"
                placeholder="Name"
              />
            )
          )}
          {ErrorMessageEmail ? (
            <div>
              <input
                ref={email}
                className="mb-[0.40rem] py-[0.7rem] w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg border-b-[3px] border-[#e87c03]"
                type="text"
                placeholder="Email or phone number"
              />
              <p className="ml-2 text-[#e87c03] mt-0 mb-4 text-sm">
                {ErrorMessageEmail}
              </p>
            </div>
          ) : (
            <input
              ref={email}
              className="mb-4 py-[0.7rem] w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg"
              type="text"
              placeholder="Email or phone number"
            />
          )}
          {errorMessagePassword ? (
            <div>
              <input
                ref={password}
                className="mb-[0.40rem] py-[0.7rem] w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg border-b-[3px] border-[#e87c03]"
                type="password"
                placeholder="Password"
              />
              <p className="ml-2 text-[#e87c03] mt-0 mb-3 text-sm">
                {errorMessagePassword}
              </p>
            </div>
          ) : (
            <input
              ref={password}
              className="mb-4 py-[0.7rem] w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg"
              type="password"
              placeholder="Password"
            />
          )}
          <button
            className="py-[0.8rem] px-[8.3rem] bg-[#e50914] text-white mt-6 mb-3 rounded-md font-bold"
            onClick={() => {
              if (!signin) {
                const errorMessageName = validateName(name.current.value);
                setErrorMessageName(errorMessageName);
                //  calling API for Sign Up new user.

                createUserWithEmailAndPassword(
                  auth,
                  // name.current.value,
                  email.current.value,
                  password.current.value
                )
                  .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;

                    updateProfile(user, {
                      displayName: name.current.value,
                      photoURL:
                        "https://avatars.githubusercontent.com/u/50957983?v=4",
                    })
                      .then(() => {
                        // Profile updated!
                        const { email, displayName, photoURL } =
                          auth.currentUser;
                        dispatch(
                          addUser({
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL,
                          })
                        );
                        navigate("/browse");
                      })
                      .catch((error) => {
                        // An error occurred
                        // ...
                      });
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    errorMessage && setErrorMessageEmail(errorMessage);
                  });
              } else {
                const errorMessageEmail = validateEmail(email.current.value);
                const errorMessagePassword = validatePassword(
                  password.current.value
                );

                // calling API for Sign-In User.
                signInWithEmailAndPassword(
                  auth,
                  email.current.value,
                  password.current.value
                )
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigate("/browse");
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    errorMessage &&
                      signin &&
                      setErrorMessageEmail(errorMessage);
                  });
                setErrorMessageEmail(errorMessageEmail);
                setErrorMessagePassword(errorMessagePassword);
              }
            }}
          >
            {signin ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="flex">
          <div className="flex mr-[8rem]">
            <input
              className="w-[1.15rem] mr-1 checked:bg-white"
              type="checkbox"
            />
            <p className="text-gray-300 text-sm">Remember me</p>
          </div>
          <Link to="/">
            <p className="text-gray-300 text-sm hover:underline">Need help?</p>
          </Link>
        </div>
        <div className="flex mr-[6.8rem] mt-20 text-md ">
          <p className="text-[#a09c9c] mr-1">
            {signin ? "New to Netflix?" : "Existing User?"}
          </p>
          <p
            className="font-medium hover:underline text-white cursor-pointer"
            onClick={() => {
              setSignin(!signin);
            }}
          >
            {signin ? "Sign up now" : "Sign in now"}
          </p>
        </div>
        <div className="flex">
          <p className="text-[#a09c9c] px-14 text-sm ml-3 font-medium mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <Link to="/">
              <span className="text-blue-700 hover:underline">Learn more.</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
