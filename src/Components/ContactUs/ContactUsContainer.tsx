import ContactUsPage from "./ContactUsPage"
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ContactUsApi } from "@/src/ReduxToolkit/Apis/contact.api";
import SeoComponent from "../SeoComponent/SeoComponent";
import { SEO_DATA } from "../SeoComponent/SeoData";

const ContactUsContainer = () => {
    const router = useRouter()
    const { loggedInData, isAuth } = useSelector((state: any) => state.auth);
    const { handleSubmit, register, formState: { errors }, setValue } = useForm()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (loggedInData && isAuth) {
            setValue("name", loggedInData?.user?.fullName)
            setValue("email", loggedInData?.user?.email)
        }
        // eslint-disable-next-line
    }, [])

    const submitData = async (inputData: any) => {
        setIsLoading(true)
        try {
            await ContactUsApi(inputData)
            toast.success('Your message sent successfully')
            toast('Admin contact you shortly')
        } catch (error) {
            toast.error(`Something Went Wrong Try Again`)
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <SeoComponent {...SEO_DATA.contactUs} />
            <ContactUsPage
                {...{
                    handleSubmit,
                    submitData,
                    register,
                    router,
                    errors,
                    isLoading,
                }}
            />
        </>
    )
}

export default ContactUsContainer
