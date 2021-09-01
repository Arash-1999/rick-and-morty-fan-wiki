import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  char: {},
  loading: true
};

const singleCharSlice = createSlice({
  name: "singleChar",
  initialState,
  reducers: {
  }
});

export default singleCharSlice.reducer;

export const selectSingleChar = (state) => state.singleChar;
