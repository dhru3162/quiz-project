import axios from 'axios'
import React, { useEffect } from 'react'
import PlayQuizContainer from "@/src/Components/PlayQuiz/PlayQuizContainer";
import { GetServerSideProps } from 'next';
import { BASE_API } from '@/src/lib/const';

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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (query.q) {
        try {
            const res = await axios.get(`${BASE_API}/${query.q}`)
            const quizData = res.data

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