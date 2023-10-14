import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    signin: (state, action) => {
      return action.payload;
    },
  },
  signout: (state, action) => {
    return null;
  },
});

export default userSlice.reducer;

export const { signin, signout } = userSlice.actions;
