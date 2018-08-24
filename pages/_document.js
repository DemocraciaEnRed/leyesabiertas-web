import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: OpenSans-Bold;
    src: url('/static/fonts/Open_Sans/OpenSans-Bold.ttf');
  }

  @font-face {
    font-family: OpenSans-BoldItalic;
    src: url('/static/fonts/Open_Sans/OpenSans-BoldItalic.ttf');
  }

  @font-face {
    font-family: OpenSans-ExtraBold;
    src: url('/static/fonts/Open_Sans/OpenSans-ExtraBold.ttf');
  }

  @font-face {
    font-family: OpenSans-BoldItalic;
    src: url('/static/fonts/Open_Sans/OpenSans-ExtraBoldItalic.ttf');
  }

  @font-face {
    font-family: OpenSans-Italic;
    src: url('/static/fonts/Open_Sans/OpenSans-Italic.ttf');
  }

  @font-face {
    font-family: OpenSans-Light;
    src: url('/static/fonts/Open_Sans/OpenSans-Light.ttf');
  }

  @font-face {
    font-family: OpenSans-LightItalic;
    src: url('/static/fonts/Open_Sans/OpenSans-LightItalic.ttf');
  }

  @font-face {
    font-family: 'OpenSans-Regular';
    src: url('/static/fonts/Open_Sans/OpenSans-Regular.ttf');
  }

  @font-face {
    font-family: OpenSans-SemiBold;
    src: url('/static/fonts/Open_Sans/OpenSans-SemiBold.ttf');
  }

  @font-face {
    font-family: OpenSans-SemiBoldItalic;
    src: url('/static/fonts/Open_Sans/OpenSans-SemiBoldItalic.ttf');
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
    --regular: 'OpenSans-Regular';
    --bold: 'OpenSans-Bold';
    --bold-italic: 'OpenSans-BoldItalic';
    --extra-bold: 'OpenSans-ExtraBold';
    --extra-bold-italic: 'OpenSans-ExtraBoldItalic';
    --italic: 'OpenSans-Italic';
    --light: 'OpenSans-Light';
    --light-italic: 'OpenSans-LightItalic';
    --semi-bold: 'OpenSans-SemiBold';
    --semi-bold-italic: 'OpenSans-SemiBoldItalic';

    font-size: 10px;
  }

  body {
    margin:0;
    padding:0;
    width: 100%;
    background-color: var(--white);
    color: var(--black);
    font-family: var(--regular), 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

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
          <title>Proyectos de Ley Abiertos</title>
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
