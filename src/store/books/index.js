import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const getBooks = createAsyncThunk("getBooks", async (item) => {
  const subject =
    item.categories !== "all" ? `subject:${item.categories}` : null;
  const { data } = await axiosInstance.get(
    `v1/volumes?q=${subject}+${item.book}&orderBy=${item.sorting}&maxResults=40&key=${apiKey}`
  );
  return data;
});

export const getBook = createAsyncThunk("getBook", async (id) => {
  const { data } = await axiosInstance.get(`v1/volumes/${id}?key=${apiKey}`);
  return data;
});

const initialState = {
  books: null,
  book: null,
  loaders: {
    common: false,
  },
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getBooks
    builder.addCase(getBooks.pending, (state) => {
      state.loaders.common = true;
    });
    builder.addCase(getBooks.fulfilled, (state, { payload }) => {
      state.books = payload;
      state.loaders.common = false;
    });
    builder.addCase(getBooks.rejected, (state, { error }) => {
      state.loaders.common = false;
      console.log(error);
    });
    //getBook
    builder.addCase(getBook.pending, (state) => {
      state.loaders.common = true;
    });
    builder.addCase(getBook.fulfilled, (state, { payload }) => {
      state.book = payload;
      state.loaders.common = false;
    });
    builder.addCase(getBook.rejected, (state, { error }) => {
      state.loaders.common = false;
      console.log(error);
    });
  },
});

export const { setFilters } = booksSlice.actions;

export default booksSlice.reducer;
