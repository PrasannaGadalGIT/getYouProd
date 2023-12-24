import { createSlice } from "@reduxjs/toolkit";
import { resetCart } from '../actions/cartActions';
import { removeItem } from '../actions/cartActions'; 



export const initialState = {
  cartItems: [], // Array to store items in the cart
  shipping : 100
};
const cartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.productId === newItem.productId);
      
      if (!existingItem) {
        return {
          ...state,
          cartItems: [...state.cartItems,{ ...newItem, quantity: newItem.quantity, price: newItem.price * newItem.quantity, total : newItem.price + 100 }],
        };
      }

      // If the item with the same ID already exists, you might want to update its quantity or take some other action
      // For now, this example just increments the quantity
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.productId === newItem.productId ? { ...item, quantity: item.quantity + newItem.quantity, price:  item.price + (newItem.price  * newItem.quantity)} : item
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetCart.type, (state) => {
      // Reset the cart to the initial state
      return initialState;
    });
    builder.addCase(removeItem, (state, action) => {
      // Remove the item with the specified productId
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.productId !== action.payload),
      };
    });
  },
});
  

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
