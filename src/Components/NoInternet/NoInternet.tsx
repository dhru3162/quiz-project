import Image from 'next/image'
import WifiImage from '../../Images/NoInternet.svg'
import Style from './NoInternet.module.scss'
import Logo from '../Logo/Logo'

const NoInternet = () => {
    return (
        <div className='h-screen bg-black w-screen flex justify-center items-center max-md:h-[93vh]'>
            <div className='max-md:w-[80%]'>
                <div className='flex justify-center mb-10'>
                    <Logo white={true} />
                </div>
                <div className='flex justify-center'>
                    <Image src={WifiImage} alt='No Internet Image' />
                </div>
                <div className={`${Style.textColor} mt-12 text-center space-y-1 select-none`}>
                    <h1 className='text-4xl font-bold'>
                        No Internet
                    </h1>
                    <div>
                        Please check your network connection and try again.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoInternet
