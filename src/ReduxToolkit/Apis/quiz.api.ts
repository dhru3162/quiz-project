import fetch from "@/src/lib/axiosConfig"

export const GetQuizData = async () => {
    // return await axios.get(`${API}/quiz`)
    return await fetch.get(`/quiz`)
}

export const GetOneQuiz = async (id: any, payload?: any,) => {
    return await fetch.get(`/quiz/${id}`, {
        headers: payload
    })
}

export const AddQuizApi = async (payload: any) => {
    return await fetch.post(`/quiz/add`, payload)
}

export const EditQuizDetailsApi = async (id: any, payload: any) => {
    return await fetch.put(`/quiz/${id}`, payload)
}

export const DeleteQuizApi = async (id: any) => {
    return await fetch.delete(`/quiz/${id}`)
}

export const AddQuestionApi = async (id: any, payload: any) => {
    return await fetch.post(`/quiz/add-question/${id}`, payload)
}

export const EditQuestionApi = async (id: any, payload: any) => {
    return await fetch.put(`/quiz/edit-question/${id}`, payload)
}

export const DeleteQuestionApi = async (quizId: any, questionId: any) => {
    return await fetch.delete(`/quiz/${quizId}/delete-question/${questionId}`)
}
