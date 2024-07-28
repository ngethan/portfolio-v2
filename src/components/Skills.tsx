import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { DiGit, DiHeroku, DiHtml5, DiMongodb, DiSass } from "react-icons/di";
import {
    FaAws,
    FaCss3,
    FaJava,
    FaNodeJs,
    FaPython,
    FaReact,
    FaSquarespace,
    FaWordpressSimple,
} from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import {
    SiFlutter,
    SiJavascript,
    SiNetlify,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiFirebase,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

import Title from "@/components/Title";

import Skill from "./Skill";

const Skills = () => {
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
        <section id="skills">
            <motion.div
                className="mx-auto flex w-full max-w-[950px] flex-row flex-wrap px-4 py-[100px]"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <motion.div
                    className="flex text-7xl font-bold text-gray-100 sm:text-8xl md:pl-4 lg:pl-2"
                    variants={itemY}
                >
                    <Title text="Skills" />
                </motion.div>

                <div className="hidden flex-row flex-wrap justify-center md:flex">
                    <Skill name="HTML" icon={DiHtml5} />
                    <Skill name="CSS" icon={FaCss3} />
                    <Skill name="Sass" icon={DiSass} />
                    <Skill name="TailwindCSS" icon={SiTailwindcss} />
                    <Skill name="JavaScript" icon={SiJavascript} />
                    <Skill name="TypeScript" icon={SiTypescript} />
                    <Skill name="Node.js" icon={FaNodeJs} />
                    <Skill name="Python" icon={FaPython} />
                    <Skill name="Java" icon={FaJava} />
                    <Skill name="React.js" icon={FaReact} />
                    <Skill name="Next.js" icon={TbBrandNextjs} />
                    <Skill name="Flutter" icon={SiFlutter} />
                    <Skill name="React Native" icon={FaReact} />
                    <Skill name="Swift" icon={GrSwift} />
                    <Skill name="Git" icon={DiGit} />
                    <Skill name="Firebase" icon={SiFirebase} />
                    <Skill name="Supabase" icon={SiSupabase} />
                    <Skill name="MongoDB" icon={DiMongodb} />
                    <Skill name="Squarespace" icon={FaSquarespace} />
                    <Skill name="Wordpress" icon={FaWordpressSimple} />
                    <Skill name="Vercel" icon={TbBrandVercel} />
                    <Skill name="Netlify" icon={SiNetlify} />
                    <Skill name="Heroku" icon={DiHeroku} />
                    <Skill name="AWS" icon={FaAws} />
                </div>

                <div className="flex flex-row flex-wrap justify-center md:hidden">
                    <Skill name="HTML" icon={DiHtml5} noName />
                    <Skill name="CSS" icon={FaCss3} noName />
                    <Skill name="Sass" icon={DiSass} noName />
                    <Skill name="TailwindCSS" icon={SiTailwindcss} noName />
                    <Skill name="JavaScript" icon={SiJavascript} noName />
                    <Skill name="TypeScript" icon={SiTypescript} noName />
                    <Skill name="Node.js" icon={FaNodeJs} noName />
                    <Skill name="Python" icon={FaPython} noName />
                    <Skill name="Java" icon={FaJava} noName />
                    <Skill name="React.js" icon={FaReact} noName />
                    <Skill name="Next.js" icon={TbBrandNextjs} noName />
                    <Skill name="Flutter" icon={SiFlutter} noName />
                    <Skill name="React Native" icon={FaReact} noName />
                    <Skill name="Swift" icon={GrSwift} noName />
                    <Skill name="Git" icon={DiGit} noName />
                    <Skill name="Firebase" icon={SiFirebase} noName />
                    <Skill name="Supabase" icon={SiSupabase} noName />
                    <Skill name="MongoDB" icon={DiMongodb} noName />
                    <Skill name="Squarespace" icon={FaSquarespace} noName />
                    <Skill name="Wordpress" icon={FaWordpressSimple} noName />
                    <Skill name="Vercel" icon={TbBrandVercel} noName />
                    <Skill name="Netlify" icon={SiNetlify} noName />
                    <Skill name="Heroku" icon={DiHeroku} noName />
                    <Skill name="AWS" icon={FaAws} noName />
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
