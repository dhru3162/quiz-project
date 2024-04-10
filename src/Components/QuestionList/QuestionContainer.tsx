import React, { useState, useEffect } from 'react';
import QuestionPage from './QuestionPage';
import axios from 'axios';
import { BASE_API } from '@/src/lib/const';
import { useSearchParams } from 'next/navigation';
import { GetServerSideProps } from 'next';
import { GetOneQuiz } from '@/src/ReduxToolkit/Apis/quiz.api';

// Define an interface for the question object
interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}

const QuestionContainer = ({ quizData }: any) => {
    const [questionsList, setQuestionsList] = useState<Question[]>([]); // Specify the type as Question[]
    const query = useSearchParams()
    const id = query.get("q")

    console.log(quizData)

    // useEffect(() => {
    //     const fetchQuestions = async () => {
    //         try {
    //             const response = await axios.get<Question[]>(`${BASE_API}/${id}`); // Specify the response type as Question[]
    //             setQuestionsList(response.data);
    //         } catch (error) {
    //             console.error('Error fetching questions:', error);
    //         }
    //     };

    //     fetchQuestions();
    // }, [id]);

    const updateQuestion = async (updatedQuestion: Question) => { // Specify the parameter type as Question
        try {
            const response = await axios.put<Question[]>(`${BASE_API}/${id}`, updatedQuestion); // Specify the response type as Question[]
            console.log('Question updated successfully:', response.data);
            // Update state or UI as needed
            const updatedList = questionsList.map(question => {
                if (question.id === updatedQuestion.id) {
                    return updatedQuestion;
                }
                return question;
            });
            setQuestionsList(updatedList);
        } catch (error) {
            console.error('Error updating question:', error);
            // Handle error
        }
    };

    return (
        <QuestionPage
            questionsList={questionsList}
            updateQuestion={updateQuestion}
        />
    );
};

export default QuestionContainer;

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

    if (query.q) {
        try {
            const cookie: any = req.headers.cookie
            const decodedCookie = decodeURIComponent(cookie.replace('auth=', ''));
            const auth = JSON.parse(decodedCookie);

            const payload = {
                Authorization: `Bearer ${auth?.token}`
            }
            const res = await GetOneQuiz(query.q, payload)
            const quizData = res.data.data

            return {
                props: {
                    quizData,
                },
            };
        } catch (error) {
            return {
                redirect: {
                    destination: '/dashboard',
                    permanent: false,
                },
            };
        }
    } else {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            },
        };
    }
}