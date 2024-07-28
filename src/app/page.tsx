"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Stars from "@/components/Stars";
import Work from "@/components/Work/Work";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";

const Index = () => {
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

export default Index;
