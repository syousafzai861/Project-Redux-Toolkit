import { createSlice, nanoid } from "@reduxjs/toolkit";

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

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
      postAdded: {
          reducer(state, action) {
              state.push(action.payload)
          },
          prepare(title, content) {
              return {
                  payload: {
                      id: nanoid(),
                      title,
                      content,
        }
      }
    }
  }}});


export const selectAllPost = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
