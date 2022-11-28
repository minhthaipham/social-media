import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducer/auth";
import userReducer from "../reducer/user";
import postReducer from "../reducer/post";
export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    post: postReducer,
  },
});
