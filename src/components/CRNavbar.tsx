import { motion, useAnimation } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import icon from "../../public/icon.png";

interface Props {
    dPage?: boolean;
}

const CRNavbar = ({ dPage }: Props) => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

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

    const handleViewSection = (e: React.MouseEvent<HTMLElement>) => {
        if (dPage) {
            Router.push(`/cr/#${(e.target as any).dataset.section!}`);
        } else {
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
                        className="hover-animation-dark duration-300 hover:text-red-400"
                        data-section="home"
                        onClick={handleViewSection}
                    >
                        Home
                    </h1>
                </motion.li>
                <motion.li variants={item}>
                    <h1
                        className="hover-animation-dark duration-300 hover:text-red-400"
                        data-section="about"
                        onClick={handleViewSection}
                    >
                        About
                    </h1>
                </motion.li>
                <motion.li variants={item}>
                    <h1
                        className="hover-animation-dark duration-300 hover:text-red-400"
                        data-section="inspirations"
                        onClick={handleViewSection}
                    >
                        Inspirations
                    </h1>
                </motion.li>
                <motion.li variants={item}>
                    <h1
                        className="hover-animation-dark duration-300 hover:text-red-400"
                        data-section="skills"
                        onClick={handleViewSection}
                    >
                        Skills
                    </h1>
                </motion.li>
                <motion.li variants={item}>
                    <h1
                        className="hover-animation-dark duration-300 hover:text-red-400"
                        data-section="work"
                        onClick={handleViewSection}
                    >
                        Work
                    </h1>
                </motion.li>
                <motion.li variants={item}>
                    <Link
                        className="hover-animation-dark duration-300 hover:text-red-400"
                        href="/cr/dogs"
                    >
                        Dogs
                    </Link>
                </motion.li>
                <motion.li variants={item}>
                    <Link
                        className="hover-animation-dark duration-300 hover:text-red-400"
                        href="/cr/piano"
                    >
                        Piano
                    </Link>
                </motion.li>
                <motion.li variants={item}>
                    <Link
                        className="hover-animation-dark duration-300 hover:text-red-400"
                        href="/cr/watches"
                    >
                        Watches
                    </Link>
                </motion.li>
                <motion.li variants={item}>
                    <Link
                        className="hover-animation-dark duration-300 hover:text-red-400"
                        href="/cr/writers-portfolio"
                    >
                        Writers Portfolio
                    </Link>
                </motion.li>
                <motion.li variants={item}>
                    <button
                        className="font-code text-red-400 border-red-400 text-lg border-2 rounded-lg px-4 py-1 my-1 flex items-center duration-300 hover:bg-red-300/[.3]"
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
                <li className="top-[75px] fixed">
                    <p
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-red-400"
                        data-section="about"
                        onClick={handleViewSection}
                    >
                        About
                    </p>
                </li>
                <li className="top-[150px] fixed">
                    <p
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-red-400"
                        data-section="inspirations"
                        onClick={handleViewSection}
                    >
                        Inspirations
                    </p>
                </li>
                <li className="top-[225px] fixed">
                    <p
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-red-400"
                        data-section="skills"
                        onClick={handleViewSection}
                    >
                        Skills
                    </p>
                </li>
                <li className="top-[300px] fixed">
                    <p
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-red-400"
                        data-section="work"
                        onClick={handleViewSection}
                    >
                        Work
                    </p>
                </li>
                <li className="top-[375px] py-6 fixed">
                    <Link
                        className="hover-animation-dark text-4xl duration-300 hover:text-red-400"
                        href="/cr/dogs"
                    >
                        Dogs
                    </Link>
                </li>
                <li className="top-[450px] py-6 fixed">
                    <Link
                        className="hover-animation-dark text-4xl duration-300 hover:text-red-400"
                        href="/cr/piano"
                    >
                        Piano
                    </Link>
                </li>
                <li className="top-[525px] py-6 fixed">
                    <Link
                        className="hover-animation-dark text-4xl duration-300 hover:text-red-400"
                        href="/cr/watches"
                    >
                        Watches
                    </Link>
                </li>
                <li className="top-[600px] py-6 fixed">
                    <Link
                        className="hover-animation-dark text-4xl duration-300 hover:text-red-400"
                        href="/cr/writers-portfolio"
                    >
                        Writers Portfolio
                    </Link>
                </li>
                <li className="top-[675px] fixed">
                    <p
                        className="hover-animation-dark py-6 text-4xl duration-300 hover:text-red-400"
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

export default CRNavbar;
