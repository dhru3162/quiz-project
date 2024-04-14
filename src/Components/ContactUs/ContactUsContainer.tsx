import { APP_TITLE_DATA } from "@/src/lib/const"
import TitleComponent from "../TitleComponent/TitleComponent"
import ContactUsPage from "./ContactUsPage"
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ContactUsApi } from "@/src/ReduxToolkit/Apis/contact.api";

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
            toast.error(`Somthing Went Wrong Try Again`)
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <TitleComponent title={APP_TITLE_DATA.contactus} />
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
