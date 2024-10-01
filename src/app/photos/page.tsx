import path from "path";
import fs from "fs";
import ImageGrid from "../../components/ui/image-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photos",
};

async function getImages() {
    const photosDir = path.join(process.cwd(), "public/assets/photos");
    const files = fs.readdirSync(photosDir);
    const images = files.filter((file) =>
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    ); // Only get image files

    return images.reverse();
}

export default async function Page() {
    const images = await getImages();

    return (
        <div className="my-2 w-full">
            <ImageGrid images={images} />
        </div>
    );
}
