import React from 'react'
import Navbar from '../Navbar/Navbar'
import Style from './History.module.scss'
import { TiArrowBack } from 'react-icons/ti'
import { Pane } from 'evergreen-ui'
import HistorySkeleton from '../Loaders/Skeletons/HistorySkeleton'
import HistoryModal from './HistoryModal'

const HistoryPage = (props: any) => {
    const {
        history,
        router,
        loader,
    } = props

    const historyList =
        history?.map((item: any, index: number) => {
            return (
                <div key={index} className="bg-white border-b flex justify-stretch hover:bg-blue-50 cursor-pointer">
                    <div className="px-4 py-4 font-extrabold text-sm text-gray-900 w-[10%]">
                        {index + 1}
                    </div>
                    <div className="px-4 py-4 w-[50%] truncate">
                        {item?.title || `-`}
                    </div>
                    <div className="px-4 py-4 w-[20%] truncate">
                        {item?.score || `0`}/{item?.totalQuestion || `0`}
                    </div>
                    <div className="px-4 py-4 w-[20%] truncate">
                        {item?.score || `-`}
                    </div>
                </div>
            )
        })

    return (
        <div>
            <div className='bgColor min-h-[100dvh]'>
                <Navbar />
                <div className='max-w-screen-2xl bgColor '>
                    <div className='md:px-10 max-w-full md:max-w-[90%] z-0 lg:max-w-[80%] xl:max-w-[60%] mx-auto right-0 left-0 absolute'>

                        <h1 className={`text-5xl md:text-4xl flex justify-center mt-8 font-bold max-md:text-3xl ${Style.title}`}>
                            History
                        </h1>

                        <div
                            className={`${Style.title} max-md:ml-3 text-lg max-md:text-sm cursor-pointer mb-5`}
                            onClick={() => router.push('/dashboard')}
                        >
                            <Pane display="flex" alignItems="center">
                                <TiArrowBack className='mr-2' />
                                Back
                            </Pane>
                        </div>

                        <div className="relative overflow-x-auto shadow-lg rounded-lg ">
                            <div className="text-sm text-left text-gray-500">
                                <div className="text-xs text-gray-700 uppercase bg-blue-100">
                                    <div className='flex justify-stretch font-extrabold text-sm cursor-default'>
                                        <div className="px-4 py-3 w-[10%]">
                                            #
                                        </div>
                                        <div className="px-4 py-3 w-[50%] ">
                                            Quiz Title
                                        </div>
                                        <div className="px-4 py-3 w-[20%] ">
                                            Result
                                        </div>
                                        <div className="px-4 py-3 w-[20%] ">
                                            Score
                                        </div>
                                    </div>
                                </div>
                                <div className='h-96 overflow-auto bg-white'>
                                    {loader &&
                                        <HistorySkeleton />
                                    }
                                    {!loader &&
                                        <>
                                            {history?.length === 0 ? (
                                                <>
                                                    <div className="px-6  py-4 w-full text-sm text-center">
                                                        No results found.
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <HistoryModal
                                                        {...{
                                                            history
                                                        }}
                                                    />
                                                </>
                                            )}
                                        </>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HistoryPage


{/* <div key={item?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex justify-stretch hover:bg-blue-50 cursor-default">
<div className="px-4 py-4 font-extrabold text-sm text-gray-900 whitespace-nowrap dark:text-white w-[4%]">
  {index + 1}
</div>
<div className="px-4 py-4 font-extrabold text-sm text-gray-900 whitespace-nowrap dark:text-white w-[14%] truncate">
  {data?.orderNumber || `-`}
</div>
<div className="px-4 py-4 w-[15%] truncate">
  {data?.poNumber || '-'}
</div>
<div className="px-4 py-4 w-[15%] truncate">
  {data?.patient?.firstName || `-`} {data?.patient?.lastName || `-`}
</div>
<div className="px-4 py-2 w-[8%] ">
  <Avatar name={`${data?.createdByUser?.firstName} ${data?.createdByUser?.lastName}`} size={35} />
</div>
<div className="px-4 py-4 w-[15%] truncate">
  {data?.description || `-`}
</div>
<div className="px-4 py-4 w-[15%] truncate">
  {data?.createdAt ? DateTime.fromISO(data?.createdAt).toFormat('dd MMM yyyy') : `-`}
</div>
<div className="px-4 py-4 w-[14%] truncate">
  {data?.status || `-`}
</div>
</div> */}