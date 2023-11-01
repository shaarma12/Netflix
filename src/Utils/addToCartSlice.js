import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
    cartArray: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartArray.push(action.payload);
    },
  },
});
export const { addToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
