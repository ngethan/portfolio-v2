import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
    const photosDir = path.join(process.cwd(), "public/assets/photos");
    const files = fs.readdirSync(photosDir);
    const images = files.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));

    return NextResponse.json(images);
}
