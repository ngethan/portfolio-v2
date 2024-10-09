"use client";

import React from "react";

import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

import Stars from "@/components/layout/stars";

export default function WritingPage() {
    return (
        <div>
            <Stars />

            <section>
                <div className="relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
                    <div className="mx-auto mb-[30px] max-w-[672px] px-4 text-left">
                        <h1 className="mb-[10px] bg-gradient-to-r from-red-500 to-red-200 bg-clip-text font-serif text-5xl font-bold text-transparent">
                            Bacon, egg, and cheese
                        </h1>
                        <h2 className="mb-[30px] font-serif text-2xl text-gray-300">
                            I love bacon, egg, and cheese sandwiches
                        </h2>
                        <div className="mb-[20px] flex flex-row">
                            <p className="font-serif text-xl italic text-gray-300">
                                {new Date().toLocaleDateString("en-us", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                                &nbsp;•
                            </p>
                            <p className="font-serif text-xl italic text-gray-300">
                                &nbsp; 2468029 views
                            </p>
                        </div>
                        <hr className="mb-[30px] border-gray-300" />
                        <div className="mb-[50px] text-gray-300">
                            Bacon, egg, and cheese!
                        </div>
                        <Link href="/writing">
                            <span className="hover-circle float-left font-medium text-primary-500 hover:cursor-pointer hover:decoration-red-500">
                                <HiArrowNarrowLeft className="inline-block" />
                                Back
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* <div className="h-[100vh] w-full">
                    <div className="flex h-[100vh] w-full flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold text-gray-100">
                            Are you lost?&nbsp;
                            <Link
                                href="/"
                                className="text-primary-500 underline"
                            >
                                Return home.
                            </Link>
                        </h1>
                    </div>
                </div> */}
        </div>
    );
}
