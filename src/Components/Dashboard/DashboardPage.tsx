import Navbar from "../Navbar/Navbar"
import Style from './Dashboard.module.scss'
import DashboardModal from "./DashboardModal";
import { BiEdit } from "react-icons/bi";
import DashboardCardsSkeleton from "../Loaders/Skeletons/DashboardCardsSkeleton";
import Loader from "../Loaders/Loader";
import AddQuizModal from "./AddQuizModel";
import DeleteActionModal from "./DeleteActionModal";
import Footer from "../Footer/Footer";

const DashboardPage = (props: any) => {
    const {
        quizData,
        role,
        isLoading,
        pageChangeLoader,
        setPageChangeLoader,
        router,
        getQuiz,
        AdminRights,
    } = props

    const cardsForUser = quizData && quizData?.length > 0 ? quizData?.map((item: any, index: number) => {
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
                            setPageChangeLoader,
                            router,
                        }}
                    />
                </div>
            </div>
        )
    }) : null;

    const cardsForAdmin = quizData && quizData?.length > 0 ? quizData?.map((item: any, index: number) => {
        return (
            <div key={index} className='flex justify-center w-full h-full'>
                <div className={`max-md:w-[80%] xl:w-[90%] text-center ${Style.cardBg} w-full rounded-xl relative group`}>

                    <div className={`z-[1] rounded-lg justify-center h-[80%] group-hover:h-full opacity-0 group-hover:opacity-100 duration-500 absolute inset-x-0 flex items-center group-hover:translate-y-0 translate-y-7 transform`} >
                        <div className="inline-flex text-3xl space-x-3">
                            <BiEdit
                                className={`${Style.editAction} `}
                                onClick={() => {
                                    if (AdminRights()) {
                                        router.push(`/editquiz?q=${item?._id}`)
                                        setPageChangeLoader(true)
                                    }
                                }}
                            />
                            <DeleteActionModal
                                {...{
                                    item,
                                    getQuiz,
                                    AdminRights,
                                }}
                            />
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
        );
    }) : null;

    return (
        <>
            {pageChangeLoader && <Loader bgBlur />}
            <div className='bgColor min-h-[100dvh]'>
                <Navbar />
                {role === 'user' &&
                    <>
                        <div className='flex justify-center mb-10'>
                            <div className="max-w-screen-2xl w-full p-10">

                                <div className="flex justify-center max-md:mt-7">
                                    <div className='text-center'>
                                        <h1 className={`${Style.headText} text-5xl md:text-4xl font-bold max-md:text-3xl`}>
                                            Welcome to QuizWiz
                                        </h1>
                                        <p className={`${Style.headText} mt-3 max-md:mt-1 max-md:text-sm`}>
                                            Select topic below to start your quiz
                                        </p>
                                    </div>
                                </div>

                                <div className='mt-10 gap-8 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                                    {isLoading && <DashboardCardsSkeleton />}
                                    {!isLoading && cardsForUser}
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
                }

                {role === "admin" &&
                    <div className='flex justify-center'>

                        <div className="max-w-screen-2xl w-full p-10">

                            <div className="flex justify-center">
                                <h1 className={`${Style.headText} text-5xl md:text-4xl font-bold max-md:text-3xl`}>
                                    Available Quiz
                                </h1>
                            </div>
                            <div className='flex justify-end mr-20 max-md:mr-1 max-md:mt-5'>
                                <AddQuizModal
                                    {...{
                                        getQuiz,
                                        AdminRights,
                                    }}
                                />
                            </div>

                            <div className='mt-10 gap-8 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                                {isLoading && <DashboardCardsSkeleton />}
                                {!isLoading && cardsForAdmin}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default DashboardPage