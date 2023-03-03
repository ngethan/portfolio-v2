import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Document, Page, pdfjs } from "react-pdf";

import CRNavbar from "@/components/CRNavbar";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResearchPaper = () => {
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
                <title>Ethan Ng - Research Paper</title>
            </Head>
            <CRNavbar dPage={true} />
            <motion.div
                id="reflection"
                className="ml-20 w-1/2 px-4 flex -z-[1] flex-col"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <div className="max-h-[473.89px] mr-[100px]">
                    <motion.div
                        className="text-7xl sm:text-8xl flex text-gray-100 mt-44 mb-10 font-bold max-w-[425.2px]"
                        variants={item}
                    >
                        <h1>
                            {"Research Paper".split("").map((letter, index) => {
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
                        className="text-gray-200 w-full text-lg mb-[30px]"
                        variants={item}
                    >
                        During the research paper unit, I gained knowledge about
                        how to conduct online research utilizing databases, how
                        to produce a scholarly paper using MLA style, how to use
                        all of NoodleTools&apos; capabilities, and what tools
                        schools provide their students with to assist them
                        achieve. I&apos;ll be sure to utilize the general and
                        subject librarians, online databases, and other lending
                        services offered by the library at my campus. I am
                        really happy that I studied this course as a senior in
                        high school since I feel ready to conduct college-level
                        research today.
                    </motion.p>
                    <motion.p
                        className="text-gray-200 w-full text-lg"
                        variants={item}
                    >
                        1. Build a strong foundation. Gathering sources and
                        compiling note cards is a crucial step in making the
                        writing process easier.
                        <br />
                        2. NoodleTools is the best tool for organizing sources
                        and taking notes and is offered for the low price of
                        $15/yr.
                        <br />
                        3. Write the body paragraphs first to make writing the
                        introduction and conclusion easier.
                        <br />
                        4. I learned how to create an outline with NoodleTools.
                        <br />
                        5. Utilize NoodleTools to compile my sources into a work
                        cited page.
                        <br />
                        6. All the plagiarism rules I learned were very
                        important. I found that I barely knew any of them, yet
                        they are extremely important to make sure none of your
                        paper is marked as plagiarized.
                        <br />
                        7. Printing out your paper and correcting it with a red
                        pen makes catching errors easier.
                        <br />
                        8. Peer review and feedback can help improve the quality
                        of a research paper.
                        <br />
                        9. I also learned a lot of the grammar rules that you
                        must follow like putting the period outside of the
                        quotation when you cite an author.
                        <br />
                        10. Lastly, saving Ms. Valenza’s tools on google drive
                        ensures that I will retain this information for when I
                        go off to college next year.
                    </motion.p>
                </div>
            </motion.div>
            <motion.div className="float-right w-[calc(50%)] h-full">
                <Document file="https://ethanng.dev/research-paper.pdf">
                    <Page pageNumber={1} />
                </Document>
            </motion.div>
        </div>
    );
};

export default ResearchPaper;
