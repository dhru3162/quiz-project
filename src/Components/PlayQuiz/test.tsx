
const test = () => {
    return (
        <div>
            {/* <div className='space-y-16'>
                {quizData?.questions?.map((item: any, index: number) =>
                    <div key={index} className='space-y-5'>

                        <div className='flex justify-between items-end'>
                            <div className='w-[90%] max-md:w-[85%] text-3xl max-md:text-2xl'>
                                {`${index + 1}. ${item?.question}`}
                            </div>
                            <div className='w-[10%] max-md:w-[15%] max-md:text-sm'>
                                {handlerDisplayScore(item?.question) ?
                                    <span className='text-[#4db34d]'>
                                        Score: 1
                                    </span>
                                    :
                                    <span className='text-[#ff3333]'>
                                        Score: 0
                                    </span>
                                }
                            </div>
                        </div>

                        <div className='gap-3 h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                            {item?.options?.map((items: any, index: number) => {
                                const alphabets = [`A.`, `B.`, `C.`, `D.`]

                                return (
                                    <div
                                        key={index}
                                        className={`text-lg font-medium h-full flex w-full p-3 border rounded-lg`}
                                        style={checkAnswer(item?.question, items)}
                                    >
                                        <div className="mr-1.5">
                                            {alphabets[index]}
                                        </div>
                                        <div className="">
                                            {items}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {(answers[index] === 'emptyData' || answers[index] === undefined) &&
                            <span className='text-[#ff3333] mt-3'>
                                * Answer Not selected
                            </span>
                        }
                    </div>
                )}
            </div> */}
        </div>
    )
}

export default test
