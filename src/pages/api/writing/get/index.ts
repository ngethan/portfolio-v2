import type { NextApiRequest, NextApiResponse } from "next";

import type { BlogInterface } from "@/models/blog";
import getBlogModel from "@/models/blog";
import { requireMethod } from "@/utils/ServerUtils";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (requireMethod(req, res, "GET")) {
        try {
            const BlogModel = await getBlogModel();

            const data: BlogInterface[] = JSON.parse(
                JSON.stringify(await BlogModel.find())
            );
            data.forEach((blog: any) => {
                // eslint-disable-next-line no-underscore-dangle, no-param-reassign
                delete blog.__v;
            });

            res.status(200).json({
                success: true,
                data,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
    }
}
export default handler;
