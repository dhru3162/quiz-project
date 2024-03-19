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
            correctAnswers:"React"
        },
        {
            question:'what is java?',
            correctAnswers:"java"
        },
        {
            question:'what is next?',
            correctAnswers:"Next-js"
        },
        {
            question:'what is node?',
            correctAnswers:"Node-js"
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