import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box };

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;

    // Texto branco
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mon Hun Quiz</title>
        <meta name="title" content="Mon Hun Quiz" />
        <meta name="description" content="Quiz desenvolvido para fins educativos durante a Imersão React da Alura" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mh-quiz.lucassperez.vercel.app/" />
        <meta property="og:title" content="Mon Hun Quiz" />
        <meta property="og:description" content="Quiz desenvolvido para fins educativos durante a Imersão React da Alura" />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mh-quiz.lucassperez.vercel.app/" />
        <meta property="twitter:title" content="Mon Hun Quiz" />
        <meta property="twitter:description" content="Quiz desenvolvido para fins educativos durante a Imersão React da Alura" />
        <meta property="twitter:image" content="" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
