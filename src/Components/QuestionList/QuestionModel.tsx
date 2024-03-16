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
            <ModalHeader className="flex flex-col gap-1">What is React?</ModalHeader>
            <ModalBody>
              <div className="mb-4">
                <div className={`p-2 ${correctAnswer === "React" ? ` font-black opacity-40 ${Style.background}` : ""} rounded-md border border-gray-300 mb-4`}>
                  React
                </div>
                <div className="p-2 rounded-md border border-gray-300 mb-4">java-script</div>
                <div className="p-2 rounded-md border border-gray-300 mb-4">React-js</div>
                <div className="p-2 rounded-md border border-gray-300">paython</div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

export default QuestionModal;

