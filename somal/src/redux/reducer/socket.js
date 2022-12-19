import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const setSocket = createAsyncThunk(
  "socket/setSocket",
  async ({ socket }, { rejectWithValue }) => {
    try {
      return socket;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const socketSlice = createSlice({
  name: "socket",
  initialState: {
    socket: null,
    loading: false,
    errors: null,
  },
  reducers: {},
  extraReducers: {
    [setSocket.pending]: (state) => {
      state.loading = true;
    },
    [setSocket.fulfilled]: (state, action) => {
      state.loading = false;
      state.socket = action.payload;
    },
    [setSocket.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default socketSlice.reducer;
