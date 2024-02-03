"use client";

import React from "react";

const page = () => {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-[#FBA5A0]">
            <img src="/thumbs_up.png" alt="hearts" width={300} height={300} />
            <div>
                <h1 className="text-5xl font-bold text-white">YAY!!!</h1>
                <p className="text-sm text-[#E19490]">wanna fuck???</p>
            </div>
            <div className="block md:hidden">
                <img
                    src="/flowers.png"
                    className={`absolute right-[29.375186357353304%] top-[10%] m-auto block max-h-[100%] w-auto max-w-[100%] p-0`}
                    alt="hearts"
                />

                <img
                    src="/flowers.png"
                    className={`absolute left-[15.844245538935624%] top-[0%] m-auto block max-h-[100%] w-auto max-w-[100%] p-0`}
                    alt="hearts"
                />
                <img
                    src="/flowers.png"
                    className={`absolute left-[32.196736215085444%] top-[5%] m-auto block max-h-[100%] w-auto max-w-[100%] p-0`}
                    alt="hearts"
                />
                <img
                    src="/flowers.png"
                    className={`absolute left-[32.196736215085444%] top-[70%] m-auto block max-h-[100%] w-auto max-w-[100%] p-0`}
                    alt="hearts"
                />
                <img
                    src="/flowers.png"
                    className={`absolute right-[20%] top-[80%] m-auto block max-h-[100%] w-auto max-w-[100%] p-0`}
                    alt="hearts"
                />
            </div>
            <div className="hidden md:block">
                <img
                    src="/flowers.png"
                    className={`absolute left-[62.5224764438923%] top-[26.52723705329056%]`}
                    alt="hearts"
                />
                <img
                    src="/flowers.png"
                    className={`absolute left-[29.375186357353304%] top-[17.653117241531383%]`}
                    alt="hearts"
                />
                <img
                    src="/flowers.png"
                    className={`absolute left-[60.49289665134205%] top-[38.071249480382185%]`}
                    alt="hearts"
                />
                <img
                    src="/flowers.png"
                    className={`absolute left-[15.844245538935624%] top-[20.23300741118758%]`}
                    alt="hearts"
                />
                <img
                    src="/flowers.png"
                    className={`absolute left-[32.196736215085444%] top-[12.98810565781861%]`}
                    alt="hearts"
                />
                <img
                    src="/flowers.png"
                    className={`absolute left-[49.302014292618075%] top-[10.108327273408166%]`}
                    alt="hearts"
                />
            </div>
        </div>
    );
};

export default page;
