import { motion } from "framer-motion";

interface Props {
    inspiration: string;
    md?: boolean;
}

const InspirationInfo = ({ inspiration, md }: Props) => {
    const inspirationData = [
        {
            name: "Billy Joel",
            url: "https://www.billyjoel.com/",
            description:
                "My creative side has taken much inspiration from Billy Joel. I absolutely adore his music and have rekindled my love for piano through learning his songs. Billy Joel's songs have encouraged me to experiment outside of the classical genre and explore pop, rock, and jazz. Because of Joel, my piano repertoire has expanded to utilize the piano’s versatile nature to the fullest extent.",
        },
        {
            name: "Steve Jobs",
            url: "https://nydeo.org",
            description:
                "Would I be a proper software engineer if I didn’t look up to Steve Jobs? He embodies everything that I strive to be and I have a great deal to learn from him. His leadership, creativity, motivation, and entrepreneurship have all contributed to the lasting impact that he achieved.",
        },
        {
            name: "Onions",
            url: "N/A",
            description:
                "My life is unequivocally epitomized by onions. When I’m cutting onions, I cry. Yet, I proceed. I understand the lasting value of the onion transcends the momentary sadness it evokes. The french onion soup or onion rings I’ll have the pleasure of tasting later will be filled with so much more flavor. This could not be more applicable to me. The long hours I’ve spent toiling over physics or calculus are all made th it when I open up that email and it begins with “Congratulations!”.",
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

    const data = inspirationData.find((obj) => obj.name === inspiration);

    return (
        <motion.div
            className={
                !md
                    ? "ml-[25px] float-right h-[200px]"
                    : "ml-4 float-right h-[200px]"
            }
            initial="hidden"
            animate="visible"
            key={inspiration}
            variants={list}
        >
            <motion.div className="mb-2" variants={itemY}>
                <a
                    id="name"
                    className="hover-animation-dark inline text-[24px] text-red-500 font-bold"
                    href={data!.url !== "N/A" ? data!.url : ""}
                    target="_blank"
                    rel="noreferrer"
                >
                    {data!.name}
                </a>
            </motion.div>
            <motion.ul id="description" variants={itemY}>
                <p className="relative text-[18px] pr-0 mb-[10px] list-none before:absolute before:left-0 before:text-red-300  before:font-black">
                    {data!.description}
                </p>
            </motion.ul>
        </motion.div>
    );
};

export default InspirationInfo;
