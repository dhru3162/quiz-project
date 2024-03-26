// DashboardPage.jsx

import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar"
import Style from './Dashboard.module.scss'
import DashboardModal from "./DashboardModal";
import { MdDelete } from "react-icons/md";
import DashboardCardsSkeleton from "../Loaders/Skeletons/DashboardCardsSkeleton";
import Loader from "../Loaders/Loader";
import AddQuizModal from "./AddQuizModel";
import Link from "next/link";
import { BASE_API } from "@/src/lib/const";
import { BiEdit } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const DashboardPage = (props:any) => {
    const {
        quizData,
        role,
        isLoading,
        setGoToQuizLoader,
    } = props;
const router=useRouter()
    const [editQuizData, setEditQuizData] = useState(null);

    const handleEditClick = ({quizId}:{quizId:any}) => {
        fetchQuizDataById(quizId);

        // Redirect to edit page using Next.js router or navigate to a specific route
        // Example:
        router.push(`/question`);
    };
console.log(handleEditClick,"useee")
    const fetchQuizDataById = async ({quizId}:{quizId:string}) => {
        try {
            const response = await fetch(`${BASE_API}/${quizId}`);
            const data = await response.json();
            setEditQuizData(data);
        } catch (error) {
            console.error('Error fetching quiz data:', error);
        }
    };

    const cardsForAdmin = quizData?.map((item:any, index:any) => {
        return (
            <div key={index} className='flex justify-center w-full h-full'>
                <div className={`max-md:w-[80%] xl:w-[90%] text-center ${Style.cardBg} w-full rounded-xl relative group`}>
    
                    <div className={`${Style.cardHoverAction} rounded-lg justify-center h-full opacity-0 group-hover:opacity-100 duration-500 absolute inset-x-0 flex items-center group-hover:translate-y-0 translate-y-4 transform`} >
                        <div className="inline-flex text-3xl space-x-3">
                            {/* Handle Edit Click */}
                            <div onClick={() => handleEditClick(item.id)}>
                                <BiEdit/>
                            </div>
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
        )
    })
    
    return (
        <>
            {role === 'admin' &&
                <>
                    <Navbar />
                    <div className='bgColor min-h-screen flex justify-center'>
                        <div className="max-w-screen-2xl w-full p-10">

                            <div className="flex justify-center mt-10 max-md:mt-7">
                                <h1 className={`${Style.headText} text-5xl md:text-4xl font-bold max-md:text-3xl`}>
                                    Available Quiz
                                </h1>
                            </div>
                            <div className='flex justify-end mr-20'>
                                <AddQuizModal />
                            </div>

                            <div className='mt-10 gap-8 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                                {isLoading && <DashboardCardsSkeleton />}
                                {!isLoading && cardsForAdmin}
                            </div>

                        </div>
                    </div>
                </>
            }

        </>
    )
}

export default DashboardPage;
