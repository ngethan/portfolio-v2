import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import CRNavbar from "@/components/CRNavbar";

const CreativeNonFiction = () => {
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
                delay: 1.1,
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

    const item = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <div>
            <Head>
                <title>Ethan Ng - Creative Non-Fiction</title>
            </Head>
            <CRNavbar dPage={true} />
            <motion.div
                className="w-full flex -z-[1] flex-col"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <motion.div
                    className="justify-center text-7xl sm:text-8xl mt-28 flex text-gray-100 font-bold"
                    variants={item}
                >
                    <h1>
                        {"C/r/e/a/t/i/v/e/\xa0/N/o/n/-/F/i/c/t/i/o/n"
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

                <ul className="pt-[50px] flex flex-row flex-wrap justify-center">
                    <motion.li
                        className="w-fit pb-[20px] text-center"
                        variants={item}
                    >
                        <motion.p className="inline text-[24px] text-gray-100 font-bold underline">
                            <Link
                                href="https://ethanng.dev/personal-statement.pdf"
                                target="_blank"
                            >
                                Personal Statement
                            </Link>
                        </motion.p>
                    </motion.li>
                    <motion.li
                        className="w-fit pb-[20px] text-center"
                        variants={item}
                    >
                        <motion.p className="inline text-[24px] text-gray-100 font-bold underline">
                            <Link
                                href="https://ethanng.dev/essay-refl.pdf"
                                target="_blank"
                            >
                                Essay Reflection
                            </Link>
                        </motion.p>
                    </motion.li>
                    <motion.li
                        className="w-fit pb-[20px] text-center"
                        variants={item}
                    >
                        <motion.p className="inline text-[24px] text-gray-100 font-bold underline">
                            <Link
                                href="https://ethanng.dev/bio-poem.pdf"
                                target="_blank"
                            >
                                Bio Poem
                            </Link>
                        </motion.p>
                    </motion.li>
                    <motion.li
                        className="w-fit pb-[20px] text-center"
                        variants={item}
                    >
                        <motion.p className="inline text-[24px] text-gray-100 font-bold underline">
                            <Link
                                href="https://docs.google.com/presentation/d/1LJOAWNWYfz1IAlMWWdekEsNEIPptQvC9XEy35TZzsAQ/edit?usp=sharing"
                                target="_blank"
                            >
                                Encyclopedia of Ethan&apos;s Existence
                            </Link>
                        </motion.p>
                    </motion.li>
                </ul>
            </motion.div>
        </div>
    );
};

export default CreativeNonFiction;
