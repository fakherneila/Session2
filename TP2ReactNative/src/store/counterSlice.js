import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value = Math.max(0, state.value - 1);
    },
    reset: (state) => {
      state.value = 0;
    },
    addFive: (state) => {
      state.value += 5;
    },
    // Bonus du RN8.7 : action multiplierParDeux
    multiplyByTwo: (state) => {
      state.value *= 2;
    },
  },
});

export const { increment, decrement, reset, addFive, multiplyByTwo } =
  counterSlice.actions;
export default counterSlice.reducer;
