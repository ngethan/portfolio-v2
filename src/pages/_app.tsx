import "../styles/global.css";

import type { AppProps } from "next/app";

import Cursor from "@/components/Cursor";
import { GoogleTagManager } from "@/lib/GoogleTagManager";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Component {...pageProps} />
            <Cursor />
            <GoogleTagManager
                containerId={
                    process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string
                }
            />
        </>
    );
};

export default MyApp;
