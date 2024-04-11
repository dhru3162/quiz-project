import { TiArrowBack } from 'react-icons/ti';
import Navbar from '../Navbar/Navbar';
import Style from './EditQuiz.module.scss'
import { Pane } from 'evergreen-ui';
import AddEditQuestionModal from './AddEditQuestionModel';
import ViewQuestionModal from './ViewQuestionModal';
import DeleteQuestionModal from './DeleteQuestionModal';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import ButtonTheme from '../Theme/Button/ButtonTheme';
import EditQuizDetailsModal from './EditQuizDetailsModal';

const EditQuizPage = (props: any) => {
    const {
        quizData,
        router,
        updateQuiz,
    } = props

    const quizList = quizData?.questions?.map((item: any, index: number) => {
        return (
            <div key={index} className="bg-white border-b text-black flex justify-stretch hover:bg-blue-50 cursor-default">
                <div className="px-2 md:px-4 py-3 md:py-4 font-extrabold text-sm w-[5%]">
                    {index + 1}
                </div>
                <div className="px-2 md:px-4 py-3 md:py-4 w-[55%] max-md:w-[45%] truncate cursor-pointer">
                    <ViewQuestionModal
                        {...{
                            item
                        }}
                    >
                        {item?.question}
                    </ViewQuestionModal>
                </div>
                <div className="px-2 md:px-4 py-3 md:py-4 w-[30%] truncate ">
                    {item?.correctAnswers}
                </div>
                <div className="px-2 md:px-4 py-3 md:py-4 w-[10%] max-md:w-[20%] truncate flex justify-start">
                    <AddEditQuestionModal
                        {...{
                            item,
                            quizId: quizData?._id,
                            type: 'Edit',
                            updateQuiz,
                        }}
                    >
                        <div className={`${Style.editAction} text-xl me-2`}>

                            <BiEdit />
                        </div>
                    </AddEditQuestionModal>

                    <DeleteQuestionModal
                        {...{
                            item,
                            quizId: quizData?._id,
                            updateQuiz,
                        }}
                    >
                        <div className={`${Style.deleteAction} text-xl`}>
                            <MdDelete />
                        </div>
                    </DeleteQuestionModal>
                </div>
            </div>
        );
    });

    return (
        <div className="bgColor min-h-[100dvh]">
            <Navbar />
            <div className='flex justify-center'>
                <div className="max-w-screen-2xl w-full">

                    <div className='mt-5 max-md:px-5'>
                        <div className='md:px-10 w-full mx-auto'>
                            <div
                                className={`${Style.title} text-lg max-md:text-sm cursor-pointer mb-5 max-w-fit`}
                                onClick={() => router.push('/dashboard')}
                            >
                                <Pane display="flex" alignItems="center">
                                    <TiArrowBack className='mr-2' />
                                    Back
                                </Pane>
                            </div>

                            <div className="flex flex-col mb-4">
                                <div className="flex justify-between">
                                    <h1 className="md:mr-4 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                                        Title: {quizData?.title}
                                    </h1>
                                    {/* <AddEditQuestionModal
                                        {...{
                                            quizId: quizData?._id,
                                            type: 'Add',
                                            updateQuiz
                                        }}
                                    >
                                        <ButtonTheme
                                            type='button'
                                            white
                                        >
                                            Add Question
                                        </ButtonTheme>
                                    </AddEditQuestionModal> */}
                                </div>
                            </div>

                            <div>
                                <div className="flex space-x-2 mb-2">
                                    {/* <h1 className="md:mr-4 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                                        Title: {quizData?.title}
                                    </h1> */}

                                    <EditQuizDetailsModal
                                        {...{
                                            quizData,
                                            updateQuiz
                                        }}
                                    >
                                        <ButtonTheme
                                            type='button'
                                            white
                                        >
                                            Edit Details
                                        </ButtonTheme>
                                    </EditQuizDetailsModal>

                                    <AddEditQuestionModal
                                        {...{
                                            quizId: quizData?._id,
                                            type: 'Add',
                                            updateQuiz
                                        }}
                                    >
                                        <ButtonTheme
                                            type='button'
                                            white
                                        >
                                            Add Question
                                        </ButtonTheme>
                                    </AddEditQuestionModal>
                                </div>
                            </div>

                            <div className="relative overflow-auto shadow-lg rounded-lg ">
                                <div className="text-sm text-left">
                                    <div className="text-xs uppercase bg-blue-100">
                                        <div className='flex justify-stretch font-extrabold text-sm cursor-default'>
                                            <div className="px-2 py-2 md:py-3 w-[5%]">
                                                #
                                            </div>
                                            <div className="px-2 py-2 md:py-3 w-[55%] max-md:w-[45%] ">
                                                Questions
                                            </div>
                                            <div className="px-2 py-2 md:py-3 w-[30%] ">
                                                Answer
                                            </div>
                                            <div className="px-2 py-2 md:py-3 w-[10%] max-md:w-[20%] ">
                                                Action
                                            </div>
                                        </div>
                                    </div>
                                    <div className='max-h-80 overflow-auto'>
                                        {quizData?.questions?.length === 0 ? (
                                            <div className="px-6 py-4 w-full text-sm text-center">
                                                No results found.
                                            </div>
                                        ) : (
                                            <>
                                                {quizList}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditQuizPage
