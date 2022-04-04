import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import fetchDataSlice from "./slice/fetchDataSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fetchData:fetchDataSlice
  },
});
