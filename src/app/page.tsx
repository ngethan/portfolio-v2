import React from "react";

import { Metadata } from "next";

import LandingPage from "@/components/landing-page";

export const metadata: Metadata = {
    title: "Ethan Ng",
    description:
        "Ethan Ng is a software engineer who loves designing and building applications.",
};

const Page = () => {
    return <LandingPage />;
};

export default Page;
