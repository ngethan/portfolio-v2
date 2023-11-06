import type { NextApiRequest, NextApiResponse } from "next";

import { requireMethod } from "@/lib/ServerUtils";
import getBlogModel from "@/models/blog";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (requireMethod(req, res, "POST")) {
        try {
            const BlogModel = await getBlogModel();

            const data = new BlogModel({
                title: req.body.title || "",
                description: req.body.description || "",
                content: req.body.content || "",
                date: req.body.date || new Date(),
                metadata: req.body.metadata || {},
                views: req.body.views || 0,
                slug: req.body.slug,
                hidden: req.body.hidden || false,
            });
            await data.save();
            res.status(201).json({
                success: true,
                message: "Saved!",
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
    }
}
export default handler;
