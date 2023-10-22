import Link from "next/link";
import React from "react";

import Stars from "@/components/Stars";

const failed = () => {
    return (
        <div className="w-full h-[100vh]">
            <Stars />
            <div className="w-full h-[100vh] flex justify-center items-center flex-col">
                <h1 className="text-gray-100 text-3xl font-bold">
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
