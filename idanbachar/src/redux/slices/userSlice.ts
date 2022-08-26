import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IGithub";

export interface UserState {
  value?: IUser;
}

const initialState: UserState = {
  value: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
