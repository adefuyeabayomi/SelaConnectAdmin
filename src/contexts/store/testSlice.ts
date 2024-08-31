import { createSlice } from "@reduxjs/toolkit/react";

const initialState = 0;

export const counterSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    updateTest: (state, action) => {
      state += action.payload;
    },
  },
});

export const { updateTest } = counterSlice.actions;

export default counterSlice.reducer;
