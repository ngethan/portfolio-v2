import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

import CRNavbar from "@/components/CRNavbar";

import dog1 from "../../assets/dog1.jpg";
import dog2 from "../../assets/dog2.jpg";
import dog3 from "../../assets/dog3.jpg";
import dog4 from "../../assets/dog4.jpg";
import dog5 from "../../assets/dog5.jpg";
import dog6 from "../../assets/dog6.jpg";
import dog7 from "../../assets/dog7.jpg";
import dog8 from "../../assets/dog8.jpg";
import dog9 from "../../assets/dog9.jpg";
import dog10 from "../../assets/dog10.jpg";

const images = [dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8, dog9, dog10];

interface Props {
    index: number;
}

const DogImg = ({ index }: Props) => {
    return (
        <div className="m-auto">
            <Image
                className="max-h-[300px] w-auto"
                src={images[index]!.src}
                alt={`dog image ${index}`}
                width={500}
                height={500}
            />
        </div>
    );
};

const Dogs = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const list = {
        visible: {
            opacity: 1,
            transition: {
                delay: 1.1,
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

    const item = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const handleLeftClick = () => {
        if (carouselIndex === 0) {
            setCarouselIndex(9);
        } else {
            setCarouselIndex(carouselIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (carouselIndex === 9) {
            setCarouselIndex(0);
        } else {
            setCarouselIndex(carouselIndex + 1);
        }
    };
    return (
        <div>
            <Head>
                <title>Ethan Ng - Dogs</title>
            </Head>
            <CRNavbar dPage={true} />
            <motion.div
                id="dogs"
                className="ml-72 px-4  flex -z-[1] flex-row"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <div className="mr-[100px] max-w-[500px] ">
                    <motion.div
                        className="text-7xl sm:text-8xl flex text-gray-100 mt-52 mb-10 font-bold max-w-[425.2px]"
                        variants={item}
                    >
                        <h1>
                            {"Dogs".split("").map((letter, index) => {
                                return (
                                    <span
                                        className="duration-300 inline align-top hover:text-red-500 border-b-[2px] border-red-500"
                                        key={index}
                                    >
                                        {letter}
                                    </span>
                                );
                            })}
                        </h1>
                    </motion.div>
                    <motion.p
                        className="text-gray-200 w-full text-lg"
                        variants={item}
                    >
                        I have two dogs: Baxter, a 5 year old maltese, and
                        Benji, a 2 year old toy poodle. Ironically, I&apos;m
                        allergic to dogs which is why both of them are
                        hypoallergenic.
                    </motion.p>
                </div>
                <div className="w-full mt-24">
                    <div className="justify-center flex pt-[100px] flex-col">
                        <DogImg index={carouselIndex} />
                        <div className="flex justify-center">
                            <button onClick={handleLeftClick}>
                                <BsArrowLeftShort
                                    className="text-gray-200 hover:text-red-500 duration-300"
                                    size={64}
                                />
                            </button>
                            <button onClick={handleRightClick}>
                                <BsArrowRightShort
                                    className="text-gray-200 hover:text-red-500 duration-300"
                                    size={64}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Dogs;
