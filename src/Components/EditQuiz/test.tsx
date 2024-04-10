import React from 'react'

const test = () => {
    return (
        <div>

        </div>
    )
}

export default test



// const { register, handleSubmit, reset, control, formState: { errors }, setValue, getValues, resetField }: any = useForm();
// const [correctAnswers, setCorrectAnswers] = useState<String>()
// const [selectError, setSelectError] = useState<Boolean>(false)
// const [numberOfOptions, setNumberOfOption]: any = useState(2)
// const [options, setOptions] = useState(['', '', '', '']);
// const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
// const [radioError, setRadioError] = useState(false);

{/* <div>
<div
    className={`${Style.titleColor} flex flex-col gap-1 text-xl font-semibold mb-1.5`}
>
    Question
</div>

<textarea
    className={`p-2 w-full h-20 rounded-lg border border-gray-300 overflow-auto outline-none focus:border-[#0C356A]`}
    placeholder="Enter Question"
/>
{errors.question && errors.question.type === 'required' && <span className="text-red-500">Question is required</span>}
</div>

<div>
<div
    className={`${Style.titleColor} flex flex-col text-xl mb-1.5 font-semibold`}
>
    Options
</div>
<div className="space-y-2">
    {Array.from(Array(numberOfOptions)).map((s: any, index: number) => (
        <div key={index} className="flex justify-between items-center">
            <input
                type="radio"
                name='option'
                // checked={}
                onChange={(e) => {
                    setCorrectAnswers(e.target.value)
                    setSelectError(false)
                }}
                value={getValues(`option${index}`)}
                className="items-center w-7"
            />
            <div className={`relative w-full`}>
                <input
                    {...register(`option${index}`, { required: 'This Feild Requird' })}
                    className={`${errors?.[`option${index}`] ? 'border-[#ff3333] ' : 'focus:border-[#0C356A] border-gray-500'} ${index > 1 && 'pr-7'} duration-300 pl-1 pb-1 w-full border-b-2 outline-none `}
                    placeholder="Enter option"
                />
                {index > 1 &&
                    <div
                        className={`${Style.buttonTheme} absolute right-0 top-0 py-1 px-1.5 cursor-pointer`}
                        onClick={() => {
                            resetField(`option${numberOfOptions}`)
                            setNumberOfOption(numberOfOptions - 1)
                            setCorrectAnswers('')
                        }}
                    >
                        <TiDelete />
                    </div>
                }
            </div>
        </div>
    ))}
</div>
<div className={`${selectError ? 'justify-between' : 'justify-end'} flex  mt-1`}>
    {selectError &&
        <div className={`text-[#ff3333] text-sm ml-7`}>
            Please Select Correct Answers
        </div>
    }
    <div
        className={`${Style.buttonTheme} text-sm font-bold cursor-pointer`}
        onClick={() => setNumberOfOption(numberOfOptions + 1)}
    >
        + Add Option
    </div>
</div>
</div>

<div className="flex justify-center">
<ButtonTheme type='submit' className="w-1/2 ">Update</ButtonTheme>
</div> */}












// vaseem code


// const { handleSubmit, control, reset, formState: { errors }, setValue } = useForm();
// const [options, setOptions] = useState(['', '', '', '']);
// const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
// const [radioError, setRadioError] = useState(false);

// useEffect(() => {
//     if (isOpen && item) {
//         setValue("question", item.question);
//         setValue("options", item.options);
//         const correctAnswerIndex = item.options.findIndex((opt: string) => opt === item.correctAnswer);
//         setCorrectAnswerIndex(correctAnswerIndex);
//         setOptions(item.options);
//     }
// }, [isOpen, item, setValue]);

// const handleAddOption = () => {
//     if (options.length < 4) {
//         setOptions([...options, '']);
//     }
// };

// const handleAnswerChange = (index: number) => {
//     setCorrectAnswerIndex(index);
//     setRadioError(false);
// };

// const onSubmit = (data: any) => {
//     if (correctAnswerIndex === -1) {
//         setRadioError(true);
//         return;
//     }

//     const updatedQuestion = {
//         id: item.id,
//         question: data.question,
//         correctAnswer: data.options[correctAnswerIndex],
//         options: data.options
//     };

//     updateQuestion(updatedQuestion);

//     onClose();
//     reset();
//     setOptions(['', '', '', '']);
//     setCorrectAnswerIndex(-1);
//     setRadioError(false);
// };




{/* <form onSubmit={handleSubmit(onSubmit)}>
<div className={`${Style.modelColor} flex flex-col gap-1 text-2xl font-semibold mb-2`}>Question</div>
<div className="mb-4">
    <Controller
        name="question"
        control={control}
        defaultValue=""
        rules={{ required: 'Question is required' }}
        render={({ field }) => (
            <>
                <textarea
                    {...field}
                    className="p-2 w-full h-20 rounded-md border border-gray-300 overflow-auto"
                    placeholder="Enter question"
                />
                {errors.question && errors.question.type === 'required' && <span className="text-red-500">Question is required</span>}
            </>
        )}
    />
</div>
<div className={`${Style.modelColor} flex flex-col text-2xl font-semibold`}>Options</div>
{options.map((option, index) => (
    <div key={index} className="flex justify-between items-end">
        <input
            type="radio"
            checked={correctAnswerIndex === index}
            onChange={() => handleAnswerChange(index)}
            className="items-center w-7"
        />
        <Controller
            name={`options[${index}]`}
            control={control}
            defaultValue=""
            rules={{ required: 'Option is required' }}
            render={({ field }) => (
                <>
                    <input
                        {...field}
                        className={`${Style.InputBg}block pt-2.5 pl-2 pb-1 border-b-1 text-gray-900 w-full bg-transparent border-b-2.5 border-gray-900 appearance-none outline-none focus:ring-0`}
                        placeholder="Enter option"
                    />
                </>
            )}
        />
    </div>
))}
{radioError && <span className="text-red-500">Please select a correct answer</span>}
{options.length < 4 && (
    <div className="flex justify-end">
        <button className={`${Style.buttonTheme} font-medium text-sm mt-2`} type="button" onClick={handleAddOption}>+ Add Option</button>
    </div>
)}
<div className="mt-4 flex justify-center">
    <ButtonTheme type='submit' className="w-1/2 ">Update</ButtonTheme>
</div>
</form> */}