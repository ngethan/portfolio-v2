import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Title from "@/components/Title";

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
                className="py-[100px] text-gray-200 w-full max-w-[950px] mx-auto flex flex-col px-4"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <motion.div
                    className="text-7xl sm:text-8xl flex text-gray-100 font-bold"
                    variants={itemY}
                >
                    <Title text="about" />
                </motion.div>

                <motion.div className="text-[20px] ml-2" variants={itemY}>
                    <p>
                        hey im ethan! born and raised in new york. currently
                        studying CS and business at washu in stl. apart from
                        coding, i like photography, piano (especially jazz),
                        tennis, badminton, movies, and watches.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
