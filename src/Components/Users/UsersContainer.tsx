import { useEffect, useState } from 'react'
import UsersPage from './UsersPage'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA } from '@/src/lib/const'
import { useCookies } from 'react-cookie'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { GetUserData } from '@/src/ReduxToolkit/Apis/users.api'
import toast from 'react-hot-toast'

const UsersContainer = () => {
    const [{ auth }, setCookie] = useCookies(["auth"]);
    const router = useRouter()
    const { role } = useSelector((state: any) => state.auth);
    const [userData, setUserData] = useState()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (role === "admin") {
            getUserData()
        } else {
            router.push('/')
        }
        // eslint-disable-next-line
    }, [])

    const getUserData = async () => {
        try {
            const payload = {
                Authorization: `Bearer ${auth?.token}`,
            }
            const res = await GetUserData(payload)
            setUserData(res?.data?.data)

        } catch (error: any) {
            console.error(error);
            toast.error(`Somthing Went Wrong`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <TitleComponent
                title={APP_TITLE_DATA.users}
            />
            <UsersPage
                {...{
                    userData,
                    isLoading,
                    router,
                }}
            />
        </>
    )
}

export default UsersContainer