"use client";

import { useEffect } from "react";

import { useAnimation } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { SiMonkeytype } from "react-icons/si";

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
            <footer className="sticky top-full mb-[20px] flex h-auto w-full flex-col items-center justify-center pb-[20px]">
                <h2 className="mb-[10px] text-[20px] font-bold text-primary-400">
                    Ethan Ng's&nbsp;&nbsp;
                    <p className="inline-block font-normal text-gray-100">
                        Portfolio
                    </p>
                </h2>
                <ul className="mb-[10px] flex flex-row">
                    <li className="group mx-[15px] my-[20px] px-[5px]">
                        <a
                            href="https://github.com/ngethan"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FiGithub
                                className="group-hover:tranprimary-y-[-5px] text-gray-200 duration-300 group-hover:text-primary-500"
                                size={25}
                            />
                        </a>
                    </li>
                    <li className="group mx-[15px] my-[20px] px-[5px]">
                        <a
                            href="https://www.linkedin.com/in/ethan--ng/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Linkedin"
                        >
                            <FiLinkedin
                                className="group-hover:tranprimary-y-[-5px] text-gray-200 duration-300 group-hover:text-primary-500"
                                size={25}
                            />
                        </a>
                    </li>
                    <li className="group mx-[15px] my-[20px] px-[5px]">
                        <a
                            href="https://www.instagram.com/ethn.ng/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <FiInstagram
                                className="group-hover:tranprimary-y-[-5px] text-gray-200 duration-300 group-hover:text-primary-500"
                                size={25}
                            />
                        </a>
                    </li>
                    <li className="group mx-[15px] my-[20px] px-[5px]">
                        <a
                            href="https://twitter.com/ethn_ng/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                        >
                            <FiTwitter
                                className="group-hover:tranprimary-y-[-5px] text-gray-200 duration-300 group-hover:text-primary-500"
                                size={25}
                            />
                        </a>
                    </li>
                    <li className="group mx-[15px] my-[20px] px-[5px]">
                        <a
                            href="https://monkeytype.com/profile/ethan.ng"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Monkeytype"
                        >
                            <SiMonkeytype
                                className="group-hover:tranprimary-y-[-5px] text-gray-200 duration-300 group-hover:text-primary-500"
                                size={25}
                            />
                        </a>
                    </li>
                </ul>
                <a
                    href="https://github.com/ngethan/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover-animation-dark font-mono text-[16px] text-gray-100 duration-300 hover:text-primary-400"
                    aria-label="Project Repository"
                >
                    Designed and built by Ethan Ng
                </a>
            </footer>
        </section>
    );
};

export default Footer;
