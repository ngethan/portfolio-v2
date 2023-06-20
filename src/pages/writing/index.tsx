import type { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import React from "react";

import Navbar from "@/components/Navbar";
import Stars from "@/components/Stars";
import getBlogModel from "@/models/blog";

const ViewBlogPage = ({
    blogs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            <Navbar />
            <Stars />
            <section>
                <div className="relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
                    <div className="mb-[30px] max-w-[672px] text-left w-[672px]">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-200 mb-5 w-fit cursor-pointer font-serif text-6xl font-bold duration-150">
                            Writing
                        </h1>
                        <p className="text-2xl text-gray-300 italic font-serif mb-[20px]">
                            an anthology of my chaotic thoughts.
                        </p>
                        <hr className="border-gray-300 mb-[30px]" />
                        <div>
                            {blogs.map((blog: any, k: number) => (
                                <Link href={`/writing/${blog.slug}`} key={k}>
                                    <div className="group rounded-xl mb-[30px]">
                                        <h1 className="group-hover:text-primary-500 hover-animation-dark duration-300 font-bold text-gray-100 text-3xl font-serif w-fit">
                                            {blog.title}
                                        </h1>
                                        <h2 className="text-gray-300 text-xl font-serif italic">
                                            {blog.description}
                                        </h2>
                                        <p className="text-gray-300 font-serif rotate-90 w-fit relative -left-[50px] -top-[44px]">
                                            {new Date(
                                                blog.date
                                            ).toLocaleDateString("en-us", {
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewBlogPage;

export async function getServerSideProps() {
    try {
        const BlogModel = await getBlogModel();
        const blogs = await BlogModel.find();

        if (blogs.length === 0) {
            return {
                props: {
                    success: false,
                    message: "No blogs found!",
                },
            };
        }

        blogs.sort((a: any, b: any) => {
            return b.date - a.date;
        });

        return {
            props: {
                success: true,
                blogs: JSON.parse(JSON.stringify(blogs)),
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
