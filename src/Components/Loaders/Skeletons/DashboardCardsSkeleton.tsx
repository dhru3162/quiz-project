import { useSelector } from "react-redux"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const DashboardCardsSkeleton = () => {
    const { role } = useSelector((state: any) => state.auth)

    const userCard = Array.from(Array(8)).map((s: any, index: number) => (
        <div key={index} className='flex justify-center w-full h-full'>
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
        </div >
    ))


    const adminCard = Array.from(Array(8)).map((s: any, index: number) => (
        <div key={index} className='flex justify-center w-full h-full'>
            <div className={`max-md:w-[80%] xl:w-[90%] bg-[#EEEEEE] w-full rounded-xl p-5 space-y-2`}>
                <div>
                    <Skeleton className='h-8' />
                </div>
                <div>
                    <Skeleton count={3} />
                </div>
            </div>
        </div>
    ))


    return (
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
            {role === 'user' && userCard}
            {role === 'admin' && adminCard}
        </SkeletonTheme>
    )
}

export default DashboardCardsSkeleton
