import { apiLink } from "@/src/lib/const"
import axios from "axios"

export const logInApi = async (payload: any) => {
    return axios.post(`${apiLink}/auth/login`, payload)
}

export const getInitialDataApi = async (payload: any) => {
    return axios.get(`${apiLink}/auth/me`, {
        headers: payload
    })
}