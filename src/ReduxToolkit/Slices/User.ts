import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userData: [],
    isLoading: false,
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const {
    setUserData,
    setLoading
} = user.actions

export default user.reducer