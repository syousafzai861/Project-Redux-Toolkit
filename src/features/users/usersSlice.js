import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'SAIF KHAN' },
    { id: '1', name: 'ZAIN KHAN' },
    { id: '2', name: 'AHSAN KHAN' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer
