import {
  logOut,
  setFirstLoading,
  setInitialData,
} from "@/src/ReduxToolkit/Slices/Auth";
import { useRouter } from "next/router";
import React, { ReactNode, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import "firebase/auth";
import { authentication } from "@/src/FireBase/FireBase";
import axios from "axios";
import { USER_API } from "@/src/lib/const";
import { setLoading, setUserData } from "@/src/ReduxToolkit/Slices/User";

interface LayoutType {
  children: ReactNode;
}

export const Context = createContext<any>(null);

export const ContextProvider: React.FC<LayoutType> = ({ children }) => {
  const [{ auth }, setCookie] = useCookies(["auth"]);
  const { loggedInData, role } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch();
  const router = useRouter();

  const LogOut = async () => {
    try {
      await authentication.signOut()
      dispatch(logOut())
      router.push(`/`)
    }
    catch (error) {
      console.log(error);
      toast(`Somthing Went Wrong`)
    }
  };

  // for logged in user data get
  const getUserData = async () => {
    try {
      authentication.onAuthStateChanged((authUser: any) => {
        if (authUser) {
          const user = authUser._delegate;
          const data = {
            accessToken: user.accessToken,
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            providerData: user.providerData[0],
            uid: user.uid,
            stsTokenManager: {
              accessToken: user.stsTokenManager.accessToken,
              expirationTime: user.stsTokenManager.expirationTime,
              refreshToken: user.stsTokenManager.refreshToken,
            },
            metadata: {
              createdAt: user.metadata.createdAt,
              creationTime: user.metadata.creationTime,
              lastLoginAt: user.metadata.lastLoginAt,
              lastSignInTime: user.metadata.lastSignInTime,
            },
          };
          dispatch(setInitialData(data));
          dispatch(setFirstLoading(false));
        } else {
          dispatch(logOut());
          router.push(`/`);
          dispatch(setFirstLoading(false));
        }
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  const getUserApiData = async () => {
    dispatch(setLoading(true))
    try {
      const res: any = await axios.get(`${USER_API}?userId=${loggedInData?.uid}`)
      dispatch(setUserData(res.data[0]))
    } catch (error: any) {
      console.error(error)
      toast(`User Data Not Set`)
    } finally {
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    if (loggedInData?.uid && role !== 'admin') {
      getUserApiData()
    }
    // eslint-disable-next-line
  }, [loggedInData])

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, [auth]);

  return (
    <Context.Provider
      value={{
        LogOut,
        getUserData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
