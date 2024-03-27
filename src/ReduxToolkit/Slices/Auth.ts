import { createSlice } from "@reduxjs/toolkit"
import { Cookies } from "react-cookie";

const adminPermission = (uid: string) => {
    const adminId = uid === 'V0IBGWU2BzT9q7oEdytnHvdY9Cv1' || uid === 'Au0LSF01OMNoYVodkRxKSjsqigz1'
    if (adminId) {
        return 'admin'
    } else {
        return 'user'
    }
}

const initialState = {
    loggedInData: {},
    isAuth: false,
    isLoading: false,
    isFirstLoading: true,
    role: ''
}

const auth: any = createSlice({
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
            state.role = ''
        },
        setInitialData: (state, action) => {
            const { uid } = action.payload
            state.loggedInData = action.payload
            state.isFirstLoading = false
            state.role = adminPermission(uid)
            state.isAuth = true
        },
        setFirstLoading: (state, action) => {
            state.isFirstLoading = action.payload
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