import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import Style from './Dashboard.module.scss'
import { Pane } from "evergreen-ui";
import RoundLoader from "../Loaders/RoundLoader";
import ButtonTheme from "../Theme/Button/ButtonTheme";
import { useState } from "react";
import toast from "react-hot-toast";
import { DeleteQuizApi } from "@/src/ReduxToolkit/Apis/quiz.api";

interface PropData {
    item: any
    getQuiz: any
    AdminRights: any
}

const DeleteActionModal = (props: PropData) => {
    const {
        item,
        getQuiz,
        AdminRights
    } = props

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loader, setLoader] = useState(false)

    const handleDelete = async () => {
        setLoader(true)
        try {
            await DeleteQuizApi(item?._id)
            toast.success(`Question Deleted Successfully.`)
            getQuiz()
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
            <MdDelete
                className={`${Style.deleteAction}`}
                onClick={() => AdminRights() && onOpen()}
            />
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
                            Are you sure you want to delete {item?.title} quiz?
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
                                </button>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal >
        </>
    );
}

export default DeleteActionModal
