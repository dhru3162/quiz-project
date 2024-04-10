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

    // const userData = [
    //     {
    //         name: 'Andy Tuker',
    //         email: "Andy@gmail.com",
    //         rank: 2,
    //         score: 30
    //     },
    //     {
    //         name: 'Lorem jeny',
    //         email: "Lorem@gmail.com",
    //         rank: 6,
    //         score: 20
    //     },
    //     {
    //         name: 'Jhon Sinha',
    //         email: "Jhon@gmail.com",
    //         rank: 1,
    //         score: 50
    //     },
    //     {
    //         name: 'whaite family',
    //         email: "whaite@gmail.com",
    //         rank: 4,
    //         score: 29
    //     },
    //     {
    //         name: 'Grrat khali',
    //         email: "Khali@gmail.com",
    //         rank: 3,
    //         score: 40
    //     },
    //     {
    //         name: 'Abd villrs',
    //         email: "Abd@gmail.com",
    //         rank: 5,
    //         score: 33
    //     },
    //     {
    //         name: 'faf-du plasi',
    //         email: "faf-du@gmail.com",
    //         rank: 7,
    //         score: 18
    //     },
    //     {
    //         name: 'ms dhoni',
    //         email: "dhoni@gmail.com",
    //         rank: 8,
    //         score: 13
    //     },
    //     {
    //         name: 'karls brithwhait',
    //         email: "karls@gmail.com",
    //         rank: 9,
    //         score: 10
    //     },
    //     {
    //         name: 'charls quiny',
    //         email: "charls@gmail.com",
    //         rank: 10,
    //         score: 3
    //     },

    // ]

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