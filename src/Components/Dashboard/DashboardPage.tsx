import Navbar from "../Navbar/Navbar"
import ButtonTheme from "../Theme/Button/ButtonTheme"

const DashboardPage = (props: any) => {
    const {
        LogOut,
    } = props

    return (
        <div className='bgColor min-h-screen w-screen'>
            <Navbar />
            
        </div>
    )
}

export default DashboardPage
