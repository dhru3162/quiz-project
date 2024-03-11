import { SyncLoader } from "react-spinners"

interface Prop {
    bgBlur?: boolean
}

const Loader = ({ bgBlur }: Prop) => {

    if (bgBlur) {
        return (
            <div className='fixed h-screen w-screen bg-[#f6f6f680] backdrop-blur-sm z-50'>
                <div className='flex justify-center items-center h-screen z-50 dark:hidden'>
                    <SyncLoader color="#000000" />
                </div>
            </div>
        )
    } else {
        return (
            <div className='fixed bg-white h-screen w-screen z-50'>
                <div className='flex fixed justify-center w-screen items-center h-screen z-50 dark:hidden'>
                    <SyncLoader color="#000000" />
                </div>
            </div>
        )
    }

}

export default Loader
