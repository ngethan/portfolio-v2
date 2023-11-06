"use client";

import React, { useEffect, useRef } from "react";

const Cursor = () => {
    const delay = 5;

    const endX = useRef(0);
    const endY = useRef(0);
    const x = useRef(0);
    const y = useRef(0);

    const requestRef = useRef(null as any);

    const dot = useRef(null as any);

    const mouseMoveEvent = (e: MouseEvent) => {
        endX.current = e.clientX;
        endY.current = e.clientY;

        const q = document.querySelectorAll(":hover");
        const elType = q[q.length - 1]!.tagName;
        if (
            q[7]?.tagName === "A" ||
            ["LI", "A", "BUTTON", "H1", "svg", "path", "SPAN"].includes(
                elType
            ) ||
            q[q.length - 1]!.classList[0] === "skill"
        ) {
            dot.current.style.transform = "scale(3)";
            dot.current.style.width = "13px";
            dot.current.style.height = "13px";
            dot.current.style.backgroundColor = "rgba(255,255,255,0.5)";
        } else {
            dot.current.style.transform = "scale(1)";
            dot.current.style.opacity = "1";
            dot.current.style.width = "13px";
            dot.current.style.height = "13px";
            dot.current.style.backgroundColor = "#fb7185";
        }
    };

    const animateDotOutline = () => {
        x.current += (endX.current - x.current) / delay;
        y.current += (endY.current - y.current) / delay;

        dot.current.style.left = `${x.current - 6}px`;
        dot.current.style.top = `${y.current - 7}px`;

        requestRef.current = requestAnimationFrame(animateDotOutline);
    };

    useEffect(() => {
        document.addEventListener("mousemove", mouseMoveEvent);

        animateDotOutline();

        return () => {
            document.removeEventListener("mousemove", mouseMoveEvent);

            cancelAnimationFrame(requestRef.current);
        };
    });

    return (
        <div
            id="cursor-container"
            className="relative top-0 z-[999] hidden md:block"
        >
            <div ref={dot} className="cursor-dot"></div>
        </div>
    );
};

export default Cursor;
