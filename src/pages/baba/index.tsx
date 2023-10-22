import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const index = () => {
    return (
        <div className="items-center flex flex-col w-full h-[100vh] justify-center text-white">
            <Card className="p-5">
                <p className="mb-[20px]">are you baba?</p>
                <div className="flex">
                    <Button variant="default" className="mr-5">
                        <Link href="/baba/confirm/a">Yes</Link>
                    </Button>
                    <Button variant="destructive">
                        <Link href="/">No</Link>
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default index;
