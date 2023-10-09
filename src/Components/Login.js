import Header from "./Header";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
      <div className="absolute bottom-[-4rem] flex flex-col left-[34rem] w-[28rem] h-[43rem] bg-black bg-opacity-80 items-center rounded-md">
        <h1 className="text-white mr-[11.3rem] mt-14 mb-9 text-4xl font-medium">
          Sign In
        </h1>
        <form className="flex flex-col items-center">
          <input
            className="mb-4 py-[0.8rem] px-[3.8rem] rounded-md bg-[#333] placeholder:text-lg"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="mb-5 py-[0.8rem] px-[3.8rem] rounded-sm bg-[#333] placeholder:text-lg"
            type="password"
            placeholder="Password"
          />
          <button className="py-[0.8rem] px-[7.8rem] bg-[#e50914] text-white mt-6 mb-4 rounded-md font-bold">
            Sign In
          </button>
        </form>
        <div className="flex">
          <div className="flex mr-28">
            <input className="w-[1.15rem] mr-1 bg-[#333]" type="checkbox" />
            <p className="text-gray-300 text-sm">Remember me</p>
          </div>
          <Link to="/">
            <p className="text-gray-300 text-sm hover:underline">Need help?</p>
          </Link>
        </div>
        <div className="flex mr-[5.5rem] mt-24 text-md">
          <p className="text-[#a09c9c] mr-1">New to Netflix?</p>
          <p className="font-medium hover:underline text-white cursor-pointer">
            Sign up now
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
