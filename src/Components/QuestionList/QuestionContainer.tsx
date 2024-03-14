import React from 'react'
import QuestionPage from './QuestionPage'

const QuestionContainer = () => {
    type Questions = {
        question: string,
        correctAnswers: string,
       
      
      }
      
      const questionsList:Questions[] = [
        {
            question:'what is react?',
            correctAnswers:"js- libary"
        },
        {
            question:'what is react?',
            correctAnswers:"js- libary"
        },
        {
            question:'what is react?',
            correctAnswers:"js- libary"
        },
        {
            question:'what is react?',
            correctAnswers:"js- libary"
        },
        {
            question:'what is react?',
            correctAnswers:"js- libary"
        },
        {
            question:'what is react?',
            correctAnswers:"js- libary"
        },
        {
            question:'what is react?',
            correctAnswers:"js- libary"
        },
        {
            question:'what is react?',
            correctAnswers:"js- libary"
        },
        {
            question:'what is react?',
            correctAnswers:"js- libary"
        },
        {
            question:'what is react?',
            correctAnswers:"js- libary"
        },
       
        
      ]

  return (
    <>
    <QuestionPage 
    {...{
        questionsList
    }}
    /> 

    </>
  )
}
export default QuestionContainer