"use client";

import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const Footer = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });
    useEffect(() => {
        if (inView) {
            const skillsElement = document.getElementById("socials");
            if (skillsElement) {
                skillsElement.style.opacity = "0";
            }
        } else {
            const skillsElement = document.getElementById("socials");
            if (skillsElement) {
                skillsElement.style.opacity = "1";
            }
        }
    }, [controls, inView]);
    return (
        <section id="footer" ref={ref}>
            <footer className="flex flex-col justify-center items-center sticky top-full pb-[20px] w-full h-auto mb-[20px]">
                <h1 className="text-primary-400 text-[20px] font-bold mb-[10px]">
                    Ethan Ng&nbsp;&nbsp;
                    <p className="text-gray-100 inline-block font-normal">
                        Portfolio
                    </p>
                </h1>
                <ul className="flex flex-row mb-[10px]">
                    <li className="group mx-[15px] px-[5px] my-[20px]">
                        <a
                            href="https://github.com/ngethan"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FiGithub
                                className="group-hover:text-primary-500 group-hover:tranprimary-y-[-5px] text-gray-200 duration-300"
                                size={25}
                            />
                        </a>
                    </li>
                    <li className="group mx-[15px] px-[5px] my-[20px]">
                        <a
                            href="https://www.linkedin.com/in/ethan--ng/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Linkedin"
                        >
                            <FiLinkedin
                                className="group-hover:text-primary-500 group-hover:tranprimary-y-[-5px] text-gray-200 duration-300"
                                size={25}
                            />
                        </a>
                    </li>
                    <li className="group mx-[15px] px-[5px] my-[20px]">
                        <a
                            href="https://www.instagram.com/ethn.ng/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <FiInstagram
                                className="group-hover:text-primary-500 group-hover:tranprimary-y-[-5px] text-gray-200 duration-300"
                                size={25}
                            />
                        </a>
                    </li>
                    <li className="group mx-[15px] px-[5px] my-[20px]">
                        <a
                            href="https://twitter.com/ethn_ng/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="CodePen"
                        >
                            <FiTwitter
                                className="group-hover:text-primary-500 group-hover:tranprimary-y-[-5px] text-gray-200 duration-300"
                                size={25}
                            />
                        </a>
                    </li>
                </ul>
                <a
                    href="https://github.com/ngethan/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover-animation-dark hover:text-primary-400 font-mono text-gray-100 text-[16px] duration-300"
                    aria-label="Project Repository"
                >
                    Designed and built by Ethan Ng
                </a>
            </footer>
        </section>
    );
};

export default Footer;
