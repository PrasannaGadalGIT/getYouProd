import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  productName: '',
  price : "",
  productId : '',
  image : '',
  description : " "


};


const CartSlice = createSlice({
  name : "cart",

  initialState,
  reducers : {
      setCartDetails : (state, actions) => {
          console.log(actions)
      },


  }
})

export const {setCartDetails} = CartSlice.actions;
export default CartSlice.reducer;
