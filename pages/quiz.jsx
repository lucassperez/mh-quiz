import React from 'react';
import db from '../db.json';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import { Widget } from '../src/components/Widget';
import { QuizContainer } from '../src/components/QuizContainer/quiz';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';

function Quiz () {
  const randomBg = `/bgs/${Math.ceil(Math.random() * 10)}.png`;
  const name = typeof window !== "undefined"
    && window.location.href.split('name=').pop();

  let i = 0;
  return (
    <QuizBackground backgroundImage={randomBg}>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            É hora do Quiz!&nbsp;&nbsp;&nbsp;<b>{i+1}/10</b>
          </Widget.Header>
          <div className="imagem">
            <img src={`/gifs/${i+1}.gif`}/>
          </div>
          <Widget.Content>
            <h1>{db.questions[i].title}</h1>
            <p>{db.questions[i].description}</p>
            <p>{db.questions[i].answer}</p>
            {db.questions[i].alternatives.map((opção, index) => (
              <p key={index}>{opção}</p>
            ))}
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lucassperez/mh-quiz" />
    </QuizBackground>
  );
}

export default Quiz;

