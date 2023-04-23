import React from "react";

import CRNavbar from "@/components/CRNavbar";

const Satire = () => {
    return (
        <div>
            <CRNavbar />
            <div className="text-white flex flex-row w-full items-center h-[80vh]">
                <div className="items-center flex justify-center flex-col w-[50%]">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/nI3AfaLyl-Y"
                        title="Deception - Creative Writing Satirical Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="mb-[30px] text-center max-w-[75%]">
                        <h1 className="font-bold text-3xl">Deception</h1>
                        <p>
                            After all his students but one cut on test day, Dr.
                            D decides to crack down on his students but he
                            underestimates the lengths they will go to maintain
                            their grades…
                        </p>
                    </div>
                </div>
                <div className="items-center flex flex-col justify-center max-w-[75%]">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ZEwCtfyyhEQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div>
                        <h1 className="font-bold text-3xl text-center">
                            Video Reflection of &quot;Deception&quot;
                        </h1>
                        <p>
                            View this short film in which the
                            &quot;Deception&quot; group shares what they learned
                            during the satire unit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Satire;
