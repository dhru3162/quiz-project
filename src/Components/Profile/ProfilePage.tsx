import React from 'react'
import Navbar from '../Navbar/Navbar'
import Styles from './Profile.module.scss'
import { Avatar, Pane } from 'evergreen-ui'
import { TiArrowBack } from 'react-icons/ti'

const ProfilePage = (props: any) => {
    const {
        loggedInData,
        router
    } = props

    return (
        <>
            <div className='bgColor max-sm:min-h-[93vh] max-sm:max-h-[93vh] min-h-screen'>
                <Navbar />
                <div className='flex justify-center items-center w-full h-full mt-28'>
                    <div className={`${Styles.container} rounded-lg w-full md:w-[80%] lg:w-[60%] xl:w-[45%] 2xl:w-[30%] h-fit pt-8 pb-8 `}>
                        <div
                            className={`${Styles.btnColor} ml-12 max-md:ml-10 text-lg max-md:text-sm cursor-pointer`}
                            onClick={() => router.push('/dashboard')}
                        >
                            <Pane display="flex" alignItems="center">
                                <TiArrowBack className='mr-2' />
                                Back
                            </Pane>
                        </div>
                        <div className={`w-full p-12 max-md:p-10 relative`}>
                            <div className='absolute -top-28 left-0 w-full'>
                                <div className='flex justify-center'>
                                    <Avatar name={`${loggedInData.firstName} ${loggedInData.lastName}`} size={90} />
                                </div>
                            </div>
                            <div className='2xl:text-3xl lg:text-2xl space-y-10 max-md:text-xl md:text-2xl max-md:space-y-8 duration-500'>
                                <div>
                                    Full Name: <span className={`${Styles.textColor}`}>{loggedInData?.firstName} {loggedInData?.lastName}</span>
                                </div>
                                <div>
                                    Email I&apos;d: <span className={`${Styles.textColor}`}>{loggedInData?.email}</span>
                                </div>
                                <div>
                                    Rank: <span className={`${Styles.textColor}`}>1</span>
                                </div>
                                <div>
                                    Your Score: <span className={`${Styles.textColor}`}>82</span>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage
