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
                userToken : actions.payload.userToken
            }
        },


    }
})


export const {setUserDetails} = UserSlice.actions
export default UserSlice.reducer