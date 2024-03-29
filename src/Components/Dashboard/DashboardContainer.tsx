import React, { useState } from 'react'
import DashboardPage from './DashboardPage'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA } from '@/src/lib/const'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getQuiz, getUpdatedQuizData } from '@/src/ReduxToolkit/Slices/Quiz'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const DashboardContainer = () => {
    const { role } = useSelector((state: any) => state.auth)
    const { quizData, isLoading } = useSelector((state: any) => state.quiz)
    const router = useRouter()
    const dispatch: any = useDispatch()
    const [pageChangeLoader, setPageChangeLoader] = useState(false)
    const [deleteQuizLoader, setDeleteQuizLoader] = useState(false)

    useEffect(() => {
        if (quizData.length === 0) {
            dispatch(getQuiz())
        }
    }, [])

    const handleDelete = async (id: any, onClose: any) => {
        setDeleteQuizLoader(true)
        try {
            setTimeout(() => {
                toast.success(`Delete Button Clicked! id:${id}`)
                setDeleteQuizLoader(false)
                onClose()
            }, 5000);
            // after delete quiz dispatch next line for update data
            // dispatch(getUpdatedQuizData())
        } catch (error: any) {
            console.error(error.massage)
            toast.error(`Somthig Went Wrong`)
        } finally {
            // after add delete quiz logic uncoment next line
            // setDeleteQuizLoader(false)
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
                    pageChangeLoader,
                    setPageChangeLoader,
                    router,
                    handleDelete,
                    deleteQuizLoader,
                }}
            />
        </>
    )
}

export default DashboardContainer
