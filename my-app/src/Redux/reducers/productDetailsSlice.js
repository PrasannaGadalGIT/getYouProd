import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
   productName: '',
  price: "",
  productId: ''
  , // Array to store items in the cart
  
};
  
const ProductSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      return {
        ...state,

        productId: action.payload._id,
        price: action.payload.price,
        productName: action.payload.productName,
        description: action.payload.productDetails,
        image : action.payload.productPic
      };
    },
  },
});

export const { setProductDetails } = ProductSlice.actions;
export default ProductSlice.reducer;