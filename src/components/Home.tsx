import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const text = [
    "Software Engineer",
    "Teacher",
    "Student",
    "Musician",
    "Volunteer",
];

const Home = () => {
    const animationEl = useRef(null as any);
    const [articleIndex, setArticleIndex] = useState(0);

    useEffect(() => {
        animationEl.current!.addEventListener("animationiteration", () => {
            setArticleIndex((currentIndex) => {
                if (currentIndex + 1 < text.length) {
                    return currentIndex + 1;
                }
                return 0;
            });
        });
    }, []);

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

    const handleViewWork = () => {
        document.getElementById("work")!.scrollIntoView();
    };
    return (
        <motion.div
            id="home"
            className="w-full h-screen max-w-[1075px] mx-auto px-4 flex flex-row items-center -z-[1]"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <div className="max-w-[473.9px] max-h-[473.89px] mr-[100px]">
                <motion.div
                    className="font-code flex text-gray-100 text-xl max-w-[181.4px]"
                    variants={item}
                >
                    <span className="whitespace-nowrap">
                        👋 Hi there, I&apos;m
                    </span>
                </motion.div>
                <motion.div
                    className="text-7xl sm:text-8xl flex text-gray-100 font-bold my-4 max-w-[425.2px]"
                    variants={item}
                >
                    <h1>
                        {["E", "t", "h", "a", "n", "\xa0", "N", "g"].map(
                            (letter, index) => {
                                return (
                                    <span
                                        className="duration-300 inline align-top hover:text-red-500"
                                        key={index}
                                    >
                                        {letter}
                                    </span>
                                );
                            }
                        )}
                    </h1>
                </motion.div>
                <motion.div
                    className="flex text-red-500 text-5xl sm:text-6xl font-bold"
                    variants={item}
                >
                    <h2
                        id="titles"
                        className="fade-in-out text-[52px]"
                        ref={animationEl}
                    >
                        {text[articleIndex]}
                    </h2>
                </motion.div>
                <motion.p
                    className="text-gray-200 my-2 max-w-[500px] text-lg"
                    variants={item}
                >
                    I&apos;m a software engineer who is passionate about
                    utilizing code to better the world.I&apos;m currently
                    studying computer science at Washington University in St.
                    Louis.
                </motion.p>

                <motion.div variants={item}>
                    <button
                        className="font-code text-red-400 border-red-400 text-lg border-2 rounded-lg px-5 py-3 my-2 flex items-center duration-300 hover:bg-red-300/[.3]"
                        onClick={handleViewWork}
                        type="button"
                        aria-label="View work"
                    >
                        View work
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;
