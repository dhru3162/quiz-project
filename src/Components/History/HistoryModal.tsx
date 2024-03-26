import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Logo from "../Logo/Logo";
import { useState } from "react";
import ButtonTheme from "../Theme/Button/ButtonTheme";

const HistoryModal = (props: any) => {
    const {
        history
    } = props
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState('')

    return (
        <>
            {history?.map((item: any, index: number) => {
                return (
                    <div
                        key={index}
                        className="bg-white border-b flex justify-stretch hover:bg-blue-50 cursor-pointer"
                        onClick={() => {
                            setData(item.result || '')
                            onOpen()
                        }}
                    >
                        <div className="px-4 py-4 font-extrabold text-sm text-gray-900 w-[10%]">
                            {index + 1}
                        </div>
                        <div className="px-4 py-4 w-[50%] truncate">
                            {item?.title || `-`}
                        </div>
                        <div className="px-4 py-4 w-[20%] truncate">
                            {item?.score || `0`}/{item?.totalQuestion || `0`}
                        </div>
                        <div className="px-4 py-4 w-[20%] truncate">
                            {item?.score || `-`}
                        </div>
                    </div>
                )
            })}

            <Modal
                size={'4xl'}
                isOpen={isOpen}
                placement={'top'}
                onClose={onClose}
                backdrop={'blur'}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                            <ModalBody className='pb-10 overflow-auto'>
                                <div className="">
                                    <div className="flex justify-center">
                                        <Logo />
                                    </div>

                                    <div dangerouslySetInnerHTML={{ __html: data }} className="mt-12 md:mx-5" />
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <ButtonTheme
                                    type="button"
                                    onClick={onClose}
                                >
                                    Close
                                </ButtonTheme>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default HistoryModal
