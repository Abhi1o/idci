import IdciHead from "@/src/layout/IdciHead";
import Preloader from "@/src/layout/Preloader";
import "@/styles/globals.css";
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
      <IdciHead />
      {/* {loading && <Preloader />} */}
      <Component {...pageProps} />
    </Fragment>
  );
}
