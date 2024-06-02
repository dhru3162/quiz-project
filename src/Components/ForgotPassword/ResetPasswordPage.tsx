import React from 'react'
import Logo from '../Logo/Logo';
import Inputfield from '../Theme/Input/Inputfield';
import Styles from './ForgotPassword.module.scss'
import Link from 'next/link';
import LoginButton from '../Theme/Button/LoginButton';

const ResetPasswordPage = (props: any) => {
    const {
        control,
        getValues,
        isLoading,
        handleSubmit,
        handlerResetPassword,
    } = props;

    return (
        <div className='bgColor min-h-[100dvh] flex justify-center items-center w-full'>
            <div className={`${Styles.container} rounded-lg w-full md:w-[80%] lg:w-[60%] xl:w-[45%] 2xl:w-[40%] h-fit flex justify-center pt-8 pb-8 `}>
                <div className={`flex flex-col items-center space-y-8 w-full`}>

                    <Link href={'/'}>
                        <Logo />
                    </Link>

                    <h1 className={`${Styles.headerColor} text-3xl max-md:text-2xl font-black`}>
                        Reset your password
                    </h1>

                    <form className='max-md:w-[90%] w-[60%]' onSubmit={handleSubmit(handlerResetPassword)}>

                        <Inputfield
                            label='New password'
                            name='newPassword'
                            eye
                            control={control}
                            className='mt-2'
                            rules={{
                                required: "Please New Enter Password",
                                pattern: {
                                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                    message: 'Ex. Abcd@123',
                                },
                            }}
                        />

                        <Inputfield
                            label='Confirm New Password'
                            name='confirmNewPassword'
                            eye
                            control={control}
                            className='mt-2'
                            rules={{
                                required: "Please Enter Confirm New Password",
                                validate: {
                                    matchesPassword: (value: any) => {
                                        const { newPassword } = getValues();
                                        return newPassword === value || "Passwords should match!";
                                    }
                                }
                            }}
                        />

                        <LoginButton
                            type='submit'
                            className='w-full mt-8'
                        >
                            Login
                        </LoginButton>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage
