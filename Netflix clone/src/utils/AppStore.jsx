// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default store;
