import { useContext, useState } from 'react'
import DashboardPage from './DashboardPage'
import SeoComponent from '../SeoComponent/SeoComponent'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useCookies } from 'react-cookie'
import { GetQuizData } from '@/src/ReduxToolkit/Apis/quiz.api'
import { Context } from '../Context/ContextProvider'
import { SEO_DATA } from '../SeoComponent/SeoData'

const DashboardContainer = () => {
    const { role } = useSelector((state: any) => state.auth);
    const [quizData, setQuizData]: any = useState();
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const router = useRouter();
    const [{ auth }, setCookie] = useCookies(["auth"]);
    const { AdminRights } = useContext(Context);

    useEffect(() => {
        getQuiz()
        // eslint-disable-next-line
    }, [])

    const getQuiz = async () => {
        try {
            const res: any = await GetQuizData()
            setQuizData(res?.data?.data)
        } catch (error: any) {
            console.error(error.massage)
            toast.error(`Something Went Wrong`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <SeoComponent {...SEO_DATA.dashboard} />
            <DashboardPage
                {...{
                    quizData,
                    role,
                    isLoading,
                    router,
                    getQuiz,
                    AdminRights,
                }}
            />
        </>
    )
}

export default DashboardContainer
