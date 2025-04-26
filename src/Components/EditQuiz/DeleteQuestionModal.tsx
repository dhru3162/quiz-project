import { Modal, ModalContent, ModalBody, useDisclosure } from '@nextui-org/react';
import { useState } from 'react'
import Style from './EditQuiz.module.scss'
import { Pane } from 'evergreen-ui';
import RoundLoader from '../Loaders/RoundLoader';
import ButtonTheme from '../Theme/Button/ButtonTheme';
import { useCookies } from 'react-cookie';
import { DeleteQuestionApi } from '@/src/ReduxToolkit/Apis/quiz.api';
import toast from 'react-hot-toast';

interface PropData {
    item: any,
    updateQuiz: any,
    children: any,
    quizId: any
}

const DeleteQuestionModal = (props: PropData) => {
    const {
        item,
        quizId,
        updateQuiz,
        children,
    } = props

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loader, setLoader] = useState(false)
    const [{ auth }, setCookie] = useCookies(["auth"]);

    const handleDelete = async () => {
        setLoader(true)
        try {
            const head = {
                Authorization: `Bearer ${auth?.token}`
            }

            await DeleteQuestionApi(quizId, item?._id, head)
            toast.success(`Question Added Successfully.`)
            updateQuiz()
            onClose()
        } catch (error: any) {
            console.error(error)
            toast.error(`Something Went Wrong`)
        } finally {
            setLoader(false)
        }
    }

    return (
        <>

            <div
                onClick={() => onOpen()}
                className={`cursor-pointer`}
            >
                {children}
            </div>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                backdrop={'blur'}
                size={`sm`}
                hideCloseButton={true}
            >
                <ModalContent>
                    <ModalBody className='pt-7 pb-4'>
                        <div className='text-lg'>
                            Are you sure you want to delete this question?
                        </div>
                        <div className='flex justify-end mt-2'>
                            <div className='inline-flex space-x-2'>
                                <ButtonTheme
                                    type="button"
                                    onClick={onClose}
                                    disabled={loader}
                                    className='!py-1.5 !px-4'
                                >
                                    Cancel
                                </ButtonTheme>
                                <button
                                    className={` ${Style.deleteBtn} px-4 py-1.5 rounded-lg text-center outline-none`}
                                    onClick={handleDelete}
                                    disabled={loader}
                                >
                                    <Pane display="flex" alignItems="center" justifyContent="center">
                                        <RoundLoader className="mr-2 w-5 h-5" loading={loader} />
                                        Delete
                                    </Pane>
                                </button >
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal >
        </>
    )
}

export default DeleteQuestionModal
