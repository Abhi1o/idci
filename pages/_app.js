// import IdciHead from "@/src/layout/IdciHead";
import Preloader from "@/src/layout/Preloader";
import "@/styles/globals.css";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      {/* <IdciHead /> */}
      <Head>
      <meta charSet="utf-8" />
      <meta name="description" content="" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Title */}
      <title>
        idci - IT solutions &amp; Bad Debt Recovery.
      </title>
      </Head>
      {loading && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
  );
}
