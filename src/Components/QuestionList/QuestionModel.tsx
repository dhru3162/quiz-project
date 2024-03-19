import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Style from "./Question.module.scss"
import ButtonTheme from "../Theme/Button/ButtonTheme";

const QuestionModal = ({ item }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
 

  return (

    <>
       <div
                
                onClick={() => onOpen()}
            >
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
                <div className={`p-2 ${item?.correctAnswers ? ` font-black opacity-40 bg-gray-400` : ""} rounded-md border border-gray-300 mb-4`}>
                  React
                </div>
                
                <div className="p-2 rounded-md border border-gray-300 mb-4">Java</div>
                <div className="p-2 rounded-md border border-gray-300 mb-4">Next-js</div>
                <div className="p-2 rounded-md border border-gray-300">Node-js</div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

export default QuestionModal;

