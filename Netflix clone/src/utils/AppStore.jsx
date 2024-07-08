// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"; // Import the movies reducer

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer, // Add the movies reducer
  },
});

export default store;
