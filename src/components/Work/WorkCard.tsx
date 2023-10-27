import { motion } from "framer-motion";

import { Badge } from "../ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";

interface Props {
    title: string;
    url: string;
    name: string;
    duration: string;
    description: string[];
    tags?: string[];
    md?: boolean;
}

const WorkCard = ({ title, url, name, duration, description, tags }: Props) => {
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
        <Card className="mb-[30px] bg-gray-800 border-transparent hover:bg-gray-900 hover:border-gray-700 duration-300">
            <motion.div initial="hidden" animate="visible" variants={list}>
                <CardHeader>
                    <CardTitle>
                        <motion.div variants={itemY}>
                            <motion.span className="text-[24px] text-gray-100 font-bold">
                                {title}
                            </motion.span>
                            <span className="text-primary-500 text-[24px] font-bold">
                                {" "}
                                @{" "}
                            </span>
                            <a
                                className="hover-animation-dark text-primary-500 text-[24px] font-bold"
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {name}
                            </a>
                        </motion.div>
                    </CardTitle>
                    <motion.div variants={itemY}>
                        <CardDescription className="font-code text-[18px] text-gray-200 mb-4">
                            {duration}
                        </CardDescription>
                    </motion.div>
                </CardHeader>
                <CardContent>
                    <motion.ul variants={itemY}>
                        {description.map((i: string, index: number) => {
                            return (
                                <li
                                    className="before:text-primary-500 relative text-[18px] pl-[30px] pr-0 mb-[10px] list-none before:absolute before:left-0 before:content-['▸'] before:font-black"
                                    key={index}
                                >
                                    <span className="text-gray-200">{i}</span>
                                </li>
                            );
                        })}
                    </motion.ul>
                </CardContent>
                <CardFooter>
                    {tags?.map((t, key) => {
                        return (
                            <Badge className="mr-1" key={key}>
                                {t}
                            </Badge>
                        );
                    })}
                </CardFooter>
            </motion.div>
        </Card>
    );
};

export default WorkCard;
