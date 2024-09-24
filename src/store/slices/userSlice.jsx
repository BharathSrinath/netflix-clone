import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const { addUser, removeUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
