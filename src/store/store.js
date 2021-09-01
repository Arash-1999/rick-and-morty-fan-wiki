import { configureStore } from "@reduxjs/toolkit";

import charReducer from "./charsSlice.js";
import singleCharReducer from "./singleCharSlice.js";

const store = configureStore({
  reducer: {
    chars: charReducer,
    singleChar: singleCharReducer
  }
});

export default store;
