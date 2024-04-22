// import {api} from '../../api';
import {addBook} from '../bookSlice'
import axios from 'axios';




export const booksAdd =(booksData)=>async(dispatch)=>{
    console.log("fetch working")
        try {
            const response = await axios.post('http://localhost:3000/books', booksData);
            console.log(response.data);
            dispatch(addBook(response.data));
        } catch (error) {
            console.log(error);
        }
}