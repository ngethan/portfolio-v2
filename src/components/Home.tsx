import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import React, { useEffect, useLayoutEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components/ui/button";

import Title from "./Title";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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

    useLayoutEffect(() => {
        if (typeof window !== "undefined") {
            // gsap.fromTo(
            //     nameRef,
            //     { scale: 1 },
            //     {
            //         scale: 2,
            //         duration: 1,
            //         scrollTrigger: {
            //             trigger: nameRef.current,
            //         },
            //     }
            // );
            // gsap.to("#name", {
            //     // this will animate ALL boxes
            //     x: 300,
            //     scrollTrigger: {
            //         trigger: "#name", // this will use the first box as the trigger
            //         scrub: true,
            //     },
            // });
        }
        return () => {};
    }, []);

    return (
        <section id="home">
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
                    ></motion.div>
                    <motion.div
                        className="text-7xl sm:text-8xl flex text-gray-100 font-bold my-4 max-w-[425.2px]"
                        variants={item}
                    >
                        <Title text="Ethan Ng" large />
                    </motion.div>

                    <motion.div
                        className="text-primary-500 flex text-5xl sm:text-6xl font-bold"
                        variants={item}
                    >
                        <h2 className="fade-in-out text-[52px]">Developer</h2>
                    </motion.div>
                    <motion.p
                        className="text-gray-300 my-2 max-w-[500px] text-lg mb-[30px]"
                        variants={item}
                    >
                        creating beautiful interfaces. currently studying CS and
                        business at{" "}
                        <Link
                            href="https://wustl.edu/"
                            className="hover-animation-dark hover:text-primary-400 text-gray-100  decoration-gray-300 duration-300"
                            target="_blank"
                        >
                            washu
                        </Link>
                        .
                    </motion.p>
                    <motion.div variants={item} className="flex w-full">
                        <Button
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
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;

// className="font-code text-primary-400 border-primary-400 hover:bg-primary-300/[.3] text-lg border-2 px-5 py-3 my-2 flex items-center duration-300"
