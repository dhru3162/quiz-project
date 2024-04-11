import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Style from "./EditQuiz.module.scss";
import ButtonTheme from "../Theme/Button/ButtonTheme";
import toast from "react-hot-toast";
import { TiDelete } from "react-icons/ti";
import { AddQuestionApi, EditQuestionApi, EditQuizDetailsApi } from "@/src/ReduxToolkit/Apis/quiz.api";
import { useCookies } from "react-cookie";

interface PropData {
    quizData: any,
    children: any,
    updateQuiz: any
}

const EditQuizDetailsModal = (props: PropData) => {
    const {
        quizData,
        children,
        updateQuiz,
    } = props
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit, reset, formState: { errors }, setValue, }: any = useForm();
    const [{ auth }, setCookie] = useCookies(["auth"]);
    const [loader, setLoader] = useState(false)

    const handleOpenModal = () => {
        onOpen()
        setValue('title', quizData?.title)
        setValue('description', quizData?.description)
        setValue('time', quizData?.time)

    }

    const submitData = async (data: any) => {
        try {
            setLoader(true)
            const head = {
                Authorization: `Bearer ${auth?.token}`
            }
            await EditQuizDetailsApi(quizData?._id, data, head)
            toast.success(`Quiz Details Updated Successful.`)
            updateQuiz()
            handleModalClose()
        } catch (error) {
            toast.error(`Somthing Went Wrong`)
            console.log(error)
        } finally {
            setLoader(false)
        }
    }

    const handleModalClose = () => {
        reset()
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
                            <form onSubmit={handleSubmit(submitData)} className="space-y-2">
         
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

                                <div className="flex justify-center pt-4 pb-3">
                                    <ButtonTheme
                                        type='submit'
                                        className="w-1/2"
                                        disabled={loader}
                                        isLoading={loader}
                                    >
                                        Edit Details
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

export default EditQuizDetailsModal;
