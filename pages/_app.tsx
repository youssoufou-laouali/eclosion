import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import "../styles/globals.css";
import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
