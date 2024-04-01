import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const HistorySkeleton = () => {

    const userCard = Array.from(Array(8)).map((s: any, index: number) => (
        <div key={index} className="flex justify-stretch w-full border-b">
            <div className="px-4 py-4 w-[10%]">
                <Skeleton height={'15px'} />
            </div>
            <div className="px-4 py-4 w-[50%]">
                <Skeleton height={'15px'} />
            </div>
            <div className="px-4 py-4 w-[20%]">
                <Skeleton height={'15px'} />
            </div>
            <div className="px-4 py-4 w-[20%]">
                <Skeleton height={'15px'} />
            </div>
        </div >
    ))

    return (
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
            {userCard}
        </SkeletonTheme>
    )
}

export default HistorySkeleton
