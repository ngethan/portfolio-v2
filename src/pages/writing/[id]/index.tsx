/* eslint-disable no-nested-ternary */
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next";
import Link from "next/link";
import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

import Stars from "@/components/Stars";
import getBlogModel from "@/models/blog";

const ViewBlogPage = ({
    success,
    title,
    description,
    content,
    date,
    views,
    hidden,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const styles = {
        h1: "font-serif text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-200",
        h2: "font-serif text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-200",
        h3: "font-serif text-xl text-gray-100",
        p: "text-lg font-serif",
        span: "text-lg font-serif",
        quote: "text-gray-100 font-code italic font-serif bg-gray-800 rounded-lg px-2 py-1",
        code: "text-gray-100 font-code bg-gray-800 font-code rounded-lg px-2 py-1",
        link: "text-gray-100 underline decoration-gray-500 hover:decoration-gray-300 duration-300",
        underline:
            "underline decoration-gray-300 hover:decoration-gray-100 duration-300",
    };
    return (
        <div>
            <Stars />

            {success && !hidden ? (
                <section>
                    <div className="relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
                        <div className="mb-[30px] max-w-[672px] text-left w-[672px]">
                            <h1 className="text-transparent text-5xl font-bold font-serif mb-[10px] bg-clip-text bg-gradient-to-r from-red-500 to-red-200">
                                {title}
                            </h1>
                            <h2 className="text-gray-300 font-serif text-2xl mb-[30px]">
                                {description}
                            </h2>
                            <div className="flex flex-row mb-[20px]">
                                <p className="text-gray-300 text-xl font-serif italic">
                                    {new Date(date).toLocaleDateString(
                                        "en-us",
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )}
                                    &nbsp;•
                                </p>
                                <p className="text-gray-300 text-xl font-serif italic">
                                    &nbsp;
                                    {views} views
                                </p>
                            </div>
                            <hr className="border-gray-300 mb-[30px]" />
                            <div className="mb-[50px] text-gray-300">
                                {content.map((c: any, i: number) =>
                                    c.type === "break" ? (
                                        React.createElement("br")
                                    ) : c.type === "link" ? (
                                        <Link
                                            href={c.href}
                                            className={styles.link}
                                        >
                                            {c.text
                                                ? c.text
                                                : c.content.map(
                                                      (d: any, k: number) =>
                                                          d.type === "break"
                                                              ? React.createElement(
                                                                    "br"
                                                                )
                                                              : React.createElement(
                                                                    d.type,
                                                                    {
                                                                        className: `${
                                                                            d.className
                                                                                ? `${d.className} `
                                                                                : ""
                                                                        }${
                                                                            (
                                                                                styles as any
                                                                            )[
                                                                                d
                                                                                    .type
                                                                            ] ||
                                                                            styles.p
                                                                        }${
                                                                            d.underline
                                                                                ? ` ${styles.underline}`
                                                                                : ""
                                                                        }`,
                                                                        key: k,
                                                                    },
                                                                    d.text
                                                                )
                                                  )}
                                        </Link>
                                    ) : (
                                        React.createElement(
                                            c.type,
                                            {
                                                className: `${
                                                    c.className
                                                        ? `${c.className} `
                                                        : ""
                                                }${
                                                    (styles as any)[c.type] ||
                                                    styles.p
                                                }${
                                                    c.underline
                                                        ? ` ${styles.underline}`
                                                        : ""
                                                }`,
                                                key: i,
                                            },
                                            c.text
                                        )
                                    )
                                )}
                            </div>
                            <Link href="/writing">
                                <span className="hover-circle text-primary-500 hover:cursor-pointer font-medium underline float-left hover:decoration-red-500 decoration-red-300 duration-300">
                                    <HiArrowNarrowLeft className="inline-block" />
                                    Back
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            ) : (
                <div className="w-full h-[100vh]">
                    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
                        <h1 className="text-gray-100 text-3xl font-bold">
                            Are you lost?&nbsp;
                            <Link
                                href="/"
                                className="text-primary-500 underline"
                            >
                                Return home.
                            </Link>
                        </h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewBlogPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const BlogModel = await getBlogModel();
        const { id } = context.query;
        const blog =
            (await BlogModel.findOne({
                slug: id as string,
            })) || (await BlogModel.findById(id as string));

        if (!blog) {
            return {
                props: {
                    success: false,
                    message: "Blog not found!",
                },
            };
        }

        const newBlog = JSON.parse(JSON.stringify(blog));

        return {
            props: {
                success: true,
                ...newBlog,
            },
        };
    } catch (e) {
        return {
            props: {
                success: false,
                message: "An error occurred! Please try again later.",
            },
        };
    }
}