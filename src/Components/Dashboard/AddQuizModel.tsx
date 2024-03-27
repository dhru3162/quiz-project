import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import Style from "../QuestionList/Question.module.scss";
import ButtonTheme from "../Theme/Button/ButtonTheme";
import { BASE_API } from "@/src/lib/const";
import { nanoid } from "@reduxjs/toolkit"
import { Pane } from "evergreen-ui";
import { FaPlus } from "react-icons/fa";

const AddQuizModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleSubmit, control, reset, formState: { errors } } = useForm();
    const [options, setOptions] = useState(['', '']);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
    const [radioError, setRadioError] = useState(false);
    const defaultTime = 60;

    const handleAddOption = () => {
        if (options.length < 4) {
            setOptions([...options, '']);
        }
    };

    const handleAnswerChange = (index:any) => {
        setCorrectAnswerIndex(index);
        setRadioError(false);
    };

    const addQuestionInner = async (newQuestion:any) => {
        try {
            // Fetch the existing data from the API
            const response = await fetch(BASE_API);
            if (!response.ok) {
                throw new Error('Failed to fetch existing data');
            }
            let existingData = await response.json();

            // Increment the totalQuestions field
            existingData.totalQuestions = parseInt(existingData.totalQuestions) + 1;

            // Add the default time to the new question
            newQuestion.time = defaultTime;

            // Add the new question to the "questions" array
            existingData.questions.push(newQuestion);

            // Send the updated object back to the API
            const updateResponse = await fetch(BASE_API, {
                method: 'POST',
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
            reset();
            setOptions(['', '']);
            setCorrectAnswerIndex(-1);
            setRadioError(false);
        } catch (error) {
            console.error('Error adding question to the array:', error);
            // Handle error accordingly
        }
    };

    const onSubmit = async (data:any) => {
        if (correctAnswerIndex === -1) {
            setRadioError(true);
            return;
        }
    
        // const newQuestion = {
        //     id: nanoid(),
        //     title: data.title,
        //     description: data.description,
        //     question: data.question,
        //     correctAnswers: data.options[correctAnswerIndex],
        //     options: data.options.filter((option:any) => option.trim() !== '')
        // };


        const newQuestion = {
            title: data.title,
            description: data.description,
            totalQuestions: 1,
            time: 60,
            questions: [
                {
                    id: nanoid(),
                    question:  data.question,
                    options: data.options.filter((option:any) => option.trim() !== ''),
                    correctAnswers:  data.options[correctAnswerIndex]
                },
              
            ],
            id: nanoid()
        };
        
    
        try {
            const response = await fetch(BASE_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newQuestion)
            });
    
            if (!response.ok) {
                throw new Error('Failed to add question');
            }
    
            // Reset form and state
            onClose();
            reset();
            setOptions(['', '']);
            setCorrectAnswerIndex(-1);
            setRadioError(false);
    
            console.log('Question added successfully:', newQuestion);
        } catch (error) {
            console.error('Error adding question:', error);
            // Handle error accordingly
        }
    };
    return (
        <>
            <ButtonTheme
                type='button'
                white
                onClick={() => onOpen()}
            >
                <Pane display="flex" alignItems="center" justifyContent="center">
                    <FaPlus className="mr-2" />
                    <span>Add Quiz</span>
                </Pane>
            </ButtonTheme>
            <Modal
                size={'lg'}
                isOpen={isOpen}
                onClose={onClose}
                backdrop={'blur'}
            >
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                        <ModalBody className="m-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={`${Style.modelColor} flex flex-col gap-1 text-2xl font-semibold mb-2`}>Title</div>
                                <div className="mb-4">
                                    <Controller
                                        name="title"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Title is required' }}
                                        render={({ field }) => (
                                            <>
                                                <input
                                                    {...field}
                                                    className="p-2 w-full rounded-md border border-gray-300"
                                                    placeholder="Enter title"
                                                />
                                                {errors.title && errors.title.type === 'required' && <span className="text-red-500">Title is required</span>}
                                            </>
                                        )}
                                    />
                                </div>
                                <div className={`${Style.modelColor} flex flex-col gap-1 text-2xl font-semibold mb-2`}>Description</div>
                                <div className="mb-4">
                                    <Controller
                                        name="description"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Description is required' }}
                                        render={({ field }) => (
                                            <>
                                                <textarea
                                                    {...field}
                                                    className="p-2 w-full h-20 rounded-md border border-gray-300 overflow-auto"
                                                    placeholder="Enter description"
                                                />
                                                {errors.description && errors.description.type === 'required' && <span className="text-red-500">Description is required</span>}
                                            </>
                                        )}
                                    />
                                </div>
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
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddQuizModal;
