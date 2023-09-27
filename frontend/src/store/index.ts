import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice.js";
import errorReducer from "./errorSlice.js";
import notificationReducer from "./notificationSlice.js";

const rootReducer = combineReducers({
  taskReducer,
  errorReducer,
  notificationReducer,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default store;
