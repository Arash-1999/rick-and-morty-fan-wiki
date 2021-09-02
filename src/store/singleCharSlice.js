import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  char: {},
  loading: true
};

const singleCharSlice = createSlice({
  name: "singleChar",
  initialState,
  reducers: {
    setChar: (state, action) => {
      state.char = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

// reducers
export default singleCharSlice.reducer;

// actions
export const { setChar, setLoading } = singleCharSlice.actions;

// thunk for getting single character from api
export const getSingleChar = (id) => async (dispatch) => {
  // set loading status
  dispatch(setLoading(true));
  // default endpoint
  let url = "https://rickandmortyapi.com/api/character/";
  let data = await fetch(url + id);
  data = await data.json();

  dispatch(setChar(data));
  dispatch(setLoading(false));
};

// selectors
export const selectSingleChar = (state) => state.singleChar;
