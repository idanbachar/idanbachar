import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import repositoriesReducer from "./slices/repositoriesSlice";
import modalReducer from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    repositories: repositoriesReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
