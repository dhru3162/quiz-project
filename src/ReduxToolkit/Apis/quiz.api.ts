import { API } from "@/src/lib/const"
import axios from "axios"

export const GetQuizData = async (payload: any) => {
    return await axios.get(`${API}/quiz`, {
        headers: payload
    })
}

export const GetOneQuiz = async (id: any, payload: any,) => {
    return await axios.get(`${API}/quiz/${id}`, {
        headers: payload
    })
}