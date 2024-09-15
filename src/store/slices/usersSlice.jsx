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
        }
    }
})

export const {addUser, removeUser} = usersSlice.actions;
export default usersSlice.reducer;
