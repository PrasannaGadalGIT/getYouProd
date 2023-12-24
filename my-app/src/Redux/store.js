import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import loginUserSlice from "./reducers/loginUserSlice";
import productDetailSlice from "./reducers/productDetailsSlice"; // Corrected naming
import cartItemSlice from "./reducers/cartitemSlice"; // Corrected naming

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  user: loginUserSlice,
  productDetails: productDetailSlice,
  cartItems: cartItemSlice,
});


const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer, // Fix: pass the persisted reducer here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});
export const persistor = persistStore(store);

export { loginUserSlice, productDetailSlice, cartItemSlice }; // Export your slices if needed
