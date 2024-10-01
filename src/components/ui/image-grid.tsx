"use client";

import Image from "next/image";
import styles from "../../styles/photos.module.css";
import { memo } from "react";

interface ImageGridProps {
    images: { filename: string; base64: string }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    return (
        <div className={`${styles.gridContainer} mx-2 w-full`}>
            {images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                    <MemoizedImage
                        src={`/assets/photos/${image.filename}`}
                        alt={`Photo ${index + 1}`}
                        width={828}
                        height={1104}
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                        }}
                        placeholder={image.base64 ? "blur" : "empty"}
                        blurDataURL={image.base64}
                        className={styles.image}
                        loading="eager"
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;

const MemoizedImage = memo(Image);
