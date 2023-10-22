import "../styles/global.css";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

import Cursor from "@/components/Cursor";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Cursor />
      <Analytics />
    </>
  );
};

export default MyApp;
