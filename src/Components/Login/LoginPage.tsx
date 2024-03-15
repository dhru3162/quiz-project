import Link from 'next/link';
import Logo from '../Logo/Logo';
import Styles from './LoginStyle.module.scss';
import Inputfield from '../Theme/Input/Inputfield';
import LoginButton from '../Theme/Button/LoginButton';

const LoginPage = (props: any) => {
    const {
        control,
        handleSubmit,
        handlerLogin,
        isLoading,
        isLogin,
        setIsLogin,
        reset,
        getValues,
    } = props

    return (
        <div className='bgColor max-sm:min-h-[93vh] max-sm:max-h-[93vh] min-h-screen flex justify-center items-center w-full'>
            <div className={`${Styles.container} rounded-lg w-full md:w-[80%] lg:w-[60%] xl:w-[45%] 2xl:w-[30%] h-fit flex justify-center pt-8 pb-8 `}>
                <div className={`flex flex-col items-center space-y-8 w-full`}>

                    <Link href={'/'}>
                        <Logo />
                    </Link>

                    {isLogin &&
                        <h1 className={`${Styles.headerColor} text-3xl max-md:text-2xl font-black`}>
                            Sign in to your account
                        </h1>
                    }

                    {!isLogin &&
                        <h1 className={`${Styles.headerColor} text-3xl max-md:text-2xl font-black`}>
                            Create an account
                        </h1>
                    }

                    {isLogin &&
                        <form className='max-md:w-[90%] w-[60%]' onSubmit={handleSubmit(handlerLogin)}>

                            <Inputfield
                                label='User Name'
                                name='username'
                                control={control}
                                className='mt-2'
                                rules={{
                                    required: "Please Enter User Name",
                                    // pattern: {
                                    //     value: /^[a-z0-9._-]+@[a-z0-9-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please Enter Valid Email Address",
                                    // },
                                }}
                            />
                            <Inputfield
                                label='Password'
                                name='password'
                                eye
                                control={control}
                                className='mt-2'
                                rules={{
                                    required: "Please Enter Password",
                                    // pattern: {
                                    //     value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                    //     message: 'Ex. Abcd@123',
                                    // },
                                }}
                            />
                            <div className='flex justify-end mb-5'>
                                <Link href={`/forgot-password`} className={`${Styles.textColor} font-bold`}>
                                    Forgot password?
                                </Link>
                            </div>
                            <LoginButton
                                type='submit'
                                className='w-full'
                                isLoading={isLoading}
                            >
                                Login
                            </LoginButton>
                            <div className='flex justify-center mt-7 font-bold text-sm'>
                                Not a member?
                                <span
                                    className={`ml-1.5 ${Styles.textColor}`}
                                    onClick={() => {
                                        reset()
                                        setIsLogin(!isLogin)
                                    }}
                                >
                                    Register Now
                                </span>
                            </div>
                        </form>
                    }

                    {!isLogin &&
                        <form className='max-md:w-[90%] w-[60%]' onSubmit={handleSubmit(handlerLogin)}>

                            <Inputfield
                                label='First Name'
                                name='firstName'
                                control={control}
                                rules={{
                                    required: "Please Enter First Name",
                                }}
                            />
                            <Inputfield
                                label='Last Name'
                                name='lastName'
                                control={control}
                                rules={{
                                    required: "Please Enter Last Name",
                                }}
                            />
                            <Inputfield
                                label='Email'
                                name='email'
                                control={control}
                                rules={{
                                    required: "Please Enter Email Address",
                                    pattern: {
                                        value: /^[a-z0-9._-]+@[a-z0-9-]+\.[a-z]{2,4}$/i,
                                        message: "Please Enter Valid Email Address",
                                    },
                                }}
                            />
                            <Inputfield
                                label='Password'
                                name='password'
                                eye
                                control={control}
                                rules={{
                                    required: "Please Enter Password",
                                    pattern: {
                                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                        message: 'Ex. Abcd@123',
                                    },
                                }}
                            />
                            <Inputfield
                                label='Confirm Password'
                                name='confirmPassword'
                                eye
                                control={control}
                                rules={{
                                    required: "Please Enter Password",
                                    validate: {
                                        matchesPassword: (value: any) => {
                                            const { password } = getValues();
                                            return password === value || "Passwords should match!";
                                        }
                                    }
                                }}
                            />
                            <LoginButton
                                type='submit'
                                className='w-full mt-5'
                                isLoading={isLoading}
                            >
                                Register
                            </LoginButton>
                            <div className='flex justify-center mt-7 font-bold text-sm'>
                                Already have an account?
                                <span
                                    className={`ml-1.5 ${Styles.textColor}`}
                                    onClick={() => {
                                        reset()
                                        setIsLogin(!isLogin)
                                    }}
                                >
                                    Login Now
                                </span>
                            </div>

                        </form>
                    }
                </div>
            </div>
        </div >
    )
}

export default LoginPage
