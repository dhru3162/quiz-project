import { APP_TITLE_DATA } from '@/src/lib/const'
import ResetPasswordPage from './ResetPasswordPage'
import TitleComponent from '../TitleComponent/TitleComponent'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CheckLinkApi, ResetPasswordApi } from '@/src/ReduxToolkit/Apis/auth.api'
import toast from 'react-hot-toast'

const ResetPasswordContainer = () => {
    const router = useRouter();
    const { token } = router.query;
    const { control, getValues, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handlerResetPassword = async (data: any) => {
        try {
            await ResetPasswordApi({ ...data, token });
            toast.success("Password reset successfully")
            router.push('/login');
        } catch (err: any) {
            console.log('err: ', err);
            toast.error(err?.response?.data?.massage ?? "Somthin went wrong");
        }
    };


    return (
        <>
            <TitleComponent title={APP_TITLE_DATA.forgotPassword} />
            <ResetPasswordPage
                {...{
                    control,
                    getValues,
                    isLoading,
                    handleSubmit,
                    handlerResetPassword,
                }}
            />
        </>
    )
}

export default ResetPasswordContainer
