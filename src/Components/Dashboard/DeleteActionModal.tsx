import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import Style from './Dashboard.module.scss'
import { Pane } from "evergreen-ui";
import RoundLoader from "../Loaders/RoundLoader";
import ButtonTheme from "../Theme/Button/ButtonTheme";

const DeleteActionModal = (props: any) => {
    const {
        item,
        handleDelete,
        deleteQuizLoader,
    } = props

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <MdDelete
                className={`${Style.deleteAction}`}
                onClick={onOpen}
            />
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop={'blur'}
                size={`sm`}
                hideCloseButton={true}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className='pt-7 pb-4'>
                                <div className='text-lg'>
                                    Are you sure you want to delete {item?.title} quiz?
                                </div>
                                <div className='flex justify-end mt-2'>
                                    <div className='inline-flex space-x-2'>
                                        <ButtonTheme
                                            type="button"
                                            onClick={onClose}
                                            disabled={deleteQuizLoader}
                                            className='!py-1.5 !px-4'
                                        >
                                            Cancel
                                        </ButtonTheme>
                                        <button
                                            className={` ${Style.deleteBtn} px-4 py-1.5 rounded-lg text-center outline-none`}
                                            onClick={() => handleDelete(item?.id, onClose)}
                                            disabled={deleteQuizLoader}
                                        >
                                            <Pane display="flex" alignItems="center" justifyContent="center">
                                                <RoundLoader className="mr-2 w-5 h-5" loading={deleteQuizLoader} />
                                                Delete
                                            </Pane>
                                        </button >
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    );
}

export default DeleteActionModal
