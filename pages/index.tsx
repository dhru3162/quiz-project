import Navbar from "@/src/Components/Navbar/Navbar";
import ButtonTheme from "@/src/Components/Theme/Button/ButtonTheme";
import LoginButton from "@/src/Components/Theme/Button/LoginButton";
import Inputfield from "@/src/Components/Theme/Input/Inputfield";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
    <div className="bgColor h-screen w-screen text-white" >

        <Navbar />

        {/* <div className="flex justify-center bg-white mt-10 p-5">

        <form onSubmit={handleSubmit(submit)} className=" w-1/2 space-y-3">

          <Inputfield
            control={control}
            name="password"
            label='Password'
            eye
            rules={{
              required: "Please Enter Password",
              pattern: {
                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                message: 'Must be 8 characters or more and including number, uppercase, lowercase and special characters',
              },
            }}
          />

          <LoginButton
            type="submit"
            name='Submit'
            isLoading={loading}
            className="w-full"
          />
          <ButtonTheme
            type="submit"
            isLoading={loading}
          >Submit</ButtonTheme>
        </form>
      </div> 
        Hello
      </div> */}
    </div>
  );
}
