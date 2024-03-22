import { useSelector } from "react-redux"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const DashboardCardsSkeleton = () => {
    const { role } = useSelector((state: any) => state.auth)

    const userCard = Array.from(Array(8)).map((s: any, index: number) => (
        <div key={index} className='h-full'>
            <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                <div className={`max-md:w-[80%] xl:w-[90%] bg-[#EEEEEE] w-full rounded-xl p-5 space-y-2`}>
                    <div >
                        <Skeleton className='h-8' />
                    </div>
                    <div>
                        <Skeleton count={2} />
                    </div>
                    <div className={`flex justify-center min-w-full`}>
                        <div className="w-[60%]">
                            <Skeleton className='h-8' />
                        </div>
                    </div>
                </div>
            </SkeletonTheme>
        </div >
    ))


    const adminCard = Array.from(Array(8)).map((s: any, index: number) => (
        <div key={index} className='flex justify-center w-full h-full'>
            <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                <div className={`max-md:w-[80%] xl:w-[90%] bg-[#EEEEEE] w-full rounded-xl p-5 space-y-2`}>
                    <div>
                        <Skeleton className='h-8' />
                    </div>
                    <div>
                        <Skeleton count={3} />
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    ))


    return (
        <div className='gap-8 m-10 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 duration-500 max-w-full'>
            {/* {role === 'user' &&
                userCard
            }
            {role === 'admin' &&
                adminCard
            } */}
            {Array.from(Array(8)).map((s: any, index: number) => (
                <div key={index} className=''>
                    <div className=" rounded-xl text-center bg-[#EEEEEE] w-full">

                        <div className={`p-5 space-y-2 min-w-full`}>
                            <div className={`text-2xl font-bold line-clamp-1 h-60 `}>
                                {/* title */}
                                <Skeleton
                                    height={'100%'}
                                    width={'100px'}
                                />
                            </div>
                            <div className={`line-clamp-2`}>
                                {/* hhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}
                            </div>
                            <div>
                                {/* ujhjhjhjkhjkhkjh */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    )
}

export default DashboardCardsSkeleton


{/* <div className='m-5 dark:bg-black'>
<div className=" w-full aspect-[9/12] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='flex justify-center items-center'>
        <div className="p-5 rounded-t-lg h-60 w-4/6">
            <Skeleton
                height={'100%'}
                width={'100%'}
            />
        </div>
    </div>
    <div className="px-5 pb-5">
        <div>
            <div>
                <Skeleton
                    height={'25px'}
                />
            </div>
        </div>
        <div className="flex items-center mt-2.5 mb-5">
            <p className='w-1/3'><Skeleton /></p>
            <p className="w-[12%] ms-2"><Skeleton /></p>
        </div>
        <div className="flex items-center justify-between">
            <span className="w-2/5">
                <Skeleton
                    height={'30px'}
                />
            </span>
            <div className="rounded-lg py-2.5 w-[45%]">
                <Skeleton
                    height={'30px'}
                />
            </div>
        </div>
    </div>
</div>
</div> */}