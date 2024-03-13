import { useForm } from 'react-hook-form'
import LoginPage from './LoginPage'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA } from '@/src/lib/const'
import { useDispatch, useSelector } from 'react-redux'
import { logInApi } from '@/src/ReduxToolkit/APIs/auth.api'
import { loginSuccess, setIsLoading } from '@/src/ReduxToolkit/Slices/Auth'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'

const LoginContainer = () => {
    const { control, handleSubmit, reset, getValues } = useForm()
    const [isLogin, setIsLogin] = useState(true)
    const { isLoading, loggedInData } = useSelector((state: any) => state.auth)
    const [{ auth }, setCookie] = useCookies(['auth'])
    const dispatch = useDispatch()
    const router = useRouter()

    const handlerLogin = async (inputData: any) => {
        // Remove the confirmPassword field from the object
        const { 'confirmPassword': removedField, ...data } = inputData;
        const isRegister = Object.keys(data).length > 2
        dispatch(setIsLoading(true))

        if (!isRegister) {
            try {
                const payload = {
                    ...data, expiresInMins: 1440
                }
                const res = await logInApi(payload)
                dispatch(loginSuccess(res.data))
                toast.success('Login Successful')
            } catch (error: any) {
                toast.error(error?.response?.data?.error?.message)
                console.log(error)
            } finally {
                dispatch(setIsLoading(false))
            }
        } else if (isRegister) {
            setTimeout(() => {
                setIsLoading(false)
                toast.success(`Coming soon`)
                console.log(data)
            }, 3500);
        }
    }

    useEffect(() => {
        if (loggedInData?.token) {
            const payload: any = {
                token: loggedInData?.token,
                email: loggedInData?.email,
                username: loggedInData?.user?.username,
                id: loggedInData?.id
            }
            const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
            setCookie('auth', payload, { expires: expires })
            router.push(`/dashboard`)
        }
    }, [loggedInData])


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
                }}
            />
        </>
    )
}

export default LoginContainer
