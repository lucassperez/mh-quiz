import React, { useState, useEffect } from 'react';
import db from '../db.json';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import { QuizContainer } from '../src/components/QuizContainer/quiz';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import LoadingGif from '../src/components/LoadingGif';
import Question from '../src/components/Question';
import next from 'next';

const screenStates = {
  LOADING: 'loading',
  QUIZ: 'quiz',
  RESULT: 'result'
}

function Quiz ({ randomBg }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const playerName = typeof window !== 'undefined'
  //   && window.location.href.split('name=').pop();

  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  const handleSubmitQuiz = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion >= totalQuestions)
      setScreenState(screenStates.RESULT);
    else
      setCurrentQuestion(nextQuestion);
  }

  useEffect(() => {
    if (screenState !== screenStates.RESULT) {
      setTimeout(() => {
        setScreenState(screenStates.QUIZ);
      }, 1000);
    }
  }, [screenState]);

  return (
    <QuizBackground backgroundImage={randomBg.current}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.LOADING && <LoadingGif />}

        {screenState === screenStates.QUIZ && (
          <Question
            question={question}
            questionIndex={questionIndex}
            total={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.RESULT && <h1>Acabou</h1>}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lucassperez/mh-quiz" />
    </QuizBackground>
  );
}

export default Quiz;

