/* eslint-disable no-nested-ternary */
import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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
                className="py-[100px] bg-transparent text-gray-200 w-full max-w-[1075px] mx-auto h-screen px-4 flex flex-col"
                ref={ref}
            >
                <div className="text-7xl sm:text-8xl flex text-gray-100 font-bold ">
                    <h1 className="hover:text-primary-500 text-4xl mb-[40px] duration-300 inline-block align-top">
                        Thanks for your message!
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            id="contact"
            className="py-[100px] text-gray-200 w-full max-w-[1075px] mx-auto h-screen px-4 flex flex-col"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.div
                className="text-7xl sm:text-8xl flex text-gray-100 font-bold "
                variants={itemY}
            >
                <h1>
                    {["C", "o", "n", "t", "a", "c", "t"].map(
                        (letter, index) => {
                            return (
                                <span
                                    className="hover:text-primary-500 border-primary-500 text-4xl mb-[40px] duration-300 inline-block align-top border-b-[2px]"
                                    key={index}
                                >
                                    {letter}
                                </span>
                            );
                        }
                    )}
                </h1>
            </motion.div>

            <form
                id="contact_form"
                className="font-code inline-flex flex-wrap justify-between w-full"
                method="post"
                onSubmit={handleOnSubmit}
                name="contact"
                aria-label="Contact"
            >
                <input type="hidden" name="form-name" value="contact" />
                <motion.div
                    className="inline-block flex-[1_1_40%] mr-[3%] mb-[30px]"
                    variants={itemY}
                >
                    <label
                        id="name-label"
                        htmlFor="name"
                        className="label text-primary-500 relative text-[24px] top-10 duration-300"
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
                    className="inline-block flex-[1_1_40%] ml-[3%] mb-[30px]"
                    variants={itemY}
                >
                    <label
                        id="email-label"
                        htmlFor="email"
                        className="text-primary-500 relative text-[24px] top-10 duration-300"
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
                    className="inline-block w-full mb-[40px]"
                    variants={itemY}
                >
                    <label
                        id="message-label"
                        htmlFor="message"
                        className="text-primary-500 relative text-[24px] top-10 duration-300"
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

                <motion.button
                    id="submit"
                    className="font-code text-primary-400 border-primary-400 hover:bg-primary-300/[.3] text-lg border-2 rounded-lg px-4 py-2 my-2 flex items-center duration-300"
                    type="submit"
                    disabled={status.submitting}
                    variants={itemY}
                    aria-label="Send message"
                >
                    {!status.submitting
                        ? !status.submitted
                            ? "Send message"
                            : "Sent message!"
                        : "Sending message..."}{" "}
                </motion.button>
            </form>
            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
                <p className="text-red-500 font-bold text-xl">
                    {status.info.msg}
                </p>
            )}
        </motion.div>
    );
};

export default Contact;
