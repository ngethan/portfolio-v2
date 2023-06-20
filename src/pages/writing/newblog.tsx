import axios from "axios";
import React from "react";

const handleSubmit = () => {
    axios
        .post("/api/writing/post", {
            title: "Painting with the internet",
            description: "Reflecting on the past and looking forward.",
            content: [
                {
                    type: "span",
                    text: "Over the past year, I've started to ",
                },
                {
                    type: "span",
                    text: "experiment with user interfaces",
                    underline: true,
                },
                {
                    type: "span",
                    text: " after growing tired of recycling and building the same shit again and again. The intention was never to really undermine, oppose, or conduct meaningful change, but rather to tinker, have fun, and provoke an emotion.",
                },
                { type: "break" },
                { type: "break" },
                {
                    type: "span",
                    text: "There's just something very exciting in building novel stuff ",
                },
                {
                    type: "span",
                    text: "just for fun",
                    className: "italic",
                },
                {
                    type: "span",
                    text: ". It feels very much like a returns to the roots back when I was entering this magical, technological world of infinite possibilities. I had actually tried to become a designer at first but failed. Sitting down and working with drawing tools just didn't click for me. It felt very static, foreign, and especially intimidating to stare at a blank canvas.",
                },
                { type: "break" },
                { type: "break" },
                {
                    type: "span",
                    text: "After being rejected a couple of times, I decided I would just build my own designs, instead. Blasting up ",
                },
                {
                    type: "link",
                    text: "CodePen",
                    href: "https://web.archive.org/web/20220331045627/https://codepen.com",
                },
                {
                    type: "span",
                    text: " 5 years ago I had no idea what kind of a path I set myself on.",
                },
            ],
            date: Date.now(),
            metadata: {},
            views: 100,
            slug: "painting-with-the-internet",
            hidden: false,
        })
        .catch();
};

// const handleSubmit = () => {
//     console.log("hi");
//     axios
//         .delete("/api/writing/delete/64836d1a8802e165c49dd216", {})
//         .then((res) => {
//             console.log(res.data.message);
//         })
//         .catch((err) => {
//             console.error(err);
//         });
// };

const newblog = () => {
    return (
        <div>
            <button onClick={handleSubmit} className="text-gray-100">
                create new blog
            </button>
        </div>
    );
};

export default newblog;
