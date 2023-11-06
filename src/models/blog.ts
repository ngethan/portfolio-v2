import { Schema } from "mongoose";

import dbConnect from "@/lib/mongoose";

export type BlogInterface = {
    title: String;
    description: String;
    content: Object[];
    date: Date;
    metadata: Object;
    views: Number;
    slug: String;
    hidden: Boolean;
};

const blogSchema = new Schema<BlogInterface>({
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    content: { type: [Object], default: [] },
    date: { type: Date, required: true },
    metadata: { type: Schema.Types.Mixed },
    views: { type: Number, default: 0 },
    slug: { type: String, default: "", unique: true },
    hidden: { type: Boolean, default: false },
});

// @ts-ignore
let cached = global.blogModel;
if (!cached) {
    // @ts-ignore
    // eslint-disable-next-line no-multi-assign
    cached = global.blogModel = { model: null, promise: null };
}
export default async function getBlogModel() {
    if (cached.model) return cached.model;

    if (!cached.promise) {
        const mongoose = await dbConnect();
        cached.promise = mongoose.model("Blog", blogSchema);
    }
    cached.model = await cached.promise;
    return cached.model;
}
export { blogSchema };
