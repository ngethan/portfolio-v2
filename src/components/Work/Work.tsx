import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Title from "@/components/Title";

import WorkCard from "./WorkCard";

const workData = [
    {
        abbreviation: "rad",
        name: "RadiantAI",
        title: "Software Engineering Intern",
        url: "https://radiantai.health/",
        duration: "September 2023 - Present",
        description: [
            "Collaborated directly with founders, formerly of Lyft and Amazon, to redesign UI/UX in efforts to target $2 million seed round",
            "Designing user-centric interfaces in Figma for proprietary medical AI query engine; built designs with Next.js & TailwindCSS; honed through iterative sprints following stakeholder & user feedback",
        ],
        tags: ["Next.js", "TailwindCSS", "Figma", "shadcn", "Typescript"],
    },
    {
        abbreviation: "mpr",
        name: "Muddy Paws Rescue",
        title: "Website Developer",
        url: "https://muddypawsrescue.org/",
        duration: "October 2021 - June 2023",
        description: [
            "Worked closely with marketing & website directors to conceptualize website layout and functionality; constantly improved design through user feedback",
            "Utilized languages and technologies like HTML, CSS, JavaScript, Salesforce, and Squarespace",
        ],
        tags: ["HTML", "CSS", "Javascript", "Salesforce"],
    },
    {
        abbreviation: "tcs",
        name: "theCoderSchool",
        title: "Teacher",
        url: "https://thecoderschool.com/",
        duration: "September 2021 - March 2023",
        description: [
            "Taught beginner and intermediate programmers; fostered a productive and respectful learning environment; utilized feedback loops to perfect teaching strategies",
            "Taught Python, Java, JavaScript, HTML, and CSS",
            "Delegated teaching process through training and mentoring interns",
        ],
        tags: ["Python", "Java", "Web Development", "Teaching"],
    },
    {
        abbreviation: "nydeo",
        name: "NYDEO",
        title: "Fullstack Developer",
        url: "https://nydeo.org",
        duration: "January 2022",
        description: [
            "Designed website layout and created mockups",
            "Used HTML, CSS, JavaScript, and Google Sheets as a database",
            "Responsible for the general maintenance and upkeep of the website",
        ],
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        abbreviation: "aetheria",
        name: "Aetheria",
        title: "Lead Developer",
        url: "https://discord.aetheria.world",
        duration: "June 2022 - February 2023",
        description: [
            "Used Java & Paper API to develop highly functional Minecraft plugins",
            "Used TypeScript & discord.js to develop a general purpose discord management bot",
            "Managed the server, staff, and oversaw the server's overall operation",
        ],
        tags: [
            "Java",
            "Paper API",
            "Typescript",
            "Discord.js",
            "Product Management",
        ],
    },
];

const Work = () => {
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
                delay: 0.09,
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

    const itemX = {
        hidden: { x: -10, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
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
        <section id="work">
            <motion.div
                className="py-[100px] text-gray-200 w-full max-w-[850px] mx-auto px-4 flex flex-col"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <motion.div
                    className="name text-7xl sm:text-8xl flex text-gray-100 font-bold"
                    variants={itemY}
                >
                    <Title text="work" />
                </motion.div>

                <div className="">
                    <motion.ul className="grid" variants={itemX}>
                        {workData.map((w) => {
                            return (
                                <WorkCard
                                    key={w.name}
                                    title={w.title}
                                    url={w.url}
                                    name={w.name}
                                    duration={w.duration}
                                    description={w.description}
                                    tags={w.tags}
                                />
                            );
                        })}
                    </motion.ul>
                </div>
            </motion.div>
        </section>
    );
};

export default Work;
