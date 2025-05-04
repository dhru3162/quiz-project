import { useEffect, useState } from "react";
import PlayQuizPage from "./PlayQuizPage";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";
import { AddHistoryApi } from "@/src/ReduxToolkit/Apis/users.api";
import SeoComponent from "../SeoComponent/SeoComponent";
import { PAGE_SLUG } from "@/src/lib/const";

const PlayQuizContainer = ({ quizData }: any) => {
  const router = useRouter();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion]: any = useState();
  const [timer, setTimer]: any = useState();
  const [selectedOption, setSelectedOption]: any = useState(``);
  const [answers, setAnswers]: any = useState([]);
  const [isQuizEnd, setIsQuizEnd] = useState<boolean>(false);
  const [totalScore, setTotalScore]: any = useState();
  const [percentage, setPercentage]: any = useState();
  const [{ auth }, setCookie] = useCookies(["auth"]);

  useEffect(() => {
    if (quizData?.questions) {
      setCurrentQuestion(quizData?.questions[questionNumber]);
      setTimer(quizData?.time);
    }
  }, [questionNumber, quizData]);

  useEffect(() => {
    if (timer > 0) {
      const count = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(count);
    } else if (timer === 0) {
      if (questionNumber > -1) {
        handlerNextQuestion();
      }
    }
    // eslint-disable-next-line
  }, [timer]);

  useEffect(() => {
    if (isQuizEnd) {
      checkScore();
    }
    // eslint-disable-next-line
  }, [isQuizEnd]);

  useEffect(() => {
    if (isQuizEnd) {
      uploadQuizHistory();
    }
    // eslint-disable-next-line
  }, [totalScore]);

  const timerColorChanger = () => {
    const red = {
      color: `#ff3333`,
    };
    const orange = {
      color: `#FF9800`,
    };
    const blue = {
      color: `#0C356A`,
    };

    if (timer > 20) {
      return blue;
    } else if (timer > 5) {
      return orange;
    } else if (timer >= 0) {
      return red;
    }
  };

  const checkScore = () => {
    const checkAnswer = quizData?.questions?.map((items: any) => {
      const correctAnswer = `${items.question}_${items.correctAnswers}`;
      const check = answers.includes(correctAnswer);
      return check;
    });
    const quizScore = checkAnswer.filter(Boolean).length;
    setTotalScore(quizScore);
    const quizPercentage = (
      (quizScore / quizData?.questions?.length) *
      100
    ).toFixed();
    setPercentage(parseInt(quizPercentage));
  };

  const handlerNextQuestion = async () => {
    console.log('handlerNextQuestion: ');
    if (selectedOption !== "") {
      setAnswers([
        ...answers,
        `${currentQuestion?.question}_${selectedOption}`,
      ]);
    } else {
      setAnswers([...answers, "emptyData"]);
    }

    if (quizData?.questions?.length !== questionNumber + 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuestionNumber(0);
      setIsQuizEnd(true);
    }

    setTimer(60);
    setSelectedOption("");
  };

  const uploadQuizHistory = async () => {
    try {
      const payload = {
        quizData: quizData,
        score: totalScore,
        result: answers,
        percentage: percentage,
      };
      await AddHistoryApi(payload);

    } catch (error: any) {
      console.error(error);
      toast.error(`Something Went Wrong History Not Saved`);
    }
  };

  return (
    <>
      <SeoComponent
        title={`Take the ${quizData?.title} Quiz - Challenge Yourself on QuizWiz`}
        description={`Ready to take the ${quizData?.title} quiz? Dive in and answer questions on [mention a key topic if space allows]. Track your progress and get your results instantly on QuizWiz.`}
        canonical={`${PAGE_SLUG.playQuiz}?q=${quizData?._id}`}
      />
      <PlayQuizPage
        {...{
          quizData,
          handlerNextQuestion,
          questionNumber,
          currentQuestion,
          timer,
          setSelectedOption,
          isQuizEnd,
          answers,
          selectedOption,
          router,
          totalScore,
          percentage,
          timerColorChanger,
        }}
      />
    </>
  );
};

export default PlayQuizContainer;
