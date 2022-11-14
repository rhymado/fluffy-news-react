import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import actionStrings from "../actions/actionStrings";
import { getBook } from "../../https/books";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  err: null,
};

// const getBookThunk = createAsyncThunk("books/getBook", () => {
//   return getBook();
// });
const getBookThunk = createAsyncThunk("books/getBook", async (onSuccess) => {
  try {
    const response = await getBook();
    if (typeof onSuccess === "function") onSuccess();
    return response.data;
  } catch (err) {
    return err;
  }
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: {
    [getBookThunk.pending]: (prevState) => ({
      ...prevState,
      isLoading: true,
      isError: false,
    }),
    [getBookThunk.fulfilled]: (prevState, { payload }) => ({
      ...prevState,
      isLoading: false,
      data: payload.result,
    }),
    [getBookThunk.rejected]: (prevState, { payload }) => ({
      ...prevState,
      isError: true,
      isLoading: false,
      err: payload.err.message,
    }),
  },
});

export const bookActions = {
  ...bookSlice.actions,
  getBookThunk,
};

export default bookSlice.reducer;
