import { createSlice } from "@reduxjs/toolkit";

type ErrorType = {
  errorObj: {
    showModal: boolean;
    message: string;
  };
};

const initialState: ErrorType = { errorObj: { showModal: false, message: "" } };

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    showErrorModal(state, action: { payload: string }) {
      state.errorObj.showModal = !state.errorObj.showModal;
      state.errorObj.message = action.payload;
    },
    closeModal(state) {
      state.errorObj.showModal = false;
    },
  },
});

export const errorAction = errorSlice.actions;

export default errorSlice.reducer;
