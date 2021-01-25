import styled from 'styled-components'
// import db from '../db.json';
import { Widget } from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home () {
  // const randomBg = `/bgs/${Math.ceil(Math.random() * 10)}.png`;
  const randomBg = `/bgs/2.png`;

  return (
    <QuizBackground backgroundImage={randomBg} >
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Mon Hun</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>Quiz dos Caçadores</h1>
            <p>Meow!</p>
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
