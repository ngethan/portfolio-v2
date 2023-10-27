import "../styles/global.css";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Archivo, Roboto_Mono } from "next/font/google";

import Cursor from "@/components/Cursor";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
});

const roboto = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Component
                {...pageProps}
                className={`${archivo.variable} ${roboto.variable}`}
            />
            <Cursor />
            <Analytics />
        </>
    );
};

export default MyApp;
