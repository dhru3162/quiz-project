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

export const AddQuizApi = async (payload: any, head: any) => {
    return await axios.post(`${API}/quiz/add`, payload, {
        headers: head
    })
}

export const EditQuizDetailsApi = async (id: any, payload: any, head: any) => {
    return await axios.put(`${API}/quiz/${id}`, payload, {
        headers: head
    })
}

export const DeleteQuizApi = async (id: any, head: any) => {
    return await axios.delete(`${API}/quiz/${id}`, {
        headers: head
    })
}

export const AddQuestionApi = async (id: any, payload: any, head: any) => {
    return await axios.post(`${API}/quiz/addquestion/${id}`, payload, {
        headers: head
    })
}

export const EditQuestionApi = async (id: any, payload: any, head: any) => {
    return await axios.put(`${API}/quiz/editquestion/${id}`, payload, {
        headers: head
    })
}

export const DeleteQuestionApi = async (quizId: any, questionId: any, head: any) => {
    return await axios.delete(`${API}/quiz/${quizId}/deletequestion/${questionId}`, {
        headers: head,
    })
}
