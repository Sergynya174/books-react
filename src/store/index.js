import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksSlice from "./books";

const rootReducer = combineReducers({
  books: booksSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
