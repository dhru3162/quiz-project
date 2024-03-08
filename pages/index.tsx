import HeroSectionPage from "@/src/Components/HeroSection/HeroSectionPage";
import style from "@/src/Components/HeroSection/HeroSection.module.css"
export default function Home() {
  return (
    <div className={`${style.image}`}>
      <HeroSectionPage/>
    </div>
  );
}
