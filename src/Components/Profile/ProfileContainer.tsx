import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA } from '@/src/lib/const'
import ProfilePage from './ProfilePage'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const ProfileContainer = () => {
    const { loggedInData, role } = useSelector((state: any) => state.auth)
    const { userData, isLoading } = useSelector((state: any) => state.user)
    const router = useRouter()

    return (
        <>
            <TitleComponent
                title={APP_TITLE_DATA.profile}
            />
            <ProfilePage
                {...{
                    loggedInData,
                    router,
                    role,
                    userData,
                    isLoading,
                }}
            />
        </>
    )
}

export default ProfileContainer
