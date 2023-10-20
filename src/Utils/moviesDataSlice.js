import { createSlice } from "@reduxjs/toolkit";

const movieDataSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    onTheAir: null,
    topRatedShows: null,
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    addonTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },

    addtopRatedShows: (state, action) => {
      state.topRatedShows = action.payload;
    },

    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addonTheAir,
  addtopRatedShows,
  addTrailer,
} = movieDataSlice.actions;
export default movieDataSlice.reducer;
