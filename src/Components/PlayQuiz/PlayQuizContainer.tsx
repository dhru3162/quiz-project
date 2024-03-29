import { useEffect, useState } from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import PlayQuizPage from './PlayQuizPage'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import axios from 'axios'
import { USER_API } from '@/src/lib/const'
import { useDispatch, useSelector } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { setUserData } from '@/src/ReduxToolkit/Slices/User'

const PlayQuizContainer = ({ quizData }: any) => {
  const router = useRouter()
  const { userData } = useSelector((state: any) => state.user)
  const dispatch: any = useDispatch()
  const [questionNumber, setQuestionNumber] = useState(0)
  const [currentQuestion, setCurrentQuestion]: any = useState()
  const [timer, setTimer]: any = useState()
  const [selectedOption, setSelectedOption]: any = useState(``)
  const [answers, setAnswers]: any = useState([])
  const [isQuizEnd, setIsQuizEnd] = useState(false)
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

  const checkAnswer = (question: any, option: any) => {
    const green = {
      backgroundColor: `#4db34d30`,
      color: `#4db34d`,
      borderColor: `#4db34d`
    };
    const red = {
      backgroundColor: `#ff333330`,
      color: `#ff3333`,
      borderColor: `#ff3333`
    };
    const black = {
      backgroundColor: `none`,
      color: '#000000',
      borderColor: '#000000'
    };
    const findQuestionData = quizData?.questions.filter((item: any) => item.question === question)[0];

    if (answers.includes(`${question}_${option}`) && option === findQuestionData.correctAnswers) {
      return green
    } else if (answers.includes(`${question}_${option}`) && option !== findQuestionData.correctAnswers) {
      return red
    } else if (!answers.includes(`${question}_${option}`) && option === findQuestionData.correctAnswers) {
      return green
    } else {
      return black
    }
  }

  const handlerDisplayScore = (question: any) => {
    const findQuestionData = quizData?.questions.filter((item: any) => item.question === question)[0];
    const currectAnswer = `${findQuestionData.question}_${findQuestionData.correctAnswers}`
    const check = answers.includes(currectAnswer)

    return check
  }

  // for upload quiz history
  const quizResultInString = renderToString(
    <div className='space-y-16'>
      {quizData?.questions?.map((item: any, index: number) =>
        <div key={index} className='space-y-5'>

          <div className='flex justify-between items-end'>
            <div className='w-[90%] max-md:w-[83%] md:w-[87%] text-3xl max-md:text-2xl'>
              {`${index + 1}. ${item?.question}`}
            </div>
            <div className='w-[10%] max-md:w-[17%] md:w-[13%] max-md:text-sm'>
              {handlerDisplayScore(item?.question) ?
                <span className='text-[#4db34d]'>
                  Score: 1
                </span>
                :
                <span className='text-[#ff3333]'>
                  Score: 0
                </span>
              }
            </div>
          </div>

          <div className='gap-3 h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            {item?.options?.map((items: any, index: number) => {
              const alphabets = [`A.`, `B.`, `C.`, `D.`]

              return (
                <div
                  key={index}
                  className={`text-lg font-medium h-full flex w-full p-3 border rounded-lg`}
                  style={checkAnswer(item?.question, items)}
                >
                  <div className="mr-1.5">
                    {alphabets[index]}
                  </div>
                  <div className="">
                    {items}
                  </div>
                </div>
              )
            })}
          </div>

          {(answers[index] === 'emptyData' || answers[index] === undefined) &&
            <span className='text-[#ff3333] mt-3'>
              * Answer Not selected
            </span>
          }
        </div>
      )}
    </div>
  )

  const uploadQuizHistory = async () => {
    try {
      const payload = {
        id: `${userData.history.length}`,
        title: quizData?.title,
        totalQuestion: `${quizData?.totalQuestions}`,
        score: `${totalScore}`,
        result: quizResultInString,
        percentage: percentage
      }
      const addScore = { ...userData, score: userData.score + totalScore }
      const updateHistory = { ...addScore, history: [...userData.history, payload] }
      await axios.put(`${USER_API}/${userData.id}`, updateHistory)
      dispatch(setUserData(updateHistory))
    } catch (error: any) {
      toast(`Somthing Went Wrong History Not Saved`)
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
          checkAnswer,
          router,
          handlerDisplayScore,
          totalScore,
          percentage,
          quizResultInString,
          timerColorChanger,
        }}
      />
    </>
  )
}

export default PlayQuizContainer
