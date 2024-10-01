"use client";

import Image from "next/image";
import styles from "../../styles/photos.module.css";
import { useState, useEffect } from "react";

const ImageGrid = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const res = await fetch("/api/photos");
            const imageList = await res.json();
            setImages(imageList.reverse());
        };

        fetchImages();
    }, []);

    return (
        <div className={`${styles.gridContainer} mx-2 w-full`}>
            {images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                    <Image
                        src={`/assets/photos/${image}`}
                        alt={`Photo ${index + 1}`}
                        width={828}
                        height={1104}
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                        }}
                        placeholder="blur"
                        blurDataURL={`/assets/photos/${image}`}
                        className={styles.image}
                        loading={index < 2 ? "eager" : "lazy"}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
