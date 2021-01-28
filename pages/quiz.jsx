import React from 'react';
import db from '../db.json';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import { Widget } from '../src/components/Widget';
import { QuizContainer } from '../src/components/QuizContainer/quiz';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Submit from '../src/components/Submit';

import PropTypes from 'prop-types';
function Question ({ question, questionIndex, total }) {
  const questionId = `question_${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        Pergunta Número&nbsp;<b>{questionIndex+1}</b>&nbsp;de&nbsp;<b>{total}</b>
      </Widget.Header>
      <div className="imagem">
        <img src={question.image} />
      </div>
      <Widget.Content>
        <h1>{question.title}</h1>
        <p>{question.description}</p>
        <form>
          {question.alternatives.map((opção, i) => {
            const idOpção = `opção_${i}`;

            return (
              <Widget.Topic key={idOpção} as="label" htmlFor={idOpção}>
                <input
                  style={{ display: 'none' }}
                  name={questionId}
                  type="radio"
                  id={idOpção}
                />
                {opção}
              </Widget.Topic>
            );
          })}
        </form>
      </Widget.Content>
      <Submit value="Responder!" />
    </Widget>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

function Quiz () {
  const randomBg = `/bgs/${Math.ceil(Math.random() * 10)}.png`;
  const playerName = typeof window !== "undefined"
    && window.location.href.split('name=').pop();

  return (
    <QuizBackground backgroundImage={randomBg}>
      <QuizContainer>
        <QuizLogo />
        {db.questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            questionIndex={index}
            total={db.questions.length}
          />
        ))}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lucassperez/mh-quiz" />
    </QuizBackground>
  );
}

export default Quiz;

