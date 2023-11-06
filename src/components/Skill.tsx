import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
    name: string;
    icon: IconType;
    noName?: boolean;
}

const Skill = ({ name, icon, noName }: Props) => {
    const Icon = icon as React.ElementType;

    const itemY = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div variants={itemY}>
            <div
                className={
                    !noName
                        ? "group mb-[20px] mr-[50px] h-[75px] transform-gpu justify-center rounded-lg bg-[#1b1c1b] px-[10px] shadow-lg shadow-gray-100/[.4] duration-300 hover:scale-[1.12] hover:shadow-primary-500/[.8]"
                        : "group z-0 mb-[20px] mr-[20px] h-[60px] transform-gpu justify-center rounded-lg bg-[#1b1c1b] px-[10px] shadow-lg shadow-gray-100/[.4] duration-300 hover:scale-[1.12] hover:shadow-primary-500/[.8]"
                }
            >
                <p
                    className={
                        noName
                            ? "invisible fixed bottom-[60px] left-[50%] z-[100] h-[20] w-fit -translate-x-1/2 rounded-lg bg-gray-700 px-[10px] text-gray-200 opacity-0 duration-300 group-hover:visible group-hover:opacity-100"
                            : "invisible fixed"
                    }
                >
                    {name}
                </p>
                <div
                    className={
                        !noName
                            ? "skill flex h-[75px] w-fit flex-row items-center font-mono text-gray-200"
                            : "skill flex h-[60px] w-fit flex-row items-center font-mono text-gray-200"
                    }
                >
                    <Icon
                        size={!noName ? 50 : 30}
                        className="duration-300 group-hover:text-primary-300"
                    />
                    {!noName ? (
                        <h1 className="float-right ml-[20px] text-[20px] duration-300 group-hover:text-primary-300">
                            {name}
                        </h1>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Skill;
