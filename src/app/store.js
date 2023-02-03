import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
// import  userReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    // users: userReducer
  },
});
