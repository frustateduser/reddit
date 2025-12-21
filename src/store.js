import { configureStore } from "@reduxjs/toolkit";
import searchRedditReducer from "./features/searchReddit/searchRedditSlice";
import searchHistoryReducer from "./features/searchHistory/searchHistorySlice";

const store = configureStore({
  reducer: {
    searchReddit: searchRedditReducer,
    searchHistory: searchHistoryReducer,
  },
});

export default store;