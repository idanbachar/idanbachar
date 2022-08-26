import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import repositoriesReducer from "./slices/repositoriesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    repositories: repositoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
