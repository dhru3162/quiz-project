import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Navbar from '../Navbar/Navbar';
import ButtonTheme from '../Theme/Button/ButtonTheme';
import { MdDelete, MdEditSquare } from 'react-icons/md';
import QuestionModal from './QuestionModel';

const QuestionPage = (props: any) => {
    const { questionsList } = props;
    // console.log(userList);

    return (
        <div className="bgColor min-h-screen w-screen">
            <div className='max-w-screen-2xl'>
                <Navbar />
                <div className='p-4 md:p-8 lg:p-12'>
                    <div className="flex flex-col  mb-4">
                        <div className="flex justify-between">
                            <h1 className="md:mr-4 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                                Title: React
                            </h1>
                            <QuestionModal/>
                            <ButtonTheme type='button'>Add Question</ButtonTheme>
                        </div>
                        

                    </div>

                    <div className='bg-white rounded-lg overflow-x-auto'>
                        <Table removeWrapper aria-label="Example static collection table">
                            <TableHeader>
                                <TableColumn>#</TableColumn>
                                <TableColumn>Questions</TableColumn>
                                <TableColumn>Answer</TableColumn>
                                <TableColumn>Action</TableColumn>

                            </TableHeader>
                            <TableBody>
                                {questionsList.map((quiz: any, index: number) => (
                                    <TableRow key={index} className='border-b-1'>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{quiz?.question}</TableCell>
                                        <TableCell>{quiz?.correctAnswers}</TableCell>
                                        <TableCell className='flex justify-start'>
                                            <MdEditSquare size={25} className='text-green-500' />
                                            <MdDelete size={25} className='text-red-300' />
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionPage