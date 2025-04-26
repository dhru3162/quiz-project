import React, { useState } from 'react'
import ChangePasswordPage from './ChangePasswordPage'
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { ChangePasswordApi } from '@/src/ReduxToolkit/Apis/auth.api';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
import SeoComponent from '../SeoComponent/SeoComponent';
import { SEO_DATA } from '../SeoComponent/SeoData';

const ChangePasswordContainer = () => {
    const router = useRouter();
    const { control, handleSubmit, reset, getValues } = useForm();
    const [{ auth }, setCookie] = useCookies(["auth"]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChangePassword = async (data: any) => {
        setIsLoading(true);
        try {
            const payload = {
                Authorization: `Bearer ${auth?.token}`
            };
            const res = await ChangePasswordApi(payload, data)
            toast.success(res?.data?.massage);
            reset();

        } catch (error: any) {
            console.log(error);
            toast.error(error?.response?.data?.massage || "Something went wrong")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <SeoComponent {...SEO_DATA.changePassword} />
            <ChangePasswordPage
                {...{
                    router,
                    control,
                    handleSubmit,
                    handleChangePassword,
                    getValues,
                    isLoading,
                }}
            />
        </>
    )
};

export default ChangePasswordContainer;
