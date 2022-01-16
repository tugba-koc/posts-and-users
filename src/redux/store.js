import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts/postsSlice"
import usersSlice from "./users/usersSlice"
import userDetailSlice from "./userDetail/userDetailSlice"

export const store = configureStore({
    reducer:{
        post : postsSlice,
        user : usersSlice,
        userDetail : userDetailSlice
    }
})