import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchPosts } from "../../api/search";

const initialState = {
  searchTerm: "",
  searchResults: {},
};

export const fetchSearchResults = createAsyncThunk(
  "searchReddit/fetchSearchResults",
  async (searchTerm) => {
    const response = await searchPosts(searchTerm);
    return response;
  }
);

const searchRedditSlice = createSlice({
  name: "searchReddit",
  initialState: initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResults.pending, (state) => {
      state.searchResults = {};
    });
    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      state.searchResults = action.payload;
    });
    builder.addCase(fetchSearchResults.rejected, (state, action) => {
      state.searchResults = {};
      state.error = action.error;
    });
  },
});

export const { setSearchTerm } = searchRedditSlice.actions;
export default searchRedditSlice.reducer;
