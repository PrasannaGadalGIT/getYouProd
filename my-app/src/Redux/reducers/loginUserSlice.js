import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    id : '',
    email : '',
    username : ''
}

const UserSlice = createSlice({
    name : "user",

    initialState,
    reducers : {
        setUserDetails : (state, actions) => {
            return {
                ...state,
                id : actions.payload.id,
                email : actions.payload.email,
                userToken : actions.payload.userToken,
                username : actions.payload.userName,
                role : actions.payload.selectedOption
            }
        },


    }
})


export const {setUserDetails} = UserSlice.actions
export default UserSlice.reducer