import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA } from '@/src/lib/const'
import ProfilePage from './ProfilePage'
import { useSelector } from 'react-redux'

const ProfileContainer = () => {
    const { loggedInData, role } = useSelector((state: any) => state.auth)

    return (
        <>
            <TitleComponent
                title={APP_TITLE_DATA.profile}
            />
            <ProfilePage
                {...{
                    loggedInData,
                    role
                }}
            />
        </>
    )
}

export default ProfileContainer
