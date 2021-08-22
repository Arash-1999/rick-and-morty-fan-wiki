import { configureStore } from "@reduxjs/toolkit";
import charReducer from "./charsSlice.js";

const store = configureStore({
  reducer: {
    chars: charReducer
  }
});

export default store;
