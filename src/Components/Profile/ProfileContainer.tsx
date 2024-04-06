import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA } from '@/src/lib/const'
import ProfilePage from './ProfilePage'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const ProfileContainer = () => {
    const { loggedInData, role } = useSelector((state: any) => state.auth)
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
                }}
            />
        </>
    )
}

export default ProfileContainer
