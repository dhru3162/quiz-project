import React, { useState } from 'react'
import DashboardPage from './DashboardPage'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA, BASE_API } from '@/src/lib/const'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast'

const DashboardContainer = () => {
    const { role } = useSelector((state: any) => state.auth)
    const [isLoading, setIsLoading] = useState(true)
    const [quizData, setQuizData] = useState()
    const [goToQuizLoader, setGoToQuizLoader] = useState(false)

    useEffect(() => {
        getQuizData()
    }, [])

    const getQuizData = async () => {
        try {
            const res: any = await axios.get(`${BASE_API}`)
            setQuizData(res.data)
        } catch (error: any) {
            console.error(error.massage)
            toast(`Somthig Went Wrong`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <TitleComponent
                title={APP_TITLE_DATA.dashboard}
            />
            <DashboardPage
                {...{
                    role,
                    isLoading,
                    quizData,
                    goToQuizLoader,
                    setGoToQuizLoader,
                }}
            />
        </>
    )
}

export default DashboardContainer
