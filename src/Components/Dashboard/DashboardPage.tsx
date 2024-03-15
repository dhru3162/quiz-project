import toast from "react-hot-toast";
import Navbar from "../Navbar/Navbar"
import ButtonTheme from "../Theme/Button/ButtonTheme"
import Style from './Dashboard.module.scss'
import DashboardModal from "./DashboardModal";

const DashboardPage = (props: any) => {
    const {
        data,
    } = props

    const cards = data?.map((item: any, index: number) => {
        return (
            <div key={index} className='flex justify-center w-full'>
                <div className={`max-md:w-[80%] xl:w-[90%] text-center ${Style.cardBg} w-full rounded-xl p-5 space-y-2`}>
                    <div className={`${Style.cardTitle} text-2xl font-bold line-clamp-1`}>
                        {item.title}
                    </div>
                    <div className={`line-clamp-2`}>
                        {item.description}
                    </div>
                    <DashboardModal item={item} />
                </div>
            </div>
        )
    })

    return (
        <div>
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

                    <div className='gap-8 m-10 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                        {cards}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardPage
