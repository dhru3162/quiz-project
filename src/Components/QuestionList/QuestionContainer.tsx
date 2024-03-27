import React, { useState, useEffect } from 'react';
import QuestionPage from './QuestionPage';
import axios from 'axios';
import { BASE_API } from '@/src/lib/const';

const QuestionContainer = ({ itemId }: { itemId: string }) => {
    const [questionsList, setQuestionsList] = useState([]);
    

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`${BASE_API}/${itemId}`);
                setQuestionsList(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, [itemId]);

    return (
        <>
            <QuestionPage questionsList={questionsList} />
        </>
    );
};

export default QuestionContainer;
