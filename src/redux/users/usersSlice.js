import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("post/getUser", async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_BASE_POINT}/user?limit=10`,
    { headers: { "app-id": "61db222fb4e3dc5a1d5e85c0" } }
  );
  return res.data.data;
});

export const usersSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.users = [...state.users, ...action.payload];
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectUsers = (state) => state.user.users;
export const selectStatus = (state) => state.user.status;
export default usersSlice.reducer;
