import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    GPTopen: false,
    movieName: null,
    movieData: null,
  },
  reducers: {
    GPTsearch: (state, action) => {
      state.GPTopen = action.payload;
    },
    MovieResults: (state, action) => {
      const { movieResult, movieData } = action.payload;
      state.movieName = movieData;
      state.movieData = movieResult;
    },
  },
});
export const { GPTsearch, MovieResults } = gptSlice.actions;
export default gptSlice.reducer;
