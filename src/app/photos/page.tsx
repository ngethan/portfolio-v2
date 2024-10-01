import React from "react";
import ImageGrid from "../../components/ui/image-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photos",
};

const Page = () => {
    return (
        <div className="my-2 w-full">
            <ImageGrid />
        </div>
    );
};

export default Page;
