import { motion } from "framer-motion";

import { Badge } from "../ui/badge";
import Link from "next/link";

interface Props {
    title: string;
    url: string;
    name: string;
    duration: string;
    description: string[];
    tags?: string[];
    md?: boolean;
}

const WorkCard = ({ title, url, name, duration, description, tags, md }: Props) => {
    const list = {
        visible: {
            opacity: 1,
            transition: {
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

    const itemY = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div
            className={!md ? "ml-[25px] float-right h-[300px]" : "ml-4 float-right h-[300px]"}
            initial="hidden"
            animate="visible"
            key={name}
            variants={list}
        >
            <motion.div variants={itemY}>
                <motion.p className="inline text-[24px] text-gray-100 font-bold mb-1">
                    {title}
                </motion.p>
                <p className="text-primary-500 inline text-[24px] font-bold">
                    {" "}
                    @{" "}
                </p>
                <Link
                    className="hover-animation-dark text-primary-500 inline text-[24px] font-bold"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {name}
                </Link>
            </motion.div>
            <motion.p
                className="font-mono text-[20px] text-gray-200 mb-4"
                variants={itemY}
            >
                {duration}
            </motion.p>
            <motion.ul variants={itemY}>
                {description.map((i: string, index: number) => {
                    return (
                        <li
                            className="before:text-primary-300 relative text-[18px] pl-[30px] pr-0 mb-[10px] list-none before:absolute before:left-0 before:content-['▸'] text-gray-100"
                            key={index}
                        >
                            <p>{i}</p>
                        </li>
                    );
                })}
            </motion.ul>
            <motion.div variants={itemY}>
                {tags?.map((t, key) => {
                    return (
                        <Badge className="mr-1" key={key}>
                            {t}
                        </Badge>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default WorkCard;
