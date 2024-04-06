import { configureStore } from '@reduxjs/toolkit'
import Auth from './Slices/Auth'
import Quiz from './Slices/Quiz'

export const store = configureStore({
    reducer: {
        auth: Auth,
        quiz: Quiz,
    },
})