import { createSlice } from "@reduxjs/toolkit";

export type NotificationType = {
  message: string;
  isError: boolean;
  showNotification: boolean;
};

const initialState: NotificationType = {
  message: "",
  isError: false,
  showNotification: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(state, action: { payload: NotificationType }) {
      state.showNotification = action.payload.showNotification;
      state.isError = action.payload.isError;
      state.message = action.payload.message;
    },
  },
});

export const notificationAction = notificationSlice.actions;

export default notificationSlice.reducer;
