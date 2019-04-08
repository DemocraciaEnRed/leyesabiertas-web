import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import getConfig from 'next/config'

const { publicRuntimeConfig: {
  API_URL,
  NODE_ENV,
  REALM,
  AUTH_SERVER_URL,
  SSL_REQUIRED,
  RESOURCE,
  PUBLIC_CLIENT,
  CONFIDENTIAL_PORT
} } = getConfig()

injectGlobal`
  @font-face {
    font-family: Roboto-Black;
    src: url('/static/fonts/Roboto/Roboto-Black.ttf');
  }

  @font-face {
    font-family: Roboto-BlackItalic;
    src: url('/static/fonts/Roboto/Roboto-BlackItalic.ttf');
  }

  @font-face {
    font-family: Roboto-Bold;
    src: url('/static/fonts/Roboto/Roboto-Bold.ttf');
  }

  @font-face {
    font-family: Roboto-BoldItalic;
    src: url('/static/fonts/Roboto/Roboto-BoldItalic.ttf');
  }

  @font-face {
    font-family: Roboto-Italic;
    src: url('/static/fonts/Roboto/Roboto-Italic.ttf');
  }

  @font-face {
    font-family: Roboto-Medium;
    src: url('/static/fonts/Roboto/Roboto-Medium.ttf');
  }

  @font-face {
    font-family: Roboto-MediumItalic;
    src: url('/static/fonts/Roboto/Roboto-MediumItalic.ttf');
  }

  @font-face {
    font-family: Roboto-Regular;
    src: url('/static/fonts/Roboto/Roboto-Regular.ttf');
  }

  :root {
    /* Colors */
    --white: #FFFFFF;
    --black: #000000;
    --gray: #B8B8B8;
    --primary-color: #5182A0;
    --secondary-color: #A5CEE7;
    --highlight: #ED8862;
    --warning: #E86062;

    /* Fonts */
    --regular: 'Roboto-Regular';
    --black: 'Roboto-Black';
    --black-italic: 'Roboto-BlackItalic';
    --bold: 'Roboto-Bold';
    --bold-italic: 'Roboto-BoldItalic';
    --italic: 'Roboto-Italic';
    --medium: 'Roboto-Medium';
    --medium-italic: 'Roboto-MediumItalic';

    /*background sizes */
    --lined: calc(width/22);

    font-size: 10px;
    @media (max-width: 760px) {
    font-size: 7px;
  }
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--regular), 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: var(--black);
  }
  
  body {
    margin:0;
    padding:0;
    width: 100%;
    background-color: var(--white);
    color: var(--black);
    font-family: var(--regular), 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags } // return styles collected
  }

  render () {
    return (
      <html>
        <Head>
          <title>Portal de Leyes Abiertas - H. Cámara de Diputados de la Nación</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          {this.props.styleTags}
          {
            NODE_ENV === 'production' &&
            <script async src='https://www.googletagmanager.com/gtag/js?id=UA-109170776-3' />
          }
          {
            NODE_ENV === 'production' &&
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-109170776-3');` }} />
          }
          <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon.ico' /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
