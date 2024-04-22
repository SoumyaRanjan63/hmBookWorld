import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './bookSlice';
import memberReducer from './memberSlice'
 
 const store = configureStore({
    reducer:{
        books:booksReducer,
        member:memberReducer
    }
});
export default store ;