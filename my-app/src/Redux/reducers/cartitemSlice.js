import { createSlice } from "@reduxjs/toolkit";
import { resetCart } from '../actions/resetAction';
export const initialState = {
  cartItems: [], // Array to store items in the cart
};

const cartSlice = createSlice({
    name: "cartItem",
    initialState,
    reducers: {
      addToCart: (state, action) => {
       
        const cartItems = Array.isArray(state.cartItems) ? state.cartItems : [];

        return {
          ...state,
          cartItems: [...cartItems, action.payload],
        };
      },
      extraReducers: (builder) => {
        builder.addCase(resetCart.type, (state) => {
            // Reset the cart to the initial state
            return initialState;
          });
      },
    },
  });
  

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
