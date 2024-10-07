import "../styles/globals.css";

import { GeistMono, GeistSans } from "geist/font";

import { Meta } from "@/components/layout/SEO";

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
                <div className="min-h-screen w-full overflow-hidden">
                    <main className="w-full">{children}</main>
                </div>
            </body>
        </html>
    );
}
