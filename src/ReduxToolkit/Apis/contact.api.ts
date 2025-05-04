import fetch from "@/src/lib/axiosConfig"

export const ContactUsApi = async (payload: any) => {
    return await fetch.post(`/contact`, payload)
};