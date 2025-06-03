import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threadSlice";

export const store = configureStore({
  reducer: {
    threads: threadsReducer,
  },
});