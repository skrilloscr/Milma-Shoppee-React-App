import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.results = action.payload;
    },
    clearSearchResults: (state) => {
      state.results = [];
    },
  },
});

export const { setSearchResults, clearSearchResults } = searchSlice.actions;
export const selectSearchResults = (state) => state.search.results;

export default searchSlice.reducer;
