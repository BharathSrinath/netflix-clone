import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        isAccountSelected: false,
        isUpdateAccountSelected: false,
    },
    reducers: {
        openAccountSettings: (state, action) => {
            state.isAccountSelected = true;
        },
        closeAccountSettings: (state, action) => {
            state.isAccountSelected = false;
        },
        openUpdateAccountDetails: (state, action) => {
            state.isUpdateAccountSelected = true;
        },
        closeUpdateAccountDetails: (state, action) => {
            state.isUpdateAccountSelected = false;
        },
        saveAccountDetails: (state, action) => {
            state.isUpdateAccountSelected = false;
        }

    }
})

export const { openAccountSettings, closeAccountSettings, openUpdateAccountDetails, closeUpdateAccountDetails, saveAccountDetails } = accountSlice.actions;
export default accountSlice.reducer;