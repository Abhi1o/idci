import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      {/* Required meta tags */}
      {/* <meta charSet="utf-8" />
      <meta name="description" content="" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>
        idci - IT solutions &amp; Bad Debt Recovery.
      </title> */}
      {/* Favicon Icon */}
      <link
        rel="shortcut icon"
      />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      {/* Flaticon */}
      <link rel="stylesheet" href="assets/css/flaticon.min.css" />
      {/* Font Awesome */}
      <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
      {/* Bootstrap */}
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      {/* Magnific Popup */}
      <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
      {/* Nice Select */}
      <link rel="stylesheet" href="assets/css/nice-select.min.css" />
      {/* Animate */}
      <link rel="stylesheet" href="assets/css/animate.min.css" />
      {/* Slick */}
      <link rel="stylesheet" href="assets/css/slick.min.css" />
      {/* Main Style */}
      <link rel="stylesheet" href="assets/css/style.css" />

      <script
        src="https://www.chatbase.co/embed.min.js"
        chatbotid="lxH_5Q3FKaq8SyTlaq2eG"
        domain="www.chatbase.co"
        defer>
      </script>
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
