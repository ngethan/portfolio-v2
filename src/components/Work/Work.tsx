import React, { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Title from "@/components/Title";

import Delayed from "../Delayed";
import WorkCard from "./WorkCard";

const workData = [
    {
        name: "Connect",
        title: "Co-Founder",
        url: "https://connectalum.com",
        duration: "December 2023 - Present",
        description: [
            "Developing web-based edTech software using Next.js, Supabase, TailwindCSS, and Prisma",
            "Signed $50,000 LOI to be adopted by 1 high-school, expecting more by the end of Jan 2024; 3300 active users",
        ],
        tags: [
            "Next.js",
            "Supabase",
            "Prisma",
            "TailwindCSS",
            "Figma",
            "shadcn",
            "Typescript",
        ],
    },
    {
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
        name: "Ethan Ng Technologies, LLC",
        title: "CEO",
        url: "https://ethanng.dev/",
        duration: "September 2020 - December 2023",
        description: [
            "Developed software solutions, including websites, Java plugins, and Discord bots for over 50 clients and generated over $150k in revenue across 4 years.",
            "Executed business strategies, including marketing, client engagement, and revenue growth.",
            "Spearheaded project management, effectively balancing project timelines, client pitches, and high-quality coding standards.",
            "Recruited and managed a team of 3 developers, demonstrating leadership skills by delegating tasks and ensuring project completion within deadlines.",
        ],
        tags: [
            "Leadership",
            "Product Management",
            "Web Design",
            "Communication",
            "Client Engagement",
            "Marketing",
        ],
    },
    {
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
    const [inViewFinal, setInViewFinal] = useState(false);
    const [work, setWork] = useState(0);

    useEffect(() => {
        if (inView) {
            setInViewFinal(true);
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

    function sleep(ms: number) {
        // eslint-disable-next-line no-promise-executor-return
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setWork((e.target as any).dataset.work);

        const prevActiveMd =
            document.getElementsByClassName("active-work-md")[0];
        prevActiveMd?.classList.add("inactive-work-md");
        prevActiveMd?.classList.remove("active-work-md");
        (e.target as any).classList.add("active-work-md");
        (e.target as any).classList.remove("inactive-work-md");
        const prevActive = document.getElementsByClassName("active-work")[0];
        prevActive?.classList.add("inactive-work");
        prevActive?.classList.remove("active-work");
        (e.target as any).classList.add("active-work");
        (e.target as any).classList.remove("inactive-work");
        sleep(100).then(() => {
            document.getElementById(
                "selected-indicator-cr"
            )!.style.marginTop = `${
                -47 * (workData.length - (e.target as any).dataset.work)
            }px`;
        });
    };

    return (
        <section id="work">
            <motion.div
                id="work"
                className="mx-auto flex w-full max-w-[850px] flex-col px-4 py-[100px] text-gray-200"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <motion.div
                    className="name flex text-7xl font-bold text-gray-100 sm:text-8xl"
                    variants={itemY}
                >
                    <Title text="my work" />
                </motion.div>

                <div className="hidden md:flex">
                    <motion.ul
                        className="justify-left items-left float-left flex flex-col font-mono text-[20px] font-medium"
                        variants={itemX}
                    >
                        <li
                            id="connect"
                            className="active-work inline-flex h-[47px] items-center whitespace-nowrap border-l-[2px] border-gray-400 py-4 text-left duration-300"
                            data-work={0}
                            onClick={handleClick}
                        >
                            Connect
                        </li>
                        <li
                            id="rad"
                            className="inactive-work inline-flex h-[47px] items-center whitespace-nowrap border-l-[2px] border-gray-400 py-4 text-left duration-300"
                            data-work={1}
                            onClick={handleClick}
                        >
                            RadiantAI
                        </li>
                        <li
                            id="ent"
                            className="inactive-work inline-flex h-[47px] items-center whitespace-nowrap border-l-[2px] border-gray-400 py-4 text-left duration-300"
                            data-work={2}
                            onClick={handleClick}
                        >
                            Freelancing
                        </li>
                        <li
                            id="mpr"
                            className="inactive-work inline-flex h-[47px] items-center whitespace-nowrap border-l-[2px] border-gray-400 py-4 text-left duration-300"
                            data-work={3}
                            onClick={handleClick}
                        >
                            Muddy Paws Rescue
                        </li>
                        <li
                            id="tcs"
                            className="inactive-work inline-flex h-[47px] items-center whitespace-nowrap border-l-[2px] border-gray-400 py-4 text-left duration-300"
                            data-work={4}
                            onClick={handleClick}
                        >
                            theCoderSchool
                        </li>
                        <li
                            id="aetheria"
                            className="inactive-work inline-flex h-[47px] items-center whitespace-nowrap border-l-[2px] border-gray-400 py-4 text-left duration-300"
                            data-work={5}
                            onClick={handleClick}
                        >
                            Aetheria
                        </li>
                        <div
                            id="selected-indicator-cr"
                            className={`relative top-0 -mt-[282px] h-[47px] w-[2px] border-l-[2px] border-primary-500 duration-300`}
                        ></div>
                    </motion.ul>

                    {inViewFinal ? (
                        <Delayed delay={500}>
                            <WorkCard
                                title={workData[work]!.title}
                                url={workData[work]!.url}
                                name={workData[work]!.name}
                                duration={workData[work]!.duration}
                                description={workData[work]!.description}
                                tags={workData[work]!.tags}
                            />
                        </Delayed>
                    ) : null}
                </div>

                <div className="flex flex-col md:hidden">
                    <motion.ul
                        id="mobile-work-list"
                        className="ul-mobile mb-[5px] flex h-[47px] flex-row overflow-y-hidden overflow-x-scroll font-mono text-[18px]"
                        variants={itemY}
                        aria-label="Work"
                    >
                        <li
                            id="connect-md"
                            className="active-work-md flex items-center justify-center whitespace-nowrap border-b-[2px] py-4 duration-300"
                            data-work={0}
                            onClick={handleClick}
                            aria-label="Connect Network"
                        >
                            Connect
                        </li>
                        <li
                            id="rad-md"
                            className="inactive-work-md flex items-center justify-center whitespace-nowrap border-b-[2px] py-4 duration-300"
                            data-work={1}
                            onClick={handleClick}
                            aria-label="RadiantAI"
                        >
                            RadiantAI
                        </li>
                        <li
                            id="ent-md"
                            className="inactive-work-md flex items-center justify-center whitespace-nowrap border-b-[2px] py-4 duration-300"
                            data-work={2}
                            onClick={handleClick}
                            aria-label="Freelancing"
                        >
                            Freelancing
                        </li>
                        <li
                            id="mpr-md"
                            className="inactive-work-md flex items-center justify-center whitespace-nowrap border-b-[2px] py-4 duration-300"
                            data-work={3}
                            onClick={handleClick}
                            aria-label="Muddy Paws Rescue"
                        >
                            Muddy Paws Rescue
                        </li>
                        <li
                            id="tcs-md"
                            className="inactive-work-md flex items-center justify-center whitespace-nowrap border-b-[2px] py-4 duration-300"
                            data-work={4}
                            onClick={handleClick}
                            aria-label="theCoderSchool"
                        >
                            theCoderSchool
                        </li>
                        <li
                            id="aetheria-md"
                            className="inactive-work-md flex items-center justify-center whitespace-nowrap border-b-[2px] py-4 duration-300"
                            data-work={5}
                            onClick={handleClick}
                            aria-label="Aetheria"
                        >
                            Aetheria
                        </li>
                    </motion.ul>
                    {inViewFinal ? (
                        <Delayed delay={500}>
                            <WorkCard
                                title={workData[work]!.title}
                                url={workData[work]!.url}
                                name={workData[work]!.name}
                                duration={workData[work]!.duration}
                                description={workData[work]!.description}
                                tags={workData[work]!.tags}
                                md={true}
                            />
                        </Delayed>
                    ) : null}
                </div>
            </motion.div>
        </section>
        // <section id="work">
        //     <motion.div
        //         className="py-[100px] text-gray-200 w-full max-w-[850px] mx-auto px-4 flex flex-col"
        //         initial="hidden"
        //         animate={controls}
        //         variants={list}
        //         ref={ref}
        //     >
        //         <motion.div
        //             className="name text-7xl sm:text-8xl flex text-gray-100 font-bold"
        //             variants={itemY}
        //         >
        //             <Title text="work" />
        //         </motion.div>

        //         <div className="">
        //             <motion.ul className="grid" variants={itemX}>
        //                 {workData.map((w) => {
        //                     return (
        //                         <WorkCard
        //                             key={w.name}
        //                             title={w.title}
        //                             url={w.url}
        //                             name={w.name}
        //                             duration={w.duration}
        //                             description={w.description}
        //                             tags={w.tags}
        //                         />
        //                     );
        //                 })}
        //             </motion.ul>
        //         </div>
        //     </motion.div>
        // </section>
    );
};

export default Work;
