import {
  logOut,
  setFirstLoading,
  setInitialData,
} from "@/src/ReduxToolkit/Slices/Auth";
import { useRouter } from "next/router";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { LogoutApi, WhoAmIApi } from "@/src/ReduxToolkit/Apis/auth.api";

interface LayoutType {
  children: ReactNode;
}

export const Context = createContext<any>(null);

export const ContextProvider: React.FC<LayoutType> = ({ children }) => {
  const [{ auth }, setCookie] = useCookies(["auth"]);
  const { isAuth, loggedInData } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [adminVerified, setAdminVerified] = useState(false);

  // const axiosInstance: AxiosInstance = API();

  // axiosInstance.interceptors.request.use(
  //   (config) => {
  //     if (auth) {
  //       if (!(config.headers && config.headers["authorization"])) {
  //         config.headers[
  //           "Authorization"
  //         ] = `Bearer ${auth?.token}`;
  //       }
  //     }
  //     config.headers["cache"] = "no-store";

  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  // axiosInstance.interceptors.response.use(
  //   (response) => {
  //     if (response.status === 401) {
  //       router.replace("/login");
  //     }
  //     return response;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  const LogOut = async () => {
    try {
      const payload = {
        Authorization: `Bearer ${auth?.token}`
      }
      await LogoutApi(payload, { sessionId: loggedInData?.session?._id })
      dispatch(logOut())
      router.push(`/`)
    }
    catch (error: any) {
      if (error.response.status === 401) {
        dispatch(logOut())
        router.push(`/`)
      } else {
        console.log(error);
        toast(`Somthing Went Wrong`)
      }
    }
  };

  // get logged in user data
  const getUserData = async () => {
    try {
      const payload = {
        Authorization: `Bearer ${auth?.token}`
      }
      const res: any = await WhoAmIApi(payload)

      dispatch(setInitialData(res.data));

      if (res.data.user.role !== auth.user.role) {
        const updateRole = { ...auth }
        updateRole.user.role = res.data.user.role
        setCookie("auth", updateRole)
      }

    } catch (error: any) {
      if (error?.response?.status === 401) {
        toast.error(`Token Expired Login Again`)
        dispatch(logOut());
        router.push(`/`);
      } else if (error?.request?.status === 0) {
        toast.error('Check Your Internet Connection');
      } else {
        toast('Somthing Went Wrong')
        console.error(error);
      }

    } finally {
      dispatch(setFirstLoading(false));

    }
  };

  const AdminRights = () => {
    if (adminVerified) return true;
    const Password = prompt("Please Enter Admin Verification Password", "");
    const adminPassword = process.env.ADMIN_PASSWORD
    if (adminPassword && Password === adminPassword) {
      setAdminVerified(true);
      return true;
    } else {
      if (Password && Password !== "") toast.error("Wrong password");
      return false;
    };
  };

  useEffect(() => {
    if (auth?.token && !isAuth) {
      getUserData()
    } else {
      dispatch(setFirstLoading(false))
    }
    // eslint-disable-next-line
  }, [auth]);

  return (
    <Context.Provider
      value={{
        LogOut,
        getUserData,
        AdminRights,
      }}
    >
      {children}
    </Context.Provider>
  );
};
