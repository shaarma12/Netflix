import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesDataSlice";
import GPTReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    GPT: GPTReducer,
  },
});

export default appStore;
