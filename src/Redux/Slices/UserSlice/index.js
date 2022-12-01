import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const localToken = localStorage.getItem("token");

export const fetchLoggedInUser = createAsyncThunk(
    'UserSlice/fetchLoggedInUser', async() => {
        const url = "https://motion.propulsion-home.ch/backend/api/users/me"
        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer ${localToken}`
            })
        }
        const response = await fetch(url, config);
        if (!response.ok) {
            return `An error has occured: ${response.status}`;
        }
        const result = await response.json();
        return result;
    }
)

export const UserSlice = createSlice({
    name: 'logeddInUser',
    initialState: {
        user: undefined
    },
    extraReducers: {
        // PENDING
        [fetchLoggedInUser.pending]: (state) => {
            state.loading = 'loading your info'
        },
        // FULFILLED
        [fetchLoggedInUser.fulfilled]: (state, action) => {
            state.loading = 'your info loaded'
            state.user = (action.payload)
        },
        // REJECTED
        [fetchLoggedInUser.rejected]: (state) => {
            state.loading = 'loading failed'
    }
}});

export default UserSlice.reducer;