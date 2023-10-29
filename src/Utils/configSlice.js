import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    configuration: "en",
  },
  reducers: {
    Language: (state, action) => {
      state.configuration = action.payload;
    },
  },
});

export const { Language } = configSlice.actions;
export default configSlice.reducer;
