import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";


const QuestionModal = ({ item }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
   console.log(item, "model")
  return (
    <>
      <div onClick={() => onOpen()}>
        {item?.question}
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
              <div className="flex flex-col gap-1 text-2xl font-semibold">{item?.question}</div>
              <div className="mb-4">
                {item?.options.map((option: string, index: number) => (
                  <div key={index} className={`p-2 ${item?.correctAnswers=== option ? `bg-gray-400` : ""} rounded-md border border-gray-300 mb-4`}>
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

export default QuestionModal;
