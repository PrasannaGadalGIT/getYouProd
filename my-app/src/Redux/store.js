import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage' //using local storage
import { persistStore, persistReducer } from 'redux-persist'

import loginUserSlice from "./reducers/loginUserSlice";
import cartReducer from "./reducers/addToCart";

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  user: loginUserSlice,
  cart: cartReducer
  
});
// the user os persisted even after the login
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer : persistedReducer, //reducer is assigned with the persisted reducer 
  middleware : [logger] //runs in the middle execution of the program
});

export default store;
export const persistor = persistStore(store)