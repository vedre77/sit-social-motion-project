import { configureStore } from "@reduxjs/toolkit";
import LoginSliceReducer from './Slices/LoginSlice';
import UserSliceReducer from './Slices/UserSlice';
import PostSliceReducer from "./Slices/PostSlice";



export default configureStore({
    reducer: {
      addToken: LoginSliceReducer,
      addRefreshToken: LoginSliceReducer,
      addUser: LoginSliceReducer,
      userData: UserSliceReducer,
      posts: PostSliceReducer
    }
})