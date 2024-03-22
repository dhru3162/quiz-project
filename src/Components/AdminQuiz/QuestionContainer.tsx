import React, { useState, useEffect } from 'react';
// import QuestionPage from './QuestionPage';
import axios from 'axios';
import { BASE_API } from '@/src/lib/const';

const QuestionContainer = (item:any) => {
    const [questionsList, setQuestionsList] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`${BASE_API}/4`);
                setQuestionsList(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    return (
        <>
            {/* <QuizPage questionsList={questionsList} /> */}
        </>
    );
};

export default QuestionContainer;
