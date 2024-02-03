"use client";

import React from "react";

import Link from "next/link";

import Stars from "@/components/Stars";

const failed = () => {
    return (
        <div className="h-[100vh] w-full">
            <Stars />
            <div className="flex h-[100vh] w-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-100">
                    you failed!&nbsp;
                    <Link href="/baba" className="text-primary-500 underline">
                        try again
                    </Link>
                </h1>
            </div>
        </div>
    );
};

export default failed;
