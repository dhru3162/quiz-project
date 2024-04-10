import { configureStore } from '@reduxjs/toolkit'
import Auth from './Slices/Auth'

export const store = configureStore({
    reducer: {
        auth: Auth,
    },
})