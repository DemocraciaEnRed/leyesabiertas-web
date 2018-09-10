import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: Inter-UI-Black;
    src: url('/static/fonts/Inter_UI/Inter-UI-Black.woff');
  }

  @font-face {
    font-family: Inter-UI-BlackItalic;
    src: url('/static/fonts/Inter_UI/Inter-UI-BlackItalic.woff');
  }

  @font-face {
    font-family: Inter-UI-Bold;
    src: url('/static/fonts/Inter_UI/Inter-UI-Bold.woff');
  }

  @font-face {
    font-family: Inter-UI-BoldItalic;
    src: url('/static/fonts/Inter_UI/Inter-UI-BoldItalic.woff');
  }

  @font-face {
    font-family: Inter-UI-Italic;
    src: url('/static/fonts/Inter_UI/Inter-UI-Italic.woff');
  }

  @font-face {
    font-family: Inter-UI-Medium;
    src: url('/static/fonts/Inter_UI/Inter-UI-Medium.woff');
  }

  @font-face {
    font-family: Inter-UI-MediumItalic;
    src: url('/static/fonts/Inter_UI/Inter-UI-MediumItalic.woff');
  }

  @font-face {
    font-family: Inter-UI-Regular;
    src: url('/static/fonts/Inter_UI/Inter-UI-Regular.woff');
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
    --regular: 'Inter-UI-Regular';
    --black: 'Inter-UI-Black';
    --black-italic: 'Inter-UI-BlackItalic';
    --bold: 'Inter-UI-Bold';
    --bold-italic: 'Inter-UI-BoldItalic';
    --italic: 'Inter-UI-Italic';
    --medium: 'Inter-UI-Medium';
    --medium-italic: 'Inter-UI-MediumItalic';

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
