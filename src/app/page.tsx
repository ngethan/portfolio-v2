"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
    // useEffect(() => {
    //     const lenis = new Lenis();

    //     lenis.on("scroll", ScrollTrigger.update);

    //     gsap.ticker.add((time) => {
    //         lenis.raf(time * 1000);
    //     });

    //     gsap.ticker.lagSmoothing(0);
    // });

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
