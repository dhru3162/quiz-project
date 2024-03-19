import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Style from "./Question.module.scss"

const QuestionModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const correctAnswer = "React"; // Define the correct answer

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody className="m-4">
            <div className="flex flex-col gap-1 text-2xl font-semibold">What is React?</div>
              <div className="mb-4">
                <div className={`p-2 ${correctAnswer === "React" ? ` font-black opacity-40 bg-gray-400` : ""} rounded-md border border-gray-300 mb-4`}>
                  React
                </div>
                <div className="p-2 rounded-md border border-gray-300 mb-4">java-script</div>
                <div className="p-2 rounded-md border border-gray-300 mb-4">React-js</div>
                <div className="p-2 rounded-md border border-gray-300">paython</div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

export default QuestionModal;

