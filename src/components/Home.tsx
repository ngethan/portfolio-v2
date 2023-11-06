// import { motion, useAnimation } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import React, { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";

// const Home = () => {
//     const controls = useAnimation();
//     const [ref, inView] = useInView({ threshold: 0.3 });
//     const [time, setTime] = useState("");
//     useEffect(() => {
//         if (inView) {
//             controls.start("visible");
//         }
//     }, [controls, inView]);

//     gsap.registerPlugin(ScrollTrigger);

//     const list = {
//         visible: {
//             opacity: 1,
//             transition: {
//                 delay: 1.1,
//                 when: "beforeChildren",
//                 staggerChildren: 0.05,
//             },
//         },
//         hidden: {
//             opacity: 0,
//             transition: {
//                 when: "afterChildren",
//             },
//         },
//     };

//     const item = {
//         hidden: { y: -10, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//         },
//     };

//     const dateFormatter = new Intl.DateTimeFormat([], {
//         timeZone: "America/Chicago",
//         hour: "numeric",
//         minute: "numeric",
//         second: "numeric",
//       });

//       useEffect(() => {
//         const interval = setInterval(() => setTime(dateFormatter.format(new Date())), 1000);
//         return () => {
//           clearInterval(interval);
//         };
//       }, []);

//     return (
//         <>
//             <motion.div
//                 id="home"
//                 className="w-full h-screen justify-center flex items-center -z-[1]"
//                 initial="hidden"
//                 animate={controls}
//                 variants={list}
//                 ref={ref}
//             >
//                 <div>
//                     <motion.div
//                         id="name"
//                         className="2xl:text-[300px] xl:text-[250px] lg:text-[200px] md:text-[150px] sm:text-[100px] text-gray-100 font-semibold text-[60px]"
//                         variants={item}
//                     >
//                         {"ETHAN NG".split("").map((c, index) => {
//                             return (
//                                 <span
//                                     className="hover:text-primary-500 duration-300"
//                                     key={index}
//                                 >
//                                     {c}
//                                 </span>
//                             );
//                         })}
//                     </motion.div>
//                 </div>
//                 <div className="top-[80px] left-[50px] absolute">
//                     <motion.p variants={item} className="text-gray-300 text-[14px] font-mono">
//                         STL {time}
//                     </motion.p>
//                 </div>
//             </motion.div>
//         </>
//     );
// };

// export default Home;

import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components/ui/button";

import Title from "./Title";

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
                        className="flex text-5xl font-bold text-primary-500 sm:text-6xl"
                        variants={item}
                    >
                        <h2 className="fade-in-out text-[52px]">Developer</h2>
                    </motion.div>
                    <motion.p
                        className="my-2 mb-[30px] max-w-[500px] text-lg text-gray-300"
                        variants={item}
                    >
                        creating beautiful interfaces. currently studying CS and
                        business at{" "}
                        <Link
                            href="https://wustl.edu/"
                            className="hover-animation-dark text-gray-100 decoration-gray-300  duration-300 hover:text-primary-400"
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
