import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
    name: "member",
    initialState: {
        members: [],
        error:null
    },
    reducers: {
        addMember: (state, action) => {
            state.members =[...state.members,action.payload];
        },
    },
});
export const { addMember } = memberSlice.actions;
export default memberSlice.reducer;