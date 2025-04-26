import { useForm } from "react-hook-form";
import LoginPage from "./LoginPage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, setIsLoading } from "@/src/ReduxToolkit/Slices/Auth";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { LoginApi, RegisterApi } from "@/src/ReduxToolkit/Apis/auth.api";
import SeoComponent from "../SeoComponent/SeoComponent";
import { SEO_DATA } from "../SeoComponent/SeoData";

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
          toast(`Something Went Wrong Try Again`)
        } else {
          toast.error(error?.response?.data?.message || "Something went wrong")
        }
        console.error(error);
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
          toast(`Something went Wrong Try Again`)
        } else {
          toast.error(error?.response?.data?.message || "Something went wrong")
        }
        console.error(error);
      } finally {
        dispatch(setIsLoading(false));
      }
    }
  };

  return (
    <>
      <SeoComponent {...SEO_DATA.login} />
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
