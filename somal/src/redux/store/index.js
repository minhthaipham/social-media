import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducer/auth";
import userReducer from "../reducer/user";
import postReducer from "../reducer/post";
import commentReducer from "../reducer/comment";
import socketReducer from "../reducer/socket";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    socket: socketReducer,
  },
});
