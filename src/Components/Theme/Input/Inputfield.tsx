import React, { useState } from 'react';
import { UseControllerProps, FieldValues, FieldError, useController, Control } from 'react-hook-form';
import { BiSolidErrorCircle } from 'react-icons/bi';
import Style from './inputField.module.scss'

interface FormInputProps extends UseControllerProps<FieldValues> {
    control: Control<any>
    name: string
    label: string
    rules?: {
        required?: string,
        pattern?: {
            value: any,
            message: string,
        },
        validate?: any
    }
    className?: string
    type?: string
    eye?: boolean
    disabled?: boolean
}

const Inputfield: React.FC<FormInputProps> = (props) => {
    const {
        control,
        name,
        label,
        rules,
        className,
        type,
        eye,
        disabled
    } = props

    const {
        field,
        fieldState: { error }
    } = useController({ name, control, rules, defaultValue: '' });

    const [showPass, setShowPass] = useState<Boolean>(false)
    const typeCondition = eye ? (showPass ? `text` : `password`) : (type || 'text')

    return (
        <div className={`${className && className} h-fit w-full `}>
            <div className='relative w-full'>
                <input
                    className={`${error ? `border-red-500` : `border-black focus:border-[#0C356A]`} ${(error && eye) ? `pr-16` : `pr-12`} block pt-2.5 pl-2 text-gray-900 w-full bg-transparent placeholder-transparent border-b-[2.5px] appearance-none outline-none focus:ring-0 peer`}
                    id={name}
                    {...field}
                    disabled={disabled}
                    placeholder={``}
                    type={typeCondition}
                />
                <label
                    className={`${error ? `text-red-500` : `text-black peer-focus:text-[#0C356A]`} text-base peer-focus:text-lg pl-2 font-medium absolute duration-300 peer-focus:font-medium transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                >
                    {label}
                </label>
                {eye &&
                    <div
                        className="absolute inset-y-0 right-0 px-3 flex items-center text-sm cursor-pointer duration-300 text-black peer-focus:text-[#0C356A]"
                        onClick={() => setShowPass(!showPass)}
                    >
                        {showPass ? (
                            <svg width="17" height="17" viewBox="0 0 16 16" className="bi bi-eye-slash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z" />
                                <path fillRule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z" />
                            </svg>
                        ) : (
                            <svg height="17" viewBox="0 0 56 56" width="17" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path d="m28.0103 46.4025c16.5459 0 27.9897-13.3855 27.9897-17.5582 0-4.1932-11.4646-17.558-27.9897-17.558-16.422 0-28.0103 13.3648-28.0103 17.558 0 4.1727 11.671 17.5582 28.0103 17.5582zm0-6.0524c-6.4448 0-11.5263-5.2261-11.5677-11.5058-.0206-6.4448 5.1229-11.5056 11.5677-11.5056 6.4036 0 11.5471 5.0608 11.5471 11.5056 0 6.2797-5.1435 11.5058-11.5471 11.5058zm0-7.3538c2.2929 0 4.1933-1.8797 4.1933-4.152 0-2.2928-1.9004-4.1726-4.1933-4.1726-2.3135 0-4.2139 1.8798-4.2139 4.1726 0 2.2723 1.9004 4.152 4.2139 4.152z" />
                            </svg>
                        )}
                    </div>
                }
                {error &&
                    <div
                        className={`${eye ? 'right-9' : `right-2.5`} text-red-500 absolute top-2 p-1.5`}
                    >
                        <BiSolidErrorCircle />
                    </div>
                }
            </div >
            {rules &&
                <span className={` ${!error && `invisible`} text-red-500 text-xs leading-none`}>{(error as FieldError)?.message || `This field is required`}</span>
            }
        </div>
    );
};

export default Inputfield;