import ForgotPasswordPage from "./ForgotPasswordPage";
import { useForm } from "react-hook-form";
import { useState } from 'react'
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ForgotPasswordApi } from "@/src/ReduxToolkit/Apis/auth.api";
import { SEO_DATA } from "../SeoComponent/SeoData";
import SeoComponent from '../SeoComponent/SeoComponent';

const ForgotPasswordContainer = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [forgotPasswordDone, setForgotPasswordDone] = useState(false);

  const handlerForgotPassword = async (inputData: any) => {
    setIsLoading(true)
    try {
      await ForgotPasswordApi(inputData);
      setForgotPasswordDone(true);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.massage || "Something went wrong");
    } finally {
      setIsLoading(false)
    };
  };

  return (
    <>
      <SeoComponent {...SEO_DATA.forgotPassword} />
      <ForgotPasswordPage
        {...{
          handleSubmit,
          handlerForgotPassword,
          control,
          isLoading,
          forgotPasswordDone,
          router,
        }}
      />
    </>
  )
}

export default ForgotPasswordContainer
