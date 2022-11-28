import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
export const searchUser = createAsyncThunk(
  "user/search",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.search(data);
      return result.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.getUserById(id);
      return result.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const editUserById = createAsyncThunk(
  "user/editUserById",
  async ({ id, data, navigate }, { rejectWithValue }) => {
    try {
      const result = await api.editUser(id, data);
      navigate("/profile");
      return result.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const followUser = createAsyncThunk("user/followUser", async (id) => {
  try {
    const result = await api.follow(id);
    return result.data;
  } catch (e) {
    return e.response.data;
  }
});

const userSlide = createSlice({
  name: "user",
  initialState: {
    user: [],
    users: {},
    loading: false,
    errors: null,
  },
  reducers: {},
  extraReducers: {
    [searchUser.pending]: (state, action) => {
      state.loading = true;
    },
    [searchUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [searchUser.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [getUserById.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getUserById.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [editUserById.pending]: (state, action) => {
      state.loading = true;
    },
    [editUserById.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [editUserById.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [followUser.pending]: (state, action) => {
      state.loading = true;
    },
    [followUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [followUser.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default userSlide.reducer;
