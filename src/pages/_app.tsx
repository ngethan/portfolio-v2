import "../styles/global.css";

import type { AppProps } from "next/app";

import Cursor from "@/components/Cursor";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Component {...pageProps} />
            <Cursor />
        </>
    );
};

export default MyApp;
