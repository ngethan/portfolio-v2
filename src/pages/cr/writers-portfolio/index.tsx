import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import CRNavbar from "@/components/CRNavbar";

import creativeNonFiction from "../../../assets/creative-non-fiction.png";
import dolphin_fountain from "../../../assets/dolphin_fountain.png";
import ramen from "../../../assets/ramen.png";
import research from "../../../assets/research.png";
import satire from "../../../assets/satire.png";
import vincentVanGogh from "../../../assets/vincent-van-gogh.png";

const WritersPortfolio = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.05,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    };

    const itemY = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <div>
            <CRNavbar dPage={true} />
            <motion.div
                className="py-[100px] text-gray-200 w-full max-w-[950px] mx-auto flex flex-col px-4"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <Head>
                    <title>Ethan Ng - Writers Portfolio</title>
                </Head>
                <motion.div
                    className="justify-center text-7xl sm:text-8xl flex text-gray-100 font-bold"
                    variants={itemY}
                >
                    <h1>
                        {"W/r/i/t/e/r/'/s/\xa0/P/o/r/t/f/o/l/i/o"
                            .split("/")
                            .map((letter, index) => {
                                return (
                                    <span
                                        className="mb-[40px] duration-300 inline-block align-top hover:text-red-500 border-b-[2px] border-red-500"
                                        key={index}
                                    >
                                        {letter}
                                    </span>
                                );
                            })}
                    </h1>
                </motion.div>

                <motion.div className="text-[17px]" variants={itemY}>
                    <p></p>
                </motion.div>
                <motion.div
                    className="text-7xl sm:text-8xl h-[40px] flex text-gray-100 font-bold"
                    variants={itemY}
                >
                    <h1>
                        {"C/r/e/a/t/i/v/e/\xa0/W/r/i/t/i/n/g"
                            .split("/")
                            .map((letter, index) => {
                                return (
                                    <span
                                        className="text-[32px] mb-[40px] duration-300 inline-block align-top"
                                        key={index}
                                    >
                                        {letter}
                                    </span>
                                );
                            })}
                    </h1>
                </motion.div>

                <motion.div className="text-[17px] pb-[50px]" variants={itemY}>
                    <p>
                        The original works and reflections contained in the list
                        of sub-pages below are all pieces I wrote as part of the
                        Creative Writing class I took during my senior year at
                        Jericho High School. The course is a second year college
                        class offered in collaboration with Molloy College in
                        Rockville Centre, NY.
                    </p>
                </motion.div>

                <motion.div
                    className="w-full flex justify-center"
                    variants={itemY}
                >
                    <ul className="max-w-[1000px] hidden md:flex flex-row flex-wrap justify-center">
                        <Link
                            href="/cr/writers-portfolio/creative-non-fiction"
                            className="text-center pr-[50px] pb-[50px]"
                        >
                            <img
                                src={creativeNonFiction.src}
                                alt="creative non-fiction"
                                width="200"
                                className="h-[200px]"
                            />
                            <span className="underline text-lg text-gray-100 font-medium">
                                Creative Non-fiction
                            </span>
                        </Link>
                        <Link
                            href="/cr/writers-portfolio/food-writing"
                            className="text-center px-[50px] pb-[50px]"
                        >
                            <img
                                src={ramen.src}
                                alt="ramen"
                                width="200"
                                className="h-[200px]"
                            />
                            <span className="underline text-lg text-gray-100 font-medium">
                                Food Writing
                            </span>
                        </Link>
                        <Link
                            href="/cr/writers-portfolio/research-paper"
                            className="text-center pl-[50px] pb-[50px]"
                        >
                            <img
                                src={research.src}
                                alt="research"
                                width="200"
                                className="h-[200px]"
                            />
                            <span className="underline text-lg text-gray-100 font-medium">
                                Research Paper
                            </span>
                        </Link>
                        <Link
                            href="/cr/writers-portfolio/satire"
                            className="text-center pr-[50px]"
                        >
                            <img
                                src={satire.src}
                                alt="satire"
                                width="200"
                                className="h-[200px]"
                            />
                            <span className="underline text-lg text-gray-100 font-medium">
                                Satire
                            </span>
                        </Link>
                        <Link
                            href="/cr/writers-portfolio/art-fiction"
                            className="text-center px-[50px]"
                        >
                            <img
                                src={dolphin_fountain.src}
                                alt="dolphin fountain"
                                width="200"
                                className="h-[200px]"
                            />
                            <span className="underline text-lg text-gray-100 font-medium">
                                Art Fiction
                            </span>
                        </Link>
                        <Link
                            href="/cr/writers-portfolio/poetry"
                            className="text-center pl-[50px] pr-0"
                        >
                            <img
                                src={vincentVanGogh.src}
                                alt="vincent van gogh"
                                width="200"
                                className="h-[200px]"
                            />
                            <span className="underline text-lg text-gray-100 font-medium">
                                Poetry
                            </span>
                        </Link>
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default WritersPortfolio;
