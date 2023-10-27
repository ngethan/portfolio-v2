import Link from "next/link";
import React from "react";

import Stars from "@/components/Stars";

const NotFoundPage = () => {
  return (
    <div className="w-full h-[100vh]">
      <Stars />
      <div className="w-full h-[100vh] flex justify-center items-center flex-col">
        <h1 className="text-gray-100 text-3xl font-bold">
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
