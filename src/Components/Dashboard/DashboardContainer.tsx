import React from 'react'
import DashboardPage from './DashboardPage'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA, dummyQuizData } from '@/src/lib/const'

const DashboardContainer = () => {

    // const data = {
    //     id: '1',
    //     title: 'React',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    //     totalQuestions: '10',
    //     time: 60,
    //     questions: [
    //         {
    //             id: '1',
    //             question: 'What is JSX in React?',
    //             options: [
    //                 'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
    //                 'A state management library for React applications',
    //                 'A build tool for bundling React applications',
    //                 'A testing framework for React components',
    //             ],
    //             correctAnswers: 'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript'
    //         },
    //         {
    //             id: '2',
    //             question: 'React components must always return a single JSX element.',
    //             options: ['True', 'False'],
    //             correctAnswers: 'True'
    //         },
    //         {
    //             id: '3',
    //             question: 'What is the purpose of React components?',
    //             options: [
    //                 'To handle HTTP requests and fetch data from APIs',
    //                 'To manage the state of a React application',
    //                 'To define the structure and appearance of the user interface',
    //                 'To handle user interactions and events',
    //             ],
    //             correctAnswers: 'To handle HTTP requests and fetch data from APIs'
    //         },
    //         {
    //             id: '4',
    //             question:
    //                 'Which of the following are valid React lifecycle methods? (Select all that apply)',
    //             options: [
    //                 'componentWillMount',
    //                 'componentDidMount',
    //                 'componentWillUpdate',
    //                 'componentDidUpdate',
    //             ],
    //             correctAnswers: 'componentWillMount'
    //         },
    //         {
    //             id: '5',
    //             question: 'What will be the output of the following React code?',
    //             options: ['Count: 0', 'Count: 1', 'Count: undefined', 'An error will occur'],
    //             correctAnswers: 'Count: 0'
    //         },
    //         {
    //             id: '6',
    //             question:
    //                 'In React, props are used to pass data from parent components to child components.',
    //             options: ['True', 'False'],
    //             correctAnswers: 'True'
    //         },
    //         {
    //             id: '7',
    //             question: 'What is the output of the following code snippet?',
    //             options: ['0', '1', '2', 'undefined'],
    //             correctAnswers: '0'
    //         },
    //         {
    //             id: '8',
    //             question:
    //                 'Which of the following are valid ways to conditionally render content in React? (Select all that apply)',
    //             options: [
    //                 'Using the if-else statement',
    //                 'Using the ternary operator',
    //                 'Using the switch statement',
    //                 'Using the && operator',
    //             ],
    //             correctAnswers: 'Using the if-else statement'
    //         },
    //         {
    //             id: '9',
    //             question: 'In React, what is the purpose of keys in lists?',
    //             options: [
    //                 'To provide a unique identifier for each item in the list',
    //                 'To control the order of items in the list',
    //                 'To enable sorting and filtering of the list',
    //                 'To handle user interactions within the list',
    //             ],
    //             correctAnswers: 'To provide a unique identifier for each item in the list'
    //         },
    //         {
    //             id: '10',
    //             question:
    //                 'Which of the following are valid ways to handle exceptions in Python? (Select all that apply)',
    //             options: [
    //                 'Using try-except blocks',
    //                 'Using the finally block',
    //                 'Using the raise statement',
    //                 'Using assert statements',
    //             ],
    //             correctAnswers: 'Using try-except blocks'
    //         },
    //     ],
    // }

    // console.log(JSON.stringify(data))


    return (
        <>
            <TitleComponent
                title={APP_TITLE_DATA.dashboard}
            />
            <DashboardPage
                {...{
                    dummyQuizData,
                }}
            />
        </>
    )
}

export default DashboardContainer
