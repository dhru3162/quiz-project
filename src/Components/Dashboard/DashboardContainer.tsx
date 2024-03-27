import React, { useState } from 'react'
import DashboardPage from './DashboardPage'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA } from '@/src/lib/const'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getQuiz } from '@/src/ReduxToolkit/Slices/Quiz'

const DashboardContainer = () => {
    const { role } = useSelector((state: any) => state.auth)
    const { quizData, isLoading } = useSelector((state: any) => state.quiz)
    const dispatch: any = useDispatch()
    const [goToQuizLoader, setGoToQuizLoader] = useState(false)

    useEffect(() => {
        if (quizData.length === 0) {
            dispatch(getQuiz())
        }
    }, [])

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
