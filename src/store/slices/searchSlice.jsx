import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
  },
  reducers: {
    openSearchView: (state) => {
      state.showSearch = true;
    },
    closeSearchView: (state) => {
      state.showSearch = false;
    },
  },
});

export const { openSearchView, closeSearchView } = searchSlice.actions;
export default searchSlice.reducer;
