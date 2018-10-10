import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

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
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags } // return styles collected
  }

  render () {
    return (
      <html>
        <Head>
          <title>Co-Legis</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
