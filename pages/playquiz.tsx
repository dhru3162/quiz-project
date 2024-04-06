import React, { useEffect } from 'react'
import PlayQuizContainer from "@/src/Components/PlayQuiz/PlayQuizContainer";
import { GetServerSideProps } from 'next';
import { GetOneQuiz } from '@/src/ReduxToolkit/Apis/quiz.api';

const playquiz = ({ quizData }: any) => {

    return (
        <PlayQuizContainer
            {...{
                quizData
            }}
        />
    )
}

export default playquiz

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