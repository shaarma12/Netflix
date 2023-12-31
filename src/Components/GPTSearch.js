import React, { useRef } from "react";
import openai from "../Utils/openai";
import { options } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { MovieResults } from "../Utils/gptSlice";
import Lang from "../Utils/LangConstants";
const GPTSearch = () => {
  const Languages = useSelector((Store) => Store.config.configuration);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const fetchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = data.json();
    return json;
  };
  const openaiAPI = async () => {
    const query =
      "Act as a Movie recommdation system and suggest some movies,series and TV Shows for the query" +
      inputRef.current.value +
      "only give me names of 5 movies, comma separated like the example result ahead.Example result: Gadar, Sholay, Jab tak hai jaan, Don, Prem Ratan Dhan Payo.";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const result = chatCompletion.choices[0]?.message?.content.split(", ");

    const movieData = result.map((i) => {
      return fetchMovie(i);
    });

    // by the above condition we have fetchMovie fn() which is a async function and it will not stop for one like when first movie data is prepared at that time it will start for another four also now all the five will have promise and now we have to resolve that promise by Promise.All().

    const movieResult = await Promise.all(movieData);
    dispatch(MovieResults({ movieResult: movieResult, movieData: result }));
  };
  return (
    <div>
      <form
        className="absolute bottom-[30rem] top-40 md:flex-row flex-col justify-center left-[21rem]"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          ref={inputRef}
          className="md:w-[45rem] w-80 h-14 md:ml-14 -ml-[95%] md:text-xl md:rounded-md md:placeholder:pl-10 placeholder:pl-6 placeholder:text-gray-400 md:placeholder:text-gray-400 md:pl-4 pl-4 md:bg-[#1e1e1e] bg-[#1e1e1e] md:text-white text-white rounded-md"
          placeholder={Lang[Languages].Placeholder}
        />
        <button
          className="bg-[#e50914ef] md:ml-6 md:w-24 w-44 h-12 absolute md:top-0 top-20 md:left-[48rem] -left-[73%] md:h-14 text-white text-lg font-bold rounded-md hover:opacity-80 transition-all duration-200"
          onClick={() => {
            openaiAPI();
          }}
        >
          {Lang[Languages].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearch;
