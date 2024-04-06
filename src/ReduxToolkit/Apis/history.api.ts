import { API } from "@/src/lib/const";
import axios from "axios";

export const AddHistoryApi = async (payload: any, head: any) => {
  return await axios.post(`${API}/user/addhistory`, payload, {
    headers: head,
  });
};

export const GetHistoryApi = async (payload: any) => {
    return await axios.get(`${API}/user/history`, {
        headers: payload
    })
};

export const GetScoreApi = async (payload: any) => {
    return await axios.get(`${API}/user/getscore`, {
        headers: payload
    })
};
