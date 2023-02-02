import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "i am learing redux toolkit",
    content: "its fun doing programming",
  },
  {
    id: 2,
    title: "i am learing React framework",
    content: "Code And Just Code",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllPost = (state) => state.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
