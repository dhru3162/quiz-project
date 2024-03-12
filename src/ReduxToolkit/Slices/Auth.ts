import { createSlice } from "@reduxjs/toolkit"
import { Cookies } from "react-cookie";

const initialState = {
    loggedInData: {},
    isAuth: false,
    isLoading: false,
    isFirstLoading: true
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        loginSuccess: (state, action) => {
            state.loggedInData = action.payload
        },
        logOut: (state) => {
            const cookies = new Cookies()
            cookies.remove(`auth`)
            state.loggedInData = {}
            state.isAuth = false
        },
        setInitialData: (state, action) => {
            state.loggedInData = action.payload
            state.isFirstLoading = false
            state.isAuth = true
        },
        setFirstLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const {
    setIsLoading,
    loginSuccess,
    logOut,
    setInitialData,
    setFirstLoading,
} = auth.actions

export default auth.reducer