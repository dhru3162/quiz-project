import HeroSectionPage from "@/src/Components/HeroSection/HeroSectionPage";
import style from "@/src/Components/HeroSection/HeroSection.module.css"
import Footer from "@/src/Components/Footer/FooterPage";
export default function Home() {
  return (
    <div className={`${style.image}`}>
      <HeroSectionPage/>
      <Footer/>
    </div>
  );
}
