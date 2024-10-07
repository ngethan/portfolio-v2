import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import type { IconType } from "react-icons";
import { DiGit, DiMongodb } from "react-icons/di";
import {
    FaAws,
    FaJava,
    FaPython,
    FaReact,
    FaPhp,
    FaDatabase,
    FaLinux,
} from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import {
    SiFlutter,
    SiJavascript,
    SiTailwindcss,
    SiTypescript,
    SiCplusplus,
    SiDart,
    SiC,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

import Title from "@/components/ui/title";

export interface SkillProps {
    name: string;
    icon: IconType;
    noName?: boolean;
}

const Skill = ({ name, icon, noName }: SkillProps) => {
    const Icon = icon as React.ElementType;

    const itemY = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div variants={itemY}>
            <div
                className={
                    !noName
                        ? "group mb-[20px] mr-[50px] h-[75px] transform-gpu justify-center rounded-lg bg-[#1b1c1b] px-[10px] shadow-lg shadow-gray-100/[.4] duration-300 hover:scale-[1.12] hover:shadow-primary-500/[.8]"
                        : "group z-0 mb-[20px] mr-[20px] h-[60px] transform-gpu justify-center rounded-lg bg-[#1b1c1b] px-[10px] shadow-lg shadow-gray-100/[.4] duration-300 hover:scale-[1.12] hover:shadow-primary-500/[.8]"
                }
            >
                <p
                    className={
                        noName
                            ? "invisible fixed bottom-[60px] left-[50%] z-[100] h-[20] w-fit -translate-x-1/2 rounded-lg bg-gray-700 px-[10px] text-gray-200 opacity-0 duration-300 group-hover:visible group-hover:opacity-100"
                            : "invisible fixed"
                    }
                >
                    {name}
                </p>
                <div
                    className={
                        !noName
                            ? "skill flex h-[75px] w-fit flex-row items-center font-mono text-gray-200"
                            : "skill flex h-[60px] w-fit flex-row items-center font-mono text-gray-200"
                    }
                >
                    <Icon
                        size={!noName ? 50 : 30}
                        className="duration-300 group-hover:text-primary-300"
                    />
                    {!noName ? (
                        <h1 className="float-right ml-[20px] text-[20px] duration-300 group-hover:text-primary-300">
                            {name}
                        </h1>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </motion.div>
    );
};

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
                    <Skill name="JavaScript" icon={SiJavascript} />
                    <Skill name="TypeScript" icon={SiTypescript} />
                    <Skill name="Python" icon={FaPython} />
                    <Skill name="Java" icon={FaJava} />
                    <Skill name="PHP" icon={FaPhp} />
                    <Skill name="C" icon={SiC} />
                    <Skill name="C++" icon={SiCplusplus} />
                    <Skill name="Dart" icon={SiDart} />
                    <Skill name="Swift" icon={GrSwift} />
                    <Skill name="SQL" icon={FaDatabase} />
                    <Skill name="React.js" icon={FaReact} />
                    <Skill name="Next.js" icon={TbBrandNextjs} />
                    <Skill name="React Native" icon={FaReact} />
                    <Skill name="Flutter" icon={SiFlutter} />
                    <Skill name="MongoDB" icon={DiMongodb} />
                    <Skill name="TailwindCSS" icon={SiTailwindcss} />
                    <Skill name="Git" icon={DiGit} />
                    <Skill name="AWS" icon={FaAws} />
                    <Skill name="Linux" icon={FaLinux} />
                </div>

                <div className="flex flex-row flex-wrap justify-center md:hidden">
                    <Skill name="JavaScript" icon={SiJavascript} noName />
                    <Skill name="TypeScript" icon={SiTypescript} noName />
                    <Skill name="Python" icon={FaPython} noName />
                    <Skill name="Java" icon={FaJava} noName />
                    <Skill name="PHP" icon={FaPhp} noName />
                    <Skill name="C" icon={SiC} noName />
                    <Skill name="C++" icon={SiCplusplus} noName />
                    <Skill name="Dart" icon={SiDart} noName />
                    <Skill name="Swift" icon={GrSwift} noName />
                    <Skill name="SQL" icon={FaDatabase} noName />
                    <Skill name="React.js" icon={FaReact} noName />
                    <Skill name="Next.js" icon={TbBrandNextjs} noName />
                    <Skill name="React Native" icon={FaReact} noName />
                    <Skill name="Flutter" icon={SiFlutter} noName />
                    <Skill name="MongoDB" icon={DiMongodb} noName />
                    <Skill name="TailwindCSS" icon={SiTailwindcss} noName />
                    <Skill name="Git" icon={DiGit} noName />
                    <Skill name="AWS" icon={FaAws} noName />
                    <Skill name="Linux" icon={FaLinux} noName />
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
