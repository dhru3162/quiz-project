import { useContext, useState } from 'react'
import DashboardPage from './DashboardPage'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA } from '@/src/lib/const'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useCookies } from 'react-cookie'
import { GetQuizData } from '@/src/ReduxToolkit/Apis/quiz.api'
import { setIsLoading } from '@/src/ReduxToolkit/Slices/Auth';
import { Context } from '../Context/ContextProvider'

const DashboardContainer = () => {
    const { role } = useSelector((state: any) => state.auth);
    const [quizData, setQuizData]: any = useState();
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const router = useRouter();
    const [{ auth }, setCookie] = useCookies(["auth"]);
    const dispatch: any = useDispatch();
    const [pageChangeLoader, setPageChangeLoader] = useState(false);
    const { AdminRights } = useContext(Context);

    useEffect(() => {
        getQuiz()
        // eslint-disable-next-line
    }, [])

    const getQuiz = async () => {
        try {
            const payload = {
                Authorization: `Bearer ${auth?.token}`
            }
            const res: any = await GetQuizData(payload)
            setQuizData(res?.data?.data)
        } catch (error: any) {
            console.error(error.massage)
            toast.error(`Somthig Went Wrong`)
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
                    quizData,
                    role,
                    isLoading,
                    pageChangeLoader,
                    setPageChangeLoader,
                    router,
                    getQuiz,
                    AdminRights,
                }}
            />
        </>
    )
}

export default DashboardContainer
