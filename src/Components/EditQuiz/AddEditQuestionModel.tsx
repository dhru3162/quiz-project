import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Style from "./EditQuiz.module.scss";
import ButtonTheme from "../Theme/Button/ButtonTheme";
import toast from "react-hot-toast";
import { TiDelete } from "react-icons/ti";
import { AddQuestionApi, EditQuestionApi } from "@/src/ReduxToolkit/Apis/quiz.api";
import { useCookies } from "react-cookie";

interface PropData {
    item?: any,
    quizId: string,
    children: any,
    type: "Edit" | "Add",
    updateQuiz: any
}

const AddEditQuestionModal = (props: PropData) => {
    const {
        item,
        quizId,
        children,
        type,
        updateQuiz,
    } = props
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit, reset, formState: { errors }, setValue, resetField }: any = useForm();
    const [correctAnswersIndex, setCorrectAnswersIndex]: any = useState<Number>()
    const [selectError, setSelectError] = useState<Boolean>(false)
    const [numberOfOptions, setNumberOfOption]: any = useState(2)
    const [{ auth }, setCookie] = useCookies(["auth"]);
    const [loader, setLoader] = useState(false)

    const handleOpenModal = () => {
        onOpen()
        if (type === 'Edit') {
            setNumberOfOption(item?.options?.length)
            item?.options?.map((data: any, index: number) => {
                if (data === item?.correctAnswers) {
                    setCorrectAnswersIndex(index)
                }
                setValue(`option${index}`, data)
            })
            setValue('question', item?.question)
        }
    }

    const submitData = async (data: any) => {
        if (correctAnswersIndex !== undefined) {
            const options = Array.from(Array(numberOfOptions)).map((s: any, index: number) => (data?.[`option${index}`]))

            try {
                setLoader(true)
                if (type === 'Add') {
                    const addPayload = {
                        question: data?.question,
                        options: options,
                        correctAnswers: data?.[`option${correctAnswersIndex}`],
                    }
                    await AddQuestionApi(quizId, addPayload)
                    toast.success(`Question Added Successfully.`)
                    updateQuiz()
                } else {
                    const editPayload = {
                        _id: item?._id,
                        question: data?.question,
                        options: options,
                        correctAnswers: data?.[`option${correctAnswersIndex}`],
                    }
                    await EditQuestionApi(quizId, editPayload)
                    toast.success(`Question Edited Successfully.`)
                    updateQuiz()
                }
                handleModalClose()
            } catch (error) {
                toast.error(`Something Went Wrong`)
                console.log(error)
            } finally {
                setLoader(false)
            }
        } else {
            setSelectError(true)
        }
    }

    const handleRemoveOptionFeild = (index: any) => {
        setNumberOfOption(numberOfOptions - 1)

        if (correctAnswersIndex >= index) {
            setCorrectAnswersIndex(undefined)
        }
    }

    const handleModalClose = () => {
        reset()
        setNumberOfOption(2)
        setCorrectAnswersIndex(undefined)
        setSelectError(false)
        onClose()
    }


    return (
        <>
            <div
                onClick={handleOpenModal}
                className={`cursor-pointer`}
            >
                {children}
            </div>

            <Modal
                size={'xl'}
                isOpen={isOpen}
                onClose={handleModalClose}
                backdrop={'blur'}
            >
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                        <ModalBody className="m-2">
                            <form onSubmit={handleSubmit(submitData)} className="space-y-6">
                                <div>
                                    <div
                                        className={`${Style.titleColor} flex flex-col gap-1 text-xl font-semibold mb-1.5`}
                                    >
                                        Question
                                    </div>

                                    <textarea
                                        {...register(`question`, { required: 'This Feild Requird' })}
                                        className={`${errors?.question ? 'border-[#ff3333] ' : 'focus:border-[#0C356A] border-gray-500'} p-2 w-full h-20 rounded-lg border overflow-auto outline-none`}
                                        placeholder="Enter Question"
                                    />
                                </div>

                                <div>
                                    <div
                                        className={`${Style.titleColor} flex flex-col text-xl mb-1.5 font-semibold`}
                                    >
                                        Options
                                    </div>
                                    <div className="space-y-2">
                                        {Array.from(Array(numberOfOptions)).map((s: any, index: number) => (
                                            <div key={index} className="flex justify-between items-center">
                                                <input
                                                    type="radio"
                                                    name='option'
                                                    checked={correctAnswersIndex === index}
                                                    onChange={(e) => {
                                                        setCorrectAnswersIndex(index)
                                                        setSelectError(false)
                                                    }}
                                                    className="items-center w-7"
                                                />
                                                <div className={`relative w-full`}>
                                                    <input
                                                        {...register(`option${index}`, { required: 'This Feild Requird' })}
                                                        className={`${errors?.[`option${index}`] ? 'border-[#ff3333] ' : 'focus:border-[#0C356A] border-gray-500'} ${index > 1 && 'pr-7'} duration-300 pl-1 pb-1 w-full border-b-2 outline-none `}
                                                        placeholder="Enter option"
                                                    />
                                                    {index > 1 &&
                                                        <div
                                                            className={`${Style.buttonTheme} absolute right-0 top-0 py-1 px-1.5 cursor-pointer`}
                                                            onClick={() => handleRemoveOptionFeild(index)}
                                                        >
                                                            <TiDelete />
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`${selectError ? 'justify-between' : 'justify-end'} flex  mt-1`}>
                                        {selectError &&
                                            <div className={`text-[#ff3333] text-sm ml-7`}>
                                                Please Select Correct Answers
                                            </div>
                                        }
                                        <button
                                            type='button'
                                            disabled={numberOfOptions === 4}
                                            className={`${Style.buttonTheme} text-sm font-bold disabled:opacity-75 select-none`}
                                            onClick={() => setNumberOfOption(numberOfOptions + 1)}
                                        >
                                            + Add Option
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <ButtonTheme
                                        type='submit'
                                        className="w-1/2"
                                        disabled={loader}
                                        isLoading={loader}
                                    >
                                        {type} Question
                                    </ButtonTheme>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddEditQuestionModal;
