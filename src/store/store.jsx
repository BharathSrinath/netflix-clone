import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";

const appStore = configureStore({
    reducer: {
        user: usersReducer
    }
})

export default appStore;