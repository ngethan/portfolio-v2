import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import CRNavbar from "@/components/CRNavbar";

import ball from "../../assets/ball.jpg";
import ballDive from "../../assets/ball-dive.jpg";
import orient from "../../assets/orient.jpg";
import seiko from "../../assets/seiko.jpg";

const Watches = () => {
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
                <title>Ethan Ng - Watches</title>
            </Head>
            <CRNavbar dPage={true} />
            <motion.div
                id="watches"
                className="px-[300px] w-full flex -z-[1] flex-col"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <motion.div
                    className="justify-center text-7xl sm:text-8xl flex text-gray-100 mt-44 mb-10 font-bold"
                    variants={item}
                >
                    <h1>
                        {"Watches".split("").map((letter, index) => {
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
                    className="text-center text-gray-200 w-full text-lg"
                    variants={item}
                >
                    I commonly wear watches — a style I adapted from my father.
                    I’m enamored by their intricacy, variety, subtlety, and how
                    they constantly remind me of time’s invaluable nature. These
                    small yet meaningful accessories serve as a quiet way of
                    sharing my personality with anyone I come across.
                </motion.p>

                <ul className="pt-[50px] flex flex-row flex-wrap justify-center">
                    <motion.li
                        className="w-fit pb-[20px] text-center"
                        variants={item}
                    >
                        <motion.p className="inline text-[16px] text-gray-100 font-bold underline">
                            Seiko SNE479
                        </motion.p>
                        <Image
                            src={seiko.src}
                            alt="Seiko SNE479"
                            width="256"
                            height="256"
                        />
                    </motion.li>
                    <motion.li
                        className="w-fit pb-[20px] text-center"
                        variants={item}
                    >
                        <motion.p className="inline text-[16px] text-gray-100 font-bold underline">
                            Orient Bambino Open Heart
                        </motion.p>
                        <Image
                            src={orient.src}
                            alt="Orient Bambino Open Heart"
                            width="256"
                            height="256"
                        />
                    </motion.li>
                    <motion.li
                        className="w-fit pb-[20px] text-center"
                        variants={item}
                    >
                        <motion.p className="inline text-[16px] text-gray-100 font-bold underline">
                            Ball Engineer III Pioneer
                        </motion.p>
                        <Image
                            src={ball.src}
                            alt="Ball Engineer III Pioneer"
                            width="256"
                            height="256"
                        />
                    </motion.li>
                    <motion.li
                        className="w-fit pb-[20px] text-center"
                        variants={item}
                    >
                        <motion.p className="inline text-[16px] text-gray-100 font-bold underline">
                            Ball Roadmaster Pilot GMT
                        </motion.p>
                        <Image
                            src={ballDive.src}
                            alt="Ball Roadmaster Pilot GMT"
                            width="256"
                            height="256"
                        />
                    </motion.li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Watches;
