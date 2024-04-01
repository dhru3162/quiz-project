import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Style from './ResultStyle.module.scss'

const ResultComponent = (props: any) => {
    const {
        quizData,
        percentage,
        score,
        answers,
    } = props

    const handlerDisplayScore = (question: any) => {
        const findQuestionData = quizData?.questions.filter((item: any) => item.question === question)[0];
        const currectAnswer = `${findQuestionData.question}_${findQuestionData.correctAnswers}`
        const check = answers.includes(currectAnswer)

        return check
    }

    const checkAnswer = (question: any, option: any) => {
        const green = {
            backgroundColor: `#4db34d30`,
            color: `#4db34d`,
            borderColor: `#4db34d`
        };
        const red = {
            backgroundColor: `#ff333330`,
            color: `#ff3333`,
            borderColor: `#ff3333`
        };
        const black = {
            backgroundColor: `none`,
            color: '#000000',
            borderColor: '#000000'
        };
        const findQuestionData = quizData?.questions.filter((item: any) => item.question === question)[0];

        if (answers.includes(`${question}_${option}`) && option === findQuestionData.correctAnswers) {
            return green
        } else if (answers.includes(`${question}_${option}`) && option !== findQuestionData.correctAnswers) {
            return red
        } else if (!answers.includes(`${question}_${option}`) && option === findQuestionData.correctAnswers) {
            return green
        } else {
            return black
        }
    }

    return (
        <>
            <div className='p-8 w-full'>

                <div className={`${Style.center}`}>
                    <div className={`w-24 relative h-24 font-sans`}>
                        <CircularProgressbar
                            value={percentage}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: '#0C356A',
                                textColor: "#EEEEEE",
                                pathColor: "#EEEEEE",
                                trailColor: "transparent"
                            })}
                        />
                        <div className={`${Style.progressBar} absolute top-[32px] w-full font-medium text-2xl`}>
                            <div className={`${Style.center}`}>
                                {`${percentage}%`}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${Style.center} mt-4 font-medium text-lg`}>
                    Your Score:<span className={`${Style.totalScore}`}>{` ${score}/${quizData?.totalQuestions}`}</span>
                </div>

                <div className={`${Style.center} p-7 mt-8 max-md:p-0`}>

                    <div className='space-y-16'>
                        {quizData?.questions?.map((item: any, index: number) =>
                            <div key={index} className='space-y-5'>

                                <div className='flex justify-between items-end'>
                                    <div className='w-[90%] max-md:w-[83%] md:w-[87%] text-3xl max-md:text-2xl'>
                                        {`${index + 1}. ${item?.question}`}
                                    </div>
                                    <div className='w-[10%] max-md:w-[17%] md:w-[13%] max-md:text-sm'>
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
                    </div>

                </div>

            </div>


        </>
    )
}

export default ResultComponent


// in props :
//  all question list
//  user selected answer
//  percentage
//  score