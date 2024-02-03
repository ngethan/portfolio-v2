import { motion } from "framer-motion";
import Link from "next/link";

import { Badge } from "../ui/badge";

interface Props {
    title: string;
    url: string;
    name: string;
    duration: string;
    description: string[];
    tags?: string[];
    md?: boolean;
}

const WorkCard = ({
    title,
    url,
    name,
    duration,
    description,
    tags,
    md,
}: Props) => {
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
            className={
                !md ? "float-right ml-[25px] h-[500px]" : "float-right ml-4"
            }
            initial="hidden"
            animate="visible"
            key={name}
            variants={list}
        >
            <motion.div variants={itemY}>
                <motion.p className="mb-1 inline text-[24px] font-bold text-gray-100">
                    {title}
                </motion.p>
                <p className="inline text-[24px] font-bold text-primary-500">
                    {" "}
                    @{" "}
                </p>
                <Link
                    className="hover-animation-dark inline text-[24px] font-bold text-primary-500"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {name}
                </Link>
            </motion.div>
            <motion.p
                className="mb-4 font-mono text-[20px] text-gray-200"
                variants={itemY}
            >
                {duration}
            </motion.p>
            <motion.ul variants={itemY}>
                {description.map((i: string, index: number) => {
                    return (
                        <li
                            className="relative mb-[10px] list-none pl-[30px] pr-0 text-[18px] text-gray-100 before:absolute before:left-0 before:text-primary-300 before:content-['▸']"
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
