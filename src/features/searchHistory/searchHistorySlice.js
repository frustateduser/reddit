import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      const searchTerm = action.payload;
      if (!state.history.includes(searchTerm)) {
        state.history.push(searchTerm);
      }
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { addToHistory, clearHistory } = searchHistorySlice.actions;
export default searchHistorySlice.reducer;