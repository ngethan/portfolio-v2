import Head from "next/head";

import About from "@/components/About";
import Contact from "@/components/Contact";
import CRNavbar from "@/components/CRNavbar";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Inspirations from "@/components/Inspirations/Inspirations";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Stars from "@/components/Stars";
import Work from "@/components/Work/Work";

const cr = () => {
    return (
        <div>
            <Head>
                <title>Ethan Ng</title>
            </Head>
            <CRNavbar />
            <Cursor />
            <Stars />
            <Home />
            <About />
            <Inspirations />
            <Skills />
            <Work />
            <Contact />
            <Footer />
            <Socials />
        </div>
    );
};

export default cr;
