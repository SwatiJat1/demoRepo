import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slice/demoSlice";

const reducer = {
  todo: todoSliceReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
