import { motion, useAnimation } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import icon from "../../public/icon.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const router = useRouter();

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
            if (router.pathname !== "/") await router.push("/");
            console.log(
                document.getElementById((e.target as any).dataset.section!)!
            );
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
            className="duration-300 fixed w-full h-[50px] flex justify-between items-center px-[50px] py-[40px] bg-gray-800 text-gray-100 z-[999]"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
            >
                <img
                    src={icon.src}
                    className="md:w-[48px] md:h-[48px] w-[32px] h-[32px]"
                    alt="Logo"
                />
            </motion.div>

            <ul className="font-code hidden md:flex text-lg items-center">
                <motion.li variants={item}>
                    <h1
                        className="hover-animation-dark hover:text-primary-400 duration-300"
                        data-section="home"
                        onClick={handleViewSection}
                    >
                        Home
                    </h1>
                </motion.li>
                <motion.li variants={item}>
                    <h1
                        className="hover-animation-dark hover:text-primary-400 duration-300"
                        data-section="about"
                        onClick={handleViewSection}
                    >
                        About
                    </h1>
                </motion.li>
                <motion.li variants={item}>
                    <h1
                        className="hover-animation-dark hover:text-primary-400 duration-300"
                        data-section="skills"
                        onClick={handleViewSection}
                    >
                        Skills
                    </h1>
                </motion.li>
                <motion.li variants={item}>
                    <h1
                        className="hover-animation-dark hover:text-primary-400 duration-300"
                        data-section="work"
                        onClick={handleViewSection}
                    >
                        Work
                    </h1>
                </motion.li>
                <motion.li variants={item}>
                    <h1
                        className="hover-animation-dark hover:text-primary-400 duration-300"
                        data-section="writing"
                        onClick={handleViewSection}
                    >
                        Writing
                    </h1>
                </motion.li>
                <motion.li variants={item}>
                    <button
                        className="font-code text-primary-400 border-primary-400 hover:bg-primary-300/[.3] text-lg border-2 rounded-lg px-4 py-1 my-1 flex items-center duration-300"
                        data-section="contact"
                        onClick={handleViewSection}
                        type="button"
                        aria-label="Contact"
                    >
                        Contact
                    </button>
                </motion.li>
            </ul>

            <div className="md:hidden z-[1000]" onClick={handleClick}>
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
                        : "font-code fixed top-0 left-0 w-full h-full overflow-y-hidden bg-gray-800 flex flex-col justify-center items-center text-lg z-10"
                }
                variants={variants}
            >
                <li className="top-[calc(15%)] fixed">
                    <p
                        className="hover-animation-dark hover:text-primary-400 py-6 text-4xl duration-300"
                        data-section="about"
                        onClick={handleViewSection}
                    >
                        About
                    </p>
                </li>

                <li className="top-[calc(30%)] fixed">
                    <p
                        className="hover-animation-dark hover:text-primary-400 py-6 text-4xl duration-300"
                        data-section="skills"
                        onClick={handleViewSection}
                    >
                        Skills
                    </p>
                </li>
                <li className="top-[calc(45%)] fixed">
                    <p
                        className="hover-animation-dark hover:text-primary-400 py-6 text-4xl duration-300"
                        data-section="work"
                        onClick={handleViewSection}
                    >
                        Work
                    </p>
                </li>
                <li className="top-[calc(60%)] fixed">
                    <p
                        className="hover-animation-dark hover:text-primary-400 py-6 text-4xl duration-300"
                        data-section="writing"
                        onClick={handleViewSection}
                    >
                        Writing
                    </p>
                </li>
                <li className="top-[calc(75%)] fixed">
                    <p
                        className="hover-animation-dark hover:text-primary-400 py-6 text-4xl duration-300"
                        data-section="contact"
                        onClick={handleViewSection}
                    >
                        Contact
                    </p>
                </li>
            </motion.ul>
        </motion.div>
    );
};

export default Navbar;
