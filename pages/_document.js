import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html language="en">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Arvo&family=Luckiest+Guy&display=swap" rel="stylesheet" />


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document