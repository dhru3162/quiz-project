import {
  logOut,
  setFirstLoading,
  setInitialData,
} from "@/src/ReduxToolkit/Slices/Auth";
import { useRouter } from "next/router";
import React, { ReactNode, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import "firebase/auth";
import { authentication } from "@/src/FireBase/FireBase";

interface LayoutType {
  children: ReactNode;
}

export const Context = createContext<any>(null);

export const ContextProvider: React.FC<LayoutType> = ({ children }) => {
  const [{ auth }, setCookie] = useCookies(["auth"]);
  const dispatch = useDispatch();
  const router = useRouter();

  const LogOut = async () => {
    try {
      await authentication.signOut();
      dispatch(logOut());
      router.push(`/`);
    } catch (error) {
      console.log(error);
      toast(`Somthing Went Wrong`);
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
