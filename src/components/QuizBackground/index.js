import styled from 'styled-components';

const randomBg = `/bgs/${Math.ceil(Math.random() * 10)}.png`;
const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${randomBg});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${randomBg});
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
