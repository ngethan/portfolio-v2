import Image from "next/image";
import styles from "../../styles/photos.module.css";

const ImageGrid = ({ images }: { images: string[] }) => {
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
