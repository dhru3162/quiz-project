import { API } from "@/src/lib/const"
import axios from "axios"

export const RegisterApi = async (payload: any) => {
    return await axios.post(`${API}/auth/register`, payload)
}

export const LoginApi = async (payload: any) => {
    return await axios.post(`${API}/auth/login`, payload)
}

export const WhoAmIApi = async (payload: any) => {
    return await axios.get(`${API}/auth/whoAmI`, {
        headers: payload
    })
}

export const LogoutApi = async (payload: any, sessionId: any) => {
    return await axios.post(`${API}/auth/logout`, sessionId, {
        headers: payload
    })
};

export const ChangePasswordApi = async (payload: any, body: any) => {
    return await axios.post(`${API}/auth/changepassword`, body, {
        headers: payload
    })
};

export const ForgotPasswordApi = async (body: any) => {
    return await axios.post(`${API}/auth/forgot-password`, body);
};

export const CheckLinkApi = async (body: any) => {
    return await axios.post(`${API}/auth/check-link`, body);
};

export const ResetPasswordApi = async (body: any) => {
    return await axios.post(`${API}/auth/reset-password`, body);
};