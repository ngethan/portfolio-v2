"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-[#FBA5A0]">
            <img src="/hearts.png" alt="hearts" width={300} height={300} />
            <Card className="mt-10 h-[400px] border-none bg-transparent">
                <CardHeader>
                    <CardTitle className="text-4xl text-white">
                        Will you be my valentine??
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center space-x-6">
                    <Button
                        className="mr-[200px] rounded-lg bg-green-500 px-8 py-8 font-sans text-2xl font-bold hover:border-green-600 hover:bg-green-400"
                        onClick={() => router.push("/valentine/accepted")}
                    >
                        YES!!!!!
                    </Button>
                    <Button
                        className="absolute left-[52%] top-[50.5%] rounded-lg px-8 py-8 font-sans text-[8px]"
                        variant="destructive"
                        onMouseOver={(e) => {
                            const RandomX = Math.random() * 90 + "%";
                            const RandomY = Math.random() * 92 + "%";
                            (e.target as HTMLElement).style.left = RandomX;
                            (e.target as HTMLElement).style.top = RandomY;
                        }}
                    >
                        no
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default page;
