import axios from "axios";
import { localBooks } from "../bookSlice";

export const fetchBook = () => async (dispatch) => {
  try {
    // const response = await axios.get('http://localhost:3000/books');
    const response = await axios.get(
      "https://25e3-125-99-156-10.ngrok-free.app/library/books",
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      }
    );

    console.log(response.data);

    dispatch(localBooks(response.data));
  } catch (error) {
    console.log(error);
  }
};

