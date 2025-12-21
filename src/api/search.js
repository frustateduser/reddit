import axios from "axios";

// Use Vite dev proxy during development to avoid client-side tracking/adblock blocks.
const API_BASE_URL = "/api/reddit";

export const searchPosts = async (query) => {
  const response = await axios.get(`${API_BASE_URL}/r/${query}.json`);
  return response.data;
};
