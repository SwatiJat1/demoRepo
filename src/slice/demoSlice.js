import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
export const todoSliceReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    create: (state, action) => {
      console.log("aaaaaaaaaaa", action.payload, "GGGGGGGGG", current(state));
      state.list = action.payload;
    },
  },
});

// Action creators
export const { create } = todoSliceReducer.actions;
export default todoSliceReducer.reducer;
