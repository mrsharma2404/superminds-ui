import { Fragment } from "react";

import type { AppProps } from "next/app";
import "@/styles/globals.css";

function Root({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

function MyApp({ Component, ...rest }: AppProps) {
  return <Root Component={Component} {...rest} />;
}

export default MyApp;
