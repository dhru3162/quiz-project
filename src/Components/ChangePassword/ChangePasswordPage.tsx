import Styles from "./ChangePassword.module.scss"
import Navbar from '../Navbar/Navbar'
import { Pane } from "evergreen-ui"
import { TiArrowBack } from "react-icons/ti"
import Inputfield from "../Theme/Input/Inputfield"
import LoginButton from "../Theme/Button/LoginButton"

const ChangePasswordPage = (props: any) => {
    const {
        router,
        control,
        handleSubmit,
        handleChangePassword,
        getValues,
        isLoading,
    } = props;

    return (
        <div className="bgColor min-h-[100dvh]">
            <Navbar />
            <div className="md:px-4 md:container md:mx-auto flex justify-center items-center h-full mt-5">
                <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                    <div
                        className={`${Styles.btnColor} max-md:ml-3 text-lg max-md:text-sm cursor-pointer mb-3`}
                        onClick={() => router.push('/dashboard')}
                    >
                        <Pane display="flex" alignItems="center">
                            <TiArrowBack className='mr-2' />
                            Back
                        </Pane>
                    </div>
                    <div className={`${Styles.container} rounded-lg h-fit p-7 duration-500`}>
                        <h1 className={`${Styles.textColor} text-3xl max-md:text-2xl font-black text-center`}>
                            Change Password
                        </h1>
                        <div className="flex justify-center mt-8">
                            <form className="w-full md:w-[70%] lg:w-[60%]" onSubmit={handleSubmit(handleChangePassword)}>
                                <Inputfield
                                    label='Current Password'
                                    name='currentPassword'
                                    eye
                                    control={control}
                                    className='mt-2'
                                    rules={{
                                        required: "Please Enter Current Password",
                                        pattern: {
                                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                            message: 'Ex. Abcd@123',
                                        },
                                    }}
                                />
                                <Inputfield
                                    label='New Password'
                                    name='newPassword'
                                    eye
                                    control={control}
                                    className='mt-2'
                                    rules={{
                                        required: "Please Enter New Password",
                                        pattern: {
                                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                            message: 'Ex. Abcd@123',
                                        },
                                        validate: {
                                            matchesPassword: (value: any) => {
                                                const { currentPassword } = getValues();
                                                return currentPassword !== value || "New password must be unique";
                                            }
                                        }
                                    }}
                                />
                                <Inputfield
                                    label='Confirm New Password'
                                    name='confirmNewPassword'
                                    eye
                                    control={control}
                                    className='mt-2'
                                    rules={{
                                        required: "Please Enter Confirm New Password",
                                        validate: {
                                            matchesPassword: (value: any) => {
                                                const { newPassword } = getValues();
                                                return newPassword === value || "Passwords should match!";
                                            }
                                        }
                                    }}
                                />
                                <div className="mt-5 mb-3">
                                    <LoginButton
                                        type="submit"
                                        className="w-full"
                                        isLoading={isLoading}
                                    >
                                        Change Password
                                    </LoginButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordPage
