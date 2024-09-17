import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";

const appStore = configureStore({
    reducer: {
        user: usersReducer,
        movies: moviesReducer,
    }
})
export default appStore;