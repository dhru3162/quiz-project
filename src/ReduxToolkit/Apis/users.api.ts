import fetch from "@/src/lib/axiosConfig"

export const AddHistoryApi = async (payload: any) => {
  return await fetch.post(`/user/add-history`, payload);
};

export const GetHistoryApi = async () => {
  return await fetch.get(`/user/history`)
};

export const GetScoreApi = async () => {
  return await fetch.get(`/user/get-score`)
};

export const GetUserData = async (paramsData: any) => {
  return await fetch.get(`/user`, {
    params: paramsData
  })
}
