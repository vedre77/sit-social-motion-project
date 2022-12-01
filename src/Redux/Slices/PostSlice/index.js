import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const localToken = localStorage.getItem("token");

export const fetchFollowingPosts = createAsyncThunk(
    'PostSlice/fetchFollowingPosts', async() => {
        const url = "https://motion.propulsion-home.ch/backend/api/social/posts/following/"
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

export const fetchLikedPosts = createAsyncThunk(
    'PostSlice/fetchLikedPosts', async() => {
        const url = "https://motion.propulsion-home.ch/backend/api/social/posts/likes/"
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

export const fetchFriendPosts = createAsyncThunk(
    'PostSlice/fetchFriendPosts', async() => {
        const url = "https://motion.propulsion-home.ch/backend/api/social/posts/friends/"
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

export const fetchPostComments = createAsyncThunk(
    'PostSlice/fetchPostComments', async(id) => {
        const url = `https://motion.propulsion-home.ch/backend/api/social/comments/${id}/`
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

export const PostSlice = createSlice({
    name: 'posts',
    initialState: {
        followingPosts: undefined,
        likedPosts: undefined,
        friendPosts: undefined,
        postComments: undefined,
    },
    extraReducers: {
        // PENDING
        [fetchFollowingPosts.pending]: (state) => {
            state.loading = 'loading posts'
        },
        [fetchLikedPosts.pending]: (state) => {
            state.loading = 'loading posts'
        },
        [fetchFriendPosts.pending]: (state) => {
            state.loading = 'loading posts'
        },
        [fetchPostComments.pending]: (state) => {
            state.loading = 'loading comments'
        },
        // FULFILLED
        [fetchFollowingPosts.fulfilled]: (state, action) => {
            state.loading = 'posts loaded'
            state.followingPosts = (action.payload)
        },
        [fetchLikedPosts.fulfilled]: (state, action) => {
            state.loading = 'posts loaded'
            state.likedPosts = (action.payload)
        },
        [fetchFriendPosts.fulfilled]: (state, action) => {
            state.loading = 'posts loaded'
            state.friendPosts = (action.payload)
        },
        [fetchPostComments.fulfilled]: (state, action) => {
            state.loading = 'comments loaded'
            state.postComments = (action.payload)
        },
        // REJECTED
        [fetchFollowingPosts.rejected]: (state) => {
            state.loading = 'loading following posts failed'
        },
        [fetchLikedPosts.rejected]: (state) => {
            state.loading = 'loading liked posts failed'
        },
        [fetchFriendPosts.rejected]: (state) => {
            state.loading = 'loading friend posts failed'
        },
        [fetchPostComments.rejected]: (state) => {
            state.loading = 'loading comments failed'
        }
    }
});

// export const {  } = PostSlice.actions;
export default PostSlice.reducer;