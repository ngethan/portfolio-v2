import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { Button } from "./ui/button";

const About = () => {
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
        <section id="about">
            <motion.div
                className="flex w-full justify-center py-[100px] text-gray-200"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <div className="w-[85%] text-[30px] md:w-[70%] xl:w-[55%]">
                    <motion.p variants={itemY} className="mb-12">
                        I&apos;m a developer focused on creating exceptional
                        experiences. Currently studying{" "}
                        <Link
                            href="https://admissions.wustl.edu/academics/special-programs/joint-degree-in-business-and-computer-science/"
                            className="hover-animation-dark text-primary-400"
                            target="_blank"
                        >
                            CS & business
                        </Link>{" "}
                        at{" "}
                        <Link
                            href="https://wustl.edu/"
                            className="hover-animation-dark text-primary-400"
                            target="_blank"
                        >
                            Washington University in St. Louis
                        </Link>
                        . Working on building anything and everything.
                        <br />
                        <br />
                        Born and raised in New York. I also like photography,
                        piano (jazz especially), tennis, film, and watches.
                    </motion.p>
                    <motion.div variants={itemY}>
                        <Button
                            arrowAnimation
                            childtext="Reach out!"
                            size="lg"
                            onClick={() =>
                                document
                                    .getElementById("contact")!
                                    .scrollIntoView()
                            }
                        >
                            Reach out!
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
