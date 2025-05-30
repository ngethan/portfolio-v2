import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiMonkeytype } from "react-icons/si";

const Socials = () => {
    return (
        <ul
            className="fixed bottom-12 right-7 hidden flex-col duration-300 md:flex"
            id="socials"
        >
            <li className="group mb-[30px]">
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
            <li className="group mb-[30px]">
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
            <li className="group mb-[30px]">
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
            <li className="group mb-[30px]">
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
            <li className="group mb-[30px]">
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
    );
};

export default Socials;
