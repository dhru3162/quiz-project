import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import ButtonTheme from "../Theme/Button/ButtonTheme";
import Logo from "../Logo/Logo";
import { FaPlay } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Style from './Dashboard.module.scss'

const DashboardModal = (props: any) => {
    const {
        item,
        router,
    } = props

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <ButtonTheme
                type="button"
                className="!mt-3 !py-2 lg:!py-1 !border-1"
                onClick={() => onOpen()}
            >
                Let&apos;s Play
            </ButtonTheme>
            <Modal
                size={'lg'}
                isOpen={isOpen}
                onClose={onClose}
                backdrop={'blur'}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                            <ModalBody className='pb-10'>
                                <div className="flex justify-center">
                                    <Logo />
                                </div>
                                <div className="text-center space-y-4 my-10 font-semibold text-lg">
                                    <div>
                                        Selected Quiz Topic: <span className={`${Style.textColor}`}>{item.title}</span>
                                    </div>
                                    <div>
                                        Total Questions: <span className={`${Style.textColor}`}>{item.totalQuestions}</span>
                                    </div>
                                    <div>
                                        Each Question Time: <span className={`${Style.textColor}`}>{item.time} Seconds</span>
                                    </div>
                                    <div className='text-xs text-red-700'>
                                        <div className='flex justify-center'>
                                            <BsFillInfoCircleFill className='mr-2' />
                                            Once you hit next button you can&apos;t go back again.
                                        </div>
                                    </div>

                                </div>
                                <div className='flex justify-center'>
                                    <ButtonTheme
                                        type="button"
                                        onClick={() => {
                                            onClose()
                                            router.push(`/playquiz?q=${item._id}`)
                                        }}
                                    >
                                        <FaPlay className="mr-2" />
                                        <span className="mt-0.5">Start</span>
                                    </ButtonTheme>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default DashboardModal
