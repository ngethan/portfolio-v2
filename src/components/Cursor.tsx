import React, { useEffect, useRef } from "react";

const Cursor = () => {
    const delay = 5;
    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);

    const endX = useRef(0);
    const endY = useRef(0);
    const x = useRef(0);
    const y = useRef(0);

    const requestRef = useRef(null as any);

    const dot = useRef(null as any);
    const dotOutline = useRef(null as any);

    const toggleCursorVisibility = () => {
        if (cursorVisible.current) {
            dot.current.style.opacity = 1;
            dotOutline.current.style.opacity = 1;
        } else {
            dot.current.style.opacity = 0;
            dotOutline.current.style.opacity = 0;
        }
    };

    const toggleCursorSize = () => {
        if (cursorEnlarged.current) {
            dot.current.style.transform = "translate(-50%, -50%) scale(0.75)";
            dotOutline.current.style.transform =
                "translate(-50%, -50%) scale(1.25)";
        } else {
            dot.current.style.transform = "translate(-50%, -50%) scale(1)";
            dotOutline.current.style.transform =
                "translate(-50%, -50%) scale(1)";
        }
    };

    const mouseOverEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
    };

    const mouseOutEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
    };

    const mouseEnterEvent = () => {
        cursorVisible.current = true;
        toggleCursorVisibility();
    };

    const mouseExitEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
    };

    const mouseMoveEvent = (e: MouseEvent) => {
        cursorVisible.current = true;
        toggleCursorVisibility();

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
            dot.current.style.backgroundColor = "transparent";

            dotOutline.current.style.width = "50px";
            dotOutline.current.style.height = "50px";
            dotOutline.current.style.borderColor = "#E8313F";
            dotOutline.current.style.backgroundColor = "transparent";
        } else {
            dot.current.style.width = "13px";
            dot.current.style.height = "13px";
            dot.current.style.backgroundColor = "#F1838B";
            dot.current.style.borderColor = "transparent";
            dot.current.style.borderRadius = "50%";

            dotOutline.current.style.width = "40px";
            dotOutline.current.style.height = "40px";
            dotOutline.current.style.borderColor = "transparent";
            dotOutline.current.style.backgroundColor = "transparent";
        }
    };

    const animateDotOutline = () => {
        x.current += (endX.current - x.current) / delay;
        y.current += (endY.current - y.current) / delay;

        dot.current.style.left = `${x.current}px`;
        dot.current.style.top = `${y.current}px`;

        dotOutline.current.style.left = `${x.current}px`;
        dotOutline.current.style.top = `${y.current}px`;

        requestRef.current = requestAnimationFrame(animateDotOutline);
    };

    useEffect(() => {
        document.addEventListener("mousedown", mouseOverEvent);
        document.addEventListener("mouseup", mouseOutEvent);
        document.addEventListener("mousemove", mouseMoveEvent);
        document.addEventListener("mouseenter", mouseEnterEvent);
        document.addEventListener("leave", mouseExitEvent);

        animateDotOutline();

        return () => {
            document.removeEventListener("mousedown", mouseOverEvent);
            document.removeEventListener("mouseup", mouseOutEvent);
            document.removeEventListener("mousemove", mouseMoveEvent);
            document.removeEventListener("mouseenter", mouseEnterEvent);
            document.removeEventListener("leave", mouseExitEvent);

            cancelAnimationFrame(requestRef.current);
        };
    });

    return (
        <div
            className={
                // eslint-disable-next-line no-nested-ternary
                typeof navigator !== "undefined"
                    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                          navigator.userAgent
                      )
                        ? "hidden"
                        : "relative top-0 z-[1000]"
                    : ""
            }
        >
            <div ref={dotOutline} className="cursor-dot-outline"></div>
            <div ref={dot} className="cursor-dot"></div>
        </div>
    );
};

export default Cursor;
