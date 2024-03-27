import { useForm } from "react-hook-form";
import LoginPage from "./LoginPage";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import TitleComponent from "../TitleComponent/TitleComponent";
import { APP_TITLE_DATA, USER_API } from "@/src/lib/const";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, setIsLoading } from "@/src/ReduxToolkit/Slices/Auth";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { authentication } from "@/src/FireBase/FireBase";
import { Context } from "../Context/ContextProvider";
import axios from "axios";

const LoginContainer = () => {
  const { control, handleSubmit, reset, getValues } = useForm();
  const [isLogin, setIsLogin] = useState(true);
  const { isLoading, role } = useSelector((state: any) => state.auth);
  const [{ auth }, setCookie] = useCookies(["auth"]);
  const dispatch = useDispatch();
  const router = useRouter();
  const { getUserData } = useContext(Context);

  useEffect(() => {
    if (role && role === 'admin') {
      router.push('dashboard')
    }
  }, [role])

  const handlerLogin = async (inputData: any) => {
    const isRegister = Object.keys(inputData).length > 2;
    dispatch(setIsLoading(true));

    if (!isRegister) {
      try {
        const res: any = await authentication.signInWithEmailAndPassword(
          inputData?.email,
          inputData?.password
        );
        dispatch(loginSuccess(res));
        toast.success("Login Successful");

        const payload: any = {
          accessToken: res?.user?._delegate?.accessToken,
          email: res?.user?._delegate?.email,
          displayName: res?.user?._delegate?.displayName,
          uid: res?.user?._delegate?.uid,
        };
        // const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
        await setCookie("auth", payload);
        router.push(`/dashboard`);
      } catch (error: any) {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-credential":
            toast.error("Please Check Your Email And Password");
            break;
          default:
            toast.error("Somthing Went Wrong");
            break;
        }
      } finally {
        dispatch(setIsLoading(false));
      }
    } else if (isRegister) {
      try {

        const res: any = await authentication.createUserWithEmailAndPassword(
          inputData?.email,
          inputData?.password
        );

        const userData = {
          userId: res?.user?._delegate?.uid,
          fullName: `${inputData?.firstName || ""} ${inputData?.lastName || ""}`,
          email: inputData?.email,
          score: 0,
          history: []
        }
        await axios.post(`${USER_API}`, userData)


        const payload: any = {
          accessToken: res?.accessToken,
          email: res?.email,
          displayName: res?.displayName,
          uid: res?.uid,
        };
        dispatch(loginSuccess(payload));
        toast.success("Register Successful");
        // const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
        setCookie("auth", payload);
        router.push(`/dashboard`);
        await res.user.updateProfile({
          displayName: `${inputData?.firstName || ""} ${inputData?.lastName || ""
            }`,
        });
      } catch (error: any) {
        if (error.code) {
          const errorCode = error.code;
          switch (errorCode) {
            case "auth/email-already-in-use":
              toast.error("Email address is already exists");
              break;
            default:
              toast.error("Somthing Went Wrong");
              break;
          }

          toast.error(`Somthing Went Wrong`);
        }
      } finally {
        dispatch(setIsLoading(false));
        getUserData();
      }
    }
  };

  return (
    <>
      <TitleComponent
        title={isLogin ? APP_TITLE_DATA.login : APP_TITLE_DATA.register}
      />
      <LoginPage
        {...{
          control,
          handleSubmit,
          handlerLogin,
          isLoading,
          isLogin,
          setIsLogin,
          reset,
          getValues,
        }}
      />
    </>
  );
};

export default LoginContainer;
