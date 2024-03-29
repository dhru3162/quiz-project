import { BASE_API } from "@/src/lib/const";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
    quizData: [],
    isLoading: false,
}

const quiz: any = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setQuizData: (state, action) => {
            state.quizData = action.payload
        }
    }
})

export const {
    setIsLoading,
    setQuizData,
} = quiz.actions

export default quiz.reducer

export const getQuiz = () => async (dispatch: any) => {
    dispatch(setIsLoading(true))
    try {
        const res: any = await axios.get(`${BASE_API}`)
        dispatch(setQuizData(res.data))
    } catch (error: any) {
        console.error(error.massage)
        toast.error(`Somthig Went Wrong`)
    } finally {
        dispatch(setIsLoading(false))
    }
}

export const getUpdatedQuizData = () => async (dispatch: any) => {
    try {
        const res: any = await axios.get(`${BASE_API}`)
        dispatch(setQuizData(res.data))
    } catch (error: any) {
        console.error(error.massage)
        toast.error(`Somthig Went Wrong Reload The Page`)
    }
}