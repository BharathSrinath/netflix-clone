// import { configureStore } from "@reduxjs/toolkit";
// import usersReducer from "./slices/userSlice";
// import moviesReducer from "./slices/moviesSlice";
// import accountReducer from "./slices/accountSlice";
// import searchReducer from "./slices/searchSlice";

// const appStore = configureStore({
//     reducer: {
//         user: usersReducer,
//         movies: moviesReducer,
//         account: accountReducer,
//         search: searchReducer,
//     }
// })

// export default appStore;

// Update store with redux-persist
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import usersReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import accountReducer from "./slices/accountSlice";
import searchReducer from "./slices/searchSlice";

// Step 1: Define persist configuration for the user reducer
const userPersistConfig = {
  key: "user", // Key for the persisted user slice
  storage, // Use localStorage for persistence
  // blacklist: ['loading'],  // Optional: don't persist loading or temporary states (just an example. we dont have anything called loading)
};

// Step 2: Combine the reducers
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, usersReducer), // Persisting only the user reducer
  movies: moviesReducer,
  account: accountReducer,
  search: searchReducer,
});

// Step 3: Create the persisted reducer
const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // Ignore paths that might contain non-serializable values
        ignoredPaths: ['register', 'result'],
      },
    }),
});

// Step 4: Create the persistor
export const persistor = persistStore(appStore);

export default appStore;
