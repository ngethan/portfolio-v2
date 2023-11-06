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

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
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
                className="w-full h-screen mx-auto sm:px-4 flex flex-row justify-center items-center -z-[1]"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <div className="xl:w-[65%] lg:w-[80%] md:w-[80%] w-[90%] max-h-[473.89px]">
                    <motion.div
                        className="font-mono flex text-gray-100 text-xl max-w-[181.4px]"
                        variants={item}
                    >
                    </motion.div>
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