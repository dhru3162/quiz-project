import { PAGE_SLUG } from '@/src/lib/const'
import ResetPasswordPage from './ResetPasswordPage'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CheckLinkApi, ResetPasswordApi } from '@/src/ReduxToolkit/Apis/auth.api'
import toast from 'react-hot-toast'
import { SEO_DATA } from '../SeoComponent/SeoData'
import SeoComponent from '../SeoComponent/SeoComponent'

const ResetPasswordContainer = () => {
    const router = useRouter();
    const { token } = router.query;
    const { control, getValues, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handlerResetPassword = async (data: any) => {
        try {
            await ResetPasswordApi({ ...data, token });
            toast.success("Password reset successfully");
            router.push('/login');
        } catch (err: any) {
            console.log('err: ', err);
            toast.error(err?.response?.data?.massage || "Something went wrong");
        }
    };

    const checkLink = async () => {
        try {
            await CheckLinkApi({ token: token });
        } catch (err) {
            console.log(err);
            router.push('/');
            toast.error("Link Expired");
        } finally {
            setIsLoading(false);
        };
    };

    useEffect(() => {
        if (token && token !== "") {
            checkLink();
        };
        // eslint-disable-next-line
    }, [token])

    return (
        <>
            <SeoComponent
                {...SEO_DATA.resetPassword}
                canonical={`${PAGE_SLUG.forgotPassword}/${token}`}
            />
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
