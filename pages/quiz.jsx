import React from 'react';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import { Widget } from '../src/components/Widget';
import { QuizContainer } from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';

function Quiz () {
  const randomBg = `/bgs/${Math.ceil(Math.random() * 10)}.png`;
  const name = typeof window !== "undefined"
    && window.location.href.split('name=').pop()

  return (
    <QuizBackground backgroundImage={randomBg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            É hora do Quiz!
          </Widget.Header>
          <Widget.Content>
            Seu nome é {name}?
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}

export default Quiz;

