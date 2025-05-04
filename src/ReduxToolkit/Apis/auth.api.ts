import fetch from "@/src/lib/axiosConfig"

export const RegisterApi = async (payload: any) => {
    return await fetch.post(`/auth/register`, payload)
}

export const LoginApi = async (payload: any) => {
    return await fetch.post(`/auth/login`, payload)
    // return await fetch({
    //     url: `/auth/login`,
    //     method: "POST",
    //     data: payload,
    // });
}

export const WhoAmIApi = async () => {
    return await fetch.get(`/auth/whoAmI`)
}

export const LogoutApi = async (body: any) => {
    // return await axios.post(`${API}/auth/logout`, body, {
    //     headers: payload
    // })
    return await fetch.post(`/auth/logout`, body)
};

export const ChangePasswordApi = async (body: any) => {
    // return await axios.post(`${API}/auth/change-password`, body, {
    //     headers: payload
    // })
    return await fetch.post(`/auth/change-password`, body)
};

export const ForgotPasswordApi = async (body: any) => {
    // return await axios.post(`${API}/auth/forgot-password`, body);
    return await fetch.post(`/auth/forgot-password`, body);
};

export const CheckLinkApi = async (body: any) => {
    // return await axios.post(`${API}/auth/check-link`, body);
    return await fetch.post(`/auth/check-link`, body);
};

export const ResetPasswordApi = async (body: any) => {
    // return await axios.post(`${API}/auth/reset-password`, body);
    return await fetch.post(`/auth/reset-password`, body);
};