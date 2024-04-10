import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Style from "./Dashboard.module.scss";
import ButtonTheme from "../Theme/Button/ButtonTheme";
import { Pane } from "evergreen-ui";
import { FaPlus } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { TiDelete } from "react-icons/ti";
import toast from "react-hot-toast";
import { AddQuizApi } from "@/src/ReduxToolkit/Apis/quiz.api";

interface PropInterface {
    getQuiz: any
}

const AddQuizModal = (props: PropInterface) => {
    const {
        getQuiz
    } = props
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const [correctAnswersIndex, setCorrectAnswersIndex]: any = useState<Number>()
    const [selectError, setSelectError] = useState<Boolean>(false)
    const [numberOfOptions, setNumberOfOption]: any = useState(2)
    const [{ auth }, setCookie] = useCookies(["auth"]);
    const [loader, setLoader] = useState(false)

    const submit = async (data: any) => {
        if (correctAnswersIndex !== undefined) {
            setLoader(true)
            try {
                const options = Array.from(Array(numberOfOptions)).map((s: any, index: number) => (data?.[`option${index}`]))
                const addQuizPayload = {
                    title: data.title,
                    description: data.description,
                    totalQuestions: 1,
                    time: parseInt(data.time),
                    questions: [
                        {
                            question: data?.question,
                            options: options,
                            correctAnswers: data?.[`option${correctAnswersIndex}`]
                        }
                    ]
                }
                const head = {
                    Authorization: `Bearer ${auth?.token}`
                }

                await AddQuizApi(addQuizPayload, head)
                toast.success(`Quiz Added Successfully.`)
                getQuiz()
                handleModalClose()
            } catch (error: any) {
                toast.error(`Somthing Went Wrong`)
                console.error(error)
            } finally {
                setLoader(false)
            }
        } else {
            setSelectError(true)
        }
    }

    const handleRemoveOptionFeild = (index: Number) => {
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
                onClose={handleModalClose}
                placement={"top"}
                backdrop={'blur'}
            >
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                        <ModalBody className="!px-10">
                            <form onSubmit={handleSubmit(submit)} className="space-y-2">

                                <div className="pb-1.5">
                                    <div
                                        className={`${Style.titleColor} flex flex-col gap-1 text-xl font-semibold mb-1`}
                                    >
                                        Title
                                    </div>

                                    <input
                                        type="text"
                                        {...register(`title`, { required: 'This Feild Requird' })}
                                        className={`${errors?.title ? 'border-[#ff3333] ' : 'focus:border-[#0C356A] border-gray-500'} p-2 w-full rounded-lg border outline-none`}
                                        placeholder="Enter Title"
                                    />
                                </div>

                                <div>
                                    <div
                                        className={`${Style.titleColor} flex flex-col gap-1 text-xl font-semibold mb-1`}
                                    >
                                        Description
                                    </div>

                                    <textarea
                                        {...register(`description`, { required: 'This Feild Requird' })}
                                        className={`${errors?.description ? 'border-[#ff3333] ' : 'focus:border-[#0C356A] border-gray-500'} p-2 w-full h-20 overflow-auto rounded-lg border outline-none`}
                                        placeholder="Enter Description"
                                    />
                                </div>

                                <div className='pb-1.5'>
                                    <div
                                        className={`${Style.titleColor} flex flex-col gap-1 text-xl font-semibold mb-1`}
                                    >
                                        Each Question Time
                                    </div>

                                    <input
                                        type="number"
                                        {...register(`time`, { required: 'This Feild Requird', min: 30 })}
                                        className={`${errors?.time ? 'border-[#ff3333] ' : 'focus:border-[#0C356A] border-gray-500'} p-2 w-full rounded-lg border outline-none`}
                                        placeholder="Enter Time In Seconds"
                                    />

                                    {errors?.time?.type === "min" &&
                                        <small className={`text-[#ff3333]`}>
                                            Minimum 30 Seconds Required
                                        </small>
                                    }
                                </div>


                                <div>
                                    <div
                                        className={`${Style.titleColor} flex flex-col gap-1 text-xl font-semibold mb-1`}
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
                                        className={`${Style.titleColor} flex flex-col text-xl mb-1 font-semibold`}
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

                                <div className="flex justify-center pt-4 pb-3">
                                    <ButtonTheme
                                        type='submit'
                                        className="w-1/2"
                                        disabled={loader}
                                        isLoading={loader}
                                    >
                                        Add Quiz
                                    </ButtonTheme>
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
