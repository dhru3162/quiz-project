import { useEffect, useState } from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import PlayQuizPage from './PlayQuizPage'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import axios from 'axios'
import { USER_API } from '@/src/lib/const'
import { useDispatch, useSelector } from 'react-redux'
// import { setUserData } from '@/src/ReduxToolkit/Slices/User'

const PlayQuizContainer = ({ quizData }: any) => {
  const router = useRouter()
  const { userData } = useSelector((state: any) => state.user)
  const dispatch: any = useDispatch()
  const [questionNumber, setQuestionNumber] = useState(0)
  const [currentQuestion, setCurrentQuestion]: any = useState()
  const [timer, setTimer]: any = useState()
  const [selectedOption, setSelectedOption]: any = useState(``)
  const [answers, setAnswers]: any = useState([])
  const [isQuizEnd, setIsQuizEnd] = useState<boolean>(false)
  const [totalScore, setTotalScore]: any = useState()
  const [percentage, setPercentage]: any = useState()

  useEffect(() => {
    if (quizData?.questions) {
      setCurrentQuestion(quizData?.questions[questionNumber])
      setTimer(quizData?.time)
    }
  }, [questionNumber, quizData])

  useEffect(() => {
    if (timer > 0) {
      const count = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(count);
    } else if (timer === 0) {
      if (questionNumber > 0) {
        handlerNextQuestion()
      }
    }
  }, [timer])

  useEffect(() => {
    if (isQuizEnd) {
      checkScore()
    }
  }, [isQuizEnd])

  useEffect(() => {
    if (isQuizEnd) {
      uploadQuizHistory()
    }
  }, [totalScore])

  const timerColorChanger = () => {
    const red = {
      color: `#ff3333`,
    }
    const orange = {
      color: `#FF9800`,
    }
    const blue = {
      color: `#0C356A`,
    }

    if (timer > 20) {
      return blue
    } else if (timer > 5) {
      return orange
    } else if (timer >= 0) {
      return red
    }
  }

  const checkScore = () => {
    const checkAnswer = quizData?.questions?.map((items: any) => {
      const currectAnswer = `${items.question}_${items.correctAnswers}`
      const check = answers.includes(currectAnswer)
      return check
    })
    const quizScore = checkAnswer.filter(Boolean).length
    setTotalScore(quizScore)
    const quizPercentage = ((quizScore / quizData?.totalQuestions) * 100).toFixed()
    setPercentage(quizPercentage)
  }

  const handlerNextQuestion = async () => {
    if (selectedOption !== '') {
      setAnswers([...answers, `${currentQuestion?.question}_${selectedOption}`])
    } else {
      setAnswers([...answers, 'emptyData'])
    }

    if (quizData?.totalQuestions !== (questionNumber + 1)) {
      setQuestionNumber(questionNumber + 1)
    } else {
      setQuestionNumber(0)
      setIsQuizEnd(true)
    }

    setTimer(60)
    setSelectedOption('')
  }

  const uploadQuizHistory = async () => {
    try {
      const payload = {
        id: `${userData.history.length}`,
        quizData: quizData,
        score: `${totalScore}`,
        result: answers,
        percentage: percentage
      }
      const addScore = { ...userData, score: userData.score + totalScore }
      const updateHistory = { ...addScore, history: [...userData.history, payload] }
      await axios.put(`${USER_API}/${userData.id}`, updateHistory)
      // dispatch(setUserData(updateHistory))
    } catch (error: any) {
      if (error?.response?.status === 413) {
        toast(`History Save Limit Reached`)
      } else {
        toast(`Somthing Went Wrong History Not Saved`)
      }
    }
  }

  return (
    <>
      <TitleComponent title={quizData?.title || ''} />
      <PlayQuizPage
        {...{
          quizData,
          handlerNextQuestion,
          questionNumber,
          currentQuestion,
          timer,
          setSelectedOption,
          isQuizEnd,
          answers,
          selectedOption,
          router,
          totalScore,
          percentage,
          timerColorChanger,
        }}
      />
    </>
  )
}

export default PlayQuizContainer
