import { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { USER_AVATAR } from "../Utils/constant";
import Lang from "../Utils/LangConstants";

const Login = () => {
  const [signin, setSignin] = useState(true);
  const language = useSelector((store) => store.config.configuration);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [ErrorMessageName, setErrorMessageName] = useState();
  const [ErrorMessageEmail, setErrorMessageEmail] = useState();
  const [errorMessagePassword, setErrorMessagePassword] = useState();
  const dispatch = useDispatch();

  return (
    <div>
      <div class="relative ">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Your Image"
          className="h-screen w-screen md:h-full object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute md:bottom-[-2.8rem] bottom-[5%] flex flex-col md:left-[34rem] left-[7%] md:w-[28rem] md:h-[41.5rem] w-[85%] h-[75%] bg-black bg-opacity-[0.85] items-center rounded-md">
        <h1 className="text-white md:w-80 w-60 md:mt-14 mt-5 md:mb-9 mb-6 md:text-4xl text-3xl font-medium md:">
          {signin ? Lang[language]?.SignIn : Lang[language]?.SignUp}
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-center"
        >
          {!signin && ErrorMessageName ? (
            <div>
              <input
                ref={name}
                className="mb-[0.40rem] py-[0.7rem] md:w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg border-b-[3px] border-[#e87c03]"
                type="text"
                placeholder={Lang[language]?.loginNamePlaceholder}
              />
              <p className="ml-2 text-[#e87c03] mt-0 mb-4 text-sm">
                {ErrorMessageName}
              </p>
            </div>
          ) : (
            !signin && (
              <input
                ref={name}
                className="mb-4 py-[0.7rem] md:w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg"
                type="text"
                placeholder={Lang[language]?.loginNamePlaceholder}
              />
            )
          )}
          {ErrorMessageEmail ? (
            <div>
              <input
                ref={email}
                className="mb-[0.40rem] py-[0.7rem] md:w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg border-b-[3px] border-[#e87c03]"
                type="text"
                placeholder={Lang[language]?.loginEmailPlaceholder}
              />
              <p className="ml-2 text-[#e87c03] mt-0 mb-4 text-sm">
                {ErrorMessageEmail}
              </p>
            </div>
          ) : (
            <input
              ref={email}
              className="mb-4 py-[0.7rem] md:w-80 px-5 rounded-md bg-[#333] md:placeholder:text-md placeholder-[#8c8c8c] text-white text-lg"
              type="text"
              placeholder={Lang[language]?.loginEmailPlaceholder}
            />
          )}
          {errorMessagePassword ? (
            <div>
              <input
                ref={password}
                className="mb-[0.40rem] py-[0.7rem] md:w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg border-b-[3px] border-[#e87c03]"
                type="password"
                placeholder={Lang[language]?.loginPasswordPlaceholder}
              />
              <p className="ml-2 text-[#e87c03] mt-0 mb-3 text-sm">
                {errorMessagePassword}
              </p>
            </div>
          ) : (
            <input
              ref={password}
              className="mb-4 py-[0.7rem] md:w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg"
              type="password"
              placeholder={Lang[language]?.loginPasswordPlaceholder}
            />
          )}
          <button
            className="py-[0.8rem] md:w-80 w-60 bg-[#e50914] text-white mt-6 mb-3 rounded-md font-bold"
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
                      photoURL: USER_AVATAR,
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
            {signin ? Lang[language]?.SignIn : Lang[language]?.SignUp}
          </button>
        </form>
        <div className="flex md:w-80 w-60 justify-between">
          <div className="flex">
            <input
              className="md:w-[1.15rem] w-3 mr-1 checked:bg-white"
              type="checkbox"
            />
            <p className="text-gray-300 text-xs md:text-sm">
              {Lang[language]?.RememberME}
            </p>
          </div>
          <Link to="/">
            <p className="text-gray-300 text-xs md:text-sm hover:underline">
              {Lang[language]?.needHelp}
            </p>
          </Link>
        </div>
        <div className="flex md:mt-20 mt-7 md:text-md text-sm md:w-80 w-60">
          <p className="text-[#a09c9c] mr-1">
            {signin
              ? Lang[language]?.newToNetflix
              : Lang[language]?.existingUser}
          </p>
          <p
            className="font-medium hover:underline text-white cursor-pointer"
            onClick={() => {
              setSignin(!signin);
            }}
          >
            {signin ? Lang[language]?.signUpNow : Lang[language]?.signInNow}
          </p>
        </div>
        <div className="flex">
          <p className="text-[#a09c9c] md:w-80 w-64 md:text-sm text-xs md:ml-1 ml-3 font-medium mt-3">
            {Lang[language]?.protected}
            <Link to="/">
              <span className="text-blue-700 w-80 hover:underline">
                {Lang[language]?.learnMore}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
