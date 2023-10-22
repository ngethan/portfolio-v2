import { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Archivo"],
                serif: ["Magnat"],
            },
            colors: {
                primary: {
                    50: "#fff1f2",
                    100: "#ffe4e6",
                    200: "#fecdd3",
                    300: "#fda4af",
                    400: "#fb7185",
                    500: "#f43f5e",
                    600: "#e11d48",
                    700: "#be123c",
                    800: "#9f1239",
                    900: "#881337",
                    950: "#4c0519",
                },
                gray: {
                    100: "#FFFFFF",
                    200: "#EDEDED",
                    300: "#A0A0A0",
                    400: "#7E7E7E",
                    500: "#505050",
                    600: "#343434",
                    700: "#282828",
                    800: "#1C1C1C",
                    900: "#161616",
                },
            },
            keyframes: {
                flicker: {
                    "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
                        opacity: "0.99",
                        filter: "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
                    },
                    "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
                        opacity: "0.4",
                        filter: "none",
                    },
                },
                shimmer: {
                    "0%": {
                        backgroundPosition: "-700px 0",
                    },
                    "100%": {
                        backgroundPosition: "700px 0",
                    },
                },
            },
            animation: {
                flicker: "flicker 3s linear infinite",
                shimmer: "shimmer 1.3s linear infinite",
            },
        },
    },
    plugins: [],
} satisfies Config;
