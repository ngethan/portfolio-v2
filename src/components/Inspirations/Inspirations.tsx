import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Delayed from "@/components/Delayed";

import InspirationInfo from "./InspirationInfo";

const Inspirations = () => {
    const [inspiration, setInspiration] = useState("Billy Joel");

    const [inViewFinal, setInViewFinal] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });
    useEffect(() => {
        if (inView) {
            setInViewFinal(true);
            controls.start("visible");
        }
    }, [controls, inView]);

    const list = {
        visible: {
            opacity: 1,
            transition: {
                delay: 0.09,
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

    const itemX = {
        hidden: { x: -10, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
        },
    };

    const itemY = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    function sleep(ms: number) {
        // eslint-disable-next-line no-promise-executor-return
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setInspiration((e.target as any).dataset.inspiration);

        if (window.innerWidth < 768) {
            const prevActive =
                document.getElementsByClassName("active-work-md")[0];
            prevActive?.classList.add("inactive-work-md");
            prevActive?.classList.remove("active-work-md");
            (e.target as any).classList.add("active-work-md");
            (e.target as any).classList.remove("inactive-work-md");
        } else {
            const prevActive =
                document.getElementsByClassName("active-work")[0];
            prevActive?.classList.add("inactive-work");
            prevActive?.classList.remove("active-work");
            (e.target as any).classList.add("active-work");
            (e.target as any).classList.remove("inactive-work");
            if ((e.target as any).dataset.inspiration === "tcs")
                sleep(100).then(() => {
                    document.getElementById(
                        "selected-indicator"
                    )!.style.marginTop = `${-47 * 4}px`;
                });
            if ((e.target as any).dataset.inspiration === "Billy Joel")
                sleep(100).then(() => {
                    document.getElementById(
                        "selected-indicator"
                    )!.style.marginTop = `${-47 * 3}px`;
                });
            else if ((e.target as any).dataset.inspiration === "Steve Jobs")
                sleep(100).then(() => {
                    document.getElementById(
                        "selected-indicator"
                    )!.style.marginTop = `${-47 * 2}px`;
                });
            else if ((e.target as any).dataset.inspiration === "Onions")
                sleep(100).then(() => {
                    document.getElementById(
                        "selected-indicator"
                    )!.style.marginTop = `${-47 * 1}px`;
                });
        }
    };

    return (
        <motion.div
            id="inspirations"
            className="py-[100px] text-gray-200 w-full max-w-[850px] mx-auto px-4 flex flex-col"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.div
                className="text-7xl sm:text-8xl flex text-gray-100 font-bold"
                variants={itemY}
            >
                <h1>
                    {"Inspirations".split("").map((letter, index) => {
                        return (
                            <span
                                className="text-4xl mb-[40px] duration-300 inline-block align-top hover:text-red-500 border-b-[2px] border-red-500"
                                key={index}
                            >
                                {letter}
                            </span>
                        );
                    })}
                </h1>
            </motion.div>

            <div className="hidden md:flex">
                <motion.ul
                    className="justify-left items-left font-code flex flex-col text-[20px] font-medium float-left"
                    variants={itemX}
                >
                    <li
                        className="active-work inline-flex items-center text-left h-[47px] py-4 whitespace-nowrap duration-300 border-l-[2px] border-gray-400"
                        data-inspiration="Billy Joel"
                        onClick={handleClick}
                    >
                        Billy Joel
                    </li>
                    <li
                        className="inactive-work inline-flex items-center text-left h-[47px] py-4 whitespace-nowrap duration-300 border-l-[2px] border-gray-400"
                        data-inspiration="Steve Jobs"
                        onClick={handleClick}
                    >
                        Steve Jobs
                    </li>
                    <li
                        className="inactive-work inline-flex items-center text-left h-[47px] py-4 whitespace-nowrap duration-300 border-l-[2px] border-gray-400"
                        data-inspiration="Onions"
                        onClick={handleClick}
                    >
                        Onions
                    </li>
                    <div
                        id="selected-indicator"
                        className="relative top-0 mt-[-141px] w-[2px] h-[47px] border-l-[2px] border-red-500 duration-300"
                    ></div>
                </motion.ul>

                {inViewFinal ? (
                    <Delayed delay={500}>
                        <InspirationInfo inspiration={inspiration} />
                    </Delayed>
                ) : null}
            </div>

            <div className="flex flex-col md:hidden">
                <motion.ul
                    className="font-code ul-mobile flex flex-row h-[47px] text-[18px] mb-[5px] overflow-x-scroll overflow-y-hidden"
                    variants={itemY}
                    aria-label="Inspirations"
                >
                    <li
                        id="tcs-md"
                        className="active-work-md flex items-center justify-center whitespace-nowrap duration-300 border-b-[2px] py-4"
                        data-inspiration="tcs"
                        onClick={handleClick}
                        aria-label="theCoderSchool"
                    >
                        theCoderSchool
                    </li>
                    <li
                        id="mpr-md"
                        className="inactive-work-md flex items-center justify-center whitespace-nowrap duration-300 border-b-[2px] py-4"
                        data-inspiration="mpr"
                        onClick={handleClick}
                        aria-label="Muddy Paws Rescue"
                    >
                        Muddy Paws Rescue
                    </li>
                    <li
                        id="nydeo-md"
                        className="inactive-work-md flex items-center justify-center whitespace-nowrap duration-300 border-b-[2px] py-4"
                        data-inspiration="nydeo"
                        onClick={handleClick}
                        aria-label="NYDEO"
                    >
                        NYDEO
                    </li>
                    <li
                        id="aetheria-md"
                        className="inactive-work-md flex items-center justify-center whitespace-nowrap duration-300 border-b-[2px] py-4"
                        data-inspiration="aetheria"
                        onClick={handleClick}
                        aria-label="AETHERIA"
                    >
                        Aetheria
                    </li>
                </motion.ul>
                {inViewFinal ? (
                    <Delayed delay={500}>
                        <InspirationInfo inspiration={inspiration} md={true} />
                    </Delayed>
                ) : null}
            </div>
        </motion.div>
    );
};

export default Inspirations;
