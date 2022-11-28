import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
export const login = createAsyncThunk(
  "auth/login",
  async ({ data, toast, history }, { rejectWithValue }) => {
    try {
      const response = await api.login(data);
      toast.success("Login successfully");
      history("/home");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ data, toast, history }, { rejectWithValue }) => {
    try {
      const response = await api.register(data);
      toast.success("Register successfully");
      history("/home");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const google = createAsyncThunk(
  "auth/google",
  async ({ data, toast, history }, { rejectWithValue }) => {
    try {
      const response = await api.google(data);
      toast.success("Google login successfully");
      history("/home");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: null,
    loading: false,
    errors: null,
  },
  reducers: {
    logout: (state) => {
      state.authData = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.authData = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.authData = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [google.pending]: (state) => {
      state.loading = true;
    },
    [google.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.authData = action.payload;
    },
    [google.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
