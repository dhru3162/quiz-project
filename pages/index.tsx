import Navbar from "@/src/Components/Navbar/Navbar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HeroSectionPage from "@/src/Components/HeroSection/HeroSection";
import style from "@/src/Components/HeroSection/HeroSection.module.scss"
import Footer from "@/src/Components/Footer/Footer";

export default function Home() {
  const { control, handleSubmit } = useForm()
  const [loading, setLoading]: any = useState<Boolean>(false)
  const submit = (data: any) => {
    setLoading(true)
    console.log(data);
    setTimeout(() => {
      setLoading(false)
    }, 2000);

  }

  return (
    <div className= {`${style.image}`}>

        <Navbar />
        <HeroSectionPage/>
        <Footer/>
    </div>
  );
}
