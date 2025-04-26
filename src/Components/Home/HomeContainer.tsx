import SeoComponent from "../SeoComponent/SeoComponent"
import { SEO_DATA } from "../SeoComponent/SeoData"
import HomePage from "./HomePage"

const HomeContainer = () => {
    return (
        <>
            <SeoComponent {...SEO_DATA.home} />
            <HomePage />
        </>
    )
}

export default HomeContainer
