import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;  
        },
        removeUser: (state, action) => {
            return null;
        },
        updateUser: (state, action) => {
            return action.payload;
        }
    }
})

export const {addUser, removeUser, updateUser} = usersSlice.actions;
export default usersSlice.reducer;
