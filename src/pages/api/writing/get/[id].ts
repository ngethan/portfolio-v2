import type { NextApiRequest, NextApiResponse } from "next";

import getBlogModel from "@/models/blog";
import { requireMethod } from "@/lib/ServerUtils";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (requireMethod(req, res, "POST")) {
    try {
      const BlogModel = await getBlogModel();

      const { id } = req.query;
      if (!id || id === "undefined") {
        res.status(400).json({
          success: false,
          message: "No ID provided",
        });
        return;
      }
      const data = await BlogModel.findById(id as string);
      // eslint-disable-next-line no-underscore-dangle
      data.__v = undefined;

      res.status(200).json({
        success: true,
        data,
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
