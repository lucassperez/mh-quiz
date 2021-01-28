import React, { useRef } from 'react';
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

    // Texto branco e fundo cinza escurinho
    color: ${({ theme }) => theme.colors.contrastText};
      background-color: #555;
    // O fundo cinza escuro é para as páginas novas durante
    // o desenvolvimento que ainda não têm imagem de fundo
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme = db.theme;

{/* eslint-disable-next-line react/jsx-props-no-spreading */}
export default function App({ Component, pageProps }) {
  const randomBg = useRef(`/bgs/${Math.ceil(Math.random() * 10)}.png`);

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

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} randomBg={randomBg} />
      </ThemeProvider>
    </>
  );
}

