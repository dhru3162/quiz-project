import { useForm } from "react-hook-form";
import LoginPage from "./LoginPage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TitleComponent from "../TitleComponent/TitleComponent";
import { APP_TITLE_DATA, } from "@/src/lib/const";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, setIsLoading } from "@/src/ReduxToolkit/Slices/Auth";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { LoginApi, RegisterApi } from "@/src/ReduxToolkit/Apis/auth.api";

const LoginContainer = () => {
  const { control, handleSubmit, reset, getValues } = useForm();
  const [isLogin, setIsLogin] = useState(true);
  const { isLoading, role, loggedInData } = useSelector((state: any) => state.auth);
  const [{ auth }, setCookie] = useCookies(["auth"]);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (role && role === 'admin') {
      router.push('dashboard')
    }
    // eslint-disable-next-line
  }, [role])

  useEffect(() => {
    if (loggedInData.token) {
      setCookie("auth", loggedInData);
      router.push(`/dashboard`);
    }
    // eslint-disable-next-line
  }, [loggedInData])

  const handlerLogin = async (inputData: any) => {
    const isRegister = Object.keys(inputData).length > 2;
    dispatch(setIsLoading(true));

    if (!isRegister) {
      try {
        const res = await LoginApi(inputData)
        dispatch(loginSuccess(res.data));
        toast.success("Login Successful");

      } catch (error: any) {
        if (error?.request?.status === 504) {
          toast(`somthing went Wrong Try Again`)
        } else {
          if (!error?.response?.data?.massage) {
            toast.error(`Somthing went wrong try again`)
          } else {
            toast.error(error?.response?.data?.massage)
          }
          console.error(error);
        }
      } finally {
        dispatch(setIsLoading(false));

      }
    } else if (isRegister) {
      try {
        const payload = {
          fullName: `${inputData?.firstName} ${inputData?.lastName}`,
          email: inputData?.email,
          password: inputData?.password,
        }
        const res = await RegisterApi(payload)
        dispatch(loginSuccess(res.data));
        toast.success("Register Successful");

      } catch (error: any) {
        if (error?.request?.status === 504) {
          toast(`somthing went Wrong Try Again`)
        } else {
          toast.error(error?.response?.data?.massage)
          console.error(error);
        }

      } finally {
        dispatch(setIsLoading(false));
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
          // loginWithGoogle,
        }}
      />
    </>
  );
};

export default LoginContainer;
