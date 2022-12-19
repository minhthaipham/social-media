import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
// auth
export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);
export const google = (data) => API.post("/auth/google", data);

// user
export const search = (data) => API.get(`/auth/search?fullName=${data}`);
export const getUserById = (id) => API.get(`/auth/user/${id}`);
export const editUser = (id, data) => API.patch(`/auth/user/${id}`, data);
export const getAllUser = (id) => API.get(`/auth/userNotMe/${id}`);

// post
export const follow = (id) => API.patch(`/auth/user/${id}/follow`);
export const createPost = (data) => API.post("/post", data);
export const getPost = () => API.get("/post");
export const likePost = (id) => API.patch(`/post/${id}/likePost`);
export const getUserLikePost = (id) => API.get(`/post/${id}/user`);
export const deletePost = (id) => API.delete(`/post/${id}`);
export const getPostByUser = (id) => API.get(`/post/${id}`);

//comments
export const createComment = (id, data) =>
  API.post(`/comment/${id}/comment`, data);
export const likeComment = (id) => API.patch(`/comment/${id}/likeComment`);
export const replyComment = (id, data) =>
  API.post(`/comment/${id}/replyComment`, data);
