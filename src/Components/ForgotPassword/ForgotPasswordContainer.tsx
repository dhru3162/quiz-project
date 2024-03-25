import TitleComponent from "../TitleComponent/TitleComponent"
import { APP_TITLE_DATA } from '@/src/lib/const';
import ForgotPasswordPage from "./ForgotPasswordPage";
import { useForm } from "react-hook-form";
import { authentication } from "@/src/FireBase/FireBase";
import { useState } from 'react'
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ForgotPasswordContainer = () => {
  const router = useRouter()
  const { control, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [forgotPasswordDone, setForgotPasswordDone] = useState(true)

  const handlerForgotPassword = async (inputData: any) => {
    setIsLoading(true)
    try {
      const res: any = await authentication.sendPasswordResetEmail(inputData.email)
      setForgotPasswordDone(true)
      toast.success("Reset Password Email Sent.");
    } catch (error: any) {
      console.log(error)
      toast.error(`Somthing Went Wrong`)
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <>
      <TitleComponent title={APP_TITLE_DATA.forgotPassword} />
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
