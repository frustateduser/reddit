import { configureStore } from "@reduxjs/toolkit";
import searchRedditReducer from "./features/searchReddit/searchRedditSlice";

const store = configureStore({
  reducer: {
    searchReddit: searchRedditReducer,
  },
});

export default store;