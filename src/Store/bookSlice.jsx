import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    error: null,
  },
  reducers: {
    localBooks: (state, action) => {
      state.books = action.payload;
    },
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
  },
});
export const { addBook, localBooks } = bookSlice.actions;
export default bookSlice.reducer;
