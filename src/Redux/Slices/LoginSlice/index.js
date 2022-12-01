import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        token: undefined,
        refreshToken: undefined,
        user: undefined,
    },
    reducers: {
       setToken: (state, action) => {
            state.token = action.payload
       },
       setRefreshToken: (state, action) => {
            state.refreshToken = action.payload
       },
       setUser: (state, action) => {
            state.user = action.payload
       },
}});

export const { setToken, setUser, setRefreshToken } = LoginSlice.actions;
export default LoginSlice.reducer;