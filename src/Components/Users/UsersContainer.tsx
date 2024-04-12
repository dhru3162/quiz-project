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
    const [inKey, setKey] = useState(0)
    const { role } = useSelector((state: any) => state.auth);
    const [userData, setUserData] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [paramsData, setParamsData] = useState({
        search: "",
        sort: ""
    })
    const availableFilter: object[] = [
        {
            label: 'Name A To Z',
            value: 'fullName',
        },
        {
            label: 'Name Z To A',
            value: '-fullName',
        },
        {
            label: 'Email A To Z',
            value: 'email',
        },
        {
            label: 'Email Z To A',
            value: '-email',
        },
        {
            label: 'Socre low to high',
            value: 'totalScore',
        },
        {
            label: 'Score high to low',
            value: '-totalScore',
        },
    ]

    useEffect(() => {
        if (role === "admin") {
            getUserData()
        } else {
            router.push('/')
        }
        // eslint-disable-next-line
    }, [paramsData])

    const getUserData = async () => {
        setIsLoading(true)
        try {
            const payload = {
                Authorization: `Bearer ${auth?.token}`,
            }
            const res = await GetUserData(payload, paramsData)
            setUserData(res?.data?.data)

        } catch (error: any) {
            console.error(error);
            toast.error(`Somthing Went Wrong`)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSearchData = async (e: any) => {
        setParamsData({ ...paramsData, search: e })
    }

    const handleClearSearch = () => {
        setKey((prevKey: any) => prevKey + 1)
        setParamsData({ ...paramsData, search: '' })
    }

    const handlerFilterList = (e: any) => {
        setParamsData({ ...paramsData, sort: e })
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
                    inKey,
                    handleSearchData,
                    paramsData,
                    handleClearSearch,
                    availableFilter,
                    handlerFilterList
                }}
            />
        </>
    )
}

export default UsersContainer