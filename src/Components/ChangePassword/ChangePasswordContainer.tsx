import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import ChangePasswordPage from './ChangePasswordPage'
import { useRouter } from 'next/navigation';
import { APP_TITLE_DATA } from '@/src/lib/const';
import TitleComponent from '../TitleComponent/TitleComponent';
import { useForm } from 'react-hook-form';
import { ChangePasswordApi } from '@/src/ReduxToolkit/Apis/auth.api';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';

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
            toast.error(error?.response?.data?.massage ?? "Somthin went wrong")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <TitleComponent title={APP_TITLE_DATA.changePassword} />
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
