import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesDataSlice";
import GPTReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    GPT: GPTReducer,
    config: configReducer,
  },
});

export default appStore;
