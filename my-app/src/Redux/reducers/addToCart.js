import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
   productName: '',
  price: "",
  productId: ''
  , // Array to store items in the cart
  
};
  
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartDetails: (state, action) => {
      return {
        ...state,

        productId: action.payload.id,
        price: action.payload.price,
        productName: action.payload.name,
        description: action.payload.description,
        image : action.payload.image
      };
    },
  },
});

export const { setCartDetails } = CartSlice.actions;
export default CartSlice.reducer;