import { useState } from 'react'
import EditQuizPage from './EditQuizPage'
import { useRouter } from 'next/navigation';
import { APP_TITLE_DATA } from '@/src/lib/const';
import TitleComponent from '@/src/Components/TitleComponent/TitleComponent';
import toast from 'react-hot-toast';
import { useCookies } from 'react-cookie';
import { GetOneQuiz } from '@/src/ReduxToolkit/Apis/quiz.api';

const EditQuizContainer = ({ data, id }: any) => {
    const router = useRouter()
    const [quizData, setQuizData] = useState(data)
    const [{ auth }, setCookie] = useCookies(["auth"]);

    const updateQuiz = async () => {
        try {
            const payload = {
                Authorization: `Bearer ${auth?.token}`
            }
            const res = await GetOneQuiz(id, payload)
            setQuizData(res.data.data)
        } catch (error: any) {
            toast.error(`Somthing Went Wrong`)
            console.error(error)
        }
    }

    return (
        <>
            <TitleComponent
                title={APP_TITLE_DATA.editQuiz}
            />
            <EditQuizPage
                {...{
                    quizData,
                    router,
                    updateQuiz,
                }}
            />
        </>
    )
}

export default EditQuizContainer
