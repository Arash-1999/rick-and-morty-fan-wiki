import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  page: 1
};

const charSlice = createSlice({
  name: "chars",
  initialState,
  reducers: {
    addChars: (state, action) => {
      state.page++;
      state.data = [...state.data, ...action.payload];
    }
  }
});

export default charSlice.reducer;

export const { addChars } = charSlice.actions;

export const getChars = () => async (dispatch, getState) => {
  let url = "https://rickandmortyapi.com/api/character",
    page = getState().chars.page;
  let data = await fetch(page ? url + `?page=${page}` : url);
  data = await data.json();

  dispatch(addChars(data.results));
};

export const selectChars = (state) => state.chars;
