import React, { useEffect, useState } from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA, USER_API } from '@/src/lib/const'
import HistoryPage from './HistoryPage'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'

const HistoryContainer = () => {
    const router = useRouter()
    const [history, setHistory] = useState()
    const [loader, setLoader] = useState(true)
    const { loggedInData } = useSelector((state: any) => state.auth)

    useEffect(() => {
        getUserHistory()
    }, [])

    const getUserHistory = async () => {
        try {
            const res = await axios.get(`${USER_API}?userId=${loggedInData?.uid}`)
            setHistory(res.data[0].history)
        } catch (error: any) {
            toast.error(`Somthing Went Wrong`)
        } finally {
            setLoader(false)
        }
    }

    // table data
    // const history = [
    //     {
    //         key: "1",
    //         title: 'React',
    //         result: "12/15",
    //         score: "12",
    //     },
    //     {
    //         key: "2",
    //         title: 'React',
    //         result: "12/15",
    //         score: "12",
    //     },
    //     {
    //         key: "3",
    //         title: 'React',
    //         result: "12/15",
    //         score: "12",
    //     },
    //     {
    //         key: "4",
    //         title: 'React',
    //         result: "12/15",
    //         score: "12",
    //     },
    //     {
    //         key: "5",
    //         title: 'React',
    //         result: "12/15",
    //         score: "12",
    //     },
    //     {
    //         key: "6",
    //         title: 'React',
    //         result: "12/15",
    //         score: "12",
    //     },
    //     {
    //         key: "7",
    //         title: 'React',
    //         result: "12/15",
    //         score: "12",
    //     },
    //     {
    //         key: "8",
    //         title: 'React',
    //         result: "12/15",
    //         score: "12",
    //     },
    //     {
    //         key: "9",
    //         title: 'React',
    //         result: "12/15",
    //         score: "12",
    //     },
    //     {
    //         key: "10",
    //         title: 'React',
    //         result: "12/15",
    //         score: "12",
    //     },
    // ];

    return (
        <>
            <TitleComponent
                title={APP_TITLE_DATA.history}
            />
            <HistoryPage
                {...{
                    history,
                    router,
                    loader,
                }}
            />
        </>
    )
}

export default HistoryContainer
