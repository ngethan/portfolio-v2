import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import CRNavbar from "@/components/CRNavbar";

const Piano = () => {
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
                <title>Ethan Ng - Piano</title>
            </Head>
            <CRNavbar dPage={true} />
            <motion.div
                id="piano"
                className="ml-72 w-full max-w-[1075px] px-4 flex -z-[1] flex-col"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <div className="max-h-[473.89px] mr-[100px]">
                    <motion.div
                        className="text-7xl sm:text-8xl flex text-gray-100 mt-44 mb-10 font-bold max-w-[425.2px]"
                        variants={item}
                    >
                        <h1>
                            {"Piano".split("").map((letter, index) => {
                                return (
                                    <span
                                        className="duration-300 inline align-top hover:text-red-500 border-b-[2px] border-red-500"
                                        key={index}
                                    >
                                        {letter}
                                    </span>
                                );
                            })}
                        </h1>
                    </motion.div>
                    <motion.p
                        className="text-gray-200 w-full text-lg"
                        variants={item}
                    >
                        I&apos;ve been playing piano since the age of 5 while
                        taking breaks along the way. Throughout my piano playing
                        career, I&apos;ve progressed from NYSSMA level 1 to 6 in
                        addition to taking ABRSM&apos;s Royal exams. I play in
                        concerts and have even had the honor of playing in
                        Carnegie Hall. Until recently, I exclusively played
                        classical. However, I&apos;ve started to utilize the
                        piano&apos;s versatility to the fullest extend through
                        experimenting with genres like jazz and pop. Two of my
                        favorite songs are Billy Joel&apos;s New York State of
                        Mind and the Beatles&apos; Long and Winding Road. Of
                        course, I haven&apos;t given up on classical and
                        I&apos;m currently learning Clair de Lune by Debussy.
                        Despite how long I&apos;ve been playing piano, I know my
                        journey is no where near the end. I look forward to many
                        more years of learning the piano.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};

export default Piano;
