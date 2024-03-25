import Link from 'next/link'
import Styles from './ForgotPassword.module.scss'
import Logo from '../Logo/Logo'
import Inputfield from '../Theme/Input/Inputfield'
import LoginButton from '../Theme/Button/LoginButton'
import ButtonTheme from '../Theme/Button/ButtonTheme'

const ForgotPasswordPage = (props: any) => {
    const {
        handleSubmit,
        handlerForgotPassword,
        control,
        isLoading,
        forgotPasswordDone,
        router,
    } = props

    return (
        <div className='bgColor max-sm:min-h-[93vh] max-sm:max-h-[93vh] min-h-screen flex justify-center items-center w-full'>
            <div className={`${Styles.container} rounded-lg w-full md:w-[80%] lg:w-[60%] xl:w-[45%] 2xl:w-[30%] h-fit flex justify-center pt-8 pb-12 `}>
                <div className={`flex flex-col items-center space-y-8 w-full`}>

                    <Link href={'/'}>
                        <Logo />
                    </Link>

                    {!forgotPasswordDone &&
                        <>
                            <h1 className={`${Styles.headerColor} text-3xl max-md:text-2xl font-black`}>
                                Forgot password
                            </h1>

                            <form className='max-md:w-[90%] w-[60%] space-y-5' onSubmit={handleSubmit(handlerForgotPassword)}>

                                <Inputfield
                                    label='Email'
                                    name='email'
                                    control={control}
                                    className='mt-2'
                                    rules={{
                                        required: "Please Enter User Name",
                                        pattern: {
                                            value: /^[a-z0-9._-]+@[a-z0-9-]+\.[a-z]{2,4}$/i,
                                            message: "Please Enter Valid Email Address",
                                        },
                                    }}
                                />

                                <Link href={`/login`} className={`${Styles.backToLoginBtn}`}>
                                    Back To Login.
                                </Link>

                                <div>
                                    We will send a reset password link to your email to set a new password.
                                </div>

                                <LoginButton
                                    type='submit'
                                    className='w-full'
                                    isLoading={isLoading}
                                >
                                    Send
                                </LoginButton>

                            </form>
                        </>
                    }

                    {forgotPasswordDone &&
                        <div className='px-8 space-y-8'>
                            <div className={`${Styles.text}`}>
                                Instructions To Reset Your Password Will Be Sent To You Shortly. Please Check Your Email.
                            </div>
                            <div className='flex justify-center'>
                                <ButtonTheme
                                    type='button'
                                    onClick={()=>router.push('/login')}
                                >
                                    Back To Login
                                </ButtonTheme>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div >
    )
}

export default ForgotPasswordPage


// Instructions To Reset Your Password Will Be Sent To You Shortly. Please Check Your Email.