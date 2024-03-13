import Footer from "../Footer/Footer"
import HeroSectionPage from "../HeroSection/HeroSection"
import Navbar from "../Navbar/Navbar"

const HomePage = () => {
    return (
        <div className={`bgColor min-h-screen`}>
            <Navbar />
            <HeroSectionPage />
            <Footer />
        </div>
    )
}

export default HomePage
