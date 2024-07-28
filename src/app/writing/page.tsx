"use client";

import Link from "next/link";
import React,  from "react";

import Navbar from "@/components/Navbar";
import Stars from "@/components/Stars";

const Writing = () => {
  const blogs = [
    {
      title: "Bacon, egg, and cheese",
      description: "I love bacon, egg, and cheese sandwiches",
      date: new Date(),
      slug: "baconeggncheese",
    },
  ];

  return (
    <div>
      <Navbar />
      <Stars />
      <section>
        <div className="relative flex min-h-screen flex-col justify-center py-12 text-center w-[80%]">
          <div className="mx-auto mb-[30px] max-w-[672px] px-4 text-left">
            <h1 className="mb-3 h-[64px] w-fit cursor-pointer bg-gradient-to-r from-red-500 to-red-200 bg-clip-text font-serif text-6xl font-bold text-transparent duration-150">
              Writing
            </h1>
            <p className="mb-[20px] font-serif text-2xl italic text-gray-300">
              an anthology of my chaotic thoughts.
            </p>
            <hr className="mb-[30px] border-gray-300" />
            <div>
              {blogs.map((blog: any, k: number) => (
                <Link href={`/writing/${blog.slug}`} key={k}>
                  <div className="group mb-[30px] rounded-xl">
                    <h1 className="hover-animation-dark w-fit font-serif text-3xl font-bold text-gray-100 duration-300 group-hover:text-primary-500">
                      {blog.title}
                    </h1>
                    <h2 className="font-serif text-xl italic text-gray-300">
                      {blog.description}
                    </h2>
                    <p className="relative -left-[50px] -top-[44px] w-fit rotate-90 font-serif text-gray-300">
                      {new Date(
                        blog.date
                      ).toLocaleDateString("en-us", {
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Writing;
