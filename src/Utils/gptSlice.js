import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    GPTopen: false,
  },
  reducers: {
    GPTsearch: (state, action) => {
      state.GPTopen = action.payload;
    },
  },
});
export const { GPTsearch } = gptSlice.actions;
export default gptSlice.reducer;
