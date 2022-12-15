import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
export const createPost = createAsyncThunk(
  "post/createPost",
  async ({ data }, { rejectWithValue }) => {
    try {
      console.log(data);
      const result = await api.createPost(data);
      return result.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const getPost = createAsyncThunk(
  "post/getPost",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getPost();
      return result.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const getPostByUser = createAsyncThunk(
  "post/getPostByUser",
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.getPostByUser(id);
      return result.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const likePost = createAsyncThunk(
  "post/likePost",
  async ({ id }, { rejectWithValue }) => {
    try {
      const result = await api.likePost(id);
      return result.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const getUserLikePost = createAsyncThunk(
  "post/getUserLikePost",
  async ({ id }, { rejectWithValue }) => {
    try {
      const result = await api.getUserLikePost(id);
      return result.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ id }, { rejectWithValue }) => {
    try {
      const result = await api.deletePost(id);
      return result.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const createComment = createAsyncThunk(
  "post/createComment",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const result = await api.createComment(id, data);
      return result.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const likeComment = createAsyncThunk(
  "post/likeComment",
  async ({ id }, { rejectWithValue }) => {
    try {
      const result = await api.likeComment(id);
      return result.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: {},
    userLikePost: [],
    userLikeComment: [],
    status: "idle",
    loading: false,
    errors: null,
  },
  reducers: {
    clearId: (state) => {
      state.post = {};
    },
  },
  extraReducers: {
    [createPost.pending]: (state) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = [...state.posts, action.payload];
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [getPost.pending]: (state) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [likePost.pending]: (state) => {
      state.loading = true;
    },
    [likePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
    [likePost.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [getUserLikePost.pending]: (state) => {
      state.loading = true;
    },
    [getUserLikePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.userLikePost = action.payload;
    },
    [getUserLikePost.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [deletePost.pending]: (state) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload._id
      );
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [createComment.pending]: (state) => {
      state.loading = true;
    },
    [createComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
    [createComment.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [likeComment.pending]: (state) => {
      state.loading = true;
    },
    [likeComment.fulfilled]: (state, action) => {
      state.loading = false;
      // state.userLikeComment = state.userLikeComment.map((comment) =>
      //   comment._id === action.payload._id ? action.payload : comment
      // );
      state.userLikeComment = action.payload;
    },
    [likeComment.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [getPostByUser.pending]: (state) => {
      state.loading = true;
    },
    [getPostByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPostByUser.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export const { clearId } = postSlice.actions;
export default postSlice.reducer;
