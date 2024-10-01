import ImageGrid from "../../components/ui/image-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photos",
};

// const getBase64FromImage = (imagePath: string) => {
//     const imageBuffer = fs.readFileSync(imagePath);
//     const base64String = imageBuffer.toString("base64");
//     const mimeType = path.extname(imagePath).includes("png")
//         ? "image/png"
//         : "image/jpeg";
//     return `data:${mimeType};base64,${base64String}`;
// };

export default async function Page() {
    const images = [
        "DSCF6666.JPG",
        "DSCF6652.JPG",
        "DSCF6637.JPG",
        "DSCF6625.JPG",
        "DSCF6591.JPG",
        "DSCF6538.JPG",
        "DSCF6468.JPG",
        "DSCF6397.JPG",
        "DSCF6389.JPG",
        "DSCF6348.JPG",
        "DSCF6337.JPG",
        "DSCF6313.JPG",
        "DSCF6282.JPG",
        "DSCF6273.JPG",
        "DSCF6217.JPG",
        "DSCF6163.JPG",
        "DSCF6134.JPG",
        "DSCF6099.JPG",
        "DSCF6096.JPG",
        "DSCF6066.JPG",
        "DSCF4995.JPG",
        "DSCF4974.JPG",
        "DSCF4922.JPG",
        "DSCF4551.JPG",
        "DSCF4551 2.JPG",
        "DSCF4432.JPG",
        "DSCF4403.JPG",
        "DSCF4399.JPG",
        "DSCF4374.JPG",
        "DSCF4204.JPG",
        "DSCF3825.JPG",
        "DSCF3676.JPG",
        "DSCF3649.JPG",
        "DSCF3603.JPG",
        "DSCF3572.JPG",
        "DSCF3481.JPG",
        "DSCF2905.JPG",
        "DSCF2773.JPG",
        "DSCF2740.JPG",
        "CB1CE155-7421-4009-9964-B99E40C11750-28299-000005192D81407C.JPG",
    ];

    const imageGrid = await ImageGrid({ images });

    return (
        <div className="my-2 w-full">
            {imageGrid}
        </div>
    );
}
