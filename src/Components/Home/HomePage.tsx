import Footer from "../Footer/Footer"
import HeroSectionPage from "../HeroSection/HeroSection"
import Navbar from "../Navbar/Navbar"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className={`bgColor min-h-[100dvh]`}>
                <HeroSectionPage />
                <Footer />
            </div>
        </>
    )
}

export default HomePage
