import React, { ReactNode } from "react";
import Head from "next/head";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="w-screen text-sm text-gray-500 bg-gray-50">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header ></header>
    {children}
    <Footer />
  </div>
);

export default Layout;
