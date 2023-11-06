import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesDataSlice";
import GPTReducer from "./gptSlice";
import configReducer from "./configSlice";
import addToCartSliceReducer from "./addToCartSlice";
import VideoSliceReducer from "./VideoSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    GPT: GPTReducer,
    config: configReducer,
    cart: addToCartSliceReducer,
    video: VideoSliceReducer,
  },
});

export default appStore;
