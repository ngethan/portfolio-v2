import React from "react";

import Link from "next/link";

import Stars from "@/components/Stars";

const NotFoundPage = () => {
    return (
        <div className="h-[100vh] w-full">
            <Stars />
            <div className="flex h-[100vh] w-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-100">
                    Are you lost?&nbsp;
                    <Link href="/" className="text-primary-500 underline">
                        Return home.
                    </Link>
                </h1>
            </div>
        </div>
    );
};

export default NotFoundPage;
