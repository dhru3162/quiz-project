import { getInitialDataApi } from "@/src/ReduxToolkit/APIs/auth.api";
import { logOut, setFirstLoading, setInitialData } from "@/src/ReduxToolkit/Slices/Auth";
import { useRouter } from "next/router";
import React, { ReactNode, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

interface LayoutType {
    children: ReactNode;
}

export const Context = createContext<any>(null)

export const ContextProvider: React.FC<LayoutType> = ({ children }) => {
    const [{ auth }, setCookie] = useCookies(['auth'])
    const { isAuth } = useSelector((state: any) => state.auth)
    const dispatch = useDispatch()
    const router = useRouter()

    const LogOut = async () => {
        try {
            if (auth) {
                // const payload = {
                //     Authorization: `Bearer ${auth?.token}`,
                // };
                // await logOutApi({ payload, sessionData })
                dispatch(logOut())
                router.push(`/`)
            }
        } catch (error) {
            console.log(error);
            toast(`Something Went Wrong`)
        }
    };

    // for logged in user data get
    const getUserData = async () => {
        try {
            const payload = {
                Authorization: `Bearer ${auth?.token}`,
            };
            const res = await getInitialDataApi(payload)
            dispatch(setInitialData(res.data))
        } catch (error: any) {
            // if (error?.response?.status === 406) {
            //     toast(`Token Expired Login Again`)
            //     dispatch(logOut())
            //     router.push(`/`)
            // } else if (error.request.status === 0) {
            //     toast('Check Your Internet Connection');
            // } else {
            //     toast(error?.response?.data?.error?.message)
            //     console.log(error);
            // }
            if (error?.response?.data?.message === "Token Expired!") {
                toast(`Token Expired Login Again`)
                dispatch(logOut())
                router.push(`/`)
            } else if (error.request.status === 0) {
                toast('Check Your Internet Connection');
            } else {
                toast(error?.response?.data?.error?.message)
                console.log(error);
            }
        } finally {
            dispatch(setFirstLoading(false))
        }
    }

    useEffect(() => {
        if (auth?.token && !isAuth) {
            getUserData()
        } else {
            dispatch(setFirstLoading(false))
        }
        // eslint-disable-next-line
    }, [auth])

    return (
        <Context.Provider
            value={{
                LogOut
            }}
        >
            {children}
        </Context.Provider>
    )
}
