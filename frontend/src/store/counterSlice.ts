import { createSlice } from "@reduxjs/toolkit";

type CounterType = { counter: number };

const initialState: CounterType = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
