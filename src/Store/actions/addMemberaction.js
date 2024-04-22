import axios from 'axios';
import addMember from '../memberSlice';

export const addMembers = (memberData) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:3000/members', memberData);
        console.log(response.data);
        dispatch(addMember(response.data));
    } catch (error) {
        console.log(error);
    }
}