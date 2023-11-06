import "./globals.css";

import { GeistMono, GeistSans } from "geist/font";

import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import { Meta } from "@/components/Meta";
import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable}`}
        >
            <Meta />
            <body>
                <div className="min-h-screen w-full">
                    <Navbar />
                    <Cursor />
                    <main className="w-full">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
