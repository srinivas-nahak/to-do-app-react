import { createSlice } from "@reduxjs/toolkit";

export type NotificationType = {
  message: string;
  isError: boolean;
  showNotification: boolean;
  taskCompleted?: boolean;
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
    showNotification(_, action: { payload: NotificationType }) {
      // state.showNotification = action.payload.showNotification;
      // state.isError = action.payload.isError;
      // state.message = action.payload.message;
      // if (action.payload.taskCompleted)
      //   state.taskCompleted = action.payload.taskCompleted;

      return { ...action.payload };
    },
  },
});

export const notificationAction = notificationSlice.actions;

export default notificationSlice.reducer;
