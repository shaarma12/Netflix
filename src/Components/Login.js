import { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { validate } from "../Utils/validate";
const Login = () => {
  const [signin, setSignin] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [ErrorMessage, setErrorMessage] = useState();
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
      <div className="absolute bottom-[-2.8rem] flex flex-col left-[34rem] w-[28rem] h-[41.5rem] bg-black bg-opacity-[0.89] items-center rounded-md">
        <h1 className="text-white mr-[12.5rem] mt-14 mb-9 text-4xl font-medium">
          {signin ? "Sign In" : "Sign Up"}
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-center"
        >
          {!signin && (
            <input
              ref={name}
              className="mb-4 py-[0.7rem] w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg"
              type="text"
              placeholder="Name"
            />
          )}
          {/* <p className="text-yellow-400">{ErrorMessage}</p> */}
          <input
            ref={email}
            className="mb-4 py-[0.7rem] w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg"
            type="text"
            placeholder="Email or phone number"
          />
          {/* <p className="text-yellow-400">{ErrorMessage}</p> */}
          <input
            ref={password}
            className="mb-5 py-[0.7rem] w-80 px-5 rounded-md bg-[#333] placeholde:text-md placeholder-[#8c8c8c] text-white text-lg"
            type="password"
            placeholder="Password"
          />
          <p className="mr-10 text-yellow-500 text-lg font-medium">
            {ErrorMessage}
          </p>
          <button
            className="py-[0.8rem] px-[8.3rem] bg-[#e50914] text-white mt-6 mb-3 rounded-md font-bold"
            onClick={() => {
              const errorMessage = validate(
                name.current.value,
                email.current.value,
                password.current.value
              );
              setErrorMessage(errorMessage);
            }}
          >
            {signin ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="flex">
          <div className="flex mr-[8rem]">
            <input className="w-[1.15rem] mr-1" type="checkbox" />
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
          <p className="text-[#a09c9c] px-14 text-sm ml-5 font-medium mt-2">
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
