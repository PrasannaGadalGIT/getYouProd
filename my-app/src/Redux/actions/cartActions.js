// actions.js
import { createAction } from "@reduxjs/toolkit";

export const resetCart = createAction("RESET_CART");

export const addToCart = (item) => {
  item.price = item.price * item.quantity;
   return {
      type: 'ADD_TO_CART',
      payload: item
    };
  };

  export const removeItem = createAction("REMOVE_ITEM");

  