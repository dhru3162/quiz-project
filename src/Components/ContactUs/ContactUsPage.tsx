import Link from "next/link"
import Logo from "../Logo/Logo"
import Style from './ContactUs.module.scss'
import ButtonTheme from "../Theme/Button/ButtonTheme"
import { Input } from "@nextui-org/react"

const ContactUsPage = (props: any) => {
  const {
    handleSubmit,
    submitData,
    isLoading,
    register,
    router,
    errors,
  } = props

  return (
    <div className='bgColor min-h-[100dvh]'>

      <nav className="bg-[#EEEEEE] rounded-b-lg backdrop-blur-md md:pl-8 md:pr-8 sticky select-none z-20 top-0 ">
        <div className="max-w-screen-2xl flex flex-wrap items-center mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 outline-none rtl:space-x-reverse">
            <Logo className='h-10' />
          </Link>
        </div>
      </nav>

      <div className='flex justify-center'>
        <div className="max-w-screen-2xl w-full p-10">

          <div className="flex justify-center max-md:mt-7">

          </div>

          <div className="w-full flex justify-center mt-7">
            <div className={`${Style.container} rounded-lg w-full md:w-[80%] lg:w-[60%] xl:w-[45%] 2xl:w-[40%] h-fit flex justify-center pt-8 pb-8 `}>
              <div className={`flex flex-col items-center space-y-8 w-full mb-7`}>

                <h1 className={`${Style.textBlue} text-5xl md:text-4xl font-bold max-md:text-3xl`}>
                  Contact
                </h1>

                <form className='max-md:w-[90%] w-[60%]' onSubmit={handleSubmit(submitData)}>

                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      className={`${errors?.name ? `border-red-500` : `border-black focus:border-[#0C356A]`} block w-full focus:ring-0 peer pr-12 pt-2.5 pl-1 pb-1 bg-transparent placeholder-transparent border-b-[2.5px] appearance-none outline-none`}
                      placeholder=" "
                      {...register('name', { required: true, minLength: 3 })}
                    />
                    <label
                      className={`${errors?.name ? `text-red-500` : `text-black peer-focus:text-[#0C356A]`} text-lg pl-1 font-medium absolute duration-300 peer-focus:font-medium transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Name
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      className={`${errors?.email ? `border-red-500` : `border-black focus:border-[#0C356A]`} block w-full focus:ring-0 peer pr-12 pt-2.5 pl-1 pb-1 bg-transparent placeholder-transparent border-b-[2.5px] appearance-none outline-none`}
                      placeholder=" "
                      {...register('email', { required: true, pattern: /^[a-z0-9._-]+@[a-z0-9-]+\.[a-z]{2,4}$/i })}
                    />
                    <label
                      className={`${errors?.email ? `text-red-500` : `text-black peer-focus:text-[#0C356A]`} text-lg pl-1 font-medium absolute duration-300 peer-focus:font-medium transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Email address
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-6 group">
                    <textarea
                      placeholder=' '
                      className={`${errors?.massage ? `border-red-500` : `border-black focus:border-[#0C356A]`} resize-none h-20 block w-full focus:ring-0 peer pr-12 pt-2.5 pl-1 pb-1 bg-transparent placeholder-transparent border-b-[2.5px] appearance-none outline-none`}
                      {...register('massage', { required: true })}
                    >
                    </textarea>
                    <label
                      className={`${errors?.massage ? `text-red-500` : `text-black peer-focus:text-[#0C356A]`} text-lg peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                    >
                      Message
                    </label>
                  </div>

                  <div className="flex justify-stretch space-x-3">

                    <ButtonTheme
                      type='submit'
                      isLoading={isLoading}
                      className='w-full'
                      disabled={isLoading}
                    >
                      Submit
                    </ButtonTheme>

                    <ButtonTheme
                      type='button'
                      className='w-full'
                      disabled={isLoading}
                      onClick={() => router.push(`/`)}
                    >
                      Back To Home
                    </ButtonTheme>

                  </div>

                </form>

              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ContactUsPage
