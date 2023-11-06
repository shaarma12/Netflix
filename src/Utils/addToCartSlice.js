import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
    cartArray: [],
  },
  reducers: {
    remove: (state, action) => {
      state.cartArray.length = 0;
    },
    addToCart: (state, action) => {
      state.cartArray.push(action.payload);
    },
  },
});
export const { addToCart, remove } = addToCartSlice.actions;
export default addToCartSlice.reducer;
