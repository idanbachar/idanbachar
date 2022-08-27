import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IModal } from "../../interfaces/IModal";

export interface ModalState {
  value?: IModal;
}

const initialState: ModalState = {
  value: {
    component: undefined,
    isVisible: false,
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<IModal>) => {
      state.value = action.payload;
    },
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
