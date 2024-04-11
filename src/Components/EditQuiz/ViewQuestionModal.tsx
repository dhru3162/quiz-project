import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";

const ViewQuestionModal = (props: any) => {
    const {
        item,
        children,
    } = props
    const { isOpen, onOpen, onClose } = useDisclosure();

    const optionsStyle = (option: any) => {
        const green = {
            backgroundColor: `#4db34d30`,
            color: `#4db34d`,
            borderColor: `#4db34d`
        };
        const black = {
            backgroundColor: `none`,
            color: '#000000',
            borderColor: '#000000'
        };

        if (item.correctAnswers === option) {
            return green
        } else {
            return black
        }
    }

    return (
        <>
            <div
                className={`truncate`}
                onClick={() => onOpen()}
            >
                {children}
            </div>

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
                            <div className="flex flex-col gap-1 text-2xl font-semibold">
                                {item?.question}
                            </div>
                            <div className="mb-4">
                                {item?.options.map((option: string, index: number) => (
                                    <div
                                        key={index}
                                        className={`p-2 border rounded-md mb-4`}
                                        style={optionsStyle(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </ModalBody>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ViewQuestionModal
