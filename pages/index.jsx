import React from 'react';
import styled from 'styled-components'
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import { Widget } from '../src/components/Widget';
import { QuizContainer } from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Form from '../src/components/Form';

export default function Home () {
  const randomBg = `/bgs/${Math.ceil(Math.random() * 10)}.png`;

  return (
    <QuizBackground backgroundImage={randomBg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Mon Hun</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>Quiz dos Caçadores</h1>
            <p>Meow!</p>
            <Form />
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quem aqui gosta de Monster Hunter?</h1>
            <p>Eu gosto!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lucassperez/mh-quiz" />
    </QuizBackground>
  );
}
