import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IRepository } from "../../interfaces/IRepository";

export interface RepositoriesState {
  value: IRepository[];
}

const initialState: RepositoriesState = {
  value: [],
};

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositories: (state, action: PayloadAction<IRepository[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setRepositories } = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
