import React, { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components/ui/button";

import Title from "../ui/title";

const Home = () => {
    const controls = useAnimation();
    const [time, setTime] = useState("");
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

    const dateFormatter = new Intl.DateTimeFormat([], {
        timeZone: "America/Chicago",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    useEffect(() => {
        const interval = setInterval(
            () => setTime(dateFormatter.format(new Date())),
            1000
        );
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section id="home">
            <motion.div
                id="home"
                className="-z-[1] mx-auto flex h-screen w-full flex-row items-center justify-center sm:px-4"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <div className="max-h-[473.89px] w-[90%] md:w-[80%] lg:w-[80%] xl:w-[65%]">
                    <motion.div
                        className="flex max-w-[181.4px] font-mono text-xl text-gray-100"
                        variants={item}
                    ></motion.div>
                    <motion.div
                        className="my-4 flex max-w-[425.2px] text-7xl font-bold text-gray-100 sm:text-8xl"
                        variants={item}
                    >
                        <Title text="Ethan Ng" large />
                    </motion.div>

                    <motion.div
                        className="flex font-bold text-primary-500 sm:text-6xl"
                        variants={item}
                    >
                        <h2 className="fade-in-out text-3xl md:text-[52px]">
                            Full-Stack Developer
                        </h2>
                    </motion.div>
                    <motion.p
                        className="my-2 mb-[30px] max-w-[500px] text-lg text-gray-300"
                        variants={item}
                    >
                        Creating beautiful interfaces. Currently studying CS and
                        business at{" "}
                        <Link
                            href="https://wustl.edu/"
                            className="hover-animation-dark text-gray-100 decoration-gray-300  duration-300 hover:text-primary-400"
                            target="_blank"
                        >
                            WashU
                        </Link>
                        . Co-founder at{" "}
                        <Link
                            href="https://connectalum.com/"
                            className="hover-animation-dark text-gray-100 decoration-gray-300  duration-300 hover:text-primary-400"
                            target="_blank"
                        >
                            Connect
                        </Link>
                        .
                    </motion.p>
                    <motion.div variants={item} className="flex w-full gap-6">
                        <Button
                            className="font-bold"
                            size="lg"
                            variant="default"
                            onClick={() =>
                                document
                                    .getElementById("work")!
                                    .scrollIntoView()
                            }
                            aria-label="Work"
                            arrowAnimation={true}
                            childtext="WORK"
                        >
                            WORK
                        </Button>
                        <Button
                            size="lg"
                            variant="default"
                            onClick={() =>
                                document
                                    .getElementById("contact")!
                                    .scrollIntoView()
                            }
                            aria-label="Contact"
                            arrowAnimation={true}
                            childtext="CONTACT"
                        >
                            CONTACT
                        </Button>
                    </motion.div>
                </div>
                <div className="absolute left-[50px] top-[80px]">
                    <motion.p
                        variants={item}
                        className="font-mono text-[14px] text-gray-300"
                    >
                        STL {time}
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
