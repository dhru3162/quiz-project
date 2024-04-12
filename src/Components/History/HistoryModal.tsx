import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import ButtonTheme from "../Theme/Button/ButtonTheme";
import ResultComponent from "../ResultComponent/ResultComponent";
import Style from "./History.module.scss"

const HistoryModal = (props: any) => {
  const { history } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData]: any = useState();

  return (
    <>
      {history?.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={`bg-white border-b flex justify-stretch hover:bg-[#EEEEEE] cursor-pointer`}
            onClick={() => {
              setData(item);
              onOpen();
            }}
          >
            <div className={`${Style.themeBlue} px-4 py-4 font-extrabold text-sm w-[10%]`}>
              {index + 1}
            </div>
            <div className="px-4 py-4 w-[50%] truncate">
              {item?.quizData?.title}
            </div>
            <div className="px-4 py-4 w-[20%] truncate">
              {item?.score}/{item?.quizData?.totalQuestions}
            </div>
            <div className="px-4 py-4 w-[20%] truncate">{item?.score}</div>
          </div>
        );
      })}

      <Modal
        size={"4xl"}
        isOpen={isOpen}
        placement={"top"}
        onClose={onClose}
        backdrop={"blur"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <ResultComponent
                  {...{
                    quizData: data?.quizData,
                    score: data?.score,
                    percentage: data?.percentage,
                    answers: data?.result,
                  }}
                />
              </ModalBody>
              <ModalFooter className="!pt-0">
                <ButtonTheme type="button" onClick={onClose}>
                  Close
                </ButtonTheme>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default HistoryModal;
