import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useLayoutEffect } from "react";
import { useInView } from "react-intersection-observer";

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
                className="w-full h-screen justify-center flex items-center -z-[1]"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <div className="max-h-[473.89px]">
                    <motion.div
                        id="name"
                        className="2xl:text-[300px] xl:text-[250px] lg:text-[200px] md:text-[150px] sm:text-[100px] overflow-x-hidden text-gray-100 font-serif"
                        variants={item}
                    >
                        {"ETHAN NG".split("").map((c, index) => {
                            return (
                                <span
                                    className="hover:text-primary-500 duration-300"
                                    key={index}
                                >
                                    {c}
                                </span>
                            );
                        })}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
