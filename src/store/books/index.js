import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const getBooks = createAsyncThunk("getBooks", async (item) => {
  console.log(item);
  const { data } = await axiosInstance.get(
    `/v1/volumes?q=${item.book}&maxResults=30&key=${apiKey}`
  );
  return data;
});

const initialState = {
  books: null,
  loaders: {
    common: false,
  },
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    selectedBook: (state, { payload }) => {
      state.selectedBook = payload;
    },
  },
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
  },
});

export const { selectedCard, selectedCardById } = booksSlice.actions;

export default booksSlice.reducer;
