import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserDetail = createAsyncThunk("post/getUserDetail", async (user_id) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_BASE_POINT}/user/${user_id}`,
    { headers: { "app-id": "61db222fb4e3dc5a1d5e85c0" } }
  );
  
  return res.data;
});

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    userDetail: {},
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchUserDetail.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUserDetail.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.userDetail = {...action.payload};
    },
    [fetchUserDetail.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectUserDetail = (state) => state.userDetail.userDetail;
export const selectStatus = (state) => state.userDetail.status;
export default userDetailSlice.reducer;
