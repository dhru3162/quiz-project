import { useState } from 'react'
import EditQuizPage from './EditQuizPage'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { GetOneQuiz } from '@/src/ReduxToolkit/Apis/quiz.api';
import { SEO_DATA } from '../SeoComponent/SeoData';
import SeoComponent from '../SeoComponent/SeoComponent';

const EditQuizContainer = ({ data, id }: any) => {
    const router = useRouter()
    const [quizData, setQuizData] = useState(data)

    const updateQuiz = async () => {
        try {
            const res = await GetOneQuiz(id)
            setQuizData(res.data.data)
        } catch (error: any) {
            toast.error(`Something Went Wrong`)
            console.error(error)
        }
    }

    return (
        <>
            <SeoComponent {...SEO_DATA.editQuiz} />
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
