import Image from "next/image";
import path from "path";
import sharp from "sharp";
import styles from "../../styles/photos.module.css";

const getBase64FromImage = async (
    imagePath: string
): Promise<string | null> => {
    try {
        const data = await sharp(imagePath).resize({ width: 20 }).toBuffer();
        return `data:image/jpeg;base64,${data.toString("base64")}`;
    } catch (error) {
        console.error(`Error generating Base64 for ${imagePath}:`, error);
        return null;
    }
};

const ImageGrid = async ({ images }: { images: string[] }) => {
    const photosDir = path.join(process.cwd(), "public/assets/photos");

    const base64Images = await Promise.all(
        images.map(async (image) => {
            const imagePath = path.join(photosDir, image);
            const base64 = await getBase64FromImage(imagePath);
            return { filename: image, base64 };
        })
    );

    return (
        <div className={`${styles.gridContainer} mx-2 w-full`}>
            {base64Images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                    <Image
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
                        blurDataURL={image.base64 || undefined}
                        className={styles.image}
                        loading={index < 2 ? "eager" : "lazy"}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
