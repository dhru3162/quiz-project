import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Navbar from '../Navbar/Navbar';
import ButtonTheme from '../Theme/Button/ButtonTheme';
import QuestionModal from './QuestionModel';
import { Router, useRouter } from 'next/router';
import QuestionAddModal from './QuestionAddModel';
import UpdateQuestionModal from './UpdateQuestionModel';

const QuestionPage = (props: any) => {
    const { questionsList } = props;
    const router = useRouter()

    const QuizList = questionsList.map((item: any, index: number) => {
        return (
            <div key={index} className="bg-white border-b flex justify-stretch hover:bg-blue-50 cursor-default">
                <div className="px-2 md:px-4 py-2 md:py-4 font-extrabold text-sm text-gray-900 w-[5%]">
                    {index + 1}
                </div>
                <div className="px-2 md:px-4 py-2 md:py-4 w-[55%] truncate">
                    <QuestionModal item={item} />
                </div>
                <div className="px-2 md:px-4 py-2 md:py-4 w-[30%] truncate ">
                    {item?.correctAnswers || '-'}
                </div>
                <div className="px-2 md:px-4 py-2 md:py-4 w-[10%] truncate flex justify-start">
                    <UpdateQuestionModal item={item} />
                    <div className='text-red-500 text-xl'><RiDeleteBin6Fill /></div>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="bgColor min-h-screen w-screen ">
                <Navbar />
                <div className='max-w-screen-2xl bgColor mt-5 '>
                    <div className='md:px-10 w-full mx-auto'>

                        <div className="flex flex-col mb-4">
                            <div className="flex justify-between">
                                <h1 className="md:mr-4 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                                    Title: React
                                </h1>
                                <QuestionAddModal/>
                            </div>
                        </div>

                        <div className="relative overflow-x-auto shadow-lg rounded-lg ">
                            <div className="text-sm text-left text-gray-500">
                                <div className="text-xs text-gray-700 uppercase bg-blue-100">
                                    <div className='flex justify-stretch font-extrabold text-sm cursor-default'>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[5%]">
                                            #
                                        </div>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[55%] ">
                                            Questions
                                        </div>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[30%] ">
                                            Answer
                                        </div>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[10%] ">
                                            Action
                                        </div>
                                    </div>
                                </div>
                                <div className='max-h-80 overflow-auto'>
                                    {questionsList.length === 0 ? (
                                        <div className="px-6 py-4 w-full text-sm text-center">
                                            No results found.
                                        </div>
                                    ) : (
                                        <>
                                            {QuizList}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuestionPage;
