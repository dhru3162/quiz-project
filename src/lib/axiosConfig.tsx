// import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
// // import { TOAST_MESSAGE_DELAY } from "./constant";

// let axiosClientInstance: AxiosInstance | null = null;
// const isServer = typeof window === "undefined";
// const baseURL = `${process.env.NEXT_API_ENDPOINT}`;

// export const API = (force = false): AxiosInstance => {
//   if (axiosClientInstance && !force) {
//     return axiosClientInstance;
//   }
//   axiosClientInstance = axios.create({
//     baseURL,
//   });
//   return axiosClientInstance;
// };

// export const fetch: (config: AxiosRequestConfig) => Promise<any> = async (
//   config
// ) => {
//   try {
//     let response = null;
//     if (isServer) {
//       const axiosServerInstance = axios.create({
//         baseURL,
//       });

//       axiosServerInstance.interceptors.request.use(
//         async (config: any) => {
//           const { readCookie } = await import("src/action");
//           const authCookieResponse: any = await readCookie("auth");
//           const authCookie = authCookieResponse
//             ? JSON.parse(authCookieResponse)
//             : authCookieResponse;

//           if (authCookie) {
//             config.headers[
//               "Authorization"
//             ] = `Bearer ${authCookie}`;
//           }
//           config.headers["cache"] = "no-store";

//           return config;
//         },
//         (error: any) => {
//           return Promise.reject(error);
//         }
//       );
//       axiosServerInstance.interceptors.response.use(
//         (response: any) => {
//           return response;
//         },
//         (error: any) => {
//           // message.error({
//           //   content: error.response.data.message,
//           //   duration: TOAST_MESSAGE_DELAY,
//           //   onClick: () => message.destroy("error_message"),
//           // });
//           return Promise.reject(error);
//         }
//       );
//       response = await axiosServerInstance.request(config);
//     } else {
//       response = await API().request(config);
//     }

//     return response?.data;
//   } catch (e: any) {
//     if (e?.response && e?.response?.data && e?.response?.data?.message) {
//       // message.error({
//       //   content: e.response.data.message,
//       //   duration: TOAST_MESSAGE_DELAY,
//       //   onClick: () => message.destroy("error_message"),
//       // });
//       const customError: any = new Error(
//         e.response.data.message || "Bad response from server"
//       );
//       customError.responseStatus = e.response.data.statusCode;
//       throw customError;
//     } else {
//       throw new Error(e?.message || "Bad response from server");
//     }
//   }
// };
