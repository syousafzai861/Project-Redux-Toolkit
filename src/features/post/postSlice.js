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
    content: "Code And Jusr Code",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
