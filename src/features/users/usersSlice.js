import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:0,name:"saifkhan"},
    {id:1,name:"Azharkhan"},
    {id:2,name:"Mazharkhan"},
]

 const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{}
 })

 export const selectAllUsers = (state)=>state.users;
 export default usersSlice.default;  