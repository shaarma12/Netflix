import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
const Login = () => {
  const [signin, setSignin] = useState(true);
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
      <div className="absolute bottom-[-3rem] flex flex-col left-[34rem] w-[29rem] h-[42rem] bg-black bg-opacity-80 items-center rounded-md">
        <h1 className="text-white mr-[12rem] mt-14 mb-9 text-4xl font-medium">
          {signin ? "Sign In" : "Sign Up"}
        </h1>
        <form className="flex flex-col items-center">
          {!signin && (
            <input
              className="mb-4 py-[0.8rem] px-[3.8rem] rounded-md bg-[#333] placeholder:text-lg text-white text-lg"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            className="mb-4 py-[0.7rem] w-80 px-5 rounded-md bg-[#333] placeholder:text-md placeholder-[#8c8c8c] text-white text-lg"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="mb-5 py-[0.7rem] w-80 px-5 rounded-md bg-[#333] placeholde:text-md placeholder-[#8c8c8c] text-white text-lg"
            type="password"
            placeholder="Password"
          />
          <button className="py-[0.8rem] px-[8.3rem] bg-[#e50914] text-white mt-6 mb-4 rounded-md font-bold">
            {signin ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="flex">
          <div className="flex mr-[8rem]">
            <input
              className="w-[1.15rem] mr-1 bg-[#333] border-none "
              type="checkbox"
            />
            <p className="text-gray-300 text-sm">Remember me</p>
          </div>
          <Link to="/">
            <p className="text-gray-300 text-sm hover:underline">Need help?</p>
          </Link>
        </div>
        <div className="flex mr-[6.2rem] mt-20 text-md ">
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
          <p className="text-[#a09c9c] px-14 text-sm ml-4 font-medium mt-2">
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
