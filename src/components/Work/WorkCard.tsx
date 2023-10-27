import { motion } from "framer-motion";

interface Props {
    work: string;
    md?: boolean;
}

const WorkInfo = ({ work, md }: Props) => {
    const workData = [
        {
            abbreviation: "tcs",
            name: "theCoderSchool",
            title: "Code Coach",
            url: "https://thecoderschool.com/",
            duration: "September 2021 - March 2023",
            description: [
                "Facilitate learning amongst beginner and intermediate programmers",
                "Teach scratch, Python, JavaScript, HTML, and CSS",
                "Promote a positive and productive work environment, devise fun and educational projects, and maintain the physical class environment.",
                "Trained and managed interns to assist with various tasks from overseeing the physical classroom to teaching and mentoring",
            ],
        },
        {
            abbreviation: "mpr",
            name: "Muddy Paws Rescue",
            title: "Website Developer",
            url: "https://muddypawsrescue.org/",
            duration: "October 2021 - Present",
            description: [
                "Responsible for the general maintenance and upkeep of the website",
                "Utilize languages and technologies such as HTML, CSS, JavaScript, Salesforce, and Squarespace",
                "Conceptualize and design the website layout and functionality",
            ],
        },
        {
            abbreviation: "nydeo",
            name: "NYDEO",
            title: "Fullstack Developer",
            url: "https://nydeo.org",
            duration: "January 2022 - Present",
            description: [
                "Designed website layout and created mockups",
                "Used HTML, CSS, JavaScript, and Google Sheets as a database",
                "Responsible for the general maintenance and upkeep of the website",
            ],
        },
        {
            abbreviation: "aetheria",
            name: "Aetheria",
            title: "Lead Developer",
            url: "https://discord.aetheria.world",
            duration: "June 2022 - February 2023",
            description: [
                "Used Java & Paper API to develop highly functional Minecraft plugins",
                "Used TypeScript & discord.js to develop a general purpose discord management bot",
                "Managed the server, staff, and oversaw the server's overall operation",
            ],
        },
    ];

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

    const data = workData.find((obj) => obj.abbreviation === work);

    return (
        <motion.div
            className={
                !md
                    ? "ml-[25px] float-right h-[300px]"
                    : "ml-4 float-right h-[300px]"
            }
            initial="hidden"
            animate="visible"
            key={work}
            variants={list}
        >
            <motion.div variants={itemY}>
                <motion.p className="inline text-[24px] text-gray-100 font-bold mb-1">
                    {data!.title}
                </motion.p>
                <p className="text-primary-500 inline text-[24px] font-bold">
                    {" "}
                    @{" "}
                </p>
                <a
                    className="hover-animation-dark text-primary-500 inline text-[24px] font-bold"
                    href={data!.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {data!.name}
                </a>
            </motion.div>
            <motion.p
                className="font-code text-[20px] text-gray-200 mb-4"
                variants={itemY}
            >
                {data!.duration}
            </motion.p>
            <motion.ul variants={itemY}>
                {data!.description.map((i: string, index: number) => {
                    return (
                        <li
                            className="before:text-primary-300 relative text-[18px] pl-[30px] pr-0 mb-[10px] list-none before:absolute before:left-0 before:content-['▸'] before:font-black"
                            key={index}
                        >
                            <p>{i}</p>
                        </li>
                    );
                })}
            </motion.ul>
        </motion.div>
    );
};

export default WorkInfo;