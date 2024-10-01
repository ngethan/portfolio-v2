"use client";

import React, { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";

import { Button } from "./ui/button";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const router = useRouter();
    const pathname = usePathname();

    // const [top, setTop] = useState(true);

    // const prevPos = 0;

    // const onScroll = (): void => {
    //     const userAgent =
    //         typeof navigator !== "undefined" ? navigator.userAgent : "";

    //     if (
    //         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    //             userAgent
    //         )
    //     )
    //         setTop(true);
    //     const currPos = window.pageYOffset;
    //     if (currPos === 0) setTop(true);
    //     else setTop(false);
    //     if (prevPos > currPos)
    //         document.getElementById("navbar")!.style.top = "0";
    //     else document.getElementById("navbar")!.style.top = "-80px";
    //     prevPos = currPos;
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", onScroll);

    //     return () => {
    //         window.removeEventListener("scroll", onScroll);
    //     };
    // });

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
                delay: 0.1,
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
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    };

    const handleViewSection = async (e: React.MouseEvent<HTMLElement>) => {
        if ((e.target as any).dataset.section === "writing") {
            await router.push("/writing");
        } else {
            if (pathname !== "/") await router.push("/");
            document
                .getElementById((e.target as any).dataset.section!)!
                .scrollIntoView();

            if (window.innerWidth < 768) {
                setNav(false);
            }
        }
    };

    return (
        <motion.div
            id="navbar"
            className="fixed z-[999] flex h-[50px] w-full items-center justify-between bg-gray-800 px-[50px] py-[40px] text-gray-100 duration-300 "
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <div className="flex w-full flex-col">
                <div className="flex w-full justify-between md:mb-2">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        variants={item}
                        className="flex items-center"
                    >
                        <Link href="/">ETHAN NG</Link>
                    </motion.div>

                    <ul className="hidden items-center text-[12px] md:flex">
                        <motion.li variants={item}>
                            <h1
                                className="hover-animation-dark font-semibold duration-300 hover:text-primary-400"
                                data-section="about"
                                onClick={handleViewSection}
                            >
                                ABOUT
                            </h1>
                        </motion.li>
                        <motion.li variants={item}>
                            <h1
                                className="hover-animation-dark font-semibold duration-300 hover:text-primary-400"
                                data-section="skills"
                                onClick={handleViewSection}
                            >
                                SKILLS
                            </h1>
                        </motion.li>
                        <motion.li variants={item}>
                            <h1
                                className="hover-animation-dark font-semibold duration-300 hover:text-primary-400"
                                data-section="work"
                                onClick={handleViewSection}
                            >
                                WORK
                            </h1>
                        </motion.li>
                        {/* <motion.li variants={item}>
                            <h1
                                className="hover-animation-dark hover:text-primary-400 duration-300"
                                data-section="writing"
                                onClick={handleViewSection}
                            >
                                WRITING
                            </h1>
                        </motion.li> */}
                        <motion.li variants={item}>
                            <h1
                                className="hover-animation-dark font-semibold duration-300 hover:text-primary-400"
                                data-section="writing"
                            >
                                <Link
                                    href="/Ethan%20Ng%20Resume.pdf"
                                    target="_blank"
                                >
                                    RESUME
                                </Link>
                            </h1>
                        </motion.li>
                        <motion.li variants={item}>
                            <Link
                                href="/photos"
                                target="_blank"
                                className="hover-animation-dark font-semibold duration-300 hover:text-primary-400"
                            >
                                PHOTOS
                            </Link>
                        </motion.li>
                        <motion.li variants={item}>
                            <Button
                                data-section="contact"
                                onClick={handleViewSection}
                                type="button"
                                aria-label="Contact"
                                className="font-semibold"
                            >
                                <span className="text-[12px]">CONTACT</span>
                            </Button>
                        </motion.li>
                    </ul>
                </div>
                <hr className="hidden md:inline md:w-full" />
            </div>

            <div className="z-[1000] md:hidden" onClick={handleClick}>
                <Hamburger
                    toggled={nav}
                    toggle={setNav}
                    size={25}
                    label="Menu"
                />
            </div>

            <motion.ul
                className={
                    !nav
                        ? "hidden"
                        : "fixed left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center overflow-y-hidden bg-gray-800 font-mono text-lg"
                }
                variants={variants}
            >
                <li className="fixed top-[calc(15%)]">
                    <p
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-primary-400"
                        data-section="about"
                        onClick={handleViewSection}
                    >
                        ABOUT
                    </p>
                </li>

                <li className="fixed top-[calc(27%)]">
                    <p
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-primary-400"
                        data-section="skills"
                        onClick={handleViewSection}
                    >
                        SKILLS
                    </p>
                </li>
                <li className="fixed top-[calc(39%)]">
                    <p
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-primary-400"
                        data-section="work"
                        onClick={handleViewSection}
                    >
                        WORK
                    </p>
                </li>
                {/* <li className="top-[calc(51%)] fixed">
                    <p
                        className="hover-animation-dark hover:text-primary-400 py-6 text-4xl duration-300"
                        data-section="writing"
                        onClick={handleViewSection}
                    >
                        WRITING
                    </p>
                </li> */}
                <li className="fixed top-[calc(63%)]">
                    <p
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-primary-400"
                        onClick={handleViewSection}
                    >
                        <Link href="/Ethan_Ng_Resume" target="_blank">
                            RESUME
                        </Link>
                    </p>
                </li>
                <li className="fixed top-[calc(63%)]">
                    <p className="hover-animation-dark py-6 text-4xl duration-300 hover:text-primary-400">
                        <Link href="/photos" target="_blank">
                            PHOTOS
                        </Link>
                    </p>
                </li>
                <li className="fixed top-[calc(75%)]">
                    <p
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-primary-400"
                        data-section="contact"
                        onClick={handleViewSection}
                    >
                        CONTACT
                    </p>
                </li>
            </motion.ul>
        </motion.div>
    );
};

export default Navbar;
