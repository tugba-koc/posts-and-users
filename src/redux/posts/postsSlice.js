import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk("post/getPost", async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_BASE_POINT}/post?limit=10`,
    { headers: { "app-id": "61db222fb4e3dc5a1d5e85c0" } }
  );

  return res.data.data;
});

export const postsSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchPost.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.posts = [...state.posts, ...action.payload];
    },
    [fetchPost.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectPosts = (state) => state.post.posts;
export const selectStatus = (state) => state.post.status;
export default postsSlice.reducer;
