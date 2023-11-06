import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
  name: "video",
  initialState: {
    videoArray: null,
  },
  reducers: {
    addToVideo: (state, action) => {
      state.videoArray = action.payload;
    },
  },
});
export const { addToVideo } = VideoSlice.actions;
export default VideoSlice.reducer;
