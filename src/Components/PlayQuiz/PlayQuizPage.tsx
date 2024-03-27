import { TbPlayerTrackNextFilled } from 'react-icons/tb'
import ButtonTheme from '../Theme/Button/ButtonTheme'
import Style from './PlayQuiz.module.scss'
import Logo from '../Logo/Logo'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { ClipLoader, MoonLoader } from 'react-spinners';

const PlayQuizPage = (props: any) => {
  const {
    quizData,
    handlerNextQuestion,
    questionNumber,
    currentQuestion,
    timer,
    setSelectedOption,
    isQuizEnd,
    selectedOption,
    // answers,
    // checkAnswer,
    router,
    // handlerDisplayScore,
    totalScore,
    percentage,
    quizResultInString,
    // quizOverLoader,
    timerColorChanger,
  } = props

  return (
    <>
      <div className='bgColor min-h-[100dvh] h-fit'>

        <div className={`${Style.center} pt-8`}>
          <Logo white />
        </div>

        {!isQuizEnd &&
          <div className={`${Style.center} w-full mt-16`}>
            <div className={`${Style.container} relative rounded-lg w-full md:w-[90%] lg:w-[80%] xl:w-[60%] duration-500 h-fit`}>

              <div className='p-8 space-y-8 w-full'>

                <div className="absolute -top-12 left-0 w-full">
                  <div className="flex justify-center items-center select-none">
                    <div className='relative'>
                      <svg width="75" height="100" className='h-28' viewBox="0 0 130 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="65" cy="89" r="64" fill="#EEEEEE" />
                        <path d="M50.5775 0.751892C46.8782 2.58652 46.1263 7.18811 49.0737 10.1055C50.6376 11.6995 51.8707 12.0303 55.961 12.0303H59.1792V18.0455V24.0306L58.2167 24.1809C57.6754 24.2712 56.2017 24.4817 54.9685 24.6922C41.0435 26.7675 28.1109 33.5646 17.9753 44.0911C2.4863 60.1516 -3.55894 83.4002 2.06523 105.175C10.3361 137.296 41.7953 158.139 74.578 153.236C100.323 149.356 121.376 130.469 127.902 105.356C132.865 86.3777 128.895 65.7457 117.346 50.3168L115.15 47.3694L118.398 44.061C122.759 39.6399 123.361 38.3466 122.519 35.4293C121.737 32.7525 119.692 31.1886 116.925 31.1585C114.639 31.1585 113.707 31.73 109.857 35.5195L106.549 38.7677L103.601 36.5722C97.8867 32.3014 90.8189 28.7525 83.721 26.6171C80.7134 25.7148 77.1344 24.993 71.9012 24.1809L70.9087 24.0306V18.0755V12.0905L74.7584 12.0002C79.0592 11.8799 79.9014 11.5792 81.5255 9.5641C83.1195 7.5791 83.0293 4.12038 81.345 2.19553C79.4202 0 79.5405 0 65.0139 0H52.0813L50.5775 0.751892ZM74.5178 36.6925C90.9693 39.67 105.466 50.7078 112.744 65.7758C122.038 85.0243 118.94 107.882 104.804 123.912C97.0446 132.755 86.5782 138.74 74.7584 141.116C70.1869 142.018 60.6529 142.078 56.0212 141.236C34.2764 137.236 17.4941 120.935 12.9827 99.4306C11.479 92.1522 11.7196 82.9791 13.6143 75.6406C19.1483 54.347 37.3742 38.5872 59.3295 36.0909C63.0289 35.6699 70.5478 35.9706 74.5178 36.6925Z" fill="#0C356A" />
                      </svg>
                      <div className={`absolute m-auto top-0 flex justify-center w-full h-full mt-2 items-center text-3xl font-medium duration-500`} style={timerColorChanger()}>
                        {timer}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${Style.questionNumber} font-semibold select-none`}>
                  <span className={`text-3xl`}>
                    {questionNumber + 1}/
                  </span>
                  <span className='text-lg'>
                    {quizData?.totalQuestions}
                  </span>
                </div>

                <div className='text-3xl'>
                  {currentQuestion?.question}
                </div>

                <div className='gap-3 h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 duration-500'>
                  {currentQuestion?.options?.map((items: any, index: number) =>
                    <div key={index} className='relative text-lg font-medium select-none'>
                      <input type="radio" id={items} name={`option`} value={items} checked={selectedOption === items} onChange={(e: any) => setSelectedOption(e.target.value)} className="absolute top-0 bottom-0 left-5 m-auto outline-none w-4 cursor-pointer peer" required />
                      <label htmlFor={items} className="inline-flex items-center justify-between w-full min-h-full p-3 !pl-12 border border-black rounded-lg cursor-pointer peer-checked:border-[#0C356A] peer-checked:text-[#0C356A] peer-checked:bg-[#0C356A30] hover:text-[#0C356A] hover:border-[#0C356A] hover:bg-gray-100 ">
                        {items}
                      </label>
                    </div>
                  )}
                </div>

                <div className='flex justify-end select-none'>
                  <ButtonTheme
                    type='button'
                    onClick={handlerNextQuestion}
                  >
                    {quizData?.totalQuestions === (questionNumber + 1) ? `Finish` : `Next`}
                    {quizData?.totalQuestions !== (questionNumber + 1) && <span className='ml-2'><TbPlayerTrackNextFilled /></span>}

                  </ButtonTheme>
                </div>
              </div>
            </div>
          </div>
        }

        {isQuizEnd &&
          <div className={`${Style.center} w-full mt-8 pb-16`}>
            <div className={`${Style.container} relative rounded-lg w-full md:w-[90%] lg:w-[80%] xl:w-[60%] duration-500 h-fit`}>

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
                  Your Score:<span className={`${Style.totalScore}`}>{` ${totalScore}/${quizData?.totalQuestions}`}</span>
                </div>

                <div className={`${Style.center} p-7 mt-8 max-md:p-0`}>
                  <div>

                    <div dangerouslySetInnerHTML={{ __html: quizResultInString }} />

                    <div className={`${Style.center} mt-16`}>
                      <ButtonTheme
                        type='button'
                        onClick={() => router.push('/dashboard')}
                      >
                        Go To Dashboard
                      </ButtonTheme>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        }

      </div >
    </>
  )
}

export default PlayQuizPage
