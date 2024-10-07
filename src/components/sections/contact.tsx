import React, { useEffect, useState } from "react";

import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";

const Contact = () => {
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
                delay: 0.09,
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

    useEffect(() => {
        if (typeof document.getElementById("name") !== null) {
            document.getElementById("name")!.addEventListener("focus", () => {
                document.getElementById("name-label")!.style.top = "0px";
            });

            document.getElementById("name")!.addEventListener("blur", (e) => {
                if ((e.target as any).value?.trim().length === 0)
                    document.getElementById("name-label")!.style.top = "40px";
                document.getElementById("name-label")!.style.fontSize = "24px";
            });
        }

        if (typeof document.getElementById("email") !== null) {
            document.getElementById("email")!.addEventListener("focus", () => {
                document.getElementById("email-label")!.style.top = "0px";
            });

            document.getElementById("email")!.addEventListener("blur", (e) => {
                if ((e.target as any).value?.trim().length === 0)
                    document.getElementById("email-label")!.style.top = "40px";
            });
        }

        if (typeof document.getElementById("message") !== null) {
            document
                .getElementById("message")!
                .addEventListener("focus", () => {
                    document.getElementById("message-label")!.style.top = "0px";
                });

            document
                .getElementById("message")!
                .addEventListener("blur", (e) => {
                    if ((e.target as any).value?.trim().length === 0)
                        document.getElementById("message-label")!.style.top =
                            "40px";
                });
        }
    }, []);

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
        email: "",
        message: "",
    });
    const handleServerResponse = (ok: any, msg: any) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg },
            });
            setInputs({
                email: "",
                message: "",
            });
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg },
            });
        }
    };
    const handleOnChange = (e: any) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: "POST",
            url: "https://formspree.io/f/moqoawvl",
            data: inputs,
        })
            .then(() => {
                handleServerResponse(
                    true,
                    "Thank you, your message has been submitted."
                );
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
    };

    if (status.submitted) {
        return (
            <div
                id="contact"
                className="mx-auto flex h-screen w-full max-w-[1075px] flex-col bg-transparent px-4 py-[100px] text-gray-200"
                ref={ref}
            >
                <div className="flex text-7xl font-bold text-gray-100 sm:text-8xl ">
                    <h1 className="mb-[40px] inline-block align-top text-4xl duration-300 hover:text-primary-500">
                        Thanks for your message!
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <section id="contact">
            <motion.div
                className="mx-auto flex h-screen w-full max-w-[1075px] flex-col px-4 py-[100px] text-gray-200"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <motion.div
                    className="flex text-7xl font-bold text-gray-100 sm:text-8xl "
                    variants={itemY}
                >
                    <Title text="Contact" />
                </motion.div>

                <form
                    id="contact_form"
                    className="inline-flex w-full flex-wrap justify-between font-mono"
                    method="post"
                    onSubmit={handleOnSubmit}
                    name="contact"
                    aria-label="Contact"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <motion.div
                        className="mb-[30px] mr-[3%] inline-block flex-[1_1_40%]"
                        variants={itemY}
                    >
                        <label
                            id="name-label"
                            htmlFor="name"
                            className="label relative top-10 text-[24px] text-primary-500 duration-300"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleOnChange}
                            className="input relative text-[18px]"
                            required
                        />
                    </motion.div>
                    <motion.div
                        className="mb-[30px] ml-[3%] inline-block flex-[1_1_40%]"
                        variants={itemY}
                    >
                        <label
                            id="email-label"
                            htmlFor="email"
                            className="relative top-10 text-[24px] text-primary-500 duration-300"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleOnChange}
                            className="input relative text-[18px]"
                            required
                        />
                    </motion.div>
                    <motion.div
                        className="mb-[40px] inline-block w-full"
                        variants={itemY}
                    >
                        <label
                            id="message-label"
                            htmlFor="message"
                            className="relative top-10 text-[24px] text-primary-500 duration-300"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            onChange={handleOnChange}
                            className="input relative h-[88px] py-[8px] text-[18px]"
                            required
                        ></textarea>
                    </motion.div>

                    <motion.div variants={itemY}>
                        <Button
                            id="submit"
                            type="submit"
                            disabled={status.submitting}
                            size="lg"
                            aria-label="Send message"
                            arrowAnimation
                            childtext="SEND MESSAGE"
                        >
                            {" "}
                            {!status.submitting
                                ? !status.submitted
                                    ? "SEND MESSAGE"
                                    : "SENT MESSAGE!"
                                : "SENDING..."}
                        </Button>
                    </motion.div>
                </form>
                {status.info.error && (
                    <div className="error">Error: {status.info.msg}</div>
                )}
                {!status.info.error && status.info.msg && (
                    <p className="text-xl font-bold text-red-500">
                        {status.info.msg}
                    </p>
                )}
            </motion.div>
        </section>
    );
};

export default Contact;
