import React, { useState } from "react";

import Image from "next/image";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import useSound from "use-sound";

import { Button } from "@/components/ui/button";
import image0 from "@/public/baba/image0.jpg";
import image1 from "@/public/baba/image1.jpg";
import image2 from "@/public/baba/image2.jpg";
import image3 from "@/public/baba/image3.jpg";
import image4 from "@/public/baba/image4.jpg";
import image5 from "@/public/baba/image5.jpg";
import image6 from "@/public/baba/image6.jpg";
import image7 from "@/public/baba/image7.jpg";

const Index = () => {
    const [playing, setPlaying] = useState(false);
    const [play, exposedData] = useSound("/baba/movin_out.mp3");
    return (
        <div className="flex w-full flex-col items-center">
            <div className="mt-[50px] w-[90vw] font-serif text-white md:w-[75vw]">
                <h1 className="mb-[30px] text-[50px] font-bold">Dear Ba,</h1>
                <div className="mb-[50px] space-y-[30px] text-[24px]">
                    <div className="flex flex-row justify-between">
                        <p>
                            Before we get started, click the button! (It&apos;ll
                            play music)
                        </p>
                        <Button
                            onClick={() => {
                                if (!playing) {
                                    play();
                                    setPlaying(true);
                                } else {
                                    exposedData.pause();
                                    setPlaying(false);
                                }
                            }}
                        >
                            {playing ? (
                                <BsPauseFill size={20} />
                            ) : (
                                <BsPlayFill size={20} />
                            )}
                        </Button>
                    </div>

                    <p>
                        Happy Birthday! 🎉 As the new college life at WashU
                        unfolds before me, with all the excitement and
                        challenges of <i>movin&apos; out</i>, I often find
                        myself reflecting on our moments together. I remember
                        the countless times I’d roll my eyes when you&apos;d
                        start one of your lectures on the most random of topics.
                        Funny how things change, because now, I find myself
                        missing those impromptu lessons. It&apos;s strange to
                        think that your words, which I sometimes took for
                        granted or considered background noise, have become the
                        echoes of wisdom I crave amidst the clamor of college
                        life.
                    </p>
                    <p>
                        Our bonding moments meant the world to me, and I cherish
                        them even more now, being miles away from home. I miss
                        watching stupid movies with you like Murder Mystery or
                        Barbie (which was especially stupid). I miss playing
                        pickleball with you. I miss bonding over Billy Joel in
                        the car. I miss going out and enjoying great food
                        together. These memories keep me grounded and remind me
                        of where I come from and the values you instilled in me.
                        I can&apos;t thank you enough for shaping the person I
                        am today.
                    </p>
                    <p className="mb-[10px]">
                        On this special day of yours, I want you to know how
                        much you mean to me. Every lecture, every song, every
                        word of wisdom –- they all matter. They always have, and
                        they always will. Happy birthday, and here&apos;s to
                        many more! Look forward to seeing you guys soon!
                    </p>
                    <p>
                        Love,
                        <br />
                        Ethan
                    </p>
                    <p>P.S. Keep scrolling for some images</p>
                </div>
            </div>
            <div className="flex w-[90vw] flex-col items-center space-y-5 overflow-x-scroll md:flex-row md:space-x-5">
                <Image
                    src={image4.src}
                    alt=""
                    className="max-w-[100%] object-contain"
                    width={300}
                    height={50}
                />
                <Image
                    src={image7.src}
                    alt=""
                    className="max-w-[100%] object-contain"
                    width={300}
                    height={50}
                />
                <Image
                    src={image6.src}
                    alt=""
                    className="max-w-[100%] object-contain"
                    width={300}
                    height={50}
                />
                <Image
                    src={image5.src}
                    alt=""
                    className="max-w-[100%] object-contain"
                    width={300}
                    height={50}
                />

                <Image
                    src={image3.src}
                    alt=""
                    className="max-w-[100%] object-contain"
                    width={300}
                    height={50}
                />
                <Image
                    src={image2.src}
                    alt=""
                    className="max-w-[100%] object-contain"
                    width={300}
                    height={50}
                />
                <Image
                    src={image1.src}
                    alt=""
                    className="max-w-[100%] object-contain"
                    width={300}
                    height={50}
                />
                <Image
                    src={image0.src}
                    alt=""
                    className="max-w-[100%] object-contain"
                    width={300}
                    height={50}
                />
            </div>
        </div>
    );
};

export default Index;
