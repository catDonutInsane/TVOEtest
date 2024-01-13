import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="stylesheet" href="../../fonts/font.css"/>
      </Head>


      <body style={{background: "#09090C"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
