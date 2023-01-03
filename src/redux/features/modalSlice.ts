import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  activeModal: JSX.Element | null;
}

const initialState: ModalState = {
  activeModal: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }: PayloadAction<JSX.Element>) => {
      state.activeModal = payload;
    },
    hideModal: (state) => {
      state.activeModal = null;
    },
  },
})

export const { openModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;