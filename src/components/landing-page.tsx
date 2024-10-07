"use client";

import React from "react";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Socials from "@/components/layout/socials";
import Stars from "@/components/layout/stars";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Home from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Work from "@/components/sections/work";
import Cursor from "@/components/ui/cursor";

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Cursor />
            <Stars />
            <Home />
            <About />
            <Skills />
            <Work />
            <Contact />
            <Socials />
            <Footer />
        </>
    );
};

export default LandingPage;
