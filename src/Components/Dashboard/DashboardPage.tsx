import { FaPlus } from "react-icons/fa";
import Navbar from "../Navbar/Navbar"
import ButtonTheme from "../Theme/Button/ButtonTheme";
import Style from './Dashboard.module.scss'
import DashboardModal from "./DashboardModal";
import { Pane } from "evergreen-ui";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import DashboardCardsSkeleton from "../Loaders/Skeletons/DashboardCardsSkeleton";
import Loader from "../Loaders/Loader";

const DashboardPage = (props: any) => {
    const {
        quizData,
        role,
        isLoading,
        goToQuizLoader,
        setGoToQuizLoader,
    } = props

    const cardsForUser = quizData?.map((item: any, index: number) => {
        return (
            <div key={index} className='flex justify-center w-full'>
                <div className={`max-md:w-[80%] xl:w-[90%] text-center ${Style.cardBg} w-full rounded-xl p-5 space-y-2`}>
                    <div className={`${Style.cardTitle} text-2xl font-bold line-clamp-1`}>
                        {item.title}
                    </div>
                    <div className={`line-clamp-2`}>
                        {item.description}
                    </div>
                    <DashboardModal
                        {...{
                            item,
                            setGoToQuizLoader,
                        }}
                    />
                </div>
            </div>
        )
    })

    const cardsForAdmin = quizData?.map((item: any, index: number) => {
        return (
            <>
                <div key={index} className='flex justify-center w-full h-full'>
                    <div className={`max-md:w-[80%] xl:w-[90%] text-center ${Style.cardBg} w-full rounded-xl relative group`}>

                        <div className={`${Style.cardHoverAction} rounded-lg justify-center h-full opacity-0 group-hover:opacity-100 duration-500 absolute inset-x-0 flex items-center group-hover:translate-y-0 translate-y-4 transform`} >
                            <div className="inline-flex text-3xl space-x-3">
                                <BiEdit />
                                <MdDelete />
                            </div>
                        </div>

                        <div className="w-full duration-500 group-hover:blur p-5 space-y-2 cursor-default" >
                            <div className={`${Style.cardTitle} text-2xl font-bold line-clamp-1`}>
                                {item.title}
                            </div>
                            <div className={`line-clamp-3`}>
                                {item.description}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            {role === 'user' &&
                <>
                    {goToQuizLoader && <Loader bgBlur />}
                    <Navbar />
                    <div className='bgColor min-h-screen flex justify-center'>
                        <div className="max-w-screen-2xl">

                            <div className="flex justify-center mt-10 max-md:mt-7">
                                <div className='text-center'>
                                    <h1 className={`${Style.headText} text-5xl md:text-4xl font-bold max-md:text-3xl`}>
                                        Welcome to QuizWiz
                                    </h1>
                                    <p className={`${Style.headText} mt-3 max-md:mt-1 max-md:text-sm`}>
                                        Select topic below to start your quiz
                                    </p>
                                </div>
                            </div>

                            {isLoading ?
                                <div className="flex justify-center ">
                                    Loading Quiz...
                                </div>
                                :
                                <div className='gap-8 m-10 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 duration-500'>
                                    {cardsForUser}
                                </div>
                            }
                            {/* <div className='gap-8 m-10 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 duration-500'> */}
                            {/* <DashboardCardsSkeleton /> */}
                            {/* </div> */}

                            {/* <div className="w-full">

                            </div> */}

                        </div>
                    </div>
                </>
            }

            {role === 'admin' &&
                <>
                    <Navbar />
                    <div className='bgColor min-h-screen flex justify-center'>
                        <div className="max-w-screen-2xl">

                            <div className="flex justify-center mt-10 max-md:mt-7">
                                <h1 className={`${Style.headText} text-5xl md:text-4xl font-bold max-md:text-3xl`}>
                                    Available Quiz
                                </h1>
                            </div>
                            <div className='flex justify-end mr-20'>
                                <ButtonTheme
                                    type='button'
                                    white
                                >
                                    <Pane display="flex" alignItems="center" justifyContent="center">
                                        <FaPlus className="mr-2" />
                                        <span>Add Quiz</span>
                                    </Pane>
                                </ButtonTheme>
                            </div>

                            {/* {isLoading && <DashboardCardsSkeleton />} */}
                            <div className='gap-8 m-10 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 duration-500'>
                                {cardsForAdmin}
                            </div>

                            {/* <DashboardCardsSkeleton /> */}

                        </div>
                    </div>
                </>
            }

        </>
    )
}

export default DashboardPage
