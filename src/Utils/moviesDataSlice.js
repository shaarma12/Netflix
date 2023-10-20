import { createSlice } from "@reduxjs/toolkit";

const movieDataSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    airingToday: null,
    onTheAir: null,
    popularShows: null,
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
    addairingToday: (state, action) => {
      state.airingToday = action.payload;
    },
    addonTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
    addpopularShows: (state, action) => {
      state.popularShows = action.payload;
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
  addairingToday,
  addpopularShows,
  addonTheAir,
  addtopRatedShows,
  addTrailer,
} = movieDataSlice.actions;
export default movieDataSlice.reducer;
