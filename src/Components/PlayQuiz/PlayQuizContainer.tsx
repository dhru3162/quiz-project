import { useEffect, useState } from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import PlayQuizPage from './PlayQuizPage'
import { useRouter } from 'next/router'
import { dummyQuizData } from '@/src/lib/const'
import { log } from 'console'

const PlayQuizContainer = () => {
  const router = useRouter()
  const { query } = router
  const [quizData, setQuizData]: any = useState([])
  const [questionNumber, setQuestionNumber] = useState(0)
  const [currentQuestion, setCurrentQuestion]: any = useState()
  const [timer, setTimer] = useState(60)
  const [selectedOption, setSelectedOption]: any = useState(``)
  const [answers, setAnswers]: any = useState([])
  const [isQuizEnd, setIsQuizEnd] = useState(false)
  const [totalScore, setTotalScore] = useState(0)
  const percentage = ((totalScore / quizData?.totalQuestions) * 100).toFixed()

  useEffect(() => {
    getQuizData()
  }, [])

  useEffect(() => {
    if (quizData?.questions) {
      setCurrentQuestion(quizData?.questions[questionNumber])
    }
  }, [questionNumber, quizData])

  // useEffect(() => {
  //   // let time: any = null;
  //   if (timer > 0) {
  //     const count = setInterval(() => setTimer(timer - 1), 1000);
  //     return () => clearInterval(count);
  //   } else if (timer === 0){
  //     handlerNextQuestion()
  //   }
  // }, [timer])

  useEffect(() => {
    if (isQuizEnd) {
      checkScore()
    }
  }, [isQuizEnd])

  const getQuizData = () => {
    const quiz: any = dummyQuizData.filter((item: any) => item.id === query.q)
    if (!quiz) {
      router.push({
        pathname: '/dashboard'
      })
    } else {
      setQuizData(quiz[0])
      setQuestionNumber(0)
    }
  }

  const checkScore = () => {
    const checkAnswer = quizData?.questions?.map((items: any) => {
      const currectAnswer = `${items.question}_${items.correctAnswers}`
      console.log(currectAnswer)
      console.log(answers)
      const check = answers.includes(currectAnswer)
      return check
    })
    console.log(checkAnswer)
    console.log(checkAnswer.filter(Boolean).length)
    setTotalScore(checkAnswer.filter(Boolean).length)
  }

  const handlerNextQuestion = () => {
    if (selectedOption !== '') {
      setAnswers([...answers, `${currentQuestion?.question}_${selectedOption}`])
    } else {
      setAnswers([...answers, 'emptyData'])
    }

    if (quizData?.totalQuestions !== `${questionNumber + 1}`) {
      setQuestionNumber(questionNumber + 1)
    } else {
      setQuestionNumber(0)
      setIsQuizEnd(true)

      // console.log(answers)
      // const calculateAnswer = quizData?.questions.map((items: any) => {
      //   const check = answers.includes(`${currentQuestion?.question}_${items?.correctAnswers}`)
      //   return check
      // })
      // console.log(calculateAnswer) 
    }

    setTimer(60)
    setSelectedOption('')
  }
  // console.log(answers)

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

  return (
    <>
      <TitleComponent title='' />
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
        }}
      />
    </>
  )
}

export default PlayQuizContainer
