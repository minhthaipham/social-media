// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "../../api";
// export const createComment = createAsyncThunk(
//   "comment/createComment",
//   async ({ id, data }, { rejectWithValue }) => {
//     try {
//       const result = await api.createComment(id, data);
//       return result.data;
//     } catch (e) {
//       return rejectWithValue(e.response.data);
//     }
//   }
// );

// export const getComment = createAsyncThunk(
//   "comment/getComment",
//   async ({ id }, { rejectWithValue }) => {
//     try {
//       const result = await api.getComments(id);
//       return result.data;
//     } catch (e) {
//       return rejectWithValue(e.response.data);
//     }
//   }
// );
// const commentSlice = createSlice({
//   name: "comment",
//   initialState: {
//     comments: [],
//     loading: false,
//     errors: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [createComment.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [createComment.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.comments = [...state.comments, action.payload];
//     },
//     [createComment.rejected]: (state, action) => {
//       state.loading = false;
//       state.errors = action.payload;
//     },
//     [getComment.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [getComment.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.comments = action.payload;
//     },
//     [getComment.rejected]: (state, action) => {
//       state.loading = false;
//       state.errors = action.payload;
//     },
//   },
// });

// export default commentSlice.reducer;
