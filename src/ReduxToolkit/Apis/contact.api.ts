import { API } from "@/src/lib/const"
import axios from "axios"

export const ContactUsApi = async (payload: any) => {
    return await axios.post(`${API}/contact`, payload)
}