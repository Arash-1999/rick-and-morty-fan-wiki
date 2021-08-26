import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  page: "https://rickandmortyapi.com/api/character"
};

// character slice
const charSlice = createSlice({
  name: "chars",
  initialState,
  reducers: {
    addChars: (state, action) => {
      state.page = action.payload.next;
      state.data = [...state.data, ...action.payload.data];
    },
    setChars: (state, action) => {
      state.page = action.payload.next;
      state.data = action.payload.data;
    }
  }
});

// character slice reducers
// this will export as default
export default charSlice.reducer;

// character slice actions
export const { addChars, setChars } = charSlice.actions;

// load characters
export const getChars = () => async (dispatch, getState) => {
  // get new page url
  let url = getState().chars.page;
  // check validation of new page url
  if(url === null) return;
  // fetch data from api
  let data = await fetch(url);
  data = await data.json();

  // add new data to store
  dispatch(addChars({data: data.results, next: data.info.next}));
};

// thunk for getting characters by given query
export const getCharsByQuery = (query) => async (dispatch) => {
  // default endpoint
  let url = "https://rickandmortyapi.com/api/character/?name=";
  // fetch data from api
  let data = await fetch(url + query);
  data = await data.json();

  // add new data to store
  dispatch(setChars({data: data.results, next: data.info.next}));
};

// selecting characters
export const selectChars = (state) => state.chars;
