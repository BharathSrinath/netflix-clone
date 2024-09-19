import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import accountReducer from "./slices/accountSlice";
import searchReducer from "./slices/searchSlice";

const appStore = configureStore({
    reducer: {
        user: usersReducer,
        movies: moviesReducer,
        account: accountReducer,
        search: searchReducer,
    }
})

export default appStore;