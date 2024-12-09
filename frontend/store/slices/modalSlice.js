import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalData: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModal: (state, action) => {
      state.modalData = action.payload;
    },
  },
});

export const { handleModal } = modalSlice.actions;

// Corrected Selector
export const selectModal = (state) => state.modal.modalData;

export default modalSlice.reducer;
