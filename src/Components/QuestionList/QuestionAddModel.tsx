import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import Style from "./Question.module.scss";
import ButtonTheme from "../Theme/Button/ButtonTheme";
import { BASE_API } from "@/src/lib/const";
import { nanoid } from "@reduxjs/toolkit";

const QuestionAddModal = ({ item }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleSubmit, control, reset, formState: { errors } } = useForm();
    const [options, setOptions] = useState(['', '']);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
    const [radioError, setRadioError] = useState(false); // State to manage radio button error

    const handleAddOption = () => {
        if (options.length < 4) {
            setOptions([...options, '']);
        }
    };

    const handleAnswerChange = (index: number) => {
        setCorrectAnswerIndex(index);
        setRadioError(false);
    };

    const addQuestionInner = async (newQuestion:any) => {
        try {
            // Fetch the existing data from the API
            const response = await fetch(`${BASE_API}/4`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch existing data');
            }

            let existingData = await response.json();

            // Increment the totalQuestions field
            existingData.totalQuestions = parseInt(existingData.totalQuestions) + 1;

            // Add the new question to the "questions" array
            existingData.questions.push(newQuestion);

            // Send the updated object back to the API
            const updateResponse = await fetch(`${BASE_API}/4`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(existingData)
            });

            if (!updateResponse.ok) {
                throw new Error('Failed to add question to the array');
            }

            // Log the updated data
            console.log('Updated Data:', existingData);

            onClose();
            reset(); // Reset form fields
            setOptions(['', '']); // Reset options
            setCorrectAnswerIndex(-1); // Reset correct answer index
            setRadioError(false); // Reset radio button error
        } catch (error) {
            console.error('Error adding question to the array:', error);
            // Handle error accordingly
        }
    };

    const onSubmit = (data: any) => {
        // Check if correct answer is selected
        if (correctAnswerIndex === -1) {
            setRadioError(true);
            return; // Don't proceed if no correct answer is selected
        }

        const newQuestion = {
            id: nanoid(),
            question: data.question,
            correctAnswers: data.options[correctAnswerIndex],
            options: data.options.filter((option: string) => option.trim() !== '') // Remove empty options
        };

        addQuestionInner(newQuestion);
    };

    return (
        <>
            <div onClick={() => onOpen()}>
                <ButtonTheme type='button'>Add Question</ButtonTheme>
            </div>
            <Modal
                size={'xl'}
                isOpen={isOpen}
                onClose={onClose}
                backdrop={'blur'}
            >
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                        <ModalBody className="m-2">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={`${Style.modelColor} flex flex-col gap-1 text-2xl font-semibold mb-2`}>Question</div>
                                <div className="mb-4">
                                    <Controller
                                        name="question"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Question is required' }}
                                        render={({ field }) => (
                                            <>
                                                <textarea
                                                    {...field}
                                                    className="p-2 w-full h-20 rounded-md border border-gray-300 overflow-auto"
                                                    placeholder="Enter question"
                                                />
                                                {errors.question && errors.question.type === 'required' && <span className="text-red-500">Question is required</span>}
                                            </>
                                        )}
                                    />
                                </div>
                                <div className={`${Style.modelColor} flex flex-col text-2xl font-semibold`}>Options</div>
                                {options.map((option, index) => (
                                    <div key={index} className="flex justify-between items-end">
                                        <input
                                            type="radio"
                                            checked={correctAnswerIndex === index}
                                            onChange={() => handleAnswerChange(index)}
                                            className="items-center w-7"
                                        />
                                        <Controller
                                            name={`options[${index}]`}
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: 'options is required' }}
                                            render={({ field }) => (
                                                <>
                                                    <input
                                                        {...field}
                                                        className={`${Style.InputBg}block pt-2.5 pl-2 pb-1 border-b-1 text-gray-900 w-full bg-transparent border-b-2.5 border-gray-900 appearance-none outline-none focus:ring-0`}
                                                        placeholder="Enter option"
                                                    />
                                                </>
                                            )}  
                                        />
                                    </div>
                                ))}
                                {radioError && <span className="text-red-500">Please select a correct answer</span>}
                                {options.length < 4 && (
                                    <div className="flex justify-end">
                                        <button className={`${Style.buttonTheme} font-medium text-sm mt-2`} type="button" onClick={handleAddOption}>+ Add Option</button>
                                    </div>
                                )}
                                <div className="mt-4 flex justify-center">
                                    <ButtonTheme type='submit' className="w-1/2 ">Add</ButtonTheme>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}

export default QuestionAddModal;
