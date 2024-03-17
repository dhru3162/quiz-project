import { useForm } from 'react-hook-form'
import LoginPage from './LoginPage'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA } from '@/src/lib/const'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess, setIsLoading } from '@/src/ReduxToolkit/Slices/Auth'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'
import { authentication } from "@/src/FireBase/FireBase"
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'

const LoginContainer = () => {
    const { control, handleSubmit, reset, getValues } = useForm()
    const [isLogin, setIsLogin] = useState(true)
    const { isLoading, loggedInData } = useSelector((state: any) => state.auth)
    const [{ auth }, setCookie] = useCookies(['auth'])
    const dispatch = useDispatch()
    const router = useRouter()

    const handlerLogin = async (inputData: any) => {
        const isRegister = Object.keys(inputData).length > 2
        dispatch(setIsLoading(true))

        if (!isRegister) {
            try {
                const res: any = await authentication.signInWithEmailAndPassword(inputData?.email, inputData?.password)
                dispatch(loginSuccess(res))
                toast.success('Login Successful')

                const payload: any = {
                    accessToken: res?.accessToken,
                    email: res?.email,
                    displayName: res?.displayName,
                    uid: res?.uid
                }
                // const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
                await setCookie('auth', payload)
                router.push(`/dashboard`)

            } catch (error: any) {
                const errorCode = error.code
                switch (errorCode) {
                    case 'auth/invalid-credential':
                        toast.error('Please Check Your Email And Password');
                        break;
                    default:
                        toast.error('Somthing Went Wrong');
                        break;
                }
            } finally {
                dispatch(setIsLoading(false))
            }
        } else if (isRegister) {
            try {
                const res: any = await authentication.createUserWithEmailAndPassword(inputData?.email, inputData?.password);
                await res.user.updateProfile({
                    displayName: `${inputData?.firstName || ''} ${inputData?.lastName || ''}`
                });
                dispatch(loginSuccess(res));
                toast.success('Register Successful');

                const payload: any = {
                    accessToken: res?.accessToken,
                    email: res?.email,
                    displayName: res?.displayName,
                    uid: res?.uid
                }
                // const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
                await setCookie('auth', payload)
                router.push(`/dashboard`)

            } catch (error) {
                console.error(error);
            }
        }
    }

    // const signInWithGoogle = async () => {
    //     const provider = new GoogleAuthProvider();
    //     try {
    //         const res: any = await authentication.signInWithPopup(provider);
    //         console.log(res)
    //         dispatch(loginSuccess(res))
    //         toast.success('Login Successful')

    //         const payload: any = {
    //             accessToken: res?.accessToken,
    //             email: res?.email,
    //             displayName: res?.displayName,
    //             uid: res?.uid
    //         }
    //         // const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
    //         await setCookie('auth', payload)
    //         router.push(`/dashboard`)
    //     } catch (error) {
    //         console.error('Error signing in with Google:', error);
    //     }
    // };

    // const signInWithGithub = async () => {
    //     const provider = new GithubAuthProvider();
    //     try {
    //         const res: any = await authentication.signInWithPopup(provider);
    //         console.log(res)
    //         dispatch(loginSuccess(res))
    //         toast.success('Login Successful')

    //         const payload: any = {
    //             accessToken: res?.accessToken,
    //             email: res?.email,
    //             displayName: res?.displayName,
    //             uid: res?.uid
    //         }
    //         // const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
    //         await setCookie('auth', payload)
    //         router.push(`/dashboard`)
    //     } catch (error: any) {
    //         if (error.code === 'auth/account-exists-with-different-credential') {
    //             toast.error('Please sign in using the original provider associated with your email address.');
    //         } else {
    //             toast.error('Error signing in with GitHub:', error);
    //         }

    //     }
    // };

    return (
        <>
            <TitleComponent
                title={isLogin ? APP_TITLE_DATA.login : APP_TITLE_DATA.register}
            />
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
                    // signInWithGoogle,
                    // signInWithGithub,
                }}
            />
        </>
    )
}

export default LoginContainer
