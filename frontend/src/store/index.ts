import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";
import taskReducer from "./taskSlice.js";
import errorReducer from "./errorSlice.js";

const rootReducer = combineReducers({
  counterReducer,
  taskReducer,
  errorReducer,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default store;
