import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const Socials = () => {
    return (
        <ul className="hidden md:flex flex-col fixed bottom-12 right-7">
            <li className="group mb-[30px]">
                <a
                    href="https://github.com/ngethan"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <FiGithub
                        className="text-gray-200 duration-300 group-hover:text-red-500 group-hover:translate-y-[-5px]"
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
                        className="text-gray-200 duration-300 group-hover:text-red-500 group-hover:translate-y-[-5px]"
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
                        className="text-gray-200 duration-300 group-hover:text-red-500 group-hover:translate-y-[-5px]"
                        size={25}
                    />
                </a>
            </li>
            <li className="group mb-[30px]">
                <a
                    href="https://twitter.com/ethn_ng/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="CodePen"
                >
                    <FiTwitter
                        className="text-gray-200 duration-300 group-hover:text-red-500 group-hover:translate-y-[-5px]"
                        size={25}
                    />
                </a>
            </li>
        </ul>
    );
};

export default Socials;
