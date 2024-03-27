import { configureStore } from '@reduxjs/toolkit'
import Auth from './Slices/Auth'
import Quiz from './Slices/Quiz'
import User from './Slices/User'

export const store = configureStore({
    reducer: {
        auth: Auth,
        quiz: Quiz,
        user: User,
    },
})